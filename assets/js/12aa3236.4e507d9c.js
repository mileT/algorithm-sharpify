(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[9183],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(a,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8460:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return a},default:function(){return l}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s={},u={unversionedId:"DFS/2 subset 2",id:"DFS/2 subset 2",isDocsHomePage:!1,title:"2 subset 2",description:"`java",source:"@site/docs/DFS/2 subset 2.md",sourceDirName:"DFS",slug:"/DFS/2 subset 2",permalink:"/algorithm-sharpify/docs/DFS/2 subset 2",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/DFS/2 subset 2.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1 subset",permalink:"/algorithm-sharpify/docs/DFS/1 subset"},next:{title:"Leetcode 1469",permalink:"/algorithm-sharpify/docs/BFS/1469 Find All The Lonely Nodes"}},a=[],c={toc:a};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public List<List<Integer>> subsetsWithDup(int[] nums) {\n    List<List<Integer>> result = new ArrayList();\n    Arrays.sort(nums);\n    backtrack(result, new ArrayList<Integer>(), nums, 0);\n    return result;\n}\n\nprivate void backtrack(List<List<Integer>> result, List<Integer> current, int[] nums, int start) {\n    result.add(new ArrayList<>(current));\n    for(i = start; i < nums.length; i++) {\n        if(i > start && nums[i] == nums[i - 1]) {\n            continue;\n        }\n        current.add(nums[i]);\n        backtrack(result, current, nums, i + 1);\n        current.remove(current.size() - 1);\n    }\n}\n")))}l.isMDXComponent=!0}}]);