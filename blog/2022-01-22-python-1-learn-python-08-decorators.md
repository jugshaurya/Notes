---
title: "Decorators"
slug: python-1-learn-python-08-decorators
date: 2022-01-22
authors: [shaurya]
tags: [python, programming, decorators]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/1-Learn-Python/08-Decorators.ipynb)
>
> **Category**: Python / 1 Learn Python

<!-- truncate -->

# Decorators


Decorators can be thought of as functions which modify the *functionality* of another function. They help to make your code shorter and more "Pythonic". 

To properly explain decorators we will slowly build up from functions. 



 So let's break down the steps:

## Functions Review

```python
def func():
    return 1
```

```python
func()
```

**Output:**
```
1
```

## Scope Review
Remember from the nested statements lecture that Python uses Scope to know what a label is referring to. For example:

```python
s = 'Global Variable'

for i in range(12):
    r=4
    for j in range(4):
        p = 3
        
def check_for_locals():
    x=3
    for i in range(10):
        y=3
    print(locals())
```

Remember that Python functions create a new scope, meaning the function has its own namespace to find variable names when they are mentioned within the function. We can check for local variables and global variables with the &lt;code&gt;locals()&lt;/code&gt; and &lt;code&gt;globals()&lt;/code&gt; functions. For example:

```python
check_for_locals()
```

**Output:**
```
{'x': 3, 'i': 9, 'y': 3}
```

```python
print(globals().keys())
```

**Output:**
```
dict_keys(['__name__', '__doc__', '__package__', '__loader__', '__spec__', '__builtin__', '__builtins__', '_ih', '_oh', '_dh', 'In', 'Out', 'get_ipython', 'exit', 'quit', '_', '__', '___', '_i', '_ii', '_iii', '_i1', 's', 'check_for_locals', '_i2', '_i3', '_i4', '_i5', '_i6', '_i7', '_i8', '_i9', '_i10', 'i', 'r', 'j', 'p', '_i11', '_i12', '_i13', '_i14', '_i15', '_i16', '_16', '_i17', '_i18', '_i19', '_i20', '_i21', '_i22'])
```

Here we get back a dictionary of all the global variables, many of them are predefined in Python. So let's go ahead and look at the keys:

```python
print(globals().keys())
```

**Output:**
```
dict_keys(['__name__', '__doc__', '__package__', '__loader__', '__spec__', '__builtin__', '__builtins__', '_ih', '_oh', '_dh', 'In', 'Out', 'get_ipython', 'exit', 'quit', '_', '__', '___', '_i', '_ii', '_iii', '_i1', 's', 'check_for_locals', '_i2', '_i3', '_i4', '_i5', '_i6', '_i7', '_i8', '_i9', '_i10', 'i', 'r', 'j', 'p', '_i11', '_i12', '_i13', '_i14', '_i15', '_i16', '_16', '_i17', '_i18', '_i19', '_i20', '_i21', '_i22', '_i23'])
```

Note how **s** is there, the Global Variable we defined as a string:

```python
globals()['s']
```

**Output:**
```
'Global Variable'
```

Now let's run our function to check for local variables that might exist inside our function (there shouldn't be any)

```python
check_for_locals()
```

**Output:**
```
{'x': 3, 'i': 9, 'y': 3}
```

Great! Now lets continue with building out the logic of what a decorator is. Remember that in Python **everything is an object**. That means functions are objects which can be assigned labels(variables) and passed into other functions. Lets start with some simple examples:

```python
def hello(name='Jose'):
    return 'Hello '+name
```

```python
hello()
```

**Output:**
```
'Hello Jose'
```

Assign another label to the function. Note that we are not using parentheses here because we are not calling the function **hello**, instead we are just passing a function object to the **greet** variable.

```python
greet = hello
```

```python
greet
```

**Output:**
```
&lt;function __main__.hello(name='Jose')&gt;
```

```python
greet()
```

**Output:**
```
'Hello Jose'
```

So what happens when we delete the name **hello**?

```python
del hello
```

```python
hello()
```

**Output:**
```
NameError: name 'hello' is not defined
```

```python
greet()
```

**Output:**
```
'Hello Jose'
```

Even though we deleted the name **hello**, the name **greet** * still points to* our original function object(i.e it had its own copy). It is important to know that functions are objects that can be passed to other objects!

## Functions within functions
Great! So we've seen how we can treat functions as objects, now let's see how we can define functions inside of other functions:

```python
def hello(name='Jose'):
    print('The hello() function has been executed')
    
    def greet():
        return '\t This is inside the greet() function'
    
    def welcome():
        return "\t This is inside the welcome() function"
    
    print(greet())
    print(welcome())
    print("Now we are back inside the hello() function")
```

```python
hello()
```

**Output:**
```
The hello() function has been executed
	 This is inside the greet() function
	 This is inside the welcome() function
Now we are back inside the hello() function
```

```python
welcome() # welcome() function was locally defined in hello() therefore not available globally
```

**Output:**
```
NameError: name 'welcome' is not defined
```

Note how due to scope, the welcome() function is not defined outside of the hello() function. Now lets learn about returning functions from within functions:
## Returning Functions

```python
def hello(name='Jose'):
    
    def greet():
        return '\t This is inside the greet() function'
    
    def welcome():
        return "\t This is inside the welcome() function"
    
    if name == 'Jose':
        return greet
    else:
        return welcome
```

Now let's see what function is returned if we set x = hello(), note how the empty parentheses means that name has been defined as Jose.

```python
x = hello()
```

```python
x
```

**Output:**
```
&lt;function __main__.hello.&lt;locals&gt;.greet()&gt;
```

Great! Now we can see how x is pointing to the greet function inside of the hello function.

```python
print(x())
```

**Output:**
```
This is inside the greet() function
```

Let's take a quick look at the code again. 

In the &lt;code&gt;if&lt;/code&gt;/&lt;code&gt;else&lt;/code&gt; clause we are returning &lt;code&gt;greet&lt;/code&gt; and &lt;code&gt;welcome&lt;/code&gt;, not &lt;code&gt;greet()&lt;/code&gt; and &lt;code&gt;welcome()&lt;/code&gt;. 

This is because when you put a pair of parentheses after it, the function gets executed; whereas if you don’t put parentheses after it, then it can be passed around and can be assigned to other variables without executing it.

When we write &lt;code&gt;x = hello()&lt;/code&gt;, hello() gets executed and because the name is Jose by default, the function &lt;code&gt;greet&lt;/code&gt; is returned. If we change the statement to &lt;code&gt;x = hello(name = "Sam")&lt;/code&gt; then the &lt;code&gt;welcome&lt;/code&gt; function will be returned. We can also do &lt;code&gt;print(hello()())&lt;/code&gt; which outputs *This is inside the greet() function*.

## Functions as Arguments
Now let's see how we can pass functions as arguments into other functions:

```python
def hello():
    return 'Hi Jose!'

def other(func):
    print('Other code would go here')
    print(func())
```

```python
other(hello)
```

**Output:**
```
Other code would go here
Hi Jose!
```

Great! Note how we can pass the functions as objects and then use them within other functions. Now we can get started with writing our first decorator:

## Creating a Decorator
- In the previous example we actually manually created a Decorator. Here we will modify it to make its use case clear:
- Arguments of the function to be wrapped are passed to wrap function ,inner one, therefore we must accept those arguments if any. 
- using `@decor_name` changes the function itself to it's wrapped version

```python
def my_new_decorator(func):
    # basically wrapping with wrap_func() 
    # and wrapping the func() 
    def wrap_func():
        print("Code would be here, before executing the func")

        func()

        print("Code here will execute after the func()")
    # and returning it!
    return wrap_func

def func_needs_decorator():
    print("This function is in need of a Decorator")
```

```python
# Reassign func_needs_decorator
func_needs_decorator = my_new_decorator(func_needs_decorator)
```

```python
func_needs_decorator()
```

**Output:**
```
Code would be here, before executing the func
This function is in need of a Decorator
Code here will execute after the func()
```

So what just happened here? A decorator simply wrapped the function and modified its behavior and returns it as a wrapeed beautiful version . 
-Now let's understand how we can rewrite this code using the @ symbol, which is what Python uses for Decorators:

```python
# if u basically want to off this decorator ,simply comment out the @decorator  line
@my_new_decorator
def func_needs_decorator():
    print("This function is in need of a Decorator")
```

```python
func_needs_decorator()
```

**Output:**
```
Code would be here, before executing the func
This function is in need of a Decorator
Code here will execute after the func()
```

**Great! You've now built a Decorator manually and then saw how we can use the @ symbol in Python to automate this and clean our code. You'll run into Decorators a lot if you begin using Python for Web Development, such as Flask or Django!**

# Application of Decorator

- function declaration inside function cannt be done in c++ or java but in python we have decorators.

```python
# point 2
def decorate(sum):
    def wrap(x,y):
        sum(x,y)
        print("sum is : " ,x+y)
    return wrap
```

```python
@decorate
def sum(a,b):
    print("sum will we calculated by decorator")
```

```python
sum(3,5)
```

**Output:**
```
sum will we calculated by decorator
sum is :  8
```