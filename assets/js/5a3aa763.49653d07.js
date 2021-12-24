(self.webpackChunkleetcode_notes_doc=self.webpackChunkleetcode_notes_doc||[]).push([[417],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),f=i,g=c["".concat(u,".").concat(f)]||c[f]||p[f]||a;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1877:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o={sidebar_label:"58. Graph Valid Tree",sidebar_position:58},l={unversionedId:"blind-curated-75/58 graph valid tree",id:"blind-curated-75/58 graph valid tree",isDocsHomePage:!1,title:"Lintcode 178 Graph Valid Tree",description:"Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.",source:"@site/docs/blind-curated-75/58 graph valid tree.md",sourceDirName:"blind-curated-75",slug:"/blind-curated-75/58 graph valid tree",permalink:"/algorithm-sharpify/docs/blind-curated-75/58 graph valid tree",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/blind-curated-75/58 graph valid tree.md",version:"current",sidebar_label:"58. Graph Valid Tree",sidebarPosition:58,frontMatter:{sidebar_label:"58. Graph Valid Tree",sidebar_position:58},sidebar:"tutorialSidebar",previous:{title:"39. Combination Sum",permalink:"/algorithm-sharpify/docs/blind-curated-75/11 combination sum"},next:{title:"Lintcode 892 Alien Dictionary",permalink:"/algorithm-sharpify/docs/blind-curated-75/60 alien dictionary"}},u=[{value:"Solution",id:"solution",children:[{value:"Solution1 BFS",id:"solution1-bfs",children:[]},{value:"Solution 2 Union find",id:"solution-2-union-find",children:[]}]}],d={toc:u};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Given ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," nodes labeled from ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"n - 1")," and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree."),(0,a.kt)("p",null,"You can assume that no duplicate edges will appear in edges. Since all edges are undirected, ",(0,a.kt)("inlineCode",{parentName:"p"},"[0, 1]")," is the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 0]")," and thus will not appear together in edges."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Input: n = 5 edges = [[0, 1], [0, 2], [0, 3], [1, 4]]\nOutput: true.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Input: n = 5 edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]\nOutput: false.\n")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("h3",{id:"solution1-bfs"},"Solution1 BFS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    private Map<Integer, Set<Integer>> initializeGraph(int n, int[][] edges) {\n        Map<Integer, Set<Integer>> graph = new HashMap<>();\n        for(int i = 0; i < n; i++) {\n            graph.put(i, new HashSet<Integer>());\n        }\n\n        for(int j = 0; j < edges.length; j++) {\n            int u = edges[j][0];\n            int v = edges[j][1];\n            graph.get(u).add(v);\n            graph.get(v).add(u);\n        }\n\n        return graph;\n    }\n\n    public boolean validTree(int n, int[][] edges) {\n        if(n == 0) {\n            return false;\n        }\n\n        if(edges.length != n-1) {\n            return false;\n        }\n\n        Map<Integer, Set<Integer>> graph = initializeGraph(n, edges);\n\n        // bfs\n        Queue<Integer> queue = new LinkedList<>();\n        Set<Integer> hash = new HashSet<>();\n\n        queue.offer(0);\n        hash.add(0);\n        while(!queue.isEmpty()) {\n            int node = queue.poll();\n            for(Integer neighbor: graph.get(node)) {\n                if(hash.contains(neighbor)) {\n                    continue;\n                }\n                hash.add(neighbor);\n                queue.offer(neighbor);\n            }\n        }\n        return hash.size() == n;\n    }\n}\n")),(0,a.kt)("h3",{id:"solution-2-union-find"},"Solution 2 Union find"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Solution {\n    class UnionFind {\n        HashMap<Integer, Integer> father = new HashMap<>();\n        UnionFind(int n) {\n            for(int i = 0; i < n; i++) {\n                father.put(i, i);\n            }\n        }\n        int compressedFind(int x) {\n            int parent = father.get(x);\n            while(parent != father.get(parent)) {\n                parent = father.get(parent);\n            }\n            int temp = -1;\n            int fa = father.get(x);\n            while(fa != father.get(fa)) {\n                temp = father.get(fa);\n                father.put(fa, parent);\n                fa = temp;\n            }\n            return parent;\n        }\n        void union(int x, int y) {\n            int faX = compressedFind(x);\n            int faY = compressedFind(y);\n            if(faX != faY) {\n                father.put(faX, faY);\n            }\n        }\n    }\n\n    public boolean validTree(int n, int[][] edges) {\n        if( n - 1 != edges.length) {\n            return false;\n        }\n\n        UnionFind uf = new UnionFind(n);\n        for(int i = 0; i < edges.length; i++) {\n            if(uf.compressedFind(edges[i][0]) == uf.compressedFind(edge[i][1])) {\n                return false;\n            }\n            uf.union(edges[i][0], edges[i][1]);\n        }\n        return true;\n    }\n}\n")))}s.isMDXComponent=!0}}]);