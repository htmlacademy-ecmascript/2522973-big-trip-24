import TripInfoView from '../view/trip-info-view.js'; //Инфо в шапке про маршрут
import SortView from '../view/trip-event-view.js'; //Сортировка DAY, EVENT, PRICE
import PointView from '../view/trip-point-view.js'; //Точка маршрута
import OffersView from '../view/trip-edit-point-view.js';//Форма редактирования
import EmptyListView from '../view/list-message-view.js';//Пустой лист без поинтов

import { render, replace } from '../framework/render.js';
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

  #renderPoints(point) { //Отображение точки маршрута с обработчиками, форма редактирования внутри!!!
    const escKeyDownHandler = (evt) => {
      if(evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    const onOpenEditButtonClick = () => {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    };
    const onCloseEditButtonClick = () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    };
    const onSubmitButtonClick = () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    };
    const pointComponent = new PointView({ //Точка маршрута
      point,
      offers: [...this.#pointsModel.getOffersById(point.type, point.offers)],
      destination: this.#pointsModel.getDestinationsById(this.#boardPoints[0].destination),
      onOpenEditButtonClick
    });

    const editPointComponent = new OffersView({ //Форма редактирования
      point,
      allOffers: this.#pointsModel.getOffersByType(point.type),
      pointDestination: this.#pointsModel.getDestinationsById(point.destination),
      allDestination: this.#pointsModel.destinations,
      onCloseEditButtonClick,
      onSubmitButtonClick
    });

    function replacePointToForm() {
      replace(editPointComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, editPointComponent);
    }
    render(pointComponent, this.#container);
  }

  #renderBoard() { //Отображение всех остальных компонентов
    render(this.#infoView, siteTripInfo); // Отображение информации в шапке про маршрут
    render(this.#sortView, siteEventsElement); //Сортировка Day, Price...
    this.boardOffers = [...this.#pointsModel.offers];
    for (let i = 0; i < this.#boardPoints.length; i++) {
      this.#renderPoints(this.#boardPoints[i]);
    }

    if (this.#boardPoints.length === 0) {
      render(this.#emptyList, this.#container);
    }
  }
}


