"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[695],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return p},mdx:function(){return b},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){return function(n){var t=s(n.components);return r.createElement(e,o({},n,{components:t}))}},s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),p=i,m=u["".concat(a,".").concat(p)]||u[p]||f[p]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60487:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),a=(t(44256),["components"]),l={id:"building",title:"Building Glean from Source",sidebar_label:"Building Glean"},d=void 0,c={unversionedId:"building",id:"building",isDocsHomePage:!1,title:"Building Glean from Source",description:"Introduction",source:"@site/docs/building.md",sourceDirName:".",slug:"/building",permalink:"/docs/building",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/building.md",tags:[],version:"current",frontMatter:{id:"building",title:"Building Glean from Source",sidebar_label:"Building Glean"},sidebar:"someSidebar",previous:{title:"Trying Glean",permalink:"/docs/trying"},next:{title:"Walkthrough",permalink:"/docs/walkthrough"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"You will need",id:"you-will-need",children:[{value:"Ubuntu",id:"ubuntu",children:[],level:3},{value:"Debian",id:"debian",children:[],level:3},{value:"Fedora",id:"fedora",children:[],level:3}],level:2},{value:"Building",id:"building",children:[],level:2}],s={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.mdx)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"introduction"},"Introduction"),(0,o.mdx)("p",null,"Glean is written mainly in ",(0,o.mdx)("a",{parentName:"p",href:"http://www.haskell.org/"},"Haskell"),", and\nmakes heavy use of\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/hsthrift"},"Thrift")," for data\ncommunication and serialization, so these are the main dependencies\nthat are needed for building Glean."),(0,o.mdx)("h2",{id:"you-will-need"},"You will need"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Linux. The build is only tested on Linux so far; we hope to add\nsupport for other OSs in the future.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://www.haskell.org/ghc/"},"GHC"),". To see which versions Glean is tested with, check the current ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/Glean/blob/master/.github/workflows/ci.yml"},"ci.yml")," script.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Cabal/cabal-install version 3.6 or later (older versions won't work)."))),(0,o.mdx)("p",null,"Additional per-distribution setup follows."),(0,o.mdx)("h3",{id:"ubuntu"},"Ubuntu"),(0,o.mdx)("p",null,"Install prerequisite packages. (many of these are dependencies of\nhsthrift; an up to date list can be found in the\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/hsthrift/blob/master/.github/workflows/Dockerfile"},"Dockerfile"),"\nthat we use for building the base image for CI)."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"sudo apt-get install \\\n    g++ \\\n    cmake \\\n    bison flex \\\n    git cmake \\\n    libzstd-dev \\\n    libboost-all-dev \\\n    libevent-dev \\\n    libdouble-conversion-dev \\\n    libgoogle-glog-dev \\\n    libgflags-dev \\\n    libiberty-dev \\\n    liblz4-dev \\\n    liblzma-dev \\\n    libsnappy-dev \\\n    make \\\n    zlib1g-dev \\\n    binutils-dev \\\n    libjemalloc-dev \\\n    libssl-dev \\\n    pkg-config \\\n    libunwind-dev \\\n    libsodium-dev \\\n    curl \\\n    libpcre3-dev \\\n    libmysqlclient-dev \\\n    libfftw3-dev \\\n    librocksdb-dev \\\n    libxxhash-dev\n")),(0,o.mdx)("h3",{id:"debian"},"Debian"),(0,o.mdx)("p",null,"The package dependencies for Debian current are the same as above for Ubuntu, except you may see:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"}," Package 'libmysqlclient-dev' has no installation candidate\n")),(0,o.mdx)("p",null,"Use"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"        default-libmysqlclient-dev\n")),(0,o.mdx)("p",null,"instead. You also need to install:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"        libfmt-dev\n")),(0,o.mdx)("p",null,"instead."),(0,o.mdx)("h3",{id:"fedora"},"Fedora"),(0,o.mdx)("p",null,"Install prerequisite packages:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"sudo dnf install \\\n    g++ \\\n    make \\\n    cmake \\\n    binutils \\\n    bison flex \\\n    curl \\\n    libzstd-devel \\\n    boost-devel \\\n    libevent-devel \\\n    double-conversion-devel \\\n    glog-devel \\\n    gflags-devel \\\n    zlib-devel \\\n    openssl-devel \\\n    libunwind-devel \\\n    libsodium-devel \\\n    pcre-devel \\\n    community-mysql-devel \\\n    fftw-devel \\\n    rocksdb-devel \\\n    xxhash-devel\n")),(0,o.mdx)("h2",{id:"building"},"Building"),(0,o.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"The build process currently installs dependencies in\n",(0,o.mdx)("inlineCode",{parentName:"p"},"/usr/local/lib"),". This isn't ideal; we're working on a more\nself-contained build process but it's not ready yet."))),(0,o.mdx)("p",null,"Clone the repository:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"git clone https://github.com/facebookincubator/Glean.git\ncd Glean\n")),(0,o.mdx)("p",null,"These are necessary so that the Glean build can find the dependencies\nthat get installed in ",(0,o.mdx)("inlineCode",{parentName:"p"},"/usr/local/lib"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"export LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH\nexport PKG_CONFIG_PATH=/usr/local/lib/pkgconfig\n")),(0,o.mdx)("p",null,"Clone ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/hsthrift"},"hsthrift")," and\ninstall its dependencies:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"./install_deps.sh\n")),(0,o.mdx)("p",null,"Build everything:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"make\n")),(0,o.mdx)("p",null,"If everything worked, the tests should pass:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"make test\n")),(0,o.mdx)("p",null,"At this point you can ",(0,o.mdx)("inlineCode",{parentName:"p"},"cabal install")," to install the executables into\n",(0,o.mdx)("inlineCode",{parentName:"p"},"~/.cabal/bin"),"."))}p.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{d(r.next(e))}catch(n){o(n)}}function l(e){try{d(r.throw(e))}catch(n){o(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const i=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{d(r.next(e))}catch(n){o(n)}}function l(e){try{d(r.throw(e))}catch(n){o(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,i=0;const o={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{d(r.next(e))}catch(n){o(n)}}function l(e){try{d(r.throw(e))}catch(n){o(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const i=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield i.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield i.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=o(t(47596)),n.uidocs=o(t(17483)),n.feedback=o(t(24855)),n.inpageeditor=o(t(27312));const a=["internal","external"];function l(e){return c(e),u()?"internal"in e?d(e.internal):[]:"external"in e?d(e.external):[]}function d(e){return"function"==typeof e?e():e}function c(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const n=Object.keys(e).filter((e=>!a.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${a}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=c,n.isInternal=u,n.FbInternalOnly=function(e){return u()?e.children:null},n.OssOnly=function(e){return u()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{d(r.next(e))}catch(n){o(n)}}function l(e){try{d(r.throw(e))}catch(n){o(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const i=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r}=e;try{return yield i.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{d(r.next(e))}catch(n){o(n)}}function l(e){try{d(r.throw(e))}catch(n){o(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const i=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield i.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);