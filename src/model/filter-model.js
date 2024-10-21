import Observable from '../framework/observable.js';
import { FiltersPoint } from '../utils-constant/constant';

export default class FilterModel extends Observable {
  #filter = FiltersPoint.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  setFilter(updateType, filter) {
    this.#filter = filter;
    this._notify(updateType, filter);
  }
}
