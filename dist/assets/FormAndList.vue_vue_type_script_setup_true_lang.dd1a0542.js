import{d as Qe,u as cr,e as lr,f as ht,o as at,c as pt,b,w as Ht,v as Kt,g as bo,n as hr,h as ju,i as To,j as gt,k as qu,l as dr,t as Et,F as Sn,m as Io,p as Se,r as Hu,a as Ku,q as Gu,s as Co,x as vs}from"./index.31e9df1c.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},zu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,u=r+2<e.length,c=u?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(d=64)),s.push(n[l],n[h],n[d],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(So(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Qu=function(e){const t=So(e);return Wu.encodeByteArray(t,!0)},Ao=function(e){return Qu(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kn())}function Ju(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Zu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tc(){return Kn().indexOf("Electron/")>=0}function ec(){const e=Kn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function nc(){return Kn().indexOf("MSAppHost/")>=0}function sc(){return typeof indexedDB=="object"}function rc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="FirebaseError";class pe extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=ic,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?oc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new pe(r,a,s)}}function oc(e,t){return e.replace(ac,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const ac=/\{\$([^}]+)}/g;function Ms(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(yi(i)&&yi(o)){if(!Ms(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return e&&e._delegate?e._delegate:e}class Me{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Yu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lc(t))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Bt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bt){return this.instances.has(t)}getOptions(t=Bt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Bt){return this.component?this.component.multipleInstances?t:Bt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cc(e){return e===Bt?void 0:e}function lc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new uc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(x||(x={}));const dc={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},fc=x.INFO,gc={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},mc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=gc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _o{constructor(t){this.name=t,this._logLevel=fc,this._logHandler=mc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const pc=(e,t)=>t.some(n=>e instanceof n);let vi,wi;function yc(){return vi||(vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vc(){return wi||(wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ko=new WeakMap,Os=new WeakMap,xo=new WeakMap,ws=new WeakMap,fr=new WeakMap;function wc(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(xt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ko.set(n,e)}).catch(()=>{}),fr.set(t,e),t}function Ec(e){if(Os.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Os.set(e,t)}let Ps={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Os.get(e);if(t==="objectStoreNames")return e.objectStoreNames||xo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function bc(e){Ps=e(Ps)}function Tc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Es(this),t,...n);return xo.set(s,t.sort?t.sort():[t]),xt(s)}:vc().includes(e)?function(...t){return e.apply(Es(this),t),xt(ko.get(this))}:function(...t){return xt(e.apply(Es(this),t))}}function Ic(e){return typeof e=="function"?Tc(e):(e instanceof IDBTransaction&&Ec(e),pc(e,yc())?new Proxy(e,Ps):e)}function xt(e){if(e instanceof IDBRequest)return wc(e);if(ws.has(e))return ws.get(e);const t=Ic(e);return t!==e&&(ws.set(e,t),fr.set(t,e)),t}const Es=e=>fr.get(e);function Cc(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=xt(o);return s&&o.addEventListener("upgradeneeded",u=>{s(xt(o.result),u.oldVersion,u.newVersion,xt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Sc=["get","getKey","getAll","getAllKeys","count"],Ac=["put","add","delete","clear"],bs=new Map;function Ei(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(bs.get(t))return bs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Ac.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Sc.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,r?"readwrite":"readonly");let c=u.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&u.done]))[0]};return bs.set(t,i),i}bc(e=>({...e,get:(t,n,s)=>Ei(t,n)||e.get(t,n,s),has:(t,n)=>!!Ei(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_c(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _c(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vs="@firebase/app",bi="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new _o("@firebase/app"),kc="@firebase/app-compat",xc="@firebase/analytics-compat",Nc="@firebase/analytics",Rc="@firebase/app-check-compat",Lc="@firebase/app-check",Mc="@firebase/auth",Oc="@firebase/auth-compat",Pc="@firebase/database",Vc="@firebase/database-compat",Fc="@firebase/functions",Uc="@firebase/functions-compat",Bc="@firebase/installations",$c="@firebase/installations-compat",jc="@firebase/messaging",qc="@firebase/messaging-compat",Hc="@firebase/performance",Kc="@firebase/performance-compat",Gc="@firebase/remote-config",zc="@firebase/remote-config-compat",Wc="@firebase/storage",Qc="@firebase/storage-compat",Yc="@firebase/firestore",Xc="@firebase/firestore-compat",Jc="firebase",Zc="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="[DEFAULT]",tl={[Vs]:"fire-core",[kc]:"fire-core-compat",[Nc]:"fire-analytics",[xc]:"fire-analytics-compat",[Lc]:"fire-app-check",[Rc]:"fire-app-check-compat",[Mc]:"fire-auth",[Oc]:"fire-auth-compat",[Pc]:"fire-rtdb",[Vc]:"fire-rtdb-compat",[Fc]:"fire-fn",[Uc]:"fire-fn-compat",[Bc]:"fire-iid",[$c]:"fire-iid-compat",[jc]:"fire-fcm",[qc]:"fire-fcm-compat",[Hc]:"fire-perf",[Kc]:"fire-perf-compat",[Gc]:"fire-rc",[zc]:"fire-rc-compat",[Wc]:"fire-gcs",[Qc]:"fire-gcs-compat",[Yc]:"fire-fst",[Xc]:"fire-fst-compat","fire-js":"fire-js",[Jc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Map,Fs=new Map;function el(e,t){try{e.container.addComponent(t)}catch(n){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Dn(e){const t=e.name;if(Fs.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;Fs.set(t,e);for(const n of An.values())el(n,e);return!0}function nl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new Do("app","Firebase",sl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=Zc;function ol(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:No,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});const r=An.get(s);if(r){if(Ms(e,r.options)&&Ms(n,r.config))return r;throw Wt.create("duplicate-app",{appName:s})}const i=new hc(s);for(const a of Fs.values())i.addComponent(a);const o=new rl(e,n,i);return An.set(s,o),o}function al(e=No){const t=An.get(e);if(!t)throw Wt.create("no-app",{appName:e});return t}function ie(e,t,n){var s;let r=(s=tl[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Dn(new Me(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="firebase-heartbeat-database",cl=1,Oe="firebase-heartbeat-store";let Ts=null;function Ro(){return Ts||(Ts=Cc(ul,cl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oe)}}}).catch(e=>{throw Wt.create("idb-open",{originalErrorMessage:e.message})})),Ts}async function ll(e){var t;try{return(await Ro()).transaction(Oe).objectStore(Oe).get(Lo(e))}catch(n){if(n instanceof pe)zt.warn(n.message);else{const s=Wt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});zt.warn(s.message)}}}async function Ti(e,t){var n;try{const r=(await Ro()).transaction(Oe,"readwrite");return await r.objectStore(Oe).put(t,Lo(e)),r.done}catch(s){if(s instanceof pe)zt.warn(s.message);else{const r=Wt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});zt.warn(r.message)}}}function Lo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=1024,dl=30*24*60*60*1e3;class fl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ml(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ii();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=dl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ii(),{heartbeatsToSend:n,unsentEntries:s}=gl(this._heartbeatsCache.heartbeats),r=Ao(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ii(){return new Date().toISOString().substring(0,10)}function gl(e,t=hl){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ci(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ci(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ml{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sc()?rc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ll(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ti(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ti(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ci(e){return Ao(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(e){Dn(new Me("platform-logger",t=>new Dc(t),"PRIVATE")),Dn(new Me("heartbeat",t=>new fl(t),"PRIVATE")),ie(Vs,bi,e),ie(Vs,bi,"esm2017"),ie("fire-js","")}pl("");var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,gr=gr||{},T=yl||self;function _n(){}function Us(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ye(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function vl(e){return Object.prototype.hasOwnProperty.call(e,Is)&&e[Is]||(e[Is]=++wl)}var Is="closure_uid_"+(1e9*Math.random()>>>0),wl=0;function El(e,t,n){return e.call.apply(e.bind,arguments)}function bl(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Y(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=El:Y=bl,Y.apply(null,arguments)}function fn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Z(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Pt(){this.s=this.s,this.o=this.o}var Tl=0;Pt.prototype.s=!1;Pt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Tl!=0)&&vl(this)};Pt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Oo=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function Il(e){t:{var t=gh;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Si(e){return Array.prototype.concat.apply([],arguments)}function mr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function kn(e){return/^[\s\xa0]*$/.test(e)}var Ai=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function st(e,t){return e.indexOf(t)!=-1}function Cs(e,t){return e<t?-1:e>t?1:0}var rt;t:{var Di=T.navigator;if(Di){var _i=Di.userAgent;if(_i){rt=_i;break t}}rt=""}function pr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Po(e){const t={};for(const n in e)t[n]=e[n];return t}var ki="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<ki.length;i++)n=ki[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function yr(e){return yr[" "](e),e}yr[" "]=_n;function Cl(e){var t=Dl;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Sl=st(rt,"Opera"),ce=st(rt,"Trident")||st(rt,"MSIE"),Fo=st(rt,"Edge"),Bs=Fo||ce,Uo=st(rt,"Gecko")&&!(st(rt.toLowerCase(),"webkit")&&!st(rt,"Edge"))&&!(st(rt,"Trident")||st(rt,"MSIE"))&&!st(rt,"Edge"),Al=st(rt.toLowerCase(),"webkit")&&!st(rt,"Edge");function Bo(){var e=T.document;return e?e.documentMode:void 0}var xn;t:{var Ss="",As=function(){var e=rt;if(Uo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Fo)return/Edge\/([\d\.]+)/.exec(e);if(ce)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Al)return/WebKit\/(\S+)/.exec(e);if(Sl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(As&&(Ss=As?As[1]:""),ce){var Ds=Bo();if(Ds!=null&&Ds>parseFloat(Ss)){xn=String(Ds);break t}}xn=Ss}var Dl={};function _l(){return Cl(function(){let e=0;const t=Ai(String(xn)).split("."),n=Ai("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Cs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Cs(r[2].length==0,i[2].length==0)||Cs(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var $s;if(T.document&&ce){var xi=Bo();$s=xi||parseInt(xn,10)||void 0}else $s=void 0;var kl=$s,xl=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",_n,t),T.removeEventListener("test",_n,t)}catch{}return e}();function et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};function Pe(e,t){if(et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Uo){t:{try{yr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Nl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Pe.Z.h.call(this)}}Z(Pe,et);var Nl={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Xe="closure_listenable_"+(1e6*Math.random()|0),Rl=0;function Ll(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++Rl,this.ca=this.fa=!1}function Gn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function zn(e){this.src=e,this.g={},this.h=0}zn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=qs(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Ll(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function js(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Mo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Gn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function qs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var vr="closure_lm_"+(1e6*Math.random()|0),_s={};function $o(e,t,n,s,r){if(s&&s.once)return qo(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)$o(e,t[i],n,s,r);return null}return n=br(n),e&&e[Xe]?e.N(t,n,Ye(s)?!!s.capture:!!s,r):jo(e,t,n,!1,s,r)}function jo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Ye(r)?!!r.capture:!!r,a=Er(e);if(a||(e[vr]=a=new zn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Ml(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)xl||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Ko(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ml(){function e(n){return t.call(e.src,e.listener,n)}var t=Ol;return e}function qo(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)qo(e,t[i],n,s,r);return null}return n=br(n),e&&e[Xe]?e.O(t,n,Ye(s)?!!s.capture:!!s,r):jo(e,t,n,!0,s,r)}function Ho(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ho(e,t[i],n,s,r);else s=Ye(s)?!!s.capture:!!s,n=br(n),e&&e[Xe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=qs(i,n,s,r),-1<n&&(Gn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Er(e))&&(t=e.g[t.toString()],e=-1,t&&(e=qs(t,n,s,r)),(n=-1<e?t[e]:null)&&wr(n))}function wr(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Xe])js(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ko(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Er(t))?(js(n,e),n.h==0&&(n.src=null,t[vr]=null)):Gn(e)}}}function Ko(e){return e in _s?_s[e]:_s[e]="on"+e}function Ol(e,t){if(e.ca)e=!0;else{t=new Pe(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&wr(e),e=n.call(s,t)}return e}function Er(e){return e=e[vr],e instanceof zn?e:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function br(e){return typeof e=="function"?e:(e[ks]||(e[ks]=function(t){return e.handleEvent(t)}),e[ks])}function K(){Pt.call(this),this.i=new zn(this),this.P=this,this.I=null}Z(K,Pt);K.prototype[Xe]=!0;K.prototype.removeEventListener=function(e,t,n,s){Ho(this,e,t,n,s)};function X(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new et(t,e);else if(t instanceof et)t.target=t.target||e;else{var r=t;t=new et(s,e),Vo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=gn(o,s,!0,t)&&r}if(o=t.g=e,r=gn(o,s,!0,t)&&r,r=gn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=gn(o,s,!1,t)&&r}K.prototype.M=function(){if(K.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Gn(n[s]);delete e.g[t],e.h--}}this.I=null};K.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};K.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function gn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&js(e.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var Tr=T.JSON.stringify;function Pl(){var e=zo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Vl{constructor(){this.h=this.g=null}add(t,n){const s=Go.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Go=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Fl,e=>e.reset());class Fl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ul(e){T.setTimeout(()=>{throw e},0)}function Ir(e,t){Hs||Bl(),Ks||(Hs(),Ks=!0),zo.add(e,t)}var Hs;function Bl(){var e=T.Promise.resolve(void 0);Hs=function(){e.then($l)}}var Ks=!1,zo=new Vl;function $l(){for(var e;e=Pl();){try{e.h.call(e.g)}catch(n){Ul(n)}var t=Go;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ks=!1}function Wn(e,t){K.call(this),this.h=e||1,this.g=t||T,this.j=Y(this.kb,this),this.l=Date.now()}Z(Wn,K);y=Wn.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),X(this,"tick"),this.da&&(Cr(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}y.M=function(){Wn.Z.M.call(this),Cr(this),delete this.g};function Sr(e,t,n){if(typeof e=="function")n&&(e=Y(e,n));else if(e&&typeof e.handleEvent=="function")e=Y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function Wo(e){e.g=Sr(()=>{e.g=null,e.i&&(e.i=!1,Wo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class jl extends Pt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wo(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(e){Pt.call(this),this.h=e,this.g={}}Z(Ve,Pt);var Ni=[];function Qo(e,t,n,s){Array.isArray(n)||(n&&(Ni[0]=n.toString()),n=Ni);for(var r=0;r<n.length;r++){var i=$o(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Yo(e){pr(e.g,function(t,n){this.g.hasOwnProperty(n)&&wr(t)},e),e.g={}}Ve.prototype.M=function(){Ve.Z.M.call(this),Yo(this)};Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qn(){this.g=!0}Qn.prototype.Aa=function(){this.g=!1};function ql(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Hl(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function se(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Gl(e,n)+(s?" "+s:"")})}function Kl(e,t){e.info(function(){return"TIMEOUT: "+t})}Qn.prototype.info=function(){};function Gl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Tr(n)}catch{return t}}var Zt={},Ri=null;function Yn(){return Ri=Ri||new K}Zt.Ma="serverreachability";function Xo(e){et.call(this,Zt.Ma,e)}Z(Xo,et);function Fe(e){const t=Yn();X(t,new Xo(t))}Zt.STAT_EVENT="statevent";function Jo(e,t){et.call(this,Zt.STAT_EVENT,e),this.stat=t}Z(Jo,et);function it(e){const t=Yn();X(t,new Jo(t,e))}Zt.Na="timingevent";function Zo(e,t){et.call(this,Zt.Na,e),this.size=t}Z(Zo,et);function Je(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Xn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ta={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ar(){}Ar.prototype.h=null;function Li(e){return e.h||(e.h=e.i())}function ea(){}var Ze={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Dr(){et.call(this,"d")}Z(Dr,et);function _r(){et.call(this,"c")}Z(_r,et);var Gs;function Jn(){}Z(Jn,Ar);Jn.prototype.g=function(){return new XMLHttpRequest};Jn.prototype.i=function(){return{}};Gs=new Jn;function tn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new Ve(this),this.P=zl,e=Bs?125:void 0,this.W=new Wn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new na}function na(){this.i=null,this.g="",this.h=!1}var zl=45e3,zs={},Nn={};y=tn.prototype;y.setTimeout=function(e){this.P=e};function Ws(e,t,n){e.K=1,e.v=ts(St(t)),e.s=n,e.U=!0,sa(e,null)}function sa(e,t){e.F=Date.now(),en(e),e.A=St(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),la(n.h,"t",s),e.C=0,n=e.l.H,e.h=new na,e.g=xa(e.l,n?t:null,!e.s),0<e.O&&(e.L=new jl(Y(e.Ia,e,e.g),e.O)),Qo(e.V,e.g,"readystatechange",e.gb),t=e.H?Po(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Fe(),ql(e.j,e.u,e.A,e.m,e.X,e.s)}y.gb=function(e){e=e.target;const t=this.L;t&&bt(e)==3?t.l():this.Ia(e)};y.Ia=function(e){try{if(e==this.g)t:{const l=bt(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Bs||this.g&&(this.h.h||this.g.ga()||Vi(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?Fe(3):Fe(2)),Zn(this);var n=this.g.ba();this.N=n;e:if(ra(this)){var s=Vi(this.g);e="";var r=s.length,i=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),ke(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Hl(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!kn(a)){var c=a;break e}}c=null}if(n=c)se(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qs(this,n);else{this.i=!1,this.o=3,it(12),$t(this),ke(this);break t}}this.U?(ia(this,l,o),Bs&&this.i&&l==3&&(Qo(this.V,this.W,"tick",this.fb),this.W.start())):(se(this.j,this.m,o,null),Qs(this,o)),l==4&&$t(this),this.i&&!this.I&&(l==4?Aa(this.l,this):(this.i=!1,en(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),$t(this),ke(this)}}}catch{}finally{}};function ra(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function ia(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Wl(e,n),r==Nn){t==4&&(e.o=4,it(14),s=!1),se(e.j,e.m,null,"[Incomplete Response]");break}else if(r==zs){e.o=4,it(15),se(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else se(e.j,e.m,r,null),Qs(e,r);ra(e)&&r!=Nn&&r!=zs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,it(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vr(t),t.L=!0,it(11))):(se(e.j,e.m,n,"[Invalid Chunked Response]"),$t(e),ke(e))}y.fb=function(){if(this.g){var e=bt(this.g),t=this.g.ga();this.C<t.length&&(Zn(this),ia(this,e,t),this.i&&e!=4&&en(this))}};function Wl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Nn:(n=Number(t.substring(n,s)),isNaN(n)?zs:(s+=1,s+n>t.length?Nn:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.I=!0,$t(this)};function en(e){e.Y=Date.now()+e.P,oa(e,e.P)}function oa(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Je(Y(e.eb,e),t)}function Zn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}y.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Kl(this.j,this.A),this.K!=2&&(Fe(),it(17)),$t(this),this.o=2,ke(this)):oa(this,this.Y-e)};function ke(e){e.l.G==0||e.I||Aa(e.l,e)}function $t(e){Zn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Cr(e.W),Yo(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Qs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ys(n.i,e))){if(n.I=e.N,!e.J&&Ys(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)On(n),ss(n);else break t;Pr(n),it(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Je(Y(n.ab,n),6e3));if(1>=fa(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else jt(n,11)}else if((e.J||n.g==e)&&On(n),!kn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const l=c[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const p=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.i;!i.g&&(st(p,"spdy")||st(p,"quic")||st(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Nr(i,i.h),i.h=null))}if(s.D){const D=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.sa=D,P(s.F,s.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=ka(s,s.H?s.la:null,s.W),o.J){ga(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Zn(a),en(a)),s.g=o}else Ca(s);0<n.l.length&&rs(n)}else c[0]!="stop"&&c[0]!="close"||jt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?jt(n,7):Or(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Fe(4)}catch{}}function Ql(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Us(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function kr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Us(e)||typeof e=="string")Oo(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Us(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=Ql(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function ye(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof ye)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}y=ye.prototype;y.R=function(){xr(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};y.T=function(){return xr(this),this.g.concat()};function xr(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Qt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],Qt(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}y.get=function(e,t){return Qt(this.h,e)?this.h[e]:t};y.set=function(e,t){Qt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};y.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function Qt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var aa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Yl(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Yt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Yt){this.g=t!==void 0?t:e.g,Rn(this,e.j),this.s=e.s,Ln(this,e.i),Mn(this,e.m),this.l=e.l,t=e.h;var n=new Ue;n.i=t.i,t.g&&(n.g=new ye(t.g),n.h=t.h),Mi(this,n),this.o=e.o}else e&&(n=String(e).match(aa))?(this.g=!!t,Rn(this,n[1]||"",!0),this.s=xe(n[2]||""),Ln(this,n[3]||"",!0),Mn(this,n[4]),this.l=xe(n[5]||"",!0),Mi(this,n[6]||"",!0),this.o=xe(n[7]||"")):(this.g=!!t,this.h=new Ue(null,this.g))}Yt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ae(t,Oi,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ae(t,Oi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Ae(n,n.charAt(0)=="/"?eh:th,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ae(n,sh)),e.join("")};function St(e){return new Yt(e)}function Rn(e,t,n){e.j=n?xe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ln(e,t,n){e.i=n?xe(t,!0):t}function Mn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Mi(e,t,n){t instanceof Ue?(e.h=t,rh(e.h,e.g)):(n||(t=Ae(t,nh)),e.h=new Ue(t,e.g))}function P(e,t,n){e.h.set(t,n)}function ts(e){return P(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xl(e){return e instanceof Yt?St(e):new Yt(e,void 0)}function Jl(e,t,n,s){var r=new Yt(null,void 0);return e&&Rn(r,e),t&&Ln(r,t),n&&Mn(r,n),s&&(r.l=s),r}function xe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ae(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Zl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Zl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Oi=/[#\/\?@]/g,th=/[#\?:]/g,eh=/[#\?]/g,nh=/[#\?@]/g,sh=/#/g;function Ue(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vt(e){e.g||(e.g=new ye,e.h=0,e.i&&Yl(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Ue.prototype;y.add=function(e,t){Vt(this),this.i=null,e=ve(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ua(e,t){Vt(e),t=ve(e,t),Qt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Qt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&xr(e)))}function ca(e,t){return Vt(e),t=ve(e,t),Qt(e.g.h,t)}y.forEach=function(e,t){Vt(this),this.g.forEach(function(n,s){Oo(n,function(r){e.call(t,r,s,this)},this)},this)};y.T=function(){Vt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};y.R=function(e){Vt(this);var t=[];if(typeof e=="string")ca(this,e)&&(t=Si(t,this.g.get(ve(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Si(t,e[n])}return t};y.set=function(e,t){return Vt(this),this.i=null,e=ve(this,e),ca(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function la(e,t,n){ua(e,t),0<n.length&&(e.i=null,e.g.set(ve(e,t),mr(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function ve(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function rh(e,t){t&&!e.j&&(Vt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ua(this,s),la(this,r,n))},e)),e.j=t}var ih=class{constructor(e,t){this.h=e,this.g=t}};function ha(e){this.l=e||oh,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oh=10;function da(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function fa(e){return e.h?1:e.g?e.g.size:0}function Ys(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Nr(e,t){e.g?e.g.add(t):e.h=t}function ga(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ha.prototype.cancel=function(){if(this.i=ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ma(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return mr(e.i)}function Rr(){}Rr.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Rr.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function ah(){this.g=new Rr}function uh(e,t,n){const s=n||"";try{kr(e,function(r,i){let o=r;Ye(r)&&(o=Tr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function ch(e,t){const n=new Qn;if(T.Image){const s=new Image;s.onload=fn(mn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=fn(mn,n,s,"TestLoadImage: error",!1,t),s.onabort=fn(mn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=fn(mn,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function mn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function nn(e){this.l=e.$b||null,this.j=e.ib||!1}Z(nn,Ar);nn.prototype.g=function(){return new es(this.l,this.j)};nn.prototype.i=function(e){return function(){return e}}({});function es(e,t){K.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Lr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Z(es,K);var Lr=0;y=es.prototype;y.open=function(e,t){if(this.readyState!=Lr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Be(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=Lr};y.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pa(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function pa(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}y.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sn(this):Be(this),this.readyState==3&&pa(this)}};y.Ua=function(e){this.g&&(this.response=this.responseText=e,sn(this))};y.Ta=function(e){this.g&&(this.response=e,sn(this))};y.ha=function(){this.g&&sn(this)};function sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Be(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Be(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var lh=T.JSON.parse;function B(e){K.call(this),this.headers=new ye,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ya,this.K=this.L=!1}Z(B,K);var ya="",hh=/^https?$/i,dh=["POST","PUT"];y=B.prototype;y.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gs.g(),this.C=this.u?Li(this.u):Li(Gs),this.g.onreadystatechange=Y(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Pi(this,i);return}e=n||"";const r=new ye(this.headers);s&&kr(s,function(i,o){r.set(o,i)}),s=Il(r.T()),n=T.FormData&&e instanceof T.FormData,!(0<=Mo(dh,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ea(this),0<this.B&&((this.K=fh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.pa,this)):this.A=Sr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Pi(this,i)}};function fh(e){return ce&&_l()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function gh(e){return e.toLowerCase()=="content-type"}y.pa=function(){typeof gr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function Pi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,va(e),ns(e)}function va(e){e.D||(e.D=!0,X(e,"complete"),X(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,X(this,"complete"),X(this,"abort"),ns(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ns(this,!0)),B.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?wa(this):this.cb())};y.cb=function(){wa(this)};function wa(e){if(e.h&&typeof gr<"u"&&(!e.C[1]||bt(e)!=4||e.ba()!=2)){if(e.v&&bt(e)==4)Sr(e.Fa,0,e);else if(X(e,"readystatechange"),bt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(aa)[1]||null;if(!r&&T.self&&T.self.location){var i=T.self.location.protocol;r=i.substr(0,i.length-1)}s=!hh.test(r?r.toLowerCase():"")}n=s}if(n)X(e,"complete"),X(e,"success");else{e.m=6;try{var o=2<bt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",va(e)}}finally{ns(e)}}}}function ns(e,t){if(e.g){Ea(e);const n=e.g,s=e.C[0]?_n:null;e.g=null,e.C=null,t||X(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ea(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function bt(e){return e.g?e.g.readyState:0}y.ba=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),lh(t)}};function Vi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ya:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function mh(e){let t="";return pr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Mr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=mh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):P(e,t,n))}function Ce(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ba(e){this.za=0,this.l=[],this.h=new Qn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ce("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ce("baseRetryDelayMs",5e3,e),this.$a=Ce("retryDelaySeedMs",1e4,e),this.Ya=Ce("forwardChannelMaxRetries",2,e),this.ra=Ce("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ha(e&&e.concurrentRequestLimit),this.Ca=new ah,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}y=ba.prototype;y.ma=8;y.G=1;function Or(e){if(Ta(e),e.G==3){var t=e.V++,n=St(e.F);P(n,"SID",e.J),P(n,"RID",t),P(n,"TYPE","terminate"),rn(e,n),t=new tn(e,e.h,t,void 0),t.K=2,t.v=ts(St(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=xa(t.l,null),t.g.ea(t.v)),t.F=Date.now(),en(t)}_a(e)}y.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function ss(e){e.g&&(Vr(e),e.g.cancel(),e.g=null)}function Ta(e){ss(e),e.u&&(T.clearTimeout(e.u),e.u=null),On(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function xs(e,t){e.l.push(new ih(e.Za++,t)),e.G==3&&rs(e)}function rs(e){da(e.i)||e.m||(e.m=!0,Ir(e.Ha,e),e.C=0)}function ph(e,t){return fa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Je(Y(e.Ha,e,t),Da(e,e.C)),e.C++,!0)}y.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new tn(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=Po(i),Vo(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ia(this,r,t),n=St(this.F),P(n,"RID",e),P(n,"CVER",22),this.D&&P(n,"X-HTTP-Session-Id",this.D),rn(this,n),this.o&&i&&Mr(n,this.o,i),Nr(this.i,r),this.Ra&&P(n,"TYPE","init"),this.ja?(P(n,"$req",t),P(n,"SID","null"),r.$=!0,Ws(r,n,null)):Ws(r,n,t),this.G=2}}else this.G==3&&(e?Fi(this,e):this.l.length==0||da(this.i)||Fi(this))};function Fi(e,t){var n;t?n=t.m:n=e.V++;const s=St(e.F);P(s,"SID",e.J),P(s,"RID",n),P(s,"AID",e.U),rn(e,s),e.o&&e.s&&Mr(s,e.o,e.s),n=new tn(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Ia(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Nr(e.i,n),Ws(n,s,t)}function rn(e,t){e.j&&kr({},function(n,s){P(t,s,n)})}function Ia(e,t,n){n=Math.min(e.l.length,n);var s=e.j?Y(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=r[u].h;const l=r[u].g;if(c-=i,0>c)i=Math.max(0,r[u].h-100),a=!1;else try{uh(l,o,"req"+c+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Ca(e){e.g||e.u||(e.Y=1,Ir(e.Ga,e),e.A=0)}function Pr(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Je(Y(e.Ga,e),Da(e,e.A)),e.A++,!0)}y.Ga=function(){if(this.u=null,Sa(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Je(Y(this.bb,this),e)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,it(10),ss(this),Sa(this))};function Vr(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Sa(e){e.g=new tn(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=St(e.oa);P(t,"RID","rpc"),P(t,"SID",e.J),P(t,"CI",e.N?"0":"1"),P(t,"AID",e.U),rn(e,t),P(t,"TYPE","xmlhttp"),e.o&&e.s&&Mr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=ts(St(t)),n.s=null,n.U=!0,sa(n,e)}y.ab=function(){this.v!=null&&(this.v=null,ss(this),Pr(this),it(19))};function On(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Aa(e,t){var n=null;if(e.g==t){On(e),Vr(e),e.g=null;var s=2}else if(Ys(e.i,t))n=t.D,ga(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Yn(),X(s,new Zo(s,n)),rs(e)}else Ca(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&ph(e,t)||s==2&&Pr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:jt(e,5);break;case 4:jt(e,10);break;case 3:jt(e,6);break;default:jt(e,2)}}}function Da(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function jt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=Y(e.jb,e);n||(n=new Yt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Rn(n,"https"),ts(n)),ch(n.toString(),s)}else it(2);e.G=0,e.j&&e.j.va(t),_a(e),Ta(e)}y.jb=function(e){e?(this.h.info("Successfully pinged google.com"),it(2)):(this.h.info("Failed to ping google.com"),it(1))};function _a(e){e.G=0,e.I=-1,e.j&&((ma(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,mr(e.l),e.l.length=0),e.j.ua())}function ka(e,t,n){let s=Xl(n);if(s.i!="")t&&Ln(s,t+"."+s.i),Mn(s,s.m);else{const r=T.location;s=Jl(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&pr(e.aa,function(r,i){P(s,i,r)}),t=e.D,n=e.sa,t&&n&&P(s,t,n),P(s,"VER",e.ma),rn(e,s),s}function xa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new B(new nn({ib:!0})):new B(e.qa),t.L=e.H,t}function Na(){}y=Na.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function Pn(){if(ce&&!(10<=Number(kl)))throw Error("Environmental error: no available transport.")}Pn.prototype.g=function(e,t){return new dt(e,t)};function dt(e,t){K.call(this),this.g=new ba(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!kn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!kn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new we(this)}Z(dt,K);dt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ir(Y(e.hb,e,t))),it(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ka(e,null,e.W),rs(e)};dt.prototype.close=function(){Or(this.g)};dt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,xs(this.g,t)}else this.v?(t={},t.__data__=Tr(e),xs(this.g,t)):xs(this.g,e)};dt.prototype.M=function(){this.g.j=null,delete this.j,Or(this.g),delete this.g,dt.Z.M.call(this)};function Ra(e){Dr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Z(Ra,Dr);function La(){_r.call(this),this.status=1}Z(La,_r);function we(e){this.g=e}Z(we,Na);we.prototype.xa=function(){X(this.g,"a")};we.prototype.wa=function(e){X(this.g,new Ra(e))};we.prototype.va=function(e){X(this.g,new La)};we.prototype.ua=function(){X(this.g,"b")};Pn.prototype.createWebChannel=Pn.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;Xn.NO_ERROR=0;Xn.TIMEOUT=8;Xn.HTTP_ERROR=6;ta.COMPLETE="complete";ea.EventType=Ze;Ze.OPEN="a";Ze.CLOSE="b";Ze.ERROR="c";Ze.MESSAGE="d";K.prototype.listen=K.prototype.N;B.prototype.listenOnce=B.prototype.O;B.prototype.getLastError=B.prototype.La;B.prototype.getLastErrorCode=B.prototype.Da;B.prototype.getStatus=B.prototype.ba;B.prototype.getResponseJson=B.prototype.Qa;B.prototype.getResponseText=B.prototype.ga;B.prototype.send=B.prototype.ea;var yh=function(){return new Pn},vh=function(){return Yn()},Ns=Xn,wh=ta,Eh=Zt,Ui={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},bh=nn,pn=ea,Th=B;const Bi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new _o("@firebase/firestore");function $i(){return Xt.logLevel}function v(e,...t){if(Xt.logLevel<=x.DEBUG){const n=t.map(Fr);Xt.debug(`Firestore (${Ee}): ${e}`,...n)}}function At(e,...t){if(Xt.logLevel<=x.ERROR){const n=t.map(Fr);Xt.error(`Firestore (${Ee}): ${e}`,...n)}}function ji(e,...t){if(Xt.logLevel<=x.WARN){const n=t.map(Fr);Xt.warn(`Firestore (${Ee}): ${e}`,...n)}}function Fr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+e;throw At(t),new Error(t)}function R(e,t){e||I()}function C(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends pe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ch{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class Sh{constructor(t){this.t=t,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new Ih(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new ot(t)}}class Ah{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(R(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Dh{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Ah(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _h{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kh{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.A=n.token,new _h(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=xh(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function le(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $.fromMillis(Date.now())}static fromDate(t){return $.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new $(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new $(0,0))}static max(){return new S(new $(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return $e.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof $e?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class V extends $e{construct(t,n,s){return new V(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new V(n)}static emptyPath(){return new V([])}}const Nh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends $e{construct(t,n,s){return new tt(t,n,s)}static isValidIdentifier(t){return Nh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(V.fromString(t))}static fromName(t){return new E(V.fromString(t).popFirst(5))}static empty(){return new E(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&V.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return V.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new V(t.slice()))}}function Rh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=S.fromTimestamp(s===1e9?new $(n+1,0):new $(n,s));return new Rt(r,E.empty(),t)}function Lh(e){return new Rt(e.readTime,e.key,-1)}class Rt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Rt(S.min(),E.empty(),-1)}static max(){return new Rt(S.max(),E.empty(),-1)}}function Mh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ph{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Oh)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},u=>s(u))}),o=!0,i===r&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new g((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(l=>{o[c]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new g((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function an(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function te(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Oa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur.at=-1;class q{constructor(t,n){this.comparator=t,this.root=n||W.EMPTY}insert(t,n){return new q(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,W.BLACK,null,null))}remove(t){return new q(this.comparator,this.root.remove(t,this.comparator).copy(null,null,W.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yn(this.root,t,this.comparator,!0)}}class yn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class W{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:W.RED,this.left=r!=null?r:W.EMPTY,this.right=i!=null?i:W.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new W(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return W.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return W.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}W.EMPTY=null,W.RED=!0,W.BLACK=!1;W.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,r){return this}insert(e,t,n){return new W(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.comparator=t,this.data=new q(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hi(this.data.getIterator())}getIteratorFrom(t){return new Hi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof j)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new j(this.comparator);return n.data=t,n}}class Hi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new mt([])}unionWith(t){let n=new j(tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new mt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return le(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new J(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const Vh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(e){if(R(!!e),typeof e=="string"){let t=0;const n=Vh.exec(e);if(R(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function he(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Va(e){const t=e.mapValue.fields.__previous_value__;return Pa(t)?Va(t):t}function je(e){const t=Lt(e.mapValue.fields.__local_write_time__.timestampValue);return new $(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,n,s,r,i,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class qe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qe&&t.projectId===this.projectId&&t.database===this.database}}function is(e){return e==null}function Vn(e){return e===0&&1/e==-1/0}function Uh(e){return typeof e=="number"&&Number.isInteger(e)&&!Vn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pa(e)?4:Bh(e)?9007199254740991:10:I()}function wt(e,t){if(e===t)return!0;const n=Jt(e);if(n!==Jt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return je(e).isEqual(je(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Lt(s.timestampValue),o=Lt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return he(s.bytesValue).isEqual(he(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return U(s.geoPointValue.latitude)===U(r.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return U(s.integerValue)===U(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=U(s.doubleValue),o=U(r.doubleValue);return i===o?Vn(i)===Vn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return le(e.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(qi(i)!==qi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!wt(i[a],o[a])))return!1;return!0}(e,t);default:return I()}}function He(e,t){return(e.values||[]).find(n=>wt(n,t))!==void 0}function de(e,t){if(e===t)return 0;const n=Jt(e),s=Jt(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=U(r.integerValue||r.doubleValue),a=U(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ki(e.timestampValue,t.timestampValue);case 4:return Ki(je(e),je(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(r,i){const o=he(r),a=he(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=N(o[u],a[u]);if(c!==0)return c}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=N(U(r.latitude),U(i.latitude));return o!==0?o:N(U(r.longitude),U(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=de(o[u],a[u]);if(c)return c}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===vn.mapValue&&i===vn.mapValue)return 0;if(r===vn.mapValue)return 1;if(i===vn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=N(a[l],c[l]);if(h!==0)return h;const d=de(o[a[l]],u[c[l]]);if(d!==0)return d}return N(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function Ki(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=Lt(e),s=Lt(t),r=N(n.seconds,s.seconds);return r!==0?r:N(n.nanos,s.nanos)}function oe(e){return Xs(e)}function Xs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Lt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?he(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Xs(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Xs(s.fields[a])}`;return i+"}"}(e.mapValue):I();var t,n}function Js(e){return!!e&&"integerValue"in e}function Br(e){return!!e&&"arrayValue"in e}function Gi(e){return!!e&&"nullValue"in e}function zi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function En(e){return!!e&&"mapValue"in e}function Ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return te(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ne(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Bh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.value=t}static empty(){return new ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!En(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ne(n)}setAll(t){let n=tt.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ne(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());En(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];En(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){te(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new ut(Ne(this.value))}}function Fa(e){const t=[];return te(e.fields,(n,s)=>{const r=new tt([n]);if(En(s)){const i=Fa(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new mt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Q(t,0,S.min(),S.min(),ut.empty(),0)}static newFoundDocument(t,n,s){return new Q(t,1,n,S.min(),s,0)}static newNoDocument(t,n){return new Q(t,2,n,S.min(),ut.empty(),0)}static newUnknownDocument(t,n){return new Q(t,3,n,S.min(),ut.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Wi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new $h(e,t,n,s,r,i,o)}function $r(e){const t=C(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+oe(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),is(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>oe(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>oe(s)).join(",")),t.ht=n}return t.ht}function jh(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${oe(s.value)}`;var s}).join(", ")}]`),is(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>oe(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>oe(n)).join(",")),`Target(${t})`}function jr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Yh(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!wt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Yi(e.startAt,t.startAt)&&Yi(e.endAt,t.endAt)}function Zs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class ct extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,s):new qh(t,n,s):n==="array-contains"?new Gh(t,s):n==="in"?new zh(t,s):n==="not-in"?new Wh(t,s):n==="array-contains-any"?new Qh(t,s):new ct(t,n,s)}static lt(t,n,s){return n==="in"?new Hh(t,s):new Kh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(de(n,this.value)):n!==null&&Jt(this.value)===Jt(n)&&this.ft(de(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class qh extends ct{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.ft(n)}}class Hh extends ct{constructor(t,n){super(t,"in",n),this.keys=Ua("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Kh extends ct{constructor(t,n){super(t,"not-in",n),this.keys=Ua("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ua(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class Gh extends ct{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Br(n)&&He(n.arrayValue,this.value)}}class zh extends ct{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&He(this.value.arrayValue,n)}}class Wh extends ct{constructor(t,n){super(t,"not-in",n)}matches(t){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!He(this.value.arrayValue,n)}}class Qh extends ct{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Br(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>He(this.value.arrayValue,s))}}class Fn{constructor(t,n){this.position=t,this.inclusive=n}}class ae{constructor(t,n="asc"){this.field=t,this.dir=n}}function Yh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Qi(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=de(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Yi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!wt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function Xh(e,t,n,s,r,i,o,a){return new un(e,t,n,s,r,i,o,a)}function os(e){return new un(e)}function Xi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ba(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function $a(e){for(const t of e.filters)if(t.dt())return t.field;return null}function Jh(e){return e.collectionGroup!==null}function Ke(e){const t=C(e);if(t._t===null){t._t=[];const n=$a(t),s=Ba(t);if(n!==null&&s===null)n.isKeyField()||t._t.push(new ae(n)),t._t.push(new ae(tt.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new ae(tt.keyField(),i))}}}return t._t}function Dt(e){const t=C(e);if(!t.wt)if(t.limitType==="F")t.wt=Wi(t.path,t.collectionGroup,Ke(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Ke(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new ae(i.field,o))}const s=t.endAt?new Fn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fn(t.startAt.position,t.startAt.inclusive):null;t.wt=Wi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.wt}function tr(e,t,n){return new un(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function as(e,t){return jr(Dt(e),Dt(t))&&e.limitType===t.limitType}function ja(e){return`${$r(Dt(e))}|lt:${e.limitType}`}function er(e){return`Query(target=${jh(Dt(e))}; limitType=${e.limitType})`}function qr(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):E.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Qi(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ke(n),s)||n.endAt&&!function(r,i,o){const a=Qi(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ke(n),s))}(e,t)}function Zh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qa(e){return(t,n)=>{let s=!1;for(const r of Ke(e)){const i=td(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function td(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?de(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vn(t)?"-0":t}}function Ka(e){return{integerValue:""+e}}function ed(e,t){return Uh(t)?Ka(t):Ha(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this._=void 0}}function nd(e,t,n){return e instanceof Un?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ge?za(e,t):e instanceof ze?Wa(e,t):function(s,r){const i=Ga(s,r),o=Ji(i)+Ji(s.yt);return Js(i)&&Js(s.yt)?Ka(o):Ha(s.It,o)}(e,t)}function sd(e,t,n){return e instanceof Ge?za(e,t):e instanceof ze?Wa(e,t):n}function Ga(e,t){return e instanceof Bn?Js(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Un extends us{}class Ge extends us{constructor(t){super(),this.elements=t}}function za(e,t){const n=Qa(t);for(const s of e.elements)n.some(r=>wt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ze extends us{constructor(t){super(),this.elements=t}}function Wa(e,t){let n=Qa(t);for(const s of e.elements)n=n.filter(r=>!wt(r,s));return{arrayValue:{values:n}}}class Bn extends us{constructor(t,n){super(),this.It=t,this.yt=n}}function Ji(e){return U(e.integerValue||e.doubleValue)}function Qa(e){return Br(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function rd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ge&&s instanceof Ge||n instanceof ze&&s instanceof ze?le(n.elements,s.elements,wt):n instanceof Bn&&s instanceof Bn?wt(n.yt,s.yt):n instanceof Un&&s instanceof Un}(e.transform,t.transform)}class id{constructor(t,n){this.version=t,this.transformResults=n}}class yt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new yt}static exists(t){return new yt(void 0,t)}static updateTime(t){return new yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class cs{}function Ya(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Hr(e.key,yt.none()):new cn(e.key,e.data,yt.none());{const n=e.data,s=ut.empty();let r=new j(tt.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ft(e.key,s,new mt(r.toArray()),yt.none())}}function od(e,t,n){e instanceof cn?function(s,r,i){const o=s.value.clone(),a=to(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ft?function(s,r,i){if(!bn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=to(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Xa(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Re(e,t,n,s){return e instanceof cn?function(r,i,o,a){if(!bn(r.precondition,i))return o;const u=r.value.clone(),c=eo(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ft?function(r,i,o,a){if(!bn(r.precondition,i))return o;const u=eo(r.fieldTransforms,a,i),c=i.data;return c.setAll(Xa(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return bn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function ad(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Ga(s.transform,r||null);i!=null&&(n===null&&(n=ut.empty()),n.set(s.field,i))}return n||null}function Zi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&le(n,s,(r,i)=>rd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class cn extends cs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ft extends cs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function to(e,t,n){const s=new Map;R(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,sd(o,a,n[r]))}return s}function eo(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,nd(i,o,t))}return s}class Hr extends cs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ud extends cs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,k;function ld(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Ja(e){if(e===void 0)return At("GRPC error has no .code"),f.UNKNOWN;switch(e){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(k=F||(F={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){te(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Oa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new q(E.comparator);function _t(){return hd}const Za=new q(E.comparator);function De(...e){let t=Za;for(const n of e)t=t.insert(n.key,n);return t}function tu(e){let t=Za;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function qt(){return Le()}function eu(){return Le()}function Le(){return new be(e=>e.toString(),(e,t)=>e.isEqual(t))}const dd=new q(E.comparator),fd=new j(E.comparator);function A(...e){let t=fd;for(const n of e)t=t.add(n);return t}const gd=new j(N);function nu(){return gd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,ln.createSynthesizedTargetChangeForCurrentChange(t,n)),new ls(S.min(),s,nu(),_t(),A())}}class ln{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new ln(J.EMPTY_BYTE_STRING,n,A(),A(),A())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n,s,r){this.Tt=t,this.removedTargetIds=n,this.key=s,this.Et=r}}class su{constructor(t,n){this.targetId=t,this.At=n}}class ru{constructor(t,n,s=J.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class no{constructor(){this.Rt=0,this.bt=ro(),this.Pt=J.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=A(),n=A(),s=A();return this.bt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new ln(this.Pt,this.vt,t,n,s)}Nt(){this.Vt=!1,this.bt=ro()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class md{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=_t(),this.qt=so(),this.Kt=new j(N)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const s=this.zt(n);switch(t.state){case 0:this.Ht(n)&&s.Ct(t.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(t.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(t){const n=t.targetId,s=t.At.count,r=this.Xt(n);if(r){const i=r.target;if(Zs(i))if(s===0){const o=new E(i.path);this.jt(n,o,Q.newNoDocument(o,S.min()))}else R(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Zs(a.target)){const u=new E(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,Q.newNoDocument(u,t))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=A();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Xt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(t));const r=new ls(t,n,this.Kt,this.Ut,s);return this.Ut=_t(),this.qt=so(),this.Kt=new j(N),r}Qt(t,n){if(!this.Ht(t))return;const s=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,s){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let n=this.Lt.get(t);return n||(n=new no,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new j(N),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new no),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function so(){return new q(E.comparator)}function ro(){return new q(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vd{constructor(t,n){this.databaseId=t,this.gt=n}}function $n(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function iu(e,t){return e.gt?t.toBase64():t.toUint8Array()}function wd(e,t){return $n(e,t.toTimestamp())}function It(e){return R(!!e),S.fromTimestamp(function(t){const n=Lt(t);return new $(n.seconds,n.nanos)}(e))}function Kr(e,t){return function(n){return new V(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ou(e){const t=V.fromString(e);return R(cu(t)),t}function nr(e,t){return Kr(e.databaseId,t.path)}function Rs(e,t){const n=ou(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(au(n))}function sr(e,t){return Kr(e.databaseId,t)}function Ed(e){const t=ou(e);return t.length===4?V.emptyPath():au(t)}function rr(e){return new V(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function au(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function io(e,t,n){return{name:nr(e,t),fields:n.value.mapValue.fields}}function bd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(u,c){return u.gt?(R(c===void 0||typeof c=="string"),J.fromBase64String(c||"")):(R(c===void 0||c instanceof Uint8Array),J.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?f.UNKNOWN:Ja(u.code);return new w(c,u.message||"")}(o);n=new ru(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Rs(e,s.document.name),i=It(s.document.updateTime),o=new ut({mapValue:{fields:s.document.fields}}),a=Q.newFoundDocument(r,i,o),u=s.targetIds||[],c=s.removedTargetIds||[];n=new Tn(u,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Rs(e,s.document),i=s.readTime?It(s.readTime):S.min(),o=Q.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Tn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Rs(e,s.document),i=s.removedTargetIds||[];n=new Tn([],i,r,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new cd(r),o=s.targetId;n=new su(o,i)}}return n}function Td(e,t){let n;if(t instanceof cn)n={update:io(e,t.key,t.value)};else if(t instanceof Hr)n={delete:nr(e,t.key)};else if(t instanceof Ft)n={update:io(e,t.key,t.data),updateMask:Rd(t.fieldMask)};else{if(!(t instanceof ud))return I();n={verify:nr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Un)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ge)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ze)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Bn)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:wd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:I()}(e,t.precondition)),n}function Id(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?It(s.updateTime):It(r);return i.isEqual(S.min())&&(i=It(r)),new id(i,s.transformResults||[])}(n,t))):[]}function Cd(e,t){return{documents:[sr(e,t.path)]}}function Sd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=sr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=sr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length===0)return;const c=u.map(l=>function(h){if(h.op==="=="){if(zi(h.value))return{unaryFilter:{field:ne(h.field),op:"IS_NAN"}};if(Gi(h.value))return{unaryFilter:{field:ne(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(zi(h.value))return{unaryFilter:{field:ne(h.field),op:"IS_NOT_NAN"}};if(Gi(h.value))return{unaryFilter:{field:ne(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ne(h.field),op:kd(h.op),value:h.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:ne(l.field),direction:_d(l.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(u,c){return u.gt||is(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Ad(e){let t=Ed(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){R(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=uu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new ae(re(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,is(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(l){const h=!!l.before,d=l.values||[];return new Fn(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,d=l.values||[];return new Fn(d,h)}(n.endAt)),Xh(t,r,o,i,a,"F",u,c)}function Dd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function uu(e){return e?e.unaryFilter!==void 0?[Nd(e)]:e.fieldFilter!==void 0?[xd(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>uu(t)).reduce((t,n)=>t.concat(n)):I():[]}function _d(e){return pd[e]}function kd(e){return yd[e]}function ne(e){return{fieldPath:e.canonicalString()}}function re(e){return tt.fromServerFormat(e.fieldPath)}function xd(e){return ct.create(re(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Nd(e){switch(e.unaryFilter.op){case"IS_NAN":const t=re(e.unaryFilter.field);return ct.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=re(e.unaryFilter.field);return ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=re(e.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=re(e.unaryFilter.field);return ct.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Rd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function cu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&od(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Re(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Re(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=eu();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const u=Ya(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&le(this.mutations,t.mutations,(n,s)=>Zi(n,s))&&le(this.baseMutations,t.baseMutations,(n,s)=>Zi(n,s))}}class Gr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){R(t.mutations.length===s.length);let r=dd;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Gr(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,n,s,r,i=S.min(),o=S.min(),a=J.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Gt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.re=t}}function Pd(e){const t=Ad({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?tr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.Ye=new Fd}addToCollectionParentIndex(t,n){return this.Ye.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Rt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Rt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Fd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new j(V.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new j(V.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new fe(0)}static vn(){return new fe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.changes=new be(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&Re(s.mutation,r,mt.empty(),$.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const r=qt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=De();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=_t();const o=Le(),a=Le();return n.forEach((u,c)=>{const l=s.get(c.key);r.has(c.key)&&(l===void 0||l.mutation instanceof Ft)?i=i.insert(c.key,c):l!==void 0&&(o.set(c.key,l.mutation.getFieldMask()),Re(l.mutation,c,l.mutation.getFieldMask(),$.now()))}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new Bd(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Le();let r=new q((o,a)=>o-a),i=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=s.get(u)||mt.empty();l=a.applyToLocalView(c,l),s.set(u,l);const h=(r.get(a.batchId)||A()).add(u);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=eu();l.forEach(d=>{if(!i.has(d)){const m=Ya(n.get(d),s.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Jh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):g.resolve(qt());let a=-1,u=i;return o.next(c=>g.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.getBaseDocument(t,l,h).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,A())).next(l=>({batchId:a,changes:tu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(s=>{let r=De();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=De();return this.indexManager.getCollectionParents(t,r).next(o=>g.forEach(o,a=>{const u=function(c,l){return new un(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,Q.newInvalidDocument(c)))});let o=De();return r.forEach((a,u)=>{const c=i.get(a);c!==void 0&&Re(c.mutation,u,mt.empty(),$.now()),qr(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):g.resolve(Q.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:It(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Pd(s.bundledQuery),readTime:It(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.overlays=new q(E.comparator),this.es=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=qt();return g.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ue(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const r=qt(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return g.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new q((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let l=i.get(c.largestBatchId);l===null&&(l=qt(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=qt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=r)););return g.resolve(a)}ue(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Md(n,s));let i=this.es.get(n);i===void 0&&(i=A(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.ns=new j(H.ss),this.rs=new j(H.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new H(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new H(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new E(new V([])),s=new H(n,t),r=new H(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new E(new V([])),s=new H(n,t),r=new H(n,t+1);let i=A();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new H(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class H{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return E.comparator(t.key,n.key)||N(t._s,n._s)}static os(t,n){return N(t._s,n._s)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new j(H.ss)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ld(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new H(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new H(n,0),r=new H(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new j(N);return n.forEach(r=>{const i=new H(r,0),o=new H(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),g.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;E.isDocumentKey(i)||(i=i.child(""));const o=new H(new E(i),0);let a=new j(N);return this.gs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u._s)),!0)},o),g.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){R(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return g.forEach(n.mutations,r=>{const i=new H(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new H(n,0),r=this.gs.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t){this.Es=t,this.docs=new q(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():Q.newInvalidDocument(n))}getEntries(t,n){let s=_t();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Q.newInvalidDocument(r))}),g.resolve(s)}getAllFromCollection(t,n,s){let r=_t();const i=new E(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Mh(Lh(u),s)<=0||(r=r.insert(u.key,u.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,n,s,r){I()}As(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Gd(this)}getSize(t){return g.resolve(this.size)}}class Gd extends Ud{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t){this.persistence=t,this.Rs=new be(n=>$r(n),jr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.bs=0,this.Ps=new zr,this.targetCount=0,this.vs=fe.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),g.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new fe(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Dn(n),g.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Ur(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new zd(this),this.indexManager=new Vd,this.remoteDocumentCache=function(s){return new Kd(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Od(n),this.Ns=new jd(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new qd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new Hd(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new Qd(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(t,n){return g.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Qd extends Ph{constructor(t){super(),this.currentSequenceNumber=t}}class Wr{constructor(t){this.persistence=t,this.Fs=new zr,this.$s=null}static Bs(t){return new Wr(t)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),g.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Ms(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,s=>{const r=E.fromPath(s);return this.Us(t,r).next(i=>{i||n.removeEntry(r,S.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return g.or([()=>g.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=A(),r=A();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Mi(t,n,r,s)).next(i=>i||this.Oi(t,n))}ki(t,n){if(Xi(n))return g.resolve(null);let s=Dt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=tr(n,null,"F"),s=Dt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=A(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.Fi(n,a);return this.$i(n,c,o,u.readTime)?this.ki(t,tr(n,null,"F")):this.Bi(t,c,n,u)}))})))}Mi(t,n,s,r){return Xi(n)||r.isEqual(S.min())?this.Oi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(t,n):($i()<=x.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),er(n)),this.Bi(t,o,n,Rh(r,-1)))})}Fi(t,n){let s=new j(qa(t));return n.forEach((r,i)=>{qr(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(t,n){return $i()<=x.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",er(n)),this.Ni.getDocumentsMatchingQuery(t,n,Rt.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.It=r,this.Ui=new q(N),this.qi=new be(i=>$r(i),jr),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $d(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function Jd(e,t,n,s){return new Xd(e,t,n,s)}async function lu(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=A();for(const c of r){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(s,u).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Zd(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const l=u.batch,h=l.keys();let d=g.resolve();return h.forEach(m=>{d=d.next(()=>c.getEntry(a,m)).next(p=>{const D=u.docVersions.get(m);R(D!==null),p.version.compareTo(D)<0&&(l.applyToRemoteDocument(p,u),p.isValidDocument()&&(p.setReadTime(u.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=A();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function hu(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function tf(e,t){const n=C(e),s=t.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];t.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?m=m.withResumeToken(J.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,s)),r=r.insert(h,m),function(p,D,_){return p.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,m,l)&&a.push(n.Cs.updateTargetData(i,m))});let u=_t(),c=A();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(ef(i,o,t.documentUpdates).next(l=>{u=l.Wi,c=l.zi})),!s.isEqual(S.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ui=r,i))}function ef(e,t,n){let s=A(),r=A();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=_t();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(S.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Wi:o,zi:r}})}function nf(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function sf(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,g.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Gt(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function ir(e,t,n){const s=C(e),r=s.Ui.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!an(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ui=s.Ui.remove(t),s.qi.delete(r.target)}function oo(e,t,n){const s=C(e);let r=S.min(),i=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=C(a),h=l.qi.get(c);return h!==void 0?g.resolve(l.Ui.get(h)):l.Cs.getTargetData(u,c)}(s,o,Dt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:S.min(),n?i:A())).next(a=>(rf(s,Zh(t),a),{documents:a,Hi:i})))}function rf(e,t,n){let s=S.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class ao{constructor(){this.activeTargetIds=nu()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class of{constructor(){this.Lr=new ao,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,s){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new ao,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,n,s,r,i){const o=this.ao(t,n);v("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(t,o,a,s).then(u=>(v("RestConnection","Received: ",u),u),u=>{throw ji("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}fo(t,n,s,r,i,o){return this.co(t,n,s,r,i)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ee,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ao(t,n){const s=uf[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,r){return new Promise((i,o)=>{const a=new Th;a.listenOnce(wh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ns.NO_ERROR:const c=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Ns.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ns.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const p=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(p)>=0?p:f.UNKNOWN}(h.status);o(new w(d,h.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(r);a.send(n,"POST",u,s,15)})}_o(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=yh(),o=vh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new bh({})),this.ho(a.initMessageHeaders,n,s),Xu()||Zu()||tc()||ec()||nc()||Ju()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");v("Connection","Creating WebChannel: "+u,a);const c=i.createWebChannel(u,a);let l=!1,h=!1;const d=new cf({Hr:p=>{h?v("Connection","Not sending because WebChannel is closed:",p):(l||(v("Connection","Opening WebChannel transport."),c.open(),l=!0),v("Connection","WebChannel sending:",p),c.send(p))},Jr:()=>c.close()}),m=(p,D,_)=>{p.listen(D,G=>{try{_(G)}catch(nt){setTimeout(()=>{throw nt},0)}})};return m(c,pn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),m(c,pn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.io())}),m(c,pn.EventType.ERROR,p=>{h||(h=!0,ji("Connection","WebChannel transport errored:",p),d.io(new w(f.UNAVAILABLE,"The operation could not be completed")))}),m(c,pn.EventType.MESSAGE,p=>{var D;if(!h){const _=p.data[0];R(!!_);const G=_,nt=G.error||((D=G[0])===null||D===void 0?void 0:D.error);if(nt){v("Connection","WebChannel received error:",nt);const Ut=nt.status;let L=function(O){const ft=F[O];if(ft!==void 0)return Ja(ft)}(Ut),M=nt.message;L===void 0&&(L=f.INTERNAL,M="Unknown error status: "+Ut+" with message "+nt.message),h=!0,d.io(new w(L,M)),c.close()}else v("Connection","WebChannel received:",_),d.ro(_)}}),m(o,Eh.STAT_EVENT,p=>{p.stat===Ui.PROXY?v("Connection","Detected buffering proxy"):p.stat===Ui.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ls(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e){return new vd(e,!0)}class du{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,n,s,r,i,o,a,u){this.Hs=t,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new du(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hf extends fu{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(t,n){return this.Vo._o("Listen",t,n)}onMessage(t){this.xo.reset();const n=bd(this.It,t),s=function(r){if(!("targetChange"in r))return S.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?S.min():i.readTime?It(i.readTime):S.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=rr(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Zs(a)?{documents:Cd(r,a)}:{query:Sd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=iu(r,i.resumeToken):i.snapshotVersion.compareTo(S.min())>0&&(o.readTime=$n(r,i.snapshotVersion.toTimestamp())),o}(this.It,t);const s=Dd(this.It,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=rr(this.It),n.removeTarget=t,this.Bo(n)}}class df extends fu{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,n){return this.Vo._o("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Id(t.writeResults,t.commitTime),s=It(t.commitTime);return this.listener.Zo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=rr(this.It),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Td(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(f.UNKNOWN,r.toString())})}fo(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class gf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(At(n),this.ou=!1):v("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{ee(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=C(a);u._u.add(4),await hn(u),u.gu.set("Unknown"),u._u.delete(4),await ds(u)}(this))})}),this.gu=new gf(s,r)}}async function ds(e){if(ee(e))for(const t of e.wu)await t(!0)}async function hn(e){for(const t of e.wu)await t(!1)}function gu(e,t){const n=C(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Jr(n)?Xr(n):Te(n).ko()&&Yr(n,t))}function mu(e,t){const n=C(e),s=Te(n);n.du.delete(t),s.ko()&&pu(n,t),n.du.size===0&&(s.ko()?s.Fo():ee(n)&&n.gu.set("Unknown"))}function Yr(e,t){e.yu.Ot(t.targetId),Te(e).zo(t)}function pu(e,t){e.yu.Ot(t),Te(e).Ho(t)}function Xr(e){e.yu=new md({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),Te(e).start(),e.gu.uu()}function Jr(e){return ee(e)&&!Te(e).No()&&e.du.size>0}function ee(e){return C(e)._u.size===0}function yu(e){e.yu=void 0}async function pf(e){e.du.forEach((t,n)=>{Yr(e,t)})}async function yf(e,t){yu(e),Jr(e)?(e.gu.hu(t),Xr(e)):e.gu.set("Unknown")}async function vf(e,t,n){if(e.gu.set("Online"),t instanceof ru&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await jn(e,s)}else if(t instanceof Tn?e.yu.Gt(t):t instanceof su?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(S.min()))try{const s=await hu(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.du.get(u);c&&r.du.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=r.du.get(a);if(!u)return;r.du.set(a,u.withResumeToken(J.EMPTY_BYTE_STRING,u.snapshotVersion)),pu(r,a);const c=new Gt(u.target,a,1,u.sequenceNumber);Yr(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await jn(e,s)}}async function jn(e,t,n){if(!an(t))throw t;e._u.add(1),await hn(e),e.gu.set("Offline"),n||(n=()=>hu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await ds(e)})}function vu(e,t){return t().catch(n=>jn(e,n,t))}async function fs(e){const t=C(e),n=Mt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;wf(t);)try{const r=await nf(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,Ef(t,r)}catch(r){await jn(t,r)}wu(t)&&Eu(t)}function wf(e){return ee(e)&&e.fu.length<10}function Ef(e,t){e.fu.push(t);const n=Mt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function wu(e){return ee(e)&&!Mt(e).No()&&e.fu.length>0}function Eu(e){Mt(e).start()}async function bf(e){Mt(e).eu()}async function Tf(e){const t=Mt(e);for(const n of e.fu)t.Xo(n.mutations)}async function If(e,t,n){const s=e.fu.shift(),r=Gr.from(s,t,n);await vu(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await fs(e)}async function Cf(e,t){t&&Mt(e).Yo&&await async function(n,s){if(r=s.code,ld(r)&&r!==f.ABORTED){const i=n.fu.shift();Mt(n).Oo(),await vu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fs(n)}var r}(e,t),wu(e)&&Eu(e)}async function co(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=ee(n);n._u.add(3),await hn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await ds(n)}async function Sf(e,t){const n=C(e);t?(n._u.delete(2),await ds(n)):t||(n._u.add(2),await hn(n),n.gu.set("Unknown"))}function Te(e){return e.pu||(e.pu=function(t,n,s){const r=C(t);return r.su(),new hf(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(e.datastore,e.asyncQueue,{Yr:pf.bind(null,e),Zr:yf.bind(null,e),Wo:vf.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),Jr(e)?Xr(e):e.gu.set("Unknown")):(await e.pu.stop(),yu(e))})),e.pu}function Mt(e){return e.Iu||(e.Iu=function(t,n,s){const r=C(t);return r.su(),new df(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(e.datastore,e.asyncQueue,{Yr:bf.bind(null,e),Zr:Cf.bind(null,e),tu:Tf.bind(null,e),Zo:If.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Oo(),await fs(e)):(await e.Iu.stop(),e.fu.length>0&&(v("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Zr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ti(e,t){if(At("AsyncQueue",`${t}: ${e}`),an(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=De(),this.sortedSet=new q(this.comparator)}static emptySet(t){return new ue(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ue)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ue;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.Tu=new q(E.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):I():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class ge{constructor(t,n,s,r,i,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ge(t,n,ue.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&as(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.Au=void 0,this.listeners=[]}}class Df{constructor(){this.queries=new be(t=>ja(t),as),this.onlineState="Unknown",this.Ru=new Set}}async function ei(e,t){const n=C(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Af),r)try{i.Au=await n.onListen(s)}catch(o){const a=ti(o,`Initialization of query '${er(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&si(n)}async function ni(e,t){const n=C(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function _f(e,t){const n=C(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&si(n)}function kf(e,t,n){const s=C(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function si(e){e.Ru.forEach(t=>{t.next()})}class ri{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new ge(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=ge.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this.key=t}}class Tu{constructor(t){this.key=t}}class xf{constructor(t,n){this.query=t,this.Lu=n,this.Uu=null,this.current=!1,this.qu=A(),this.mutatedKeys=A(),this.Ku=qa(t),this.Gu=new ue(this.Ku)}get Qu(){return this.Lu}ju(t,n){const s=n?n.Wu:new lo,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const d=r.get(l),m=qr(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),D=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let _=!1;d&&m?d.data.isEqual(m.data)?p!==D&&(s.track({type:3,doc:m}),_=!0):this.zu(d,m)||(s.track({type:2,doc:m}),_=!0,(u&&this.Ku(m,u)>0||c&&this.Ku(m,c)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),_=!0):d&&!m&&(s.track({type:1,doc:d}),_=!0,(u||c)&&(a=!0)),_&&(m?(o=o.add(m),i=D?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.Wu.Eu();i.sort((c,l)=>function(h,d){const m=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(h)-m(d)}(c.type,l.type)||this.Ku(c.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,i.length!==0||u?{snapshot:new ge(this.query,t.Gu,r,i,t.mutatedKeys,a===0,u,!1),Yu:o}:{Yu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new lo,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=A(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return t.forEach(s=>{this.qu.has(s)||n.push(new Tu(s))}),this.qu.forEach(s=>{t.has(s)||n.push(new bu(s))}),n}Zu(t){this.Lu=t.Hi,this.qu=A();const n=this.ju(t.documents);return this.applyChanges(n,!0)}tc(){return ge.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class Nf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Rf{constructor(t){this.key=t,this.ec=!1}}class Lf{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new be(a=>ja(a),as),this.ic=new Map,this.rc=new Set,this.oc=new q(E.comparator),this.uc=new Map,this.cc=new zr,this.ac={},this.hc=new Map,this.lc=fe.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Mf(e,t){const n=Hf(e);let s,r;const i=n.sc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await sf(n.localStore,Dt(t));n.isPrimaryClient&&gu(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Of(n,t,s,a==="current")}return r}async function Of(e,t,n,s){e.dc=(l,h,d)=>async function(m,p,D,_){let G=p.view.ju(D);G.$i&&(G=await oo(m.localStore,p.query,!1).then(({documents:L})=>p.view.ju(L,G)));const nt=_&&_.targetChanges.get(p.targetId),Ut=p.view.applyChanges(G,m.isPrimaryClient,nt);return fo(m,p.targetId,Ut.Yu),Ut.snapshot}(e,l,h,d);const r=await oo(e.localStore,t,!0),i=new xf(t,r.Hi),o=i.ju(r.documents),a=ln.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=i.applyChanges(o,e.isPrimaryClient,a);fo(e,n,u.Yu);const c=new Nf(t,n,i);return e.sc.set(t,c),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function Pf(e,t){const n=C(e),s=n.sc.get(t),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!as(i,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ir(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),mu(n.remoteStore,s.targetId),or(n,s.targetId)}).catch(on)):(or(n,s.targetId),await ir(n.localStore,s.targetId,!0))}async function Vf(e,t,n){const s=Kf(e);try{const r=await function(i,o){const a=C(i),u=$.now(),c=o.reduce((d,m)=>d.add(m.key),A());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=_t(),p=A();return a.Gi.getEntries(d,c).next(D=>{m=D,m.forEach((_,G)=>{G.isValidDocument()||(p=p.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(D=>{l=D;const _=[];for(const G of o){const nt=ad(G,l.get(G.key).overlayedDocument);nt!=null&&_.push(new Ft(G.key,nt,Fa(nt.value.mapValue),yt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,_,o)}).next(D=>{h=D;const _=D.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(d,D.batchId,_)})}).then(()=>({batchId:h.batchId,changes:tu(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.ac[i.currentUser.toKey()];u||(u=new q(N)),u=u.insert(o,a),i.ac[i.currentUser.toKey()]=u}(s,r.batchId,n),await dn(s,r.changes),await fs(s.remoteStore)}catch(r){const i=ti(r,"Failed to persist write");n.reject(i)}}async function Iu(e,t){const n=C(e);try{const s=await tf(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(R(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?R(o.ec):r.removedDocuments.size>0&&(R(o.ec),o.ec=!1))}),await dn(n,s,t)}catch(s){await on(s)}}function ho(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=C(i);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.bu(o)&&(u=!0)}),u&&si(a)}(s.eventManager,t),r.length&&s.nc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Ff(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.uc.get(t),i=r&&r.key;if(i){let o=new q(E.comparator);o=o.insert(i,Q.newNoDocument(i,S.min()));const a=A().add(i),u=new ls(S.min(),new Map,new j(N),o,a);await Iu(s,u),s.oc=s.oc.remove(i),s.uc.delete(t),ii(s)}else await ir(s.localStore,t,!1).then(()=>or(s,t,n)).catch(on)}async function Uf(e,t){const n=C(e),s=t.batch.batchId;try{const r=await Zd(n.localStore,t);Su(n,s,null),Cu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await dn(n,r)}catch(r){await on(r)}}async function Bf(e,t,n){const s=C(e);try{const r=await function(i,o){const a=C(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(l=>(R(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,t);Su(s,t,n),Cu(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await dn(s,r)}catch(r){await on(r)}}function Cu(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function Su(e,t,n){const s=C(e);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.ac[s.currentUser.toKey()]=r}}function or(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc._c(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach(s=>{e.cc.containsKey(s)||Au(e,s)})}function Au(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(mu(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),ii(e))}function fo(e,t,n){for(const s of n)s instanceof bu?(e.cc.addReference(s.key,t),$f(e,s)):s instanceof Tu?(v("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||Au(e,s.key)):I()}function $f(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.rc.add(s),ii(e))}function ii(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new E(V.fromString(t)),s=e.lc.next();e.uc.set(s,new Rf(n)),e.oc=e.oc.insert(n,s),gu(e.remoteStore,new Gt(Dt(os(n.path)),s,2,Ur.at))}}async function dn(e,t,n){const s=C(e),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,u)=>{o.push(s.dc(u,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c.fromCache?"not-current":"current"),r.push(c);const l=Qr.Ci(u.targetId,c);i.push(l)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,u){const c=C(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(u,h=>g.forEach(h.Si,d=>c.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>g.forEach(h.Di,d=>c.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!an(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const d=c.Ui.get(h),m=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(m);c.Ui=c.Ui.insert(h,p)}}}(s.localStore,i))}async function jf(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await lu(n.localStore,t);n.currentUser=t,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await dn(n,s.ji)}}function qf(e,t){const n=C(e),s=n.uc.get(t);if(s&&s.ec)return A().add(s.key);{let r=A();const i=n.ic.get(t);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function Hf(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Iu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=qf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ff.bind(null,t),t.nc.Wo=_f.bind(null,t.eventManager),t.nc._c=kf.bind(null,t.eventManager),t}function Kf(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bf.bind(null,t),t}class Gf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=hs(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,n){return null}Tc(t,n){return null}yc(t){return Jd(this.persistence,new Yd,t.initialUser,this.It)}gc(t){return new Wd(Wr.Bs,this.It)}mc(t){return new of}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ho(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jf.bind(null,this.syncEngine),await Sf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Df}createDatastore(t){const n=hs(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new lf(r));var r;return function(i,o,a,u){return new ff(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>ho(this.syncEngine,a,0),o=uo.C()?new uo:new af,new mf(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,u,c){const l=new Lf(s,r,i,o,a,u);return c&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);v("RemoteStore","RemoteStore shutting down."),n._u.add(5),await hn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):At("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ot.UNAUTHENTICATED,this.clientId=Ma.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ti(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Qf(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await lu(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Yf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Xf(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>co(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>co(t.remoteStore,i)),e.onlineComponents=t}async function Xf(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Qf(e,new Gf)),e.offlineComponents}async function Du(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Yf(e,new zf)),e.onlineComponents}function Jf(e){return Du(e).then(t=>t.syncEngine)}async function qn(e){const t=await Du(e),n=t.eventManager;return n.onListen=Mf.bind(null,t.syncEngine),n.onUnlisten=Pf.bind(null,t.syncEngine),n}function Zf(e,t,n={}){const s=new Tt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new oi({next:h=>{i.enqueueAndForget(()=>ni(r,l));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new w(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new ri(os(o.path),c,{includeMetadataChanges:!0,Nu:!0});return ei(r,l)}(await qn(e),e.asyncQueue,t,n,s)),s.promise}function tg(e,t,n={}){const s=new Tt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new oi({next:h=>{i.enqueueAndForget(()=>ni(r,l)),h.fromCache&&a.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new ri(o,c,{includeMetadataChanges:!0,Nu:!0});return ei(r,l)}(await qn(e),e.asyncQueue,t,n,s)),s.promise}const go=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function eg(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function mo(e){if(!E.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function po(e){if(E.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ai(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function vt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ai(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,eg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ch;switch(n.type){case"gapi":const s=n.client;return new Dh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=go.get(t);n&&(v("ComponentProvider","Removing Datastore"),go.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}}class Ie{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ie(this.firestore,t,this._query)}}class Nt extends Ie{constructor(t,n,s){super(t,n,os(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new E(t))}withConverter(t){return new Nt(this.firestore,t,this._path)}}function In(e,t,...n){if(e=Ct(e),_u("collection","path",t),e instanceof ui){const s=V.fromString(t,...n);return po(s),new Nt(e,null,s)}{if(!(e instanceof lt||e instanceof Nt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(V.fromString(t,...n));return po(s),new Nt(e.firestore,null,s)}}function We(e,t,...n){if(e=Ct(e),arguments.length===1&&(t=Ma.R()),_u("doc","path",t),e instanceof ui){const s=V.fromString(t,...n);return mo(s),new lt(e,null,new E(s))}{if(!(e instanceof lt||e instanceof Nt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(V.fromString(t,...n));return mo(s),new lt(e.firestore,e instanceof Nt?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new du(this,"async_queue_retry"),this.jc=()=>{const n=Ls();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const t=Ls();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const n=Ls();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Tt;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Bc.push(t),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(t){if(!an(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(t){const n=this.$c.then(()=>(this.Kc=!0,t().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw At("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(t,n,s){this.Wc(),this.Qc.indexOf(t)>-1&&(n=0);const r=Zr.createAndSchedule(this,t,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&I()}verifyOperationInProgress(){}async Yc(){let t;do t=this.$c,await t;while(t!==this.$c)}Xc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}Zc(t){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Yc()})}ta(t){this.Qc.push(t)}Jc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function vo(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class Ot extends ui{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new ng,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ku(this),this._firestoreClient.terminate()}}function sg(e,t){const n=typeof e=="object"?e:al(),s=typeof e=="string"?e:t||"(default)";return nl(n,"firestore").getImmediate({identifier:s})}function gs(e){return e._firestoreClient||ku(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ku(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Fh(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Wf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new me(J.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new me(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=/^__.*__$/;class ig{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ft(t,this.data,this.fieldMask,n,this.fieldTransforms):new cn(t,this.data,n,this.fieldTransforms)}}class xu{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Ft(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Nu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class hi{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new hi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.sa({path:s,ra:!1});return r.oa(t),r}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return Hn(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(t.length===0)throw this.aa("Document fields must not be empty");if(Nu(this.na)&&rg.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class og{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=s||hs(t)}fa(t,n,s,r=!1){return new hi({na:t,methodName:n,la:s,path:tt.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Ru(e){const t=e._freezeSettings(),n=hs(e._databaseId);return new og(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ag(e,t,n,s,r,i={}){const o=e.fa(i.merge||i.mergeFields?2:0,t,n,r);di("Data must be an object, but it was:",o,s);const a=Lu(s,o);let u,c;if(i.merge)u=new mt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=ar(t,h,n);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ou(l,d)||l.push(d)}u=new mt(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new ig(new ut(a),u,c)}class ps extends ci{_toFieldTransform(t){if(t.na!==2)throw t.na===1?t.aa(`${this._methodName}() can only appear at the top level of your update data`):t.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ps}}function ug(e,t,n,s){const r=e.fa(1,t,n);di("Data must be an object, but it was:",r,s);const i=[],o=ut.empty();te(s,(u,c)=>{const l=fi(t,u,n);c=Ct(c);const h=r.ua(l);if(c instanceof ps)i.push(l);else{const d=ys(c,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new mt(i);return new xu(o,a,r.fieldTransforms)}function cg(e,t,n,s,r,i){const o=e.fa(1,t,n),a=[ar(t,s,n)],u=[r];if(i.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ar(t,i[d])),u.push(i[d+1]);const c=[],l=ut.empty();for(let d=a.length-1;d>=0;--d)if(!Ou(c,a[d])){const m=a[d];let p=u[d];p=Ct(p);const D=o.ua(m);if(p instanceof ps)c.push(m);else{const _=ys(p,D);_!=null&&(c.push(m),l.set(m,_))}}const h=new mt(c);return new xu(l,h,o.fieldTransforms)}function ys(e,t){if(Mu(e=Ct(e)))return di("Unsupported field value:",t,e),Lu(e,t);if(e instanceof ci)return function(n,s){if(!Nu(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&t.na!==4)throw t.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ys(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ed(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=$.fromDate(n);return{timestampValue:$n(s.It,r)}}if(n instanceof $){const r=new $(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$n(s.It,r)}}if(n instanceof li)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof me)return{bytesValue:iu(s.It,n._byteString)};if(n instanceof lt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Kr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${ai(n)}`)}(e,t)}function Lu(e,t){const n={};return Oa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):te(e,(s,r)=>{const i=ys(r,t.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Mu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof $||e instanceof li||e instanceof me||e instanceof lt||e instanceof ci)}function di(e,t,n){if(!Mu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ai(n);throw s==="an object"?t.aa(e+" a custom object"):t.aa(e+" "+s)}}function ar(e,t,n){if((t=Ct(t))instanceof ms)return t._internalPath;if(typeof t=="string")return fi(e,t);throw Hn("Field path arguments must be of type string or ",e,!1,void 0,n)}const lg=new RegExp("[~\\*/\\[\\]]");function fi(e,t,n){if(t.search(lg)>=0)throw Hn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ms(...t.split("."))._internalPath}catch{throw Hn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Hn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new w(f.INVALID_ARGUMENT,a+e+u)}function Ou(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(gi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hg extends Pu{data(){return super.data()}}function gi(e,t){return typeof t=="string"?fi(e,t):t instanceof ms?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vu extends Pu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Cn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(gi("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Cn extends Vu{data(t={}){return super.data(t)}}class Fu{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new _e(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Cn(this._firestore,this._userDataWriter,s.key,s,new _e(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Cn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new _e(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Cn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new _e(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:dg(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fg{}function gg(e,...t){for(const n of t)e=n._apply(e);return e}class mg extends fg{constructor(t,n){super(),this.wa=t,this.ya=n,this.type="orderBy"}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ae(r,i);return function(a,u){if(Ba(a)===null){const c=$a(a);c!==null&&yg(a,c,u.field)}}(s,o),o}(t._query,this.wa,this.ya);return new Ie(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new un(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function pg(e,t="asc"){const n=t,s=gi("orderBy",e);return new mg(s,n)}function yg(e,t,n){if(!n.isEqual(t))throw new w(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{convertValue(t,n="none"){switch(Jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(he(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return te(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new li(U(t.latitude),U(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Va(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(je(t));default:return null}}convertTimestamp(t){const n=Lt(t);return new $(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=V.fromString(t);R(cu(s));const r=new qe(s.get(1),s.get(3)),i=new E(s.popFirst(5));return r.isEqual(n)||At(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(e){e=vt(e,lt);const t=vt(e.firestore,Ot);return Zf(gs(t),e._key).then(n=>$u(t,e,n))}class mi extends vg{constructor(t){super(),this.firestore=t}convertBytes(t){return new me(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function bg(e){e=vt(e,Ie);const t=vt(e.firestore,Ot),n=gs(t),s=new mi(t);return Uu(e._query),tg(n,e._query).then(r=>new Fu(t,s,e,r))}function Bu(e,t,n,...s){e=vt(e,lt);const r=vt(e.firestore,Ot),i=Ru(r);let o;return o=typeof(t=Ct(t))=="string"||t instanceof ms?cg(i,"updateDoc",e._key,t,n,s):ug(i,"updateDoc",e._key,t),pi(r,[o.toMutation(e._key,yt.exists(!0))])}function Tg(e){return pi(vt(e.firestore,Ot),[new Hr(e._key,yt.none())])}function Ig(e,t){const n=vt(e.firestore,Ot),s=We(e),r=wg(e.converter,t);return pi(n,[ag(Ru(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,yt.exists(!1))]).then(()=>s)}function wo(e,...t){var n,s,r;e=Ct(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||vo(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(vo(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let u,c,l;if(e instanceof lt)c=vt(e.firestore,Ot),l=os(e._key.path),u={next:h=>{t[o]&&t[o]($u(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=vt(e,Ie);c=vt(h.firestore,Ot),l=h._query;const d=new mi(c);u={next:m=>{t[o]&&t[o](new Fu(c,d,h,m))},error:t[o+1],complete:t[o+2]},Uu(e._query)}return function(h,d,m,p){const D=new oi(p),_=new ri(d,D,m);return h.asyncQueue.enqueueAndForget(async()=>ei(await qn(h),_)),()=>{D.Rc(),h.asyncQueue.enqueueAndForget(async()=>ni(await qn(h),_))}}(gs(c),l,a,u)}function pi(e,t){return function(n,s){const r=new Tt;return n.asyncQueue.enqueueAndForget(async()=>Vf(await Jf(n),s,r)),r.promise}(gs(e),t)}function $u(e,t,n){const s=n.docs.get(t._key),r=new mi(e);return new Vu(e,r,t._key,s,new _e(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Ee=n})(il),Dn(new Me("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ot(new Sh(n.getProvider("auth-internal")),new kh(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qe(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ie(Bi,"3.4.15",e),ie(Bi,"3.4.15","esm2017")})();var Cg="firebase",Sg="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ie(Cg,Sg,"app");const Ag={apiKey:"AIzaSyDC_PQDdJEhWgZDG8jvesi1tj55qywF7P8",authDomain:"home-setting-91118.firebaseapp.com",projectId:"home-setting-91118",storageBucket:"home-setting-91118.appspot.com",messagingSenderId:"965275669365",appId:"1:965275669365:web:3bb15e4be11c2d59c9f93c"},Dg=ol(Ag),kt=sg(Dg);let wn;const _g=new Uint8Array(16);function kg(){if(!wn&&(wn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!wn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return wn(_g)}const z=[];for(let e=0;e<256;++e)z.push((e+256).toString(16).slice(1));function xg(e,t=0){return(z[e[t+0]]+z[e[t+1]]+z[e[t+2]]+z[e[t+3]]+"-"+z[e[t+4]]+z[e[t+5]]+"-"+z[e[t+6]]+z[e[t+7]]+"-"+z[e[t+8]]+z[e[t+9]]+"-"+z[e[t+10]]+z[e[t+11]]+z[e[t+12]]+z[e[t+13]]+z[e[t+14]]+z[e[t+15]]).toLowerCase()}const Ng=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Eo={randomUUID:Ng};function ur(e,t,n){if(Eo.randomUUID&&!t&&!e)return Eo.randomUUID();e=e||{};const s=e.random||(e.rng||kg)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){n=n||0;for(let r=0;r<16;++r)t[n+r]=s[r];return t}return xg(s)}const Rg={class:"mb-6"},Lg=b("label",{for:"Name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Your Name",-1),Mg={class:"mb-6"},Og=b("label",{for:"price",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Price",-1),Pg={class:"mb-6"},Vg=b("label",{for:"note",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Note",-1),Fg=["disabled"],Ug=Qe({__name:"AddForm",setup(e){const t=cr("name",name).value,n=lr();let r=new Date().toLocaleString();const i=ht({id:ur(),name:"",price:"",note:"",time:r}),o=async()=>{await Ig(In(kt,String(n.name)),i.value),hr({text:`\u0634\u0627\u0637\u0631\u0647 \u064A\u0627 ${t} \u0636\u0641\u062A\u064A\u0647\u0627 \u062E\u0644\u0627\u0635 \u{1F389}`,type:"success"}),i.value={id:ur(),name:"",price:"",note:"",time:r}};return(a,u)=>(at(),pt("form",{class:"lg:w-[50%] m-auto",onSubmit:u[3]||(u[3]=bo(c=>o(),["prevent"]))},[b("div",Rg,[Lg,Ht(b("input",{type:"text",id:"Name","onUpdate:modelValue":u[0]||(u[0]=c=>i.value.name=c),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Name",required:""},null,512),[[Kt,i.value.name]])]),b("div",Mg,[Og,Ht(b("input",{type:"number",id:"price","onUpdate:modelValue":u[1]||(u[1]=c=>i.value.price=c),placeholder:"Price",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[Kt,i.value.price]])]),b("div",Pg,[Vg,Ht(b("textarea",{type:"number",id:"note","onUpdate:modelValue":u[2]||(u[2]=c=>i.value.note=c),placeholder:"Note",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}," ",512),[[Kt,i.value.note]])]),b("button",{type:"submit",disabled:!i.value.name||!i.value.price,class:"disabled:opacity-75 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Add New Item",8,Fg)],32))}}),Bg={class:"filter"},$g=dr(" ."),jg={class:"lg:w-[50%] m-auto"},qg=b("h4",null,"Filter By",-1),Hg={class:"update-show-fees"},Kg={class:"update-fees text-center my-3"},Gg={class:"text-center"},zg=b("strong",null,"Total",-1),Wg={class:"p-4 my-3 m-auto lg:w-[50%] md:w-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"},Qg={key:0,class:"flow-root"},Yg={role:"list",class:"divide-y divide-gray-200 dark:divide-gray-700"},Xg={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"},Jg={class:""},Zg={class:"text-sm font-medium text-gray-900 truncate dark:text-white"},tm={class:"text-sm text-gray-500 truncate dark:text-gray-400"},em={class:"text-sm text-gray-500 truncate dark:text-gray-400"},nm={class:"flex justify-center my-2 items-center text-base font-semibold text-gray-900 dark:text-white"},sm={class:"actions"},rm=["onClick"],im=["onClick"],om=Qe({__name:"ListItem",emits:{editById:e=>e},setup(e,{emit:t}){const n=cr("name",name).value,s=ht([]);ht();const r=ht([]),i=ht(),o=ht([]),a=ht(""),u=ht(""),c=ht(""),l=lr(),h=l.name,d=async L=>{let M=gg(In(kt,`${h}`),pg(`${L}`,"desc"));const O=await bg(M);s.value=[],O.forEach(ft=>{console.log(ft.data()),r.value.push(ft.data().price),s.value.push({id:ft.id,name:ft.data().name,price:ft.data().price,note:ft.data().note,time:ft.data().time})})},m=L=>{wo(In(kt,`${L}`),M=>{s.value=[],M.forEach(O=>{r.value.push(O.data().price),s.value.push({id:O.id,name:O.data().name,price:O.data().price,note:O.data().note,time:O.data().time})})})},p=()=>{wo(In(kt,"total-price"),L=>{L.forEach(M=>{u.value=M.id,o.value=M.data()[String(h)],D(o.value)})})},D=L=>{setTimeout(()=>{if(console.log(L),console.log(r._rawValue.length),r._rawValue.length==1)return console.log(r.value[0]),i.value=r.value[0],a.value=L-r.value[0];r.value.reduce(function(M,O){return a.value=L-(M+O)})},1e3)},_=ju(()=>{setTimeout(()=>{r.value.reduce(function(L,M){return i.value=L+M,L+M})},1e3)}),G=async()=>{const L=We(kt,"total-price",u.value);let M={};M[String(h)]=c.value,await Bu(L,M)};To(()=>{l.name&&(m(l.name),p())});const nt=async L=>{await Tg(We(kt,String(h),L)),hr({text:`\u0634\u0627\u0637\u0631\u0647 \u064A\u0627 ${n} \u0636\u0641\u062A\u064A\u0647\u0627 \u062E\u0644\u0627\u0635 \u{1F389}`,type:"success"})},Ut=async L=>{t("editById",L)};return(L,M)=>(at(),pt(Sn,null,[b("div",Bg,[$g,b("div",jg,[qg,b("button",{type:"button",class:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2",onClick:M[0]||(M[0]=O=>d("price"))},"Price"),b("button",{type:"button",class:"text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2",onClick:M[1]||(M[1]=O=>d("name"))},"Alphabetic")])]),b("div",Hg,[b("div",Kg,[Ht(b("input",{type:"number","onUpdate:modelValue":M[2]||(M[2]=O=>qu(c)?c.value=O:null),id:"first_name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-2 m-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"add new Price",required:""},null,512),[[Kt,gt(c)]]),b("button",{onClick:G,type:"button",class:"my-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Add new Price for Month")]),b("h6",Gg,[b("span",null,[zg,dr(" "+Et(gt(o))+" EGP - "+Et(i.value)+" "+Et(gt(_))+" EGP = ",1)]),b("span",null,Et(gt(a))+" EGP",1)])]),b("div",Wg,[gt(s)?(at(),pt("div",Qg,[b("ul",Yg,[(at(!0),pt(Sn,null,Io(gt(s),O=>(at(),pt("li",{key:O.id,class:"py-3 sm:py-4"},[b("div",Xg,[b("div",Jg,[b("p",Zg,Et(O.name),1),b("p",tm,Et(O.price),1),b("p",em,Et(O.note),1),b("small",null,Et(O.time),1)]),b("div",nm,[b("div",sm,[b("button",{type:"button",onClick:ft=>Ut(O.id),class:"drop-shadow-lg hover:drop-shadow-xl text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},"Edit",8,rm),b("button",{type:"button",onClick:ft=>nt(O.id),class:"drop-shadow-lg hover:drop-shadow-xl text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"},"Delete",8,im)])])])]))),128))])])):Se("",!0)])],64))}}),am={class:"flex items-center justify-center flex-row flex-wrap flex-row-reverse"},Em=Qe({__name:"ListCategory",setup(e){const t=ht([{to:"/",name:"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"},{to:"tithes",name:"\u0627\u0644\u0639\u0634\u0648\u0631"},{to:"car",name:"\u0627\u0644\u0633\u064A\u0627\u0631\u0647"},{to:"home-facilities",name:"\u0645\u0631\u0627\u0641\u0642 \u0627\u0644\u0628\u064A\u062A"},{to:"compliments-birthdays",name:"\u0645\u062C\u0627\u0645\u0644\u0627\u062A \u0648 \u0627\u0639\u064A\u0627\u062F \u0645\u064A\u0644\u0627\u062F"},{to:"exit-release",name:"\u062E\u0631\u0648\u062C\u0627\u062A \u0648\u0641\u0633\u062D"},{to:"analysis-doctors",name:"\u062A\u062D\u0644\u064A\u0644 \u0648 \u062F\u0643\u0627\u062A\u0631\u0647"},{to:"other-houses",name:"\u0627\u0644\u0628\u064A\u0648\u062A \u0627\u0644\u0627\u062E\u0631\u0647"},{to:"cairo",name:"\u0627\u0644\u0642\u0627\u0647\u0631\u0629"},{to:"emergency",name:"\u0627\u0644\u0637\u0648\u0627\u0631\u0626"},{to:"save",name:"\u0627\u0644\u062A\u062D\u0648\u064A\u0634"}]);return(n,s)=>{const r=Hu("router-link");return at(),pt("div",am,[(at(!0),pt(Sn,null,Io(t.value,i=>(at(),pt("div",{key:i.name,class:"my-3 basis-1/10"},[Ku(r,{to:i.to,class:"shadow-lg block text-white p-2 mx-2 bg-cyan-400 rounded-full"},{default:Gu(()=>[dr(Et(i.name),1)]),_:2},1032,["to"])]))),128))])}}}),um={class:"mb-6"},cm=b("label",{for:"Name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Your Name",-1),lm={class:"mb-6"},hm=b("label",{for:"price",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Price",-1),dm={class:"mb-6"},fm=b("label",{for:"note",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Note",-1),gm=b("button",{type:"submit",class:"disabled:opacity-75 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Update Item",-1),mm=Qe({__name:"updateForm",props:{id:{type:String,required:!1,default:""}},emits:{closeEditForm:()=>!1},setup(e,{emit:t}){const n=e,s=cr("name",name).value;let r=n.id;const i=lr(),o=i.name;let u=new Date().toLocaleString();const c=ht({id:ur(),name:"",price:"",note:"",time:u}),l=async d=>{const m=We(kt,`${d}`,r),p=await Eg(m);p.exists()?(c.value=p.data(),console.log("Document data:",p.data())):console.log("No such document!")},h=async()=>{const d=We(kt,String(o),r);await Bu(d,c.value),hr({text:`\u0634\u0627\u0637\u0631\u0647 \u064A\u0627 ${s} \u0636\u0641\u062A\u064A\u0647\u0627 \u062E\u0644\u0627\u0635 \u{1F389}`,type:"success"})};return Co(()=>{n.id&&(r=n.id,l(i.name))}),To(()=>{r&&l(i.name)}),(d,m)=>(at(),pt("form",{class:"lg:w-[50%] m-auto",onSubmit:m[3]||(m[3]=bo(p=>h(),["prevent"]))},[b("div",um,[cm,Ht(b("input",{type:"text",id:"Name","onUpdate:modelValue":m[0]||(m[0]=p=>gt(c).name=p),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Name",required:""},null,512),[[Kt,gt(c).name]])]),b("div",lm,[hm,Ht(b("input",{type:"number",id:"price","onUpdate:modelValue":m[1]||(m[1]=p=>gt(c).price=p),placeholder:"Price",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[Kt,gt(c).price]])]),b("div",dm,[fm,Ht(b("textarea",{type:"number",id:"note","onUpdate:modelValue":m[2]||(m[2]=p=>gt(c).note=p),placeholder:"Note",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""}," ",512),[[Kt,gt(c).note]])]),gm],32))}}),pm=b("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[b("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ym=b("span",{class:"sr-only"},"Back to List",-1),vm=[pm,ym],bm=Qe({__name:"FormAndList",emits:["editById","closeEditForm"],setup(e,{emit:t}){const n=ht(""),s=ht(!1),r=a=>{n.value=a},i=()=>{n.value=""},o=()=>{s.value=!s.value,n.value=""};return Co(()=>{n&&(s.value=!0)}),(a,u)=>(at(),pt(Sn,null,[n.value?(at(),pt("button",{key:0,onClick:o,type:"button",class:"text-blue-700 border rotate-180 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"},vm)):Se("",!0),n.value?Se("",!0):(at(),vs(Ug,{key:1})),n.value?Se("",!0):(at(),vs(om,{key:2,onEditById:u[0]||(u[0]=c=>r(c))})),n.value?(at(),vs(mm,{key:3,id:n.value,onCloseEditForm:u[1]||(u[1]=c=>i())},null,8,["id"])):Se("",!0)],64))}});export{Ug as _,om as a,Em as b,bm as c};
