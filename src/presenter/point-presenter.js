import PointView from '../view/point-view.js'; // Точка маршрута
import EditorPointView from '../view/editor-point-view.js';//Форма редактирования
import { render, replace, remove } from '../framework/render.js';
import { UserAction, UpdateType } from '../utils-constant/constant.js';
import { isDatesSame } from '../utils-constant/date-time.js';


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
  #pointsPresenter = new Map();
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

    this. #pointEditComponent = new EditorPointView({ //Форма редактирования!!!
      routePoint: this.#point,
      destinationRoutePoint: this.#pointsModel.getDestinationsById(this.#point.destination),
      typeOffers: this.#pointsModel.getOffersByType(this.#point.type),
      allDestinations: this.#pointsModel.destinations,
      allOffers: this.#pointsModel.offers,
      onFormSubmit: this.#handleFormSubmit,
      onEditRollUp: this.#handleEditRollUp,
      onDeleteClick: this.#handleDeleteClick,
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
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleFormSubmit = (update) => {
    const isPatchUpdate = isDatesSame(this.#point.dateFrom, update.dateFrom) && isDatesSame(this.#point.dateTo, update.dateTo) && (parseInt(this.#point.basePrice, 10) === parseInt(update.basePrice, 10));
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      isPatchUpdate ? UpdateType.PATCH : UpdateType.MINOR,
      update
    );
  };

  #handleFormClick = (update) => {
    const isMinorUpdate = !isDatesSame(this.#point.dateFrom, update.dateFrom) ||
    !isDatesSame(this.#point.dateTo, update.dateTo) ||
    this.#point.basePrice !== update.basePrice;

    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
      update,
    );
    this.#replaceFormToPoint();
  };

  #handleDeleteClick = (point) => { //Удаление только первого эл-та
    this.#handleDataChange(
      UserAction.DELETE_POINT,
      UpdateType.MINOR,
      point,
    );
    //this.#replaceFormToPoint(); //Можно и удалить
  };

  #onFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      {...this.#point, isFavorite: !this.#point.isFavorite},
    );
  };

  #onOpenEditButtonClick = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #onCloseEditButtonClick = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleEditRollUp = () => {
    this.#replaceFormToPoint();
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
