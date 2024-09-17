import { getRandomPoint } from '../mock/points.js';
import { mockOffers } from '../mock/offers.js';
import { mockDestinations } from '../mock/destination.js';
const POINT_COUNT = 3; //Количество поинтов (сколько раз отрисуется поинт getRandomPoint)

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint); //Записываем в points массив поинтов
  offers = mockOffers;
  destinations = mockDestinations;

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }
}

