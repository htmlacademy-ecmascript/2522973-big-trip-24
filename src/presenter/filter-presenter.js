import { render, replace, remove } from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import { filter, FiltersPoint, UpdateType } from '../utils-constant/constant';

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
        type: FiltersPoint.EVERYTHING,
        name: 'everything',
        count: filter[FiltersPoint.EVERYTHING](points).length
      },
      {
        type: FiltersPoint.FUTURE,
        name: 'future',
        count: filter[FiltersPoint.FUTURE](points).length
      },
      {
        type: FiltersPoint.PAST,
        name: 'past',
        count: filter[FiltersPoint.PAST](points).length
      },
      {
        type: FiltersPoint.PRESENT,
        name: 'present',
        count: filter[FiltersPoint.PRESENT](points).length
      },
    ];
  /* return Object.values(FiltersPoint).map((type) => ({
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
