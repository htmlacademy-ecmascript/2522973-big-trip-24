//import BoardView from '../view/board-view.js';
import TripFilterView from '../view/trip-filter-view.js';
import ListView from '../view/trip-list-view.js';
//import TaskView from '../view/task-view.js';
//import TaskEditView from '../view/task-edit-view.js';
import AddPoint from '../view/trip-addPoint-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new ListView();
  taskListComponent = new ListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new TripFilterView(), this.boardComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());
    render(new AddPoint(), this.taskListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new ListView(), this.taskListComponent.getElement());
    }

    render(new AddPoint(), this.boardComponent.getElement());
  }
}
