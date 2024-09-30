import PointView from '../view/trip-point-view.js'; //Точка маршрута
import OffersView from '../view/trip-edit-point-view.js';//Форма редактирования
//import {render, RenderPosition} from '../render.js';
import {render} from '../framework/render.js';
export default class BoardPresenter {

  constructor({container, pointsModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.points];

    this.boardOffers = [...this.pointsModel.points];
    const offersView = new OffersView({
      point: this.boardPoints[0],
      allOffers: this.pointsModel.getOffersByType(this.boardPoints[0].type),
      pointDestination: this.pointsModel.getDestinationsById(this.boardPoints[0].destination),
      allDestination: this.pointsModel.destinations
    });
    render(offersView, this.container); //Отображение формы редактирования

    for (let i = 0; i < this.boardPoints.length; i++) {
      const point = new PointView({
        point: this.boardPoints[i],
        offers: [...this.pointsModel.getOffersById(this.boardPoints[i].type, this.boardPoints[i].offers)],
        destination: this.pointsModel.getDestinationsById(this.boardPoints[i].destination)
      });
      render(point, this.container);
      // render(new PointView({points: this.boardPoints[i]}), this.container, RenderPosition.BEFOREEND); //Отображение Точки маршрута 3 раза
    }
  }
}

