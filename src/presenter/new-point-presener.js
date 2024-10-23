import {remove, render, RenderPosition} from '../framework/render.js';
import FormPointView from '../view/add-point-view.js';
//import {nanoid} from 'nanoid';
import {UserAction, UpdateType, BLANK_POINT} from '../utils-constant/constant.js';

export default class NewPointPresenter {
  #pointListComponent = null;
  #point = BLANK_POINT;
  #handleDataChange = null;
  #handleDestroy = null;
  #handleReset = null;
  #pointEditComponent = null;
  #pointsModel = null;

  constructor({pointListComponent, pointsModel, onDataChange, onDestroy, onReset}) {
    this.#pointListComponent = pointListComponent;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
    this.#handleReset = onReset;
    this.#pointsModel = pointsModel;

  }

  init() {
    if (this.#pointEditComponent !== null) {
      return;
    }
    this.#pointEditComponent = new FormPointView({
      point: this.#point,
      destinationPoint: this.#pointsModel.getDestinationsById(this.#point.destination),
      typeOffers: this.#pointsModel.getOffersByType(),
      allDestinations: this.#pointsModel.destinations,
      allOffers: this.#pointsModel.offers,
      onFormSubmit: this.#handleFormSubmit,
      onEditRollUp: this.#handleDeleteClick,
      onDeleteClick: this.#handleDeleteClick
    });
    render(this.#pointEditComponent, this.#pointListComponent, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    console.log(this.#point)
  }

  destroy() {
    if (this.#pointEditComponent === null) {
      return;
    }
    this.#handleDestroy();
    remove(this.#pointEditComponent);
    this.#pointEditComponent = null;
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point,
    );
    this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
