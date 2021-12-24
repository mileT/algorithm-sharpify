---
sidebar_label: "67_A Number of Connected Components in an Undirected Graph"
sidebar_position: 71
---
# Leetcode 323. Connected Component in Undirected Graph
Given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.


__Example 1:__

```shell
    0          3
    |          |
    1 --- 2    4
```
Given `n = 5` and `edges = [[0, 1], [1, 2], [3, 4]]`, return `2`.




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



