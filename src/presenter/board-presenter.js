import TripInfoView from '../view/trip-info-view.js'; //Инфо в шапке про маршрут
import PointView from '../view/trip-point-view.js'; //Точка маршрута
import OffersView from '../view/trip-edit-point-view.js';//Форма редактирования
import { render, replace } from '../framework/render.js';
const siteMainElement = document.querySelector('.page-body');
const siteTripInfo = siteMainElement.querySelector('.trip-info'); // Инфо в шапке про маршрут
export default class BoardPresenter {
  #container = null;
  #pointsModel = null;
  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {

    render(new TripInfoView(), siteTripInfo); // Отображение информации в шапке про маршрут
    this.boardPoints = [...this.#pointsModel.points];

    this.boardOffers = [...this.#pointsModel.offers];
    for (let i = 0; i < this.boardPoints.length; i++) {
      this.#renderPoints(this.boardPoints[i]);
    }
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
      destination: this.#pointsModel.getDestinationsById(this.boardPoints[0].destination),
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
}

