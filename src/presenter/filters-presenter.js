import { render } from '../framework/render';
import FilterView from '../view/filter-view';

const filtersContainer = document.querySelector('.trip-controls__filters');

export default class FiltersPresenter {

  init() {
    render(new FilterView(), filtersContainer);
  }
}
