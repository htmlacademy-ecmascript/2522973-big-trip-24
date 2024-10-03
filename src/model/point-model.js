import { getRandomPoint } from '../mock/points.js';
import { mockOffers } from '../mock/offers.js';
import { mockDestinations } from '../mock/destination.js';
const RENDERING_POINT_COUNT = 10; //Количество поинтов (сколько раз отрисуется поинт getRandomPoint)

export default class PointsModel {
  #points = Array.from({length: RENDERING_POINT_COUNT}, getRandomPoint); //Записываем в points массив поинтов
  #offers = mockOffers;
  #destination = mockDestinations;

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destination;
  }

  getDestinationsById(id) {
    const allDestinations = this.destinations;
    return allDestinations.find((item) => item.id === id);
  }

  getOffersByType(type) {
    const allOffers = this.offers;
    return allOffers.find((item) => item.type === type);
  }

  getOffersById(type, itemsId) {
    const offersType = this.getOffersByType(type);
    return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }
}

