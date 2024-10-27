import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
import EditPointButton from './view/new-point-button-view.js';
import PointsApiService from './points-api-service.js';
import { render, RenderPosition } from './framework/render.js';

const AUTHORIZATION = 'Basic gir87he98qH';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';
const siteMainElement = document.querySelector('.page-body');
const siteTripInfoElement = siteMainElement.querySelector('.trip-main');
const filtersContainer = siteTripInfoElement.querySelector('.trip-controls__filters');
const listContainer = siteMainElement.querySelector('.trip-events');
const filterModel = new FilterModel();
const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});

const newPointButton = new EditPointButton({
  onClick: handleNewPointButtonClick
});

const boardPresenter = new BoardPresenter({
  container: listContainer,
  pointsModel,
  filterModel,
  newPointButton,
  onNewPointDestroy: handleEditNewPointClose
});


const filterPresenter = new FilterPresenter({
  filtersContainer: filtersContainer,
  filterModel: filterModel,
  pointsModel: pointsModel
});


function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButton.element.disabled = true;
}

function handleEditNewPointClose() {
  newPointButton.element.disabled = false;
}

filterPresenter.init();
boardPresenter.init();
pointsModel.init() .finally(() => {
  render(newPointButton, siteTripInfoElement, RenderPosition.BEFOREEND);
});
