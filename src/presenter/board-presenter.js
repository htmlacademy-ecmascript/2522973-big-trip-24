
import PointView from '../view/trip-point-view.js'; //Точка маршрута
import OffersView from '../view/trip-edit-point-view.js';//Форма редактирования
import {render, RenderPosition} from '../render.js';

export default class BoardPresenter {

  constructor({container, pointsModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];

    this.boardOffers = [...this.pointsModel.getOffers()];
    const offersView = new OffersView({
      point: this.boardPoints[0],
      allOffers: this.pointsModel.getOffersByType(this.boardPoints[0].type),
      pointDestination: this.pointsModel.getDestinationsById(this.boardPoints[0].destination),
      allDestination: this.pointsModel.getDestinations()
    });
    render(offersView, this.container); //Отображение формы редактирования

    for (let i = 0; i < this.boardPoints.length; i++) {
      const point = new PointView({
        point: this.boardPoints[i],
        offers: [...this.pointsModel.getOffersById(this.boardPoints[i].type, this.boardPoints[i].offers)],
        destination: this.pointsModel.getDestinationsById(this.boardPoints[i].destination)
      });
      render(point, this.container, RenderPosition.BEFOREEND);
      // render(new PointView({points: this.boardPoints[i]}), this.container, RenderPosition.BEFOREEND); //Отображение Точки маршрута 3 раза
    }
  }
}

