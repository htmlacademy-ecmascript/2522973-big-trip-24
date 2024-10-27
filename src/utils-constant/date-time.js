import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(duration);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);


function getDuration (pointDateStart, pointDateEnd) {
  if (pointDateStart && pointDateEnd) {
    const dateStart = dayjs(pointDateStart);
    const dateEnd = dayjs(pointDateEnd);
    const durationInUnits = dayjs.duration(dateEnd.diff(dateStart));
    const { $d } = durationInUnits;
    if ($d.months > 0) {
      const monthsInMil = dayjs.duration($d.months, 'month');
      $d.days += dayjs.duration(monthsInMil.$ms).asDays();
    }
    if ($d.years > 0) {
      const yearsInMilliseconds = dayjs.duration($d.years, 'year');
      $d.days += dayjs.duration(yearsInMilliseconds.$ms).asDays();
    }
    if ($d.days > 0) {
      return durationInUnits.format('DD[D] HH[H] mm[M]');
    }
    if ($d.hours > 0) {
      return durationInUnits.format('HH[H] mm[M]');
    }
    return durationInUnits.format('mm[M]');
  }
  return '';
}

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

function isFutureEvent(dateToCheck) {
  return dateToCheck && dayjs(dateToCheck).isAfter(dayjs(new Date(), 'D'));
}

function isPastEvent(dateToCheck) {
  return dateToCheck && dayjs(dateToCheck).isBefore(dayjs(new Date(), 'D'));
}

function isTodayEvent(dateToCheckStart, dateToCheckEnd) {
  return dateToCheckStart && dateToCheckEnd && dayjs(dateToCheckStart).isSameOrBefore(dayjs(new Date(), 'D')) && dayjs(dateToCheckEnd).isSameOrAfter(dayjs(new Date(), 'D'));
}

function isDatesSame(dateToCheck1, dateToCheck2){
  return (dateToCheck1 === null && dateToCheck2 === null) || dayjs(dateToCheck1).isSame(dateToCheck2, 'D');
}

export {
  getRandomDate,
  //isDatesSame,
  //isActualPoint,
  //isExpiredPoint,
  //isFuturePoint,
  //humanizePointDueDate,
  getDuration,
  //DateFormat,
  isPastEvent,
  isFutureEvent,
  isTodayEvent,
  isDatesSame,
  DATE_FORMAT,
  humanizePointDate
};
