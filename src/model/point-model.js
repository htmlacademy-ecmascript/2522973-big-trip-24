import { getRandomPoint } from '../mock/points.js';
import { mockOffers } from '../mock/offers.js';
import { mockDestinations } from '../mock/destination.js';
const POINT_COUNT = 4; //Количество поинтов (сколько раз отрисуется поинт getRandomPoint)

export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint); //Записываем в points массив поинтов
  #offers = mockOffers;
  #destination = mockDestinations;

  getPoints() {
    return this.#points;
  }

  getOffers() {
    return this.#offers;
  }

  getDestinations() {
    return this.#destination;
  }

  getDestinationsById(id) {
    const allDestinations = this.getDestinations();
    return allDestinations.find((item) => item.id === id);
  }

  getOffersByType(type) {
    const allOffers = this.getOffers();
    return allOffers.find((item) => item.type === type);
  }

  getOffersById(type, itemsId) {
    const offersType = this.getOffersByType(type);
    return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }
}

