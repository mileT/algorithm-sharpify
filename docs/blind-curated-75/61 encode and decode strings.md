---
sidebar_label: "61. Encode and Decode Strings "
sidebar_position: 61
---
# 659 Encode and Decode Strings
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.


__Example 1:__
```shell
Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
Explanation:
One possible encode method is: "lint:;code:;love:;you"
```
__Example 2:__
```shell
Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
Explanation:
One possible encode method is: "we:;say:;:::;yes"
```

## Solution
```java
public class Solution {
    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();
        for(String s : strs) {
            for(char c : s.toCharArray()) {
                if(c == ':') {
                    sb.append("::");
                } else {
                    sb.append(c);
                }
            }
            sb.append(":;");
        }
        return sb.toString();
    }

    public List<String> decode(String str) {
        List<String> result = new ArrayList<>();
        char[] sc = str.toCharArray();
        StringBuilder item = new StringBuilder();
        int i = 0;
        while(i < str.length()) {
            if(sc[i] == ':') {
                if(sc[i + 1] == ';') {
                    result.add(item.toString());
                    itme = new StringBuilder();
                    i += 2;
                } else {
                    item.append(sc[i + 1]);
                    i += 2;
                }
            } else {
                item.append(sc[i]);
                i += 1;
            }
        }
        return result;
    }
}
```
