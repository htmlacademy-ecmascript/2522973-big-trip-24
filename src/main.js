
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
import EditPointButton from './view/new-point-button-view.js';
import { render, RenderPosition } from './framework/render.js';

const siteMainElement = document.querySelector('.page-body');
const siteTripInfoElement = siteMainElement.querySelector('.trip-main'); // шапка
const filtersContainer = siteTripInfoElement.querySelector('.trip-controls__filters'); // Фильтры EVERYTHING, FUTURE, PAST и т.д
const siteEventsElement = siteMainElement.querySelector('.trip-events'); // Сортировка DAY, EVENT, TIME итд., Форма создания и Точка маршрута
const filterModel = new FilterModel();
const pointsModel = new PointsModel(); //Создаем инстанс класса из модели


const boardPresenter = new BoardPresenter({
  container: siteEventsElement,
  pointsModel,
  filterModel,
  onNewPointDestroy: handleEditNewPointClose
});


const filterPresenter = new FilterPresenter({ //!!!!!!!!!!!!!!!!
  filterContainer: filtersContainer,
  filterModel: filterModel,
  pointsModel: pointsModel
});


const newPointButton = new EditPointButton({
  onClick: handleNewPointButtonClick
});

function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButton.element.disables = true;
}

function handleEditNewPointClose() {
  newPointButton.element.disabled = false;
}

render(newPointButton, siteTripInfoElement, RenderPosition.BEFOREEND);

boardPresenter.init();
filterPresenter.init();

