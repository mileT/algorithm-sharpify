---
sidebar_label: "Array & Sorting Algorithm"
sidebar_position: 1
---
// Add to the top of the file below the front matter.
import useBaseUrl from '@docusaurus/useBaseUrl';

## A complete answer will include the following:
1. Document your assumptions
2. Explain your approach and how you intend to solove the problem
3. Provide code comments where applicable
4. Expalin the big-O run time complexity of your solution. Justify your answer
5. Identify any additional data structrues you used and justify why you used them.
6. Only provide your best answer to each part of the question

## Selection Sort
```java
// slection sort an array a[] with size n in ascending order
void SelectionSort(int a[], int n) {
    int global, temp;
    for(int i = 0; i < n-1; i++) { // outer loop: how many iterations
        global = i;
        for(int j = i + 1; j < n; j++) { // inner loop: find the global min from the rest elements
            if(a[j] < a[global]) {
                // record the index of the smallest element.
                glocal = j;
            }
        }
        temp = a[i];
        a[i] = a[global];
        a[global] = tem; 
    }
}
```
Time complexity analysis
1 + 2 + 3 + ... + n = n(n + 1)/2 = O(n^2)

## Q2 
Given an array stored in stack1, how to sort the numbers by using additional two stacks

## Merge Sort
![mergesort](/img/lai/class1_mergesort.png)
<!-- <img alt="Docusaurus with Keytar" src={useBaseUrl('/img/lai/class1_mergesort.png')} > -->

```cpp
vector<int> mergeSort(vector<int>& a, int left, int right) {
    vector<int> solution;
    if(left == right) {
        solution.push_back(array[left]);
        return solution;
    }
    int mid = left + (right - left) / 2;
    vector<int> solution_left = mergeSort(a, left, mid);
    vector<int> solution_right = mergeSort(a, mid + 1, right);
    solution = combine(solution_left, solution_right);
    return solution;
}
```
Time = O(nlogn)
Space = O(n)

### similar questions
1. merge sort a linkedlist
2. reverse merge sort

## Quick Sort
xxxxxxxDxxxxx
   /      \
xxTxx     xxxJX
两个挡板 i， j 三个区域
 i 的左侧， 不包括i 全部为比 pivot 小的数
 i 和 j 之间为未知探索区域
 j 的右侧 不包括 j 全部为比pivot 大的数

### Q2.4 Rainbow sort: