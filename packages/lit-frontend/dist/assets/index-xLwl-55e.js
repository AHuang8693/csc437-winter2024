(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=globalThis,De=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),Be=new WeakMap;let _t=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(De&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Be.set(t,e))}return e}toString(){return this.cssText}};const E=r=>new _t(typeof r=="string"?r:r+"",void 0,je),$=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new _t(t,r,je)},rr=(r,e)=>{if(De)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),s=se.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,r.appendChild(n)}},qe=De?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return E(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:nr,defineProperty:sr,getOwnPropertyDescriptor:ir,getOwnPropertyNames:or,getOwnPropertySymbols:ar,getPrototypeOf:lr}=Object,R=globalThis,Ve=R.trustedTypes,cr=Ve?Ve.emptyScript:"",Pe=R.reactiveElementPolyfillSupport,G=(r,e)=>r,le={toAttribute(r,e){switch(e){case Boolean:r=r?cr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ne=(r,e)=>!nr(r,e),ke={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Ne};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);class I extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ke){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&sr(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){const{get:s,set:i}=ir(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const c=s==null?void 0:s.call(this);i.call(this,o),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ke}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const e=lr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const t=this.properties,n=[...or(t),...ar(t)];for(const s of n)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(qe(s))}else e!==void 0&&t.push(qe(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var i;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:le).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var i;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:le;this._$Em=s,this[s]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Ne)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[G("elementProperties")]=new Map,I[G("finalized")]=new Map,Pe==null||Pe({ReactiveElement:I}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,ce=K.trustedTypes,We=ce?ce.createPolicy("lit-html",{createHTML:r=>r}):void 0,vt="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+S,hr=`<${bt}>`,L=document,Q=()=>L.createComment(""),Y=r=>r===null||typeof r!="object"&&typeof r!="function",yt=Array.isArray,dr=r=>yt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Se=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ge=/-->/g,Ke=/>/g,T=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Je=/'/g,Qe=/"/g,wt=/^(?:script|style|textarea|title)$/i,ur=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=ur(1),z=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ye=new WeakMap,U=L.createTreeWalker(L,129);function $t(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return We!==void 0?We.createHTML(e):e}const pr=(r,e)=>{const t=r.length-1,n=[];let s,i=e===2?"<svg>":"",o=W;for(let c=0;c<t;c++){const a=r[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===W?h[1]==="!--"?o=Ge:h[1]!==void 0?o=Ke:h[2]!==void 0?(wt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=T):h[3]!==void 0&&(o=T):o===T?h[0]===">"?(o=s??W,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?T:h[3]==='"'?Qe:Je):o===Qe||o===Je?o=T:o===Ge||o===Ke?o=W:(o=T,s=void 0);const p=o===T&&r[c+1].startsWith("/>")?" ":"";i+=o===W?a+hr:d>=0?(n.push(l),a.slice(0,d)+vt+a.slice(d)+S+p):a+S+(d===-2?c:p)}return[$t(r,i+(r[t]||"<?>")+(e===2?"</svg>":"")),n]};class X{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let i=0,o=0;const c=e.length-1,a=this.parts,[l,h]=pr(e,t);if(this.el=X.createElement(l,n),U.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=U.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(vt)){const u=h[o++],p=s.getAttribute(d).split(S),M=/([.?@])?(.*)/.exec(u);a.push({type:1,index:i,name:M[2],strings:p,ctor:M[1]==="."?mr:M[1]==="?"?gr:M[1]==="@"?_r:$e}),s.removeAttribute(d)}else d.startsWith(S)&&(a.push({type:6,index:i}),s.removeAttribute(d));if(wt.test(s.tagName)){const d=s.textContent.split(S),u=d.length-1;if(u>0){s.textContent=ce?ce.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],Q()),U.nextNode(),a.push({type:2,index:++i});s.append(d[u],Q())}}}else if(s.nodeType===8)if(s.data===bt)a.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(S,d+1))!==-1;)a.push({type:7,index:i}),d+=S.length-1}i++}}static createElement(e,t){const n=L.createElement("template");return n.innerHTML=e,n}}function B(r,e,t=r,n){var o,c;if(e===z)return e;let s=n!==void 0?(o=t._$Co)==null?void 0:o[n]:t._$Cl;const i=Y(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=s:t._$Cl=s),s!==void 0&&(e=B(r,s._$AS(r,e.values),s,n)),e}class fr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??L).importNode(t,!0);U.currentNode=s;let i=U.nextNode(),o=0,c=0,a=n[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new te(i,i.nextSibling,this,e):a.type===1?l=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(l=new vr(i,this,e)),this._$AV.push(l),a=n[++c]}o!==(a==null?void 0:a.index)&&(i=U.nextNode(),o++)}return U.currentNode=L,s}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class te{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),Y(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):dr(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==f&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=X.createElement($t(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(t);else{const o=new fr(s,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=Ye.get(e.strings);return t===void 0&&Ye.set(e.strings,t=new X(e)),t}k(e){yt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const i of e)s===t.length?t.push(n=new te(this.S(Q()),this.S(Q()),this,this.options)):n=t[s],n._$AI(i),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class $e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,i){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=f}_$AI(e,t=this,n,s){const i=this.strings;let o=!1;if(i===void 0)e=B(this,e,t,0),o=!Y(e)||e!==this._$AH&&e!==z,o&&(this._$AH=e);else{const c=e;let a,l;for(e=i[0],a=0;a<i.length-1;a++)l=B(this,c[n+a],t,a),l===z&&(l=this._$AH[a]),o||(o=!Y(l)||l!==this._$AH[a]),l===f?e=f:e!==f&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}o&&!s&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class mr extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class gr extends $e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class _r extends $e{constructor(e,t,n,s,i){super(e,t,n,s,i),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??f)===z)return;const n=this._$AH,s=e===f&&n!==f||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==f&&(n===f||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class vr{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const Oe=K.litHtmlPolyfillSupport;Oe==null||Oe(X,te),(K.litHtmlVersions??(K.litHtmlVersions=[])).push("3.1.2");const br=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=s=new te(e.insertBefore(Q(),i),i,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=br(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return z}};var gt;w._$litElement$=!0,w.finalized=!0,(gt=globalThis.litElementHydrateSupport)==null||gt.call(globalThis,{LitElement:w});const Re=globalThis.litElementPolyfillSupport;Re==null||Re({LitElement:w});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Ne},wr=(r=yr,e,t)=>{const{kind:n,metadata:s}=t;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(t.name,r),n==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,r)},init(c){return c!==void 0&&this.P(o,void 0,r),c}}}if(n==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+n)};function _(r){return(e,t)=>typeof t=="object"?wr(r,e,t):((n,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(s,i):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(r){return _({...r,state:!0,attribute:!1})}const $r="http://localhost:3000",Er="/api",Ar="JWT_AUTH_TOKEN",P=class P{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new P;return console.log("Deauthenticating",e,P._theUser),e===P._theUser&&(localStorage.removeItem(Ar),P._theUser=t),t}};P._theUser=new P;let Z=P;class At{constructor(e){this._base=Er,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=Z._theUser.authenticated,n={"Content-Type":"application/json"};if(t){const i={Authorization:`Bearer ${Z._theUser.token}`};return e?{...n,...i}:i}else return e?{...n}:void 0}_url(e){return`${$r}${this._base}${e}`}}class q extends At{constructor(){super(void 0)}}let Pr=class extends w{constructor(e,t,n){super(),this.updateFn=e,this.getModel=t,this.setModel=n,this.addEventListener("mvu:message",s=>{const i=s.detail;console.log("Got message: ",i),this.receive(i)})}receive(e){const t=this.updateFn(this.getModel(),e),n=t;typeof(n==null?void 0:n.then)=="function"?n.then(s=>{const i=s(this.getModel());console.log("Updating model in Promise:",i),this.setModel(i)}):(console.log("Updating model:",t),this.setModel(t))}},Sr=class extends w{dispatchMessage(e,t=this){const n=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(n)}};class Or{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:n}=t,s=this._handlers.get(n);return s?s(t,e):e}}function Rr(r){return e=>Object.assign({},e,r)}function Cr(r){return r}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pt=class extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Xe=class{constructor(e,t,n,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const i=t;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Pt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xr{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mr=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Ze extends xr{constructor(e,t,n){var s,i;super(t.context!==void 0?t.initialValue:n),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new Pt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(i=(s=this.host).addController)==null||i.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Mr(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tr({context:r}){return(e,t)=>{const n=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){n.set(this,new Ze(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var i;return(i=n.get(this))==null||i.setValue(s),e.set.call(this,s)},init(s){var i;return(i=n.get(this))==null||i.setValue(s),s}};{e.constructor.addInitializer(o=>{n.set(o,new Ze(o,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let i;if(s===void 0){const o=new WeakMap;i={get:function(){return o.get(this)},set:function(c){n.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=s.set;i={...s,set:function(c){n.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,i)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ur({context:r,subscribe:e}){return(t,n)=>{typeof n=="object"?n.addInitializer(function(){new Xe(this,{context:r,callback:s=>{this[n.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new Xe(s,{context:r,callback:i=>{s[n]=i},subscribe:e})})}}var Lr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,St=(r,e,t,n)=>{for(var s=n>1?void 0:n?Dr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Lr(e,t,s),s};const Ot="WikiModel",jr={user:new Z,weapons:[],systems:[],factions:[],roles:[]};class He extends Pr{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=jr}}St([Tr({context:Ot}),Et()],He.prototype,"model",2);class V extends Sr{getFromModel(e){if(this._model)return this._model[e]}}St([Ur({context:Ot,subscribe:!0}),_({attribute:!1})],V.prototype,"_model",2);const Nr=()=>new Or,N=Rr,H=Cr,C='body{font-family:var(--font-family-body);color:var(--color-text);background-color:var(--color-background);margin:1em}a,a:visited{color:var(--color-text)}h1,h3{font-family:var(--font-family-display);background-color:var(--color-brand);color:#fff;width:max-content;padding:0 .15em;margin-top:.67em;margin-bottom:.67em}section :not(h1,h3,strong,svg){margin-left:1.5em}em{display:inline-block}svg.icon{display:inline;height:var(--size-icon-normal);width:var(--size-icon-normal);vertical-align:bottom;fill:currentColor}section.trait>h3{background-color:red;color:#fff;width:max-content;padding:.1em .25em}section.system>h3{background-color:#27c52c;color:#fff;width:max-content;padding:.1em .25em}section.weapon>h3{grid-area:header;background-color:#000;color:#fff;width:max-content;padding:.1em .25em}.weapon{display:grid;grid-template-columns:auto 1fr;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"header type" "tags ." "range dmg"}section.weapon>.type{align-self:center;grid-area:type}section.weapon>.tags{grid-area:tags}section.weapon>.range{grid-area:range}section.weapon>.dmg{grid-area:dmg}.wContainer.compact>.weapon{display:grid;grid-template-columns:auto 1fr 1fr 1fr 1fr;grid-template-rows:1fr;grid-template-areas:"header type tags range dmg"}.weapon h3{display:inline;grid-column:1/2}.stats{display:grid;grid-template-columns:1fr 1fr;width:max-content;column-gap:2em}.container{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline}.container>div{width:125px}',x=Nr(),Rt=x.update;x.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new q().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?N({profile:t}):H)});x.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new At(t).put(`/profiles/${e}`).then(n=>{if(n.status===200)return n.json()}).then(n=>{n&&console.log("Profile:",n)}).then(n=>n?N({profile:n}):H)});x.addMessage("WeaponsRequested",r=>new q().get("/weapons/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Weapons:",e),e}).then(e=>e?N({weapons:e}):H));x.addMessage("SystemsRequested",r=>new q().get("/systems/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Systems:",e),e}).then(e=>e?N({systems:e}):H));x.addMessage("PilotRequested",r=>new q().get("/pilot/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Pilot:",e),e}).then(e=>e?N({pilot:e}):H));x.addMessage("FactionsRequested",r=>new q().get("/factions/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Factions:",e),e}).then(e=>e?N({factions:e}):H));x.addMessage("RolesRequested",r=>new q().get("/roles/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Roles:",e),e}).then(e=>e?N({roles:e}):H));var Hr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,Ct=(r,e,t,n)=>{for(var s=n>1?void 0:n?Ir(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Hr(e,t,s),s};let he=class extends w{constructor(){super(...arguments),this.open=!1}render(){return m`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu">
        <ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>
      </slot>
    `}_handleChange(r){const e=r.target;this._toggle(e==null?void 0:e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};he.styles=$`
    :host {
      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      right: 0; 
      border: 1px solid;
      background: white;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }
  `;Ct([_({reflect:!0,type:Boolean})],he.prototype,"open",2);he=Ct([g("drop-down")],he);var Fr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,xt=(r,e,t,n)=>{for(var s=n>1?void 0:n?zr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Fr(e,t,s),s};let de=class extends w{constructor(){super(...arguments),this.avatar=""}render(){return m`
    <ul>
    <li class="header">
      <img src=${this.avatar} />
      <h1><slot name="name">Your Name</slot></h1>
    </li>
    <li>
      <toggle-switch @change=${this._toggleDarkMode}>
        Dark Mode
      </toggle-switch>
    </li>`}_toggleDarkMode(r){const e=r.target,t=document.body;console.log("Toggling Dark mode",r),e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}};de.styles=$`
  * {
  margin: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-accent);
  border-radius: var(--size-corner-medium);
  padding: var(--size-spacing-small);
  width: min-content;
  box-shadow: var(--shadow-dropdown);
}
li {
  white-space: nowrap;
  border-color: var(--color-accent);
  border-width: var(--line-weight-superfine);
}
li.header {
  display: flex;
  flex-wrap: nowrap;
  align-items: end;
  line-height: var(--font-line-height-display);
}
li:first-child {
  border-bottom-style: solid;
}
li:last-child {
  border-top-style: solid;
}
img {
  display: inline;
  height: var(--size-icon-large);
}
h1 {
  font-size: var(--size-type-mlarge);
  line-height: var(--font-line-height-display);
  white-space: normal;
  text-align: right;
}
`;xt([_()],de.prototype,"avatar",2);de=xt([g("user-panel")],de);var Br=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Mt=(r,e,t,n)=>{for(var s=n>1?void 0:n?qr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Br(e,t,s),s};let ue=class extends w{constructor(){super(...arguments),this.on=!1}render(){return m`
        <div class="container">
            <div><a href="../app/index">Home</a></div>
            <div><a href="/app/pilot">Pilot</a></div>
            <div><a href="/app/factions">Factions</a></div>
            <div><a href="/app/weapons">Weapons</a></div>
            <div><a href="/app/systems">Systems</a></div>
            <div><a href='/app/roles'>Roles</a></div>
            <div>
                <drop-down>
                    Profile
                    <user-panel
                    slot="menu"
                    avatar="/assets/testSmile.png">
                        <span slot="name">Andy Huang</span>
                    </user-panel>
                </drop-down>
            </div>
        </div>`}};ue.styles=[E(C),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];Mt([_({attribute:!1})],ue.prototype,"on",2);ue=Mt([g("page-header")],ue);var Vr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,Wr=(r,e,t,n)=>{for(var s=n>1?void 0:n?kr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Vr(e,t,s),s};let xe=class extends He{constructor(){super(Rt)}render(){return m`
<body>
    <h1>Lancer</h1>

    <em>Mechanized Calvary stride across the battlefield, built in the image of man.</em>
    
    <p>Lancer is a tabletop role playing game centered on shared narratives, customizable mechs, 
        and the pilots who crew them.</p>
    <!-- In the future, this should be a button on the top that activates a drop down -->
    <p><br>Mech List</p>
    <ul>
        <li><a href="mechs/everest.html">Everest</a></li>
    </ul>
</body>
`}};xe.styles=[E(C),$`
    * {
      margin: 0;
      box-sizing: border-box;
    }`];xe=Wr([g("home-page")],xe);var Gr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Ee=(r,e,t,n)=>{for(var s=n>1?void 0:n?Kr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Gr(e,t,s),s};let D=class extends w{constructor(){super(...arguments),this.path=""}render(){const{userid:r,name:e}=this.profile||{};return m`
      <p>Username: ${e}<br>ID: ${r} </p>
    `}};D.styles=[E(C),$`
  * {
    margin: 0;
    box-sizing: border-box;
  }`];Ee([_()],D.prototype,"path",2);Ee([Et()],D.prototype,"profile",2);D=Ee([g("user-profile")],D);let Me=class extends D{render(){return m`<form @submit=${this._handleSubmit}>
        <label>Enter New Username:
          <input type="text" name="name"></label><br>
        <button type="submit">Submit</button>
    </form> `}_handleSubmit(r){r.preventDefault()}};Me.styles=[...D.styles,$`...`];Me=Ee([g("user-profile-edit")],Me);var Jr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Tt=(r,e,t,n)=>{for(var s=n>1?void 0:n?Qr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Jr(e,t,s),s};let pe=class extends V{get weapons(){return this.getFromModel("weapons")}render(){return m`
        <main> 
          <h1>Weapons</h1>

          <em>Tools of destruction, oppression, and liberation—all in your hands.</em>

          <p>Each weapon has its own Size/Type, Tags, Range/Threat, and Damage<br><br>
          Size ranges from Auxiliary, Main, Heavy, and Super Heavy, taking the respective Mount slots on a Mech.<br>
          Types include Rifle, Cannon, CQB, Melee, Nexus, and Launcher.<br>
          Tags are numerous and relect properties of the weapon. Some of them are Accurate, Overkill, AP, Reliable, and Ordnance.<br>
          Range represents how many spaces a weapon can reach. They may also have AoE patterns like Cone, Burst, Line, and Blast<br>
          Threat is the range weapons can be used in Overwatch. Default is 1, but can vary between weapons, especially Melee and CQB.<br>
          Damage is represented by dice and flat numbers, categorized into three types: Kinetic, Energy, and Explosive.<br>
          </p>

          //attributtes are based off ts-models -----
          ${(this.weapons||[]).map(r=>m`
          <section class="weapon">
          <h3>${r.name}</h3>
              <div class="type">Main Rifle</div> <div class="tags">Reliable 2</div>
              <div class="range">Range 20</div> <div class="dmg">2d6 Kinetic</div>
          </section>
          `)}

          <section class="wContainer">
              <section class="weapon">
                  <h3>Assault Rifle</h3>
                      <div class="type">Main Rifle</div> <div class="tags">Reliable 2</div>
                      <div class="range">Range 20</div> <div class="dmg">2d6 Kinetic</div>
              </section>
              <section class="weapon">
                  <h3>Segment Knife</h3>
                      <div class="type">Auxiliary Melee</div> <div class="tags">Overkill</div>
                      <div class="range">Threat 1</div> <div class="dmg">1d3+1 Energy</div>
              </section>
          </section>
        </main>`}};pe.styles=[E(C),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];Tt([_()],pe.prototype,"weapons",1);pe=Tt([g("weapons-page")],pe);var Yr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,Ut=(r,e,t,n)=>{for(var s=n>1?void 0:n?Xr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Yr(e,t,s),s};let fe=class extends V{get systems(){return this.getFromModel("systems")}render(){return m`
        <main> 
        <h1>Systems</h1>

        <em>Shields, grenades, and leather seating.</em>
        <p> Systems can be a variety of things, and most (but not all) are used in tactical combat.<br>
        Each System costs System Points, which are determined by the Mech Frame and the Pilot's Systems stat<br>
        Systems can have various Tags, such as Limited, Unique, Deployable, and Quick Action.</p>
    
        <section class="trait">
            <h3>Custom Paint Job</h3>
            <em>1 SP, Unique</em>
                <main>
                    When you take structure damage, roll 1d6. On a 6,
                    you return to <strong>1 HP</strong> and ignore the damage – the hit
                    simply ‘scratched your paint’.<br><br>
                    This system can only be used once before each
                    <Strong>Full Repair</Strong>, and is not a valid target for system
                    destruction.
                </main>
        </section>
            <!-- Should probably get boxes in the future -->
        <section class="system">
            <h3>Pattern-B Hex Charges</h3>
                <em>2 SP, Limited 3, Unique, Grenade, Mine, Quick Action</em>
                <main>
                    <strong>Frag Grenade</strong>
                    Range 5 | Blast 1 | 1D6 Explosive<br>
                    Throw a Frag Grenade within Range 5. All characters within a Blast 1 area must
                    pass an Agility save or take 1d6 Explosive damage. On a success, they take half damage. 
                    <br><br>
                    <strong>Explosive Mine</strong>
                    All characters within a Burst 1 area must pass an Agility save or take 2d6 Explosive
                    damage. On a success, they take half damage.
                </main>
        </section>
        </main>`}};fe.styles=[E(C),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];Ut([_()],fe.prototype,"systems",1);fe=Ut([g("systems-page")],fe);var Zr=Object.defineProperty,en=Object.getOwnPropertyDescriptor,Lt=(r,e,t,n)=>{for(var s=n>1?void 0:n?en(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Zr(e,t,s),s};let me=class extends V{get pilot(){return this.getFromModel("pilot")}render(){return m`
        <main> 
        <h1>Pilot</h1>

        <em>Hero of the story, of at least your own.</em>

        <p>Pilots are the player character. They have Triggers which are used in relavent narrative moments.<br>
        For example, if a player has a +2 Trigger "Fist to Faces", they will gain +2 on rolls related to something like a bar fight.<br>
        Trigger names are intentionally vague, as the player can argue to the GM if it applies to a situation or not.<br>
        They also have Hull, Agility, Systems, and Engineering stats. These can influence the stats of the Mechs they pilot.<br>

        Pilots of course have names and background, which summerize their upbringing. These are made at the discretion of the player.
        </p>

          ${this.pilot||""}
        </main>`}};me.styles=[E(C),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];Lt([_()],me.prototype,"pilot",1);me=Lt([g("pilot-page")],me);var tn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,Dt=(r,e,t,n)=>{for(var s=n>1?void 0:n?rn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&tn(e,t,s),s};let ge=class extends V{get factions(){return this.getFromModel("factions")}render(){return m`
        <main>
        <h1>Factions</h1>
        

        <h3>General Massive Systems</h3>
        <em>From Cradle to the stars, GMS: <br>assured quality, universal licensing, total coverage.</em>
        <p>GMS is one of the oldest fabricators in the galaxy, first
            getting its start in the early days of the colonization rush.
            The manufacturer hails from Cradle, the home of Union –
            and humanity – and thus its designs reflect the sensibilities
            of the first pioneers to seek the stars. Today, GMS
            products are available anywhere there is access to the
            omninet. These products, whether consumer, specialty,
            or military, are widely viewed as the galactic minimum of
            quality: not particularly luxurious, but unsurpassed in nononsense
            design, reliability, and ease of use.<br><br>
            Where GMS
            is available, anything less is unacceptable.</p>
            <header>Production Line:</header>
            <ul>
                <li><a href="mechs/everest.html">Everest</a></li>
            </ul>

        <h3>IPS-Northstar</h3>
        <em>Your friend in an unfriendly sea.</em>
        <p>IPS-Northstar (IPS-N) was created from the merger of
            two civilian interstellar freight and transportation
            companies, Interplanetary Shipping and Northstar.
            The resulting firm, IPS-N is a titanic entity – one of the
            first corpro-states – with a virtual monopoly over
            interplanetary and interstellar shipping. Other firms
            exist, but their gross fleet strength is but a shadow of
            IPS-N’s fleets of tankers, haulers, freighters, and
            intergate/interstellar liners. Wherever goods and raw
            materials need to be moved, you can bet a crew in
            IPS-N uniforms will be there.</p>

        <h3>Smith-Shimano Corpro</h3>
        <em>You only need one.</em>
        <p>Smith-Shimano Corpro (SSC) is the second-oldest
            corporation in the galaxy, preceded only by GMS.
            Founded by Cartwright Smith and Shimano Hideyoshi,
            SSC’s emphasis on private stellar and
            interstellar travel, the fantastic wealth of its founders,
            and favorable contracts within Union’s First
            Committee, Smith-Shimano quickly became an early
            leader in the race to develop sublight, downwell, and
            EVA vehicles. SSC grew throughout Union’s First
            Expansion Period, managing the majority of all private
            and corporate contracts’ design, outfitting, and
            clinical needs. Over time, the corporation diversified
            to specialize in bio-bespoke, long-range scout suits –
            personalized hard suits, for those with the manna to
            afford them.</p>

        <h3>HORUS</h3>
        <em>Congratualtions Pilot. You have been chosen. Access is yours, so long as you can keep it.</em>
        <p>HORUS is an oddity among the various pan-galactic
            corpro-states, outfitters, and manufacturers. Operating
            in a gray legal state between harmless omninet
            communes, open-source fabrication collaboratives,
            black-market printers, and deeper, more esoteric
            collectives, HORUS is counted among the Big Four
            not due to its influence on galactic politics, but
            because of its ubiquitous coverage: one can be
            certain that wherever there is omninet, HORUS is
            either there or soon to follow. Rumors abound as to
            the manufacturer’s nature – some say it’s the dream
            of an unshackled NHP or a hacker collective dedicated
            to open-source manufacturing (at its most
            mundane levels); others insist that it’s the proving
            ground for one of the corpro-states’ R&D departments,
            or the realspace projection of an alien entity’s
            ongoing wish.</p>

        <h3>Harrison Armory</h3>
        <em>Superior by design.</em>
        <p>Harrison Armory enjoys a galaxy-wide reputation for
            the quality of its weapons and defensive systems. The
            corpro-state previously specialized in ordnance and
            other armaments, making it reliant on competitors’
            frames as mounts for its deluxe equipment; however,
            since the overthrow of Union’s Second Committee,
            Harrison Armory has broadened its product line to
            include an extensive range of peerless frontline
            frames. On the wave of this new success, the Armory
            has transformed into a burgeoning, imperial corprostate,
            a mighty galactic power that directly administers
            a large number of Core worlds, orbitals, and
            colonial prospects – this is the Purview; all lands
            under the Armory’s command.</p>
        </main>`}};ge.styles=[E(C),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];Dt([_()],ge.prototype,"factions",1);ge=Dt([g("factions-page")],ge);var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,jt=(r,e,t,n)=>{for(var s=n>1?void 0:n?sn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&nn(e,t,s),s};let _e=class extends V{get roles(){return this.getFromModel("roles")}render(){return m`
        <main> 
        <h1>Roles</h1>

    <em>General classifications for extraordinary machines.</em>

    <h3>Artillery</h3>
    <p>Artillery mechs usually stay back
        from the front line, dealing damage or
        providing support. They tend to sport long-range
        weapons and systems.</p>

    <h3>Stiker</h3>
    <p>Strikers are resilient mechs that thrive
        when targets are kept close.</p>

    <h3>Controller</h3>
    <p>Controller mechs are equipped to
        inflict statuses, force or prevent movement, or
        overheat their targets.</p>

    <h3>Support</h3>
    <p>Support mechs specialize in
        increasing the combat capabilities of their allies
        – moving them around, clearing conditions,
        healing, or protecting them from incoming fire.</p>

    <h3>Defender</h3>
    <p>Defenders are exceptionally durable
        and resilient mechs, designed to control space
        or shield allies from harm.</p>
        </main>`}};_e.styles=[E(C),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];jt([_()],_e.prototype,"roles",1);_e=jt([g("roles-page")],_e);const on=[{path:"/app/profile/:userid",component:"user-profile"},{path:"/app/weapons",component:"weapons-page"},{path:"/app/systems",component:"systems-page"},{path:"/app/pilot",component:"pilot-page"},{path:"/app/factions",component:"factions-page"},{path:"/app/roles",component:"roles-page"},{path:"/app",component:"home-page"},{path:"(.*)",redirect:"/app"}];function ve(r){return r=r||[],Array.isArray(r)?r:[r]}function y(r){return`[Vaadin.Router] ${r}`}function an(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const be="module",ye="nomodule",Te=[be,ye];function et(r){if(!r.match(/.+\.[m]?js$/))throw new Error(y(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Nt(r){if(!r||!b(r.path))throw new Error(y('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!j(r.action)&&!Array.isArray(r.children)&&!j(r.children)&&!we(e)&&!t.some(n=>b(r[n])))throw new Error(y(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(b(e))et(e);else if(Te.some(n=>n in e))Te.forEach(n=>n in e&&et(e[n]));else throw new Error(y('Expected route bundle to include either "'+ye+'" or "'+be+'" keys, or both'));r.redirect&&["bundle","component"].forEach(n=>{n in r&&console.warn(y(`Route config "${r.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function tt(r){ve(r).forEach(e=>Nt(e))}function rt(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===be?t.setAttribute("type",be):e===ye&&t.setAttribute(ye,""),t.async=!0),new Promise((n,s)=>{t.onreadystatechange=t.onload=i=>{t.__dynamicImportLoaded=!0,n(i)},t.onerror=i=>{t.parentNode&&t.parentNode.removeChild(t),s(i)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function ln(r){return b(r)?rt(r):Promise.race(Te.filter(e=>e in r).map(e=>rt(r[e],e)))}function J(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function we(r){return typeof r=="object"&&!!r}function j(r){return typeof r=="function"}function b(r){return typeof r=="string"}function Ht(r){const e=new Error(y(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const F=new class{};function cn(r){const e=r.port,t=r.protocol,i=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${i}`}function nt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||cn(e))!==window.location.origin)return;const{pathname:s,search:i,hash:o}=e;J("go",{pathname:s,search:i,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const hn={activate(){window.document.addEventListener("click",nt)},inactivate(){window.document.removeEventListener("click",nt)}},dn=/Trident/.test(navigator.userAgent);dn&&!j(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function st(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;J("go",{pathname:e,search:t,hash:n})}const un={activate(){window.addEventListener("popstate",st)},inactivate(){window.removeEventListener("popstate",st)}};var k=Vt,pn=Ie,fn=vn,mn=zt,gn=qt,It="/",Ft="./",_n=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ie(r,e){for(var t=[],n=0,s=0,i="",o=e&&e.delimiter||It,c=e&&e.delimiters||Ft,a=!1,l;(l=_n.exec(r))!==null;){var h=l[0],d=l[1],u=l.index;if(i+=r.slice(s,u),s=u+h.length,d){i+=d[1],a=!0;continue}var p="",M=r[s],Qt=l[2],Yt=l[3],Xt=l[4],re=l[5];if(!a&&i.length){var Ae=i.length-1;c.indexOf(i[Ae])>-1&&(p=i[Ae],i=i.slice(0,Ae))}i&&(t.push(i),i="",a=!1);var Zt=p!==""&&M!==void 0&&M!==p,er=re==="+"||re==="*",tr=re==="?"||re==="*",Fe=p||o,ze=Yt||Xt;t.push({name:Qt||n++,prefix:p,delimiter:Fe,optional:tr,repeat:er,partial:Zt,pattern:ze?bn(ze):"[^"+A(Fe)+"]+?"})}return(i||s<r.length)&&t.push(i+r.substr(s)),t}function vn(r,e){return zt(Ie(r,e))}function zt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(n,s){for(var i="",o=s&&s.encode||encodeURIComponent,c=0;c<r.length;c++){var a=r[c];if(typeof a=="string"){i+=a;continue}var l=n?n[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');i+=a.prefix+h;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function A(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function bn(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Bt(r){return r&&r.sensitive?"":"i"}function yn(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function wn(r,e,t){for(var n=[],s=0;s<r.length;s++)n.push(Vt(r[s],e,t).source);return new RegExp("(?:"+n.join("|")+")",Bt(t))}function $n(r,e,t){return qt(Ie(r,t),e,t)}function qt(r,e,t){t=t||{};for(var n=t.strict,s=t.start!==!1,i=t.end!==!1,o=A(t.delimiter||It),c=t.delimiters||Ft,a=[].concat(t.endsWith||[]).map(A).concat("$").join("|"),l=s?"^":"",h=r.length===0,d=0;d<r.length;d++){var u=r[d];if(typeof u=="string")l+=A(u),h=d===r.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+A(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=A(u.prefix)+"("+p+")?":l+="(?:"+A(u.prefix)+"("+p+"))?":l+=A(u.prefix)+"("+p+")"}}return i?(n||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Bt(t))}function Vt(r,e,t){return r instanceof RegExp?yn(r,e):Array.isArray(r)?wn(r,e,t):$n(r,e,t)}k.parse=pn;k.compile=fn;k.tokensToFunction=mn;k.tokensToRegExp=gn;const{hasOwnProperty:En}=Object.prototype,Ue=new Map;Ue.set("|false",{keys:[],pattern:/(?:)/});function it(r){try{return decodeURIComponent(r)}catch{return r}}function An(r,e,t,n,s){t=!!t;const i=`${r}|${t}`;let o=Ue.get(i);if(!o){const l=[];o={keys:l,pattern:k(r,l,{end:t,strict:r===""})},Ue.set(i,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},s);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!En.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(it):[]:a[d]=u&&it(u))}return{path:c[0],keys:(n||[]).concat(o.keys),params:a}}function kt(r,e,t,n,s){let i,o,c=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!i&&(i=An(a,e,!h,n,s),i))return{done:!1,value:{route:r,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=r;let p=i.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=kt(u,e.substr(p),t,i.keys,i.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function Pn(r){if(j(r.route.action))return r.route.action(r)}function Sn(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function On(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Rn(r,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const s={path:n,route:t};if(!r.chain)r.chain=[];else if(t.parent){let i=r.chain.length;for(;i--&&r.chain[i].route&&r.chain[i].route!==t.parent;)r.chain.pop()}r.chain.push(s)}}class ee{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Pn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){tt(e);const t=[...ve(e)];this.root.__children=t}addRoutes(e){return tt(e),this.root.__children.push(...ve(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,b(e)?{pathname:e}:e),n=kt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let i=null,o=null,c=t;function a(l,h=i.value.route,d){const u=d===null&&i.value.route;return i=o||n.next(u),o=null,!l&&(i.done||!Sn(h,i.value.route))?(o=i,Promise.resolve(F)):i.done?Promise.reject(Ht(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,i.value),Rn(c,i.value),Promise.resolve(s(c)).then(p=>p!=null&&p!==F?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=On(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}ee.pathToRegexp=k;const{pathToRegexp:ot}=ee,at=new Map;function Wt(r,e,t){const n=e.name||e.component;if(n&&(r.has(n)?r.get(n).push(e):r.set(n,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const i=t[s];i.parent=e,Wt(r,i,i.__children||i.children)}}function lt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function ct(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Cn(r,e={}){if(!(r instanceof ee))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,s)=>{let i=lt(t,n);if(!i&&(t.clear(),Wt(t,r.root,r.root.__children),i=lt(t,n),!i))throw new Error(`Route "${n}" not found`);let o=at.get(i.fullPath);if(!o){let a=ct(i),l=i.parent;for(;l;){const p=ct(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=ot.parse(a),d=ot.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)b(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},at.set(a,o),i.fullPath=a}let c=o.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const a={},l=Object.keys(s);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=s[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let ht=[];function xn(r){ht.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),ht=r}const Mn=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Tn=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function dt(r,e){return r.classList.add(e),new Promise(t=>{if(Mn(r)){const n=r.getBoundingClientRect(),s=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${s}`),Tn(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Un=256;function Ce(r){return r!=null}function Ln(r){const e=Object.assign({},r);return delete e.next,e}function v({pathname:r="",search:e="",hash:t="",chain:n=[],params:s={},redirectFrom:i,resolver:o},c){const a=n.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:s,redirectFrom:i,getUrl:(l={})=>oe(O.pathToRegexp.compile(Gt(a))(Object.assign({},s,l)),o)}}function ut(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Dn(r,e){e.location=v(r);const t=r.chain.map(n=>n.route).indexOf(r.route);return r.chain[t].element=e,e}function ie(r,e,t){if(j(r))return r.apply(t,e)}function pt(r,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return ie(t[r],e,t)}}function jn(r,e){if(!Array.isArray(r)&&!we(r))throw new Error(y(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=ve(r);for(let n=0;n<t.length;n++)Nt(t[n]),e.__children.push(t[n])}function ne(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function oe(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Gt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class O extends ee{constructor(e,t){const n=document.head.querySelector("base"),s=n&&n.getAttribute("href");super([],Object.assign({baseUrl:s&&ee.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const i=O.NavigationTrigger;O.setTriggers.apply(O,Object.keys(i).map(o=>i[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=v({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();j(t.children)&&(n=n.then(()=>t.children(Ln(e))).then(i=>{!Ce(i)&&!j(t.children)&&(i=t.children),jn(i,t)}));const s={redirect:i=>ut(e,i),component:i=>{const o=document.createElement(i);return this.__createdByRouter.set(o,!0),o}};return n.then(()=>{if(this.__isLatestRender(e))return ie(t.action,[e,s],t)}).then(i=>{if(Ce(i)&&(i instanceof HTMLElement||i.redirect||i===F))return i;if(b(t.redirect))return s.redirect(t.redirect);if(t.bundle)return ln(t.bundle).then(()=>{},()=>{throw new Error(y(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(i=>{if(Ce(i))return i;if(b(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},b(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(s).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const o=this.__previousContext;if(i===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=v(i),t&&this.__updateBrowserHistory(i,n===1),J("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,o),this.__previousContext=i,this.location;this.__addAppearingContent(i,o);const c=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,o),c.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),ne(this.__outlet&&this.__outlet.children),this.location=v(Object.assign(s,{resolver:this})),J("error",Object.assign({router:this,error:i},s)),i}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const i=n!==t?n:e,c=oe(Gt(n.chain),n.resolver)===n.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===F?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(n).then(l=>{if(l===null||l===F)throw Ht(i);return l&&l!==F&&l!==n?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Dn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(y(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${an(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],s=e.chain;let i=Promise.resolve();const o=()=>({cancel:!0}),c=a=>ut(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,s.length)&&!(n[a].route!==s[a].route||n[a].path!==s[a].path&&n[a].element!==s[a].element||!this.__isReusableElement(n[a].element,s[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=s.length===n.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=s.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[a]);for(let a=0;a<s.length;a++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:c},s[a]),n[a].element.location=v(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[a])}if(!e.__skipAttach)for(let a=0;a<s.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=v(e,n[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:c},s[a]),s[a].element&&(s[a].element.location=v(e,s[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,s){const i=v(t);return e.then(o=>{if(this.__isLatestRender(t))return pt("onBeforeLeave",[i,n,this],s.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,n,s){const i=v(t,s.route);return e.then(o=>{if(this.__isLatestRender(t))return pt("onBeforeEnter",[i,n,this],s.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>Un)throw new Error(y(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(y(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const i=s?"replaceState":"pushState";window.history[i](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const i=t&&t.chain[s].element;if(i)if(i.parentNode===n)e.chain[s].element=i,n=i;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(i=>this.__addedByRouter.get(i)&&i!==e.result);let s=n;for(let i=e.__divergedChainIndex;i<e.chain.length;i++){const o=e.chain[i].element;o&&(s.appendChild(o),this.__addedByRouter.set(o,!0),s===n&&this.__appearingContent.push(o),s=o)}}__removeDisappearingContent(){this.__disappearingContent&&ne(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ne(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const s=t.chain[n].element;if(s)try{const i=v(e);ie(s.onAfterLeave,[i,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&ne(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},s=v(e,e.chain[t].route);ie(n.onAfterEnter,[s,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],s=[],i=e.chain;let o;for(let c=i.length;c>0;c--)if(i[c-1].route.animate){o=i[c-1].route.animate;break}if(t&&n&&o){const c=we(o)&&o.leave||"leaving",a=we(o)&&o.enter||"entering";s.push(dt(t,c)),s.push(dt(n,a))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:s}=e?e.detail:window.location;b(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:s},!0))}static setTriggers(...e){xn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Cn(this)),oe(this.__urlForName(e,t),this)}urlForPath(e,t){return oe(O.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:s}=b(e)?this.__createUrl(e,"http://a"):e;return J("go",{pathname:t,search:n,hash:s})}}const Nn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ae=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Hn(){function r(){return!0}return Kt(r)}function In(){try{return Fn()?!0:zn()?ae?!Bn():!Hn():!1}catch{return!1}}function Fn(){return localStorage.getItem("vaadin.developmentmode.force")}function zn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Bn(){return!!(ae&&Object.keys(ae).map(e=>ae[e]).filter(e=>e.productionMode).length>0)}function Kt(r,e){if(typeof r!="function")return;const t=Nn.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const ft=function(r,e){if(window.Vaadin.developmentMode)return Kt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=In());function qn(){}const Vn=function(){if(typeof ft=="function")return ft(qn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Vn();O.NavigationTrigger={POPSTATE:un,CLICK:hn};var kn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Jt=(r,e,t,n)=>{for(var s=n>1?void 0:n?Wn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&kn(e,t,s),s};let Le=class extends w{constructor(){super(...arguments),this.router=new O(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return m`<slot></slot>`}};Jt([_({attribute:!1})],Le.prototype,"routes",2);Le=Jt([g("vaadin-router")],Le);var Gn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Jn=(r,e,t,n)=>{for(var s=n>1?void 0:n?Kn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&Gn(e,t,s),s};let mt=class extends He{constructor(){super(Rt)}render(){return m`
    <auth-required>
    <page-header></page-header>
    <vaadin-router .routes=${on}> </vaadin-router>
    </auth-required>
 `}};mt=Jn([g("wiki-app")],mt);
