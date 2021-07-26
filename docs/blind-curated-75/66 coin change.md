---
sidebar_label: "66 Coin Change"
sidebar_position: 66
---
# 322. Coin Change
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.



__Example 1:__
```shell
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```
__Example 2:__
```shell
Input: coins = [2], amount = 3
Output: -1
```
__Example 3:__
```shell
Input: coins = [1], amount = 0
Output: 0
```
__Example 4:__
```shell
Input: coins = [1], amount = 1
Output: 1
```
__Constrains__

* `1 <= coins.length <= 12`
* `1 <= coins[i] <= 231 - 1`
* `0 <= amount <= 104`



## Solution
### DP solution1
```java
public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    for(int j = 0; j < coins.length; j++) {
        for(int i = 0; i <= amount; i++) {
            if(i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amout ? -1 : dp[amount];
}

```
![Explanation](https://raw.githubusercontent.com/hot13399/leetcode-graphic-answer/master/322.%20Coin%20Change.jpg)


