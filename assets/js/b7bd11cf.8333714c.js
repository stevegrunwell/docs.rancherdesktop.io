"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1800],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65873:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var n=r(83117),o=(r(67294),r(3905));const a={sidebar_label:"Network",title:"Network (macOS)"},i=void 0,c={unversionedId:"ui/preferences/virtual-machine/network",id:"version-1.9/ui/preferences/virtual-machine/network",title:"Network (macOS)",description:"Enable socket-vmnet",source:"@site/versioned_docs/version-1.9/ui/preferences/virtual-machine/network.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/network",permalink:"/1.9/ui/preferences/virtual-machine/network",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/preferences/virtual-machine/network.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"Network",title:"Network (macOS)"},sidebar:"tutorialSidebar",previous:{title:"Hardware",permalink:"/1.9/ui/preferences/virtual-machine/hardware"},next:{title:"Volumes",permalink:"/1.9/ui/preferences/virtual-machine/volumes"}},l={},s=[{value:"Enable socket-vmnet",id:"enable-socket-vmnet",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/virtual-machine/macOS_virtualMachine_tabNetwork.png",alt:null})),(0,o.kt)("h3",{id:"enable-socket-vmnet"},"Enable socket-vmnet"),(0,o.kt)("admonition",{title:"warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"experimental")," setting.")),(0,o.kt)("p",null,"Network settings can be enabled or disabled from this view. Users have the initial option of enabling ",(0,o.kt)("inlineCode",{parentName:"p"},"socket-vmnet")," which will allow for adding another guest IP that is accessible from the host and other guests. The enabled option also provides ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/vmnet"},"vmnet.framework")," support for QEMU and does not depend on VDE."))}p.isMDXComponent=!0}}]);