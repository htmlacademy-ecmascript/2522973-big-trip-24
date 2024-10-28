import AbstractView from '../framework/view/abstract-view.js';
import { capitalizeFirstLetter } from '../utils-constant/utils.js';
import { getDuration, DATE_FORMAT, humanizePointDate } from '../utils-constant/date-time.js';

const createListTemplate = (point, offers, destination)=> {
  const { basePrice, type, isFavorite, dateFrom, dateTo } = point;
  const typeName = capitalizeFirstLetter(type);
  const favoriteClassName = isFavorite ? ' event__favorite-btn--active' : '';
  const createOfferItemTemplate = (offerItem) => `
    <li class="event__offer">
      <span class="event__offer-title">${offerItem.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offerItem.price}</span>
    </li>
  `;
  const datePoint = humanizePointDate(dateFrom, DATE_FORMAT.DATE_FORMAT);
  const createOffersTemplate = offers.map((offerItem)=>createOfferItemTemplate(offerItem)).join('');
  return `(
            <li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${datePoint}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${typeName} ${destination.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFrom}">${humanizePointDate(dateFrom, DATE_FORMAT.TIME)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dateTo}">${humanizePointDate(dateTo, DATE_FORMAT.TIME)}</time>
                  </p>
                  <p class="event__duration">${getDuration(dateFrom,dateTo)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${createOffersTemplate}
                </ul>
                <button class="event__favorite-btn${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>
  )`;
};
export default class PointView extends AbstractView{
  #point = null;
  #offers = null;
  #destination = null;
  #onOpenEditButtonClick = null;
  #onFavoriteClick = null;
  constructor({point, offers, destination, onOpenEditButtonClick, onFavoriteClick}) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destination = destination;
    this.#onOpenEditButtonClick = onOpenEditButtonClick;
    this.#setEventListeners();
    this.#onFavoriteClick = onFavoriteClick;
    this.element.querySelector('.event__favorite-btn').
      addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createListTemplate(this.#point, this.#offers, this.#destination);
  }

  #setEventListeners() {
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#openEditButtonClickHandler);
  }

  #openEditButtonClickHandler = (evt) => {
    evt.preventDefault(evt);
    this.#onOpenEditButtonClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#onFavoriteClick();
  };
}
