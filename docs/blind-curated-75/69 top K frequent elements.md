---
sidebar_label: "69 Top K Frequent Elements"
sidebar_position: 70
---
# 347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

__Example 1:__
```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```
__Example 2:__
```
Input: nums = [1], k = 1
Output: [1]
```

__Constraints:__
* 1 <= nums.length <= 105
* k is in the range [1, the number of unique elements in the array].
* It is guaranteed that the answer is unique.

__Follow up__: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

# Solution 1
Similar idea as quick sort.

```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<> ();
        for(int num: nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        return quickSelect(map, new ArrayList<Integer>(map.keySet()), 0, map.size() - 1, k);
    }

    private int[] quickSelect(HashMap<Integer, Integer> map, ArrayList<Integer> keys, int start, int end, int k) {
        int left = start, right = end;
        List<Integer> res = new ArrayList<> ();

        while(left < right) {
            int pivot = partition(map, keys, left, right);
            if(pivot < k - 1) {
                left = pivot + 1;
            } else if(pivot > k - 1) {
                right = pivot - 1;
            } else {
                break;
            }
        }

        for(int i = 0; i < k; i++) {
            res.add(keys.get(i));
        }
        
        return res.stream().mapToInt(Integer::intValue).toArray();
    }

    private int partition(HashMap<Integer, Integer> map, ArrayList<Integer> keys, int start, int end) {
        int left = start;
        int pivot = map.get(keys.get(start));
        for(int i = start + 1; i <= end; i++) {
            if(map.get(keys.get(i)) >= pivot) {
                Collections.swap(keys, i, ++left);
            }
        }
        Collections.swap(keys, start, left);
        return left;
    }
}
```
How to convert `List<Integer>` to `int[]`?
```java
List<Integer> result = new ArrayList<>();
int[] resultArray = result.stream().mapToInt(Integer::intValue).toArray();
int[] resultArray = result.stream().mapToInt(Integer::intValue).toArray():
```

```java

private int partition(HashMap<Integer, Integer> map, ArrayList<Integer> keys, int start, int end) {
    int left = start;
    int pivot = map.get(keys.get(start));
    for(int i = start + 1; i <= end; i++) {
        if(map.get(keys.get(i))>= pivot) {
            Collections.swap(keys, i, left);
        }    
    }
    Collections.swap(keys, start, left);
    return left;

}
```