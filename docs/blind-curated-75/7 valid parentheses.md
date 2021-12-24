---
sidebar_label: "20. Valid Parentheses"
sidebar_position: 7
---

20. Valid Parentheses
Given a string s containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

__Example 1:__
```shell
Input: s = "()"
Output: true
```

__Example 2:__
```shell
Input: s = "()[]{}"
Output: true
```

**Example 3:**
```shell
Input: s = "([)]"
Output: false
```

__Constrains:__

+ `1 <= s.length <= 104`
+ `s` consists of parentheses only `'()[]{}'`


## Solution
### Java
```java
class Solution {
    public boolean isValid(String s) {
        Stack<Character> myStack = new Stack<>();
        for(Character c: s.toCharArray()) {
            if("({[".constains(String.valueOf(c))) {
                myStack.push(c);
            } else {
                if(!myStack.isEmpty() && checkChars(myStack.peek(), c)) {
                    myStack.pop();
                } else {
                    return false;
                }
            }
        }
        return myStack.isEmpty();
    }
    private checkChars(char c1, char c2) {
        return (c1 == '(' && c2 == ')') || (c1 == '{' && c2 == '}') || (c1 == '[' && c2 == ']');
    }


}
```