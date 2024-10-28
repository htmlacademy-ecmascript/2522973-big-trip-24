import AbstractView from '../framework/view/abstract-view.js';
import {humanizePointDate, DATE_FORMAT } from '../utils-constant/date-time.js';

/*
const DateFormat = {
  DATE_FORMAT: 'MMM D',
  TIME_FORMAT: 'HH:mm',
  FULL_DATE_FORMAT: 'DD/MM/YY HH:mm',
  DATE_FOR_TRIP_INFO: 'D MMM',
};
*/
const createTripInfoTemplate = (destinations, dates, cost) => {
  const createDatesSection = () => {
    if (dates) {
      const startRoute = humanizePointDate(dates[0], DATE_FORMAT.DATE_FOR_TRIP_INFO);
      const endRoute = humanizePointDate(dates[1], DATE_FORMAT.DATE_FOR_TRIP_INFO);
      return `<p class="trip-info__dates">${startRoute}&nbsp;&mdash;&nbsp;${endRoute}</p>`;
    }
    return '';
  };

  const createTitleSection = () => {
    if (destinations.length === 0 || !destinations) {
      return '';
    } else if (destinations.length === 1) {
      return `<h1 class="trip-info__title">${destinations[0]}</h1>`;
    } else if (destinations.length < 3) {
      return `<h1 class="trip-info__title">${destinations[0]} &mdash; &mdash; ${destinations[1]}</h1>`;
    } else if (destinations.length === 3) {
      return `<h1 class="trip-info__title">${destinations[0]} &mdash; ${destinations[1]} &mdash; ${destinations[2]}</h1>`;
    }
  };

  const costSection = cost ? `Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>` : '';
  return (`
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${createTitleSection()}</h1>

        <p class="trip-info__dates">${createDatesSection()}</p>
      </div>

      <p class="trip-info__cost">
       ${costSection}
      </p>
    </section>`);
};

export default class TripInfoView extends AbstractView {
  #destinations = null;
  #dates = null;
  #cost = null;

  constructor({destinations, dates, cost}) {
    super();
    this.#destinations = destinations;
    this.#dates = dates;
    this.#cost = cost;
  }

  get template() {
    return createTripInfoTemplate(this.#destinations, this.#dates, this.#cost);
  }
}
