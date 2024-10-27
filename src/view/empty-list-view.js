import AbstractView from '../framework/view/abstract-view.js';
import { NO_POINT_TEXT } from '../utils-constant/constant.js';

function createEmptyListTemplate(filterType){
  const listEmptyValue = NO_POINT_TEXT[filterType];
  return `<p class="trip-events__msg">${listEmptyValue}</p>`;
}

export default class EmptyListView extends AbstractView{
  #filterType = null;

  constructor({filterType}){
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createEmptyListTemplate(this.#filterType);
  }
}
