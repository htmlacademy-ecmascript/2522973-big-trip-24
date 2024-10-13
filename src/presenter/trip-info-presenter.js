import { render, RenderPosition } from '../framework/render';
import TripInfoView from '../view/trip-info-view';

const tripMainContainer = document.querySelector('.trip-main');

export default class TripInfoPresener {

  init() {
    render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
  }
}
