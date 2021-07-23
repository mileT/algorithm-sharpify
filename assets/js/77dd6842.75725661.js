(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[7128],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=i,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8741:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={sidebar_label:"Recursion 2",sidebar_position:10},l={unversionedId:"lai-algorithm/recursion2",id:"lai-algorithm/recursion2",isDocsHomePage:!1,title:"recursion2",description:"Q1",source:"@site/docs/lai-algorithm/recursion2.md",sourceDirName:"lai-algorithm",slug:"/lai-algorithm/recursion2",permalink:"/algorithm-sharpify/docs/lai-algorithm/recursion2",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/lai-algorithm/recursion2.md",version:"current",sidebar_label:"Recursion 2",sidebarPosition:10,frontMatter:{sidebar_label:"Recursion 2",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"recursion1",permalink:"/algorithm-sharpify/docs/lai-algorithm/recursion1"},next:{title:"N-Queens",permalink:"/algorithm-sharpify/docs/leetcode/leetcode51"}},c=[{value:"Q1",id:"q1",children:[]},{value:"Q2.1",id:"q21",children:[]},{value:"Q2.2 How to print 2D array in spiral order (NxN)",id:"q22-how-to-print-2d-array-in-spiral-order-nxn",children:[]},{value:"LinkedList",id:"linkedlist",children:[]},{value:"String",id:"string",children:[{value:"Q4.2 Abbreviation matching",id:"q42-abbreviation-matching",children:[]}]},{value:"Tree",id:"tree",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"q1"},"Q1"),(0,o.kt)("h2",{id:"q21"},"Q2.1"),(0,o.kt)("h2",{id:"q22-how-to-print-2d-array-in-spiral-order-nxn"},"Q2.2 How to print 2D array in spiral order (NxN)"),(0,o.kt)("h2",{id:"linkedlist"},"LinkedList"),(0,o.kt)("p",null,"Q3 "),(0,o.kt)("h2",{id:"string"},"String"),(0,o.kt)("p",null,"Q4.1"),(0,o.kt)("h3",{id:"q42-abbreviation-matching"},"Q4.2 Abbreviation matching"),(0,o.kt)("p",null,'A word such as "book" can be abbreviate to 4, 1o1k, b3, b2k, etc. Given a string and an abbreviation, return if the string matches the abbreviation. Assume the original string only contains alphabetic characters. For example: "s11d" matches "sophisticated". '),(0,o.kt)("h2",{id:"tree"},"Tree"),(0,o.kt)("p",null,"Q5.1.1 get tree height\nQ5.1.2 how to store how many nodes in each nodes's left-subtree?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class TreeNode {\n    TreeNode left;\n    TreeNode right;\n    int value;\n    int total_left; // how many nodes belong to its left-subtree\n}\n")),(0,o.kt)("p",null,"way of thinking"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"what do you expect from left/right child? usually it is the return type of the recursion function"),(0,o.kt)("li",{parentName:"ol"},"what do you want to do in the current layer"),(0,o.kt)("li",{parentName:"ol"},"what do you want to report to your parent?\nQ5.1.3 Find the node with the mat difference in the total number of decendents in its left subtree and right subtree\nQ5.1.4 Lowest Common Ancestor (LCA)")))}u.isMDXComponent=!0}}]);