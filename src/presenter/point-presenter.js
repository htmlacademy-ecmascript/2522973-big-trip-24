import PointView from '../view/point-view.js';
import EditorPointView from '../view/editor-point-view.js';
import { render, replace, remove } from '../framework/render.js';
import { UserAction, UpdateType, MODE_TYPE } from '../utils-constant/constant.js';
import { isDatesSame } from '../utils-constant/date-time.js';

export default class PointPresenter {
  #pointListComponent = null;
  #pointsModel = null;
  #point = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #handleModeChange = null;
  #handleDataChange = null;
  #mode = MODE_TYPE.DEFAULT;

  constructor({pointListComponent, pointsModel, onDataChange, onModeChange}) {
    this.#pointListComponent = pointListComponent;
    this.#pointsModel = pointsModel;
    this.#handleModeChange = onModeChange;
    this.#handleDataChange = onDataChange;
  }

  init(point) {
    this.#point = point;
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      offers: [...this.#pointsModel.getOffersById(point.type, point.offers)],
      destination: this.#pointsModel.getDestinationsById(point.destination),
      onFavoriteClick: this.#handleFavoriteClick,
      onOpenEditButtonClick: this.#handleOpenFormClick
    });

    this. #pointEditComponent = new EditorPointView({
      point: this.#point,
      destinationPoint: this.#pointsModel.getDestinationsById(this.#point.destination),
      typeOffers: this.#pointsModel.getOffersByType(this.#point.type),
      allDestinations: this.#pointsModel.destinations,
      allOffers: this.#pointsModel.offers,
      onFormSubmit: this.#handleFormSubmit,
      onEditRollUp: this.#handleEditRollUp,
      onDeleteClick: this.#handleDeleteClick,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListComponent);
      return;
    }

    if (this.#mode === MODE_TYPE.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === MODE_TYPE.EDITING) {
      replace(this.#pointComponent, prevPointEditComponent);
      this.#mode = MODE_TYPE.DEFAULT;
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  setSaving() {
    if (this.#mode === MODE_TYPE.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === MODE_TYPE.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === MODE_TYPE.DEFAULT) {
      this.#pointComponent.shake();
      return;
    }
    const resetFormState = () => {
      this.#pointEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };
    this.#pointEditComponent.shake(resetFormState);
  }

  resetView() {
    if (this.#mode !== MODE_TYPE.DEFAULT) {
      this.#pointEditComponent.reset();
      this.#replaceFormToPoint();
    }
  }

  #escKeyDownHandler = (evt) => {
    if(evt.key === 'Escape') {
      evt.preventDefault();
      this.#pointEditComponent.reset();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleFormSubmit = (update) => {
    const isPatchUpdate = isDatesSame(this.#point.dateFrom, update.dateFrom) &&
    isDatesSame(this.#point.dateTo, update.dateTo) &&
    (parseInt(this.#point.basePrice, 10) === parseInt(update.basePrice, 10));

    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      isPatchUpdate ? UpdateType.PATCH : UpdateType.MINOR,
      update
    );
  };

  #handleDeleteClick = (point) => {
    this.#handleDataChange(
      UserAction.DELETE_POINT,
      UpdateType.MINOR,
      point,
    );
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      {...this.#point, isFavorite: !this.#point.isFavorite},
    );
  };

  #handleOpenFormClick = () => {
    this.#replacePointToForm();
  };

  #handleEditRollUp = () => {
    this.#replaceFormToPoint();
  };

  #replacePointToForm = () => {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = MODE_TYPE.EDITING;
  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = MODE_TYPE.DEFAULT;
  };
}
