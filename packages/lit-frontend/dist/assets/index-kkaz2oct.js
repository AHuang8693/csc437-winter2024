(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=globalThis,Ue=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),ze=new WeakMap;let gt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ue&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=ze.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ze.set(t,e))}return e}toString(){return this.cssText}};const L=r=>new gt(typeof r=="string"?r:r+"",void 0,Le),$=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new gt(t,r,Le)},Xt=(r,e)=>{if(Ue)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=re.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},Fe=Ue?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return L(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zt,defineProperty:er,getOwnPropertyDescriptor:tr,getOwnPropertyNames:rr,getOwnPropertySymbols:nr,getPrototypeOf:ir}=Object,O=globalThis,Be=O.trustedTypes,sr=Be?Be.emptyScript:"",Ee=O.reactiveElementPolyfillSupport,V=(r,e)=>r,oe={toAttribute(r,e){switch(e){case Boolean:r=r?sr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ne=(r,e)=>!Zt(r,e),Ve={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:Ne};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),O.litPropertyMetadata??(O.litPropertyMetadata=new WeakMap);class N extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ve){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&er(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:s}=tr(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const c=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ve}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const e=ir(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const t=this.properties,n=[...rr(t),...nr(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(Fe(i))}else e!==void 0&&t.push(Fe(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const o=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:oe).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:oe;this._$Em=i,this[i]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Ne)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[V("elementProperties")]=new Map,N[V("finalized")]=new Map,Ee==null||Ee({ReactiveElement:N}),(O.reactiveElementVersions??(O.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,ae=k.trustedTypes,ke=ae?ae.createPolicy("lit-html",{createHTML:r=>r}):void 0,mt="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,_t="?"+P,or=`<${_t}>`,T=document,W=()=>T.createComment(""),K=r=>r===null||typeof r!="object"&&typeof r!="function",vt=Array.isArray,ar=r=>vt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,We=/>/g,R=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ke=/'/g,Ge=/"/g,bt=/^(?:script|style|textarea|title)$/i,lr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=lr(1),H=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Je=new WeakMap,x=T.createTreeWalker(T,129);function yt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(e):e}const cr=(r,e)=>{const t=r.length-1,n=[];let i,s=e===2?"<svg>":"",o=B;for(let c=0;c<t;c++){const a=r[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===B?h[1]==="!--"?o=qe:h[1]!==void 0?o=We:h[2]!==void 0?(bt.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=R):h[3]!==void 0&&(o=R):o===R?h[0]===">"?(o=i??B,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?R:h[3]==='"'?Ge:Ke):o===Ge||o===Ke?o=R:o===qe||o===We?o=B:(o=R,i=void 0);const p=o===R&&r[c+1].startsWith("/>")?" ":"";s+=o===B?a+or:d>=0?(n.push(l),a.slice(0,d)+mt+a.slice(d)+P+p):a+P+(d===-2?c:p)}return[yt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),n]};class G{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=cr(e,t);if(this.el=G.createElement(l,n),x.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=x.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(mt)){const u=h[o++],p=i.getAttribute(d).split(P),C=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:C[2],strings:p,ctor:C[1]==="."?dr:C[1]==="?"?ur:C[1]==="@"?pr:ve}),i.removeAttribute(d)}else d.startsWith(P)&&(a.push({type:6,index:s}),i.removeAttribute(d));if(bt.test(i.tagName)){const d=i.textContent.split(P),u=d.length-1;if(u>0){i.textContent=ae?ae.emptyScript:"";for(let p=0;p<u;p++)i.append(d[p],W()),x.nextNode(),a.push({type:2,index:++s});i.append(d[u],W())}}}else if(i.nodeType===8)if(i.data===_t)a.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(P,d+1))!==-1;)a.push({type:7,index:s}),d+=P.length-1}s++}}static createElement(e,t){const n=T.createElement("template");return n.innerHTML=e,n}}function D(r,e,t=r,n){var o,c;if(e===H)return e;let i=n!==void 0?(o=t._$Co)==null?void 0:o[n]:t._$Cl;const s=K(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=i:t._$Cl=i),i!==void 0&&(e=D(r,i._$AS(r,e.values),i,n)),e}class hr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??T).importNode(t,!0);x.currentNode=i;let s=x.nextNode(),o=0,c=0,a=n[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new Q(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new fr(s,this,e)),this._$AV.push(l),a=n[++c]}o!==(a==null?void 0:a.index)&&(s=x.nextNode(),o++)}return x.currentNode=T,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Q{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),K(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ar(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==f&&K(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=G.createElement(yt(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(t);else{const o=new hr(i,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=Je.get(e.strings);return t===void 0&&Je.set(e.strings,t=new G(e)),t}k(e){vt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new Q(this.S(W()),this.S(W()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ve{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=f}_$AI(e,t=this,n,i){const s=this.strings;let o=!1;if(s===void 0)e=D(this,e,t,0),o=!K(e)||e!==this._$AH&&e!==H,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=D(this,c[n+a],t,a),l===H&&(l=this._$AH[a]),o||(o=!K(l)||l!==this._$AH[a]),l===f?e=f:e!==f&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!i&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class dr extends ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class ur extends ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class pr extends ve{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??f)===H)return;const n=this._$AH,i=e===f&&n!==f||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==f&&(n===f||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class fr{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const Pe=k.litHtmlPolyfillSupport;Pe==null||Pe(G,Q),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.1.2");const gr=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(t==null?void 0:t.renderBefore)??null;n._$litPart$=i=new Q(e.insertBefore(W(),s),s,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return H}};var ft;b._$litElement$=!0,b.finalized=!0,(ft=globalThis.litElementHydrateSupport)==null||ft.call(globalThis,{LitElement:b});const Se=globalThis.litElementPolyfillSupport;Se==null||Se({LitElement:b});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:Ne},_r=(r=mr,e,t)=>{const{kind:n,metadata:i}=t;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(t.name,r),n==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,r)},init(c){return c!==void 0&&this.P(o,void 0,r),c}}}if(n==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+n)};function w(r){return(e,t)=>typeof t=="object"?_r(r,e,t):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wt(r){return w({...r,state:!0,attribute:!1})}const vr="http://localhost:3000",br="/api",yr="JWT_AUTH_TOKEN",A=class A{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new A;return console.log("Deauthenticating",e,A._theUser),e===A._theUser&&(localStorage.removeItem(yr),A._theUser=t),t}};A._theUser=new A;let J=A;class $t{constructor(e){this._base=br,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=J._theUser.authenticated,n={"Content-Type":"application/json"};if(t){const s={Authorization:`Bearer ${J._theUser.token}`};return e?{...n,...s}:s}else return e?{...n}:void 0}_url(e){return`${vr}${this._base}${e}`}}class be extends $t{constructor(){super(void 0)}}let wr=class extends b{constructor(e,t,n){super(),this.updateFn=e,this.getModel=t,this.setModel=n,this.addEventListener("mvu:message",i=>{const s=i.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){const t=this.updateFn(this.getModel(),e),n=t;typeof(n==null?void 0:n.then)=="function"?n.then(i=>{const s=i(this.getModel());console.log("Updating model in Promise:",s),this.setModel(s)}):(console.log("Updating model:",t),this.setModel(t))}},$r=class extends b{dispatchMessage(e,t=this){const n=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(n)}};class Er{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:n}=t,i=this._handlers.get(n);return i?i(t,e):e}}function Ar(r){return e=>Object.assign({},e,r)}function Pr(r){return r}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Et=class extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ye=class{constructor(e,t,n,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const s=t;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Et(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Sr{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Or=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Qe extends Sr{constructor(e,t,n){var i,s;super(t.context!==void 0?t.initialValue:n),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new Et(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(s=(i=this.host).addController)==null||s.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Or(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Cr({context:r}){return(e,t)=>{const n=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){n.set(this,new Qe(this,{context:r}))}),{get(){return e.get.call(this)},set(i){var s;return(s=n.get(this))==null||s.setValue(i),e.set.call(this,i)},init(i){var s;return(s=n.get(this))==null||s.setValue(i),i}};{e.constructor.addInitializer(o=>{n.set(o,new Qe(o,{context:r}))});const i=Object.getOwnPropertyDescriptor(e,t);let s;if(i===void 0){const o=new WeakMap;s={get:function(){return o.get(this)},set:function(c){n.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=i.set;s={...i,set:function(c){n.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rr({context:r,subscribe:e}){return(t,n)=>{typeof n=="object"?n.addInitializer(function(){new Ye(this,{context:r,callback:i=>{this[n.name]=i},subscribe:e})}):t.constructor.addInitializer(i=>{new Ye(i,{context:r,callback:s=>{i[n]=s},subscribe:e})})}}var xr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,At=(r,e,t,n)=>{for(var i=n>1?void 0:n?Tr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&xr(e,t,i),i};const Pt="WikiModel",Mr={user:new J,weapons:[],factions:[]};class je extends wr{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=Mr}}At([Cr({context:Pt}),wt()],je.prototype,"model",2);class ye extends $r{getFromModel(e){if(this._model)return this._model[e]}}At([Rr({context:Pt,subscribe:!0}),w({attribute:!1})],ye.prototype,"_model",2);const Ur=()=>new Er,X=Ar,Z=Pr,I='body{font-family:var(--font-family-body);color:var(--color-text);background-color:var(--color-background);margin:1em}a,a:visited{color:var(--color-text)}h1,h3{font-family:var(--font-family-display);background-color:var(--color-brand);color:#fff;width:max-content;padding:0 .15em;margin-top:.67em;margin-bottom:.67em}section :not(h1,h3,strong,svg){margin-left:1.5em}em{display:inline-block}svg.icon{display:inline;height:var(--size-icon-normal);width:var(--size-icon-normal);vertical-align:bottom;fill:currentColor}section.trait>h3{background-color:red;color:#fff;width:max-content;padding:.1em .25em}section.system>h3{background-color:#27c52c;color:#fff;width:max-content;padding:.1em .25em}section.weapon>h3{grid-area:header;background-color:#000;color:#fff;width:max-content;padding:.1em .25em}.weapon{display:grid;grid-template-columns:auto 1fr;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"header type" "tags ." "range dmg"}section.weapon>.type{align-self:center;grid-area:type}section.weapon>.tags{grid-area:tags}section.weapon>.range{grid-area:range}section.weapon>.dmg{grid-area:dmg}.wContainer.compact>.weapon{display:grid;grid-template-columns:auto 1fr 1fr 1fr 1fr;grid-template-rows:1fr;grid-template-areas:"header type tags range dmg"}.weapon h3{display:inline;grid-column:1/2}.stats{display:grid;grid-template-columns:1fr 1fr;width:max-content;column-gap:2em}.container{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline}.container>div{width:125px}',z=Ur(),St=z.update;z.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new be().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?X({profile:t}):Z)});z.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new $t(t).put(`/profiles/${e}`).then(n=>{if(n.status===200)return n.json()}).then(n=>{n&&console.log("Profile:",n)}).then(n=>n?X({profile:n}):Z)});z.addMessage("WeaponsRequested",r=>new be().get("/weapons/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Weapons:",e),e}).then(e=>e?X({weapons:e}):Z));z.addMessage("PilotRequested",r=>new be().get("/pilot/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Pilot:",e),e}).then(e=>e?X({pilot:e}):Z));z.addMessage("FactionsRequested",r=>new be().get("/factions/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Factions:",e),e}).then(e=>e?X({factions:e}):Z));var Lr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Ot=(r,e,t,n)=>{for(var i=n>1?void 0:n?Nr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Lr(e,t,i),i};let le=class extends b{constructor(){super(...arguments),this.open=!1}render(){return g`
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
    `}_handleChange(r){const e=r.target;this._toggle(e==null?void 0:e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};le.styles=$`
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
  `;Ot([w({reflect:!0,type:Boolean})],le.prototype,"open",2);le=Ot([y("drop-down")],le);var jr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Ct=(r,e,t,n)=>{for(var i=n>1?void 0:n?Hr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&jr(e,t,i),i};let ce=class extends b{constructor(){super(...arguments),this.avatar=""}render(){return g`
    <ul>
    <li class="header">
      <img src=${this.avatar} />
      <h1><slot name="name">Your Name</slot></h1>
    </li>
    <li>
      <toggle-switch @change=${this._toggleDarkMode}>
        Dark Mode
      </toggle-switch>
    </li>`}_toggleDarkMode(r){const e=r.target,t=document.body;console.log("Toggling Dark mode",r),e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}};ce.styles=$`
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
`;Ct([w()],ce.prototype,"avatar",2);ce=Ct([y("user-panel")],ce);var Dr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,Rt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ir(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Dr(e,t,i),i};let he=class extends b{constructor(){super(...arguments),this.on=!1}render(){return g`
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
        </div>`}};he.styles=[L(I),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];Rt([w({attribute:!1})],he.prototype,"on",2);he=Rt([y("page-header")],he);var zr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,Br=(r,e,t,n)=>{for(var i=n>1?void 0:n?Fr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&zr(e,t,i),i};let Ce=class extends je{constructor(){super(St)}render(){return g`
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
`}};Ce.styles=[L(I),$`
    * {
      margin: 0;
      box-sizing: border-box;
    }`];Ce=Br([y("home-page")],Ce);var Vr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,we=(r,e,t,n)=>{for(var i=n>1?void 0:n?kr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Vr(e,t,i),i};let M=class extends b{constructor(){super(...arguments),this.path=""}render(){const{userid:r,name:e}=this.profile||{};return g`
      <p>Username: ${e}<br>ID: ${r} </p>
    `}};M.styles=[L(I),$`
  * {
    margin: 0;
    box-sizing: border-box;
  }`];we([w()],M.prototype,"path",2);we([wt()],M.prototype,"profile",2);M=we([y("user-profile")],M);let Re=class extends M{render(){return g`<form @submit=${this._handleSubmit}>
        <label>Enter New Username:
          <input type="text" name="name"></label><br>
        <button type="submit">Submit</button>
    </form> `}_handleSubmit(r){r.preventDefault()}};Re.styles=[...M.styles,$`...`];Re=we([y("user-profile-edit")],Re);var qr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,xt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Wr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&qr(e,t,i),i};let de=class extends ye{get weapons(){return this.getFromModel("weapons")}render(){return g`
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
          ${(this.weapons||[]).map(r=>g`
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
        </main>`}};de.styles=[L(I),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];xt([w()],de.prototype,"weapons",1);de=xt([y("weapons-page")],de);var Kr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Tt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Gr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Kr(e,t,i),i};let ue=class extends ye{get pilot(){return this.getFromModel("pilot")}render(){return g`
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
        </main>`}};ue.styles=[L(I),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];Tt([w()],ue.prototype,"pilot",1);ue=Tt([y("pilot-page")],ue);var Jr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Mt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Yr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Jr(e,t,i),i};let pe=class extends ye{get factions(){return this.getFromModel("factions")}render(){return g`
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
        </main>`}};pe.styles=[L(I),$`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];Mt([w()],pe.prototype,"factions",1);pe=Mt([y("factions-page")],pe);const Qr=[{path:"/app/profile/:userid",component:"user-profile"},{path:"/app/weapons",component:"weapons-page"},{path:"/app/pilot",component:"pilot-page"},{path:"/app/factions",component:"factions-page"},{path:"/app",component:"home-page"},{path:"(.*)",redirect:"/app"}];function fe(r){return r=r||[],Array.isArray(r)?r:[r]}function v(r){return`[Vaadin.Router] ${r}`}function Xr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const ge="module",me="nomodule",xe=[ge,me];function Xe(r){if(!r.match(/.+\.[m]?js$/))throw new Error(v(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Ut(r){if(!r||!_(r.path))throw new Error(v('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!U(r.action)&&!Array.isArray(r.children)&&!U(r.children)&&!_e(e)&&!t.some(n=>_(r[n])))throw new Error(v(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(_(e))Xe(e);else if(xe.some(n=>n in e))xe.forEach(n=>n in e&&Xe(e[n]));else throw new Error(v('Expected route bundle to include either "'+me+'" or "'+ge+'" keys, or both'));r.redirect&&["bundle","component"].forEach(n=>{n in r&&console.warn(v(`Route config "${r.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function Ze(r){fe(r).forEach(e=>Ut(e))}function et(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===ge?t.setAttribute("type",ge):e===me&&t.setAttribute(me,""),t.async=!0),new Promise((n,i)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,n(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),i(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function Zr(r){return _(r)?et(r):Promise.race(xe.filter(e=>e in r).map(e=>et(r[e],e)))}function q(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function _e(r){return typeof r=="object"&&!!r}function U(r){return typeof r=="function"}function _(r){return typeof r=="string"}function Lt(r){const e=new Error(v(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const j=new class{};function en(r){const e=r.port,t=r.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${s}`}function tt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||en(e))!==window.location.origin)return;const{pathname:i,search:s,hash:o}=e;q("go",{pathname:i,search:s,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const tn={activate(){window.document.addEventListener("click",tt)},inactivate(){window.document.removeEventListener("click",tt)}},rn=/Trident/.test(navigator.userAgent);rn&&!U(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function rt(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;q("go",{pathname:e,search:t,hash:n})}const nn={activate(){window.addEventListener("popstate",rt)},inactivate(){window.removeEventListener("popstate",rt)}};var F=zt,sn=He,on=hn,an=Ht,ln=It,Nt="/",jt="./",cn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function He(r,e){for(var t=[],n=0,i=0,s="",o=e&&e.delimiter||Nt,c=e&&e.delimiters||jt,a=!1,l;(l=cn.exec(r))!==null;){var h=l[0],d=l[1],u=l.index;if(s+=r.slice(i,u),i=u+h.length,d){s+=d[1],a=!0;continue}var p="",C=r[i],Wt=l[2],Kt=l[3],Gt=l[4],ee=l[5];if(!a&&s.length){var $e=s.length-1;c.indexOf(s[$e])>-1&&(p=s[$e],s=s.slice(0,$e))}s&&(t.push(s),s="",a=!1);var Jt=p!==""&&C!==void 0&&C!==p,Yt=ee==="+"||ee==="*",Qt=ee==="?"||ee==="*",De=p||o,Ie=Kt||Gt;t.push({name:Wt||n++,prefix:p,delimiter:De,optional:Qt,repeat:Yt,partial:Jt,pattern:Ie?dn(Ie):"[^"+E(De)+"]+?"})}return(s||i<r.length)&&t.push(s+r.substr(i)),t}function hn(r,e){return Ht(He(r,e))}function Ht(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(n,i){for(var s="",o=i&&i.encode||encodeURIComponent,c=0;c<r.length;c++){var a=r[c];if(typeof a=="string"){s+=a;continue}var l=n?n[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function E(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function dn(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Dt(r){return r&&r.sensitive?"":"i"}function un(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function pn(r,e,t){for(var n=[],i=0;i<r.length;i++)n.push(zt(r[i],e,t).source);return new RegExp("(?:"+n.join("|")+")",Dt(t))}function fn(r,e,t){return It(He(r,t),e,t)}function It(r,e,t){t=t||{};for(var n=t.strict,i=t.start!==!1,s=t.end!==!1,o=E(t.delimiter||Nt),c=t.delimiters||jt,a=[].concat(t.endsWith||[]).map(E).concat("$").join("|"),l=i?"^":"",h=r.length===0,d=0;d<r.length;d++){var u=r[d];if(typeof u=="string")l+=E(u),h=d===r.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+E(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=E(u.prefix)+"("+p+")?":l+="(?:"+E(u.prefix)+"("+p+"))?":l+=E(u.prefix)+"("+p+")"}}return s?(n||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Dt(t))}function zt(r,e,t){return r instanceof RegExp?un(r,e):Array.isArray(r)?pn(r,e,t):fn(r,e,t)}F.parse=sn;F.compile=on;F.tokensToFunction=an;F.tokensToRegExp=ln;const{hasOwnProperty:gn}=Object.prototype,Te=new Map;Te.set("|false",{keys:[],pattern:/(?:)/});function nt(r){try{return decodeURIComponent(r)}catch{return r}}function mn(r,e,t,n,i){t=!!t;const s=`${r}|${t}`;let o=Te.get(s);if(!o){const l=[];o={keys:l,pattern:F(r,l,{end:t,strict:r===""})},Te.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},i);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!gn.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(nt):[]:a[d]=u&&nt(u))}return{path:c[0],keys:(n||[]).concat(o.keys),params:a}}function Ft(r,e,t,n,i){let s,o,c=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!s&&(s=mn(a,e,!h,n,i),s))return{done:!1,value:{route:r,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=r;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Ft(u,e.substr(p),t,s.keys,s.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function _n(r){if(U(r.route.action))return r.route.action(r)}function vn(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function bn(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function yn(r,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const i={path:n,route:t};if(!r.chain)r.chain=[];else if(t.parent){let s=r.chain.length;for(;s--&&r.chain[s].route&&r.chain[s].route!==t.parent;)r.chain.pop()}r.chain.push(i)}}class Y{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||_n,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Ze(e);const t=[...fe(e)];this.root.__children=t}addRoutes(e){return Ze(e),this.root.__children.push(...fe(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,_(e)?{pathname:e}:e),n=Ft(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let s=null,o=null,c=t;function a(l,h=s.value.route,d){const u=d===null&&s.value.route;return s=o||n.next(u),o=null,!l&&(s.done||!vn(h,s.value.route))?(o=s,Promise.resolve(j)):s.done?Promise.reject(Lt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),yn(c,s.value),Promise.resolve(i(c)).then(p=>p!=null&&p!==j?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=bn(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}Y.pathToRegexp=F;const{pathToRegexp:it}=Y,st=new Map;function Bt(r,e,t){const n=e.name||e.component;if(n&&(r.has(n)?r.get(n).push(e):r.set(n,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const s=t[i];s.parent=e,Bt(r,s,s.__children||s.children)}}function ot(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function at(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function wn(r,e={}){if(!(r instanceof Y))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,i)=>{let s=ot(t,n);if(!s&&(t.clear(),Bt(t,r.root,r.root.__children),s=ot(t,n),!s))throw new Error(`Route "${n}" not found`);let o=st.get(s.fullPath);if(!o){let a=at(s),l=s.parent;for(;l;){const p=at(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=it.parse(a),d=it.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)_(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},st.set(a,o),s.fullPath=a}let c=o.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},l=Object.keys(i);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=i[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let lt=[];function $n(r){lt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),lt=r}const En=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},An=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function ct(r,e){return r.classList.add(e),new Promise(t=>{if(En(r)){const n=r.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${i}`),An(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Pn=256;function Oe(r){return r!=null}function Sn(r){const e=Object.assign({},r);return delete e.next,e}function m({pathname:r="",search:e="",hash:t="",chain:n=[],params:i={},redirectFrom:s,resolver:o},c){const a=n.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:i,redirectFrom:s,getUrl:(l={})=>ie(S.pathToRegexp.compile(Vt(a))(Object.assign({},i,l)),o)}}function ht(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function On(r,e){e.location=m(r);const t=r.chain.map(n=>n.route).indexOf(r.route);return r.chain[t].element=e,e}function ne(r,e,t){if(U(r))return r.apply(t,e)}function dt(r,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return ne(t[r],e,t)}}function Cn(r,e){if(!Array.isArray(r)&&!_e(r))throw new Error(v(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=fe(r);for(let n=0;n<t.length;n++)Ut(t[n]),e.__children.push(t[n])}function te(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function ie(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Vt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class S extends Y{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&Y.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=S.NavigationTrigger;S.setTriggers.apply(S,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=m({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();U(t.children)&&(n=n.then(()=>t.children(Sn(e))).then(s=>{!Oe(s)&&!U(t.children)&&(s=t.children),Cn(s,t)}));const i={redirect:s=>ht(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return n.then(()=>{if(this.__isLatestRender(e))return ne(t.action,[e,i],t)}).then(s=>{if(Oe(s)&&(s instanceof HTMLElement||s.redirect||s===j))return s;if(_(t.redirect))return i.redirect(t.redirect);if(t.bundle)return Zr(t.bundle).then(()=>{},()=>{throw new Error(v(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Oe(s))return s;if(_(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},_(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=m(s),t&&this.__updateBrowserHistory(s,n===1),q("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),te(this.__outlet&&this.__outlet.children),this.location=m(Object.assign(i,{resolver:this})),q("error",Object.assign({router:this,error:s},i)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const s=n!==t?n:e,c=ie(Vt(n.chain),n.resolver)===n.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===j?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(n).then(l=>{if(l===null||l===j)throw Lt(s);return l&&l!==j&&l!==n?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(On(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(v(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Xr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>ht(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,i.length)&&!(n[a].route!==i[a].route||n[a].path!==i[a].path&&n[a].element!==i[a].element||!this.__isReusableElement(n[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a]);for(let a=0;a<i.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},i[a]),n[a].element.location=m(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=m(e,n[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},i[a]),i[a].element&&(i[a].element.location=m(e,i[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,i){const s=m(t);return e.then(o=>{if(this.__isLatestRender(t))return dt("onBeforeLeave",[s,n,this],i.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,n,i){const s=m(t,i.route);return e.then(o=>{if(this.__isLatestRender(t))return dt("onBeforeEnter",[s,n,this],i.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>Pn)throw new Error(v(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(v(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=i?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const s=t&&t.chain[i].element;if(s)if(s.parentNode===n)e.chain[i].element=s,n=s;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let i=n;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===n&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&te(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(te(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const s=m(e);ne(i.onAfterLeave,[s,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&te(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=m(e,e.chain[t].route);ne(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&n&&o){const c=_e(o)&&o.leave||"leaving",a=_e(o)&&o.enter||"entering";i.push(ct(t,c)),i.push(ct(n,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;_(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){$n(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=wn(this)),ie(this.__urlForName(e,t),this)}urlForPath(e,t){return ie(S.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=_(e)?this.__createUrl(e,"http://a"):e;return q("go",{pathname:t,search:n,hash:i})}}const Rn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,se=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function xn(){function r(){return!0}return kt(r)}function Tn(){try{return Mn()?!0:Un()?se?!Ln():!xn():!1}catch{return!1}}function Mn(){return localStorage.getItem("vaadin.developmentmode.force")}function Un(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ln(){return!!(se&&Object.keys(se).map(e=>se[e]).filter(e=>e.productionMode).length>0)}function kt(r,e){if(typeof r!="function")return;const t=Rn.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const ut=function(r,e){if(window.Vaadin.developmentMode)return kt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Tn());function Nn(){}const jn=function(){if(typeof ut=="function")return ut(Nn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});jn();S.NavigationTrigger={POPSTATE:nn,CLICK:tn};var Hn=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,qt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Dn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Hn(e,t,i),i};let Me=class extends b{constructor(){super(...arguments),this.router=new S(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return g`<slot></slot>`}};qt([w({attribute:!1})],Me.prototype,"routes",2);Me=qt([y("vaadin-router")],Me);var In=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Fn=(r,e,t,n)=>{for(var i=n>1?void 0:n?zn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&In(e,t,i),i};let pt=class extends je{constructor(){super(St)}render(){return g`
    <auth-required>
    <page-header></page-header>
    <vaadin-router .routes=${Qr}> </vaadin-router>
    </auth-required>
 `}};pt=Fn([y("wiki-app")],pt);
