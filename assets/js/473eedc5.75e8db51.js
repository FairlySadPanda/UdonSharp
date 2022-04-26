"use strict";(self.webpackChunkudon_sharp=self.webpackChunkudon_sharp||[]).push([[135],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={id:"runtime-exception-debugging",title:"Runtime Exception Debugging",hide_title:!0},c="Runtime Exception Debugging",l={unversionedId:"runtime-exception-debugging",id:"runtime-exception-debugging",title:"Runtime Exception Debugging",description:"You will often find yourself with programs that can only be debugged in-game. In order to catch these errors and make them easier to understand, U# includes a runtime exception watcher that will look for exceptions from VRChat's output log. The watcher will then output the script and line that threw that exception to your editor's log.",source:"@site/docs/runtime-exception-debugging.md",sourceDirName:".",slug:"/runtime-exception-debugging",permalink:"/runtime-exception-debugging",editUrl:"https://github.com/vrchat-community/UdonSharp/edit/master/Docs/Source/runtime-exception-debugging.md",tags:[],version:"current",frontMatter:{id:"runtime-exception-debugging",title:"Runtime Exception Debugging",hide_title:!0},sidebar:"mainSidebar",previous:{title:"Random Tips & Performance Pointers",permalink:"/random-tips-&-performance-pointers"},next:{title:"Class Exposure Tree",permalink:"/class-exposure-tree"}},s={},p=[{value:"Setup instructions",id:"setup-instructions",level:3},{value:"Editor setup",id:"editor-setup",level:4},{value:"VRChat client setup",id:"vrchat-client-setup",level:4}],d={toc:p};function g(e){var t=e.components,u=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runtime-exception-debugging"},"Runtime Exception Debugging"),(0,o.kt)("p",null,"You will often find yourself with programs that can only be debugged in-game. In order to catch these errors and make them easier to understand, U# includes a runtime exception watcher that will look for exceptions from VRChat's output log. The watcher will then output the script and line that threw that exception to your editor's log."),(0,o.kt)("h3",{id:"setup-instructions"},"Setup instructions"),(0,o.kt)("h4",{id:"editor-setup"},"Editor setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your editor open the project settings menu ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Project Settings",src:n(7929).Z,width:"175",height:"300"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Enable ",(0,o.kt)("inlineCode",{parentName:"li"},"Listen for client exceptions")," in the Udon Sharp settings ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Listen for Client Exceptions",src:n(3933).Z,width:"485",height:"300"})),(0,o.kt)("h4",{id:"vrchat-client-setup"},"VRChat client setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right-click on VRChat in your Steam library and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Properties..."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Steam VRChat Properties",src:n(2636).Z,width:"421",height:"272"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Set Launch Options..."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set Launch Options",src:n(6245).Z,width:"319",height:"300"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the launch argument ",(0,o.kt)("inlineCode",{parentName:"li"},"--enable-udon-debug-logging")," to the launch options and click OK")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Steam Launch Args",src:n(6043).Z,width:"560",height:"266"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now once you have the client and editor setup, you just need to start your game and load into the world. Any errors that are thrown in your world will be output to your editor's console. This is an example of what the error will look like, you probably won't be getting the same error and it won't be in the same code file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error in Console",src:n(8962).Z,width:"1453",height:"168"})))}g.isMDXComponent=!0},7929:function(e,t,n){t.Z=n.p+"assets/images/red-1-e4116cbb9dd70115cf8d8854bf4a4db5.png"},3933:function(e,t,n){t.Z=n.p+"assets/images/red-2-167657c74b0a08a78e83b48cc1c2f372.png"},2636:function(e,t,n){t.Z=n.p+"assets/images/red-3-5a1da40f607c3715439a8117059e49ac.png"},6245:function(e,t,n){t.Z=n.p+"assets/images/red-4-4e9868ef5c3481a94ad710aedeb249c4.png"},6043:function(e,t,n){t.Z=n.p+"assets/images/red-5-9872c6bbe562efdf34649c167bad46f8.png"},8962:function(e,t,n){t.Z=n.p+"assets/images/red-6-890680cd46df002c531dc4422acceef8.png"}}]);