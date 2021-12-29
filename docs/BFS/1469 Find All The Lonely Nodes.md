---
sidebar_label: "1469. Find All The Lonely Nodes "
sidebar_position: 1
---

# Leetcode 1469

In a binary tree, a lonely node is a node that is the only child of its parent node. The root of the tree is not lonely because it does not have a parent node.

Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree. Return the list in any order.



__Example 1:__

![example 1](https://assets.leetcode.com/uploads/2020/06/03/e1.png)
```shell
Input: root = [1,2,3,null,4]
Output: [4]
Explanation: Light blue node is the only lonely node.
Node 1 is the root and is not lonely.
Nodes 2 and 3 have the same parent and are not lonely.
```

__Example 2:__

![example 2](https://assets.leetcode.com/uploads/2020/06/03/e2.png)

```shell
Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2]
Output: [6,2]
Explanation: Light blue nodes are lonely nodes.
Please remember that order doesn't matter, [2,6] is also an acceptable answer.
```

**Example 3:**

![example 3](https://assets.leetcode.com/uploads/2020/06/03/e3.png)

```shell
Input: root = [11,99,88,77,null,null,66,55,null,null,44,33,null,null,22]
Output: [77,55,33,66,44,22]
Explanation: Nodes 99 and 88 share the same parent. Node 11 is the root.
All other nodes are lonely.
```

__Constrains:__
* The number of nodes in the tree is in the range [1, 1000].
* 1 <= Node.val <= 106

## Solution
### BFS
Version 1 - BFS
```java

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> getLonelyNodes(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if(root == null) {
            return result;
        }
        LinkedList<TreeNode> q = new LinkedList<>();
        q.add(root);
        TreeNode current;
        while(!q.isEmpty()) {
            current = q.removeFirst();
            if(current != null) {
                if(current.left != null && current.right != null) {
                    //TreeNode temp = current.left != null
                    q.add(current.left);
                    q.add(current.right);
                    continue;
                } else if(current.left != null || current.right != null) {
                    TreeNode temp = current.left != null ? current.left :current.right;
                    result.add(temp.val);
                    q.add(temp);
                }
            }
        }
        return result;
        
    }
}

```

### Recursive
```java
class Solution {
    public List<Integer> getLonelyNodes(TreeNode root) {
        ArrayList<Integer> result = new ArrayList<>();
        helper(root, null, result);
        return result;
    }
    
    void helper(TreeNode root, TreeNode parent, ArrayList<Integer> result) {
        if(root == null) {
            return;
        }
        if(parent != null && (parent.left == null || parent.right == null)) {
            result.add(root.val);
        }
        helper(root.left, root, result);
        helper(root.right, root, result);
    }
}
```

Version2
```java
public List<Integer> getLonelyNodes(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    getLonelyNodes(root, false, nodes);
    return nodes;
}

public void getLonelyNodes(TreeNode root, boolean isLonely, List<Integer> nodes) {
    if(root == null) {
        return;
    }
    if(isLonely) {
        nodes.add(root.val);
    }
    getLonelyNodes(root.left, root.right == null, nodes);
    getLonelyNodes(root.right, root.left == null, nodes);
}
```

Version3 - DFS
```java
public List<Integer> getLonelyNodes(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if(root == null) {
        return result;
    }
}
public void dfs(TreeNode node, List<Integer> res) {
    if(node.left == null && node.right == null) {
        return;
    }
    if(node.left != null && node.right != null) {
        dfs(node.left, res);
        dfs(node.right, res);
    } else if(node.left != null) {
        res.add(node.left.val);
        dfs(node.left, res);
    } else {
        res.add(node.right.val);
        dfs(node.right, res);
    }
}
```

