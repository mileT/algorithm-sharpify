(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[9832],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4449:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={sidebar_label:"Array & Sorting Algorithm",sidebar_position:1},l={unversionedId:"lai-algorithm/array_sortingalgorithm",id:"lai-algorithm/array_sortingalgorithm",isDocsHomePage:!1,title:"array_sortingalgorithm",description:"// Add to the top of the file below the front matter.",source:"@site/docs/lai-algorithm/array_sortingalgorithm.md",sourceDirName:"lai-algorithm",slug:"/lai-algorithm/array_sortingalgorithm",permalink:"/algorithm-sharpify/docs/lai-algorithm/array_sortingalgorithm",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/lai-algorithm/array_sortingalgorithm.md",version:"current",sidebar_label:"Array & Sorting Algorithm",sidebarPosition:1,frontMatter:{sidebar_label:"Array & Sorting Algorithm",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ood1 copy",permalink:"/algorithm-sharpify/docs/lai-ood/ood1 copy"},next:{title:"recursion1",permalink:"/algorithm-sharpify/docs/lai-algorithm/recursion1"}},s=[{value:"A complete answer will include the following:",id:"a-complete-answer-will-include-the-following",children:[]},{value:"Selection Sort",id:"selection-sort",children:[]},{value:"Q2",id:"q2",children:[]},{value:"Merge Sort",id:"merge-sort",children:[{value:"similar questions",id:"similar-questions",children:[]}]},{value:"Quick Sort",id:"quick-sort",children:[{value:"Q2.4 Rainbow sort:",id:"q24-rainbow-sort",children:[]}]}],c={toc:s};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"// Add to the top of the file below the front matter.\nimport useBaseUrl from '@docusaurus/useBaseUrl';"),(0,i.kt)("h2",{id:"a-complete-answer-will-include-the-following"},"A complete answer will include the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Document your assumptions"),(0,i.kt)("li",{parentName:"ol"},"Explain your approach and how you intend to solove the problem"),(0,i.kt)("li",{parentName:"ol"},"Provide code comments where applicable"),(0,i.kt)("li",{parentName:"ol"},"Expalin the big-O run time complexity of your solution. Justify your answer"),(0,i.kt)("li",{parentName:"ol"},"Identify any additional data structrues you used and justify why you used them."),(0,i.kt)("li",{parentName:"ol"},"Only provide your best answer to each part of the question")),(0,i.kt)("h2",{id:"selection-sort"},"Selection Sort"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// slection sort an array a[] with size n in ascending order\nvoid SelectionSort(int a[], int n) {\n    int global, temp;\n    for(int i = 0; i < n-1; i++) { // outer loop: how many iterations\n        global = i;\n        for(int j = i + 1; j < n; j++) { // inner loop: find the global min from the rest elements\n            if(a[j] < a[global]) {\n                // record the index of the smallest element.\n                glocal = j;\n            }\n        }\n        temp = a[i];\n        a[i] = a[global];\n        a[global] = tem; \n    }\n}\n")),(0,i.kt)("p",null,"Time complexity analysis\n1 + 2 + 3 + ... + n = n(n + 1)/2 = O(n^2)"),(0,i.kt)("h2",{id:"q2"},"Q2"),(0,i.kt)("p",null,"Given an array stored in stack1, how to sort the numbers by using additional two stacks"),(0,i.kt)("h2",{id:"merge-sort"},"Merge Sort"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mergesort",src:r(5190).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<int> mergeSort(vector<int>& a, int left, int right) {\n    vector<int> solution;\n    if(left == right) {\n        solution.push_back(array[left]);\n        return solution;\n    }\n    int mid = left + (right - left) / 2;\n    vector<int> solution_left = mergeSort(a, left, mid);\n    vector<int> solution_right = mergeSort(a, mid + 1, right);\n    solution = combine(solution_left, solution_right);\n    return solution;\n}\n")),(0,i.kt)("p",null,"Time = O(nlogn)\nSpace = O(n)"),(0,i.kt)("h3",{id:"similar-questions"},"similar questions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"merge sort a linkedlist"),(0,i.kt)("li",{parentName:"ol"},"reverse merge sort")),(0,i.kt)("h2",{id:"quick-sort"},"Quick Sort"),(0,i.kt)("p",null,"xxxxxxxDxxxxx\n/      \\\nxxTxx     xxxJX\n\u4e24\u4e2a\u6321\u677f i\uff0c j \u4e09\u4e2a\u533a\u57df\ni \u7684\u5de6\u4fa7\uff0c \u4e0d\u5305\u62eci \u5168\u90e8\u4e3a\u6bd4 pivot \u5c0f\u7684\u6570\ni \u548c j \u4e4b\u95f4\u4e3a\u672a\u77e5\u63a2\u7d22\u533a\u57df\nj \u7684\u53f3\u4fa7 \u4e0d\u5305\u62ec j \u5168\u90e8\u4e3a\u6bd4pivot \u5927\u7684\u6570"),(0,i.kt)("h3",{id:"q24-rainbow-sort"},"Q2.4 Rainbow sort:"))}u.isMDXComponent=!0},5190:function(e,t,r){"use strict";t.Z=r.p+"assets/images/class1_mergesort-7267aefddbb78ec9c018a7399610941a.png"}}]);