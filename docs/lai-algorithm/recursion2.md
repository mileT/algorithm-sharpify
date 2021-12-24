---
sidebar_label: "Recursion 2"
sidebar_position: 10
---
## Q1
## Q2.1
## Q2.2 How to print 2D array in spiral order (NxN)
## LinkedList 
Q3 
## String
Q4.1
### Q4.2 Abbreviation matching
A word such as "book" can be abbreviate to 4, 1o1k, b3, b2k, etc. Given a string and an abbreviation, return if the string matches the abbreviation. Assume the original string only contains alphabetic characters. For example: "s11d" matches "sophisticated". 
## Tree
Q5.1.1 get tree height
Q5.1.2 how to store how many nodes in each nodes's left-subtree?
```java
class TreeNode {
    TreeNode left;
    TreeNode right;
    int value;
    int total_left; // how many nodes belong to its left-subtree
}
```

way of thinking
1. what do you expect from left/right child? usually it is the return type of the recursion function
2. what do you want to do in the current layer
3. what do you want to report to your parent? 
Q5.1.3 Find the node with the mat difference in the total number of decendents in its left subtree and right subtree
Q5.1.4 Lowest Common Ancestor (LCA)


