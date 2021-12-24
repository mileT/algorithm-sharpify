---
sidebar_label: "75 Palindromic Substrings"
sidebar_position: 75
---
# 647. Palindromic Substrings
Given a string `s`, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

__Example 1:__
```
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```
__Example 2:__
```
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

__Constraints:__
* `1 <= s.length <= 1000`
* `s consists only of lowercase English letters.`


## Solution

__solution for this question__
1. DP solution
```java
 public class Solution {
     public int countSubstrings(String s) {
         int n = s.length();
         int result = 0;
         boolean[][] dp = new boolean[n][n];

         for(int i = n - 1; i >= 0; i++){
             for(int j = i; j < n; j++) {
                 dp[i][j]= s.charAt(i) == s.charAt(j) && (i - j + 1 < 3 || dp[i + 1][j - 1]);
                 if(dp[i][j]) {
                     result++;
                 }
             }
         }
         return result;
     }
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

