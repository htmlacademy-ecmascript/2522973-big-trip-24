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
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const filter = {
  [FilterType.EVERYTHING]: (points) => [...points],
  [FilterType.FUTURE]: (points) => points.filter((point) => isFutureEvent(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isEventOver(point.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((point) => isEventOver(point.dateFrom)),
};

const NO_POINT_TEXT = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
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
  INIT: 'INIT',
};

const BLANK_POINT = {
  type: 'flight',
  basePrice: 0,
  destination: null,
  dateFrom: null,
  dateTo: null,
  isFavorite: false,
  offers:[],
};

const POINT_COUNT_PER_STEP = 20;

export {
  SortType,
  TYPES,
  CITIES,
  OFFERS,
  EMPTY_LIST,
  FilterType,
  filter,
  UserAction,
  UpdateType,
  POINT_COUNT_PER_STEP,
  NO_POINT_TEXT,
  BLANK_POINT
};
