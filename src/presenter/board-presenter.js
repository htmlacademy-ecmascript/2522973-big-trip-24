
import PointView from '../view/trip-point-view.js'; //Точка маршрута
import OffersView from '../view/trip-edit-point-view.js';//Форма редактирования
import {render, RenderPosition} from '../render.js';

export default class BoardPresenter {


  constructor({container, pointsModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardOffers = [...this.pointsModel.getOffers()];
    this.boardPoints = [...this.pointsModel.getPoints()];
    render(new OffersView({offers: this.boardOffers[0]}), this.container, RenderPosition.BEFOREEND); //Отображение формы редактирования

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new PointView({points: this.boardPoints[i]}), this.container, RenderPosition.BEFOREEND); //Отображение Точки маршрута 3 раза
    }
  }
}

