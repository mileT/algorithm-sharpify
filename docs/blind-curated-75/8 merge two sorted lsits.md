---
sidebar_label: "21. Merge Two Sorted Lists"
sidebar_position: 8
---

21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

__Example 1:__
```shell
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

__Example 2:__
```shell
Input: l1 = [], l2 = []
Output: []
```

**Example 3:**
```shell
Input: l1 = [], l2 = [0]
Output: [0]
```

__Constrains:__
+ The number of nodes in both lists is in the range `[0, 50]`.
+ `-100 <= Node.val <= 100`
+ Both `l1` and `l2` are sorted in non-decreasing order.


## Solution
### Recursion
```java
public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) {
        this.val = val;
    }
    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1 == null) return l2;
        if(l2 == null) return l1;
        if(l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
}
```
### compare and then link the smaller node to the merged linked list
```java
 class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummyNode = new ListNode(0);
        ListNode indexNode = dummyNode;
        while(l1 != null && l2 != null) {
            if(l1.val < l2.val) {
                indexNode.next = l1;
                indexNode = l1;
                l1 = l1.next;
            } else {
                indexNode.next = l2;
                indexNode = l2;
                l2 = l2.next;
            }
        }
        if(l1 != null) {
            indexNode.next = l1;
        } else {
            indexNode.next = l2;
        }
        return dummyNode.next;
    }
}
```