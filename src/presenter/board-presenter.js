
import PointView from '../view/trip-point-view.js'; //Точка маршрута
import EditPointView from '../view/trip-edit-point-view.js';
import {render, RenderPosition} from '../render.js';

export default class BoardPresenter {
  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new EditPointView(), this.container, RenderPosition.BEFOREEND); //Форма редактирования
    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.container, RenderPosition.BEFOREEND); //Отображение Точки маршрута 3 раза
    }
  }
}
