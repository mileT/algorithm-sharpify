---
sidebar_label: "11. Container With Most Water"
sidebar_position: 3
---

# 11. Container With Most Water

Given `n` non-negative integers `a1, a2, ..., an` , where each represents a point at coordinate `(i, ai)`. `n` vertical lines are drawn such that the two endpoints of the line `i` is at `(i, ai)` and `(i, 0)`. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

__Example 1:__
```shell
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

__Example 2:__
```shell
Input: height = [1,1]
Output: 1
```

**Example 3:**
```shell
Input: height = [4,3,2,1,4]
Output: 16
```
**Example 4:**
```
Input: height = [1,2,1]
Output: 2
```

__Constrains:__
+ `n == height.length`
+ `2 <= n <= 105`
+ `0 <= height[i] <= 104`

## Solution
```java
class Solution {
    public int maxArea(int[] height) {
        int maxArea = 0, l = 0, r = height.length - 1;
        while(l < r) {
            maxArea = Math.max(maxArea, Math.min(height[l], height[r]) * (r - l));
            if(height[l] < height[r]) {
                l++;
            } else {
                r--;
            }
        }
        return maxArea;
    }
}
```