//import {createElement} from '../render.js';
import AbstractView from '../framework/view/abstract-view.js';
import { SortType } from '../utils-constant/constant.js';

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const getSortType = (currentSortType) => Object.values(SortType).map((type) => (`
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}"
    class="trip-sort__input visually-hidden"
    type="radio"
    name="trip-sort"
    value="sort-${type}"
    data-sort-type = ${type}
    ${(type === SortType.EVENT || type === SortType.OFFERS) ? 'disabled' : ''}
    ${type === currentSortType ? 'checked' : ''}
    >
    <label class="trip-sort__btn"
    for="sort-${type}"
    >
      ${capitalizeFirstLetter(type)}
    </label>
  </div>
`)
).join('');

const createSortTemplate = (currentSortType) => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${getSortType(currentSortType)}
  </form>`
);

export default class SortView extends AbstractView{

  #onSortButtonClick = null;
  #currentSortType = SortType.DAY;

  constructor({onSortButtonClick, currentSortType}){
    super();
    this.#onSortButtonClick = onSortButtonClick;
    this.#currentSortType = currentSortType;
    this.#setEventListeners();
  }

  get template() {
    return createSortTemplate(this.#currentSortType);
  }

  #sortButtonClickHandler = (evt) => {
    if(evt.target.classList.contains('trip-sort__input')){
      this.#onSortButtonClick(evt.target.dataset.sortType);
    }
  };

  #setEventListeners = () => {
    this.element
      .addEventListener('click', this.#sortButtonClickHandler);
  };
}
