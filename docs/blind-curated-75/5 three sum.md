---
sidebar_label: "15. 3Sum"
sidebar_position: 5
---

# 15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


__Example 1:__
```shell
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
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
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        for(int i = 0; i < nums.length - 2; i++) {
            if(i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
                int low = i + 1, high = nums.length - 1;
                int sum = -nums[i];
                while(low < high) {
                    if(nums[low] + nums[high] == sum) {
                        result.add(Arrays.asList(nums[i], nums[low], nums[high]));
                        while(low < high && nums[low] == nums[low + 1]) {
                            low++;
                        }
                        while(low < hight && nums[high] == nums[high - 1]) {
                            high--;
                        }
                        low++;
                        high--;
                    } else if(nums[low] + nums[high] < sum) {
                        low++;
                    } else {
                        high--;
                    }
                }
            }
        }
        return result;
    }
}
```

### Use Set to manage duplicates
```java
public List<List<Integer>> threeSum(int[] nums) {
    if (nums.length < 3) {
        return Collections.emptyList();
    }
    Set<List<Integer>> result = new HashSet<>();
    Arrays.sort(nums);
    for(int i = 0; i < nums.length - 2; i++) {
        int j = i + 1, k = nums.length - 1;
        while(j < k) {
            int sum = nums[i] + nums[j] + nums[k];
            if(sum == 0) {
                result.add(Arrays.asList(nums[i], nums[j], nums[k]));
                j++;
                k--;
            } else if( sum > 0) {
                k--; 
            } else {
                j++
            }
        }
    }
    return new ArrayList<>(result);
}
```


