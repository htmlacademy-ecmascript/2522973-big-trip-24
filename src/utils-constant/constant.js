import { isPastEvent, isFutureEvent, isTodayEvent } from '../utils-constant/date-time.js';

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


const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

const FilterType = {
  EVERYTHING: 'Everything',
  FUTURE: 'Future',
  PRESENT: 'Present',
  PAST: 'Past'
};

const filter = {
  [FilterType.EVERYTHING]: (points) => [...points],
  [FilterType.FUTURE]: (points) => points.filter((point) => isFutureEvent(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isTodayEvent(point.dateFrom, point.dateTo)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastEvent(point.dateTo)),
};

const NO_POINT_TEXT = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  LOADING: 'Loading...',
  LOADING_ERROR: 'Failed to load latest route information'
};

const ValidationStyle = {
  FOR_BORDER: 'border: 1px solid red; border-radius: 3px',
  FOR_TEXT_COLOR: 'color: red',
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

const MODE_TYPE = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const MAX_COUNT_DESTINATIONS = 3;

export {
  SortType,
  TYPES,
  FilterType,
  filter,
  UserAction,
  UpdateType,
  NO_POINT_TEXT,
  ValidationStyle,
  BLANK_POINT,
  MODE_TYPE,
  TimeLimit,
  MAX_COUNT_DESTINATIONS
};
