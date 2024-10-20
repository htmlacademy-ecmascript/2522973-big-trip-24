import TripInfoView from '../view/info-view.js'; //Инфо в шапке про маршрут
import SortView from '../view/sort-view.js'; //Сортировка DAY, EVENT, PRICE
import EmptyListView from '../view/message-view.js';//Пустой лист без поинтов
import PointPresenter from './point-presenter.js';
import NewPointPresenter from './new-point-presener.js';
import ListPoint from '../view/list-point-view.js';
import { render, remove } from '../framework/render.js';
import { sortByPrice, sortByTime, sortByDay } from '../utils-constant/utils.js';
import { SortType, EMPTY_LIST, UpdateType, UserAction, POINT_COUNT_PER_STEP, FiltersPoint, filter} from '../utils-constant/constant.js';
const siteMainElement = document.querySelector('.page-body');

const siteTripInfo = siteMainElement.querySelector('.trip-info'); // Инфо в шапке про маршрут
const siteEventsElement = siteMainElement.querySelector('.trip-events');

//const POINT_COUNT_PER_STEP = 6;

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;
  #filterModel = null;
  #listContainer = new ListPoint();
  #emptyList = new EmptyListView({message: EMPTY_LIST.EVERYTHING}); //Нет поинтов
  #sortComponent = null; //Приватное св-во Сортировки
  #infoView = new TripInfoView(); //Информация в шапке
  #pointPresenters = new Map();
  #points = [];
  #renderedPointCount = POINT_COUNT_PER_STEP;
  #currentSortType = SortType.DAY;
  #noPointComponent = null;
  #newPointPresenter = null;
  #filterType = FiltersPoint.EVERYTHING;
  //#sourcedBoardTasks = []; //!!!!!!!!!!!!!

  constructor({container, pointsModel, filterModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

    this.#newPointPresenter = new NewPointPresenter({
      allOffers: this.offers,
      allDestinations: this.destinations,
      pointListContainer: this.#listContainer.element,
      onDataChange: this.#handleViewAction,
      //onDestroy: onNewPointDestroy
    });
  }

  get points() { //!!!!!!!!!!!!!!
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;

    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.TIME:
        return filteredPoints.sort(sortByTime);
      case SortType.PRICE:
        return filteredPoints.sort(sortByPrice);
    }
    return filteredPoints.sort(sortByDay);
  }

  get destinations() {
    return this.#pointsModel.destinations;
  }

  get offers() {
    return this.#pointsModel.offers;
  }

  init() {
    this.#renderBoard();
  }

  createPoint() {
    this.#currentSortType = SortType.DEFAULT;
    this.#filterModel.setFilter(UpdateType.MAJOR, FiltersPoint.EVERYTHING);
    this.#newPointPresenter.init();
  }

  #renderNoPoint() {
    this.#noPointComponent = new EmptyListView({filterType: this.#filterType});
    render(this.#noPointComponent, this.#container);
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
        this.#pointPresenters.get(data.id).init(data, this.offers, this.destinations);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
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
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, siteEventsElement); //Сортировка Day, Price...
  }

  #clearBoard({resetSortType = false} = {}) {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    remove(this.#sortComponent);

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }

    if (this.#noPointComponent) {
      remove(this.#noPointComponent);
    }

    const pointCount = this.points.length;

    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#emptyList);

    if (resetSortType) {
      this.#currentSortType = SortType.DEFAULT;
    }
  }

  #renderPoints(points) {
    points.forEach((point) => this.#renderPoint(point));
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
    this.#renderInfo();
    //this.#renderSort();
    const points = this.points;
    const pointCount = points.length;
    if (pointCount === 0) {
      this.#renderNoPoint();
      return;
    }

    //this.boardOffers = [...this.#pointsModel.offers];

    this.#renderSort();
    //this.#renderPointList();
    //render(this.#eventsListComponent);
    this.#renderPoints(points.slice(0, Math.min(pointCount, this.#renderedPointCount)));
  }
}
