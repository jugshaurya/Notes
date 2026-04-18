---
title: "Power"
slug: python-2-programs-including-datastructure-python-3-recursion
date: 2022-01-30
authors: [shaurya]
tags: [python, programming, recursion]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/2-Programs-including-Datastructure-Python/3.Recursion.ipynb)
>
> **Category**: Python / 2 Programs including Datastructure Python

<!-- truncate -->

## Changing recusion limit in Python

```
import sys
sys.setrecursionlimit(11000)
```

# Power

```python
## Read input as specified in the question.
## Print output as specified in the question.

def power(x,n):
    if n==0:
        return 1
    return x*power(x,n-1)

import sys
sys.setrecursionlimit(11000)

x,n = [int(a) for a in input().split()]
print(power(x,n))
```

**Output:**
```
2 10
1024
```

# N-natural Number print

```python
def printN(n):
    if n==0:
        return
    
    printN(n-1)
    print(n,end=' ')
```

```python
printN(10)
```

**Output:**
```
1 2 3 4 5 6 7 8 9 10
```

# Fibonacci Number

```python
def fib(n):
    if n<0:
        return None
    
    if n <=1:
        return n
    
    return fib(n-1) + fib(n-2)
```

```python
print(fib(-1))
print(fib(0))
print(fib(1))
print(fib(2))
print(fib(3))
print(fib(4))
print(fib(5))
print(fib(6))
print(fib(7))
print(fib(8))
print(fib(9))
print(fib(10))
```

**Output:**
```
None
0
1
1
2
3
5
8
13
21
34
55
```

# Check List is Sorted or not

```python
def isSorted(l):
    
    if len(l) == 1:
        return True
    
    if l[0] <l[1]:
        return isSorted(l[1:])
    else:
        return False
```

```python
isSorted([3,4,8,9])
```

**Output:**
```
True
```

```python
isSorted([3,4,8,9,15,1])
```

**Output:**
```
False
```

# Sum of Array

```python
def sumArray(arr):
    # Please add your code here
    if len(arr) == 0:
        return 0

    return arr[0] + sumArray(arr[1:])


print(sumArray([1,6,10]))
```

**Output:**
```
17
```

## isPresent
Given an array of length N and an integer x, you need to find if x is present in the array or not. Return true or false.

```python
def isPresent(l,x):
    if len(l) == 0:
        return False
    
    if l[0] == x:
        return True
    
    return isPresent(l[1:], x)
```

```python
isPresent([1,2,3,4,5],5)
```

**Output:**
```
True
```

```python
isPresent([1,2,3,4,5],15)
```

**Output:**
```
False
```

## First Index of Number - Question

Given an array of length N and an integer x, you need to find and return the first index of integer x present in the array. Return -1 if it is not present in the array.

First index means, the index of first occurrence of x in the input array.
Do this recursively. Indexing in the array starts from 0.

```python
def first_index(arr,x):
    
    if len(arr) == 0:
        return -1
    
    if arr[0] == x:
        return 0
    smallans = first_index(arr[1:],x)
    if smallans!=-1:
        return smallans + 1
    return smallans

n=int(input())
arr=list(int(i) for i in input().strip().split(' '))
x=int(input())
print(first_index(arr, x))
```

**Output:**
```
7
1 2 3 4 3 2 1
3
2
```

## Last Index Of Number Question

Given an array of length N and an integer x, you need to find and return the last index of integer x present in the array. Return -1 if it is not present in the array.
Last index means - if x is present multiple times in the array, return the index at which x comes last in the array.
You should start traversing your array from 0, not from (N - 1).
Do this recursively. Indexing in the array starts from 0.

```python
def last_index(arr,x):
    
    if len(arr) == 0:
        return -1
    
    if arr[-1] == x:
        return len(arr) - 1
    
    smallans = last_index(arr[:-1], x)
    
    return smallans

n=int(input())
arr=list(int(i) for i in input().strip().split(' '))
x=int(input())
print(last_index(arr, x))
```

**Output:**
```
7
1 2 3 4 3 2 1
3
4
```

## Recursion over strings(like list can use index or can use slicing)

### Remove X
Given a string, compute recursively a new string where all 'x' chars have been removed.

```python
def remove_x(string):
    if len(string) == 0 :
        return string
    
    small = remove_x(string[1:])
    if string[0] == 'x':
        return small
    return string[0] + small

remove_x('xdxdxxgdggxdg')
```

**Output:**
```
'ddgdggdg'
```

# Binary Search (# list must be sorted)

```python
def binarySearch(arr,ele):
    n = len(arr) 
    start = 0
    end = n - 1
    while(start<=end):
        mid = (start + end) // 2
        if arr[mid] == ele:
            return mid
        elif arr[mid] < ele :
            #search in right part
            start = mid + 1
        else : 
            end = mid - 1
    else:
        return -1
    
    return mid
```

```python
binarySearch([1,2,3,4,5,6,7,8], 6)
```

**Output:**
```
5
```

```python
# using recursion

def binarySearchRec(arr,ele,start,end):

    if start >end:
        return -1
    
    mid = (start + end) // 2
    if arr[mid] == ele:
        return mid
    elif arr[mid] < ele :
        #search in right part
        return binarySearchRec(arr,ele,mid+1,end)
    else : 
        return binarySearchRec(arr,ele,start,mid-1)
```

```python
arr = [1,2,3,4,5,6,7,8,9]
end = len(arr) - 1
binarySearchRec(arr,11, 0, end)
```

**Output:**
```
-1
```

# Merge Sort

```python
def merge(arr,start,end):
    
    mid = (start + end) // 2
    i  = start
    j = mid + 1
    
    new_arr = []
    while(i <= mid and j <=end):
        if arr[i] < arr[j]:
            new_arr.append(arr[i])
            i += 1
        else : 
            new_arr.append(arr[j])
            j += 1
            
    while(i <= mid):
        new_arr.append(arr[i])
        i += 1
            
    while(j <=end):
        new_arr.append(arr[j])
        j += 1
            
#     for i in range(start)
    arr[start:end+1] = new_arr
```

```python
def mergeSort(arr,start,end):
    
    if start >= end : # 1 or lesser element are always sorted
        return 
    
    mid = (start + end) // 2
    mergeSort(arr,start,mid)
    mergeSort(arr,mid+1,end)
    merge(arr, start, end)
```

```python
arr = [9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8]
mergeSort(arr,0,len(arr)-1)
print(arr)
```

**Output:**
```
[0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9]
```

# QuickSort

```python
def partition_cb(arr,start,end):
    
    pivot = arr[end]
    
    pivotIndex = start
    for i in range(start,end+1):
        if arr[i] < pivot : 
            arr[i], arr[pivotIndex] = arr[pivotIndex], arr[i]  
            pivotIndex += 1
        else:
            pass # we found out index where element is greater than pivot 
                # so that in next index if we found smaller we can swap them as pivotIndex won't move.
        
    arr[end] ,arr[pivotIndex] = arr[pivotIndex], arr[end]
    return pivotIndex
```

```python
def quick_sort(arr,start,end):
    if start >= end:
        return 
    
    index = partition_cb(arr,start,end)
    quick_sort(arr,start,index-1)
    quick_sort(arr,index+1,end)
```

```python
arr = [9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,10,11]
quick_sort(arr,0,len(arr)-1)
print(arr)
```

**Output:**
```
[0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10, 11]
```

```python
# second version of Partition function
```

```python
def partition_cn(arr,start,end):
    
    pivot = arr[end]
    # counting how many are smaller than count
    count = 0
    for i in range(start,end+1):
        if arr[i] < pivot : 
            count += 1
           
    arr[count+start], arr[end] = arr[end], arr[count+start] 
    
    left = start
    right = end
    while(left < count+start and right > count + start) : 
        if arr[left] < pivot :
            left += 1
            continue
        
        if arr[right] >= pivot :
            right -= 1
            continue
        
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    
    return count + start
```

```python
def quick_sort2(arr,start,end):
    if start >= end:
        return 
    
    index = partition_cn(arr,start,end)
    quick_sort2(arr,start,index-1)
    quick_sort2(arr,index+1,end)
```

```python
arr = [9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,10,11]
quick_sort2(arr,0,len(arr)-1)
print(arr)
```

**Output:**
```
[0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10, 11]
```

## Tower Of Hanoi - Problem
Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move all disks from source rod to destination rod using third rod (say auxiliary). The rules are :
```
1) Only one disk can be moved at a time.
2) A disk can be moved only if it is on the top of a rod.
3) No disk can be placed on the top of a smaller disk.
```
Print the steps required to move n disks from source rod to destination rod.

Source Rod is named as 'a', auxiliary rod as 'b' and destination rod as 'c'.
```
Sample Input :
2
Sample Output :
a b
a c
b c
```

```python
def tower_of_hanoi(n):
    helper(n,'a','b','c')

def helper(n,src,aux,des):
    if n <= 0 :
        return
    
    if n == 1 : 
        print(src, des)
        return
    
    helper(n-1,src,des,aux)
    print(src,des)
    helper(n-1,aux,src,des)
    
import sys
sys.setrecursionlimit(11000)
n = int(input())
tower_of_hanoi(n)
```

**Output:**
```
3
a c
a b
c b
a c
b a
b c
a c
```

## Geometric Sum
Given k, find the geometric sum i.e.
1 + 1/2 + 1/4 + 1/8 + ... + 1/(2^k) 
using recursion. Return the answer.

```python
def gp(n):
    if n == 0:
        return 1
    
    return (1/(2)**(n)) + gp(n-1)
```

```python
gp(3)
```

**Output:**
```
1.875
```

## Check Palindrome (recursive)
Check if a given String S is palindrome or not (using recursion). Return true or false.
```
Input Format :
String S
Output Format :
true or false
Sample Input 1 :
racecar
Sample Output 1:
true
Sample Input 2 :
ninja
Sample Output 2:
false
Download Test Cases
```

```python
def isPalindrome(n):
    
    if len(n) == 0 or len(n)==1:
        return True
    
    if n[0] == n[-1]:
        return isPalindrome(n[1:-1])
    return False

n = input()
if isPalindrome(n):
    print('true')
else:
    print('false')
```

**Output:**
```
racecar
true
```

## Check AB

Suppose you have a string made up of only 'a' and 'b'. Write a recursive function that checks if the string was generated using the following rules:
```
a. The string begins with an 'a'
b. Each 'a' is followed by nothing or an 'a' or "bb"
c. Each "bb" is followed by nothing or an 'a'
If all the rules are followed by the given string, return true otherwise return false.
Sample Input:
abb
Sample Output:
true
```

```python
#TODO
```