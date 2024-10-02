import TripFilterView from './view/trip-filter-view.js'; //Фильтры
import TripSortView from './view/trip-event-view.js'; //Сортировка DAY, EVENT, PRICE
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/point-model.js';
import {render} from './framework/render.js';

const siteMainElement = document.querySelector('.page-body');
const siteTripInfoElement = siteMainElement.querySelector('.trip-main'); // шапка
const siteFiltersElement = siteTripInfoElement.querySelector('.trip-controls__filters'); // Фильтры EVERYTHING, FUTURE, PAST и т.д
const siteEventsElement = siteMainElement.querySelector('.trip-events'); // Сортировка DAY, EVENT, TIME итд., Форма создания и Точка маршрута

const pointsModel = new PointsModel(); //Создаем инстанс класса из модели
const boardPresenter = new BoardPresenter({
  container: siteEventsElement,
  pointsModel
});

render(new TripFilterView(), siteFiltersElement); // Фильтры EVERYTHING, FUTURE, PAST и т.д
render(new TripSortView(), siteEventsElement); // Сортировка DAY, EVENT, TIME, PRICE, OFFER

boardPresenter.init(); //Вызов презентера и ОТРИСОВКА!!! информации про маршрут в шапке и 2=х вьюшек

