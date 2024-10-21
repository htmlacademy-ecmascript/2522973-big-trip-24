import AbstractView from '../framework/view/abstract-view.js';

function createNoPointsTemplate() {
  return (
    `<p class="board__no-tasks">
      Loading...
    </p>`
  );
}

export default class PreloaderView extends AbstractView {
  get template() {
    return createNoPointsTemplate();
  }
}
