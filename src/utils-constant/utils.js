import dayjs from 'dayjs';
import { filter } from '../constant/filter-const.js';

const getTimeDifference = ({dateFrom, dateTo}) => dayjs(dateTo).diff(dayjs(dateFrom));
const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;
const sortByTime = (pointA, pointB) => getTimeDifference(pointB) - getTimeDifference(pointA);
const sortByDay = (pointA, pointB) => dayjs(pointA.dateFrom) - dayjs(pointB.dateFrom);
const generateFilters = (points) => Object.entries(filter).map(([filterType, filterPatternByType]) => ({
  type: filterType,
  coont: filterPatternByType(points).length
}));

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}
function getRandomInteger(min, max) {
  const rand = Math.floor(min + Math.random() * (max + 1 - min));
  return Math.floor(rand);
}

function capitalizeFirstLetter(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const createOfferItemTemplate = (type, title, price, className) => `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-1" type="checkbox" name="event-offer-${type}" ${className}>
    <label class="event__offer-label" for="event-offer-${type}-1">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
`;

const createTypeGroupTemplate = (group, className) => `
  <div class="event__type-item">
    <input id="event-type-${group.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${group.toLowerCase()}" ${className}>
    <label class="event__type-label  event__type-label--${group.toLowerCase()}" for="event-type-${group.toLowerCase()}-1">${group}</label>
  </div>
`;

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {
  sortByPrice,
  sortByTime,
  sortByDay,
  generateFilters,
  updateItem,
  getRandomArrayElement,
  getRandomInteger,
  capitalizeFirstLetter,
  createOfferItemTemplate,
  createTypeGroupTemplate
};
