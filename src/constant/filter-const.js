
// import {} from ;
import { isEventOver, isFutureEvent } from '../date-time.js';

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

export { FiltersPoint, filter };
