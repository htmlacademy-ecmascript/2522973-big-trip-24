import Observable from '../framework/observable.js';
//import { getRandomPoint } from '../mock/points.js';
//import { mockOffers } from '../mock/offers.js';
//import { mockDestinations } from '../mock/destination.js';

//const POINT_COUNT = 3;
//getRandomPoint.length = POINT_COUNT;
export default class PointsModel extends Observable {
  //#points = getRandomPoint;
  //#offers = mockOffers;
  //#destination = mockDestinations;
  #pointsApiService = null;//Serv
  #points = [];
  #offers = [];
  #destination = [];

  constructor({pointsApiService}) { //Serv
    super();
    this.#pointsApiService = pointsApiService; //Serv

    this.#pointsApiService.points.then((points) => { //Serv
      console.log(points.map(this.#adaptToClient));
    });
  }

  get points() {
    return this.#points;
  }

  async init() { //Serv
    try {
      const points = await this.#pointsApiService.points;
      this.#points = points.map(this.#adaptToClient);
    } catch(err) {
      this.#points = [];
    }
  }

  updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  }

  addPoint(updateType, update) {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting task');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  }

  #adaptToClient(point) { //Serv Паттерн Адаптер, форматирование структур данных из сервера для клиента!!!
    const adaptedPoint = {...point,
      dateFrom: point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'], // На клиенте дата хранится как экземпляр Date
      dateTo: point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      basePrice: point['base_price'],
      isFavorite: point['is_favorite'],
    };

    // Ненужные ключи мы удаляем
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['base_price'];
    delete adaptedPoint['is_favorite'];


    return adaptedPoint;
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

