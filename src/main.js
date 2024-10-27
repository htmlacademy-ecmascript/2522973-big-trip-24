
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
import EditPointButton from './view/new-point-button-view.js';
import PointsApiService from './points-api-service.js'; //Serv
import { render, RenderPosition } from './framework/render.js';

const AUTHORIZATION = 'Basic gir87he94qH'; //Serv
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip'; //Serv
const siteMainElement = document.querySelector('.page-body');
const siteTripInfoElement = siteMainElement.querySelector('.trip-main'); // шапка
const filtersContainer = siteTripInfoElement.querySelector('.trip-controls__filters'); // Фильтры EVERYTHING, FUTURE, PAST и т.д
const listContainer = siteMainElement.querySelector('.trip-events'); // Сортировка DAY, EVENT, TIME итд., Форма создания и Точка маршрута
const filterModel = new FilterModel();
const pointsModel = new PointsModel({ //Serv
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) //Создает инстанс класса для сервера
}); //Создаем инстанс класса из модели


const boardPresenter = new BoardPresenter({
  container: listContainer,
  pointsModel,
  filterModel,
  onNewPointDestroy: handleEditNewPointClose
});


const filterPresenter = new FilterPresenter({ //!!!!!!!!!!!!!!!!
  filtersContainer: filtersContainer,
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

filterPresenter.init();
boardPresenter.init();
pointsModel.init() .finally(() => {
  render(newPointButton, siteTripInfoElement, RenderPosition.BEFOREEND);
});

