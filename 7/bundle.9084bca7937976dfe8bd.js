(()=>{"use strict";const e="beforeend";function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function i(t,i,a=e){i.insertAdjacentElement(a,t.getElement())}class a{constructor({point:e,offers:t,destination:i}){this.point=e,this.offers=t,this.destination=i}getTemplate(){return((e,t,i)=>{const{basePrice:a,type:n,isFavorite:s}=e,d=n[0].toUpperCase()+n.slice(1,n.length),r=t.map((e=>`\n    <li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n\n      <span class="event__offer-price">${e.price}</span>\n                  </li>\n  `)).join(""),c=s?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn";return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="2019-03-18">MAR 18</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${n}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${d} ${i.name}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n                  </p>\n                  <p class="event__duration">30M</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${a}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                ${r}\n                </ul>\n                <button class="${c}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>\n  `})(this.point,this.offers,this.destination)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class n{constructor({point:e,allOffers:t,allDestination:i,pointDestination:a}){this.point=e,this.allOffers=t,this.allDestination=i,this.pointDestination=a}getTemplate(){return function(e,t,i,a){const{offers:n}=t,{type:s,basePrice:d}=e,{description:r,name:c}=a;return`<form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n\n                        <div class="event__type-item">\n                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">ffdd</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      ${s}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${c}" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      <option value="Amsterdam"></option>\n                      <option value="Geneva"></option>\n                      <option value="Chamonix"></option>\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${d}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Delete</button>\n                  <button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>\n                </header>\n\n<section class="event__details">\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n${function(e){return e.reduce(((e,{title:t,price:i})=>e+`\n        <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n            <label class="event__offer-label" for="event-offer-luggage-1">\n              <span class="event__offer-title">${t}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${i}</span>\n            </label>\n          </div>\n    `),"")}(n)}\n             <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${r}</p>\n                  </section>\n                </section>\n              </form>`}(this.point,this.allOffers,this.allDestination,this.pointDestination)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const s=[{id:"0d685664-4f88-42a5-9dc7-7bcdcc5f20d3",basePrice:60,dateFrom:"2024-09-08T04:36:09.239Z",dateTo:"2024-09-08T13:05:09.239Z",destination:"36eb5b49-2cec-4834-87e7-c464e155c2d4",isFavorite:!1,offers:["fdec3690-03d4-437d-96ce-3beb5cd46988","417d4d4e-8f10-4963-9156-b9b8998eb157"],type:"drive"},{id:"d84bd54e-b2b8-43b6-b7bd-4620e7228c78",basePrice:6774,dateFrom:"2024-09-10T09:06:09.239Z",dateTo:"2024-09-12T07:58:09.239Z",destination:"d9e9fc03-d3c9-4f60-baed-e5106dbfe007",isFavorite:!1,offers:["fdec3690-03d4-437d-96ce-3beb5cd46988","417d4d4e-8f10-4963-9156-b9b8998eb157"],type:"drive"},{id:"cf78f6f1-89fa-4525-9b06-630f76085018",basePrice:2278,dateFrom:"2024-09-13T18:59:09.239Z",dateTo:"2024-09-14T15:54:09.239Z",destination:"f9bc02d8-df0d-45c6-89a3-efcf48289a39",isFavorite:!0,offers:["253d0cac-ef24-48eb-8123-ea44cce78948","e3a256a9-423a-44f3-8953-fb771f6272ce","47987680-6915-4dfa-b219-360d004bcdd5","ba7e1ad7-223a-4a88-bfd5-123b7ea84741","f5e972a5-0868-4dcc-b744-832185567ff4","a73620d0-5978-4568-8a94-f6c83be59056"],type:"ship"},{id:"6d9e8075-ad19-4565-9872-ffd7f574d352",basePrice:374,dateFrom:"2024-09-15T13:16:09.239Z",dateTo:"2024-09-17T08:39:09.239Z",destination:"6b7d7f4e-739e-46e3-a7bc-8bde066d1e40",isFavorite:!0,offers:[],type:"sightseeing"},{id:"188f3207-7aeb-406b-9e5e-6924dd4fb7bd",basePrice:7569,dateFrom:"2024-09-18T21:15:09.239Z",dateTo:"2024-09-19T11:01:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!1,offers:[],type:"sightseeing"},{id:"725626fd-6452-46d6-bd29-be7db7c1b245",basePrice:6727,dateFrom:"2024-09-20T14:32:09.239Z",dateTo:"2024-09-21T14:52:09.239Z",destination:"7e34b1b2-15ea-4f47-a0d1-e35a233774f2",isFavorite:!0,offers:["b839e0ce-46b4-4cfa-8953-e6957874ebd3","0e10983a-ce28-4a91-9e6c-d7042d5bcd7d","5cd19fae-7e59-454c-a390-be20c182effd"],type:"flight"},{id:"6d033118-fbab-4dcc-bb8e-750c0a5bb523",basePrice:3008,dateFrom:"2024-09-23T15:34:09.239Z",dateTo:"2024-09-23T22:57:09.239Z",destination:"6b7d7f4e-739e-46e3-a7bc-8bde066d1e40",isFavorite:!1,offers:["776b2af8-48b5-49ad-bf4c-bbcee0139e1c","a2611bbb-1e05-4670-93ba-b7827c45b2f3"],type:"check-in"},{id:"87fc6ece-f0ac-4b39-81b5-244a94865004",basePrice:9246,dateFrom:"2024-09-25T06:52:09.239Z",dateTo:"2024-09-26T05:21:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!1,offers:["9badcbbd-1e40-4a42-b696-3da3052bc571","32ac83c4-7a14-4f4d-aeff-7a94d00bc202","2e554d1d-7ed4-4db5-983a-366d7fe120e0"],type:"bus"},{id:"c1d05f2c-8a64-4f7b-a7f0-8bba0ebec169",basePrice:7028,dateFrom:"2024-09-26T16:29:09.239Z",dateTo:"2024-09-27T10:59:09.239Z",destination:"d9e9fc03-d3c9-4f60-baed-e5106dbfe007",isFavorite:!0,offers:[],type:"restaurant"},{id:"ce0c9436-4245-4994-b257-d986f8900386",basePrice:6476,dateFrom:"2024-09-27T19:33:09.239Z",dateTo:"2024-09-29T02:15:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!0,offers:["fdec3690-03d4-437d-96ce-3beb5cd46988","417d4d4e-8f10-4963-9156-b9b8998eb157"],type:"drive"},{id:"e9cfcd4a-e4e2-4e66-805c-5fb9057b3f0b",basePrice:4321,dateFrom:"2024-09-30T17:50:09.239Z",dateTo:"2024-10-02T01:48:09.239Z",destination:"d26b78f2-6da4-49a2-9e70-15646eb228e0",isFavorite:!1,offers:["ff5bb648-e5bc-4ebf-9f3a-67647118f765","05437e62-aeae-4399-abab-548d0aa6befe"],type:"restaurant"},{id:"e0061dbd-9844-4efb-91a5-d0610bab7a1f",basePrice:6414,dateFrom:"2024-10-02T10:01:09.239Z",dateTo:"2024-10-03T21:11:09.239Z",destination:"7e34b1b2-15ea-4f47-a0d1-e35a233774f2",isFavorite:!0,offers:["a2611bbb-1e05-4670-93ba-b7827c45b2f3"],type:"check-in"},{id:"fa6d2b97-c59a-4fdc-818c-36954aa281a7",basePrice:7229,dateFrom:"2024-10-04T17:24:09.239Z",dateTo:"2024-10-05T11:45:09.239Z",destination:"d9e9fc03-d3c9-4f60-baed-e5106dbfe007",isFavorite:!0,offers:["2e554d1d-7ed4-4db5-983a-366d7fe120e0"],type:"bus"},{id:"6d4158a7-8664-4989-91f5-0da781f24811",basePrice:6182,dateFrom:"2024-10-07T10:53:09.239Z",dateTo:"2024-10-09T05:46:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!1,offers:[],type:"restaurant"},{id:"fff6b6c9-1bce-4267-84eb-9afd49ae14b8",basePrice:9377,dateFrom:"2024-10-10T03:59:09.239Z",dateTo:"2024-10-11T21:10:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!0,offers:["ba7e1ad7-223a-4a88-bfd5-123b7ea84741","f5e972a5-0868-4dcc-b744-832185567ff4","a73620d0-5978-4568-8a94-f6c83be59056"],type:"ship"},{id:"eaf7cd69-399e-44bd-82da-2997fa3e0e7a",basePrice:7972,dateFrom:"2024-10-12T23:51:09.239Z",dateTo:"2024-10-13T23:01:09.239Z",destination:"68c7958d-37a6-41df-b563-38eb8d4cda75",isFavorite:!1,offers:["fdec3690-03d4-437d-96ce-3beb5cd46988","417d4d4e-8f10-4963-9156-b9b8998eb157"],type:"drive"},{id:"6f6d74d1-bbc8-494f-85b4-0b54e412b87a",basePrice:4790,dateFrom:"2024-10-14T18:27:09.239Z",dateTo:"2024-10-15T06:14:09.239Z",destination:"8a5e9c25-35e5-49ff-b3ba-ecde45919cb9",isFavorite:!1,offers:[],type:"sightseeing"},{id:"4a97801e-d477-4077-88ae-8a6d2da5d9a9",basePrice:7166,dateFrom:"2024-10-15T22:19:09.239Z",dateTo:"2024-10-17T14:12:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!1,offers:["05437e62-aeae-4399-abab-548d0aa6befe"],type:"restaurant"},{id:"f4f9a516-7956-4097-a144-d7feae96c353",basePrice:5237,dateFrom:"2024-10-19T08:46:09.239Z",dateTo:"2024-10-20T17:35:09.239Z",destination:"6b7d7f4e-739e-46e3-a7bc-8bde066d1e40",isFavorite:!0,offers:["cc1e55e9-e7ca-4b96-a8f5-f8872adf8d96","8c379b95-bf04-4e0b-ac27-af7dadc9cfd0"],type:"taxi"},{id:"247efdf7-b15f-43d0-a4d0-1ce94872f3f3",basePrice:8872,dateFrom:"2024-10-21T12:56:09.239Z",dateTo:"2024-10-22T08:43:09.239Z",destination:"d26b78f2-6da4-49a2-9e70-15646eb228e0",isFavorite:!0,offers:[],type:"restaurant"},{id:"8cfd5929-62ef-4979-893d-55d7791d0520",basePrice:2011,dateFrom:"2024-10-23T20:56:09.239Z",dateTo:"2024-10-25T18:31:09.239Z",destination:"36eb5b49-2cec-4834-87e7-c464e155c2d4",isFavorite:!0,offers:["b9a0d3c2-8ca1-4723-ae6d-401836c55af1"],type:"train"},{id:"77aebdaa-c06f-486e-8fcb-fc09562a14d1",basePrice:8633,dateFrom:"2024-10-26T18:10:09.239Z",dateTo:"2024-10-27T22:56:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!0,offers:["e3a256a9-423a-44f3-8953-fb771f6272ce","47987680-6915-4dfa-b219-360d004bcdd5","ba7e1ad7-223a-4a88-bfd5-123b7ea84741","f5e972a5-0868-4dcc-b744-832185567ff4","a73620d0-5978-4568-8a94-f6c83be59056"],type:"ship"},{id:"e474d26f-5414-4860-b0c3-bab975b1c9ec",basePrice:5081,dateFrom:"2024-10-29T09:15:09.239Z",dateTo:"2024-10-29T17:24:09.239Z",destination:"8a5e9c25-35e5-49ff-b3ba-ecde45919cb9",isFavorite:!1,offers:["32ac83c4-7a14-4f4d-aeff-7a94d00bc202","2e554d1d-7ed4-4db5-983a-366d7fe120e0"],type:"bus"},{id:"a59fb3a2-2cf2-4412-b95a-16e8b43d9440",basePrice:9345,dateFrom:"2024-10-31T15:57:09.239Z",dateTo:"2024-11-02T15:21:09.239Z",destination:"36eb5b49-2cec-4834-87e7-c464e155c2d4",isFavorite:!0,offers:["754d4038-22ec-4ae4-90c9-7b53b9d846cb","37f742d3-cf91-47d9-9089-156c62569bdc","776b2af8-48b5-49ad-bf4c-bbcee0139e1c","a2611bbb-1e05-4670-93ba-b7827c45b2f3"],type:"check-in"},{id:"4724a5ea-5c4d-4eb3-9ac1-d5d2f85c75f1",basePrice:7989,dateFrom:"2024-11-03T04:36:09.239Z",dateTo:"2024-11-04T01:37:09.239Z",destination:"8a5e9c25-35e5-49ff-b3ba-ecde45919cb9",isFavorite:!0,offers:["9badcbbd-1e40-4a42-b696-3da3052bc571","32ac83c4-7a14-4f4d-aeff-7a94d00bc202","2e554d1d-7ed4-4db5-983a-366d7fe120e0"],type:"bus"}];function d(){return(e=s)[Math.floor(Math.random()*e.length)];var e}const r=[{type:"taxi",offers:[{id:"740a41fa-f027-4a53-adff-58d2b28d5ebd",title:"Upgrade to a business class",price:36},{id:"a12e7bfc-6420-4184-b192-fb5e960752cd",title:"Choose the radio station",price:122},{id:"c71d2c6c-ce6b-47b9-b687-d210ed14c09f",title:"Choose temperature",price:97},{id:"cc1e55e9-e7ca-4b96-a8f5-f8872adf8d96",title:"Drive quickly, I'm in a hurry",price:74},{id:"8c379b95-bf04-4e0b-ac27-af7dadc9cfd0",title:"Drive slowly",price:143}]},{type:"bus",offers:[{id:"9badcbbd-1e40-4a42-b696-3da3052bc571",title:"Infotainment system",price:185},{id:"32ac83c4-7a14-4f4d-aeff-7a94d00bc202",title:"Order meal",price:60},{id:"2e554d1d-7ed4-4db5-983a-366d7fe120e0",title:"Choose seats",price:167}]},{type:"train",offers:[{id:"2251f26f-ebba-4f3f-ac2a-fe5a3ff5bbfb",title:"Book a taxi at the arrival point",price:92},{id:"b4a9180f-fe2b-45a4-8a95-b4dce6dbf222",title:"Order a breakfast",price:195},{id:"b9a0d3c2-8ca1-4723-ae6d-401836c55af1",title:"Wake up at a certain time",price:179}]},{type:"flight",offers:[{id:"f33cba70-44f4-49e2-8b48-82778e76ba51",title:"Choose meal",price:45},{id:"376a6e68-2721-4f37-bb3b-a577b48db7c9",title:"Choose seats",price:69},{id:"1d75be2c-dc40-4d66-a2ab-1163af258996",title:"Upgrade to comfort class",price:36},{id:"b839e0ce-46b4-4cfa-8953-e6957874ebd3",title:"Upgrade to business class",price:200},{id:"0e10983a-ce28-4a91-9e6c-d7042d5bcd7d",title:"Add luggage",price:49},{id:"5cd19fae-7e59-454c-a390-be20c182effd",title:"Business lounge",price:33}]},{type:"check-in",offers:[{id:"5b4eb446-15cc-455c-bcc5-d0b8413a36b2",title:"Choose the time of check-in",price:63},{id:"754d4038-22ec-4ae4-90c9-7b53b9d846cb",title:"Choose the time of check-out",price:109},{id:"37f742d3-cf91-47d9-9089-156c62569bdc",title:"Add breakfast",price:90},{id:"776b2af8-48b5-49ad-bf4c-bbcee0139e1c",title:"Laundry",price:103},{id:"a2611bbb-1e05-4670-93ba-b7827c45b2f3",title:"Order a meal from the restaurant",price:124}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"253d0cac-ef24-48eb-8123-ea44cce78948",title:"Choose meal",price:54},{id:"e3a256a9-423a-44f3-8953-fb771f6272ce",title:"Choose seats",price:171},{id:"47987680-6915-4dfa-b219-360d004bcdd5",title:"Upgrade to comfort class",price:37},{id:"ba7e1ad7-223a-4a88-bfd5-123b7ea84741",title:"Upgrade to business class",price:136},{id:"f5e972a5-0868-4dcc-b744-832185567ff4",title:"Add luggage",price:191},{id:"a73620d0-5978-4568-8a94-f6c83be59056",title:"Business lounge",price:60}]},{type:"drive",offers:[{id:"fdec3690-03d4-437d-96ce-3beb5cd46988",title:"With automatic transmission",price:48},{id:"417d4d4e-8f10-4963-9156-b9b8998eb157",title:"With air conditioning",price:117}]},{type:"restaurant",offers:[{id:"ff5bb648-e5bc-4ebf-9f3a-67647118f765",title:"Choose live music",price:139},{id:"05437e62-aeae-4399-abab-548d0aa6befe",title:"Choose VIP area",price:192}]}],c=[{id:"d9e9fc03-d3c9-4f60-baed-e5106dbfe007",description:"Paris - is a wonderful city!",name:"Paris",pictures:[]},{id:"6b7d7f4e-739e-46e3-a7bc-8bde066d1e40",description:"Venice - with a beautiful old town",name:"Venice",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Venice with an embankment of a mighty river as a centre of attraction"}]},{id:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",description:"Frankfurt - with an embankment of a mighty river as a centre of attraction",name:"Frankfurt",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/16.jpg",description:"Frankfurt is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Frankfurt with an embankment of a mighty river as a centre of attraction"}]},{id:"f9bc02d8-df0d-45c6-89a3-efcf48289a39",description:"Oslo - in a middle of Europe",name:"Oslo",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Oslo with crowded streets"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Oslo is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Oslo for those who value comfort and coziness"}]},{id:"36eb5b49-2cec-4834-87e7-c464e155c2d4",description:"Monaco - middle-eastern paradise",name:"Monaco",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Monaco for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Monaco middle-eastern paradise"},{src:"https://24.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Monaco with a beautiful old town"}]},{id:"68c7958d-37a6-41df-b563-38eb8d4cda75",description:"Berlin - a true asian pearl",name:"Berlin",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/13.jpg",description:"Berlin famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Berlin is a beautiful city"}]},{id:"f4bf1e21-1019-4532-889a-8f0ec673be63",description:"Barcelona - famous for its crowded street markets with the best street food in Asia",name:"Barcelona",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Barcelona a perfect place to stay with a family"},{src:"https://24.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Barcelona is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Barcelona in a middle of Europe"},{src:"https://24.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Barcelona for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Barcelona with crowded streets"}]},{id:"7e34b1b2-15ea-4f47-a0d1-e35a233774f2",description:"Helsinki - with an embankment of a mighty river as a centre of attraction",name:"Helsinki",pictures:[]},{id:"d26b78f2-6da4-49a2-9e70-15646eb228e0",description:"Geneva - a perfect place to stay with a family",name:"Geneva",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Geneva full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://24.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Geneva full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://24.objects.htmlacademy.pro/static/destinations/16.jpg",description:"Geneva for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/16.jpg",description:"Geneva is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Geneva full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"8a5e9c25-35e5-49ff-b3ba-ecde45919cb9",description:"Rotterdam - full of of cozy canteens where you can try the best coffee in the Middle East",name:"Rotterdam",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Rotterdam with an embankment of a mighty river as a centre of attraction"},{src:"https://24.objects.htmlacademy.pro/static/destinations/13.jpg",description:"Rotterdam with crowded streets"},{src:"https://24.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Rotterdam famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/15.jpg",description:"Rotterdam in a middle of Europe"}]}],o=document.querySelector(".page-body"),l=o.querySelector(".trip-main"),f=o.querySelector(".trip-info"),p=l.querySelector(".trip-controls__filters"),b=o.querySelector(".trip-events"),v=new class{points=Array.from({length:4},d);offers=r;destination=c;getPoints(){return this.points}getOffers(){return this.offers}getDestinations(){return this.destination}getDestinationsById(e){return this.getDestinations().find((t=>t.id===e))}getOffersByType(e){return this.getOffers().find((t=>t.type===e))}getOffersById(e,t){return this.getOffersByType(e).offers.filter((e=>t.find((t=>e.id===t))))}},h=new class{constructor({container:e,pointsModel:t}){this.container=e,this.pointsModel=t}init(){this.boardPoints=[...this.pointsModel.getPoints()],this.boardOffers=[...this.pointsModel.getOffers()],i(new n({point:this.boardPoints[0],allOffers:this.pointsModel.getOffersByType(this.boardPoints[0].type),pointDestination:this.pointsModel.getDestinationsById(this.boardPoints[0].destination),allDestination:this.pointsModel.getDestinations()}),this.container);for(let t=0;t<this.boardPoints.length;t++)i(new a({point:this.boardPoints[t],offers:[...this.pointsModel.getOffersById(this.boardPoints[t].type,this.boardPoints[t].offers)],destination:this.pointsModel.getDestinationsById(this.boardPoints[t].destination)}),this.container,e)}}({container:b,pointsModel:v});!function(e,t,i="beforebegin"){t.insertAdjacentElement(i,e.getElement())}(new class{getTemplate(){return' <section class="trip-main__trip-info  trip-info">\n            <div class="trip-info__main">\n              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n              <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n            </div>\n\n            <p class="trip-info__cost">\n              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n            </p>\n          </section>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},f),i(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},p),i(new class{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},b),h.init()})();
//# sourceMappingURL=bundle.9084bca7937976dfe8bd.js.map