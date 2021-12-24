---
sidebar_label: "Longest Substring without repeating characters"
sidebar_position: 2
---


# 1. Two Sum

Given a string s, find the length of the longest substring without repeating characters.

__Example 1:__
```shell
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

__Example 2:__
```shell
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**
```shell
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```
**Example 4:**
```shell
Input: s = ""
Output: 0
```

__Constrains:__
+ 0 <= s.length <= 5 * 104
+ s consists of English letters, digits, symbols and spaces.


## Solution
### Java
```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if(s.length == 0) return 0;
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        int max = 0;
        for(int i = 0, j = 0; i < s.length(); i++) {
            if(map.containsKey(s.charAt(i))) {
                j = Math.max(j, map.get(s.charAt(i)) + 1);
            }
            map.put(s.charAt(i), i);
            max = Math.max(max, i - j + 1);
        }
        return max;
    }
}
```


