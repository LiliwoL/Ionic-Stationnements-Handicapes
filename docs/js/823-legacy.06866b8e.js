"use strict";(self["webpackChunkionic_larochelle_handicap"]=self["webpackChunkionic_larochelle_handicap"]||[]).push([[823],{6823:(e,t,o)=>{o.r(t),o.d(t,{startTapClick:()=>i});var n=o(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const i=e=>{let t,o,i,v=10*-u,f=0;const p=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,m=e=>{v=(0,n.u)(e),k(e)},L=e=>{v=(0,n.u)(e),T(e)},w=e=>{if(2===e.button)return;const t=(0,n.u)(e)-u;v<t&&k(e)},E=e=>{const t=(0,n.u)(e)-u;v<t&&T(e)},b=()=>{clearTimeout(i),i=void 0,t&&(_(!1),t=void 0)},k=e=>{t||g(s(e),e)},T=e=>{g(void 0,e)},g=(e,o)=>{if(e&&e===t)return;clearTimeout(i),i=void 0;const{x:s,y:c}=(0,n.p)(o);if(t){if(h.has(t))throw new Error("internal error");t.classList.contains(r)||C(t,s,c),_(!0)}if(e){const t=h.get(e);t&&(clearTimeout(t),h.delete(e));const o=a(e)?0:d;e.classList.remove(r),i=setTimeout((()=>{C(e,s,c),i=void 0}),o)}t=e},C=(e,t,n)=>{if(f=Date.now(),e.classList.add(r),!p)return;const i=c(e);null!==i&&(R(),o=i.addRipple(t,n))},R=()=>{void 0!==o&&(o.then((e=>e())),o=void 0)},_=e=>{R();const o=t;if(!o)return;const n=l-Date.now()+f;if(e&&n>0&&!a(o)){const e=setTimeout((()=>{o.classList.remove(r),h.delete(o)}),l);h.set(o,e)}else o.classList.remove(r)},y=document;y.addEventListener("ionGestureCaptured",b),y.addEventListener("touchstart",m,!0),y.addEventListener("touchcancel",L,!0),y.addEventListener("touchend",L,!0),y.addEventListener("pointercancel",b,!0),y.addEventListener("mousedown",w,!0),y.addEventListener("mouseup",E,!0)},s=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=823-legacy.06866b8e.js.map