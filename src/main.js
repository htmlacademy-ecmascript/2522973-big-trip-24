
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
//import FilterView from './view/filter-view.js';
//import { render } from './framework/render.js';
//import { generateFilters } from './utils-constant/utils.js';

const siteMainElement = document.querySelector('.page-body');
const siteTripInfoElement = siteMainElement.querySelector('.trip-main'); // шапка
const filtersContainer = siteTripInfoElement.querySelector('.trip-controls__filters'); // Фильтры EVERYTHING, FUTURE, PAST и т.д
const siteEventsElement = siteMainElement.querySelector('.trip-events'); // Сортировка DAY, EVENT, TIME итд., Форма создания и Точка маршрута
const filterModel = new FilterModel();
const pointsModel = new PointsModel(); //Создаем инстанс класса из модели
//const filters = generateFilters(pointsModel.points);

const boardPresenter = new BoardPresenter({
  container: siteEventsElement,
  pointsModel
});


const filterPresenter = new FilterPresenter({ //!!!!!!!!!!!!!!!!
  filterContainer: filtersContainer,
  filterModel: filterModel,
  pointsModel: pointsModel
});

//render(new FilterView({filters}), filtersContainer);

boardPresenter.init();
filterPresenter.init(); //Вызов презентера и ОТРИСОВКА!!! информации про маршрут в шапке и 2=х вьюшек

