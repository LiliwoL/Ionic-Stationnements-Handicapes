"use strict";(self["webpackChunkionic_larochelle_handicap"]=self["webpackChunkionic_larochelle_handicap"]||[]).push([[541],{3541:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>k,keyboardDidClose:()=>f,keyboardDidOpen:()=>g,keyboardDidResize:()=>w,resetKeyboardAssist:()=>h,setKeyboardClose:()=>b,setKeyboardOpen:()=>l,startKeyboardAssist:()=>p,trackViewportChanges:()=>D});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o="ionKeyboardDidShow",s="ionKeyboardDidHide",a=150;let d={},n={},r=!1;const h=()=>{d={},n={},r=!1},p=e=>{c(e),e.visualViewport&&(n=k(e.visualViewport),e.visualViewport.onresize=()=>{D(e),g()||w(e)?l(e):f(e)&&b(e)})},c=e=>{e.addEventListener("keyboardDidShow",(t=>l(e,t))),e.addEventListener("keyboardDidHide",(()=>b(e)))},l=(e,t)=>{u(e,t),r=!0},b=e=>{y(e),r=!1},g=()=>{const e=(d.height-n.height)*n.scale;return!r&&d.width===n.width&&e>a},w=e=>r&&!f(e),f=e=>r&&n.height===e.innerHeight,u=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-n.height,s=new CustomEvent(o,{detail:{keyboardHeight:i}});e.dispatchEvent(s)},y=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},D=e=>{d=Object.assign({},n),n=k(e.visualViewport)},k=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=541.3ecb6731.js.map