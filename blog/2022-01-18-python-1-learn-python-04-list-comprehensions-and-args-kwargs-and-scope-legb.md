---
title: "List Comprehensions - Simple way to build the list"
slug: python-1-learn-python-04-list-comprehensions-and-args-kwargs-and-scope-legb
date: 2022-01-18
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/1-Learn-Python/04-List-Comprehensions-and-args-kwargs-and-Scope(LEGB).ipynb)
>
> **Category**: Python / 1 Learn Python

<!-- truncate -->

# List Comprehensions - Simple way to build the list

In addition to sequence operations and list methods, Python includes a more advanced operation called a list comprehension.

List comprehensions allow us to build out lists using a different notation. You can think of it as essentially a one line &lt;code&gt;for&lt;/code&gt; loop built inside of brackets. For a simple example:
## Example 1

```python
# Grab every letter in string
lst = [x for x in 'word']
```

```python
# Check
lst
```

**Output:**
```
['w', 'o', 'r', 'd']
```

This is the basic idea of a list comprehension. If you're familiar with mathematical notation this format should feel familiar for example:{ x^2 : x belongs to (0,1,2...10) } 

Let's see a few more examples of list comprehensions in Python:
## Example 2

```python
# Square numbers in range and turn into list
lst = [x**2 for x in range(0,11)]
```

```python
lst
```

**Output:**
```
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

## Example 3
Let's see how to add in &lt;code&gt;if&lt;/code&gt; statements:

```python
# Check for even numbers in a range
lst = [x for x in range(11) if x % 2 == 0]
```

```python
lst
```

**Output:**
```
[0, 2, 4, 6, 8, 10]
```

## Example 4
Can also do more complicated arithmetic:

```python
# Convert Celsius to Fahrenheit
celsius = [0,10,20.1,34.5]

fahrenheit = [((9/5)*temp + 32) for temp in celsius ]

fahrenheit
```

**Output:**
```
[32.0, 50.0, 68.18, 94.1]
```

## Example 5
We can also perform nested list comprehensions, for example:

```python
lst = [ x**2 for x in [x**2 for x in range(11)]]
lst
```

**Output:**
```
[0, 1, 16, 81, 256, 625, 1296, 2401, 4096, 6561, 10000]
```

Later on we will learn about generator comprehensions. After this  you should feel comfortable reading and writing basic list comprehensions.

```python
# using if-else in list comprehension
listi = [x if x%2==0 else "ODD" for x in range(10)]
print(listi)
```

**Output:**
```
[0, 'ODD', 2, 'ODD', 4, 'ODD', 6, 'ODD', 8, 'ODD']
```

# `*args` and `**kwargs`

Work with Python long enough, and eventually you will encounter `*args` and `**kwargs`. These strange terms show up as parameters in function definitions. What do they do? Let's review a simple function:

```python
def myfunc(a,b):
    return sum((a,b))*.05

myfunc(40,60)
```

**Output:**
```
5.0
```

This function returns 5% of the sum of `a` and `b`. In this example, `a` and `b` are *positional* arguments; that is, 40 is assigned to `a` because it is the first argument, and 60 to `b`. Notice also that to work with multiple positional arguments in the `sum()` function we had to pass them in as a tuple.

What if we want to work with more than two numbers? One way would be to assign a *lot* of parameters, and give each one a default value.

```python
def myfunc(a=0,b=0,c=0,d=0,e=0):
    return sum((a,b,c,d,e))*.05

myfunc(40,60,20)
```

**Output:**
```
6.0
```

Obviously this is not a very efficient solution, and that's where `*args` comes in.

## `*args`

When a function parameter starts with an asterisk, it allows for an *arbitrary number* of arguments, and the function takes them in as a tuple of values. Rewriting the above function:

```python
def myfunc(*args):
    return sum(args)*.05

myfunc(40,60,20)
```

**Output:**
```
6.0
```

Notice how passing the keyword "args" into the `sum()` function did the same thing as a tuple of arguments.

It is worth noting that the word "args" is itself arbitrary - any word will do so long as it's preceded by an asterisk. To demonstrate this:

```python
def myfunc(*spam):
    return sum(spam)*.05

myfunc(40,60,20)
```

**Output:**
```
6.0
```

## `**kwargs`

Similarly, Python offers a way to handle arbitrary numbers of *keyworded* arguments. Instead of creating a tuple of values, `**kwargs` builds a dictionary of key/value pairs. For example:

```python
def myfunc(**kwargs):
    if 'fruit' in kwargs:
        print(f"My favorite fruit is {kwargs['fruit']}")
    else:
        print("I don't like fruit")
        
myfunc(fruit='pineapple')
```

**Output:**
```
My favorite fruit is pineapple
```

```python
myfunc()
```

**Output:**
```
I don't like fruit
```

## `*args` and `**kwargs` combined

You can pass `*args` and `**kwargs` into the same function, but `*args` have to appear before `**kwargs`

```python
def myfunc(*args, **kwargs):
    print(args)
    print(kwargs)
    if 'fruit' and 'juice' in kwargs:
        print(f"I like {' and '.join(args)} and my favorite fruit is {kwargs['fruit']}")
        print(f"May I have some {kwargs['juice']} juice?")
    else:
        pass
        
myfunc('eggs','spam',fruit='cherries',juice='orange')
```

**Output:**
```
('eggs', 'spam')
{'fruit': 'cherries', 'juice': 'orange'}
I like eggs and spam and my favorite fruit is cherries
May I have some orange juice?
```

Placing keyworded arguments ahead of positional arguments raises an exception:

```python
myfunc(fruit='cherries',juice='orange','eggs','spam')
```

**Output:**
```
SyntaxError: positional argument follows keyword argument (&lt;ipython-input-20-fc6ff65addcc&gt;, line 1)
```

As with "args", you can use any name you'd like for keyworded arguments - "kwargs" is just a popular convention.

That's it! Now you should understand how `*args` and `**kwargs` provide the flexibilty to work with arbitrary numbers of arguments!

---
---
---
---
# Scope with LEGB Rule, global, nonlocal keyword

This idea of scope in your code is very important to understand in order to properly assign and call variable names. 

In simple terms, the idea of scope can be described by 3 general rules:

1. Variable &lt;b&gt;assignments&lt;/b&gt; will create or change local names by default and result in error if not defined .
2. Variable &lt;b&gt; references &lt;/b&gt; are `searched` in four scopes(during accessing vars; not the assignment), these are:
    * local
    * enclosing functions
    * global
    * built-in
3. Names declared in `global` and `nonlocal` statements map assigned names to function scopes and enclosing module respectively.

- There is no local scope in python i.e it has a global scope , function/class scope, enclosing function/class scope .

```python

    
n = 5
for i in range(2):
    n = 13
    for j in range(3):
        m = 5
        for k in range(4):
            a=1
            for l in range(5):
                b = 5
                for x in range(6):
                    a=3
```
- every var in code is in global scope.

- The statement #2 above can be refered by the LEGB rule.

**LEGB Rule:**

    L: Local(functional) — Names assigned in any way within a function (def or lambda), and not declared global in that function.

    E: Enclosing function locals — Names in the local scope of any and all enclosing functions (def or lambda), from inner to outer.

    G: Global (module) — Names assigned at the top-level of a module file, or declared global in a def within the file.



    B: Built-in (Python) — Names preassigned in the built-in names module : open, range, SyntaxError,...

## The &lt;code&gt;global&lt;/code&gt; keyword
If you want to assign a value to a name defined at the top level of the program (i.e. not inside any kind of scope such as functions or classes), then you have to tell Python that the name is not local, but it is global. We do this using the `global` Keyword. 

**It is impossible to assign a value to a variable defined outside a function without the global statement.**

You can use the values of such variables defined outside the function (assuming there is no variable with the same name within the function). However, this is not encouraged and should be avoided since it becomes unclear to the reader of the program as to where that variable’s definition is. Using the &lt;code&gt;global&lt;/code&gt; statement makes it amply clear that the variable is defined in an outermost block.

## The &lt;code&gt;nonlocal&lt;/code&gt; keyword

- To show that variable is already define in enclosing block not in global block we use `nonlocal`

```python
x = 50

def func():
    x = 2
    print(x)
func()
print("out", x)
```

**Output:**
```
2
out 50
```

```python
x = 50

def func():
    global x
    x = 2
    print(x)
func()
print("out", x)
```

**Output:**
```
2
out 2
```

```python
x=344 # global x

def outer():
    x =23 # enclosing x
    def inner():
        x+=34 # here it can not be assigned before x declaration
        print(x) # use nonlocal to use enclosing x
        
    inner()
    print(x)
    
    
outer()
```

**Output:**
```
UnboundLocalError: local variable 'x' referenced before assignment
```

```python
x=344 # global x

def outer():
    x =23 # enclosing x
    def inner():
        nonlocal x
        x+=34 # here it can not be assigned before x declaration
        print(x) # use nonlocal to use enclosing x
        
    inner()
    print(x)
    
    
outer()
```

**Output:**
```
57
57
```

```python
x=344 # global x

def outer():
    x =23 # enclosing x
    def inner():
        global x
        x+=34 # here it can not be assigned before x declaration
        print(x) # use nonlocal to use enclosing x
        
    inner()
    print(x)
    
    
outer()
```

**Output:**
```
378
23
```

## Note

- when u assign a value to a variable inside function then it become local to that function

```python
x=2
def just_try():
    print(x) # following LEGB Rule
```

```python
just_try()
```

**Output:**
```
2
```

```python
x=3
def just_try2():
    x+=2 # x = x+2 ; here x becomes local now and on rhs i am accesing variable which is not declared locally hence error
    print(x)
```

```python
just_try2()
```

**Output:**
```
UnboundLocalError: local variable 'x' referenced before assignment
```

```python
x=34
def just_try3():
    x = 3  # here also x is declared locaaly hence no access to global
    print(x)
```

```python
just_try3()
```

**Output:**
```
3
```

```python
x=23
def just_try4():
    global x 
    x=32
    print(x)
```

```python
just_try4()
```

**Output:**
```
23
```

# What are the rules for local and global variables in Python?
- In Python, variables that are only &lt;em&gt; referenced&lt;/em&gt; inside a function are implicitly global. If a variable is assigned a value anywhere within the function’s body, it’s assumed to be a functional variable unless explicitly declared as global.