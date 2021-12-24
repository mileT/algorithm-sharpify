---
sidebar_label: "46. Permutations"
sidebar_position: 4
---

# 39. Combination Sum

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

__Example 1:__
```shell
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

__Example 2:__
```shell
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

**Example 3:**
```shell
Input: nums = [1]
Output: [[1]]
```

__Constrains:__
+ `1 <= nums.length <= 6`
+ `-10 <= nums[i] <= 10`
+ All the integers of nums are unique.

## Solution
### Java
```java
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        permute(nums, 0, result);
        return result;
    }
    public void permute(int[] nums, int begin, List<List<Integer>> result) {
        if(begin >= nums.length) {
            List<Integer> list = new ArrayList<Integer>();
            for(int i = 0; i < nums.length; i++) {
                list.add(nums[i]);
            }
            result.add(list);
            return;
        }
        for(int i = begin; i < nums.length; i++) {
            swap(nums, begin, i);
            permute(nums, begin + 1; result);
            swap(nums, i, begin);
        }
    }
    public void swasp(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
```



