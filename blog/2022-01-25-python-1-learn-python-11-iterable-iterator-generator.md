---
title: "(Iteration, Iterable, Iterator) VS Generators"
slug: python-1-learn-python-11-iterable-iterator-generator
date: 2022-01-25
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/1-Learn-Python/11-Iterable-Iterator-Generator.ipynb)
>
> **Category**: Python / 1 Learn Python

<!-- truncate -->

# (Iteration, Iterable, Iterator) VS Generators

[for more info watch video by Corey Schafer](https://www.youtube.com/watch?v=jTYiNjvnHZY)

### Iterative Protocol :
- **Iteration**  - process of repetition.
- **Iterable**   - a python object that can be looped over.
- **Iterator**   - a python object used to remember the state where it is during iteration.




![](https://raw.githubusercontent.com/jugshaurya/Learn-Python/master/1-Learn-Python/images/iterable-vs-iterator.png)

- We make classes iterable by implementing `__iter__()` dunder
- We need iterators to remember the state where it left off last time.
- We declare any class's iterator by `__iter__()` dunder which returns iterator coressponding to class using iter()
- Further we can use next() method to iterate using iterator implemented by`__next__()` dunder.

# Creating my own range class which is both Iterable and Iterator

```python
class my_range:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        
    # creating this class to be iterable object   
    def __iter__(self): # this method should return an object that have __next__() dunder implemented but since we are making
       return self  # this class as an iterator object as well by implementing next dunder in it we are returning self itself. 

    # so we define this dunder here
    def __next__(self): # used to move over next element 
        val = self.start
        self.start += 1
        if self.start <= self.end:
            return val
        else:
            raise StopIteration
```

```python
ut = iter(my_range(0,3))
```

```python
try:
    while True:
        print(next(ut))
except StopIteration:
    print('error')
```

**Output:**
```
0
1
2
error
```

```python
# see exact behaviour using built-in range object
it = iter(range(0,3))
```

```python
try:
    while True:
        print(next(it))
except StopIteration:
    print('error')
```

**Output:**
```
0
1
2
error
```

# Creating my own range class bith seperately this time!

```python
class my_range_2:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        
    # creating this class to be iterable object   
    def __iter__(self): 
       return make_iterator(self.start,self.end)  # returning an object which have next dunder implemented.  


class make_iterator:
    def __init__(self, start, end):
        self.start = start
        self.end = end

    # so we define this dunder here
    def __next__(self): # used to move over next element 
        val = self.start
        self.start += 1
        if self.start <= self.end:
            return val
        else:
            raise StopIteration
```

```python
it2 = iter(my_range_2(0,3))
```

```python
type(it2)
```

**Output:**
```
__main__.make_iterator
```

```python
try:
    while True:
        print(next(it2))
except StopIteration:
    print('error')
```

**Output:**
```
0
1
2
error
```

```python
# Using generator to define same thing 
def my_range3(start,end):
    while(start<end):
        yield start
        start+=1
```

```python
it = my_range3(0,3)
try:
    while True:
        print(next(it))
except StopIteration:
    print(error)
```

**Output:**
```
0
1
2
NameError: name 'error' is not defined
```

# Generators

- Easy to write iterators are created using generators


- defined using yield keyword which rememmbers where we left off earlier.


- Generators allow us to generate as we go along , instead of holding everything in memory. 


- Let's explore a little deeper. We've learned how to create functions with &lt;code&gt;def&lt;/code&gt; and the &lt;code&gt;return&lt;/code&gt; statement. Generator functions allow us to write a function that can send back a value and then later resume to pick up where it left off. This type of function is a generator in Python, allowing us to generate a sequence of values over time. The main difference in syntax will be the use of a &lt;code&gt;yield&lt;/code&gt; statement.


- In most aspects, a generator function will appear very similar to a normal function. The main difference is when a generator function is compiled they become an object that supports an iteration protocol. That means when they are called in your code they don't actually return a value and then exit. Instead, generator functions will automatically suspend and resume their execution and state around the last point of value generation. The main advantage here is that instead of having to compute an entire series of values up front, the generator computes one value and then suspends its activity awaiting the next instruction. This feature is known as `state suspension`.


￼￼To start getting a better understanding of generators, let's go ahead and see how we can create some.

```python
# Generator function for the cube of numbers (power of 3)
def gencubes(n):
    for num in range(n):
        yield num**3
```

```python
for x in gencubes(10):
    print(x)
```

**Output:**
```
0
1
8
27
64
125
216
343
512
729
```

Great! Now since we have a generator function we don't have to keep track of every single cube we created.

Generators are best for calculating large sets of results (particularly in calculations that involve loops themselves) in cases where we don’t want to allocate the memory for all of the results at the same time. 

## How it save us memory space ?
Let's create another example generator which calculates fibonacci numbers:

```python
def genfibon(n):
    """
    Generate a fibonnaci sequence up to n
    """
    a = 1
    b = 1
    for i in range(n):
        yield a
        a,b = b,a+b
```

```python
for num in genfibon(10):
    print(num)
```

**Output:**
```
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

What if this was a normal function, what would it look like?

```python
def fibon(n):
    a = 1
    b = 1
    output = []
    
    for i in range(n):
        output.append(a)
        a,b = b,a+b
        
    return output
```

```python
fibon(10)
```

**Output:**
```
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

Notice that if we call some huge value of n (like 100000) the second function will have to keep track of every single result, when in our case we actually only care about the previous result to generate the next one!

## next() and iter() built-in functions
A key to fully understanding generators is the next() function and the iter() function.

The next() function allows us to access the next element in a sequence. Lets check it out:

```python
def simple_gen():
    for x in range(3):
        yield x # yield returns an iterator
```

```python
# Assign simple_gen 
g = simple_gen()
```

```python
print(next(g))
```

**Output:**
```
0
```

```python
print(next(g))
```

**Output:**
```
1
```

```python
print(next(g))
```

**Output:**
```
2
```

```python
print(next(g))
```

**Output:**
```
StopIteration:
```

After yielding all the values next() caused a StopIteration error. What this error informs us of is that all the values have been yielded. 

You might be wondering that why don’t we get this error while using a for loop? A for loop automatically catches this error and stops calling next(). 

Let's go ahead and check out how to use iter(). You remember that strings are iterables:

```python
s = 'hello'

#Iterate over string
for let in s:
    print(let)
```

**Output:**
```
h
e
l
l
o
```

But that doesn't mean the string itself is an *iterator*! We can check this with the next() function:

```python
next(s)
```

**Output:**
```
TypeError: 'str' object is not an iterator
```

Interesting, this means that a string object supports iteration(but a iterable object), but we can not directly iterate over it as we could with a generator function. The iter() function allows us to do just that!

```python
s_iter = iter(s)
```

```python
next(s_iter)
```

**Output:**
```
'h'
```

```python
next(s_iter)
```

**Output:**
```
'e'
```

Great! Now you know how to convert objects that are iterable into iterators themselves!

The main takeaway from this lecture is that using the yield keyword at a function will cause the function to become a generator. This change can save you a lot of memory for large use cases.

# Comparison b/w Iterator amd Generator
![comparioson of iterator and generator](https://raw.githubusercontent.com/jugshaurya/Learn-Python/master/1-Learn-Python/images/iterable_iterator_generator.png)

```python
# shortcut for genrator expression
gen = (x for x in range(3)) # this is not tuple comprehension there is no such thing in python this is genertor syntax
```

```python
gen
```

**Output:**
```
&lt;generator object &lt;genexpr&gt; at 0x0579F9F0&gt;
```

```python
next(gen)
```

**Output:**
```
0
```

```python
next(gen)
```

**Output:**
```
1
```

```python
next(gen)
```

**Output:**
```
2
```

```python
next(gen)
```

**Output:**
```
StopIteration:
```

# To Check Whether an object is iterable or not

- an object is iterable if it implemented the iterator protocol. For many objects, this means it has a __iter__ “magic method,” though an alternative and better way to check is to try using the iter function:

```python
def isiterable(obj):
 try:
     iter(obj)
     return True
 except TypeError: # not iterable
     return False
```
- This function would return True for strings as well as most Python collection types:

```python
def isiterable(obj):
 try:
     iter(obj)
     return True
 except TypeError: # not iterable
     return False
```

```python
isiterable([1,2,3])
```

**Output:**
```
True
```

```python
# why? see this
iter([1,2,3])
```

**Output:**
```
&lt;list_iterator at 0x59fc450&gt;
```

```python
isiterable(5)
```

**Output:**
```
False
```

```python
# why? see this
iter(5)
```

**Output:**
```
TypeError: 'int' object is not iterable
```