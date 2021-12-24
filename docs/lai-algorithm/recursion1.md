---
sidebar_label: "Recursion 1"
sidebar_position: 2
---
1. 表象上：
2. 实质上：
3. 实现层面：
1. base case:
2. Rescursive rule:

```java
public int a_pow_b(int a, int b) {
    if(b == 0) {
        return 1;
    }
   int halfResult = a_pow_b(a, b/2);
    if(n % 2 == 0 ) {
        return halfResult * halfResult;
    } else {
        return halfResult * halfResult * a;
    }
    
}
```
# Binary Search
## Clasical version 1
```java
int binarySearch(int[] a, int target) {
    if(a == null || a.length == 0) {
        return -1;
    }
    int left = 0, right = a.length - 1;
    while(left <= right){
        int mid = left +(right - left) / 2;
        if(target == a[mid]) {
            return mid;
        }
        if(target < a[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
```
## 2D Space binary search
1   2    3   4
5   6    7   8
9   10   11  12
how to map back to get coordiates in 2D array
    index => [index / col, index % col]

```java
public boolean binarySearch2D(int[][] matrix, int target) {
    if(matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    int row = matrix.length;
    int col = matrix[0].length;
    int i = 0;
    int j = row * col - 1;
    while(i <= j) {
        int mid = i + (j - i) / 2;
        int r = mid / col;
        int c = mid % col;
        if(matrix[r][c] == target) {
            return true;
        } else if ( matrix[r][c] > target) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
    return false;
}
```

## how to find the cloest to the target number?
You have to be very sure which part to remove, don't be too aggressive
// stop 1 step early before previous case
while(left < right - 1) {

}
// post processing




