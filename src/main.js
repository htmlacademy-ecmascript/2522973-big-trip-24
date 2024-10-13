
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/point-model.js';
import FilterView from './view/filter-view.js';
import { render } from './framework/render.js';
import { generateFilters } from './utils-constant/utils.js';

const siteMainElement = document.querySelector('.page-body');
const siteTripInfoElement = siteMainElement.querySelector('.trip-main'); // шапка
const siteFiltersElement = siteTripInfoElement.querySelector('.trip-controls__filters'); // Фильтры EVERYTHING, FUTURE, PAST и т.д
const siteEventsElement = siteMainElement.querySelector('.trip-events'); // Сортировка DAY, EVENT, TIME итд., Форма создания и Точка маршрута

const pointsModel = new PointsModel(); //Создаем инстанс класса из модели
const filters = generateFilters(pointsModel.points);
const boardPresenter = new BoardPresenter({
  container: siteEventsElement,
  pointsModel
});

render(new FilterView({filters}), siteFiltersElement);

boardPresenter.init(); //Вызов презентера и ОТРИСОВКА!!! информации про маршрут в шапке и 2=х вьюшек

