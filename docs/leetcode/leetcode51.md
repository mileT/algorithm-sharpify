---
sidebar_label: "51 N-Queens"
sidebar_position: 1
---
# N-Queens
## Description
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

** Example 1:**

![image](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg "Example 1 iamge")
```shell
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
```

** Example 2: **
```shell
Input: n = 1
Output: [["Q"]]
```

Constraints:
```
1 <= n <= 9
```

## Solution


## Code
### solution 1
```java
public class Solution {
    public List<List<String>> solveNQueen(int n) {
        char[][] board = new char[n][n];
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                board[i][j] = '.';
            }
        }
        List<List<String>> result = new ArrayList<List<String>>();
        dfs(board, 0, reslt);
        result result;

    }

    private void dfs(char[][] board, int col, List<List<String>> result) {
        if(col == board.length) {
            result.add(construct(board));
            return;
        }

        for(int i = 0; i < board.length; i++) {
            if(validate(board, i, col)) {
                board[i][col] = 'Q';
                dfs(board, col + 1; result);
                board[i][col] = '.';
            }
        }
    }

    private boolean validate(char[][] board, int x, int y) {
        for(int i = 0; i < board.length; i++) {
            for(int j = 0; j < y; j++) {
                if(board[i][j] == 'Q' && (x == i || x - i == y -j || x - i = j - y )) {
                    return false;
                }
            }
        }
        return true;
    }

    private List<List<String>> construct(char[][] board) {
        List<String> result = new LinkedList<String>();
        for(int i = 0; i < board.length; i++) {
            String s = new String(board[i]);
            result.add(s);
        }
        return result;
    }
}
```

```java
class Solution {
    int rows[];
    int hills[];
    int dales[];
    int n;
    List<List<String>> output = new ArrayList();
    // queens positions
    int queens[];
    
    public boolean isNotUnderAttack(int row, int col) {
        int res = rows[col] + hills[row -col + 2 * n] + dales[row + col];
        return res == 0;
    }
    
    public void placeQueen(int row, int col) {
        queens[row] = col;
        rows[col] = 1;
        hills[row - col + 2 * n] = 1;
        dales[row + col] = 1;
    }
    
    public void removeQueen(int row, int col) {
        queens[row] = 0;
        rows[col] = 0;
        hills[row - col + 2 * n] = 0;
        dales[row + col] = 0;
    }
    
    public void backtrack(int row) {
        for(int col = 0; col < n; col++) {
            if(isNotUnderAttack(row, col)) {
                placeQueen(row, col);
                if(row + 1 == n) {
                    addSolution();
                } else {
                    backtrack(row + 1);
                }
                removeQueen(row, col);
            }
        }
    }
    
    public void addSolution() {
        List<String> solution = new ArrayList<String>();
        for(int i = 0; i < n; i++) {
            int col = queens[i];
            StringBuilder sb = new StringBuilder();
            for(int j = 0; j < col; j++) {
                sb.append(".");
            }
            sb.append("Q");
            for(int j = col + 1; j < n; j++) {
                sb.append(".");
            }
            solution.add(sb.toString());
        }
        output.add(solution);
    }
    
    public List<List<String>> solveNQueens(int n) {
        this.n = n;
        rows = new int[n];
        hills = new int[4 * n - 1];
        dales = new int[2 * n - 1];
        queens = new int[n];
        backtrack(0);
        return output;
        
    }
}
```
Solution 2:

```java
class Solution {
    public List<List<String>> solveNQueens(int n) {
        char[][] chess = new char[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                chess[i][j] = '.';
            }
        }
        List<List<String>> res = new ArrayList<List<String>>();

        solve(res, chess, 0);
        return res;
    }
    private void solve(List<List<String>> res, char[][] chess, int row) {
        if (row == chess.length) {
            res.add(construct(chess));
            return;
        }
        for (int col = 0; col < chess.length; col++) {
            if (valid(chess, row, col)) {
                chess[row][col] = 'Q';
                solve(res, chess, row + 1);
                chess[row][col] = '.';
            }
        }
    }
    private boolean valid(char[][] chess, int row, int col) {
        // check all cols
        for (int i = 0; i < row; i++) {
            if (chess[i][col] == 'Q') {
                return false;
            }
        }
        //check 45 degree
        for (int i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
            if (chess[i][j] == 'Q') {
                return false;
            }
        }
        //check 135
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chess[i][j] == 'Q') {
                return false;
            }
        }
        return true;
    }
    private List<String> construct(char[][] chess) {
        List<String> path = new ArrayList<>();
        for (int i = 0; i < chess.length; i++) {
            path.add(new String(chess[i]));
        }
        return path;
    }
}
```