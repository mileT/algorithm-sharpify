---
sidebar_label: "63 Find Median from Data Stream - hard"
sidebar_position: 63
---
# 295 Find Median from Data Stream
Given an integer `n`, return the least number of perfect square numbers that sum to `n`.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, `1, 4, 9, and 16` are perfect squares while `3` and `11` are not.


__Example 1:__
```shell
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
```
__Example 2:__
```shell
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
```
__Constrains__
```
1 <= n <= 10^4
```

## Solution
### DP solution1
```java
public class Solution {
    public int numSquares(int n) {
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        for(int i = 0; i <= n; i++) {
            for(int j = 1; i + j * j <= n; j++) {
                dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
            }
        }
        return dp[n];
    }
}
```
### DP solution 2
```java
public int numSquares(int n) {
    int[] dp = new int[n + 1];
    Arrays.fill(dp, Integer.MAX_VALUE);
    dp[0] = 0;
    for(int i = 1; i <= n; i++) {
        int min = Integer.MAX_VALUE;
        int j = 1;
        while( i - j * j >= 0) {
            min = Math.min(min, dp[i - j * j] + 1);
            j++;
        }
        dp[i] = min;
    }
    return dp[n];
}
```

