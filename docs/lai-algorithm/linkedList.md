---
sidebar_label: "LinkedList"
sidebar_position: 3
---

## Reverse LinkedList
### Iterative way
```java
public ListNode reverseLinkedList(ListNode head) {
    if(head == null || head.next == null) {
        return head;
    }

    ListNode curr = head;
    ListNode prev = null;

    while(curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}
```
### Recurion Way
review: 
1. function call itself
2. devide bigger problem to a smaller subproblems
3. coding level how to connect subproblems

For this question

```java
public ListNode reverseLinkedList(ListNode head) {
    if(head == null || head.next == null) {
        return head;
    }
    
    ListNode newHead = reverseLinked(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}

```