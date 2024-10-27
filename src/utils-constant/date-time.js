import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

/** @enum {number} Перечисление разных единиц времени в милисекундах */
const TimeInMilliseconds = {
  HOUR: 3600000,
  DAY: 86400000,
};

/** @enum {string} Перечисление форматов отображения дат из библиотеки dayjs */
const DateFormat = {
  DATE_FROM_FORMAT: 'MMM D', // Сокращенное название месяца, день месяца(двухзначное число)
  TIME_FORMAT: 'HH:mm', // Час(двухзначное число), минута(двухзначное число)
  FULL_DATE_FORMAT: 'DD/MM/YY HH:mm', // 01.01.24 01:01
  // Формат продолжительности нахождения в точке маршрута зависит от длительности
  MINUTES_FORMAT: 'mm[M]', // Менее часа: минуты (например, 23M);
  DAY_FORMAT: 'HH[H] mm[M]', // Менее суток: часы минуты (например, 02H 44M или 12H 00M, если минуты равны нулю);
  DAYS_FORMAT: 'DD[D] HH[H] mm[M]', // Более суток: дни часы минуты (например, 51D 02H 30M или 07D 00H 00M, если часы и/или минуты равны нулю).
};

/**
 *Функция с использованием библиотеки dayjs для получения отформатированной даты
 * @param {string} дата, которую необходимо отформатировать
 * @param {string} нужный формат отображения даты
 */
const humanizePointDueDate = (dueDate, dateFormat) => dueDate ? dayjs(dueDate).format(dateFormat) : '';


const isEventOver = (dueDate) => dueDate && dayjs(dueDate).isBefore(dayjs(new Date(), 'D'));

const isFutureEvent = (dueDate) => dueDate && dayjs(dueDate).isAfter(dayjs(new Date(), 'D'));

const isEventToday = (dueDate) => dueDate && dayjs(dueDate).isSame(dayjs(), 'D');

dayjs.extend(duration);

const isFuturePoint = (point) => dayjs().isBefore(point.dateFrom, 'minute');

const isExpiredPoint = (point) => dayjs(point.dateTo) && dayjs().isAfter(dayjs(point.dateTo), 'milliseconds');

const isActualPoint = (point) => point.dateTo && (dayjs().isSame(dayjs(point.dateFrom), 'minute') || dayjs().isAfter(dayjs(point.dateFrom), 'minute')) && (dayjs().isSame(dayjs(point.dateTo), 'minute') || dayjs().isBefore(dayjs(point.dateTo), 'minute'));
/**
 *Функция с использованием библиотеки dayjs для получения продолжительности нахождения в точке маршрута
 * @param {ISOString} dateFrom дата и время начала события в точке маршрута
 * @param {ISOString} dateTo дата и время окончания события в точке маршрута
 * @returns {string} продолжительность в формате, зависящем от длительности нахождения в точке маршрута
 */

const getDuration = (dateFrom, dateTo) => {
  const endDate = dayjs(dateTo);
  const startDate = dayjs(dateFrom);
  const durationInUnits = dayjs.duration(endDate.diff(startDate));
  const durationInMilliseconds = durationInUnits.$ms;
  const { $d } = durationInUnits;
  const countMonths = $d.months;

  if (countMonths > 0) {
    const monthsInMil = dayjs.duration(countMonths, 'month');
    $d.days += dayjs.duration(monthsInMil.$ms).asDays();
  }

  switch (true) {
    case durationInMilliseconds < TimeInMilliseconds.HOUR:
      return durationInUnits.format(DateFormat.MINUTES_FORMAT);
    case durationInMilliseconds > TimeInMilliseconds.HOUR && durationInMilliseconds < TimeInMilliseconds.DAY:
      return durationInUnits.format(DateFormat.DAY_FORMAT);
    case durationInMilliseconds > TimeInMilliseconds.DAY:
      return durationInUnits.format(DateFormat.DAYS_FORMAT);
  }
};

const getRandomInt = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomDate = () => {
  const switcher = getRandomInt(1,2);
  const dateNow = dayjs(new Date());
  switch (switcher){
    case 1:
      return dateNow.add(getRandomInt(1,4), 'hour');
    case 2:
      return dateNow.subtract(getRandomInt(1,4), 'hour');
  }
};

const DATE_FORMAT = {
  DATE: 'D MMM',
  TIME: 'HH:mm',
  FORM: 'DD/MM/YY HH:mm',
  DATE_FOR_TRIP_INFO: 'D MMM',
};

function humanizePointDate(date, format = DATE_FORMAT.DATE) {
  return date ? dayjs(date).format(format) : '';
}

function isDatesSame(dateToCheck1, dateToCheck2){
  return (dateToCheck1 === null && dateToCheck2 === null) || dayjs(dateToCheck1).isSame(dateToCheck2, 'D');
}

export {
  getRandomDate,
  isDatesSame,
  isActualPoint,
  isExpiredPoint,
  isFuturePoint,
  humanizePointDueDate,
  getDuration,
  DateFormat,
  isEventOver,
  isFutureEvent,
  isEventToday,
  DATE_FORMAT,
  humanizePointDate
};
