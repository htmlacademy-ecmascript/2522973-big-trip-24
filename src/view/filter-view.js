//import { FiltersPoint } from '../utils-constant/constant.js';
import AbstractView from '../framework/view/abstract-view';
import { capitalizeFirstLetter } from '../utils-constant/utils.js';

const generateFilterButton = (filter, currentFilterType) => {

  const {type, name} = filter;

  return (`
    <div class="trip-filters__filter">
      <input
        id="filter-${name}"
        class="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        value="${type}"
        ${type === currentFilterType ? 'checked' : ''}
      >
      <label class="trip-filters__filter-label" for="filter-${name}" value="${type}">${capitalizeFirstLetter(type)}</label>
    </div>
  `);
};

function createFilterTemplate(filters, currentFilterType) {

  return (
    `<div class="trip-main__trip-controls  trip-controls">
      <div class="trip-controls__filters">
        <h2 class="visually-hidden">Filter events</h2>
        <form class="trip-filters" action="#" method="get">

        ${filters.map((filter) => generateFilterButton(filter, currentFilterType)).join('')}
          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
      </div>
    </div>`
  );
}

export default class FilterView extends AbstractView{

  #filters = null;
  #currentFilterType = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}){
    super();
    this.#filters = filters;
    this.#currentFilterType = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element
      .addEventListener('change', this.#eventTypeChangeHandler);
  }

  get template() {
    return createFilterTemplate(this.#filters, this.#currentFilterType);
  }

  #eventTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
