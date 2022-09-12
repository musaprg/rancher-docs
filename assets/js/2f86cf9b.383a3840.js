"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99469],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,h=d["".concat(s,".").concat(k)]||d[k]||p[k]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Container Network Interface (CNI) Providers",description:"Learn about Container Network Interface (CNI), the CNI providers Rancher provides, the features they offer, and how to choose a provider for you",weight:2300},s=void 0,u={unversionedId:"faq/container-network-interface-providers",id:"version-2.0-2.4/faq/container-network-interface-providers",title:"Container Network Interface (CNI) Providers",description:"Learn about Container Network Interface (CNI), the CNI providers Rancher provides, the features they offer, and how to choose a provider for you",source:"@site/versioned_docs/version-2.0-2.4/faq/container-network-interface-providers.md",sourceDirName:"faq",slug:"/faq/container-network-interface-providers",permalink:"/v2.0-v2.4/faq/container-network-interface-providers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/faq/container-network-interface-providers.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Container Network Interface (CNI) Providers",description:"Learn about Container Network Interface (CNI), the CNI providers Rancher provides, the features they offer, and how to choose a provider for you",weight:2300},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/v2.0-v2.4/faq/networking"},next:{title:"Rancher is No Longer Needed",permalink:"/v2.0-v2.4/faq/rancher-is-no-longer-needed"}},c={},p=[{value:"What is CNI?",id:"what-is-cni",level:2},{value:"What Network Models are Used in CNI?",id:"what-network-models-are-used-in-cni",level:3},{value:"What is an Encapsulated Network?",id:"what-is-an-encapsulated-network",level:4},{value:"What is an Unencapsulated Network?",id:"what-is-an-unencapsulated-network",level:4},{value:"What CNI Providers are Provided by Rancher?",id:"what-cni-providers-are-provided-by-rancher",level:3},{value:"Canal",id:"canal",level:4},{value:"Flannel",id:"flannel",level:4},{value:"Calico",id:"calico",level:4},{value:"Weave",id:"weave",level:4},{value:"CNI Features by Provider",id:"cni-features-by-provider",level:3},{value:"CNI Community Popularity",id:"cni-community-popularity",level:4},{value:"How can I configure a CNI network provider?",id:"how-can-i-configure-a-cni-network-provider",level:3}],d={toc:p};function k(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-cni"},"What is CNI?"),(0,o.kt)("p",null,"CNI (Container Network Interface), a ",(0,o.kt)("a",{parentName:"p",href:"https://cncf.io/"},"Cloud Native Computing Foundation project"),", consists of a specification and libraries for writing plugins to configure network interfaces in Linux containers, along with a number of  plugins. CNI concerns itself only with network connectivity of containers and removing allocated resources when the container is deleted."),(0,o.kt)("p",null,"Kubernetes uses CNI as an interface between network providers and Kubernetes pod networking."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CNI Logo",src:n(37685).Z,width:"84",height:"119"})),(0,o.kt)("p",null,"For more information visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni"},"CNI GitHub project"),"."),(0,o.kt)("h3",{id:"what-network-models-are-used-in-cni"},"What Network Models are Used in CNI?"),(0,o.kt)("p",null,"CNI network providers implement their network fabric using either an encapsulated network model such as Virtual Extensible Lan (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#vxlan"},"VXLAN"),") or an unencapsulated network model such as Border Gateway Protocol (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Border_Gateway_Protocol"},"BGP"),")."),(0,o.kt)("h4",{id:"what-is-an-encapsulated-network"},"What is an Encapsulated Network?"),(0,o.kt)("p",null,"This network model provides a logical Layer 2 (L2) network encapsulated over the existing Layer 3 (L3) network topology that spans the Kubernetes cluster nodes. With this model you have an isolated L2 network for containers without needing routing distribution, all at the cost of minimal overhead in terms of processing and increased IP package size, which comes from an IP header generated by overlay encapsulation. Encapsulation information is distributed by UDP ports between Kubernetes workers, interchanging network control plane information about how MAC addresses can be reached. Common encapsulation used in this kind of network model is VXLAN, Internet Protocol Security (IPSec), and IP-in-IP."),(0,o.kt)("p",null,"In simple terms, this network model generates a kind of network bridge extended between Kubernetes workers, where pods are connected."),(0,o.kt)("p",null,"This network model is used when an extended L2 bridge is preferred. This network model is sensitive to L3 network latencies of the Kubernetes workers. If datacenters are in distinct geolocations, be sure to have low latencies between them to avoid eventual network segmentation."),(0,o.kt)("p",null,"CNI network providers using this network model include Flannel, Canal, and Weave."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Encapsulated Network",src:n(83754).Z,width:"767",height:"446"})),(0,o.kt)("h4",{id:"what-is-an-unencapsulated-network"},"What is an Unencapsulated Network?"),(0,o.kt)("p",null,"This network model provides an L3 network to route packets between containers. This model doesn't generate an isolated l2 network, nor generates overhead. These benefits come at the cost of Kubernetes workers having to manage any route distribution that's needed. Instead of using IP headers for encapsulation, this network model uses a network protocol between Kubernetes workers to distribute routing information to reach pods, such as ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Border_Gateway_Protocol"},"BGP"),"."),(0,o.kt)("p",null,"In simple terms, this network model generates a kind of network router extended between Kubernetes workers, which provides information about how to reach pods."),(0,o.kt)("p",null,"This network model is used when a routed L3 network is preferred. This mode dynamically updates routes at the OS level for Kubernetes workers. It's less sensitive to latency."),(0,o.kt)("p",null,"CNI network providers using this network model include Calico and Romana."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unencapsulated Network",src:n(70689).Z,width:"716",height:"415"})),(0,o.kt)("h3",{id:"what-cni-providers-are-provided-by-rancher"},"What CNI Providers are Provided by Rancher?"),(0,o.kt)("p",null,"Out-of-the-box, Rancher provides the following CNI network providers for Kubernetes clusters: Canal, Flannel, Calico and Weave (Weave is available as of v2.2.0). You can choose your CNI network provider when you create new Kubernetes clusters from Rancher."),(0,o.kt)("h4",{id:"canal"},"Canal"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Canal Logo",src:n(32899).Z,width:"328",height:"184"})),(0,o.kt)("p",null,"Canal is a CNI network provider that gives you the best of Flannel and Calico. It allows users to easily deploy Calico and Flannel networking together as a unified networking solution, combining Calico\u2019s network policy enforcement with the rich superset of Calico (unencapsulated) and/or Flannel (encapsulated) network connectivity options."),(0,o.kt)("p",null,"In Rancher, Canal is the default CNI network provider combined with Flannel and VXLAN encapsulation."),(0,o.kt)("p",null,"Kubernetes workers should open UDP port ",(0,o.kt)("inlineCode",{parentName:"p"},"8472")," (VXLAN) and TCP port ",(0,o.kt)("inlineCode",{parentName:"p"},"9099")," (healthcheck). For details, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"the port requirements for user clusters.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(24313).Z,width:"1782",height:"898"})),(0,o.kt)("p",null,"For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/projectcalico/canal"},"Canal GitHub Page.")),(0,o.kt)("h4",{id:"flannel"},"Flannel"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flannel Logo",src:n(13688).Z,width:"328",height:"100"})),(0,o.kt)("p",null,"Flannel is a simple and easy way to configure L3 network fabric designed for Kubernetes. Flannel runs a single binary agent named flanneld on each host, which is responsible for allocating a subnet lease to each host out of a larger, preconfigured address space. Flannel uses either the Kubernetes API or etcd directly to store the network configuration, the allocated subnets, and any auxiliary data (such as the host's public IP). Packets are forwarded using one of several backend mechanisms, with the default encapsulation being ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#vxlan"},"VXLAN"),"."),(0,o.kt)("p",null,"Encapsulated traffic is unencrypted by default. Therefore, flannel provides an experimental backend for encryption, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#ipsec"},"IPSec"),", which makes use of ",(0,o.kt)("a",{parentName:"p",href:"https://www.strongswan.org/"},"strongSwan")," to establish encrypted IPSec tunnels between Kubernetes workers."),(0,o.kt)("p",null,"Kubernetes workers should open UDP port ",(0,o.kt)("inlineCode",{parentName:"p"},"8472")," (VXLAN) and TCP port ",(0,o.kt)("inlineCode",{parentName:"p"},"9099")," (healthcheck). See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"the port requirements for user clusters")," for more details."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flannel Diagram",src:n(16930).Z,width:"1024",height:"456"})),(0,o.kt)("p",null,"For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel"},"Flannel GitHub Page"),"."),(0,o.kt)("h4",{id:"calico"},"Calico"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Calico Logo",src:n(85423).Z,width:"256",height:"256"})),(0,o.kt)("p",null,"Calico enables networking and network policy in Kubernetes clusters across the cloud. Calico uses a pure, unencapsulated IP network fabric and policy engine to provide networking for your Kubernetes workloads. Workloads are able to communicate over both cloud infrastructure and on-prem using BGP."),(0,o.kt)("p",null,"Calico also provides a stateless IP-in-IP encapsulation mode that can be used, if necessary. Calico also offers policy isolation, allowing you to secure and govern your Kubernetes workloads using advanced ingress and egress policies."),(0,o.kt)("p",null,"Kubernetes workers should open TCP port ",(0,o.kt)("inlineCode",{parentName:"p"},"179")," (BGP). See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"the port requirements for user clusters")," for more details."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Calico Diagram",src:n(48972).Z,width:"602",height:"930"})),(0,o.kt)("p",null,"For more information, see the following pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.projectcalico.org/"},"Project Calico Official Site")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/projectcalico/calico"},"Project Calico GitHub Page"))),(0,o.kt)("h4",{id:"weave"},"Weave"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Weave Logo",src:n(11636).Z,width:"229",height:"220"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,o.kt)("p",null,"Weave enables networking and network policy in Kubernetes clusters across the cloud. Additionally, it support encrypting traffic between the peers."),(0,o.kt)("p",null,"Kubernetes workers should open TCP port ",(0,o.kt)("inlineCode",{parentName:"p"},"6783")," (control port), UDP port ",(0,o.kt)("inlineCode",{parentName:"p"},"6783")," and UDP port ",(0,o.kt)("inlineCode",{parentName:"p"},"6784")," (data ports). See the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"port requirements for user clusters")," for more details."),(0,o.kt)("p",null,"For more information, see the following pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.weave.works/"},"Weave Net Official Site"))),(0,o.kt)("h3",{id:"cni-features-by-provider"},"CNI Features by Provider"),(0,o.kt)("p",null,"The following table summarizes the different features available for each CNI network provider provided by Rancher."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Provider"),(0,o.kt)("th",{parentName:"tr",align:null},"Network Model"),(0,o.kt)("th",{parentName:"tr",align:null},"Route Distribution"),(0,o.kt)("th",{parentName:"tr",align:null},"Network Policies"),(0,o.kt)("th",{parentName:"tr",align:null},"Mesh"),(0,o.kt)("th",{parentName:"tr",align:null},"External Datastore"),(0,o.kt)("th",{parentName:"tr",align:null},"Encryption"),(0,o.kt)("th",{parentName:"tr",align:null},"Ingress/Egress Policies"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Canal"),(0,o.kt)("td",{parentName:"tr",align:null},"Encapsulated (VXLAN)"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"K8S API"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Flannel"),(0,o.kt)("td",{parentName:"tr",align:null},"Encapsulated (VXLAN)"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"K8S API"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Calico"),(0,o.kt)("td",{parentName:"tr",align:null},"Encapsulated (VXLAN,IPIP) OR Unencapsulated"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Etcd and K8S API"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Weave"),(0,o.kt)("td",{parentName:"tr",align:null},"Encapsulated"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Network Model: Encapsulated or unencapsulated. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"#what-network-models-are-used-in-cni"},"What Network Models are Used in CNI?"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Route Distribution: An exterior gateway protocol designed to exchange routing and reachability information on the Internet. BGP can assist with pod-to-pod networking between clusters. This feature is a must on unencapsulated CNI network providers, and it is typically done by BGP. If you plan to build clusters split across network segments, route distribution is a feature that's nice-to-have.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Network Policies: Kubernetes offers functionality to enforce rules about which services can communicate with each other using network policies. This feature is stable as of Kubernetes v1.7 and is ready to use with certain networking plugins.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mesh: This feature allows service-to-service networking communication between distinct Kubernetes clusters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"External Datastore: CNI network providers with this feature need an external datastore for its data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Encryption: This feature allows cyphered and secure network control and data planes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ingress/Egress Policies: This feature allows you to manage routing control for both Kubernetes and non-Kubernetes communications."))),(0,o.kt)("h4",{id:"cni-community-popularity"},"CNI Community Popularity"),(0,o.kt)("p",null,"The following table summarizes different GitHub metrics to give you an idea of each project's popularity and activity. This data was collected in January 2020."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Provider"),(0,o.kt)("th",{parentName:"tr",align:null},"Project"),(0,o.kt)("th",{parentName:"tr",align:null},"Stars"),(0,o.kt)("th",{parentName:"tr",align:null},"Forks"),(0,o.kt)("th",{parentName:"tr",align:null},"Contributors"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Canal"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/projectcalico/canal"},"https://github.com/projectcalico/canal")),(0,o.kt)("td",{parentName:"tr",align:null},"614"),(0,o.kt)("td",{parentName:"tr",align:null},"89"),(0,o.kt)("td",{parentName:"tr",align:null},"19")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"flannel"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/coreos/flannel"},"https://github.com/coreos/flannel")),(0,o.kt)("td",{parentName:"tr",align:null},"4977"),(0,o.kt)("td",{parentName:"tr",align:null},"1.4k"),(0,o.kt)("td",{parentName:"tr",align:null},"140")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Calico"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/projectcalico/calico"},"https://github.com/projectcalico/calico")),(0,o.kt)("td",{parentName:"tr",align:null},"1534"),(0,o.kt)("td",{parentName:"tr",align:null},"429"),(0,o.kt)("td",{parentName:"tr",align:null},"135")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Weave"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/weaveworks/weave/"},"https://github.com/weaveworks/weave/")),(0,o.kt)("td",{parentName:"tr",align:null},"5737"),(0,o.kt)("td",{parentName:"tr",align:null},"559"),(0,o.kt)("td",{parentName:"tr",align:null},"73")))),(0,o.kt)("br",null),"### Which CNI Provider Should I Use?",(0,o.kt)("p",null,"It depends on your project needs. There are many different providers, which each have various features and options. There isn't one provider that meets everyone's needs."),(0,o.kt)("p",null,"As of Rancher v2.0.7, Canal is the default CNI network provider. We recommend it for most use cases. It provides encapsulated networking for containers with Flannel, while adding Calico network policies that can provide project/namespace isolation in terms of networking."),(0,o.kt)("h3",{id:"how-can-i-configure-a-cni-network-provider"},"How can I configure a CNI network provider?"),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"Cluster Options")," on how to configure a network provider for your cluster. For more advanced configuration options, please see how to configure your cluster using a ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#cluster-config-file"},"Config File")," and the options for ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/"},"Network Plug-ins"),"."))}k.isMDXComponent=!0},48972:function(e,t,n){t.Z=n.p+"assets/images/calico-diagram-3e0d002feecad5d7ecde73da073b95be.svg"},85423:function(e,t,n){t.Z=n.p+"assets/images/calico-logo-876c7e5f55ffe5a9feb68c8eac7f6f09.png"},24313:function(e,t,n){t.Z=n.p+"assets/images/canal-diagram-098d93441385aab94e0a23e0a8cdd7b0.png"},32899:function(e,t,n){t.Z=n.p+"assets/images/canal-logo-59b1e2e7cb6ef69952216bc6c8778fea.png"},37685:function(e,t,n){t.Z=n.p+"assets/images/cni-logo-4fc06f259de435a65ca64a52bd719a96.png"},83754:function(e,t,n){t.Z=n.p+"assets/images/encapsulated-network-0c75db46568d5b2636dad4a8c28d3cc4.png"},16930:function(e,t,n){t.Z=n.p+"assets/images/flannel-diagram-5d842974de10ad38569f46e70836f11f.png"},13688:function(e,t,n){t.Z=n.p+"assets/images/flannel-logo-72cb4d5923f7a0be32a1148dc78d5c50.png"},70689:function(e,t,n){t.Z=n.p+"assets/images/unencapsulated-network-b87922f280aa17322e6485b81855dd4a.png"},11636:function(e,t){t.Z="data:image/png;base64,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"}}]);