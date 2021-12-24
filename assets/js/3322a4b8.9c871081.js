(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[9585],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8634:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={sidebar_label:"20. Valid Parentheses",sidebar_position:7},o={unversionedId:"blind-curated-75/7 valid parentheses",id:"blind-curated-75/7 valid parentheses",isDocsHomePage:!1,title:"7 valid parentheses",description:"20. Valid Parentheses",source:"@site/docs/blind-curated-75/7 valid parentheses.md",sourceDirName:"blind-curated-75",slug:"/blind-curated-75/7 valid parentheses",permalink:"/algorithm-sharpify/docs/blind-curated-75/7 valid parentheses",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/blind-curated-75/7 valid parentheses.md",version:"current",sidebar_label:"20. Valid Parentheses",sidebarPosition:7,frontMatter:{sidebar_label:"20. Valid Parentheses",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6 remove nth node from end of list",permalink:"/algorithm-sharpify/docs/blind-curated-75/6 remove nth node from end of list"},next:{title:"8 merge two sorted lsits",permalink:"/algorithm-sharpify/docs/blind-curated-75/8 merge two sorted lsits"}},s=[{value:"Solution",id:"solution",children:[{value:"Java",id:"java",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",{start:20},(0,i.kt)("li",{parentName:"ol"},"Valid Parentheses\nGiven a string s containing just the characters ",(0,i.kt)("inlineCode",{parentName:"li"},"'(', ')', '{', '}', '[' and ']'"),", determine if the input string is valid.")),(0,i.kt)("p",null,"An input string is valid if:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open brackets must be closed by the same type of brackets."),(0,i.kt)("li",{parentName:"ol"},"Open brackets must be closed in the correct order.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Input: s = "()"\nOutput: true\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Input: s = "()[]{}"\nOutput: true\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Input: s = "([)]"\nOutput: false\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constrains:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 104")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," consists of parentheses only ",(0,i.kt)("inlineCode",{parentName:"li"},"'()[]{}'"))),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> myStack = new Stack<>();\n        for(Character c: s.toCharArray()) {\n            if(\"({[\".constains(String.valueOf(c))) {\n                myStack.push(c);\n            } else {\n                if(!myStack.isEmpty() && checkChars(myStack.peek(), c)) {\n                    myStack.pop();\n                } else {\n                    return false;\n                }\n            }\n        }\n        return myStack.isEmpty();\n    }\n    private checkChars(char c1, char c2) {\n        return (c1 == '(' && c2 == ')') || (c1 == '{' && c2 == '}') || (c1 == '[' && c2 == ']');\n    }\n\n\n}\n")))}p.isMDXComponent=!0}}]);