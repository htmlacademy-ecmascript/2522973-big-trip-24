import dayjs from 'dayjs';

const getTimeDifference = ({dateFrom, dateTo}) => dayjs(dateTo).diff(dayjs(dateFrom));
const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;
const sortByTime = (pointA, pointB) => getTimeDifference(pointB) - getTimeDifference(pointA);
const sortByDay = (pointA, pointB) => dayjs(pointA.dateFrom) - dayjs(pointB.dateFrom);

function capitalizeFirstLetter(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export {
  sortByPrice,
  sortByTime,
  sortByDay,
  capitalizeFirstLetter,
};
