import { isEventOver, isFutureEvent } from '../utils-constant/date-time.js';

const TYPES = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];
const CITIES = [
  'New-York',
  'Tokio',
  'Saint-Petersburg',
  'London',
  'Paris',
  'San-Francisco',
  'Moscow',
];
const OFFERS = [
  'Add luggage',
  'Switch to comfort class',
  'Add meal',
  'Choose seats',
  'Travel by train',
  'Order Uber',
  'Rent a car',
  'Add breakfast',
  'Book tickets',
  'Lunch in city',
];

const EMPTY_LIST = {
  'EVERYTHING': 'Click New Event to create your first point',
  'LOADING': 'Loading...',
  'LOADING_ERROR': 'Failed to load latest route information'
};
export { };

const SortType = {
  DAY: 'Day',
  EVENT: 'Event',
  TIME: 'Time',
  PRICE: 'Price',
  OFFERS: 'Offers'
};

const FiltersPoint = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const filter = {
  [FiltersPoint.EVERYTHING]: (points) => [...points],
  [FiltersPoint.FUTURE]: (points) => points.filter((point) => isFutureEvent(point.dateFrom)),
  [FiltersPoint.PRESENT]: (points) => points.filter((point) => isEventOver(point.dateFrom)),
  [FiltersPoint.PAST]: (points) => points.filter((point) => isEventOver(point.dateFrom)),
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

const POINT_COUNT_PER_STEP = 6;

export {
  SortType,
  TYPES,
  CITIES,
  OFFERS,
  EMPTY_LIST,
  FiltersPoint,
  filter,
  UserAction,
  UpdateType,
  POINT_COUNT_PER_STEP
};
