---
title: "Operators  in Python"
slug: python-1-learn-python-02-operators-and-special-functions
date: 2022-01-16
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/1-Learn-Python/02-Operators-and-Special-functions.ipynb)
>
> **Category**: Python / 1 Learn Python

<!-- truncate -->

# Operators  in Python

|**Type** | **Operartors**|
|-------|-----|
|Arithmetic Operator | +, -, *, /,  % , //, ** |
|Relational Operator | &lt;,&gt;,&lt;=,&gt;=, ==, != |
|Logical Operator | and, or, not |
|Bitwise Operator |&, ~, >>, << ,^ , \|  |
|Assignment Operator | += ,-=, *=, /=, %= , //=, ** =, >>=, <<=, &=, \|=, ^=  |
|Ternary Operator | x=a if(condtion is true) else rest |
|Special Operator | (is, is not ):(Identity operators), (in, not in):(Membership operators) |

# 1. Arithmetic Operator

|**Type**|**Terminology**|
|-----|--------|
|+ | addition Operator|
|- | subtraction Operator|
|* | Multiplication Operator|
|/ | Division Operator|
|% | Modulo Opertor|


|More|.....|
|-----|--------|
|// | Floor Operator|
|** |Power Operator|



**NOTE**

## / 
- this always result in a float value


## // 
- this can return either int or float
- if both values are int then result is always int
- if any one is float then result is always float

**NOTE**
- so our normal c++ operator is '//' but will always give floor value .

```python
a = 12
b=12
```

```python
a+b
```

**Output:**
```
24
```

```python
print(a+b)
print(a-b)
print(a*b)
print(a/b) # always generate float value
print(a%b)
```

**Output:**
```
24
0
144
1.0
0
```

```python
print(a//b) # can generate float or int; int in this case
print(a**b)
```

**Output:**
```
1
8916100448256
```

```python
a=12.0
```

```python
print(a//b) # can generate float or int; float in this case
print(a**b)
```

**Output:**
```
1.0
8916100448256.0
```

# '+' operator applicable for str also(string concatenation)

- if both are string then concatenation happen
- if any one is int then error will occur

```python
'shaurya' + 3
```

**Output:**
```
TypeError: must be str, not int
```

```python
'shaurya' + ' singhal'
```

```python
'shau' +str(3)
```

# '*' operator applicable for str also(string repetation)

- if both are string then error will occur
- if any one is int then repetation will occur

```python
'shua' *3
```

```python
3* 'shau'
```

```python
'shau'*'3'
```

# 2. Relational Operator ( &lt;,&gt;,&lt;=,&gt;=, ==, != )

- You know it very well
- applicable on string as well (consider Ascii or Unicode to compare)
- while comparing two values with incompatible type (using == or !=)(consider int and float both as number type) there is never an error, but result ---------------->>>>>> LHS is not equal to RHS.
- and for others(operators) it is error.

```python
'3' == 3
```

```python
3==3.0
```

```python
4 != '4.0'
```

# Chained Comparison Operators are also allowed

An interesting feature of Python is the ability to *chain* multiple comparisons to perform a more complex test. You can use these chained comparisons as shorthand for larger Boolean Expressions.

`10&lt;20&lt;30&lt;40 `-&gt; is allowed in Python (it will return true if every one is true)

- i.e  10&lt;20&lt;30&lt;40 -&gt; is allowed in Python (it will return true)

## Rule
``` python
if a&lt;b&lt;c&lt;d&lt;e

    if all are true =&gt; then ans is true
    else false
```

```python
10<20<30
```

```python
10<20>30
```

```python
10==5+5 == 3+7 == 2*5
```

```python
'shaurya'<'singhal'
```

```python
10<'sh'
```

```python
10=='sh'
```

```python
10 =='10'
```

```python
10==10.0
```

```python
'shaur'=='shaur'
```

```python
True==1
```

```python
True==0
```

```python
False==0
```

```python
10+2j == 10+2j
```

```python
10+2j != 10-2j
```

```python
10 ==10.1
```

## 3. Logical Operator(and, or, not)--> different from C++ or Java in output

In case of a ('and' or 'or') b

    - result is not true or false 
    - result is always either a or b 

- In case  of **not** ans is same as in c++

## Rules

- #### and
-- if a is false result is a otherwise b


- #### or
-- if a is true result is a otherwise b


- #### not
-- if a is true result is b otherwise a

```python
10 and 20
```

```python
False and 34
```

```python
True and 34
```

```python
'sh' and 34
```

```python
'' and 245
```

```python
False or'shau'
```

```python
not ''
```

```python
not False
```

```python
not 'shaurya'
```

```python
10 or 10/0
```

```python
10 and 10/0
```

## 4. Bitwise Operator(&, |, ~, >>,<<, ^)

- you know them work like as in c++

## 5. Assignment and Compound Assignment Operator(=, +=,............)

- a,b,c,d = 1,2,3,4
- a,b = b,a (Swapping)


- In Python there is no pre/post-increment/decrement operator 
- i.e x++, x--, ++x, --x are not valid 
- to increment use x=x+1 or x+=1.



- post one will give u error
- pre(++x) is considered as  +(+x) 
- --x as -(-x) or we can say they are series of unary operator in python

```python
x =-12
```

```python
--x
```

```python
++x
```

```python
---x
```

```python
x++
```

## Ternary Operator

- it is unlike that in c++ or Java

``` python
    x=a if (condition is True) else (b)
```


-- chaining is also allowed in ternary operator as in c++ or Java
``` python
    x=a if (condition1) else (b if (condition2) else(c))
        above statemaent can be written without any braces and would mean the same!!

        ```

```python
x=2 if(True) else 4
```

```python
x
```

```python
x=5 if (not True) else 6
```

```python
x
```

```python
x=3 if False else 5 if False  else 9
```

```python
x
```

```python
a,b=12,14
```

```python
print(a,b,sep='\n')
```

```python
a,b=b,a
```

```python
print(a,b,sep='\n')
```

## 6. Special Operator

- Two types

|Name | Operators|
|-------|---------|
|Identity Operator| is, is not|
|Membership Operator| in, not in |

- **is operator** compares the reference i.e. whether they are pointing to same memory location or not
 but == compares the content of left value and right value.
 
- **in operator** checks if something is a member of it or not

```python
a=10
b=10
```

```python
print(id(a))
print(id(b))
```

```python
a is b
```

```python
a= [1,2,3]
b= [1,2,3] #since list dont use reusing concept(valid for int and strings only)
```

```python
a==b
```

```python
a is b
```

```python
print(id(a))
print(type(a))
print(id(b))
print(type(b))
```

```python
10 in a
```

```python
1 in a
```

```python
2 in b
```

```python
5 not in b
```

```python
5 in b
```

```python
s = "shaurya is Loving Python "
```

```python
print('shau' in s)
print('S' in s)
print('L' in s)
print('l' in s)
print('Pyth' in s)
```

---
---
---
---

# Functions

- we can use **default arguments**

- we can pass **positional arguments** to function(like fun('shdg' , '23' ,32435))

- we can use **keyworded arguments** as well
    - like (a=23, b=24, d=24, c=23)
    
- there are \*args and \**kwargs as well

```python
    def fun(a,b):
        print(a,b)

    fun(2,3) # positional

    def fun2(a,b,c=3): #default
        print(a,b,c)

    fun2(3,3)

    fun2(b=23, c=34, a=12) # keyworded argumnents (not possible in c++)
```

# Nested Functions

- Function inside function

```python
def outer_func():
    
    def inner_func():
        print("inner_ function")

    print("outer_func")
    inner_func()
    print("outer_func")
    inner_func()
    print("outer_func")    
    inner_func()
    print("outer_func")    
    inner_func()
    print("outer_func")    
    inner_func()
```

```python
outer_func()
```

# Special Functions

- eval() ->just like auto in c++(it automatically evaluate the type of string argument and in addition it is used to evaluate expression )
- enumerate()
- zip()

- Discussed in Lambda expression notebook
    - map()
    - filter()
    - reduce() 
- some more..    
    - all()  returns true if all are true like in lst = [True,True,False,True]  , all(lst) returns False 
    - any()  returns true if any of among is true like in lst = [True,True,False,True]  , any(lst) returns True 

#### Concept
- Tuple Unpacking
- Dictionary Unpacking
- List Comprehension(Discussed in its notebook)

# eval()

```python
integer = eval('2342')
print(type(integer))
```

```python
floatVal = eval('2342.354')
print(type(floatVal))
```

```python
int2 = eval('2+3*10+24')
print(type(int2))
print(int2)
```

## enumerate()

enumerate is a very useful function to use with for loops. Let's imagine the following situation:

```python
# we can do something like this

index_count = 0
for letter in 'abcde':
    print("At index {} the letter is {}".format(index_count,letter))
    index_count += 1
```

```python
for x in enumerate('defg'):
    print(x)
```

```python
# or we can do it using enumerate() -> gives a list of tuples
# concept of tuple unpacking
for index, value in enumerate('abcde'):
    print("At index {} the letter is {}".format(index, value))
```

## zip()
 You can use the **zip()** function to quickly create a list of tuples by "zipping" up together two or more lists.
 ###### note-> will see iterator later on..
zip() makes an iterator that aggregates elements from each of the iterables.

Returns an iterator of tuples, where the i-th tuple contains the i-th element from each of the argument sequences or iterables. The iterator stops when the shortest input iterable is exhausted. With a single iterable argument, it returns an iterator of 1-tuples. With no arguments, it returns an empty iterator.

```python
list1 = [1,2,3,4,5]
list2 = ['a','b','c','d','e']
```

```python
type(zip(list1,list2))
```

```python
zip(list1,list2)
```

```python
list(zip(list1,list2))
```

```python
list3 =[23,235,6,4,756,89,7]
```

```python
for a,b,c in zip(list1,list2,list3):
    print(a,b,c)
    print()
```

## Tuple Unpacking
Tuples have a special quality when it comes to &lt;code&gt;for&lt;/code&gt; loops. If you are iterating through a sequence that contains tuples, the item can actually be the tuple itself, this is an example of *tuple unpacking*. During the &lt;code&gt;for&lt;/code&gt; loop we will be unpacking the tuple inside of a sequence and we can access the individual items inside that tuple!

```python
list2 = [(2,4),(6,8),(10,12)]
```

```python
for tup in list2:
    print(tup)
```

```python
# Now with unpacking and then packing!
for (t1,t2) in list2:
    print(t1 ,end = ' ')
    print(t2)
```

Cool! With tuples in a sequence we can access the items inside of them through unpacking! The reason this is important is because many objects will deliver their iterables through tuples. Let's start exploring iterating through Dictionaries to explore this further!

## Dictionary Unpacking

```python
d = {'k1':1,'k2':2,'k3':3}
for item in d:
    print(item)
```

```python
print(d.items())
```

Notice how this produces only the keys. So how can we get the values? Or both the keys and the values? 

We're going to introduce three new Dictionary methods: **.keys()**, **.values()** and **.items()**

In Python each of these methods return a *dictionary view object*. It supports operations like membership test and iteration, but its contents are not independent of the original dictionary – it is only a view. Let's see it in action:

```python
d.values()
```

```python
# Create a dictionary view object
d.items()
```

Since the .items() method supports iteration(gives a list of tuples), we can perform *dictionary unpacking* to separate keys and values just as we did in the Tuple Unpacking.

```python
# Dictionary unpacking
for k,v in d.items():
    print(k,end=' ')
    print(v)
```

## Conclusion

We've learned how to use for loops to iterate through tuples, lists, strings, and dictionaries. It will be an important tool for us.