---
sidebar_label: "19. Remove Nth Node From End of List"
sidebar_position: 6
---

19. Remove Nth Node From End of List

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head

__Example 1:__
```shell
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

__Example 2:__
```shell
Input: head = [1], n = 1
Output: []
```

**Example 3:**
```shell
Input: head = [1,2], n = 1
Output: [1]
```

__Constrains:__
+ The number of nodes in the list is sz
+ `1 <= sz <= 30`
+ `0 <= Node.val <= 100`
+ `1 <= n <= sz`

## Solution
### Java
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dumyHead = new ListNode();
        dumyHead.next = head;
        ListNode fast = dumyHead, slow = dumyHead;
        while(n > 0) {
            fast = fast.next;
            n--;
        }
        while(fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return dumyHead.next;
    }
}
```