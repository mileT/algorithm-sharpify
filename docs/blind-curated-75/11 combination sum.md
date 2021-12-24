---
sidebar_label: "39. Combination Sum"
sidebar_position: 11
---

# 39. Combination Sum

There is an integer array `nums` sorted in ascending order (with distinct values).

Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k (1 <= k < nums`.length) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index 3 and become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of target if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

__Example 1:__
```shell
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

__Example 2:__
```shell
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

**Example 3:**
```shell
Input: nums = [1], target = 0
Output: -1
```

__Constrains:__
+ `1 <= nums.length <= 5000`
+ `104 <= nums[i] <= 104`
+ All values of nums are unique.
+ `nums` is an ascending array that is possibly rotated.
+ `-104 <= target <= 104`


## Solution
### Java
```java
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<Integer>();
        dfs(candidates, target, 0, result, current);
        return result;
    }

    private void dfs(int[] nums, int target, int start, List<List<Integer>> result, List<Integer> currentList) {
        if(target == 0) {
            result.add(new ArrayList<>(currentList));
            return;
        }
        for(int i = start; i < nums.length; i++) {
            if(target - nums[i] < 0) {
                continue;
            }
            currentList.add(nums[i]);
            dfs(nums, target - nums[i], i, result, currentList);
            currentList.remove(currentList.size() - 1);
        }
    }

}
```



