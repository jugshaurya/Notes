---
title: "Patterns"
slug: python-2-programs-including-datastructure-python-1-patterns
date: 2022-01-28
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/2-Programs-including-Datastructure-Python/1.Patterns.ipynb)
>
> **Category**: Python / 2 Programs including Datastructure Python

<!-- truncate -->

# Patterns

```python
n = int(input())
for i in range(n):
    for j in range(n):
        print('*',end='')
    print()
```

**Output:**
```
4
****
****
****
****
```

```python
n = int(input())
for i in range(n):
    for j in range(i+1):
        print('*',end='')
    print()
```

**Output:**
```
4
*
**
***
****
```

```python
n = int(input())
i = 0
while i < n:
    count = 1
    j = 0
    while j < i+1:
        print(count,end='')
        count += 1
        j+=1
    print()
    i+=1
```

**Output:**
```
4
1
12
123
1234
```

```python
n = int(input())
for i in range(n):
    count = n
    for j in range(i+1):
        print(count,end='')
        count-=1
    print()
```

**Output:**
```
4
4
43
432
4321
```

```python
n = int(input())
count = 1
for i in range(n):
    for j in range(i+1):
        print(count,end=' ')
        count+=1
    print()
```

**Output:**
```
4
1 
2 3 
4 5 6 
7 8 9 10
```

```python
n = int(input())
for i in range(n):
    for j in range(n):
        print(chr(j+ord('A')),end='')
    print()
```

**Output:**
```
4
ABCD
ABCD
ABCD
ABCD
```

```python
n = int(input())
for i in range(n):
    for j in range(n):
        print(chr(i+j+ord('A')),end='')
    print()
```

**Output:**
```
4
ABCD
BCDE
CDEF
DEFG
```

```python
n = int(input())
for i in range(n):
    for j in range(i+1):
        print(chr(65+i),end='')
    print()
```

**Output:**
```
5
A
BB
CCC
DDDD
EEEEE
```

```python
n= int(input())
for i in range(n):
    for spaces in range(n-i-1):
        print(' ',end='')
    count=1
    for num in range(i+1):
        print(count,end='')
        count+=1
    print()
```

**Output:**
```
4
   1
  12
 123
1234
```

```python
n= int(input())
for i in range(n):
    for spaces in range(n-i-1):
        print(' ',end='')
    for stars in range(i+1):
        print('*',end='')
    print()
```

**Output:**
```
4
   *
  **
 ***
****
```

# Advance Patterns

```python
n= int(input())
for i in range(n):
    for spaces in range(n-i-1):
        print(' ',end='')
    for values in range(2*i+1):
        print(1,end='')
    print()
```

**Output:**
```
4
   1
  111
 11111
1111111
```

```python
n= int(input())
for i in range(n):
    # left half
    for spaces in range(n-i-1):
        print(' ',end='')
    count=1
    for values in range(i+1):
        print(count,end='')
        count+=1
        
    # right half
    count-=1
    for values in range(i):
        count-=1
        print(count,end='')
        
        
    print()
```

**Output:**
```
4
   1
  121
 12321
1234321
```

```python
n= int(input())
for i in range(n):
    # left half
    for spaces in range(n-i-1):
        print(' ',end='')
        
    count=i+1
    for values in range(i+1):
        print(count,end='')
        count+=1
        
    # right half
    count-=1
    for values in range(i):
        count-=1
        print(count,end='')
        
        
    print()
```

**Output:**
```
4
   1
  232
 34543
4567654
```

```python
n= int(input())
for i in range(n):
    # left half
    for spaces in range(n-i-1):
        print(' ',end='')
        
    count=i+1
    for values in range(i+1):
        print(count,end='')
        count-=1
        
    # right half
    count+=1
    for values in range(i):
        count+=1
        print(count,end='')
        
        
    print()
```

**Output:**
```
4
   1
  212
 32123
4321234
```

```python
n= int(input())

for i in range(n):
    count=1
    for j in range(i+1):
        print(count,end='')
        count+=1
        
    # spaces
    for spaces in range(2*n-2*(i+1)):
        print(' ',end='')
    
    count-=1
    for j in range(i+1):
        print(count,end='')
        count-=1
    print()
```

**Output:**
```
5
1        1
12      21
123    321
1234  4321
1234554321
```

### Print this
for n = 8
```python
*0000000*0000000*
0*000000*000000*0
00*00000*00000*00
000*0000*0000*000
0000*000*000*0000
00000*00*00*00000
000000*0*0*000000
0000000***0000000

```

```python
n= int(input())
for i in range(n):
    # zero-star
    for j in range(i):
        print('0',end='')
    print('*',end='')
            
    # zero-star
    for j in range(n-i-1):
        print('0',end='')
    print('*',end='')
    
    #zero-start
    for j in range(n-i-1):
        print('0',end='')
    print('*',end='')
    
    #zero
    for j in range(i):
        print('0',end='')
    
    print()
```

**Output:**
```
8
*0000000*0000000*
0*000000*000000*0
00*00000*00000*00
000*0000*0000*000
0000*000*000*0000
00000*00*00*00000
000000*0*0*000000
0000000***0000000
```

```python
n= int(input()) # always odd
for i in range(n//2):
# -------upper half-----------------
    # spaces
    for j in range(i):
        print(' ',end='')
    # stars
    for j in range(i+1):
        print('* ',end='')
    print()
# ----------------------------------

# -----------middle-----------------
# spaces
for i in range(n//2):
    print(' ',end='')
# stars
for i in range(n//2+1):
    print('* ',end='')
print()    
# ----------------------------------

#------- lower half-----------------
for i in range(n//2):
    # spaces
    for j in range(n//2-i-1):
        print(' ',end='')
    # stars
    for j in range(n//2-i):
        print('* ',end='')
    print()
        
# ----------------------------------
```

**Output:**
```
7
* 
 * * 
  * * * 
   * * * * 
  * * * 
 * * 
*
```

```python
n = int(input())
# upper half
for i in range(n):
    for spaces in range(i):
        print(' ',end='')
    count = i+1
    for num in range(n-i):
        print(count,end='')
        count+=1
    print()
    
# lower half
for i in range(n-1):
    for spaces in range(n-2-i):
        print(' ',end='')
    count = n-i-1
    for num in range(i+2):
        print(count,end='')
        count+=1
    print()
```

**Output:**
```
5
12345
 2345
  345
   45
    5
   45
  345
 2345
12345
```

```python
n= int(input())

# upper
for i in range(n//2):
    for spaces in range(n//2-i):
        print(' ',end='')
        
    for values in range(2*i+1):
        print('*',end='')
    print()
    
# middle
for i in range(n):
    print('*',end='')
print()
# lower

for i in range(n//2):
    for spaces in range(i+1):
        print(' ',end='')
        
    for values in range(n-2*i-2):
        print('*',end='')
        
    print()
```

**Output:**
```
7
   *
  ***
 *****
*******
 *****
  ***
   *
```

# To DO
```python
4444444
4333334
4322234
4321234
4322234
4333334  
4444444
```

```python
# -----------------------------
```

```python
n = int(input())

count = 1
# upper half
for i in range(n//2+1):
    for j in range(n):
        print(count,end=' ')
        count+=1
    count+= n
    print()

rest = n - (n//2+1)
# lower half
count = count - 3*n
for i in range(rest):
    for j in range(n):
        print(count,end=' ')
        count+=1
    count-= 3*n
    print()
```

**Output:**
```
5
1 2 3 4 5 
11 12 13 14 15 
21 22 23 24 25 
16 17 18 19 20 
6 7 8 9 10
```

### Pascal Triangle

```python
## Read input as specified in the question.
## Print output as specified in the questio
def sort01(arr,N):
    i=0
    j=N-1
    while i<j:
        while arr[i]==0 and i<j:
            i=i+1
        while arr[j]==1 and i<j:
            j=j-1
        if i<j:
            arr[i]=0
            arr[j]=1
            i=i+1
            j=j+1
        return arr    
        

N=int(input())
arr=[int(x)for x in input.split()]
sort01(arr,N)
for ele in arr:
    print(ele,end='')
```

**Output:**
```
7
AttributeError: 'function' object has no attribute 'split'
```

#