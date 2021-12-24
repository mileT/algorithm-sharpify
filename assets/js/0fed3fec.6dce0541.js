(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[7688],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8761:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={sidebar_label:"graph",sidebar_position:5},l={unversionedId:"lai-algorithm/graph",id:"lai-algorithm/graph",isDocsHomePage:!1,title:"graph",description:"1. \u8868\u8c61\u4e0a\uff1a",source:"@site/docs/lai-algorithm/graph.md",sourceDirName:"lai-algorithm",slug:"/lai-algorithm/graph",permalink:"/algorithm-sharpify/docs/lai-algorithm/graph",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/lai-algorithm/graph.md",version:"current",sidebar_label:"graph",sidebarPosition:5,frontMatter:{sidebar_label:"graph",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"binary tree",permalink:"/algorithm-sharpify/docs/lai-algorithm/binary tree"},next:{title:"DFS",permalink:"/algorithm-sharpify/docs/lai-algorithm/DFS"}},c=[{value:"Q1,",id:"q1",children:[]},{value:"Clasical version 1",id:"clasical-version-1",children:[]},{value:"2D Space binary search",id:"2d-space-binary-search",children:[]},{value:"how to find the cloest to the target number?",id:"how-to-find-the-cloest-to-the-target-number",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8868\u8c61\u4e0a\uff1a"),(0,i.kt)("li",{parentName:"ol"},"Graph Search Algorithm BFS")),(0,i.kt)("h1",{id:"bfs-1"},"BFS 1"),(0,i.kt)("p",null,"BFS1, use queue,  expand & generate"),(0,i.kt)("h1",{id:"bfs-2"},"BFS 2"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Initial state start node"),(0,i.kt)("li",{parentName:"ol"},"Node expansion/Generation rule"),(0,i.kt)("li",{parentName:"ol"},"Termination condition ( p_queue empty)"),(0,i.kt)("li",{parentName:"ol"},"de-duplicate if needed ")),(0,i.kt)("h2",{id:"q1"},"Q1,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public int a_pow_b(int a, int b) {\n    if(b == 0) {\n        return 1;\n    }\n   int halfResult = a_pow_b(a, b/2);\n    if(n % 2 == 0 ) {\n        return halfResult * halfResult;\n    } else {\n        return halfResult * halfResult * a;\n    }\n    \n}\n")),(0,i.kt)("h1",{id:"binary-search"},"Binary Search"),(0,i.kt)("h2",{id:"clasical-version-1"},"Clasical version 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int binarySearch(int[] a, int target) {\n    if(a == null || a.length == 0) {\n        return -1;\n    }\n    int left = 0, right = a.length - 1;\n    while(left <= right){\n        int mid = left +(right - left) / 2;\n        if(target == a[mid]) {\n            return mid;\n        }\n        if(target < a[mid]) {\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    return -1;\n}\n")),(0,i.kt)("h2",{id:"2d-space-binary-search"},"2D Space binary search"),(0,i.kt)("p",null,"1   2    3   4\n5   6    7   8\n9   10   11  12\nhow to map back to get coordiates in 2D array\nindex => ","[index / col, index % col]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public boolean binarySearch2D(int[][] matrix, int target) {\n    if(matrix.length == 0 || matrix[0].length == 0) {\n        return false;\n    }\n    int row = matrix.length;\n    int col = matrix[0].length;\n    int i = 0;\n    int j = row * col - 1;\n    while(i <= j) {\n        int mid = i + (j - i) / 2;\n        int r = mid / col;\n        int c = mid % col;\n        if(matrix[r][c] == target) {\n            return true;\n        } else if ( matrix[r][c] > target) {\n            j = mid - 1;\n        } else {\n            i = mid + 1;\n        }\n    }\n    return false;\n}\n")),(0,i.kt)("h2",{id:"how-to-find-the-cloest-to-the-target-number"},"how to find the cloest to the target number?"),(0,i.kt)("p",null,"You have to be very sure which part to remove, don't be too aggressive\n// stop 1 step early before previous case\nwhile(left < right - 1) {"),(0,i.kt)("p",null,"}\n// post processing"))}u.isMDXComponent=!0}}]);