import AbstractView from '../framework/view/abstract-view.js';
import { NO_POINT_TEXT } from '../utils-constant/constant.js';

function createEmptyListTemplate(filterType){
  return `<p class="trip-events__msg">${NO_POINT_TEXT[filterType]}</p>`;
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
