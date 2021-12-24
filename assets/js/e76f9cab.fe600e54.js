(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[750],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=o(t),d=i,h=c["".concat(l,".").concat(d)]||c[d]||p[d]||a;return t?r.createElement(h,u(u({ref:n},m),{},{components:t})):r.createElement(h,u({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,u=new Array(a);u[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,u[1]=s;for(var o=2;o<a;o++)u[o]=t[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4747:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),u={sidebar_label:"15. 3Sum",sidebar_position:5},s={unversionedId:"blind-curated-75/5 three sum",id:"blind-curated-75/5 three sum",isDocsHomePage:!1,title:"15. 3Sum",description:"Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",source:"@site/docs/blind-curated-75/5 three sum.md",sourceDirName:"blind-curated-75",slug:"/blind-curated-75/5 three sum",permalink:"/algorithm-sharpify/docs/blind-curated-75/5 three sum",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/blind-curated-75/5 three sum.md",version:"current",sidebar_label:"15. 3Sum",sidebarPosition:5,frontMatter:{sidebar_label:"15. 3Sum",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"11. Container With Most Water",permalink:"/algorithm-sharpify/docs/blind-curated-75/4 container with most water"},next:{title:"6 remove nth node from end of list",permalink:"/algorithm-sharpify/docs/blind-curated-75/6 remove nth node from end of list"}},l=[{value:"Solution",id:"solution",children:[{value:"Java",id:"java",children:[]},{value:"Use Set to manage duplicates",id:"use-set-to-manage-duplicates",children:[]}]}],o={toc:l};function m(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Given an integer array nums, return all the triplets [nums","[i]",", nums","[j]",", nums","[k]","] such that i != j, i != k, and j != k, and nums","[i]"," + nums","[j]"," + nums","[k]"," == 0."),(0,a.kt)("p",null,"Notice that the solution set must not contain duplicate triplets."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Input: nums = [3,2,4], target = 6\nOutput: [1,2]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Input: nums = [3,3], target = 6\nOutput: [0,1]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constrains:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2 <= nums.length <= 104")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-109 <= nums[i] <= 109")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-109 <= target <= 109")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Only one valid answer exists."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow-up:")," Can you come up with an algorithm that is less than ",(0,a.kt)("inlineCode",{parentName:"p"},"O(n^2)")," time complexity?"),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("h3",{id:"java"},"Java"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> result = new ArrayList<>();\n        for(int i = 0; i < nums.length - 2; i++) {\n            if(i == 0 || (i > 0 && nums[i] != nums[i - 1])) {\n                int low = i + 1, high = nums.length - 1;\n                int sum = -nums[i];\n                while(low < high) {\n                    if(nums[low] + nums[high] == sum) {\n                        result.add(Arrays.asList(nums[i], nums[low], nums[high]));\n                        while(low < high && nums[low] == nums[low + 1]) {\n                            low++;\n                        }\n                        while(low < hight && nums[high] == nums[high - 1]) {\n                            high--;\n                        }\n                        low++;\n                        high--;\n                    } else if(nums[low] + nums[high] < sum) {\n                        low++;\n                    } else {\n                        high--;\n                    }\n                }\n            }\n        }\n        return result;\n    }\n}\n")),(0,a.kt)("h3",{id:"use-set-to-manage-duplicates"},"Use Set to manage duplicates"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public List<List<Integer>> threeSum(int[] nums) {\n    if (nums.length < 3) {\n        return Collections.emptyList();\n    }\n    Set<List<Integer>> result = new HashSet<>();\n    Arrays.sort(nums);\n    for(int i = 0; i < nums.length - 2; i++) {\n        int j = i + 1, k = nums.length - 1;\n        while(j < k) {\n            int sum = nums[i] + nums[j] + nums[k];\n            if(sum == 0) {\n                result.add(Arrays.asList(nums[i], nums[j], nums[k]));\n                j++;\n                k--;\n            } else if( sum > 0) {\n                k--; \n            } else {\n                j++\n            }\n        }\n    }\n    return new ArrayList<>(result);\n}\n")))}m.isMDXComponent=!0}}]);