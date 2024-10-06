import { render } from '../framework/render';
import FilterView from '../view/filter-view';
import { filter, FilterType } from '../constant/filter-const';

const filtersContainer = document.querySelector('.trip-controls__filters');

export default class FiltersPresenter {
  #pointsModel = null;
  #filters = [];

  constructor({pointsModel}) {
    this.#pointsModel = pointsModel;
    this.#filters = Object.entries(filter)
      .map(([FilterType, filtersPoint], index) => ({
        type: filter,
        isChecked: index === 0,
        isDisabled: FiltersPoint(this.#pointsModel.get()).length === 0
      }));
  }

  init() {
    render(new FilterView({
      items: this.#filters
    }), filtersContainer);
  }
}
