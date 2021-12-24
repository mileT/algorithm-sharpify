---
sidebar_label: "77 K Closest Points to Origin"
sidebar_position: 77
---
# 516. 973. K Closest Points to Origin
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

__Example 1:__
```
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
```
__Example 2:__
```
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
```

__Constraints:__

* 1 <= k <= points.length <= 104
* -104 < xi, yi < 104

# Solution 1, use  max heap
```java

class Solution {
    public int[][] kClosest(int[][] points, int K) {
        int[][] result = new int[K][2];
        PriorityQueue<int[]> heap = new PriorityQueue<int[]>(K, (a, b) -> (
            (b[0] * b[0] + b[1] * b[1] - a[0] * a[0] - a[1] * a[1]);
        ));

        int size = 0;
        for(int[] point : points) {
            heap.offer(point);
            size++;
            if(size > K) {
                heap.poll();
                size--;
            }
        }

        for(int i = 0; i < K; i++) {
            result[i] = heap.poll();
        }

        return result;
    }
}
```

# Solution 2, select sort
```java
class Solution {
    public int[][] kClose(int[][] points, int K) {

    }
    private int helper(int[][] A, int l, int r) [
        int[] pivot = A[l];
        while(l < r) {
            while(l < r && compare(A[r], pivot) >= 0) {
                r--;
            }
            A[l] = A[r];
            while(l <r && compare(A[l],pivot) <= 0) {
                l++;
            }
            A[r] = A[l];
        }
        A[l] = pivot;
        return l;
    ]
    private int compare(int[] p, int[] q) {
        return p[0] * p[0] + p[1] * p[1] - q[0] * q[0] - q[1] * q[1]; 
    }
}
```