---
sidebar_label: "67 Connected Components in an Undirected Graph"
sidebar_position: 67
---
# Lint 431. Connected Component in Undirected Graph
Find the number connected component in the undirected graph. Each node in the graph contains a label and a list of its neighbors. (a connected component (or just component) of an undirected graph is a subgraph in which any two vertices are connected to each other by paths, and which is connected to no additional vertices in the supergraph.)


__Example 1:__
Given graph
```shell
A------B  C
 \     |  | 
  \    |  |
   \   |  |
    \  |  |
      D   E
```
Return `{A, B, D}`, `{C, E}`. Since there are two connected component which is `{A,B,D}`, `{C,E}`




## Solution
```java
/**
 * Definition for Undirected graph.
 * class UndirectedGraphNode {
 *     int label;
 *     ArrayList<UndirectedGraphNode> neighbors;
 *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }
 * };
 */
 public class Solution {
     public List<List<Integer>> connectedSet(ArrayList<UndirectedGraphNode> nodes) {
         List<List<Integer>> result = new ArrayList<>();
         if(nodes == null) {
             return result;
         }
         Map<UndirectedGraphNode, Boolean> visited = new HashMap();
         for(UndirectedGraphNode node : nodes) {
             visited.put(node, false);
         }

         for(UndirectedGraphNode node : nodes) {
             if(visited.get(node) == false) {
                 helper(node, visited, result);
             }
         }

         return result;
     }

     private void helper(UndirectedGraphNode node, Map<UndirectedGraphNode, Boolean> visited, List<List<Integer>> result) {
         ArrayList<Integer> row = new ArrayList();
         Queue<UndirectedGraphNode> queue = new LinkedList<UndirectedGraphNode>();
         queue.ofer(node);
         visited.put(node, true);

         while(!queue.isEmpty()) {
             UndirectedGraphNode head = queue.poll();
             row.add(head.label);
             for(UndirectedGraphNode nei : head.neighbors) {
                 if(visted.get(nei) == fasle) {
                     queue.offer(nei);
                     visited.put(nei, true);
                 }
             }
         }
         Collections.sort(row);
         result.add(row);
     }
 }

```



