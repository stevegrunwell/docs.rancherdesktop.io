"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4584],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(4334),i=n(2389),o=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:k,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,s.U)(),[w,C]=(0,r.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&v.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==w&&(x(t),C(a),null!=k&&h(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:T},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905)),l=n(5488),i=n(5162),o=n(3687);const s={sidebar_label:"\u5bb9\u5668\u5f15\u64ce",title:"\u5bb9\u5668\u5f15\u64ce"},u=void 0,p={unversionedId:"ui/preferences/container-engine",id:"version-1.7/ui/preferences/container-engine",title:"\u5bb9\u5668\u5f15\u64ce",description:"\u901a\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/ui/preferences/container-engine.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/container-engine",permalink:"/zh/1.7/ui/preferences/container-engine",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/ui/preferences/container-engine.md",tags:[],version:"1.7",frontMatter:{sidebar_label:"\u5bb9\u5668\u5f15\u64ce",title:"\u5bb9\u5668\u5f15\u64ce"},sidebar:"tutorialSidebar",previous:{title:"WSL",permalink:"/zh/1.7/ui/preferences/wsl"},next:{title:"Kubernetes",permalink:"/zh/1.7/ui/preferences/kubernetes"}},c={},d=[{value:"\u901a\u7528",id:"\u901a\u7528",level:2},{value:"Allowed Images",id:"allowed-images",level:2},{value:"\u5982\u4f55\u6307\u5b9a Allowed Image Patterns",id:"\u5982\u4f55\u6307\u5b9a-allowed-image-patterns",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],m={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u901a\u7528"},"\u901a\u7528"),(0,r.kt)("p",null,"\u4e3a Rancher Desktop \u8bbe\u7f6e",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"\u5bb9\u5668\u8fd0\u884c\u65f6"),"\u3002\u7528\u6237\u53ef\u4ee5\u9009\u62e9 ",(0,r.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," \u4e3a\u5bb9\u5668\u63d0\u4f9b\u547d\u540d\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 nerdctl \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"dockerd (moby)")," \u6765\u542f\u7528 D\u200b\u200bocker API \u548c Docker CLI\u3002\u4e00\u6b21\u53ea\u80fd\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002"),(0,r.kt)("p",null,"\u5207\u6362\u5230\u4e0d\u540c\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u73b0\u6709\u5bb9\u5668\u8fd0\u884c\u65f6\u6784\u5efa\u6216\u62c9\u53d6\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u955c\u50cf\u5728\u5207\u6362\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u4e0d\u53ef\u7528\u3002")),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Windows_containerEngine_tabGeneral.png",alt:null}))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/macOS_containerEngine_tabGeneral.png",alt:null}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Linux_containerEngine_tabGeneral.png",alt:null})))),(0,r.kt)("h2",{id:"allowed-images"},"Allowed Images"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Allowed Images")," \u9009\u9879\u5361\u7528\u4e8e\u63a7\u5236\u53ef\u4ee5\u5728 Rancher Desktop \u4e2d\u8bbf\u95ee\u7684\u955c\u50cf\u4ed3\u5e93\u5de5\u4ef6\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u80fd\u53ea\u60f3\u4ece\u7ec4\u7ec7\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u6216\u4ec5\u4ece\u7ec4\u7ec7\u955c\u50cf\u4ed3\u5e93\u4e2d\u7279\u5b9a\u90e8\u95e8\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u62c9\u53d6\u5bb9\u5668\u955c\u50cf\u3002\u4f60\u53ef\u4ee5\u6307\u5b9a\u955c\u50cf\u540d\u79f0\u6a21\u5f0f\uff0c\u4ece\u800c\u4ec5\u5141\u8bb8\u8bbf\u95ee\u7279\u5b9a\u955c\u50cf\u4ed3\u5e93\u548c/\u6216\u4ed3\u5e93\u7684\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u9009\u4e2d ",(0,r.kt)("strong",{parentName:"p"},"Enable")," \u590d\u9009\u6846\uff0c\u8fd9\u6837\uff0cRancher Desktop \u5728\u62c9\u53d6\u6216\u63a8\u9001\u955c\u50cf\u65f6\u5c06\u5e94\u7528\u6307\u5b9a\u7684\u6a21\u5f0f\uff0c\u8fd9\u610f\u5473\u7740\u53ea\u5141\u8bb8\u540d\u79f0\u81f3\u5c11\u4e0e\u6307\u5b9a\u6a21\u5f0f\u4e4b\u4e00\u5339\u914d\u7684\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"+")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"-")," \u6309\u94ae\u6765\u6dfb\u52a0/\u5220\u9664\u955c\u50cf\u540d\u79f0\u6a21\u5f0f\u3002"),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Windows_containerEngine_tabAllowedImages.png",alt:null}))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/macOS_containerEngine_tabAllowedImages.png",alt:null}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Linux_containerEngine_tabAllowedImages.png",alt:null})))),(0,r.kt)("h3",{id:"\u5982\u4f55\u6307\u5b9a-allowed-image-patterns"},"\u5982\u4f55\u6307\u5b9a Allowed Image Patterns"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"[registry/][:port/][organization/]repository[:tag]")," \u683c\u5f0f\u6765\u6307\u5b9a Allowed Image Pattern\uff08\u5141\u8bb8\u7684\u955c\u50cf\u6a21\u5f0f\uff09\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u672a\u6307\u5b9a Allowed Image Patterns\uff0c"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"registry")," \u9ed8\u8ba4\u4e3a Docker Hub (",(0,r.kt)("inlineCode",{parentName:"li"},"docker.io"),")\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," \u9ed8\u8ba4\u4e3a 433\u3002"),(0,r.kt)("li",{parentName:"ul"},"Docker Hub \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"organization")," \u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"library"),"\uff0c\u4e0d\u9002\u7528\u4e8e\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag")," \u9ed8\u8ba4\u4e3a\u4efb\u4f55\u5185\u5bb9\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u4e0d"),"\u4ec5\u4ec5\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"latest"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," \u8fc7\u6ee4\u5b9e\u9645\u4e0a\u4e0d\u8d77\u4f5c\u7528\uff1b\u76f8\u5e94\u7684\u6458\u8981 (",(0,r.kt)("inlineCode",{parentName:"p"},"repository@digest"),") \u4e5f\u5fc5\u987b\u6dfb\u52a0\u5230\u5141\u8bb8\u5217\u8868\u4e2d\u624d\u884c\uff0c\u56e0\u6b64\u4e0d\u5b9e\u7528\u3002\u5982\u679c\u4f60\u6709\u9700\u8981\u6839\u636e\u6807\u7b7e\u8fdb\u884c\u8fc7\u6ee4\u7684\u7528\u4f8b\uff0c\u8bf7\u63d0\u4ea4 Github issue\u3002"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u610f\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"busybox")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," \u955c\u50cf\u4ed3\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"library")," \u7ec4\u7ec7\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"busybox")," \u4ed3\u5e93\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suse/")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," \u955c\u50cf\u4ed3\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"suse")," \u7ec4\u7ec7\u4e2d\u7684\u4efb\u4f55\u955c\u50cf\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1a\u4ed3\u5e93\u672b\u5c3e\u7684\u659c\u6760\u8868\u793a\u540e\u9762\u8ddf\u7740\u5355\u72ec\u7684\u4e00\u6bb5\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/nginx"),"\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/cap/uaa"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suse//")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," \u955c\u50cf\u4ed3\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"suse")," \u7ec4\u7ec7\u4e2d\u7684\u4efb\u4f55\u955c\u50cf\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1a\u4ed3\u5e93\u672b\u5c3e\u7684\u53cc\u659c\u6760\u8868\u793a\u540e\u9762\u8ddf\u7740\u4e00\u4e2a\u6216\u591a\u4e2a\u6bb5\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/cap/uaa"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry.internal:5000")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"td"},"registry.internal:5000")," \u955c\u50cf\u4ed3\u5e93\u7684\u4efb\u4f55\u955c\u50cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry.suse.com/nginx")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"td"},"registry.suse.com")," \u955c\u50cf\u4ed3\u5e93\u7684\u955c\u50cf ",(0,r.kt)("inlineCode",{parentName:"td"},"nginx"),"\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1aDockerHub \u4e4b\u5916\u7684\u955c\u50cf\u4ed3\u5e93\u6ca1\u6709\u9876\u5c42\u7ec4\u7ec7\u7684\u6982\u5ff5\uff0c\u56e0\u6b64\u6ca1\u6709\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"library")," \u7ec4\u7ec7\u3002")))))}k.isMDXComponent=!0}}]);