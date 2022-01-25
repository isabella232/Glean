"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[607],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return f},mdx:function(){return m},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),d=function(e){return function(n){var t=s(n.components);return r.createElement(e,i({},n,{components:t}))}},s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,h=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(h,c(c({ref:n},u),{},{components:t})):r.createElement(h,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{O1:function(){return a},EO:function(){return c},Rr:function(){return l}});var r,o=t(67294),i=t(44256);function a(e){return o.createElement("a",{href:r+e.file},e.file)}function c(e){return o.createElement("a",{href:r+e.file},e.children)}r=(0,i.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var l=function(e){e.children;var n=e.internal,t=e.external;return(0,i.fbContent)({internal:o.createElement("code",null,n),external:o.createElement("code",null,t)})}},18958:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=(t(44256),t(12038)),c=["components"],l={id:"hack",title:"Hack",sidebar_label:"Hack"},u=void 0,d={unversionedId:"indexer/hack",id:"indexer/hack",isDocsHomePage:!1,title:"Hack",description:"The Hack indexer is built into the [Hack",source:"@site/docs/indexer/hack.md",sourceDirName:"indexer",slug:"/indexer/hack",permalink:"/docs/indexer/hack",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/indexer/hack.md",tags:[],version:"current",frontMatter:{id:"hack",title:"Hack",sidebar_label:"Hack"},sidebar:"someSidebar",previous:{title:"JavaScript (Flow)",permalink:"/docs/indexer/flow"}},s=[{value:"Run the indexer",id:"run-the-indexer",children:[],level:2},{value:"Derived predicates",id:"derived-predicates",children:[],level:2},{value:"In the shell",id:"in-the-shell",children:[],level:2},{value:"Schema",id:"schema",children:[],level:2}],f={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://hacklang.org/"},"Hack")," indexer is built into the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/hhvm/tree/master/hphp/hack"},"Hack\ntypechecker"),"."),(0,i.mdx)("h2",{id:"run-the-indexer"},"Run the indexer"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"hh_server DIR --write-symbol-info JSON\n")),(0,i.mdx)("p",null,"where"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"DIR")," is the root directory containing the ",(0,i.mdx)("inlineCode",{parentName:"li"},".php")," files"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"JSON")," is the directory in which to write the output ",(0,i.mdx)("inlineCode",{parentName:"li"},".json")," files")),(0,i.mdx)("p",null,"The generated files can be ingested into a Glean database using ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli#glean-create"},(0,i.mdx)("inlineCode",{parentName:"a"},"glean create")),"."),(0,i.mdx)("h2",{id:"derived-predicates"},"Derived predicates"),(0,i.mdx)("p",null,"Several predicates should be derived after indexing. For each ",(0,i.mdx)("inlineCode",{parentName:"p"},"stored")," predicate in the ",(0,i.mdx)("a",{parentName:"p",href:"#schema"},"schema")," you should ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli#glean-derive"},(0,i.mdx)("inlineCode",{parentName:"a"},"glean derive"))," the predicate."),(0,i.mdx)("h2",{id:"in-the-shell"},"In the shell"),(0,i.mdx)("p",null,"Hack source can also be indexed directly from the Glean shell:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},":index hack DIR\n")),(0,i.mdx)("h2",{id:"schema"},"Schema"),(0,i.mdx)("p",null,"The schema is in ",(0,i.mdx)(a.O1,{file:"glean/schema/source/hack.angle",mdxType:"SrcFile"})))}p.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(n){i(n)}}function c(e){try{l(r.throw(e))}catch(n){i(n)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const o=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(n){i(n)}}function c(e){try{l(r.throw(e))}catch(n){i(n)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,o=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=o++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,c),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(n){i(n)}}function c(e){try{l(r.throw(e))}catch(n){i(n)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const o=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(47596)),n.uidocs=i(t(17483)),n.feedback=i(t(24855)),n.inpageeditor=i(t(27312));const a=["internal","external"];function c(e){return u(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const n=Object.keys(e).filter((e=>!a.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${a}`)}function d(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(n){i(n)}}function c(e){try{l(r.throw(e))}catch(n){i(n)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const o=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(n){i(n)}}function c(e){try{l(r.throw(e))}catch(n){i(n)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const o=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);