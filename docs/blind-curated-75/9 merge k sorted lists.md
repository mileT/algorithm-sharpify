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
### 1
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
    public ListNode mergeKLists(ListNode[] lists) {
        List<Integer> l = new ArrayList<Integer>();
        for(ListNode node : lists) {
            while(node != null) {
                l.add(node.val);
                node = node.next;
            }
        }
        Collections.sort(l);
        ListNode head = new ListNode(0);
        ListNode h = head;
        for(int i : l) {
            ListNode temp = new ListNode(i);
            h.next = temp;
            h = h.next;
        }
        h.next = null;
        return head.next;
    }
}
```
### 2
```java
 public ListNode mergeKLists(ListNode[] lists) {
     int minIndex = 0;
     ListNode head = new ListNode(0);
     ListNode h = head;
     while(true) {
         boolean isBreak = true;
         int min = Integer.MAX_VALUE;
         for(int i = 0; i <lists.length; i++) {
             if(lists[i] != null) {
                 if(lists[i].val < min) {
                     minIndex = i;
                     min = lists[i].val;
                 }
                 isBreak = false;
             }
         }
         if(isBreak) {
             break;
         }
         ListNode a = new ListNode(lists[minIndex].val);
         h.next = a;
         h = h.next;
         lists[minIndex] = lists[minIndex].next;
     }
     h.next = null;
     return head.next;
 }
```
### Based on merge two lists
```java
public ListNode mergeKLists(ListNode[] lists) {
    if(lists == null || lists.length == 0) {
        return null;
    }
    return mergeKLists(lists, 0, lists.length - 1);
}

private ListNode mergeKLists(ListNode[] lists, int start, int end) {
    if(start == end) {
        return lists[start];
    } else if(start < end) {
        int mid = (end - start) / 2 + start;
        ListNode left = mergeKLists(lists, start, mid);
        ListNode right = mergeKLists(lists, mid + 1, end);
        return merge(left, right);
    } else {
        return null;
    }
}
private ListNode merge(ListNode l1, ListNode l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    if(l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    } else {
        l2.next = merge(l1, l2.next);
        return l2;
    }

}
```