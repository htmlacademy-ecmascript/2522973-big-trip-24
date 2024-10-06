import TripInfoView from '../view/trip-info-view.js'; //Инфо в шапке про маршрут
import SortView from '../view/trip-event-view.js'; //Сортировка DAY, EVENT, PRICE
//import PointView from '../view/trip-point-view.js'; //Точка маршрута
//import EditorPointView from '../view/trip-edit-point-view.js';//Форма редактирования
import EmptyListView from '../view/list-message-view.js';//Пустой лист без поинтов
import PointPresenter from './point-presenter.js';
import { render } from '../framework/render.js';
import { EMPTY_LIST } from '../constant/const.js';
import { updateItem } from '../utils.js';

const siteMainElement = document.querySelector('.page-body');
const siteTripInfo = siteMainElement.querySelector('.trip-info'); // Инфо в шапке про маршрут
const siteEventsElement = siteMainElement.querySelector('.trip-events');

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;
  #boardPoints = [];
  #emptyList = new EmptyListView({message: EMPTY_LIST.EVERYTHING}); //Нет поинтов
  #sortView = new SortView(); //Приватное св-во Сортировки
  #infoView = new TripInfoView(); //Информация в шапке
  #pointPresenters = new Map();
  #points = [];
  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#renderBoard();
  }

  #handleDataChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderInfo() {
    render(this.#infoView, siteTripInfo); // Отображение информации в шапке про маршрут
  }

  #renderSort() {
    render(this.#sortView, siteEventsElement); //Сортировка Day, Price...
  }

  #renderPoints() {
    this.#pointsModel.forEach((point) => {
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

  #renderBoard() { //Отображение всех остальных компонентов
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


