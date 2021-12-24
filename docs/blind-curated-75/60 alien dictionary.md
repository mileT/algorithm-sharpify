---
sidebar_label: "60. Alien Dictionary - hard"
sidebar_position: 60
---
# Lintcode 892 Alien Dictionary
Description
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

1. You may assume all letters are in lowercase.
2. The dictionary is invalid, if a is prefix of b and b is appear before a.
3. If the order is invalid, return an empty string.
4. There may be multiple valid order of letters, return the smallest in normal lexicographical order

__Example 1:__
```shell
Input：["wrt","wrf","er","ett","rftt"]
Output："wertf"
Explanation：
from "wrt"and"wrf" ,we can get 't'<'f'
from "wrt"and"er" ,we can get 'w'<'e'
from "er"and"ett" ,we can get 'r'<'t'
from "ett"and"rftt" ,we can get 'e'<'r'
So return "wertf"
```
__Example 2:__
```shell
Input：["z","x"]
Output："zx"
Explanation：
from "z" and "x"，we can get 'z' < 'x'
So return "zx"
```

## Solution
```java
class Solution {
    public String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = constructGraph(words);
        if(graph == null) {
            return "";
        }
        return topologicalSorting(graph);
    }

    private Map<Character, Set<Character>> constructGraph(String[] words) {
        Map<Character, Character> graph = new HashMap<>();
        
        //create nodes
        for(int i = 0; i < words.lenght; i++) {
            for(int j = 0; j < words[i].length(); j++) {
                char c = words[i].charAt(j);
                if(!graph.containsKey(c)) {
                    graph.put(c, new HashSet<Character>());
                }
            }
        }

        //create eges
        for(int i = 0; i < words.length; i++) {
            int index = 0;
            while(index < words[i].length() && index < words[i + 1].length()) {
                if(words[i].charAt(index) != words[i + 1].charAt(index)) {
                    graph.get(words[i].charAt(index).add(words[i + 1].charAt(index)));
                    break;
                }
                index++;
            }
            if(index == Math.min(words[i].length(), words[i + 1].length())) {
                if(words[i].length() > words[i + 1].length()) {
                    return null;
                }
            }
        }
        return graph;
    }

    private Map<Character, Integer> getIndegree(Map<Character, Set<Character>> graph) {
        Map<Character, Integer> indegree = new HashMap<>();
        for(Character u : graph.keySet()) {
            indegree.put(u, 0);
        }

        for(Character u : graph.keySet()) {
            for(Character v: graph.get(u)) {
                indegree.put(v, indegree.get(v) + 1);
            }
        }

        return indegree;
    }

    private String topologicalSorting(Map<Character, Set<Character>> graph) {
        Map<Character, Integer> indgree = getIndegree(graph);
        Queue<Character> queue = new PriorityQueue<>();

        for(Character u : indegree.keySet()) {
            if(indgree.get(u) == 0) {
                queue.offer(u);
            }
        }

        StringBuilder sb = new StringBuilder();
        while(!queue.isEmpty()) {
            Character head = queue.poll();
            sb.append(head);
            for(Character neighbor : graph.get(head)) {
                indegree.put(neighbor, indegree.get(neighbor) - 1);
                if(indegree.get(neighbor) == 0) {
                    queue.offer(neighbor);
                }
            }
        }
        if(sb.length() != indegree.size()) {
            return "";
        }
        return sb.toString();
    }
}
```

### Solution 2
```java
class Solution {
    public String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        int[] inDegree = new int[26];
        buildGraph(words, graph, inDegree);
        
        String order = topologicalSort(graph, inDegree);
        return order.length() == graph.size() ? order : "";
    }
    
    private void buildGraph(String[] words, Map<Character, Set<Character>> graph, int[] inDegree) {
        for (String word : words) {
            for (char c : word.toCharArray()) {
                graph.put(c, new HashSet<>());
            }
        }
        
        for (int i = 1; i < words.length; i++) {
            String first = words[i - 1];
            String second = words[i];
            int length = Math.min(first.length(), second.length());
            
            for (int j = 0; j < length; j++) {
                char parent = first.charAt(j);
                char child = second.charAt(j);
                if (parent != child) {
                    if (!graph.get(parent).contains(child)) {
                        graph.get(parent).add(child);
                        inDegree[child - 'a']++;
                    }
                    break;
                }
            }
        }
    }
    
    private String topologicalSort(Map<Character, Set<Character>> graph, int[] inDegree) {
        Queue<Character> queue = new LinkedList<>();
        for (char c : graph.keySet()) {
            if (inDegree[c - 'a'] == 0) {
                queue.offer(c);
            }
        }
        
        StringBuilder sb = new StringBuilder();
        while (!queue.isEmpty()) {
            char c = queue.poll();
            sb.append(c);
            for (char neighbor : graph.get(c)) {
                inDegree[neighbor - 'a']--;
                if (inDegree[neighbor - 'a'] == 0) {
                    queue.offer(neighbor);
                }
            }
        }
        return sb.toString();
    }
}
```

