(()=>{"use strict";const e="beforeend";function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function n(t,n,i=e){n.insertAdjacentElement(i,t.getElement())}function i(e){return e[Math.floor(Math.random()*e.length)]}function s(e,t){const n=Math.floor(e+Math.random()*(t+1-e));return Math.floor(n)}class l{constructor({points:e}){this.points=e}getTemplate(){return function(e){const{type:t,destination:n,basePrice:i,offers:l}=e;return`<ul class="trip-events__list">\n            <li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="2019-03-18">MAR 18</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${t}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${t} ${n}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n                  </p>\n                  <p class="event__duration">30M</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${i}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  <li class="event__offer">\n                    <span class="event__offer-title">${l}</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">${s(10,100)}</span>\n                  </li>\n                </ul>\n                <button class="event__favorite-btn " type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>\n          </ul>`}(this.points)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class a{constructor({offers:e}){this.offers=e}getTemplate(){return function(e){const{type:t,offers:{price:n}}=e;return`<form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n\n                        <div class="event__type-item">\n                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">ffdd</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      ${t}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      <option value="Amsterdam"></option>\n                      <option value="Geneva"></option>\n                      <option value="Chamonix"></option>\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${n}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Delete</button>\n                  <button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>\n                </header>\n                <section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                        <label class="event__offer-label" for="event-offer-luggage-1">\n                          <span class="event__offer-title">Add luggage</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">50</span>\n                        </label>\n                      </div>\n\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n                        <label class="event__offer-label" for="event-offer-comfort-1">\n                          <span class="event__offer-title">Switch to comfort</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">80</span>\n                        </label>\n                      </div>\n\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n                        <label class="event__offer-label" for="event-offer-meal-1">\n                          <span class="event__offer-title">${t}</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">15</span>\n                        </label>\n                      </div>\n\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n                        <label class="event__offer-label" for="event-offer-seats-1">\n                          <span class="event__offer-title">Choose seats</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">5</span>\n                        </label>\n                      </div>\n\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n                        <label class="event__offer-label" for="event-offer-train-1">\n                          <span class="event__offer-title">Travel by train</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">40</span>\n                        </label>\n                      </div>\n                    </div>\n                  </section>\n\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>\n                  </section>\n                </section>\n              </form>`}(this.offers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const r=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],o=["New-York","Tokio","Saint-Petersburg","London","Paris","San-Francisco","Moscow"],p=["Add luggage","Switch to comfort class","Add meal","Choose seats","Travel by train","Order Uber","Rent a car","Add breakfast","Book tickets","Lunch in city"],c=[{id:"02ec2f95-051c-4ce4-a60f-7f9eed7ec84f",basePrice:s(500,2e3),dateFrom:"2024-11-02T21:55:08.370Z",dateTo:"2024-11-04T08:28:08.370Z",destination:i(o),isFavorite:!1,offers:[i(p),i(p),i(p),i(p),i(p)],type:i(r)},{id:"88586f92-70fa-4d0d-bc04-2841803772b0",basePrice:s(500,2e3),dateFrom:"2024-11-04T20:40:08.370Z",dateTo:"2024-11-05T18:46:08.370Z",destination:i(o),isFavorite:!0,offers:[i(p),i(p)],type:i(r)},{id:"849780ca-492d-481e-8929-c5a4137d216e",basePrice:s(500,2e3),dateFrom:"2024-11-07T05:18:08.370Z",dateTo:"2024-11-07T21:13:08.370Z",destination:i(o),isFavorite:!0,offers:[i(p)],type:i(r)},{id:"d378e714-b66a-4cd1-8c02-ddb09255dc1d",basePrice:s(500,2e3),dateFrom:"2024-11-09T19:01:08.370Z",dateTo:"2024-11-10T01:12:08.370Z",destination:i(o),isFavorite:!1,offers:[i(p),i(p),i(p)],type:i(r)},{id:"fa8b3372-f5d1-4358-85de-051faccedf1d",basePrice:s(500,2e3),dateFrom:"2024-11-11T12:14:08.370Z",dateTo:"2024-11-12T19:18:08.370Z",destination:i(o),isFavorite:!0,offers:[i(p)],type:i(r)},{id:"0376175d-c725-47f8-bd9c-4bf2975cb033",basePrice:s(500,2e3),dateFrom:"2024-11-13T13:03:08.370Z",dateTo:"2024-11-14T02:51:08.370Z",destination:i(o),isFavorite:!0,offers:[i(p)],type:i(r)}];function d(){return i(c)}const v=[{type:i(r),offers:[{id:"575c1f4b-b575-4ef7-b9ec-9e4e218f9ac0",title:i(p),price:s(100,300)},{id:"2666bc9c-0ec7-4156-8a30-deadcca5d0c7",title:i(p),price:s(100,300)},{id:"a0499b61-8c63-4f89-84bc-0a5740aad819",title:i(p),price:s(100,300)},{id:"5345f195-ce01-4217-b986-0ebd5c1b9177",title:i(p),price:s(100,300)},{id:"3c8d6fa3-7ff8-459b-a1aa-0e581e45c779",title:i(p),price:s(100,300)}]},{type:i(r),offers:[{id:"a4dd55b0-77e6-42da-83f6-7e9b57764d85",title:i(p),price:s(100,300)},{id:"49da3166-b680-4fb3-a3fc-3750d534e18e",title:i(p),price:s(100,300)},{id:"e9d4c4d5-03ab-4da1-ad2f-053ffafba6f1",title:i(p),price:s(100,300)}]},{type:i(r),offers:[{id:"33cc680e-5a46-46c4-8cab-072b1f5b9b5f",title:i(p),price:s(100,300)},{id:"e420f53e-f5b3-4ccc-9f05-e6b5deb4421a",title:i(p),price:s(100,300)},{id:"d283cad1-cea0-43ea-a762-d66bd66b2c4c",title:i(p),price:s(100,300)}]}];function _(){return i(v)}const f=document.querySelector(".page-body"),u=f.querySelector(".trip-main"),b=f.querySelector(".trip-info"),h=u.querySelector(".trip-controls__filters"),m=f.querySelector(".trip-events"),y=new class{points=Array.from({length:5},d);offers=Array.from({length:1},_);getPoints(){return this.points}getOffers(){return this.offers}},g=new class{constructor({container:e,pointsModel:t}){this.container=e,this.pointsModel=t}init(){this.boardOffers=[...this.pointsModel.getOffers()],this.boardPoints=[...this.pointsModel.getPoints()],n(new a({offers:this.boardOffers[0]}),this.container,e);for(let t=0;t<this.boardPoints.length;t++)n(new l({points:this.boardPoints[t]}),this.container,e)}}({container:m,pointsModel:y});console.log(g),function(e,t,n="beforebegin"){t.insertAdjacentElement(n,e.getElement())}(new class{getTemplate(){return' <section class="trip-main__trip-info  trip-info">\n            <div class="trip-info__main">\n              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n              <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n            </div>\n\n            <p class="trip-info__cost">\n              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n            </p>\n          </section>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},b),n(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},h),n(new class{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},m),g.init()})();
//# sourceMappingURL=bundle.a353c476c17917ac38cf.js.map