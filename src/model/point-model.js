import {getRandomPoint} from '../mock/points.js';
import {getRandomOffers} from '../mock/offers.js';
const POINT_COUNT = 5; //Количество поинтов (сколько раз отрисуется поинт getRandomPoint)

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint); //Записываем в points массив поинтов
  offers = Array.from({length: 1}, getRandomOffers);

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }
}

