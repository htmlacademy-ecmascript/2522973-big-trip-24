import TripInfoView from '../view/info-view.js'; //Инфо в шапке про маршрут
import SortView from '../view/sort-view.js'; //Сортировка DAY, EVENT, PRICE
import EmptyListView from '../view/message-view.js';//Пустой лист без поинтов
import ListPointView from '../view/list-point-view.js';
import PointPresenter from './point-presenter.js';
import NewPointPresenter from './new-point-presener.js';
import PreloaderView from '../view/preloader.js';
import { render, remove, RenderPosition } from '../framework/render.js';
import { sortByPrice, sortByTime, sortByDay } from '../utils-constant/utils.js';
import { SortType, UpdateType, UserAction, POINT_COUNT_PER_STEP, FilterType, filter } from '../utils-constant/constant.js';
const siteMainElement = document.querySelector('.page-body');
//const siteEventsElement = siteMainElement.querySelector('.trip-events');
const siteTripInfo = siteMainElement.querySelector('.trip-info'); // Инфо в шапке про маршрут

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;
  #filterModel = null;
  #sortComponent = null; //Приватное св-во Сортировки
  #pointListComponent = new ListPointView();
  #infoView = new TripInfoView(); //Информация в шапке
  #pointPresenters = new Map();
  #loadingComponent = new PreloaderView(); //Serv ПРЕЛОАДЕР
  #renderedPointCount = POINT_COUNT_PER_STEP; //Поинты беруться отсюда
  #currentSortType = SortType.DAY;
  #noPointComponent = null;
  #newPointPresenter = null;
  #filterType = FilterType.EVERYTHING;
  #isLoading = true;

  constructor({container, pointsModel, filterModel, onNewPointDestroy}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

    this.#newPointPresenter = new NewPointPresenter({
      pointListComponent: this.#container,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy,
      onReset: this.#handleFormReset
    });
  }

  get points() { //!!!!!!!!!!!!!!
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;

    const filteredPoint = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.TIME:
        return filteredPoint.sort(sortByTime);
      case SortType.PRICE:
        return filteredPoint.sort(sortByPrice);
    }
    return filteredPoint.sort(sortByDay);
  }

  get error() {
    return this.#pointsModel.error;
  }

  init() {
    this.#renderBoard();
  }


  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filterType = FilterType.EVERYTHING;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointPresenter.init();
    if (this.#noPointComponent) {
      remove(this.#noPointComponent);
    }
  }

  #renderPreloader() { //Прелоадер
    render(this.#loadingComponent, this.#container, RenderPosition.AFTERBEGIN);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };


  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        //remove(this.#sortComponent);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        //remove(this.#sortComponent);
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
        //remove(this.#sortComponent);
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderBoard();
        remove(this.#sortComponent); //НАШЕЛ ОШИБКУ!!!!!!!!!
        break;
    }
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderInfo() {
    render(this.#infoView, siteTripInfo); // Отображение информации в шапке про маршрут
  }

  #handleSortTypeChange = (sortType) => { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#currentSortType = sortType;
    this.#clearBoard({resetRenderedPointCount: true});
    this.#renderBoard();
    remove(this.#sortComponent);
  };

  #renderSort() { //Сортировка
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#container);
  }

  #handleFormReset = () => {
    if (this.points.length === 0) {
      remove(this.#sortComponent);
      this.#renderNoPoint();
    }
  };

  #renderNoPoint() {
    this.#noPointComponent = new EmptyListView({filterType: this.#filterType});
    render(this.#noPointComponent, this.#container);
  }

  #clearBoard({resetSortType = false} = {}) { //Очитска доски
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    remove(this.#sortComponent);
    remove(this.#loadingComponent);
    if (this.#noPointComponent) {
      remove(this.#noPointComponent);
    }
    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderPointsList() {
    render(this.#pointListComponent, this.#container);
    this.points.forEach((point) => this.#renderPoint(point));
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      container: this.#container,
      pointsModel: this.#pointsModel,
      onPointChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderBoard() { // Отображение всех остальных компонентов
    this.#renderSort();
    if (this.#isLoading) { //Прелоадер, отстутвует надпись , что нет точек на доске
      this.#renderPreloader();
      return;
    }
    this.#renderInfo();
    this.#renderPointsList();
  }
}
