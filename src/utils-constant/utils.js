import dayjs from 'dayjs';
import { filter } from './constant.js';
const getTimeDifference = ({dateFrom, dateTo}) => dayjs(dateTo).diff(dayjs(dateFrom));
const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;
const sortByTime = (pointA, pointB) => getTimeDifference(pointB) - getTimeDifference(pointA);
const sortByDay = (pointA, pointB) => dayjs(pointA.dateFrom) - dayjs(pointB.dateFrom);
const generateFilters = (points) => Object.entries(filter).map(([filterType, filterPatternByType]) => ({
  type: filterType,
  coont: filterPatternByType(points).length
}));


const getRandomElement = (items) => {
  const startFrom = Math.floor(Math.random() * items.length - 5);
  const endTo = items.length;
  return items.slice(startFrom, endTo);
};

function getRandomInteger(min, max) {
  const rand = Math.floor(min + Math.random() * (max + 1 - min));
  return Math.floor(rand);
}

function capitalizeFirstLetter(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}


function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {
  sortByPrice,
  sortByTime,
  sortByDay,
  generateFilters,
  updateItem,
  getRandomElement,
  getRandomInteger,
  capitalizeFirstLetter,
};
