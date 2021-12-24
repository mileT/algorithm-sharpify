(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[2856],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9053:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s},default:function(){return u}});var r=n(2122),l=n(9756),o=(n(7294),n(3905)),i={sidebar_label:"21. Merge Two Sorted Lists",sidebar_position:8},a={unversionedId:"blind-curated-75/8 merge two sorted lsits",id:"blind-curated-75/8 merge two sorted lsits",isDocsHomePage:!1,title:"8 merge two sorted lsits",description:"21. Merge Two Sorted Lists",source:"@site/docs/blind-curated-75/8 merge two sorted lsits.md",sourceDirName:"blind-curated-75",slug:"/blind-curated-75/8 merge two sorted lsits",permalink:"/algorithm-sharpify/docs/blind-curated-75/8 merge two sorted lsits",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/blind-curated-75/8 merge two sorted lsits.md",version:"current",sidebar_label:"21. Merge Two Sorted Lists",sidebarPosition:8,frontMatter:{sidebar_label:"21. Merge Two Sorted Lists",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7 valid parentheses",permalink:"/algorithm-sharpify/docs/blind-curated-75/7 valid parentheses"},next:{title:"9 merge k sorted lists",permalink:"/algorithm-sharpify/docs/blind-curated-75/9 merge k sorted lists"}},s=[{value:"Solution",id:"solution",children:[{value:"Recursion",id:"recursion",children:[]},{value:"compare and then link the smaller node to the merged linked list",id:"compare-and-then-link-the-smaller-node-to-the-merged-linked-list",children:[]}]}],d={toc:s};function u(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",{start:21},(0,o.kt)("li",{parentName:"ol"},"Merge Two Sorted Lists")),(0,o.kt)("p",null,"Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Input: l1 = [1,2,4], l2 = [1,3,4]\nOutput: [1,1,2,3,4,4]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Input: l1 = [], l2 = []\nOutput: []\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Input: l1 = [], l2 = [0]\nOutput: [0]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constrains:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in both lists is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[0, 50]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100")),(0,o.kt)("li",{parentName:"ul"},"Both ",(0,o.kt)("inlineCode",{parentName:"li"},"l1")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"l2")," are sorted in non-decreasing order.")),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("h3",{id:"recursion"},"Recursion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ListNode {\n    int val;\n    ListNode next;\n    ListNode() {}\n    ListNode(int val) {\n        this.val = val;\n    }\n    ListNode(int val, ListNode next) {\n        this.val = val;\n        this.next = next;\n    }\n}\nclass Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        if(l1 == null) return l2;\n        if(l2 == null) return l1;\n        if(l1.val < l2.val) {\n            l1.next = mergeTwoLists(l1.next, l2);\n            return l1;\n        } else {\n            l2.next = mergeTwoLists(l1, l2.next);\n            return l2;\n        }\n    }\n}\n")),(0,o.kt)("h3",{id:"compare-and-then-link-the-smaller-node-to-the-merged-linked-list"},"compare and then link the smaller node to the merged linked list"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"}," class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummyNode = new ListNode(0);\n        ListNode indexNode = dummyNode;\n        while(l1 != null && l2 != null) {\n            if(l1.val < l2.val) {\n                indexNode.next = l1;\n                indexNode = l1;\n                l1 = l1.next;\n            } else {\n                indexNode.next = l2;\n                indexNode = l2;\n                l2 = l2.next;\n            }\n        }\n        if(l1 != null) {\n            indexNode.next = l1;\n        } else {\n            indexNode.next = l2;\n        }\n        return dummyNode.next;\n    }\n}\n")))}u.isMDXComponent=!0}}]);