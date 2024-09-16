import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { TYPE, CITIES, OFFERS } from '../const.js';

const mockPoints = [
  {
    'id': '02ec2f95-051c-4ce4-a60f-7f9eed7ec84f',
    'basePrice': getRandomInteger(500, 2000),
    'dateFrom': '2024-11-02T21:55:08.370Z',
    'dateTo': '2024-11-04T08:28:08.370Z',
    'destination': getRandomArrayElement(CITIES),
    'isFavorite': false,
    'offers': [
      getRandomArrayElement(OFFERS),
      getRandomArrayElement(OFFERS),
      getRandomArrayElement(OFFERS),
      getRandomArrayElement(OFFERS),
      getRandomArrayElement(OFFERS),
    ],
    'type': getRandomArrayElement(TYPE)
  },
  {
    'id': '88586f92-70fa-4d0d-bc04-2841803772b0',
    'basePrice': getRandomInteger(500, 2000),
    'dateFrom': '2024-11-04T20:40:08.370Z',
    'dateTo': '2024-11-05T18:46:08.370Z',
    'destination': getRandomArrayElement(CITIES),
    'isFavorite': true,
    'offers': [
      getRandomArrayElement(OFFERS),
      getRandomArrayElement(OFFERS),
    ],
    'type': getRandomArrayElement(TYPE)
  },
  {
    'id': '849780ca-492d-481e-8929-c5a4137d216e',
    'basePrice': getRandomInteger(500, 2000),
    'dateFrom': '2024-11-07T05:18:08.370Z',
    'dateTo': '2024-11-07T21:13:08.370Z',
    'destination': getRandomArrayElement(CITIES),
    'isFavorite': true,
    'offers': [
      getRandomArrayElement(OFFERS),
    ],
    'type': getRandomArrayElement(TYPE)
  },
  {
    'id': 'd378e714-b66a-4cd1-8c02-ddb09255dc1d',
    'basePrice': getRandomInteger(500, 2000),
    'dateFrom': '2024-11-09T19:01:08.370Z',
    'dateTo': '2024-11-10T01:12:08.370Z',
    'destination': getRandomArrayElement(CITIES),
    'isFavorite': false,
    'offers': [
      getRandomArrayElement(OFFERS),
      getRandomArrayElement(OFFERS),
      getRandomArrayElement(OFFERS),
    ],
    'type': getRandomArrayElement(TYPE)
  },
  {
    'id': 'fa8b3372-f5d1-4358-85de-051faccedf1d',
    'basePrice': getRandomInteger(500, 2000),
    'dateFrom': '2024-11-11T12:14:08.370Z',
    'dateTo': '2024-11-12T19:18:08.370Z',
    'destination': getRandomArrayElement(CITIES),
    'isFavorite': true,
    'offers': [
      getRandomArrayElement(OFFERS),
    ],
    'type': getRandomArrayElement(TYPE)
  },
  {
    'id': '0376175d-c725-47f8-bd9c-4bf2975cb033',
    'basePrice': getRandomInteger(500, 2000),
    'dateFrom': '2024-11-13T13:03:08.370Z',
    'dateTo': '2024-11-14T02:51:08.370Z',
    'destination': getRandomArrayElement(CITIES),
    'isFavorite': true,
    'offers': [
      getRandomArrayElement(OFFERS),
    ],
    'type': getRandomArrayElement(TYPE)
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints); //Функция-обертка, возвращающая getRandomArrayElement ОДНОГО ПОИНТА!!!
}
export {getRandomPoint};

