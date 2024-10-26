import { render, replace, remove } from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import { filter, FilterType, UpdateType } from '../utils-constant/constant';

export default class FilterPresenter {
  #filtersContainer = null;
  #filterModel = null;
  #pointsModel = null;
  #filterComponent = null;

  constructor({filtersContainer, filterModel, pointsModel}) {
    this.#filtersContainer = filtersContainer;
    this.#filterModel = filterModel;
    this.#pointsModel = pointsModel;
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const points = this.#pointsModel.points;
    return [
      {
        type: FilterType.EVERYTHING,
        name: 'everything',
        count: filter[FilterType.EVERYTHING](points).length
      },
      {
        type: FilterType.FUTURE,
        name: 'future',
        count: filter[FilterType.FUTURE](points).length
      },
      {
        type: FilterType.PRESENT,
        name: 'present',
        count: filter[FilterType.PRESENT](points).length
      },
      {
        type: FilterType.PAST,
        name: 'past',
        count: filter[FilterType.PAST](points).length
      },
    ];
  /* return Object.values(FilterType).map((type) => ({
      type,
      points: filter[type](points)
    }));
    */
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#filterTypeChangeHandler
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filtersContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #filterTypeChangeHandler = (filterType) => {
    if(this.#filterModel.filter === filterType){
      return;
    }
    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
