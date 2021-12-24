---
sidebar_label: "71 Pacific Atlantic Water Flow"
sidebar_position: 71
---
# 417. Pacific Atlantic Water Flow
There is an `m x n` rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an `m x n` integer matrix heights where `heights[r][c]` represents the height above sea level of the cell at coordinate `(r, c)`.

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a __2D list__ of grid coordinates result where `result[i] = [ri, ci]` denotes that rain water can flow from cell `(ri, ci)` to __both__ the Pacific and Atlantic oceans.

__Example 1:__
![pacific and atlantic ocean](https://assets.leetcode.com/uploads/2021/06/08/waterflow-grid.jpg)
```
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
```
__Example 2:__
```
Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]
```

__Constraints:__
* `m == heights.length`
* `n == heights[r].length`
* `1 <= m, n <= 200`
* `0 <= heights[r][c] <= 105`

## Solution
### solution 1, python
Start from each point, and dfs its neighbor if the neighbor is equal or less than itself, and maintain two boolean matrix for two oceans, indicating an ocean can reach to that point or not. finally go through all nodes to see if it can be both reached by two oceans.
1. init a directions var like `self.directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]` so that we can explore from a node in the four directions
```
for direction in self.directions
    x, y = i + direction[0], j + direction[1]
```
2. dfs helper methond for exploring a matrix
```
def dfs(self, i, j, matrix, visited, m, n):
    if visited:
        # return or return a value
    for dir in self.directions:
        x, y = i + dir[0], j + dir[1]
            if x < 0 or x >= m or y < 0 or y >= n or matrix[x][y] <= matrix[i][j]: 
            continue
            # do something like
            visited[i][j] = True
            # explore the next level 
            self.dfs(x, y, matrix, visited, m, n)
```
__solution for this question__
```python
class Solution(object):
    def pacificAtlantic(self, matrix):
        if not matrix: return []
        self.directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        m = len(matrix)
        n = len(matrix[0])
        p_visited = [[False for _ in range(n)] for _ in range(m)]
        a_visited = [[False for _ in range(n)] for _ in range(m)]
        result = []

        for i in range(m):
            self.dfs(matrix, i, 0, p_visited, m, n)
            self.dfs(matrix, i, n - 1, a_visited, m, n)
        for j in range(n):
            self.dfs(matrix, 0, j, p_visited, m, n)
            self.dfs(matrix, m - 1, j, a_visited, m, n)

        for i in range(m):
            for j in range(n):
                if p_visited[i][j] and a_visited[i][j]:
                    result.append([i, j])
        return result

    def dfs(self, matrix, i, j, visited, m, n):
        visited[i][j] = True
        for dir in self.directions:
            x, y = i + dir[0], j + dir[1]
            if x < 0 or x >= m or y < 0 or y >= n or visited[x][y] or matrix[x][y] < matrix[i][j]:
                continue
            self.dfs(matrix, x, y, visited, m, n)


```

## solution 2 DFS + bit mask
```java
public class Solution {
    private List<List<Integer>> res = new ArrayList<>();
    private int[][] visited;
    private int[][] dirs = new int[][]{{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

    public List<List<Integer>> pacificAtlantic(int[][] matrix) {
        if(matrix == null || matrix.length == 0) {
            return res;
        }

        visited = new int[matrix.length][matrix[0].length];

        for(int i = 0; i < matrix.length; i++) {
            dfs(matrix, i, 0, Integer.MIN_VALUE, 1);
            dfs(matrix, i, matrix[0].length - 1, Integer.MIN_VALUE, 2);
        }

        for(int j = 0; j < matrix[0].length; j++) {
            dfs(matrix, 0, j, Integer.MIN_VALUE, 1);
            dfs(matrix, matrix.length - 1, j, Integer.MIN_VALUE, 2);
        }

        return res;
    }

    private void dfs(int[][] matrix, int row, int col, int preHeight, int mark) {
        if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || matrix[row][col] < preHeight || (visited[row][col] & mark) == mark) {
            return;
        }
        visited[row][col] |= mark;
        if(visited[row][col] == 3) {
            res.add(new ArrayList<Integer>(List.of(row, col)));
        }
        for( int[] dir : dirs) {
            int newRow = row + dir[0], newCol = col + dir[1];
            dfs(matrix, newRow, newCol, matrix[row][col], visited[row][col]);
        }
    }
}
```

### DFS solution
```java
public class Solution {
    public List<int[]> pacificAtalantic(int[][] matrix) {
        List<int[]> res = new LinkedList<>();
        if(matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return res;
        }
        int n = matrix.length, m = matrix[0].length;
        boolean[][] pacific = new boolean[n][m];
        boolean[][] atlantic = new boolean[n][m];
        for(int i = 0; i < n; i++) {
            dfs(matrix, pacific, Integer.MIN_VALUE, i, 0);
            dfs(matrix, atlantic, Integer.MIN_VALUE, i, m - 1);
        }
        for(int i = 0; i < m; i++) {
            dfs(matrix, pacific, Integer.MIN_VALUE, 0, i);
            dfs(matrix, atlantic, Integer.MIN_VALUE, n - 1, i);
        }

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(pacific[i][j] && atlantic[i][j]) {
                    res.add(new int[]{i, j});
                }
            }
        }
        retudrn res;
    }
    public void dfs(int[][] matrix, boolean[][] visited, int height, int x, int y) {
        int n = matrix.length, m = matrix[0].length;
        if(x < 0 || x >= n || y < 0 || y >= m || visited[x][y] || matrix[x][y] < height) {
            return;
        }
        visited[x][y] = true;
        for(int[] d : dir) {
            dfs(matrix, visited, matrix[x][y], x + d[0], y + d[1]);
        }
    }
}
```
