"use strict";(self["webpackChunkionic_larochelle_handicap"]=self["webpackChunkionic_larochelle_handicap"]||[]).push([[544],{2642:(e,t,o)=>{o.r(t),o.d(t,{startFocusVisible:()=>r});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ion-focused",n="ion-focusable",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],o=!0;const r=e?e.shadowRoot:document,i=e||document.body,a=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},d=()=>{o=!1,a([])},u=e=>{o=c.includes(e.key),o||a([])},l=e=>{if(o&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));a(t)}},v=()=>{r.activeElement===i&&a([])};r.addEventListener("keydown",u),r.addEventListener("focusin",l),r.addEventListener("focusout",v),r.addEventListener("touchstart",d),r.addEventListener("mousedown",d);const h=()=>{r.removeEventListener("keydown",u),r.removeEventListener("focusin",l),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",d),r.removeEventListener("mousedown",d)};return{destroy:h,setFocus:a}}}}]);
//# sourceMappingURL=544.551109dd.js.map