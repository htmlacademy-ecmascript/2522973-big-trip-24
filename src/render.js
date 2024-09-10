const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

function render(component, container, place = RenderPosition.BEFOREEND) {
  container.insertAdjacentElement(place, component.getElement());
}
function renderBegin(component, container, place = RenderPosition.BEFOREBEGIN) {
  container.insertAdjacentElement(place, component.getElement());
}
function renderAfterBegin(component, container, place = RenderPosition.AFTERBEGIN) {
  container.insertAdjacentElement(place, component.getElement());
}
export {RenderPosition, createElement, render, renderBegin, renderAfterBegin};
