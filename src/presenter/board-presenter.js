import TripInfoView from '../view/info-view.js'; //Инфо в шапке про маршрут
import SortView from '../view/sort-view.js'; //Сортировка DAY, EVENT, PRICE
import EmptyListView from '../view/message-view.js';//Пустой лист без поинтов
import PointPresenter from './point-presenter.js';
import EventsList from '../view/events-list.js';
import { render } from '../framework/render.js';
import { sortByPrice, sortByTime, sortByDay, updateItem } from '../utils-constant/utils.js';
import { SortType, EMPTY_LIST } from '../utils-constant/constant.js';
const siteMainElement = document.querySelector('.page-body');

const siteTripInfo = siteMainElement.querySelector('.trip-info'); // Инфо в шапке про маршрут
const siteEventsElement = siteMainElement.querySelector('.trip-events');

//const TASK_COUNT_PER_STEP = 8;

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;
  #boardPoints = [];
  #eventsListComponent = new EventsList(); //!!!!!!!!!!!!!!
  #emptyList = new EmptyListView({message: EMPTY_LIST.EVERYTHING}); //Нет поинтов
  #sortView = null; //Приватное св-во Сортировки
  #infoView = new TripInfoView(); //Информация в шапке
  #pointPresenters = new Map();
  #points = [];

  #currentSortType = SortType.DAY; //!!!!!!!!!!!!!!!!!!!!!!!!!!
  #sourcedBoardTasks = []; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points].sort(sortByDay);
    this.#sourcedBoardTasks = [...this.#pointsModel.points];
    this.#renderBoard();
  }

  #handleDataChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#sourcedBoardTasks = updateItem(this.#sourcedBoardTasks, updatedPoint); //!!!!!!!!!!!!!!!!!!!!!!
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderInfo() {
    render(this.#infoView, siteTripInfo); // Отображение информации в шапке про маршрут
  }

  #sortPoints(sortType) { //!!!!!!!!!!!!!!!!!!!!!!
    // 2. Этот исходный массив задач необходим,
    // потому что для сортировки мы будем мутировать
    // массив в свойстве _boardTasks
    switch (sortType) {
      case 'time':
        this.#boardPoints.sort(sortByTime);
        break;
      case 'price':
        this.#boardPoints.sort(sortByPrice);
        break;
      default:
        // 3.  А когда пользователь захочет "вернуть всё, как было",
        // мы просто запишем в _boardTasks исходный массив
        this.#boardPoints = [...this.#sourcedBoardTasks].sort(sortByDay);
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPoints(); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.#renderEventsList(); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //console.log(this.#clearPoints)
  };

  #clearPoints() { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderEventsList() {
    render(this.#eventsListComponent, this.#container);
    this.#renderPoints();
  }

  #renderSort() {
    this.#sortView = new SortView({
      onSortTypeChange: this.#handleSortTypeChange //!!!!!!!!!!!!!!!!!!!!!!!!
    });

    render(this.#sortView, siteEventsElement); //Сортировка Day, Price...
  }

  #renderPoints() {
    this.#boardPoints.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      container: this.#container,
      pointsModel: this.#pointsModel,
      onPointChange: this.#handleDataChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderBoard() { // Отображение всех остальных компонентов
    this.#renderInfo();
    this.#renderSort();
    this.boardOffers = [...this.#pointsModel.offers];
    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoint(this.#boardPoints[i]);
    }

    if (this.#boardPoints.length === 0) {
      render(this.#emptyList, this.#container);
    }
  }
}
