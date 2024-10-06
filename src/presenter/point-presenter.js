import PointView from '../view/trip-point-view.js'; //Точка маршрута
import EditorPointView from '../view/trip-edit-point-view.js';//Форма редактирования
import { render, replace } from '../framework/render.js';

export default class PointPresenter {
  #container = null;
  #boardPoints = [];
  #pointsModel = null;

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init(point) {
    //this.#point = point;
    this.#boardPoints = [...this.#pointsModel.points];

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

    const editPointComponent = new EditorPointView({ //Форма редактирования
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
