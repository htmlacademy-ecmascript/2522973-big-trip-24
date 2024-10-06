import PointView from '../view/trip-point-view.js'; //Точка маршрута
import EditorPointView from '../view/trip-edit-point-view.js';//Форма редактирования
import { render, replace } from '../framework/render.js';
//import { updateItem } from '../utils.js';
const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};
export default class PointPresenter {
  #container = null;
  #boardPoints = [];
  #pointsModel = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #point = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;
  //#pointsPresenter = new Map();
  constructor({container, pointsModel, onModeChange}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;
    this.#boardPoints = [...this.#pointsModel.points];
    const prevTaskComponent = this.#pointComponent;
    const prevTaskEditComponent = this.#pointEditComponent;


    this.#pointComponent = new PointView({ //Точка маршрута
      point: this.#point,
      offers: [...this.#pointsModel.getOffersById(point.type, point.offers)],
      destination: this.#pointsModel.getDestinationsById(this.#boardPoints[0].destination),
      onOpenEditButtonClick: this.#onOpenEditButtonClick
    });

    this. #pointEditComponent = new EditorPointView({ //Форма редактирования
      point: this.#point,
      allOffers: this.#pointsModel.getOffersByType(point.type),
      pointDestination: this.#pointsModel.getDestinationsById(point.destination),
      allDestination: this.#pointsModel.destinations,
      onCloseEditButtonClick: this.#onCloseEditButtonClick,
      onSubmitButtonClick: this.#onSubmitButtonClick
    });

    /*
    if (this.#mode === Mode.DEFAULT) {
      replace(this.#taskComponent, prevTaskComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#taskEditComponent, prevTaskEditComponent);
    }
*/

    /*
    #handleDataChange = (updatedPoint) => {
      this.points = updateItem(this.points, updatedPoint);
      this.#pointsPresenter.get(updatedPoint.id).init(updatedPoint);
    };
*/
    render(this.#pointComponent, this.#container);
  }

  #escKeyDownHandler = (evt) => {
    if(evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #onSubmitButtonClick = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #onOpenEditButtonClick = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #onCloseEditButtonClick = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #replacePointToForm = () => {
    replace(this.#pointEditComponent, this.#pointComponent);
  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
  };
}
