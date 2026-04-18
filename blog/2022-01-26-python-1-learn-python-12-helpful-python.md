---
title: "variables"
slug: python-1-learn-python-12-helpful-python
date: 2022-01-26
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/1-Learn-Python/12-helpful-python.ipynb)
>
> **Category**: Python / 1 Learn Python

<!-- truncate -->

# variables

```python
a=10
b=20
```

```python
a
```

**Output:**
```
10
```

```python
b
```

**Output:**
```
20
```

# to see list of variables created

```python
%whos
```

**Output:**
```
Variable   Type    Data/Info
----------------------------
a          int     10
b          int     20
li         list    n=6
li2        list    n=4
li3        list    n=8
```

# list

```python
li  = [1,2,3]
```

operations

- append
- remove
- insert
- pop
- extend
- index
- sort
- count
- clear
- reverse

```python
li.append(12)
```

```python
li
```

**Output:**
```
[1, 2, 3, 12]
```

```python
li.append([1,2,3])
```

```python
li
```

**Output:**
```
[1, 2, 3, 12, [1, 2, 3]]
```

```python
li.extend([6,7,8])
```

```python
li
```

**Output:**
```
[1, 2, 3, 12, [1, 2, 3], 6, 7, 8]
```

```python
li.insert(3, 'shaurya')
```

```python
li
```

**Output:**
```
[1, 2, 3, 'shaurya', 12, [1, 2, 3], 6, 7, 8]
```

```python
li.insert(100,'last')
```

```python
li
```

**Output:**
```
[1, 2, 3, 'shaurya', 12, [1, 2, 3], 6, 7, 8, 'last']
```

```python
li.remove(2) # remove first presecnce of 2, result in error
#  if not found
```

```python
li
```

**Output:**
```
[1, 3, 'shaurya', 12, [1, 2, 3], 6, 7, 8, 'last']
```

```python
li.remove(2)
```

**Output:**
```
ValueError: list.remove(x): x not in list
```

```python
li.pop() #remove last
```

**Output:**
```
'last'
```

```python
li
```

**Output:**
```
[1, 3, 'shaurya', 12, [1, 2, 3], 6, 7, 8]
```

```python
li.pop(3) # index should be in range else error
```

**Output:**
```
12
```

```python
li
```

**Output:**
```
[1, 3, 'shaurya', [1, 2, 3], 6, 7, 8]
```

# looping over list

```python
li = [1, 3, 'shaurya', [1, 2, 3], 6, 7, 8]
```

```python
for x in range(len(li)):
    print(li[x])
```

**Output:**
```
1
3
shaurya
[1, 2, 3]
6
7
8
```

```python
for el in li:
    print(el)
```

**Output:**
```
1
3
shaurya
[1, 2, 3]
6
7
8
```

```python
for el in li[2:]:
    print(el)
```

**Output:**
```
shaurya
[1, 2, 3]
6
7
8
```

# Inputting a list

```python
# 1. line seperated 
# 4
#1 
#2 
#3 
#4 

n =  int(input())
li = []
for i in range(n):
    li.append(int(input()))
```

**Output:**
```
4
1
2
3
4
```

```python
li
```

**Output:**
```
[1, 2, 3, 4]
```

```python
# 2. space seperated 
# 4
#1 2 3 4 
n = int(input())
li = [int(x) for x in input().split()]
```

**Output:**
```
5
5 6 7 8 9
```

```python
li
```

**Output:**
```
[5, 6, 7, 8, 9]
```

# Linear Search

```python
# Linear Search
li = [21,82,33,47,54,66,79]
element_to_search = int(input())

for ele in li:
    if ele == element_to_search:
        print('---wollla--')
        break
else: #else works only if for loop executes completely 
        # not breaked by break    
    print(-1)
```

**Output:**
```
47
---wollla--
```

# passing list to function

```python
def changelist(li):
    li[0] = 'shaurya'  
li = [3,4,6,7]
changelist(li)
```

```python
li
```

**Output:**
```
['shaurya', 4, 6, 7]
```

# reversing list

```python
li = [3,4,5,87,7,8,7,9,0]
length = len(li)
for ele in range(length//2):
    li[ele] ,li[length-1-ele] = li[length-1-ele],li[ele]
    
li
```

**Output:**
```
[0, 9, 7, 8, 7, 87, 5, 4, 3]
```

```python
li = [3,4,5,87,7,8,7,9,0]
li[::-1] # if using -ve step ,starts become -1
            # and end reaches before 0
    
    # or if -ve step
    # swap end and start ad shift by one position to left!!
```

**Output:**
```
[0, 9, 7, 8, 7, 87, 5, 4, 3]
```

```python
li = [0, 9, 7, 8, 7, 87, 5, 4, 3]
for ele in range(len(li)//2):
    li[ele] ,li[-1-ele] = li[-1-ele],li[ele]
    
li
```

**Output:**
```
[3, 4, 5, 87, 7, 8, 7, 9, 0]
```

# strings
- sequence of characters stroed as unicode values internally

```python
string =  'shaurya singhal'
```

```python
string[8:2:-1]
```

**Output:**
```
's ayru'
```

# List comprehension

```python
li = [ele**2 for ele in range(10)]
```

```python
li
```

**Output:**
```
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

```python
# with condition

li =  [ele**2 for ele in range(10) if ele%2==0]
```

```python
li
```

**Output:**
```
[0, 4, 16, 36, 64]
```

```python
# with nested condition

for ele in range(20):
    if ele%3==0:
        if ele%2==0:
            print(ele,end =' ')
```

**Output:**
```
0 6 12 18
```

```python
li = [ele for ele in range(20) if ele%3==0 if ele%2==0]
li
```

**Output:**
```
[0, 6, 12, 18]
```

```python
# nested forloops

li = [ele+2*ele2 for ele in range(5) for ele2 in range(5) ]
li
```

**Output:**
```
[0, 2, 4, 6, 8, 1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 3, 5, 7, 9, 11, 4, 6, 8, 10, 12]
```

```python
# nested forloops with condition

li = [ele+2*ele2 for ele in range(5) for ele2 in range(5) \
      if (ele+2*ele2)%2==0]
li
```

**Output:**
```
[0, 2, 4, 6, 8, 2, 4, 6, 8, 10, 4, 6, 8, 10, 12]
```

```python
# input a 2d list

# n,m
# n-m elements in n lines

size = input().split()
n,m = int(size[0]),int(size[1])

li = [[int(j) for j in input().split()] for i in range(n)]
```

**Output:**
```
3 4 
1 2 3
1 2 4 5
12 3 4  5 45 6 765 7
```

```python
li
```

**Output:**
```
[[1, 2, 3], [1, 2, 4, 5], [12, 3, 4, 5, 45, 6, 765, 7]]
```

# tuples

```python
a,n = 2,3
```

```python
type((a,n))
```

**Output:**
```
tuple
```

```python
t = (1,2,3,4,5)
```

```python
t
```

**Output:**
```
(1, 2, 3, 4, 5)
```

```python
a = 1,2,3
b = 4,5,6
```

```python
c = (a,b)
```

```python
c = c*4
```

```python
c.count((4))
```

**Output:**
```
0
```

# dict

- fromkeys()
- copy
- count
- get
- setdefault()
- items
- values
- keys

```python
d = dict([('shaurya',3),(4,7),(234,67)])
```

```python
d
```

**Output:**
```
{'shaurya': 3, 4: 7, 234: 67}
```

```python
len(d)
```

**Output:**
```
3
```

```python
min(d)
```

**Output:**
```
TypeError: '&lt;' not supported between instances of 'int' and 'str'
```