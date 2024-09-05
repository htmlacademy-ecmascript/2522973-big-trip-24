import TripInfoView from './view/trip-info-view.js';
import TripFilterView from './view/trip-filter-view.js';
import TripSortView from './view/trip-event-view.js';
import AddPoint from './view/trip-addPoint-view.js';
import ListView from './view/trip-list-view.js';

import BoardPresenter from './presenter/board-presenter.js';

import {render, renderBegin} from './render.js';

const siteMainElement = document.querySelector('.page-body');
const siteTripInfoElement = siteMainElement.querySelector('.trip-main'); // шапка
const siteTripInfo = siteMainElement.querySelector('.trip-info'); // Инфо в шапке про маршрут
const siteFiltersElement = siteTripInfoElement.querySelector('.trip-controls__filters'); // Фильтры EVERYTHING, FUTURE, PAST и т.д
const siteEventsElement = siteMainElement.querySelector('.trip-events'); // Сортировка DAY, EVENT, TIME итд.
const siteAddPointElement = siteMainElement.querySelector('.trip-events'); // Форма
const siteListElement = siteMainElement.querySelector('.trip-events'); // Список маршрутов

const boardPresenter = new BoardPresenter({boardContainer: siteMainElement});

renderBegin(new TripInfoView(), siteTripInfo); // Отображение информации вверху про маршрут
render(new TripFilterView(), siteFiltersElement); // Отрисовка компонента Фильтры
render(new TripSortView(), siteEventsElement); // Отрисовка компонента Эвент
render(new AddPoint(), siteAddPointElement); // Отрисовка формы
render(new ListView(), siteListElement); // Отрисовка компонента Лист(Список с маршрутами)

boardPresenter.init();
