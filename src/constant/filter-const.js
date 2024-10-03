// import {} from ;

const FiltersPoint = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const filter = {
  [FiltersPoint.EVERYTHING]: (points) => points,
  [FiltersPoint.FUTURE]: (points) => points,
  [FiltersPoint.PRESENT]: (points) => points,
  [FiltersPoint.PAST]: (points) => points,
  //[FiltersPoint.FUTURE]: (points) => points.filter((point) => isFuturePoint(point)),
  //[FiltersPoint.PRESENT]: (points) => points.filter((point) => isActualPoint(point)),
  //[FiltersPoint.PAST]: (points) => points.filter((point) => isExpiredPoint(point)),
};

export { FiltersPoint, filter };
