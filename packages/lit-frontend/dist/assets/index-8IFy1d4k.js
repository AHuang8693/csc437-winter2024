(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,te=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),ae=new WeakMap;let ye=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(te&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ae.set(t,e))}return e}toString(){return this.cssText}};const K=r=>new ye(typeof r=="string"?r:r+"",void 0,se),O=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new ye(t,r,se)},ke=(r,e)=>{if(te)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=k.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},le=te?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return K(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Le,defineProperty:Ie,getOwnPropertyDescriptor:qe,getOwnPropertyNames:Be,getOwnPropertySymbols:Ve,getPrototypeOf:We}=Object,b=globalThis,ce=b.trustedTypes,Ke=ce?ce.emptyScript:"",Y=b.reactiveElementPolyfillSupport,U=(r,e)=>r,L={toAttribute(r,e){switch(e){case Boolean:r=r?Ke:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ie=(r,e)=>!Le(r,e),he={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:ie};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class P extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ie(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=qe(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=We(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const t=this.properties,i=[...Be(t),...Ve(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(le(s))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:L).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:L;this._$Em=s,this[s]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ie)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[U("elementProperties")]=new Map,P[U("finalized")]=new Map,Y==null||Y({ReactiveElement:P}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,I=T.trustedTypes,de=I?I.createPolicy("lit-html",{createHTML:r=>r}):void 0,we="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,Ae="?"+v,Je=`<${Ae}>`,w=document,R=()=>w.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",xe=Array.isArray,Fe=r=>xe(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",G=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,ue=/>/g,_=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,ge=/"/g,Ee=/^(?:script|style|textarea|title)$/i,Qe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),$=Qe(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),me=new WeakMap,y=w.createTreeWalker(w,129);function Pe(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}const Ye=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",o=M;for(let l=0;l<t;l++){const a=r[l];let h,d,c=-1,f=0;for(;f<a.length&&(o.lastIndex=f,d=o.exec(a),d!==null);)f=o.lastIndex,o===M?d[1]==="!--"?o=pe:d[1]!==void 0?o=ue:d[2]!==void 0?(Ee.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=_):d[3]!==void 0&&(o=_):o===_?d[0]===">"?(o=s??M,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?_:d[3]==='"'?ge:fe):o===ge||o===fe?o=_:o===pe||o===ue?o=M:(o=_,s=void 0);const g=o===_&&r[l+1].startsWith("/>")?" ":"";n+=o===M?a+Je:c>=0?(i.push(h),a.slice(0,c)+we+a.slice(c)+v+g):a+v+(c===-2?l:g)}return[Pe(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class N{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[h,d]=Ye(e,t);if(this.el=N.createElement(h,i),y.currentNode=this.el.content,t===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=y.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(we)){const f=d[o++],g=s.getAttribute(c).split(v),z=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:z[2],strings:g,ctor:z[1]==="."?Ze:z[1]==="?"?Xe:z[1]==="@"?et:J}),s.removeAttribute(c)}else c.startsWith(v)&&(a.push({type:6,index:n}),s.removeAttribute(c));if(Ee.test(s.tagName)){const c=s.textContent.split(v),f=c.length-1;if(f>0){s.textContent=I?I.emptyScript:"";for(let g=0;g<f;g++)s.append(c[g],R()),y.nextNode(),a.push({type:2,index:++n});s.append(c[f],R())}}}else if(s.nodeType===8)if(s.data===Ae)a.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(v,c+1))!==-1;)a.push({type:7,index:n}),c+=v.length-1}n++}}static createElement(e,t){const i=w.createElement("template");return i.innerHTML=e,i}}function C(r,e,t=r,i){var o,l;if(e===S)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=H(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=C(r,s._$AS(r,e.values),s,i)),e}class Ge{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??w).importNode(t,!0);y.currentNode=s;let n=y.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new j(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new tt(n,this,e)),this._$AV.push(h),a=i[++l]}o!==(a==null?void 0:a.index)&&(n=y.nextNode(),o++)}return y.currentNode=w,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class j{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),H(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fe(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=N.createElement(Pe(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new Ge(s,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new N(e)),t}k(e){xe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new j(this.S(R()),this.S(R()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=C(this,e,t,0),o=!H(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const l=e;let a,h;for(e=n[0],a=0;a<n.length-1;a++)h=C(this,l[i+a],t,a),h===S&&(h=this._$AH[a]),o||(o=!H(h)||h!==this._$AH[a]),h===p?e=p:e!==p&&(e+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ze extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Xe extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class et extends J{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??p)===S)return;const i=this._$AH,s=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class tt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const Z=T.litHtmlPolyfillSupport;Z==null||Z(N,j),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.1.2");const st=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new j(e.insertBefore(R(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let u=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=st(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}};var _e;u._$litElement$=!0,u.finalized=!0,(_e=globalThis.litElementHydrateSupport)==null||_e.call(globalThis,{LitElement:u});const X=globalThis.litElementPolyfillSupport;X==null||X({LitElement:u});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:ie},rt=(r=it,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.P(o,void 0,r),l}}}if(i==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function E(r){return(e,t)=>typeof t=="object"?rt(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Se(r){return E({...r,state:!0,attribute:!1})}const nt="http://localhost:3000",ot="/api",at="JWT_AUTH_TOKEN",m=class m{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new m;return console.log("Deauthenticating",e,m._theUser),e===m._theUser&&(localStorage.removeItem(at),m._theUser=t),t}};m._theUser=new m;let D=m;class Ce{constructor(e){this._base=ot,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=D._theUser.authenticated,i={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${D._theUser.token}`};return e?{...i,...n}:n}else return e?{...i}:void 0}_url(e){return`${nt}${this._base}${e}`}}class Oe extends Ce{constructor(){super(void 0)}}let lt=class extends u{constructor(e,t,i){super(),this.updateFn=e,this.getModel=t,this.setModel=i,this.addEventListener("mvu:message",s=>{const n=s.detail;console.log("Got message: ",n),this.receive(n)})}receive(e){const t=this.updateFn(this.getModel(),e),i=t;typeof(i==null?void 0:i.then)=="function"?i.then(s=>{const n=s(this.getModel());console.log("Updating model in Promise:",n),this.setModel(n)}):(console.log("Updating model:",t),this.setModel(t))}},ct=class extends u{dispatchMessage(e,t=this){const i=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(i)}};class ht{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:i}=t,s=this._handlers.get(i);return s?s(t,e):e}}function dt(r){return e=>Object.assign({},e,r)}function pt(r){return r}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Me=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ve=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Me(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ut{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ft=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class be extends ut{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const a=new Set;for(const[h,{consumerHost:d}]of this.subscriptions)a.has(h)||(a.add(h),d.dispatchEvent(new Me(this.context,h,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ft(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new be(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new be(o,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(l){i.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set:function(l){i.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new ve(this,{context:r,callback:s=>{this[i.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new ve(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}var vt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,Ue=(r,e,t,i)=>{for(var s=i>1?void 0:i?bt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&vt(e,t,s),s};const Te="WikiModel",$t={user:new D,weapons:[]};class Re extends lt{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=$t}}Ue([gt({context:Te}),Se()],Re.prototype,"model",2);class He extends ct{getFromModel(e){if(this._model)return this._model[e]}}Ue([mt({context:Te,subscribe:!0}),E({attribute:!1})],He.prototype,"_model",2);const _t=()=>new ht,re=dt,ne=pt,oe='body{font-family:var(--font-family-body);color:var(--color-text);background-color:var(--color-background);margin:1em}a,a:visited{color:var(--color-text)}h1,h3{font-family:var(--font-family-display);background-color:var(--color-brand);color:#fff;width:max-content;padding:0 .15em}section :not(h1,h3,strong,svg){margin-left:1.5em}em{display:inline-block}svg.icon{display:inline;height:var(--size-icon-normal);width:var(--size-icon-normal);vertical-align:bottom;fill:currentColor}section.trait>h3{background-color:red;color:#fff;width:max-content;padding:.1em .25em}section.system>h3{background-color:#27c52c;color:#fff;width:max-content;padding:.1em .25em}section.weapon>h3{grid-area:header;background-color:#000;color:#fff;width:max-content;padding:.1em .25em}.weapon{display:grid;grid-template-columns:auto 1fr;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"header type" "tags ." "range dmg"}section.weapon>.type{align-self:center;grid-area:type}section.weapon>.tags{grid-area:tags}section.weapon>.range{grid-area:range}section.weapon>.dmg{grid-area:dmg}.wContainer.compact>.weapon{display:grid;grid-template-columns:auto 1fr 1fr 1fr 1fr;grid-template-rows:1fr;grid-template-areas:"header type tags range dmg"}.weapon h3{display:inline;grid-column:1/2}.stats{display:grid;grid-template-columns:1fr 1fr;width:max-content;column-gap:2em}.container{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline}.container>div{width:125px}';var yt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,F=(r,e,t,i)=>{for(var s=i>1?void 0:i?wt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&yt(e,t,s),s};let A=class extends u{constructor(){super(...arguments),this.path=""}render(){const{userid:r,name:e}=this.profile||{};return $`
      <p>Username: ${e}<br>ID: ${r} </p>
    `}};A.styles=[K(oe),O`
  * {
    margin: 0;
    box-sizing: border-box;
  }`];F([E()],A.prototype,"path",2);F([Se()],A.prototype,"profile",2);A=F([x("user-profile")],A);let ee=class extends A{render(){return $`<form @submit=${this._handleSubmit}>
        <label>Enter New Username:
          <input type="text" name="name"></label><br>
        <button type="submit">Submit</button>
    </form> `}_handleSubmit(r){r.preventDefault()}};ee.styles=[...A.styles,O`...`];ee=F([x("user-profile-edit")],ee);var At=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Ne=(r,e,t,i)=>{for(var s=i>1?void 0:i?xt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&At(e,t,s),s};let q=class extends u{constructor(){super(...arguments),this.open=!1}render(){return $`
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
    `}_handleChange(r){const e=r.target;this._toggle(e==null?void 0:e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};q.styles=O`
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
  `;Ne([E({reflect:!0,type:Boolean})],q.prototype,"open",2);q=Ne([x("drop-down")],q);var Et=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,De=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Et(e,t,s),s};let B=class extends u{constructor(){super(...arguments),this.avatar=""}render(){return $`
    <ul>
    <li class="header">
      <img src=${this.avatar} />
      <h1><slot name="name">Your Name</slot></h1>
    </li>
    <li>
      <toggle-switch @change=${this._toggleDarkMode}>
        Dark Mode
      </toggle-switch>
    </li>`}_toggleDarkMode(r){const e=r.target,t=document.body;console.log("Toggling Dark mode",r),e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}};B.styles=O`
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
`;De([E()],B.prototype,"avatar",2);B=De([x("user-panel")],B);var St=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,je=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ct(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&St(e,t,s),s};let V=class extends u{constructor(){super(...arguments),this.on=!1}render(){return $`
        <div class="container">
            <div><a href="../app/index.html">Home</a></div>
            <div><a href="pilot.html">Pilot</a></div>
            <div><a href="factions.html">Factions</a></div>
            <div><a href="weapons.html">Weapons</a></div>
            <div><a href="systems.html">Systems</a></div>
            <div><a href='roles.html'>Roles</a></div>
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
        </div>`}};V.styles=[K(oe),O`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];je([E({attribute:!1})],V.prototype,"on",2);V=je([x("page-header")],V);var Ot=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,ze=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ot(e,t,s),s};let W=class extends He{get weapons(){return this.getFromModel("weapons")}render(){return $`
        <page-header></page-header>
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
          ${(this.weapons||[]).map(r=>$`
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
        </main>`}};W.styles=[K(oe),O`
        * {
          margin: 0;
          box-sizing: border-box;
        }`];ze([E()],W.prototype,"weapons",1);W=ze([x("weapons-page")],W);const Ut=[{path:"/app/profile/:userid",component:"user-profile"},{path:"/app/weapons",component:"weapons-page"},{path:"/app",component:"home-page"},{path:"(.*)",redirect:"/app"}],Q=_t(),Tt=Q.update;Q.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Oe().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?re({profile:t}):ne)});Q.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new Ce(t).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{i&&console.log("Profile:",i)}).then(i=>i?re({profile:i}):ne)});Q.addMessage("WeaponsRequested",r=>new Oe().get("/weapons/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Weapons:",e),e}).then(e=>e?re({weapons:e}):ne));var Rt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Nt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ht(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Rt(e,t,s),s};let $e=class extends Re{constructor(){super(Tt)}render(){return $`
    <auth-required>
    <page-header></page-header>
    <vaadin-router .routes=${Ut}> </vaadin-router>
    </auth-required>
 `}};$e=Nt([x("wiki-app")],$e);
