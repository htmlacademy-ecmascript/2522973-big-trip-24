import dayjs from 'dayjs';
//import { filter } from './constant.js';
const getTimeDifference = ({dateFrom, dateTo}) => dayjs(dateTo).diff(dayjs(dateFrom));
const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;
const sortByTime = (pointA, pointB) => getTimeDifference(pointB) - getTimeDifference(pointA);
const sortByDay = (pointA, pointB) => dayjs(pointA.dateFrom) - dayjs(pointB.dateFrom);

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

const isDatesEqual = function isDatesEqual(dateA, dateB) {
  return (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');
};

const FORMATS = {
  DATE: 'D MMM',
  TIME: 'HH:mm',
  FORM: 'DD/MM/YY HH:mm'
};

function humanizePointDate(date, format = FORMATS.DATE) {
  return date ? dayjs(date).format(format) : '';
}

function toggleOffers(offers, id) {
  if (offers.includes(id)) {
    return offers.filter((offer) => offer !== id);
  }
  return [...offers, id];
}


export {
  sortByPrice,
  sortByTime,
  sortByDay,
  //generateFilters,
  updateItem,
  getRandomElement,
  getRandomInteger,
  capitalizeFirstLetter,
  isDatesEqual,
  FORMATS,
  humanizePointDate,
  toggleOffers
};
