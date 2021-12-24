---
sidebar_label: "58. Graph Valid Tree"
sidebar_position: 58
---
# Lintcode 178 Graph Valid Tree

Given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, `[0, 1]` is the same as `[1, 0]` and thus will not appear together in edges.

__Example 1:__
```shell
Input: n = 5 edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
Output: true.
```

__Example 2:__
```shell
Input: n = 5 edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
Output: false.
```

## Solution
### Solution1 BFS
```java
class Solution {
    private Map<Integer, Set<Integer>> initializeGraph(int n, int[][] edges) {
        Map<Integer, Set<Integer>> graph = new HashMap<>();
        for(int i = 0; i < n; i++) {
            graph.put(i, new HashSet<Integer>());
        }

        for(int j = 0; j < edges.length; j++) {
            int u = edges[j][0];
            int v = edges[j][1];
            graph.get(u).add(v);
            graph.get(v).add(u);
        }

        return graph;
    }

    public boolean validTree(int n, int[][] edges) {
        if(n == 0) {
            return false;
        }

        if(edges.length != n-1) {
            return false;
        }

        Map<Integer, Set<Integer>> graph = initializeGraph(n, edges);

        // bfs
        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> hash = new HashSet<>();

        queue.offer(0);
        hash.add(0);
        while(!queue.isEmpty()) {
            int node = queue.poll();
            for(Integer neighbor: graph.get(node)) {
                if(hash.contains(neighbor)) {
                    continue;
                }
                hash.add(neighbor);
                queue.offer(neighbor);
            }
        }
        return hash.size() == n;
    }
}
```
### Solution 2 Union find
```java
public class Solution {
    class UnionFind {
        HashMap<Integer, Integer> father = new HashMap<>();
        UnionFind(int n) {
            for(int i = 0; i < n; i++) {
                father.put(i, i);
            }
        }
        int compressedFind(int x) {
            int parent = father.get(x);
            while(parent != father.get(parent)) {
                parent = father.get(parent);
            }
            int temp = -1;
            int fa = father.get(x);
            while(fa != father.get(fa)) {
                temp = father.get(fa);
                father.put(fa, parent);
                fa = temp;
            }
            return parent;
        }
        void union(int x, int y) {
            int faX = compressedFind(x);
            int faY = compressedFind(y);
            if(faX != faY) {
                father.put(faX, faY);
            }
        }
    }

    public boolean validTree(int n, int[][] edges) {
        if( n - 1 != edges.length) {
            return false;
        }

        UnionFind uf = new UnionFind(n);
        for(int i = 0; i < edges.length; i++) {
            if(uf.compressedFind(edges[i][0]) == uf.compressedFind(edge[i][1])) {
                return false;
            }
            uf.union(edges[i][0], edges[i][1]);
        }
        return true;
    }
}
```
