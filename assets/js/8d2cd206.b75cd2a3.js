"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98055],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Resources",weight:5,aliases:["/rancher/v2.5/en/installation/options","/rancher/v2.x/en/installation/resources/"]},l=void 0,c={unversionedId:"pages-for-subheaders/resources",id:"version-2.5/pages-for-subheaders/resources",title:"Resources",description:"Docker Installations",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/resources.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/resources",permalink:"/v2.5/pages-for-subheaders/resources",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/resources.md",tags:[],version:"2.5",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Resources",weight:5,aliases:["/rancher/v2.5/en/installation/options","/rancher/v2.x/en/installation/resources/"]},sidebar:"tutorialSidebar",previous:{title:"Upgrades",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd"},next:{title:"Choosing a Rancher Version",permalink:"/v2.5/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"}},u={},d=[{value:"Docker Installations",id:"docker-installations",level:3},{value:"Air Gapped Installations",id:"air-gapped-installations",level:3},{value:"Advanced Options",id:"advanced-options",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"docker-installations"},"Docker Installations"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"single-node Docker installation")," is for Rancher users that are wanting to test out Rancher. Instead of running on a Kubernetes cluster using Helm, you install the Rancher server component on a single node using a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command."),(0,o.kt)("p",null,"Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server."),(0,o.kt)("h3",{id:"air-gapped-installations"},"Air Gapped Installations"),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/air-gapped-helm-cli-install"},"these steps")," to install the Rancher server in an air gapped environment."),(0,o.kt)("p",null,"An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy."),(0,o.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("p",null,"When installing Rancher, there are several advanced options that can be enabled during installation. Within each install guide, these options are presented. Learn more about these options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"},"Custom CA Certificate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"},"API Audit Log")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/reference-guides/installation-references/tls-settings"},"TLS Settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs"},"etcd configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/resources/local-system-charts"},"Local System Charts for Air Gap Installations")," | v2.3.0          |")))}f.isMDXComponent=!0}}]);