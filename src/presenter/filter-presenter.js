import { render, replace, remove } from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import { filter, FilterType, UpdateType } from '../utils-constant/constant';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #pointsModel = null;
  #filterComponent = null;

  constructor({filterContainer, filterModel, pointsModel}) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#pointsModel = pointsModel;
    this.#pointsModel.addObserver(this.#modelChangeHandler);
    this.#filterModel.addObserver(this.#modelChangeHandler);
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
        type: FilterType.PAST,
        name: 'past',
        count: filter[FilterType.PAST](points).length
      },
      {
        type: FilterType.PRESENT,
        name: 'present',
        count: filter[FilterType.PRESENT](points).length
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
      //onFilterTypeChange: this.#handleFilterTypeChange
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #modelChangeHandler = () => {
    this.init();
  };

  #filterTypeChangeHandler = (filterType) => {
    if(this.#filterModel.filter === filterType){
      return;
    }
    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
