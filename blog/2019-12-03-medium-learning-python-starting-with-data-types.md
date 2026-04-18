---
title: "Learning Python — Starting with Data Types"
slug: medium-learning-python-starting-with-data-types
date: 2019-12-03
authors: [shaurya]
tags: [medium, data-type, programming, basics, python]
---

<!-- generated-blog-post -->

> **Originally published on Medium**: [Read on Medium](https://medium.com/@shauryasinghal84/learning-python-starting-with-data-types-bc215a24086a?source=rss-8a8ccc073283------2)

<!-- truncate -->

### Learning Python — Starting with Data Types

![](https://cdn-images-1.medium.com/max/1024/0*G4F7D6zFKeXDNMhw)

*Photo by [David Clode](https://unsplash.com/@davidclode?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

Hello,Hello,Hello!, Let’s get into the world the Machine Learning and AI, first step being learn Python from ground 0 and quickly move to top.

So Welcome to series 🏇 This post contains:

- What is Python? and- various Data-Types in Python(just skim through it, no need to remember all!, btw i marked some 🌳important🌳).

### 1. Python Facts

![](https://cdn-images-1.medium.com/max/183/0*deuwzq5IndtvtzRl.jpg)

*Source- Google*

- Python is a general purpose high level programming language- Developed by Guido van Rossum and Released in 1991.- Named after the BBC show Monty Python's Circus.

### 2. Features of Python

- **Simple and easy to learn**- **Opensource language**- **Platform independent** (means can run over any operating system)- **Portable** (any python program written over one OS can be shifted to other OS)- **Dynamically typed** (Python uses *dynamic typing*, meaning you can re-assign variables to different data types at any point of time . This makes Python very flexible in assigning data types; it differs from other languages which are *statically typed*. )- **Strongly Typed Language** (explicit conversion is required)- **Interpreted **(An interpreted language is a type of programming language for which most of its implementations execute instructions directly and freely, without previously compiling a program into machine-language instructions. Java and C# are compiled into bytecode, the virtual-machine-friendly interpreted language.)- **Extensible** ( can use ***C*** like languages code as well in python Script)- **Embedded** (can use python in other languages)- **Extensive Libraries**

### 3. Indentation in Python

- Whitespace is important in Python.
```
- Actually, whitespace at the beginning of the line is important. This is called indentation.
```

```
- Leading whitespace (spaces and tabs) at the beginning of the logical line is used to determine the indentation level of the logical line, which in turn is used to determine the grouping of statements.
```

```
- This means that statements which go together must have the same indentation. Each such set of statements is called a block.
```

### **4. Identifiers in Python**

```
1. should contain a-z ,A-Z, 0-9, _
2. should not start with digit
3. Case sensitive
4. don't use reserved keywords
5. no limit on variable length
```

### 5. Conventions

```
1. _x means private variable
2. __x means strongly private
3. __x__ means python language specific(magic methods or Dunders) example:- __main__, __add__, __init__, ...
```

```
- Private Variables in Python
```

```
    In Python, there is no existence of *Private* instance variables which cannot be accessed except inside an object. However, a convention is being followed i.e. a name prefixed with an underscore, For e.g. _secret should be treated as a non-public part of any Python code, whether it is a function, a method or a data member.
```

```
- Strongly Private Variables and concept of Mangling
    
    Mangling is used to avoid variable name-clashing with names defined by subclasses. Any identifier of the form __secret is replaced with _classname__secret.
    
    The mangling rules are designed mostly to avoid accidents but it is still possible to access or modify a variable that is considered private. This can even be useful in special circumstances, such as in the debugger.
```

### 6. Not in Python 🙂

```
- do while loop
- switch
- else if (instead have elif)
- catch (instead have except)
- throw (instead have raise)
```

### 7. Python Keywords (Total 35)🌠

![](https://cdn-images-1.medium.com/max/1024/1*qqctSi3X7GtxSJXu6X5pag.png)
Note → all keywords contain alphabets only and two of them starts with capital words

### 8. Data types in Python ( Total 14 )🌠

***a.**** Fundamental DataTypes*( all are immutable)*(*🌳*Important)*

- int (long was in python 2, but not in python 3)- float- complex- bool- str

***b. ****Collection related Data Types*

- bytes - represent ***group of values*** in range 0 to 256 but immutable.- bytearray - same as bytes but mutable- range - immutable represent group of continuous values .*(*🌳*Important)*- list - mutable *(*🌳*Important)*- set - mutable *(*🌳*Important)*- tuple - immutable *(*🌳*Important)*- frozenset - immutable- dict - mutable *(*🌳*Important)*- None

### Note

- In python every thing is object.- every sequence that maintains order in which they are inserted, we can use slicing(string, list, tuple, range).- Python provide some inbuild function

**print() - prints in python**
**type(a) - prints the datatype of a 
id(a) - prints the memory address of a
input() - take a complete line as input**
### ***8.a.1) ***🎭***int Datatype***🎭

- a=10 creates an object of class ‘int’ named a.- can be represented in 4 form

```
**DecimalForm**(a=10)
```

```
**OctalForm** ( a=0o12 )- starts with zero ‘o’ or ‘O’.
```

```
**HexadecimalForm** ( a=0x12 ) - starts with zero ‘x’ or ‘X’.
```

```
**Binary** (a=0b10) -starts with 0b or 0B i.e. 0b11 is 3 & -0b11 is -3.
```

- Note

```
since size of objects are not fixed in any language and because everything is object in python , no data type has its range and hence no limits on the amount of data a variable can store.
```

```
*a=999999999999*, this is also valid and infact of type class ‘int’
```

- Base Conversion Utility Function

```
**bin(x)** 
   - convert x to binary  
   - x can be decimal,octal,hexa and returns a string having binary representation of x
```

```
**oct(x)**
```

```
**hex(x)**
```

### 8.a.2)🎭 float Datatype🎭

- a = 1.2, b=4.0- can be written in Exponential form f = 1.2e3 = 1.2 * 10³ = 1200.0 is valid. f = 1e5 ,1e-1, 1.2e-6 are valid

### 8.a.3)🎭 Complex Datatype🎭

- 2+3j (dont use i ; only j is supported beacuse of electrical engineering ; i is consider current and j=sqrt(-1)).- if a+bj is a complex number

```
1. a and b can be int/float.
2. a can be in any form (base 2,8,16) but b must be a decimal value.
3. we can perform mathematical operation on complex number.
 **  a = 20+3j
   b = 23+23j**
      a+b is valid
      a-b is valid
      a*b is valid
```

- **a.real** gives real part and **a.imag** gives imaginary part

### 8.a.4) 🎭Boolean Datatype🎭

- True and False , True is stored as 1 , False is stored as 0

```
True + True = 2 
True + False = 1
**True**/**True = 1.0 (/ in python always returnd floating-point result)
True**/**False = **ZeroDivisionError: division by zero
```

### 8.a.5) 🎭str Datatype🎭

```
**s = 'shaurya'
s = "singhal"**
```

```
- Both are fine in python
- But recommended to use single quotes as this is the way it is stored internally.
```

- Triple Quotes in Python

```
**-** we can store multiline string in python using triple quotes 
   ** 
"'Learning
                                                                  python!   ok'"**
     in above example spacing/line b/w two words is also taken as a part of string with exactly same white-spaces
```

```
**-** we can store double quotes in a string using multiline trick as well.
str = """ i am learning "Python" Language"""
```
use \' or \” as escaping characters while using combination and use

>>> **print**('C:\some**\n**ame')  *# here \n means newline!*
C:\some
ame
>>> **print**(r'C:\some\name')  *# note the r before the quote*
C:\some\name
- String Indexing

```
- strings can be accessed using indexes
```

```
indexing as follows:
|0|1|2|3|4|5|6|
|s|h|a|u|r|y|a|
|-7|-6|-5|-4|-3|-2|-1|
```

- String Slicing Operator(works beacause strings are ordered sequences)

```
**s = "shaurya"**
***1. s[begin:end]*** = returns substring from (begin to end-1) both including 
```

```
s[1:3] - return 'ha'
s[1:] - return 'haurya'
s[:2] - return 'sh'
s[:] - return complete string
str[4:1] - return empty string as (begin &gt;= end)
str[1:432] - if end &gt; greater than length of string then it will print till end.🙂
```

```
***2. s[begin:end:step]*** - instead of default 1 jump now there are jump of step
```

```
**s = 'sa'
3. s*4** - print string s 4times!(*'sasasasa'*)
```

```
**4. len(s)**- returns length of string
**5. char is str type only**
```

### 8.b.1) 🎨bytes Datatype(Immutable)🎨

- bytes represent a group of elements within the range of 0 to 256 only.

```
&gt;&gt;&gt; b = [12,23,234,42] 
&gt;&gt;&gt; b = bytes(b)** # valid**
```

```
=========================
```

```
&gt;&gt;&gt; b = [12,23,264,42] 
b = bytes(b)** #Value error (**values of bytes must be in range(0,256))
```

- Immutablity

```
you can not change the content of bytes once defined 
***i.e b[2] = 12 is not allowed***
```

### **8.b.2) **🎨bytearray🎨** (Mutable)**

- same as byte but mutable

```
**mutable** you can change the content of bytes once defined 
**i.e b[2] = 12 is valid**
```

```
Note - bytes and bytearray are not generally used , but are beneficial while working with binary data like to store images ,videos etc.
```

### 8.b.3) 🎨list🎨(Mutable)*(*🌳*Important)*

- Vectors of C++ is called list in python(means list can be increases or decreased dynamically).- stores element in insertion order (Preserve order), growable or shrinkable , duplicates are allowed , heterogenous objects are allowed (can store int with strings, bool or any combination).- use [] to define list i.e. l = [10,20,30,'shaurya',True]- indexing is allowed, slicing operator is allowed (because of ordered sequence).

![](https://cdn-images-1.medium.com/max/1024/1*VTF00gwvXT2SW8YFPLH9_A.png)

### 8.b.4) 🎨tuple🎨 (ImMutable)*(*🌳*Important)*

- same as list but immutable.- use ()to define tuple i.e. t= (10,20,30,'shaurya',True)- indexing is allowed, slicing operator is allowed (again you know why? right!)

![](https://cdn-images-1.medium.com/max/1024/1*pqB9gQj9t8szBRxZiukaBQ.png)

#### - When to use Tuples
You may be wondering, “Why bother using tuples when they have fewer available methods?” To be honest, tuples are not used as often as lists in programming, but are **used when immutability is necessary**. If in your program you are passing around an object and need to make sure it does not get changed, then a tuple becomes your solution. It provides a convenient source of data integrity.

### 8.b.5)🎨range🎨(ImMutable)*(*🌳*Important)*

- store continuous values and can use indexing or slicing- **Form 1: ****range(end)**

![](https://cdn-images-1.medium.com/max/1024/1*eCtRyMmvzKQY-22_7jVt8w.png)

- **Form 2:**** range(start,end,step=1)**

![](https://cdn-images-1.medium.com/max/911/1*-ACMd4tuNXx_ytr14VUMbg.png)

### 8.b.6) 🎨set🎨 (Mutable)*(*🌳*Important)*

- Indexing/slicing is not allowed as no sequence is mainted while insetion of elements(Hence no Order sequence).- growable/shrinkable, heterogenious.- **does not store sorted elements like in c++** because internally there is no BST.- Does not store duplicates.- use {} to define set- use s = set() to define empty set (not s ={} because this declares empty dictionary).

![](https://cdn-images-1.medium.com/max/900/1*wgcwv0nPnVZNEBQ3v3TOuw.png)

### 8.b.7) 🎨frozenset🎨 (Immutable)

- same as set but immutable, no duplicates, no pre-determined order, growable, no indexing, no slicing, not sorted .
```
    s = {2,3,5,8} 
    s = frozenset(s) 
    s = frozenset({8, 2, 3, 5})
    type(s) 
    &lt;class 'frozenset'&gt;
```

### 8.b.8) 🎨dict🎨(Mutable)*(*🌳*Important)*

- - stores data in form of key-value pairs- if key is same of two pairs then second will replace first (duplicate keys are not allowed. )- use {} like set to represent dict.- empty dictionary, d ={}

![](https://cdn-images-1.medium.com/max/1024/1*QuzvzVbz3mG-55FjUGQrWw.png)

### 9. Type-Casting or Type-Coersion (Arguments must be in decimal form)

```
**int()** 
**float()
str() 
bool() - return False for 0 or 0.0 or ''(empty string) and else return true
complex()
list()
tuple()
bytes()
bytearray()
set()
dict()**
```

![](https://cdn-images-1.medium.com/max/821/1*wC4Dn0P3_Ca7BhbIwpcOow.png)

### 10. IMMUTABLITY (No Change)
we cannot change any object if we try to do that then new object is created only to store new value .

#### Reusing Concept in Python

objects of type **int (from 0 to 256) , bool and str** share the same memory space which means for various int and str (with same value) we have same memory assigned to all variables/objects. **For floating, complex numbers **this reusing concept is **not** applicable.

a = 'python' **#id(a) =>12435354**
b = 'python' **#id(b) =>12435354**
c = 'python' **#id(c) =>12435354**
```
==============================
```

```
a=23
b=23
***id(a) = id(b) = 2134563
***but
a=257
b=257
***id(a) is not id(b).***
```

![](https://cdn-images-1.medium.com/max/758/1*zL181STtlKwF9B093bURzg.png)

### 11. Constants in Python

```
There is no way to represent constant in python. It is the programmer responsibilty to take care of it.
Convention: use capslock while using constant so to maintain globality across globe.
```

### That’s it!
We learned a lot of things about Python basics

So Python is really easy to work with and don’t try to remember each and every detail of it. Follow the 80/20 principle(The Pareto **principle** states that for many events, roughly 80% of the effects come from 20% of the causes.)(Using 20% of what you know to get 80% results). Just keep in mind these basics and go to learn more advance topics . I will be writing more Parts. So stay tuned.👻

Congrats! You completed this piece of content about Python.

Have fun, keep learning, and always keep coding.

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=bc215a24086a)