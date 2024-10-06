import TripInfoView from '../view/trip-info-view.js'; //Инфо в шапке про маршрут
import SortView from '../view/trip-event-view.js'; //Сортировка DAY, EVENT, PRICE
//import PointView from '../view/trip-point-view.js'; //Точка маршрута
//import EditorPointView from '../view/trip-edit-point-view.js';//Форма редактирования
import EmptyListView from '../view/list-message-view.js';//Пустой лист без поинтов
import PointPresenter from './point-presenter.js';
import { render } from '../framework/render.js';
import { EMPTY_LIST } from '../constant/const.js';

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

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#renderBoard();
  }

  #renderInfo() {
    render(this.#infoView, siteTripInfo); // Отображение информации в шапке про маршрут
  }

  #renderSort() {
    render(this.#sortView, siteEventsElement); //Сортировка Day, Price...
  }

  #renderPoints(point) {
    const pointPresenter = new PointPresenter({
      container: this.#container,
      pointsModel: this.#pointsModel
    });
    pointPresenter.init(point);
  }

  #renderBoard() { //Отображение всех остальных компонентов
    this.#renderInfo();
    this.#renderSort();
    this.boardOffers = [...this.#pointsModel.offers];
    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoints(this.#boardPoints[i]);
    }

    if (this.#boardPoints.length === 0) {
      render(this.#emptyList, this.#container);
    }
  }
}


