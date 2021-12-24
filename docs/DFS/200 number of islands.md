---
sidebar_label: "1. Number of Islands "
sidebar_position: 1
---

# Leetcode 200 


Given an `m x n` 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An __island__ is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

__Example 1:__
```shell
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

__Example 2:__
```shell
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

**Example 3:**
```shell
Input: nums = [3,3], target = 6
Output: [0,1]
```

__Constrains:__
+ `m == grid.length`
+ `n == grid[i].length`
+ `1 <= m, n <= 300`
+ `grid[i][j] is '0' or '1'.`

## Solution
### Java
```java
class Solution {


}
```
### BFS
```java
public class Solution {
    int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    public int numIslands(char[][] grid) {
        if(grid == 0 || grid.length == 0) {
            return 0;
        }
        int islands = 0;
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j <grid[0].length; j++) {
                if(grid[i][j] == '1') {
                    islands++;
                    BFS(grid, i, j);
                }
            }
        }
        return islands;
    }

    private void BFS(char[][] grid, int x, int y) {
        grid[x][y] = '0';
        Queue<Point> q = new LinkedList<Point>();
        q.offer(new Point(x, y));
        while(q.size() > 0) {
            int size = q.size();
            Point p = q.poll();
            for(int i = 0; i < size; i++) {
                for(int[] dir : dirs) {
                    int x1 = p.x + dir[0];
                    int y1 = p.y + dir[1];
                    if(x1 >= 0 && y1 >= 0 && x1 < grid.length && y1 < grid[0].length && grid[x1][y1] =='1') {
                        grid[x1][y1] = '0';
                        q.offer(new Point(x1, y1));
                    }
                }
            }
        }
    }
}
```

