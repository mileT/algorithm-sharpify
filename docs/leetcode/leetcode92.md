---
sidebar_label: "92 Reverse Linked List II"
sidebar_position: 92
---
# Reverse Linked List II
[Leetcode Link](https://leetcode.com/problems/reverse-linked-list-ii/)
## Description
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

** Example 1:**

![image](https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg "Example 1 iamge")
```shell
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
```

** Example 2: **
```shell
Input: head = [5], left = 1, right = 1
Output: [5]
```

Constraints:
```
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
```

## Solution


## Code
### solution 1: Iterative Way
```java
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        if(head == null) {
            return null;
        }
        // Node cur, prev to the start postion
        ListNode cur = head, prev = null;
        while(m > 1) {
            prev = cur;
            cur = cur.next;
            m--;
            n--;
        }
        //Two pointers will do the fianl link
        ListNode con = prev, tail = cur;
        ListNode third = null;
        while(n > 0) {
            third = cur.next;
            cur.next = prev;
            prev = cur;
            cur = third;
            n--;
        }

        if(con != null) {
            con.next = prev;
        } else {
            head = prev;
        }

        tail.next = cur;
        return head;
    }
}
```

