---
sidebar_label: "347 Top K Frequent Elements"
sidebar_position: 2
---
# Top K Frequent Elements
[Leetcode Link](https://leetcode.com/problems/top-k-frequent-elements/)
## Description
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


## Solution
### solution 1
```java
class Solution {
    int[] unique;
    Map<Integer, Integer> count;

    public void swap(int a, int b) {
        int tmp = unique[a];
        unique[a] = unique[b];
        unique[b] = tmp;
    }

    public int partition(int left, int right, int pivot_index) {
        int pivot_frequency = count.get(unique[pivot_index]);
        // 1. move pivot to end
        swap(pivot_index, right);
        int store_index = left;

        // 2. move all less frequent elements to the left
        for (int i = left; i <= right; i++) {
            if (count.get(unique[i]) < pivot_frequency) {
                swap(store_index, i);
                store_index++;
            }
        }

        // 3. move pivot to its final place
        swap(store_index, right);

        return store_index;
    }
    
    public void quickselect(int left, int right, int k_smallest) {
        /*
        Sort a list within left..right till kth less frequent element
        takes its place. 
        */

        // base case: the list contains only one element
        if (left == right) return;
        
        // select a random pivot_index
        Random random_num = new Random();
        int pivot_index = left + random_num.nextInt(right - left); 

        // find the pivot position in a sorted list
        pivot_index = partition(left, right, pivot_index);

        // if the pivot is in its final sorted position
        if (k_smallest == pivot_index) {
            return;    
        } else if (k_smallest < pivot_index) {
            // go left
            quickselect(left, pivot_index - 1, k_smallest);     
        } else {
            // go right 
            quickselect(pivot_index + 1, right, k_smallest);  
        }
    }
    
    public int[] topKFrequent(int[] nums, int k) {
        // build hash map : character and how often it appears
        count = new HashMap();
        for (int num: nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }
        
        // array of unique elements
        int n = count.size();
        unique = new int[n]; 
        int i = 0;
        for (int num: count.keySet()) {
            unique[i] = num;
            i++;
        }
        
        // kth top frequent element is (n - k)th less frequent.
        // Do a partial sort: from less frequent to the most frequent, till
        // (n - k)th less frequent element takes its place (n - k) in a sorted array. 
        // All element on the left are less frequent.
        // All the elements on the right are more frequent. 
        quickselect(0, n - 1, n - k);
        // Return top k frequent elements
        return Arrays.copyOfRange(unique, n - k, n);
    }
}

```

### Solution 2:
#### Java 8 note
```java
// how to convert List<Integer> to int[]
List<Integer> list = new ArrayList<Integer>();
// add elements to list
list.stream().mapToInt(Integer::intValue).toArray();
```
```java
// how to swap element in list
Collections.swap(list, i, j);
```
Quick Select O(n), 

```java
class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<> ();
        for(int num: nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        return quickSelect(map, new ArrayList<Integer>(map.keySet()), 0, map.size() - 1, k);
    }

    private List<Integer> quickSelect(HashMap<Integer, Integer> map, ArrayList<Integer> keys, int start, int end, int k) {
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
        return res;
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
```python
from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)
        unique = list(count.keys())

    def partition(left, right, pivot_index) -> int:
        privot_frequency = count[unique[pivot_index]]
        unique[pivot_index], unique[right] = unique[right], unique[pivot_index]

        store_index = left
        for i in range(left, right):
            if count[unique[i]] < pivot_frequency:
                unique[store_inde], unique[i]= unique[i], unique[store_index]
                store_index += 1

        unique[right], unique[store_index] = unique[store_index], unique[right]

        return store_index

    def quickselect(left, right, k) -> None:
    ```
