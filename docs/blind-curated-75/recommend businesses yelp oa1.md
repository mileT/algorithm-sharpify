---
sidebar_label: "Recommend Bussiness Yelp OA"
sidebar_position: 76
---

# Question
Yelp can recommend businesses based on a distance you're willing to travel.

Given a distance input and a connected acyclic graph of businesses with edges as distances, return the list of names of businesses within the distance input.

### Args:

* starting business: a Business object to start from
* distance: int

### Output:

list of str: A list of Business names that are within the given distance of the starting Business

Distance is inclusive, meaning if a business is 5 away, then a distance input of 5 means that business IS reachable.

The return value should NOT have the name of the starting business. Therefore, if no businesses are within the given distance, return an empty list.

The return value is NOT required to be sorted.

# Solution
```java
class Business {
    String name;
    Map<Business, Integer> nearbyBusinesses = new HashMap<>();
    public String getName() {
        return this.name;
    }
    public Map<Business, Integer> getNearbyBusinesses() {
        return this.nearbyBusinesses;
    }
}
class Solution {
    public static List<String> findReachableBusinesses(Business startingBusiness, int distance) {
        List<String> result = new ArrayList<>();
        Map<Business, Boolean> visited = new HashMap<>();
        visited.put(startingBusiness, true);
        dfs(startingBusiness, result, visited, distance, 0);
        return result;
    }

    private void bfs(Business start, List<String> result, Map<Business, Boolean> visited, int distance, int current) {
        Map<Business, Integer> neighbors = start.getNearbyBusiness();
        for(Business b : neighbors.keySet()) {
            if(visited.getOrDefault(b, false) == false && neighbors.get(b) + current <= distance) {
                visited.put(b, true);
                result.add(b.getName());
                dfs(b, result, distance, current + neighbor.get(b));
            }
        }
    }

    public static List<String> findReachableBusinesses(Business startingBusiness, int distance) {
        Map<String, Integer> businessNameDistanceMap = new HashMap<>();
        Queue<Business> queue = new ArrayList<>();
        queue.add(startingBusiness);
        while(!queue.isEmpty()) {
            Business temp = queue.poll();
            int previousDistance = 0;
            if(businessNameDistanceMap.get(temp.getName()) != null){
                previouDistance = businessNameDistanceMap.get(temp.getName();
            }
            for(Map.Entry<Business, Integer> item: temp.getNearbyBusiness().entrySet()) {
                if(previousDistance + item.getValue() <= distance) {
                    businessNameDistanceMap.put(item.getKey().getName(), item.getValue());
                    queue.add(item.getKey());
                }
            }
        }
        return new ArrayList(businessNameDistanceMap.keySet());
    }
}
```

HashMap & PriorityQueue 
```java
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        List<String> result = new LinkedList<>();
        Map<String, Integer> map = new HashMap<>();
        for(String word : words) {
            map.put(s. map.getOrDefault(s, 0) + 1);
        }

        PriorityQueue<Map.Entry<String, Integer>> maxHeap = new PrinorityQueue<>(k, (a, b) -> a.getValue() == b.getValue() ? a.getKey().compareTo(b.getValue()) : b.getValue() - a.getValue());

        for(Map.Entry<String, Integer> entry : map.entrySet()) {
            maxHeap.add(entry);
        }

        while(result.size() < k) {
            result.add(maxHeap.poll().getKey());
        }
        return result;
    }
}
```

```java
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        
        List<String> result = new LinkedList<>();
        Map<String, Integer> map = new HashMap<>();
        for(int i=0; i<words.length; i++)
        {
            if(map.containsKey(words[i]))
                map.put(words[i], map.get(words[i])+1);
            else
                map.put(words[i], 1);
        }
        
        PriorityQueue<Map.Entry<String, Integer>> pq = new PriorityQueue<>(
                 (a,b) -> a.getValue()==b.getValue() ? b.getKey().compareTo(a.getKey()) : a.getValue()-b.getValue()
        );
        
        for(Map.Entry<String, Integer> entry: map.entrySet())
        {
            pq.offer(entry);
            if(pq.size()>k)
                pq.poll();
        }

        while(!pq.isEmpty())
            result.add(0, pq.poll().getKey());
        
        return result;
    }
}
```