(()=>{"use strict";var e={10:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(537),a=i.n(n),s=i(645),r=i.n(s)()(a());r.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(n)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&r[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),i&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=i):l[2]=i),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},537:e=>{e.exports=function(e){var t=e[1],i=e[3];if(!i)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),s="/*# ".concat(a," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var s={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],l=s[d]||0,f="".concat(d," ").concat(l);s[d]=l+1;var p=i(f),b={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(b);else{var u=a(b,n);n.byIndex=o,t.splice(o,0,{identifier:f,updater:u,references:1})}r.push(f)}return r}function a(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,a){var s=n(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<s.length;r++){var o=i(s[r]);t[o].references--}for(var c=n(e,a),d=0;d<s.length;d++){var l=i(s[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var a=void 0!==i.layer;a&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,a&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var s=i.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0,(()=>{function e(e,t,i="beforeend"){if(!(e instanceof y))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(i,e.element)}function t(e,t){if(!(e instanceof y&&t instanceof y))throw new Error("Can replace only components");const i=e.element,n=t.element,a=n.parentElement;if(null===a)throw new Error("Parent element doesn't exist");a.replaceChild(i,n)}var n=i(379),a=i.n(n),s=i(795),r=i.n(s),o=i(569),c=i.n(o),d=i(565),l=i.n(d),f=i(216),p=i.n(f),b=i(589),u=i.n(b),v=i(10),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),a()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const h="shake";class y{#e=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(h),setTimeout((()=>{this.element.classList.remove(h),e?.()}),600)}}class _ extends y{get template(){return' <section class="trip-main__trip-info  trip-info">\n            <div class="trip-info__main">\n              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n              <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n            </div>\n\n            <p class="trip-info__cost">\n              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n            </p>\n          </section>'}}class g extends y{#t=null;#i=null;#n=null;#a=null;constructor({point:e,offers:t,destination:i,onOpenEditButtonClick:n}){super(),this.#t=e,this.#i=t,this.#n=i,this.#a=n,this.#s()}get template(){return((e,t,i)=>{const{basePrice:n,type:a,isFavorite:s}=e,r=a[0].toUpperCase()+a.slice(1,a.length),o=t.map((e=>`\n    <li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n\n      <span class="event__offer-price">${e.price}</span>\n                  </li>\n  `)).join(""),c=s?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn";return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="2019-03-18">MAR 18</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${r} ${i.name}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n                  </p>\n                  <p class="event__duration">30M</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${n}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                ${o}\n                </ul>\n                <button class="${c}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>\n  `})(this.#t,this.#i,this.#n)}#s(){this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}#r=e=>{e.preventDefault(e),this.#a()}}const T=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"];class w extends y{#t=null;#o=[];#c=[];#d=null;#l=null;#f=null;constructor({point:e,allOffers:t,allDestination:i,pointDestination:n,onCloseEditButtonClick:a,onSubmitButtonClick:s}){super(),this.#t=e,this.#o=t,this.#c=i,this.#d=n,this.#l=a,this.#f=s,this.#s()}get template(){return function(e,t,i,n){const{basePrice:a,type:s}=e,r=s[0].toUpperCase()+s.slice(1,s.length),{name:o,description:c,pictures:d}=n,l=t.offers.map((i=>{const n=e.offers.includes(i.id)?"checked":"";return((e,t,i,n)=>`\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}" ${n}>\n    <label class="event__offer-label" for="event-offer-${e}-1">\n      <span class="event__offer-title">${t}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${i}</span>\n    </label>\n  </div>\n`)(t.type,i.title,i.price,n)})).join(""),f=i.map((e=>`<option value="${e.name}"></option>`)).join("");return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n              ${T.map((e=>((e,t)=>`\n  <div class="event__type-item">\n    <input id="event-type-${e.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}" ${t}>\n    <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-1">${e}</label>\n  </div>\n`)(e,e===r?"checked":""))).join("")}\n            </fieldset>\n          </div>\n        </div>\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${r}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${o}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${f}\n          </datalist>\n        </div>\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n        </div>\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n        </div>\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n          <div class="event__available-offers">\n            ${l}\n          </div>\n        </section>\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">${c}</p>\n           <div class="event__photos-container">\n                        <div class="event__photos-tape">\n          ${p=d,p.reduce(((e,{src:t})=>e+`\n               <img class="event__photo" src="${t}" alt="Event photo">\n  `),"")}\n                        </div>\n\n        </section>\n      </section>\n    </form>\n  </li>`;var p}(this.#t,this.#o,this.#c,this.#d)}#s(){this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#p),this.element.querySelector(".event__save-btn").addEventListener("submit",this.#b)}#p=e=>{e.preventDefault(),this.#l()};#b=e=>{e.preventDefault(),this.#f()}}const k=document.querySelector(".page-body").querySelector(".trip-info"),E=[{id:"0d685664-4f88-42a5-9dc7-7bcdcc5f20d3",basePrice:60,dateFrom:"2024-09-08T04:36:09.239Z",dateTo:"2024-09-08T13:05:09.239Z",destination:"36eb5b49-2cec-4834-87e7-c464e155c2d4",isFavorite:!1,offers:["fdec3690-03d4-437d-96ce-3beb5cd46988","417d4d4e-8f10-4963-9156-b9b8998eb157"],type:"drive"},{id:"d84bd54e-b2b8-43b6-b7bd-4620e7228c78",basePrice:6774,dateFrom:"2024-09-10T09:06:09.239Z",dateTo:"2024-09-12T07:58:09.239Z",destination:"d9e9fc03-d3c9-4f60-baed-e5106dbfe007",isFavorite:!1,offers:["fdec3690-03d4-437d-96ce-3beb5cd46988","417d4d4e-8f10-4963-9156-b9b8998eb157"],type:"drive"},{id:"cf78f6f1-89fa-4525-9b06-630f76085018",basePrice:2278,dateFrom:"2024-09-13T18:59:09.239Z",dateTo:"2024-09-14T15:54:09.239Z",destination:"f9bc02d8-df0d-45c6-89a3-efcf48289a39",isFavorite:!0,offers:["253d0cac-ef24-48eb-8123-ea44cce78948","e3a256a9-423a-44f3-8953-fb771f6272ce","47987680-6915-4dfa-b219-360d004bcdd5","ba7e1ad7-223a-4a88-bfd5-123b7ea84741","f5e972a5-0868-4dcc-b744-832185567ff4","a73620d0-5978-4568-8a94-f6c83be59056"],type:"ship"},{id:"6d9e8075-ad19-4565-9872-ffd7f574d352",basePrice:374,dateFrom:"2024-09-15T13:16:09.239Z",dateTo:"2024-09-17T08:39:09.239Z",destination:"6b7d7f4e-739e-46e3-a7bc-8bde066d1e40",isFavorite:!0,offers:[],type:"sightseeing"},{id:"188f3207-7aeb-406b-9e5e-6924dd4fb7bd",basePrice:7569,dateFrom:"2024-09-18T21:15:09.239Z",dateTo:"2024-09-19T11:01:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!1,offers:[],type:"sightseeing"},{id:"725626fd-6452-46d6-bd29-be7db7c1b245",basePrice:6727,dateFrom:"2024-09-20T14:32:09.239Z",dateTo:"2024-09-21T14:52:09.239Z",destination:"7e34b1b2-15ea-4f47-a0d1-e35a233774f2",isFavorite:!0,offers:["b839e0ce-46b4-4cfa-8953-e6957874ebd3","0e10983a-ce28-4a91-9e6c-d7042d5bcd7d","5cd19fae-7e59-454c-a390-be20c182effd"],type:"flight"},{id:"6d033118-fbab-4dcc-bb8e-750c0a5bb523",basePrice:3008,dateFrom:"2024-09-23T15:34:09.239Z",dateTo:"2024-09-23T22:57:09.239Z",destination:"6b7d7f4e-739e-46e3-a7bc-8bde066d1e40",isFavorite:!1,offers:["776b2af8-48b5-49ad-bf4c-bbcee0139e1c","a2611bbb-1e05-4670-93ba-b7827c45b2f3"],type:"check-in"},{id:"87fc6ece-f0ac-4b39-81b5-244a94865004",basePrice:9246,dateFrom:"2024-09-25T06:52:09.239Z",dateTo:"2024-09-26T05:21:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!1,offers:["9badcbbd-1e40-4a42-b696-3da3052bc571","32ac83c4-7a14-4f4d-aeff-7a94d00bc202","2e554d1d-7ed4-4db5-983a-366d7fe120e0"],type:"bus"},{id:"c1d05f2c-8a64-4f7b-a7f0-8bba0ebec169",basePrice:7028,dateFrom:"2024-09-26T16:29:09.239Z",dateTo:"2024-09-27T10:59:09.239Z",destination:"d9e9fc03-d3c9-4f60-baed-e5106dbfe007",isFavorite:!0,offers:[],type:"restaurant"},{id:"ce0c9436-4245-4994-b257-d986f8900386",basePrice:6476,dateFrom:"2024-09-27T19:33:09.239Z",dateTo:"2024-09-29T02:15:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!0,offers:["fdec3690-03d4-437d-96ce-3beb5cd46988","417d4d4e-8f10-4963-9156-b9b8998eb157"],type:"drive"},{id:"e9cfcd4a-e4e2-4e66-805c-5fb9057b3f0b",basePrice:4321,dateFrom:"2024-09-30T17:50:09.239Z",dateTo:"2024-10-02T01:48:09.239Z",destination:"d26b78f2-6da4-49a2-9e70-15646eb228e0",isFavorite:!1,offers:["ff5bb648-e5bc-4ebf-9f3a-67647118f765","05437e62-aeae-4399-abab-548d0aa6befe"],type:"restaurant"},{id:"e0061dbd-9844-4efb-91a5-d0610bab7a1f",basePrice:6414,dateFrom:"2024-10-02T10:01:09.239Z",dateTo:"2024-10-03T21:11:09.239Z",destination:"7e34b1b2-15ea-4f47-a0d1-e35a233774f2",isFavorite:!0,offers:["a2611bbb-1e05-4670-93ba-b7827c45b2f3"],type:"check-in"},{id:"fa6d2b97-c59a-4fdc-818c-36954aa281a7",basePrice:7229,dateFrom:"2024-10-04T17:24:09.239Z",dateTo:"2024-10-05T11:45:09.239Z",destination:"d9e9fc03-d3c9-4f60-baed-e5106dbfe007",isFavorite:!0,offers:["2e554d1d-7ed4-4db5-983a-366d7fe120e0"],type:"bus"},{id:"6d4158a7-8664-4989-91f5-0da781f24811",basePrice:6182,dateFrom:"2024-10-07T10:53:09.239Z",dateTo:"2024-10-09T05:46:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!1,offers:[],type:"restaurant"},{id:"fff6b6c9-1bce-4267-84eb-9afd49ae14b8",basePrice:9377,dateFrom:"2024-10-10T03:59:09.239Z",dateTo:"2024-10-11T21:10:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!0,offers:["ba7e1ad7-223a-4a88-bfd5-123b7ea84741","f5e972a5-0868-4dcc-b744-832185567ff4","a73620d0-5978-4568-8a94-f6c83be59056"],type:"ship"},{id:"eaf7cd69-399e-44bd-82da-2997fa3e0e7a",basePrice:7972,dateFrom:"2024-10-12T23:51:09.239Z",dateTo:"2024-10-13T23:01:09.239Z",destination:"68c7958d-37a6-41df-b563-38eb8d4cda75",isFavorite:!1,offers:["fdec3690-03d4-437d-96ce-3beb5cd46988","417d4d4e-8f10-4963-9156-b9b8998eb157"],type:"drive"},{id:"6f6d74d1-bbc8-494f-85b4-0b54e412b87a",basePrice:4790,dateFrom:"2024-10-14T18:27:09.239Z",dateTo:"2024-10-15T06:14:09.239Z",destination:"8a5e9c25-35e5-49ff-b3ba-ecde45919cb9",isFavorite:!1,offers:[],type:"sightseeing"},{id:"4a97801e-d477-4077-88ae-8a6d2da5d9a9",basePrice:7166,dateFrom:"2024-10-15T22:19:09.239Z",dateTo:"2024-10-17T14:12:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!1,offers:["05437e62-aeae-4399-abab-548d0aa6befe"],type:"restaurant"},{id:"f4f9a516-7956-4097-a144-d7feae96c353",basePrice:5237,dateFrom:"2024-10-19T08:46:09.239Z",dateTo:"2024-10-20T17:35:09.239Z",destination:"6b7d7f4e-739e-46e3-a7bc-8bde066d1e40",isFavorite:!0,offers:["cc1e55e9-e7ca-4b96-a8f5-f8872adf8d96","8c379b95-bf04-4e0b-ac27-af7dadc9cfd0"],type:"taxi"},{id:"247efdf7-b15f-43d0-a4d0-1ce94872f3f3",basePrice:8872,dateFrom:"2024-10-21T12:56:09.239Z",dateTo:"2024-10-22T08:43:09.239Z",destination:"d26b78f2-6da4-49a2-9e70-15646eb228e0",isFavorite:!0,offers:[],type:"restaurant"},{id:"8cfd5929-62ef-4979-893d-55d7791d0520",basePrice:2011,dateFrom:"2024-10-23T20:56:09.239Z",dateTo:"2024-10-25T18:31:09.239Z",destination:"36eb5b49-2cec-4834-87e7-c464e155c2d4",isFavorite:!0,offers:["b9a0d3c2-8ca1-4723-ae6d-401836c55af1"],type:"train"},{id:"77aebdaa-c06f-486e-8fcb-fc09562a14d1",basePrice:8633,dateFrom:"2024-10-26T18:10:09.239Z",dateTo:"2024-10-27T22:56:09.239Z",destination:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",isFavorite:!0,offers:["e3a256a9-423a-44f3-8953-fb771f6272ce","47987680-6915-4dfa-b219-360d004bcdd5","ba7e1ad7-223a-4a88-bfd5-123b7ea84741","f5e972a5-0868-4dcc-b744-832185567ff4","a73620d0-5978-4568-8a94-f6c83be59056"],type:"ship"},{id:"e474d26f-5414-4860-b0c3-bab975b1c9ec",basePrice:5081,dateFrom:"2024-10-29T09:15:09.239Z",dateTo:"2024-10-29T17:24:09.239Z",destination:"8a5e9c25-35e5-49ff-b3ba-ecde45919cb9",isFavorite:!1,offers:["32ac83c4-7a14-4f4d-aeff-7a94d00bc202","2e554d1d-7ed4-4db5-983a-366d7fe120e0"],type:"bus"},{id:"a59fb3a2-2cf2-4412-b95a-16e8b43d9440",basePrice:9345,dateFrom:"2024-10-31T15:57:09.239Z",dateTo:"2024-11-02T15:21:09.239Z",destination:"36eb5b49-2cec-4834-87e7-c464e155c2d4",isFavorite:!0,offers:["754d4038-22ec-4ae4-90c9-7b53b9d846cb","37f742d3-cf91-47d9-9089-156c62569bdc","776b2af8-48b5-49ad-bf4c-bbcee0139e1c","a2611bbb-1e05-4670-93ba-b7827c45b2f3"],type:"check-in"},{id:"4724a5ea-5c4d-4eb3-9ac1-d5d2f85c75f1",basePrice:7989,dateFrom:"2024-11-03T04:36:09.239Z",dateTo:"2024-11-04T01:37:09.239Z",destination:"8a5e9c25-35e5-49ff-b3ba-ecde45919cb9",isFavorite:!0,offers:["9badcbbd-1e40-4a42-b696-3da3052bc571","32ac83c4-7a14-4f4d-aeff-7a94d00bc202","2e554d1d-7ed4-4db5-983a-366d7fe120e0"],type:"bus"}];function C(){return(e=E)[Math.floor(Math.random()*e.length)];var e}const j=[{type:"taxi",offers:[{id:"740a41fa-f027-4a53-adff-58d2b28d5ebd",title:"Upgrade to a business class",price:36},{id:"a12e7bfc-6420-4184-b192-fb5e960752cd",title:"Choose the radio station",price:122},{id:"c71d2c6c-ce6b-47b9-b687-d210ed14c09f",title:"Choose temperature",price:97},{id:"cc1e55e9-e7ca-4b96-a8f5-f8872adf8d96",title:"Drive quickly, I'm in a hurry",price:74},{id:"8c379b95-bf04-4e0b-ac27-af7dadc9cfd0",title:"Drive slowly",price:143}]},{type:"bus",offers:[{id:"9badcbbd-1e40-4a42-b696-3da3052bc571",title:"Infotainment system",price:185},{id:"32ac83c4-7a14-4f4d-aeff-7a94d00bc202",title:"Order meal",price:60},{id:"2e554d1d-7ed4-4db5-983a-366d7fe120e0",title:"Choose seats",price:167}]},{type:"train",offers:[{id:"2251f26f-ebba-4f3f-ac2a-fe5a3ff5bbfb",title:"Book a taxi at the arrival point",price:92},{id:"b4a9180f-fe2b-45a4-8a95-b4dce6dbf222",title:"Order a breakfast",price:195},{id:"b9a0d3c2-8ca1-4723-ae6d-401836c55af1",title:"Wake up at a certain time",price:179}]},{type:"flight",offers:[{id:"f33cba70-44f4-49e2-8b48-82778e76ba51",title:"Choose meal",price:45},{id:"376a6e68-2721-4f37-bb3b-a577b48db7c9",title:"Choose seats",price:69},{id:"1d75be2c-dc40-4d66-a2ab-1163af258996",title:"Upgrade to comfort class",price:36},{id:"b839e0ce-46b4-4cfa-8953-e6957874ebd3",title:"Upgrade to business class",price:200},{id:"0e10983a-ce28-4a91-9e6c-d7042d5bcd7d",title:"Add luggage",price:49},{id:"5cd19fae-7e59-454c-a390-be20c182effd",title:"Business lounge",price:33}]},{type:"check-in",offers:[{id:"5b4eb446-15cc-455c-bcc5-d0b8413a36b2",title:"Choose the time of check-in",price:63},{id:"754d4038-22ec-4ae4-90c9-7b53b9d846cb",title:"Choose the time of check-out",price:109},{id:"37f742d3-cf91-47d9-9089-156c62569bdc",title:"Add breakfast",price:90},{id:"776b2af8-48b5-49ad-bf4c-bbcee0139e1c",title:"Laundry",price:103},{id:"a2611bbb-1e05-4670-93ba-b7827c45b2f3",title:"Order a meal from the restaurant",price:124}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"253d0cac-ef24-48eb-8123-ea44cce78948",title:"Choose meal",price:54},{id:"e3a256a9-423a-44f3-8953-fb771f6272ce",title:"Choose seats",price:171},{id:"47987680-6915-4dfa-b219-360d004bcdd5",title:"Upgrade to comfort class",price:37},{id:"ba7e1ad7-223a-4a88-bfd5-123b7ea84741",title:"Upgrade to business class",price:136},{id:"f5e972a5-0868-4dcc-b744-832185567ff4",title:"Add luggage",price:191},{id:"a73620d0-5978-4568-8a94-f6c83be59056",title:"Business lounge",price:60}]},{type:"drive",offers:[{id:"fdec3690-03d4-437d-96ce-3beb5cd46988",title:"With automatic transmission",price:48},{id:"417d4d4e-8f10-4963-9156-b9b8998eb157",title:"With air conditioning",price:117}]},{type:"restaurant",offers:[{id:"ff5bb648-e5bc-4ebf-9f3a-67647118f765",title:"Choose live music",price:139},{id:"05437e62-aeae-4399-abab-548d0aa6befe",title:"Choose VIP area",price:192}]}],F=[{id:"d9e9fc03-d3c9-4f60-baed-e5106dbfe007",description:"Paris - is a wonderful city!",name:"Paris",pictures:[]},{id:"6b7d7f4e-739e-46e3-a7bc-8bde066d1e40",description:"Venice - with a beautiful old town",name:"Venice",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Venice with an embankment of a mighty river as a centre of attraction"}]},{id:"a9670654-21d6-4ccf-bde9-e1fa264f46cb",description:"Frankfurt - with an embankment of a mighty river as a centre of attraction",name:"Frankfurt",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/16.jpg",description:"Frankfurt is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Frankfurt with an embankment of a mighty river as a centre of attraction"}]},{id:"f9bc02d8-df0d-45c6-89a3-efcf48289a39",description:"Oslo - in a middle of Europe",name:"Oslo",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Oslo with crowded streets"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Oslo is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Oslo for those who value comfort and coziness"}]},{id:"36eb5b49-2cec-4834-87e7-c464e155c2d4",description:"Monaco - middle-eastern paradise",name:"Monaco",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Monaco for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Monaco middle-eastern paradise"},{src:"https://24.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Monaco with a beautiful old town"}]},{id:"68c7958d-37a6-41df-b563-38eb8d4cda75",description:"Berlin - a true asian pearl",name:"Berlin",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/13.jpg",description:"Berlin famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Berlin is a beautiful city"}]},{id:"f4bf1e21-1019-4532-889a-8f0ec673be63",description:"Barcelona - famous for its crowded street markets with the best street food in Asia",name:"Barcelona",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Barcelona a perfect place to stay with a family"},{src:"https://24.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Barcelona is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Barcelona in a middle of Europe"},{src:"https://24.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Barcelona for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Barcelona with crowded streets"}]},{id:"7e34b1b2-15ea-4f47-a0d1-e35a233774f2",description:"Helsinki - with an embankment of a mighty river as a centre of attraction",name:"Helsinki",pictures:[]},{id:"d26b78f2-6da4-49a2-9e70-15646eb228e0",description:"Geneva - a perfect place to stay with a family",name:"Geneva",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Geneva full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://24.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Geneva full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://24.objects.htmlacademy.pro/static/destinations/16.jpg",description:"Geneva for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/16.jpg",description:"Geneva is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Geneva full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"8a5e9c25-35e5-49ff-b3ba-ecde45919cb9",description:"Rotterdam - full of of cozy canteens where you can try the best coffee in the Middle East",name:"Rotterdam",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Rotterdam with an embankment of a mighty river as a centre of attraction"},{src:"https://24.objects.htmlacademy.pro/static/destinations/13.jpg",description:"Rotterdam with crowded streets"},{src:"https://24.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Rotterdam famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/15.jpg",description:"Rotterdam in a middle of Europe"}]}],B=document.querySelector(".page-body"),A=B.querySelector(".trip-main").querySelector(".trip-controls__filters"),Z=B.querySelector(".trip-events"),P=new class{#u=Array.from({length:6},C);#i=j;#n=F;get points(){return this.#u}get offers(){return this.#i}get destinations(){return this.#n}getDestinationsById(e){return this.destinations.find((t=>t.id===e))}getOffersByType(e){return this.offers.find((t=>t.type===e))}getOffersById(e,t){return this.getOffersByType(e).offers.filter((e=>t.find((t=>e.id===t))))}},x=new class{#v=null;#m=null;constructor({container:e,pointsModel:t}){this.#v=e,this.#m=t}init(){e(new _,k),this.boardPoints=[...this.#m.points],this.boardOffers=[...this.#m.offers];for(let e=0;e<this.boardPoints.length;e++)this.#h(this.boardPoints[e])}#h(i){const n=e=>{"Escape"===e.key&&(e.preventDefault(),r(),document.removeEventListener("keydown",n))},a=new g({point:i,offers:[...this.#m.getOffersById(i.type,i.offers)],destination:this.#m.getDestinationsById(this.boardPoints[0].destination),onOpenEditButtonClick:()=>{t(s,a),document.addEventListener("keydown",n)}}),s=new w({point:i,allOffers:this.#m.getOffersByType(i.type),pointDestination:this.#m.getDestinationsById(i.destination),allDestination:this.#m.destinations,onCloseEditButtonClick:()=>{r(),document.removeEventListener("keydown",n)},onSubmitButtonClick:()=>{r(),document.removeEventListener("keydown",n)}});function r(){t(a,s)}e(a,this.#v)}}({container:Z,pointsModel:P});e(new class extends y{get template(){return'<form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>'}},A),e(new class extends y{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}},Z),x.init()})()})();
//# sourceMappingURL=bundle.31121a23580d91346ebd.js.map