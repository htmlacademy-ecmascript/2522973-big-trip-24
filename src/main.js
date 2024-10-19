
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';

const siteMainElement = document.querySelector('.page-body');
const siteTripInfoElement = siteMainElement.querySelector('.trip-main'); // шапка
const filtersContainer = siteTripInfoElement.querySelector('.trip-controls__filters'); // Фильтры EVERYTHING, FUTURE, PAST и т.д
const siteEventsElement = siteMainElement.querySelector('.trip-events'); // Сортировка DAY, EVENT, TIME итд., Форма создания и Точка маршрута
const filterModel = new FilterModel();
const pointsModel = new PointsModel(); //Создаем инстанс класса из модели


const boardPresenter = new BoardPresenter({
  container: siteEventsElement,
  pointsModel,
  filterModel
});


const filterPresenter = new FilterPresenter({ //!!!!!!!!!!!!!!!!
  filterContainer: filtersContainer,
  filterModel: filterModel,
  pointsModel: pointsModel
});

//render(new FilterView({filters}), filtersContainer);

boardPresenter.init();
filterPresenter.init();

