import PointView from '../view/point-view.js'; //Точка маршрута
import EditorPointView from '../view/editor-point-view.js';//Форма редактирования
import { render, replace, remove } from '../framework/render.js';
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
  #handleDataChange = null;
  #mode = Mode.DEFAULT;
  //#pointsPresenter = new Map();
  constructor({container, pointsModel, onPointChange, onModeChange}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#handleModeChange = onModeChange;
    this.#handleDataChange = onPointChange;
  }

  init(point) {
    this.#point = point;
    this.#boardPoints = [...this.#pointsModel.points];

    const prevTaskComponent = this.#pointComponent;
    const prevTaskEditComponent = this.#pointEditComponent;


    this.#pointComponent = new PointView({ //Точка маршрута
      point: this.#point,
      offers: [...this.#pointsModel.getOffersById(point.type, point.offers)],
      destination: this.#pointsModel.getDestinationsById(point.destination),
      onFavoriteClick: this.#onFavoriteClick,
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

    if (prevTaskComponent === null || prevTaskEditComponent === null) {
      render(this.#pointComponent, this.#container);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevTaskComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevTaskEditComponent);
    }

    remove(prevTaskComponent);
    remove(prevTaskEditComponent);
    render(this.#pointComponent, this.#container);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  }

  #escKeyDownHandler = (evt) => {
    if(evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      //document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #pointEditHandler = () => {
    this.#replacePointToForm();
  };

  #pointSubmitHandler = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToPoint();
  };

  #pointCloseHandler = () => {
    this.#replaceFormToPoint();
  };

  #onFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
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
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler); // ЕСЛИ УБРАТЬ, ТО БУДЕТ ОДНА ФОРМА, НО С ОШИБКОЙ!!!!
    this.#mode = Mode.DEFAULT;
  };
}
