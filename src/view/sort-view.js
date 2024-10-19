import AbstractView from '../framework/view/abstract-view.js';
import {SortType} from '../utils-constant/constant.js';

function capitalizeText(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const DISABLED_SORT_TYPES = [SortType.OFFERS, SortType.EVENT];

function createSortItemTemplate(type, currentSortType){
  return `
      <div class="trip-sort__item  trip-sort__item--${type}">
        <input id="sort-${type}"
        class="trip-sort__input visually-hidden"
        data-sort-type="${type}"
        type="radio"
        name="trip-sort"
        value="sort-${type}"
        ${DISABLED_SORT_TYPES.includes(type) ? 'disabled' : ''}
        ${type === currentSortType ? 'checked' : ''}>
        <label class="trip-sort__btn" for="sort-${type}" >${capitalizeText(type)}</label>
      </div>
  `;
}

function createSortingTemplate(currentSortType) {
  return (`
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${Object.values(SortType).map((type) => createSortItemTemplate(type, currentSortType)).join('')}
    </form>
    `);
}
export default class SortView extends AbstractView {
  #handleSortTypeChange = null;
  #currentSortType = null;

  constructor({currentSortType, onSortTypeChange}) {
    super();
    this.#currentSortType = currentSortType;
    this.#handleSortTypeChange = onSortTypeChange;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortingTemplate(this.#currentSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    if (!evt.target.matches('input[name="trip-sort"]')) {
      return;
    }
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };

}
