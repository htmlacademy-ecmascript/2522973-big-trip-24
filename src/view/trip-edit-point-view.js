import AbstractView from '../framework/view/abstract-view.js';
import { TYPES } from '../constant/const.js';
import { createOfferItemTemplate, createTypeGroupTemplate } from '../utils.js';

function createPicturesTemplate(photo) {
  return photo.reduce((acc, {src}) => {
    acc += `
               <img class="event__photo" src="${src}" alt="Event photo">
  `;
    return acc;
  }, '');
}

function createAddPointTemplate(point, allOffers, allDestination, pointDestination) {
  const { basePrice, type } = point;
  const typeName = type[0].toUpperCase() + type.slice(1, type.length);
  const { name, description, pictures } = pointDestination;

  const createAllOffers = allOffers.offers
    .map((offer) => {
      const checkedClassName = point.offers.includes(offer.id) ? 'checked' : '';
      return createOfferItemTemplate(allOffers.type, offer.title, offer.price, checkedClassName);
    }).join('');

  const createDestinationTemplate = allDestination
    .map((item) => `<option value="${item.name}"></option>`).join('');

  const createTypeList = TYPES
    .map((group) => {
      const checkedClassName = group === typeName ? 'checked' : '';
      return createTypeGroupTemplate(group, checkedClassName);
    }).join('');

  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${createTypeList}
            </fieldset>
          </div>
        </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${typeName}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${createDestinationTemplate}
          </datalist>
        </div>
        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
        </div>
        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
        </div>
        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
            ${createAllOffers}
          </div>
        </section>
        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>
           <div class="event__photos-container">
                        <div class="event__photos-tape">
          ${createPicturesTemplate(pictures)}
                        </div>

        </section>
      </section>
    </form>
  </li>`
  );
}
export default class OffersView extends AbstractView{
  #point = null;
  #allOffers = [];
  #allDestination = [];
  #pointDestination = null;
  #onCloseEditButtonClick = null;
  #onSubmitButtonClick = null;
  constructor({point, allOffers, allDestination, pointDestination, onCloseEditButtonClick, onSubmitButtonClick}) {
    super();
    this.#point = point;
    this.#allOffers = allOffers;
    this.#allDestination = allDestination;
    this.#pointDestination = pointDestination;
    this.#onCloseEditButtonClick = onCloseEditButtonClick;
    this.#onSubmitButtonClick = onSubmitButtonClick;
    this.#setEventListeners();
  }

  get template() {
    return createAddPointTemplate(this.#point, this.#allOffers, this.#allDestination, this.#pointDestination);
  }

  #setEventListeners() {
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#closeEditButtonClickHandler);


    this.element
      .querySelector('.event__save-btn')
      .addEventListener('submit', this.#submitButtonClickHandler);
  }

  #closeEditButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onCloseEditButtonClick();
  };

  #submitButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitButtonClick();
  };
}
