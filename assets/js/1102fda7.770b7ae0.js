"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[382],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7137:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:3},s="Preferences",u={unversionedId:"preferences",id:"preferences",title:"Preferences",description:"General",source:"@site/docs/preferences.md",sourceDirName:".",slug:"/preferences",permalink:"/preferences",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/preferences.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/installation"},next:{title:"Images",permalink:"/images"}},c=[{value:"General",id:"general",children:[{value:"Check for updates automatically",id:"check-for-updates-automatically",children:[],level:3},{value:"Allow collection of anonymous statistics to help us improve Rancher Desktop",id:"allow-collection-of-anonymous-statistics-to-help-us-improve-rancher-desktop",children:[],level:3}],level:2},{value:"Kubernetes Settings",id:"kubernetes-settings",children:[{value:"Kubernetes Version",id:"kubernetes-version",children:[],level:3},{value:"Container Runtime",id:"container-runtime",children:[],level:3},{value:"Memory (macOS &amp; Linux)",id:"memory-macos--linux",children:[],level:3},{value:"CPUs (macOS &amp; Linux)",id:"cpus-macos--linux",children:[],level:3},{value:"Port",id:"port",children:[],level:3},{value:"Reset Kubernetes/Reset Kubernetes and Container Images",id:"reset-kubernetesreset-kubernetes-and-container-images",children:[],level:3}],level:2},{value:"WSL Integration (Windows)",id:"wsl-integration-windows",children:[],level:2},{value:"Port Forwarding (Windows)",id:"port-forwarding-windows",children:[],level:2},{value:"Supporting Utilities (macOS &amp; Linux)",id:"supporting-utilities-macos--linux",children:[],level:2},{value:"Images",id:"images",children:[{value:"Scanning Images",id:"scanning-images",children:[],level:3},{value:"Adding Images",id:"adding-images",children:[{value:"Pulling Images",id:"pulling-images",children:[],level:4},{value:"Building Images",id:"building-images",children:[],level:4}],level:3}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Show Logs",id:"show-logs",children:[],level:3},{value:"Factory Reset",id:"factory-reset",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"preferences"},"Preferences"),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"General")," tab, provides general information about the project's status as well as links to discuss the project, report issues, or to learn more about the project."),(0,o.kt)("h3",{id:"check-for-updates-automatically"},"Check for updates automatically"),(0,o.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,o.kt)("h3",{id:"allow-collection-of-anonymous-statistics-to-help-us-improve-rancher-desktop"},"Allow collection of anonymous statistics to help us improve Rancher Desktop"),(0,o.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."),(0,o.kt)("h2",{id:"kubernetes-settings"},"Kubernetes Settings"),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes Settings")," tab, you can manage the settings of your virtual machine."),(0,o.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,o.kt)("p",null,"This option presents a list of Kubernetes versions that your Rancher Desktop instance can use."),(0,o.kt)("p",null,"When upgrading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A check is performed to see if the target Kubernetes version is available locally. If not, it downloads the files."),(0,o.kt)("li",{parentName:"ul"},"Workloads are retained."),(0,o.kt)("li",{parentName:"ul"},"Images are retained.")),(0,o.kt)("p",null,"When downgrading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Workloads are removed."),(0,o.kt)("li",{parentName:"ul"},"Images are retained.")),(0,o.kt)("p",null,"To switch versions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Kubernetes version")," drop-down menu."),(0,o.kt)("li",{parentName:"ol"},"Select the version you want to change to."),(0,o.kt)("li",{parentName:"ol"},"On the confirmation window, click ",(0,o.kt)("strong",{parentName:"li"},"OK")," to proceed.")),(0,o.kt)("h3",{id:"container-runtime"},"Container Runtime"),(0,o.kt)("p",null,"Set the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"container runtime")," for Rancher Desktop. Users have the option of ",(0,o.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," which provides namespaces for containers and the use of nerdctl or ",(0,o.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"dockerd (moby)")," which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time."),(0,o.kt)("p",null,"When switching to a different container runtime:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A restart of Kubernetes is required."),(0,o.kt)("li",{parentName:"ul"},"Workloads and images that have been built or pulled using the existing container runtime are not available on the the container runtime being switched to.")),(0,o.kt)("h3",{id:"memory-macos--linux"},"Memory (macOS & Linux)"),(0,o.kt)("p",null,"The amount of memory to allocate to Rancher Desktop. The selectable range is based on your system. The red area within the range indicates an allocation that may affect system services."),(0,o.kt)("p",null,"This option is not available for Rancher Desktop on Windows. With WSL, memory allocation is configured globally across all Linux distributions. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig"},"WSL documentation")," for instructions."),(0,o.kt)("h3",{id:"cpus-macos--linux"},"CPUs (macOS & Linux)"),(0,o.kt)("p",null,"The number of CPUs to allocate to Rancher Desktop. The selectable range is based on your system. The red area within the range indicates an allocation that may affect system services."),(0,o.kt)("p",null,"This option is not available for Rancher Desktop on Windows. With WSL, CPU allocation is configured globally across all Linux distributions. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig"},"WSL documentation")," for instructions."),(0,o.kt)("h3",{id:"port"},"Port"),(0,o.kt)("p",null,"Set the port Kubernetes is exposed on. Use this setting to avoid port collisions if multiple instances of K3s are running."),(0,o.kt)("h3",{id:"reset-kubernetesreset-kubernetes-and-container-images"},"Reset Kubernetes/Reset Kubernetes and Container Images"),(0,o.kt)("p",null,"This option removes all workloads and Kubernetes configurations.\nImages that have been pulled are not removed when a reset occurs."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the confirmation window, click ",(0,o.kt)("strong",{parentName:"li"},"OK")," to proceed.")),(0,o.kt)("p",null,"At this point, Kubernetes is stopped then workloads and configurations are removed. Kubernetes is then be started again."),(0,o.kt)("h2",{id:"wsl-integration-windows"},"WSL Integration (Windows)"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"WSL Integration")," tab gives the option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can use communicate with the Rancher Desktop Kubernetes cluster using tools like ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," from within the WSL distribution."),(0,o.kt)("h2",{id:"port-forwarding-windows"},"Port Forwarding (Windows)"),(0,o.kt)("p",null,"To forward a port:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find the service and click ",(0,o.kt)("strong",{parentName:"li"},"Forward"),". A random port is assigned."),(0,o.kt)("li",{parentName:"ol"},"Optional: click ",(0,o.kt)("strong",{parentName:"li"},"Cancel")," to remove the port assigned.")),(0,o.kt)("h2",{id:"supporting-utilities-macos--linux"},"Supporting Utilities (macOS & Linux)"),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Supporting Utilities")," tab, you can create symbolic links to tools in /usr/local/bin. By default, a symbolic link is created if the tool is not already linked."),(0,o.kt)("p",null,"Symbolic links can be created (or removed) for the following tools, which are installed as part of Rancher Desktop:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"helm"),(0,o.kt)("li",{parentName:"ul"},"kubectl"),(0,o.kt)("li",{parentName:"ul"},"nerdctl"),(0,o.kt)("li",{parentName:"ul"},"docker")),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Images")," tab, allows you to manage the images on your virtual machine."),(0,o.kt)("p",null,"To manage your images using nerdctl instead, refer to the ",(0,o.kt)("a",{parentName:"p",href:"./images"},"Images")," section."),(0,o.kt)("h3",{id:"scanning-images"},"Scanning Images"),(0,o.kt)("p",null,"This feature uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy")," to scan your images for vulnerabilities and configuration issues."),(0,o.kt)("p",null,"To scan an image:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the image list, find the image you want to scan."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Scan"),"."),(0,o.kt)("li",{parentName:"ol"},"Review the results then click ",(0,o.kt)("strong",{parentName:"li"},"Close Output to Continue"),".")),(0,o.kt)("h3",{id:"adding-images"},"Adding Images"),(0,o.kt)("h4",{id:"pulling-images"},"Pulling Images"),(0,o.kt)("p",null,"Use this option to pull images from a registry to your virtual machine."),(0,o.kt)("p",null,"To pull an image:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"+")," button in the top-right corner."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Pull")," tab."),(0,o.kt)("li",{parentName:"ol"},"Enter the name of the image to pull.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Note: By default, images are pulled from ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," in which use the ",(0,o.kt)("inlineCode",{parentName:"p"},"repo/image[:tag]")," format. To pull from other registries, include the hostname ",(0,o.kt)("inlineCode",{parentName:"p"},"registry.example.com/repo/image[:tag]"),"."))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Pull"),".")),(0,o.kt)("h4",{id:"building-images"},"Building Images"),(0,o.kt)("p",null,"Use this option to build an image and add it to your virtual machine."),(0,o.kt)("p",null,"To build an image:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"+")," button in the top-right corner."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Build")," tab."),(0,o.kt)("li",{parentName:"ol"},"Enter a name for the image being built. E.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"repo/image"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"repo/image:tag"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image:tag"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Build"),"."),(0,o.kt)("li",{parentName:"ol"},"In the file browser, select the Dockerfile to build an image with.")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"show-logs"},"Show Logs"),(0,o.kt)("p",null,"Use this option to open the folder containing all Rancher Desktop log files."),(0,o.kt)("h3",{id:"factory-reset"},"Factory Reset"),(0,o.kt)("p",null,"Remove the cluster and all other Rancher Desktop settings. The initial setup procedure must be done again."),(0,o.kt)("p",null,"To perform a factory reset:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Reset"),"."),(0,o.kt)("li",{parentName:"ol"},"On the confirmation window, click ",(0,o.kt)("strong",{parentName:"li"},"OK")," to proceed. Kubernetes stops and Rancher Desktop closes."),(0,o.kt)("li",{parentName:"ol"},"Start Rancher Desktop again.")))}m.isMDXComponent=!0}}]);