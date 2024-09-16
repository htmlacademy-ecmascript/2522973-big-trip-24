import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { TYPE, OFFERS } from '../const.js';

const mockOffers = [
  {
    'type': getRandomArrayElement(TYPE),
    'offers': [
      {
        'id': '575c1f4b-b575-4ef7-b9ec-9e4e218f9ac0',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      },
      {
        'id': '2666bc9c-0ec7-4156-8a30-deadcca5d0c7',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      },
      {
        'id': 'a0499b61-8c63-4f89-84bc-0a5740aad819',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      },
      {
        'id': '5345f195-ce01-4217-b986-0ebd5c1b9177',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      },
      {
        'id': '3c8d6fa3-7ff8-459b-a1aa-0e581e45c779',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      }
    ]
  },
  {
    'type': getRandomArrayElement(TYPE),
    'offers': [
      {
        'id': 'a4dd55b0-77e6-42da-83f6-7e9b57764d85',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      },
      {
        'id': '49da3166-b680-4fb3-a3fc-3750d534e18e',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      },
      {
        'id': 'e9d4c4d5-03ab-4da1-ad2f-053ffafba6f1',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      }
    ]
  },
  {
    'type': getRandomArrayElement(TYPE),
    'offers': [
      {
        'id': '33cc680e-5a46-46c4-8cab-072b1f5b9b5f',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      },
      {
        'id': 'e420f53e-f5b3-4ccc-9f05-e6b5deb4421a',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      },
      {
        'id': 'd283cad1-cea0-43ea-a762-d66bd66b2c4c',
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(100, 300)
      }
    ]
  },
];

function getRandomOffers() {
  return getRandomArrayElement(mockOffers);
}
export {getRandomOffers};
//console.log(getRandomOffers())

