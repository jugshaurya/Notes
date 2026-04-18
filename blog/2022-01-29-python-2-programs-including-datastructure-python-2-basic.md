---
title: "Number is Prime # O(n)"
slug: python-2-programs-including-datastructure-python-2-basic
date: 2022-01-29
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/2-Programs-including-Datastructure-Python/2.Basic.ipynb)
>
> **Category**: Python / 2 Programs including Datastructure Python

<!-- truncate -->

# Number is Prime # O(n)

```python
n = int(input())

for i in range(2,n):
    if n%i==0:
        print('Not Prime')
        break
else: # will run only if for loop runs completely no breakage in b/w
    print('Prime')
```

**Output:**
```
11
Prime
```

# O(n^(1/2))

```python
n = int(input())
import math

x = int(math.sqrt(n)+1)
for i in range(2,x):
    if n%i==0:
        print('Not Prime')
        break
else: 
    print('Prime')
```

**Output:**
```
11
Prime
```

```python
# F to Celcius

s = int(input())
e = int(input())
step = int(input())
while s<=e:
    result = int((5/9) *(s-32))
    print(s,result,sep='\t')
    s+=step
```

**Output:**
```
0
100
20
0	-17
20	-6
40	4
60	15
80	26
100	37
```

### Fibonacci Member
Given a number N, figure out if it is a member of fibonacci series or not. Return true if the number is member of fibonacci series else false.

```python
n = int(input())

def isMember(n):
    if n==0 or n==1:
        return True
    a = 1 
    b = 1
    
    while(a<=n):
        mid = a + b
        a = b
        b = mid
        if mid == n:
            return True
    else:
        return False

if isMember(n):
    print('true')
else:
    print('false')
```

**Output:**
```
11
false
```

# Palindrome
Write a program to determine if given number is palindrome or not. Print true if it is palindrome, false otherwise.

```python
n = input()
def isPalindrome(n):
    rev = n[::-1] 
    if rev == n:
        return True
    else:
        return False
    
if isPalindrome(n):
    print('true')
else:
    print('false')
```

**Output:**
```
12321
true
```

### Check Armstrong
Write a Program to determine if the given number is Armstrong number or not. Print true if number is armstrong, otherwise print false.
- An Armstrong number is a number (with digits n) such that the sum of its digits raised to nth power is equal to the number itself.

```python
num = int(input())

def isArm(num):
    # digit count -  finding n
    temp = num
    digit_count = 0
    while(temp>0):
        digit_count += 1
        temp //= 10
    
    # raising each digit to nth power and adding them
    temp = num
    summ = 0
    while temp>0:
        digit = temp%10
        summ += digit**digit_count
        temp //= 10
    
    # comaring and returning
    return summ == num
    
if isArm(num):
    print('true')
else:
    print('false')
```

**Output:**
```
371
true
```

```python
# line seperated input
n = int(input())
li = []
for i in range(n):
    li.append(input())
print(li)
```

**Output:**
```
5
1
2
3
4
5
['1', '2', '3', '4', '5']
```

```python
# space sepearated input
n = int(input())
li = [x for x in input().split()]
li
```

**Output:**
```
5
1 2 35 7 67
['1', '2', '35', '7', '67']
```

# Linear Search

```python
n = int(input())
l = [int(x) for x in input().split()]
element_to_search = int(input())

def linearSearch(l,ele):
    for i in l:
        if i == ele:
            return True
    else:
        return False

if linearSearch(l,element_to_search):
    print('Element Found')
else:
    print('Element Not Found')
```

**Output:**
```
5
3 4 7 2 1
4
Element Found
```

# Reverse a list

```python
def rev(li):
    for i in range(len(li)//2):
        li[i],li[-i-1] = li[-i-1],li[i]
        
        
li = [1,2,3,4,5,6,7,8]
rev(li)
print(li)
```

**Output:**
```
[8, 7, 6, 5, 4, 3, 2, 1]
```

## Swap Alternate
Given an array of length N, swap every pair of alternate elements in the array.

```python
li = [1,2,3,4,6]
li2 = [2,3,5,6,7,8]

def swap_alternate(li):
    for i in range(1,len(li),2):
        li[i],li[i-1] = li[i-1],li[i]

swap_alternate(li)
swap_alternate(li2)

print(li)
print(*li)# * use to unzip things with print function only

print(li2)
print(*li2)
```

**Output:**
```
[2, 1, 4, 3, 6]
2 1 4 3 6
[3, 2, 6, 5, 8, 7]
3 2 6 5 8 7
```

```python
*[1,2,3] # see withour print function
```

**Output:**
```
SyntaxError: can't use starred expression here (cell_name, line 4)
```

```python
print(*[12,3,4])
```

**Output:**
```
12 3 4
```

```python
print(*(1,2,3,4))
```

**Output:**
```
1 2 3 4
```

```python
print(*{1,2,3,5,7,6,4,3,2,1})
```

**Output:**
```
1 2 3 4 5 6 7
```

```python
print(*{1:'a', 2:'rt'})
```

**Output:**
```
1 2
```

### Find Unique(using Xor , using frequency array,using dictionary)
In array, N numbers are present twice and one number is present only once in the array. find that single

```python
# using Xor
li = [10,2,2,1,1,6,6,8,4,4,8]
Xor = 0
for i in li:
    Xor ^= i
print(Xor)
```

**Output:**
```
10
```

```python
# using frequency array
li = [10,2,2,1,1,6,6,8,4,4,8]
ele_list = [] 
count_list = []

for i in li:
    if i in ele_list:
        index = ele_list.index(i)
        count_list[index]+=1
    else:
        ele_list.append(i)
        count_list.append(1)
        
print(ele_list)
print(count_list)


length = len(count_list)
for i in range(length):
    if  count_list[i] == 1:
        print('Unique Elements : ', ele_list[i])
        break
```

**Output:**
```
[10, 2, 1, 6, 8, 4]
[1, 2, 2, 2, 2, 2]
Unique Elements :  10
```

```python
# using dictionary
li = [10,2,2,1,1,6,6,8,4,4,8]
d = {}
for i in li:
    count_i = d.get(i,0) # returns 0 if not found
    if count_i == 0:
        d[i] = 1
    else:
        d[i] = count_i + 1
print('dictionary : ' ,d)
for i,j in d.items():
    if j == 1:
        print('Unique Element : ' , i)
```

**Output:**
```
dictionary :  {10: 1, 2: 2, 1: 2, 6: 2, 8: 2, 4: 2}
Unique Element :  10
```

#### Array intersection
Given two random integer arrays of size m and n, print their intersection. That is, print all the elements that are present in both the given arrays

```python
## Read input as specified in the question.
## Print output as specified in the question.
l1 =  [1,2,3,4]
l2 = [2,3,4,5]
for i in range(len(l1)):
    for j in range(len(l2)):
        if l1[i] == l2[j]:
            print(l1[i])
            l2[j] = -9999
            break
```

**Output:**
```
2
3
4
```

#### Pair sum
Given a random integer array A and a number x. Find and print the pair of elements in the array which sum to x.
Array A can contain duplicate elements.
- While printing a pair, print the smaller element first. That is, if a valid pair is (6, 5) print "5 6".

```python
li = [1, 3, 6, 2, 5, 4, 3, 2, 4]
for i in range(len(li)):
    for j in range(i+1,len(li)):
        if li[i] + li[j] == summ :
            if li[i]<=li[j]:
                print(li[i],li[j])
            else:
                print(li[j],li[i])
```

**Output:**
```
1 6
3 4
3 4
2 5
2 5
3 4
3 4
```

### Triplet Sum
Given a random integer array and a number x. Find and print the triplets of elements in the array which sum to x.
- While printing a triplet, print the smallest element first.
That is, if a valid triplet is (6, 5, 10) print "5 6 10". There is no constraint that out of 5 triplets which have to be printed on 1st line.

```python
n = int(input())
li = [int(x) for x in input().split()]
summ = int(input())

for i in range(len(li)):
    for j in range(i+1, len(li)):
        for k in range(j+1, len(li)):
            if li[i] + li[j] + li[k] == summ:
                temp = []
                temp.append(li[i])
                temp.append(li[j])
                temp.append(li[k])
                temp = sorted(temp)
                for alpha in temp:
                    print(alpha,end=' ')
                print()
```

**Output:**
```
7
1 2 3 4 5 6 7
12
1 4 7 
1 5 6 
2 3 7 
2 4 6 
3 4 5
```

#### Sort 0 1
You are given an integer array A that contains only integers 0 and 1. Write a function to sort this array. Find a solution which scans the array only once. Don't use extra array.

```python
n = int(input())
li = [int(x) for x in input().split()]

zero_count = 0
ones_count = 0

for ele in li:
    if ele == 0:
        zero_count+=1
    else:
        ones_count+=1

print('0 '*zero_count,end='')
print('1 '*ones_count)
```

**Output:**
```
7
0 1 0 1 1 0 1
0 0 0 1 1 1 1
```

```python
# Searching and Sorting
```

# Binary Search

```python
n = int(input())
sorted_arr = [int(x) for x in input().split()]
x = int(input())

start = 0
end = n - 1
while start <= end :
    mid = (start + end) // 2
    if sorted_arr[mid] == x :
        print(mid)
        break
    elif sorted_arr[mid] < x :
        # search Right
        start = mid + 1
    else:
         # search Left
        end = mid - 1 
else: 
    print(-1)
```

**Output:**
```
5
1 2 3 4 5
1
0
```

# Selection Sort

```python
arr = [int(x) for x in input().split()]

n = len(arr)
for i in range(n):
    mini = 999999
    min_index = 0
    for j in range(i, n):
        if arr[j] < mini:
            mini = arr[j]
            min_index = j
    arr[min_index], arr[i] = arr[i] , arr[min_index]

print('ans : ' , *arr)
```

**Output:**
```
5 4 3 21
ans :  3 4 5 21
```

# Bubble Sort

```python
arr = [int(x) for x in input().split()]
n = len(arr)

for i in range(n):
    maxi = -99999
    maxi_index = -1
    for j in range(n-i) :
        if arr[j] > maxi :
            maxi = arr[j]
            maxi_index = j
    arr[n-i-1], arr[maxi_index] = arr[maxi_index] , arr[n-i-1]

print('ans : ' , *arr)
```

**Output:**
```
5 4 3 2 1
ans :  1 2 3 4 5
```

# Insertion Sort

```python
arr = [int(x) for x in input().split()]
n = len(arr)

for i in range(1,n):
    curr_i = i 
    for j in range(i-1, -1, -1) :
        if arr[curr_i] < arr[j]:
            arr[curr_i], arr[j] = arr[j], arr[curr_i]
            curr_i = j
        else:
            break
        
print('ans : ' , *arr)
```

**Output:**
```
5 4 3 2 1 0 -1 -1
ans :  -1 -1 0 1 2 3 4 5
```

# Merge two sorted Arrays

```python
def merge(arr1, arr2):
    
    l1, l2 = len(arr1), len(arr2)
    i, j = 0, 0
    
    arr = []
    while(i<l1 and j<l2):
        if arr1[i] < arr2[j]:
            arr.append(arr1[i])
            i+=1
        else:
            arr.append(arr2[j]) 
            j+=1
    
    while(i<l1):
        arr.append(arr1[i])
        i+=1
        
    while(j<l2):
        arr.append(arr2[j])
        j+=1
        
    return arr
```

```python
arr1 = [int(x) for x in input().split()]
arr2 = [int(x) for x in input().split()]
merge(arr1,arr2)
```

**Output:**
```
5 6 8 
2 7 11
[2, 5, 6, 7, 8, 11]
```

# Second Largest in array

```python
def second_largest(arr):
    
    maxi = -999
    for i in arr:
        if i>maxi:
            maxi = i
    second_maxi = -999
    for i in arr:
        if i!=maxi and i>second_maxi:
            second_maxi = i
    return second_maxi

arr = [1,2,3,4]
second_largest(arr)
```

**Output:**
```
3
```

# Check array rotation
Given an integer array, which is sorted (in increasing order) and has been rotated by some number k in clockwise direction. Find and return the k.

```python
def returnK(arr):
    for i in range(len(arr)-1):
        if arr[i] >arr[i+1]:
            return i+1
    
n = input()
arr = [int(x) for x in input().split()]
print(returnK(arr))
```

**Output:**
```
5
1 2 3 0 0
3
```

## Sort 0 1 2
You are given an integer array containing only 0s, 1s and 2s. Write a solution to sort this array using one scan only.

```python
def sort012(arr):
    zeros_count = 0
    ones_count = 0
    twos_count = 0

    for i in arr:
        if i == 0 :
            zeros_count+=1
        if i == 1 :
            ones_count+=1
        if i == 2 :
            twos_count+=1
    
    print('0 '*zeros_count,end='')
    print('1 '*ones_count,end='')    
    print('2 '*twos_count,end='')    
    
sort012([1,2,2,1,1,1,0,0])
```

**Output:**
```
0 0 1 1 1 1 2 2
```

## Sum of two arrays
Two random integer arrays are given A1 and A2, in which numbers from 0 to 9 are present at every index (i.e. single digit integer is present at every index of both given arrays).

- You need to find sum of both the input arrays (like we add two integers) and put the result in another array i.e. output array (output arrays should also contain only single digits at every index).
- The size A1 & A2 can be different.
- Note : Output array size should be 1 more than the size of bigger array and place 0 at the 0th index if there is no carry. No need to print the elements of output array.

```python
def sumArray(arr1,arr2):
    
    ans = [] 
    i = len(arr1) - 1
    j = len(arr2) - 1    

    carry = 0
    while i>=0 and j>=0 :
        summ = arr1[i] + arr2[j] + carry
        rem = summ % 10
        carry = summ // 10
        ans.append(rem)
        i -= 1
        j -= 1
    
    while i>=0 :
        summ = arr1[i] + carry
        rem = summ % 10
        carry = summ // 10
        ans.append(rem)
        i -= 1
        
    while j>=0 :
        summ = arr2[j] + carry
        rem = summ % 10
        carry = summ // 10
        ans.append(rem)
        j -= 1
    
    ans.append(0 + carry)
    print(*ans[::-1])
    

    
sumArray([9,9,9,9,9,9],[9,9])
```

**Output:**
```
1 0 0 0 0 9 8
```

# Check Permutation

```python
## Read input as specified in the question.
## Print output as specified in the question.
s1 = input()
s2 = input()

if sorted(s1)==sorted(s2):
    print('true')
else:
    print('false')
```

**Output:**
```
shaurya
ayraush
true
```

### Remove Consecutive Duplicates


Given a string, remove all the consecutive duplicates that are present in the given string. That means, if 'aaa' is present in the string then it should become 'a' in the output string.

```python
def remove_cons_dupl(string):
    ans = ''
    for i in range(len(string)-1):
        if string[i] == string[i+1]:
            continue
        else:
            ans = ans + string[i]
            
    ans += string[-1]
    return ans
```

```python
result = remove_cons_dupl('aabbcccc')
result
```

**Output:**
```
'abc'
```

### Reverse Each Word
Given a string S, reverse each word of a string individually. For eg. if a string is "abc def", reversed string should be "cba fed".

```python
arr = [x for x in input().split()]
for word in arr:
    print(word[::-1],end=' ')
```

**Output:**
```
i am reverse string
i ma esrever gnirts
```

### Remove character

- Given a string and a character x. Write a function to remove all occurrences of x character from the given string.

```python
def removeX(string,x):
    ans = ''
    for i in string:
        if i != x:
            ans += i
    return ans

string = input()
x = input()
print(removeX(string,x))
```

**Output:**
```
shaurya
a
shury
```

### Highest Occuring Character

Given a string, find and return the highest occurring character present in the given string.
- If there are 2 characters in the input string with same frequency, return the character which comes first.

```python
def highest_char_firstAvailable(string):
    
    # storing frequency
    d = {}
    for i in string:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1

    
    # finding max frequency
    max_frequency = -1
    for freq in d.values():
        if freq > max_frequency:
            max_frequency = freq
    
    # finding first character with max-frequency
    for i in string:
        if d[i] == max_frequency:
            return i
        
ans = highest_char_firstAvailable('aabbcc')          
print(ans)
```

**Output:**
```
a
```

### Compress the String

- Write a program to do basic string compression. For a character which is consecutively repeated more than once, replace consecutive duplicate occurrences with the count of repetitions.
For e.g. if a String has 'x' repeated 5 times, replace this "xxxxx" with "x5".
Note : Consecutive count of every character in input string is less than equal to 9.
- if count is 1 print only the character xxab print x2ab not x2a1b1

```python
def compress(string):
    
    count = 1
    ans = ''
    for i in range(len(string)-1):
        if string[i] == string[i+1]:
            count += 1
        else:
            if count != 1 :
                ans += string[i] + str(count)
                count = 1
            else:
                ans += string[i]

    if count != 1:
        ans += string[-1] + str(count)
    else:
        ans += string[-1]
        
    return ans

print(compress('aabbccdef'))
print(compress('aabbccdefffff'))
```

**Output:**
```
a2b2c2def
a2b2c2def5
```

```python
# 2-D List Problems
```

### Row Wise Sum

Given a 2D integer array of size M*N, find and print the sum of every row elements separated by space.
```
Input Format :
Line 1 : Two integers M and N (separated by space) 
Line 2 : Matrix elements (separated by space)
```

```python
def rowsum(l):
    
    for sublist in l:
        summ = 0
        for ele in sublist:
            summ += ele
        print(summ,end= ' ')
        
m,n = [int(x) for x in input().split()] # m X n matrix 
line = [int(x) for x in input().split()]
l = [[(line[j+n*i]) for j in range(n)] for i in range(m)]
print(l)
rowsum(l)
```

**Output:**
```
3 3
1 2 3 4 5 6 7 8 9
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
6 15 24
```

## Largest Row or Column

Given an NxM 2D array, you need to find out which row or column has largest sum overall amongst all rows and columns.
```
Output Format :
 If row sum is maximum then print - "row" row_num max_sum
 If column sum is maximum then print - "column" col_num max_sum
Note : If there are more than one rows/columns with maximum sum consider the row/column that comes first. And if ith row and jth column has same sum (which is largest), consider the ith row as answer.
```

```python
def max_row_col(l):
    
    max_row_sum = -999
    max_row_index = -1
    # max row sum
    for i in range(len(l)):
        summ = 0
        
        for ele in l[i] :
            summ += ele
            
        if summ > max_row_sum:
            max_row_sum = summ
            max_row_index = i

    
    max_col_sum = -999
    max_col_index = -1
    # max col sum
    for j in range(len(l[0])):
        summ = 0
        
        for sublist in l :
            summ += sublist[j]
            
        if summ > max_col_sum:
            max_col_sum = summ
            max_col_index = j
           
    if max_row_sum >= max_col_sum:
        print('row',max_row_index,max_row_sum)
    else:
        print('column', max_col_index,max_col_sum)

m,n = [int(x) for x in input().split()] # m X n matrix 
line = [int(x) for x in input().split()]
l = [[(line[j+n*i]) for j in range(n)] for i in range(m)]
max_row_col(l)
```

**Output:**
```
3 4
1 2 34 5 6 7 8  4 3 1 1 2
column 2 43
```

### Wave Print

Given a two dimensional n*m array, print the array in a sine wave order. i.e. print the first column top to bottom, next column bottom to top and so on.
```
Note : Print the elements separated by space.
Input format :
n, m, array elements (separated by space)
Sample Input :
3 4 1 2 3 4 5 6 7 8 11 22 23 24
Sample Output :
1 5 11 22 6 2 3 7 23 24 8 4 

```

```python
def wave_print(arr):
    rows = len(arr)
    cols = len(arr[0])
    
    for i in range(cols):
        if i%2 == 0:
            # top to bottom
            for j in range(rows):
                print(arr[j][i], end=' ')
        else:
            for j in range(rows):
                print(arr[n-j-1][i], end=' ')
            # bottom - up
            
l = [int(x) for x in input().split()]
n, m = l[0], l[1]
ele = l[2:]
arr = [ [ele[m*i + j] for j in range(m)] for i in range(n)]
print('wave print')
wave_print(arr)
```

**Output:**
```
3 4 1 2 3 4 5 6 7 8 11 22 23 24
wave print
1 5 11 22 6 2 3 7 23 24 8 4
```

### Spiral Print
Given an N*M 2D array, print it in spiral form. That is, first you need to print the 1st row, then last column, then last row and then first column and so on.
```
Input format :
Line 1 : N and M, No. of rows & No. of columns (separated by space) followed by N*M  elements in row wise fashion.
Sample Input :
 4 4 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
 Sample Output :
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 

 ```

```python
r = input().split()
b = r[2:]
mat=[[ int(b[int(r[1])*i+j]) for j in range(int(r[1])) ] for i in range(int(r[0]))]


def spiralprint(mat):
    numrows=len(mat)
    numcols=len(mat[0])
    left=0
    right=numcols-1
    top=0
    bottom=numrows-1
    
    while left<=right and top<=bottom:
        for column in range(left,right+1):
            print(mat[top][column],end=' ')
        top+=1

        if not (left<=right and top<=bottom):
            break
            
        for row in range(top,bottom+1):
            print(mat[row][right],end=' ')
        right-=1
        
        if not (left<=right and top<=bottom):
            break
        
        for column in range(right,left-1,-1):
            print(mat[bottom][column],end=' ')
        bottom-=1
        
        if not (left<=right and top<=bottom):
            break
            
        for row in range(bottom,top-1,-1):
            print(mat[row][left],end=' ' )
        left+=1

print('Spiral Print')
spiralprint(mat)
```

**Output:**
```
5 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 
Spiral Print
1 2 3 4 5 6 7 8 9 10 10 10 10 10 9 8 7 6 5 4 3 2 1 1 1 1 2 3 4 5 6 7 8 9 9 9 8 7 6 5 4 3 2 2 3 4 5 6 7 8
```

# Array Intersection Optimal- merge() approach of mergesort

```python
def array_intersection(arr1,arr2):
    ans = []
    
    # sort arrays
    arr1.sort()
    arr2.sort()
    
    i = 0
    j = 0
    
    while i<len(arr1) and j<len(arr2):
        if arr1[i] == arr2[j]:
            ans.append(arr1[i])
            i+=1
            j+=1
        elif arr1[i] < arr2[j] :
            i+=1
        else:
            j+=1
        
    return ans

arr1 = [4,5,6,7,2,2,1]
arr2 = [2,2,5,6,8,5,3,2]
ans = array_intersection(arr1,arr2)
print(*ans)
```

**Output:**
```
2 2 5 6
```

# Using hashmap or dictionary

```python
def array_intersection(arr1,arr2):

    d = {}
    for i in arr1:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1
    
    for i in arr2 :
        if i in d and d[i] != 0 :
            print(i)
            d[i] -= 1                      

arr1 = [4,5,6,7,2,2,1]
arr2 = [2,2,5,6,8,5,3,2]
array_intersection(arr1,arr2)
```

**Output:**
```
2
2
5
6
```

# Done

## Array Equilibrium Index
```
Find and return the equilibrium index of an array. Equilibrium index of an array is an index i such that the sum of elements at indices less than i is equal to the sum of elements at indices greater than i.
Element at index i is not included in either part.
If more than one equilibrium index is present, you need to return the first one. And return -1 if no equilibrium index is present.
Input format :
Line 1 : Size of input array
Line 2 : Array elements (separated by space)
Sample Input :
7
-7 1 5 2 -4 3 0
Sample Output :
```

```python
#O(n^2)
def equilibriumIndex(arr):
    
    for index in range(len(arr)):
        #find leftsum
        lsum = 0
        for i in range(index):
            lsum += arr[i]
        
        #find right sum
        rsum = 0 
        for i in range(index+1,len(arr)):
            rsum += arr[i]
        if lsum == rsum:
            return index
    else:
        return -1
    
n = int(input())
arr = [int(x) for x in input().split()]
print('ANS: ', equilibriumIndex(arr))
```

**Output:**
```
7
-7 1 5 2 -4 3 0
ANS:  3
```

```python
# O(n) -finding presums

def equilibriumIndex(arr):

    left_presum = []
    right_presum = []

    # filling left_presum
    lsum = 0
    for i in range(len(arr)):
        left_presum.append(lsum)
        lsum += arr[i]
    
    # filling right_presum
    rsum = 0
    for i in range(len(arr)-1,-1,-1):
        right_presum.append(rsum)
        rsum += arr[i]
    
    right_presum = right_presum[::-1]
    
    # finding equilibrium-index
    for i in range(len(arr)) :
        if left_presum[i] == right_presum[i]:
            return i
    return -1
            
        
n = 7
arr = [-7,1,5,2,-4,3,0]
print(equilibriumIndex(arr))
```

**Output:**
```
3
```

## Pair sum in array(2nd way of doing it)
Given a random integer array A and a number x. Find and print the pair of elements in the array which sum to x.
Array A can contain duplicate elements.
While printing a pair, print the smaller element first.
That is, if a valid pair is (6, 5) print "5 6". There is no constraint that out of 5 pairs which have to be printed in 1st line. You can print pairs in any order, just be careful about the order of elements in a pair.

```python
def pairSum(arr, x):
    arr.sort()
    i = 0
    j = len(arr) - 1
    
    while i<j:
        if arr[i] + arr[j] == x:
            # handling the case when ele is repeated/non-repeted in our sorted arr like arr[i:j] = [2,2,2,4,5,5,5] ans we are finding 7 as sum
            if arr[i] != arr[j]:
                # hence not the below case
                count_i = 1
                index = i
                while arr[index] == arr[index+1]:
                    count_i += 1
                    index += 1

                count_j = 1
                index = j
                while arr[index] == arr[index-1]:
                    count_j +=1
                    index -= 1

                # pair to print in this case is :
                for p in range(count_i*count_j):
                    print(arr[i],arr[j])
                
                i += count_i
                j -= count_j
                
            # handle the case when all elements are same b/w i and j both includinglike arr[i:j] = [2,2,2,2,2] and sum we want is 4.
            else:
                count = j - i + 1
                for p in range(count * (count-1)//2):
                    print(arr[i],arr[j])
                break
                
        elif arr[i] + arr[j] < x :
            i += 1
        else:
            j -= 1
            
n=int(input())
arr=list(int(i) for i in input().strip().split(' '))
sum=int(input())
pairSum(arr, sum)
```

**Output:**
```
7
1 2 2 2 2 3
4
1 3
2 2
2 2
2 2
2 2
2 2
2 2
```

## Find Triplet (improved)
```
Given a random integer array and a number x. Find and print the triplets of elements in the array which sum to x.
While printing a triplet, print the smallest element first.
That is, if a valid triplet is (6, 5, 10) print "5 6 10". There is no constraint that out of 5 triplets which have to be printed on 1st line. You can print triplets in any order, just be careful about the order of elements in a triplet.
Input format :
Line 1 : Integer N (Array Size)
Line 2 : Array elements (separated by space)
Line 3 : Integer x
Output format :
Line 1 : Triplet 1 elements (separated by space)
Line 2 : Triplet 3 elements (separated by space)
Line 3 : and so on
Constraints :
1 &lt;= N &lt;= 1000
1 &lt;= x &lt;= 100
Sample Input:
7
1 2 3 4 5 6 7 
12
Sample Output ;
1 4 7
1 5 6
2 3 7
2 4 6
3 4 5
```

```python
def findTriplet(arr, summ):
    arr.sort()
    
    for t in range(len(arr)):
        i = t + 1
        j = len(arr) - 1
        x = summ -  arr[t]
        while i<j:
            if arr[i] + arr[j] == x:
                # handling the case when ele is repeated/non-repeted in our sorted arr like arr[i:j] = [2,2,2,4,5,5,5] ans we are finding 7 as sum
                if arr[i] != arr[j]:
                    # hence not the below case
                    count_i = 1
                    index = i
                    while arr[index] == arr[index+1]:
                        count_i += 1
                        index += 1

                    count_j = 1
                    index = j
                    while arr[index] == arr[index-1]:
                        count_j +=1
                        index -= 1

                    # pair to print in this case is :
                    for p in range(count_i*count_j):
                        print(arr[t],arr[i],arr[j])

                    i += count_i
                    j -= count_j

                # handle the case when all elements are same b/w i and j both includinglike arr[i:j] = [2,2,2,2,2] and sum we want is 4.
                else:
                    count = j - i + 1
                    for p in range(count * (count-1)//2):
                        print(arr[t],arr[i],arr[j])
                    break

            elif arr[i] + arr[j] < x :
                i += 1
            else:
                j -= 1

n=int(input())
arr=list(int(i) for i in input().strip().split(' '))
sum=int(input())
findTriplet(arr, sum)
```

**Output:**
```
7
1 2 3 4 5 6 7
12
1 4 7
1 5 6
2 3 7
2 4 6
3 4 5
```

### Rotate array
```
Given a random integer array of size n, write a function that rotates the given array by d elements (towards left)
Change in the input array itself. You don't need to return or print elements.
Input format :
Line 1 : Integer n (Array Size)
Line 2 : Array elements (separated by space)
Line 3 : Integer d
Output Format :
Updated array elements (separated by space)
Constraints :
1 &lt;= N &lt;= 1000
1 &lt;= d &lt;= N
Sample Input :
7
1 2 3 4 5 6 7
2
Sample Output :
3 4 5 6 7 1 2
```

```python
def rotate(arr, d):
    # reverse again d elements from start
    arr[:d] = arr[:d][::-1] 
    # reverse len(arr)-d elements now
    arr[d:] = arr[d:][::-1]
    # reverse whole array
    arr[::] = arr[::-1]


n=int(input())
arr=list(int(i) for i in input().split())
d=int(input())
rotate(arr, d)
print(*arr)
```

**Output:**
```
7
1 2 3 4 5 6 
1
2 3 4 5 6 1
```

# Done