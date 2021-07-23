---
sidebar_label: "1. Two Sum"
sidebar_position: 1
---

# 1. Two Sum

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

__Example 1:__
```shell
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

__Example 2:__
```shell
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**
```shell
Input: nums = [3,3], target = 6
Output: [0,1]
```

__Constrains:__
+ `2 <= nums.length <= 104`
+ `-109 <= nums[i] <= 109`
+ `-109 <= target <= 109`
+  __Only one valid answer exists.__

**Follow-up:** Can you come up with an algorithm that is less than `O(n^2)` time complexity?

## Solution
### Java
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for(int i = 0; i < nums.length; i++) {
            int second = target - nums[i];
            if(map.containsKey(second)) {
                result[0] = map.get(second);
                result[1] = i;
            }
            map.put(nums[i], i);
        }
        return result;
    }
}
```


