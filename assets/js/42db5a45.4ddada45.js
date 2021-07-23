(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[1153],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8570:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),u={sidebar_label:"1. Two Sum",sidebar_position:1},i={unversionedId:"blind-curated-75/1 two sum",id:"blind-curated-75/1 two sum",isDocsHomePage:!1,title:"1. Two Sum",description:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",source:"@site/docs/blind-curated-75/1 two sum.md",sourceDirName:"blind-curated-75",slug:"/blind-curated-75/1 two sum",permalink:"/algorithm-sharpify/docs/blind-curated-75/1 two sum",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/blind-curated-75/1 two sum.md",version:"current",sidebar_label:"1. Two Sum",sidebarPosition:1,frontMatter:{sidebar_label:"1. Two Sum",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Docusaurus Tutorial Intro",permalink:"/algorithm-sharpify/docs/blind-curated-75/10 search in rotated sorted array"}},l=[{value:"Solution",id:"solution",children:[{value:"Java",id:"java",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Given an array of integers ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),", return indices of the two numbers such that they add up to ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,o.kt)("p",null,"You may assume that each input would have exactly one solution, and you may not use the same element twice."),(0,o.kt)("p",null,"You can return the answer in any order."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nOutput: Because nums[0] + nums[1] == 9, we return [0, 1].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Input: nums = [3,2,4], target = 6\nOutput: [1,2]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Input: nums = [3,3], target = 6\nOutput: [0,1]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constrains:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= nums.length <= 104")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-109 <= nums[i] <= 109")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-109 <= target <= 109")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Only one valid answer exists."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow-up:")," Can you come up with an algorithm that is less than ",(0,o.kt)("inlineCode",{parentName:"p"},"O(n^2)")," time complexity?"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("h3",{id:"java"},"Java"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        int[] result = new int[2];\n        Map<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i = 0; i < nums.length; i++) {\n            int second = target - nums[i];\n            if(map.containsKey(second)) {\n                result[0] = map.get(second);\n                result[1] = i;\n            }\n            map.put(nums[i], i);\n        }\n        return result;\n    }\n}\n")))}p.isMDXComponent=!0}}]);