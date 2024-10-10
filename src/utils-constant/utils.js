import dayjs from 'dayjs';
import { filter } from '../constant/filter-const.js';
const getTimeDifference = ({dateFrom, dateTo}) => dayjs(dateTo).diff(dayjs(dateFrom));
const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;
const sortByTime = (pointA, pointB) => getTimeDifference(pointB) - getTimeDifference(pointA);
const sortByDay = (pointA, pointB) => dayjs(pointA.dateFrom) - dayjs(pointB.dateFrom);


//console.log(filter);
const generateFilters = (points) => Object.entries(filter).map(([filterType, filterPatternByType]) => ({
  type: filterType,
  coont: filterPatternByType(points).length
}));


export { sortByPrice, sortByTime, sortByDay, generateFilters };
