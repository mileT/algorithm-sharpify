---
sidebar_label: "5. Longest Palindromic Substring"
sidebar_position: 3
---

# 5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

__Example 1:__
```shell
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

__Example 2:__
```shell
Input: s = "cbbd"
Output: "bb"
```

**Example 3:**
```shell
Input: s = "a"
Output: "a"
```
**Example 4:**
```
Input: s = "ac"
Output: "a"
```

__Constrains:__
+ `1 <= s.length <= 1000`
+ `s` consist of only digits and English letters.


## Solution
### Expand Around Center
```java
class Solution {
    public String longestPalindrome(String s) {
        if(s == null || s.length() < 1) return "";
        int start = 0, len = 0;
        for(int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            if(len < Math.max(len1, len2)) {
                start = (len1 > len2) ? (i - len1 / 2) : (i - len2 / 2 + 1);
                len = Math.max(len1, len2);
            }
        }
        return s.substring(start,  start + len);
        
    }
    
    private int expandAroundCenter(String s, int left, int right) {
        int L = left, R = right;
        while(L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
            L--;
            R++;
        }
        return R - L - 1;
    }
}
```

### Dynamic Programming
`dp(i, j)` represents whether `s(i ... j)` can form a palindromic substring, `dp(i, j)` is true when `s(i)` equals to `s(j)` and `s(i+1 ... j-1)` is a palindromic substring. When we found a palindrome, check if it's the longest one. Time complexity O(n^2).

```java
public String longestPalindrome(String s) {
    int n = s.length();
    String result = null;
    boolean[][] dp = new boolean[n][n];

    for(int i = n - 1; i >= 0; i--) {
        for(int j = i; j < n; j++) {
            dp[i][j] = s.charAt(i) == s.charAt(j) && (j - i < 3 || dp[i + 1][j - 1]);

            if(dp[i][j] && (result == null || j - i + 1 > result.length())) {
                result = s.substring(i, j + 1);
            }
        }
    }
    return result;
}
```
