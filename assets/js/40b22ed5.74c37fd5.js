(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[3356],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9204:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={sidebar_label:"19. Remove Nth Node From End of List",sidebar_position:6},l={unversionedId:"blind-curated-75/6 remove nth node from end of list",id:"blind-curated-75/6 remove nth node from end of list",isDocsHomePage:!1,title:"6 remove nth node from end of list",description:"19. Remove Nth Node From End of List",source:"@site/docs/blind-curated-75/6 remove nth node from end of list.md",sourceDirName:"blind-curated-75",slug:"/blind-curated-75/6 remove nth node from end of list",permalink:"/algorithm-sharpify/docs/blind-curated-75/6 remove nth node from end of list",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/blind-curated-75/6 remove nth node from end of list.md",version:"current",sidebar_label:"19. Remove Nth Node From End of List",sidebarPosition:6,frontMatter:{sidebar_label:"19. Remove Nth Node From End of List",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"15. 3Sum",permalink:"/algorithm-sharpify/docs/blind-curated-75/5 three sum"},next:{title:"7 valid parentheses",permalink:"/algorithm-sharpify/docs/blind-curated-75/7 valid parentheses"}},s=[{value:"Solution",id:"solution",children:[{value:"Java",id:"java",children:[]}]}],d={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",{start:19},(0,a.kt)("li",{parentName:"ol"},"Remove Nth Node From End of List")),(0,a.kt)("p",null,"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," of a linked list, remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"nth")," node from the end of the list and return its head"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Input: head = [1,2,3,4,5], n = 2\nOutput: [1,2,3,5]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Input: head = [1], n = 1\nOutput: []\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Input: head = [1,2], n = 1\nOutput: [1]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constrains:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the list is sz"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= sz <= 30")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= sz"))),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("h3",{id:"java"},"Java"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ListNode {\n    int val;\n    ListNode next;\n    ListNode() {}\n    ListNode(int val) {\n        this.val = val;\n    }\n    ListNode(int val, ListNode next) {\n        this.val = val;\n        this.next = next;\n    }\n}\nclass Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        ListNode dumyHead = new ListNode();\n        dumyHead.next = head;\n        ListNode fast = dumyHead, slow = dumyHead;\n        while(n > 0) {\n            fast = fast.next;\n            n--;\n        }\n        while(fast.next != null) {\n            fast = fast.next;\n            slow = slow.next;\n        }\n        slow.next = slow.next.next;\n        return dumyHead.next;\n    }\n}\n")))}u.isMDXComponent=!0}}]);