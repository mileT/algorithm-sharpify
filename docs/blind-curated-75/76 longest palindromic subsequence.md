---
sidebar_label: "76 Longest Palindromic Subsequence"
sidebar_position: 76
---
# 516. Longest Palindromic Subsequence
Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.


__Example 1:__
```
Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
```
__Example 2:__
```
Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".
```

__Constraints:__
* `1 <= s.length <= 1000`
* `s consists only of lowercase English letters.`


## Solution

__solution for this question__
```java
 public class Solution {
    public int longestPalindromeSubseq(String s) {
        int[][] dp = new int[s.length()][s.length()];
        
        for (int i = s.length() - 1; i >= 0; i--) {
            dp[i][i] = 1;
            for (int j = i+1; j < s.length(); j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = dp[i+1][j-1] + 2;
                } else {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
                }
            }
        }
        return dp[0][s.length()-1];
    }
}
```
```java
class Solution {
    public int characterReplacement(String s, int k) {
        int[] freq = new int[26];
        int mostFreqLetter = 0;
        int left = 0;
        int max = 0;
        
    }
}
```
