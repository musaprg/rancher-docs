"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19214],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,g=h["".concat(u,".").concat(d)]||h[d]||p[d]||i;return n?o.createElement(g,s(s({ref:t},l),{},{components:n})):o.createElement(g,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],a={title:"Group Permissions with Shibboleth and OpenLDAP",weight:1,aliases:["/rancher/v2.x/en/admin-settings/authentication/shibboleth/about/"]},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions",title:"Group Permissions with Shibboleth and OpenLDAP",description:"This page provides background information and context for Rancher users who intend to set up the Shibboleth authentication provider in Rancher.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions.md",tags:[],version:"2.5",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Group Permissions with Shibboleth and OpenLDAP",weight:1,aliases:["/rancher/v2.x/en/admin-settings/authentication/shibboleth/about/"]},sidebar:"tutorialSidebar",previous:{title:"Configuring Shibboleth (SAML)",permalink:"/v2.5/pages-for-subheaders/configure-shibboleth-saml"},next:{title:"Role-Based Access Control (RBAC)",permalink:"/v2.5/pages-for-subheaders/manage-role-based-access-control-rbac"}},l={},p=[{value:"Terminology",id:"terminology",level:3},{value:"Adding OpenLDAP Group Permissions to Rancher Resources",id:"adding-openldap-group-permissions-to-rancher-resources",level:3}],h={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page provides background information and context for Rancher users who intend to set up the Shibboleth authentication provider in Rancher. "),(0,i.kt)("p",null,"Because Shibboleth is a SAML provider, it does not support searching for groups. While a Shibboleth integration can validate user credentials, it can't be used to assign permissions to groups in Rancher without additional configuration."),(0,i.kt)("p",null,"One solution to this problem is to configure an OpenLDAP identity provider. With an OpenLDAP back end for Shibboleth, you will be able to search for groups in Rancher and assign them to resources such as clusters, projects, or namespaces from the Rancher UI."),(0,i.kt)("h3",{id:"terminology"},"Terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shibboleth")," is a single sign-on log-in system for computer networks and the Internet. It allows people to sign in using just one identity to various systems. It validates user credentials, but does not, on its own, handle group memberships."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SAML:")," Security Assertion Markup Language, an open standard for exchanging authentication and authorization data between an identity provider and a service provider."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OpenLDAP:")," a free, open-source implementation of the Lightweight Directory Access Protocol (LDAP). It is used to manage an organization\u2019s computers and users. OpenLDAP is useful for Rancher users because it supports groups. In Rancher, it is possible to assign permissions to groups so that they can access resources such as clusters, projects, or namespaces, as long as the groups already exist in the identity provider."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IdP or IDP:")," An identity provider. OpenLDAP is an example of an identity provider.")),(0,i.kt)("h3",{id:"adding-openldap-group-permissions-to-rancher-resources"},"Adding OpenLDAP Group Permissions to Rancher Resources"),(0,i.kt)("p",null,"The diagram below illustrates how members of an OpenLDAP group can access resources in Rancher that the group has permissions for."),(0,i.kt)("p",null,"For example, a cluster owner could add an OpenLDAP group to a cluster so that they have permissions view most cluster level resources and create new projects. Then the OpenLDAP group members will have access to the cluster as soon as they log in to Rancher."),(0,i.kt)("p",null,"In this scenario, OpenLDAP allows the cluster owner to search for groups when assigning persmissions. Without OpenLDAP, the functionality to search for groups would not be supported."),(0,i.kt)("p",null,"When a member of the OpenLDAP group logs in to Rancher, she is redirected to Shibboleth and enters her username and password."),(0,i.kt)("p",null,"Shibboleth validates her credentials, and retrieves user attributes from OpenLDAP, including groups. Then Shibboleth sends a SAML assertion to Rancher including the user attributes. Rancher uses the group data so that she can access all of the resources and permissions that her groups have permissions for."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Adding OpenLDAP Group Permissions to Rancher Resources",src:n(48277).Z,width:"656",height:"730"})))}d.isMDXComponent=!0},48277:function(e,t,n){t.Z=n.p+"assets/images/shibboleth-with-openldap-groups-f337a46dd2c87e8342c13b8486a8c7b9.svg"}}]);