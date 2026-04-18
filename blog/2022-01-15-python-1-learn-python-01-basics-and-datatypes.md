---
title: "Python - Basics and Various Datatypes"
slug: python-1-learn-python-01-basics-and-datatypes
date: 2022-01-15
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/1-Learn-Python/01-Basics-and-Datatypes.ipynb)
>
> **Category**: Python / 1 Learn Python

<!-- truncate -->

#                  Python - Basics and Various Datatypes 
![](https://raw.githubusercontent.com/jugshaurya/Learn-Python/master/1-Learn-Python/images/python_logo.jpg)

- Python is a genral purpose high level programming language
- Developed by Guido van Rossum and Released in 1995
- named after BBC show `Monty Python's Circus`

# Features of Python
- **Simple and easy to learn**
- **Opensource language**
- **Platform independent**  (means can run of any operating system)
- **Portable** (any python program written on one OS can be shifted to other OS without any changes)
- **Dynamically typed**   (Python uses *dynamic typing*, meaning you can reassign variables to different data types at any point of time . This makes Python very flexible in assigning data types; it differs from other languages which are *statically typed*.
)

- **Strongly Typed Language** (explicit conversion is required)

- **Interpreted**(An interpreted language is a type of programming language for which most of its implementations execute instructions directly and freely, without previously compiling a program into machine-language instructions. ... Java and C# are compiled into bytecode, the virtual-machine-friendly interpreted language.)
- **Extensible** ( can use c like languages code as well in python Script)
- **Embedded**  (can use python in other languages)
- **Extensive Libraries**
![](https://raw.githubusercontent.com/jugshaurya/Learn-Python/master/1-Learn-Python/images/guido_van_rossum.jpg)

## Indentation
- Whitespace is important in Python. 

- Actually, whitespace at the beginning of the line is important. This is called indentation. 

- Leading whitespace (spaces and tabs) at the beginning of the logical line is used to determine the indentation level of  the logical line, which in turn is used to determine the grouping of statements.

- This means that statements which go together must have the same indentation. Each such set of statements is called a block.

---
# 													Identifiers in Python


    1. should contain a-z ,A-Z, 0-9, _
    2. should not start with digit
    3. Case sensitive
    4. dont use reserved keywords
    5. no limit on variable length

6. Don't use 
---
    _x --> private 
	__x -> strongly private
	__x__ -> python language specific(magic methods or Dunders) identifiers ex __main__, __add__, __init__
    
**Notes** on this
- Private Variables in Python

        In Python, there is no existence of “Private” instance variables which cannot be accessed except inside an object. However, a convention is being followed by most Python code and coders i.e., a name prefixed with an underscore, For e.g. _geek should be treated as a non-public part of the API or any Python code, whether it is a function, a method or a data member. 
- `Mangling` and how it works

- In Python, there is something called name mangling, which means that there is a limited valid use-case for class-private members .
- Basically to avoid name clashes of names with names defined by subclasses. Any identifier of the form __geek is replaced with _classname__geek.
- As long as it occurs within the definition of the class, this mangling is done. This is helpful for letting subclasses override methods without breaking intraclass method calls.
- The mangling rules are designed mostly to avoid accidents but it is still possible to access or modify a variable that is considered private. This can even be useful in special circumstances, such as in the debugger.




													------------------
													Not in python
													-----------------
    1. do while loop
    2. switch 
    3. else if ( because elif is there)
    4. catch(instead have except)


												----------------------
												Keywords in Python
												-----------------------
There are 35 keywords


    True, False, None,
    and,or,not,is,
    if,else,elif,
    while, for, break, continue, return, in, yield,
    try, except(instead of catch), finally, assert, raise(instead of throw)
    pass, import, from, as, class, def
    global, nonlocal ,lambda, del, with
    async,await

note--> all keywords contain alphabets only and two of them starts with capital words

----------------------
                                                        Note
												------------------------
type

    import keyword
    keyword.kwlist
we get->

['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

```python
import keyword
```

```python
keyword.kwlist
```

**Output:**
```
['False',
 'None',
 'True',
 'and',
 'as',
 'assert',
 'async',
 'await',
 'break',
 'class',
 'continue',
 'def',
 'del',
 'elif',
 'else',
 'except',
 'finally',
 'for',
 'from',
 'global',
 'if',
 'import',
 'in',
 'is',
 'lambda',
 'nonlocal',
 'not',
 'or',
 'pass',
 'raise',
 'return',
 'try',
 'while',
 'with',
 'yield']
```

---
#                    Data types in Python (14 data types are there)

### Fundamental--> all are immutable

- int (long was i python 2, but not in python 3) 
- float
- complex
- bool
- str

### Collection related Data Types-->

- bytes  -> represent group of values in range 0 to 256 but immutable.
- bytearray  -> same as bytes but mutable
- range -> immutable represent group of continiuous values .
- list -> mutable
- set -> mutable
- tuple -> immutable
- frozenset -> immutable
- dict -> mutable
- None


###### Note 

- In python every thing is object.
- every sequence that maintains order in which they are inserted ,we can use slicing(string,list,tuple,range).

                                        ----------------------------------------
										Python provide some inbuild function
										--------------------------------------
- print() 
- type()
- id(a) -> prints the address of a
- input()

										-----------------------------------------
													# int data-type 
										-------------------------------------------
- a=10 creates an object of class 'int' named a.
- can be represented in 4 forms


    1.Decimal form (a=10)
    2. octal ( a = 0o12 ) ->starts with zero 'o' or 'O'.
    3. hexadecimal form ( a = 0x12 ) -> starts with zero 'x' or 'X'.
    4. Binary  (a = 0b10)  ->starts with 0b or 0B
         0b11 is 3
        -0b11 is -3


*********** NOte

- size of object is not fixed in any language.
- and because everything is object in python , no data type has its range and hence no limits on the amount of data a varible can store.

- a=999999999999, this is also valid and infact of type class 'int'.

											------------------------------
											Base Coversion Utility fuction
											---------------------------------

- bin(x) 
    - convert x to binary x can be decimal,octal,hexa and returns a string having binary representation of x
- oct(x)
- hex(x)

									---------------------------------------------------
													# float data-type
									----------------------------------------------
- There is only one type of floating point i.e decimal no other form exists here.

        can be written in
        Exponential form
        f = 1.2e3 -> 1.2 * 10^3 = 1200.0 is valid.
        f = 1e5 ,1e-1, 1.2e-6 are valid

											 ------------------------------
													 complex-dataType
											---------------------------------

- 2+3j (dont use i ; only j is supported beacuse of electrical engineering ; i is consider current and j=sqrt(-1)).


## Rules 


if a+bj ->complex number


    1. a and b can be int/float.
    2. a can be in any form (base 2,8,16) but b must be a decimal value.
    3. we can perform mathematical operation on complex number
    a = 20+3j
    b =  23 + 23j
    a+b is valid
    a-b is valid
    a*b is valid
 
4.  **a.real** gives real part  and  	**a.imag** gives imaginary part

													--------------------
															bool
													-----------------------
- True and False 
    True is stored as 1 
    False is stored as 0

    so
    True + True  = 2  and True + False  = 1

```python
a=False
```

```python
a
```

**Output:**
```
False
```

```python
a = 4<7
```

```python
a
```

**Output:**
```
True
```

```python
a = 45>76
```

```python
a
```

**Output:**
```
False
```

```python
True+True
```

**Output:**
```
2
```

```python
True+True+True
```

**Output:**
```
3
```

```python
True+False
```

**Output:**
```
1
```

```python
True/True
```

**Output:**
```
1.0
```

```python
True/False
```

**Output:**
```
ZeroDivisionError: division by zero
```

```python
True//True
```

**Output:**
```
1
```

---
#                                          str - Datatype


    s = 'shaurya'
    s = "singhal"

    Both are fine in python 
    But recommended to use single quotes as this is the way it is stored internally.


    we can store multiline string in python using triple quotes "'sdag
                                                                      we5tye"

    in above example line b/w two words is also taken as a part of string with exactly same white-spaces
    we can store double quotes in a string using  multiline trick
    str = """ i am learning "Python" Language"""
    
    
use `\'` or `\''` as escaping characters while using combination and use 
```python
&gt;&gt;&gt; print('C:\some\name')  # here \n means newline!
C:\some
ame
&gt;&gt;&gt; print(r'C:\some\name')  # note the r before the quote
C:\some\name
```


    =========
    strings can be accessed using indexes

    indexing as follows:
    |0|1|2|3|4|5|6|
    |s|h|a|u|r|y|a|
    |-7|-6|-5|-4|-3|-2|-1|

    ================
    Slice-operator (works beacause strings are ordered sequences)
    -----------------
    
    s = "shaurya"
    1. s[begin:end] ===-> returns substring from (begin to end-1) both including index
    index

    s[1:3] ->return 'ha'
    s[1:]  ->return 'haurya'
    s[:2] -> return 'sh'
    s[:] -?> return complete string
    str[4:1] -> return empty string as begin>=end
    str[1:432] -> if end>greater than length of string then it will print till end only not any error. :)

    2. s[begin:end:step] -> instead of default 1 jump noe there are jump of step
    -----------------------------

    s*10 ->print string s 10 times!
    s ="sd"
    s*2 = 'sdsd'


- len(s)-> returns length of string
- note -> char -> str type only

```python
s ='shaurya'
```

```python
s
```

**Output:**
```
'shaurya'
```

```python
s="singhal"
```

```python
s
```

**Output:**
```
'singhal'
```

```python
type(s)
```

**Output:**
```
str
```

```python
str ='''saf
sadfg'''
```

```python
print(str)
```

**Output:**
```
saf
sadfg
```

```python
str="""qwrter  
        rwqtywe"""
```

```python
str
```

**Output:**
```
'qwrter\n        rwqtywe'
```

```python
str="""sfds str    
             dhghdgdhgdgdh"""
```

```python
str
```

**Output:**
```
'sfds str    \n             dhghdgdhgdgdh'
```

```python
str = """ i am learning "Python" Language"""
```

```python
str
```

**Output:**
```
' i am learning "Python" Language'
```

```python
str = "shaurya"
```

```python
str[0]
```

**Output:**
```
's'
```

```python
str[4]
```

**Output:**
```
'r'
```

```python
str[-3]
```

**Output:**
```
'r'
```

```python
str[-7]
```

**Output:**
```
's'
```

```python
str = "python"
```

```python
str[2:4]
```

**Output:**
```
'th'
```

```python
str[2:]
```

**Output:**
```
'thon'
```

```python
str[:5]
```

**Output:**
```
'pytho'
```

```python
str[:]
```

**Output:**
```
'python'
```

```python
str[4:1]
```

**Output:**
```
''
```

```python
str[2:2]
```

**Output:**
```
''
```

```python
str[2:100]
```

**Output:**
```
'thon'
```

```python
str[2:100:2]
```

**Output:**
```
'to'
```

```python
str
```

**Output:**
```
'python'
```

```python
str*10
```

**Output:**
```
'pythonpythonpythonpythonpythonpythonpythonpythonpythonpython'
```

```python
len(str)
```

**Output:**
```
6
```

---
# Type-Casting or Type-Coersion (Arguments must be in decimal form)

    int()-> int(10), int(10.0), int("10")==> accepted
             int("10.0")==> ValueError, int(20+3j)=> TypeError
    float() -> float(10), float(10.0), float("10"),float("10.0")==> accepted
                float(20+3j)=> TypeError
    str() -> convert to string
    bool() -> return False for 0 or 0.0 or ''(empty string) and else return true
    complex() ->  syntax complex(real,imaginary_part = 0) (both must not be string only exception, and string should be numbers only) 
    
    list()
    tuple()
    bytes()
    bytearray()
    set()
    dict()

```python
a=int(10.0)
```

```python
a
```

**Output:**
```
10
```

```python
a =int("10")
```

```python
a
```

**Output:**
```
10
```

```python
a=int('10.34')
```

**Output:**
```
ValueError: invalid literal for int() with base 10: '10.34'
```

```python
float('10')
```

**Output:**
```
10.0
```

```python
int('0b101')
```

**Output:**
```
ValueError: invalid literal for int() with base 10: '0b101'
```

```python
float('0.35')
```

**Output:**
```
0.35
```

```python
str('2324.424')
```

**Output:**
```
'2324.424'
```

```python
complex(23)
```

**Output:**
```
(23+0j)
```

```python
complex('True', 'False')
```

**Output:**
```
TypeError: complex() can't take second arg if first is a string
```

```python
complex('12')
```

**Output:**
```
(12+0j)
```

```python
complex(True, False)
```

**Output:**
```
(1+0j)
```

---
#                                         IMMUTABLE -Property

we cannot change any object if we try to do that then new object is created only to store new value . 


#                                  Reusing Concept in Python

objects of type int (from 0 to 256)) , bool and str share the same memory space which means for various int's and str  (with same value) we have same memory assigned to all variables/objects.

     a = 'hyderabad' #id(a) =>12435354
     b = 'hyderabad' #id(b) =>12435354
     c = 'hyderabad' #id(c) =>12435354
     d = 'hyderabad' #id(d) =>12435354

     a=23
     b=23
     id(a) =id(b) = 2134563

     but
     a=257
     b=257

     id(a) is not id(b).

- for floating , complex numbers this reusing concept is not applicable.

```python
a,b,c =True,True,True
```

```python
print("ads")
print(id(a))
print("-----")
print(id(b))
print(id(c))
```

**Output:**
```
ads
1807708592
-----
1807708592
1807708592
```

---                                 
#                                                 bytes(Immutable)

    - bytes represent a group of elements within the range of 0 to 256 only
    ex-> b = [12,23,234,42] b = bytes(b) // valid

    b = [12,23,264,42] b = bytes(b) // Value error -> values of bytes must be i range(0,256)

- immutablity
        you can not change the content of bytes once defined i.e b[2] = 12 is not allowed
        
        
#                                                 bytearray(Mutable)
- bytearray represent a group of elements within the range of 0 to 256 only.

        ex-> b = [12,23,234,42] b = bytearray(b) // valid

        b = [12,23,264,42] b = bytearray(b) // Value error -> values of bytes must be i range(0,256)

- **mutable** you can change the content of bytes once defined i.e b[2] = 12 is valid
    
    
    Note -> bytes and bytearray are not generally used , but are beneficial while working with binary data like to store images ,videos etc.

#                                     list(Vector in python) -> Mutable 

    - stores element in insertion order (Preserve order), growable or shrinkable , duplicates are allowed , heterogenous objects are allowed(can store int with strings,bool or any combination).

    - use [] to define list

    - indexing is allowed, slicing operator is allowed(beacuse of ordered sequence).

    l = [10,20,30,'shaurya',True] 
    >>> type(l) 
    >>> &lt;class 'list'&gt;

    - mutable nature(all are valid)
    Valid:

     l.append(45)
     l.append('asds')
     l.append(False)
     l.remove(10)  #remove first appearence of 10 starting from start.
     l[0]
     l[:4]
     l*2
     l[1] = 'sha' 
     
     
    Multiple-slicing Assignment 
```python     
    &gt;&gt;&gt; letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    &gt;&gt;&gt; letters
    ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    # replace some values
    &gt;&gt;&gt; letters[2:5] = ['C', 'D', 'E']
    &gt;&gt;&gt; letters
    ['a', 'b', 'C', 'D', 'E', 'f', 'g']
    &gt;&gt;&gt; # now remove them
    &gt;&gt;&gt; letters[2:5] = []
    &gt;&gt;&gt; letters
    ['a', 'b', 'f', 'g']
```

#                                              tuple -> Immutable
    - same as list but immutable
    - use () to define tuple or use s = 2,3,4 this will also create a tuple
    - indexing is allowed, slicing operator is also valid (again u know why? right!).

    t = (10,20,30,'shaurya',True) 
    >>> type(l) 
    >>> &lt;class 'tuple'&gt;

    or 
    >>> t= 10,20,30,'shaurya',True
    >>> t
    (10,20,30,'shaurya',True)
    >>> type(t)
    tuple
    Valid:

     t[0]
     t[:4]
     t*2

    - Immutable nature
    Not-Valid:

     t.append(45) # AttributeError: 'tuple' object has no attribute 'append'
     t.remove(45) # AttributeError: 'tuple' object has no attribute 'remove'
     t[1] ='sha' #TypeError: 'tuple' object does not support item assignment
     
#### When to use Tuples

You may be wondering, "Why bother using tuples when they have fewer available methods?" To be honest, tuples are not used as often as lists in programming, but are used when immutability is necessary. If in your program you are passing around an object and need to make sure it does not get changed, then a tuple becomes your solution. It provides a convenient source of data integrity.
      
#                                        range -> Immutable

    - store continiuous values and can use indexing or slicing
    - form 1: 
            r = range(end)
         strores 0 to end-1 in r 
     ex : -
```python
&gt;&gt;&gt; r = range(10)
     &gt;&gt;&gt; r
     range(0, 10)
     &gt;&gt;&gt; print(r)
     range(0, 10)
```
    - form 2:
        range(start,end,step=1)
            
    - inValid : r[3] = 5

#                               set -> Mutable but indexing is not allowed

    - same as list(growable or shrinkable, heterogenious are allowed) . 
    - but does not maintain any order and do not store sorted elements like c++ because internally there is no bst. 
    - but like in c++ , set does not store duplicates.

    - use {} to define set Note --> use s = set() to define empty set (not s ={} because this declares empty dictionary).

    - indexing is not allowed, slicing operator is also not valid(beacuse it is not ordered sequence) .

        s = {10,20,30,'shaurya',True} type(l) #&lt;class 'set'&gt;
        s={} type(l) #&lt;class 'dict'&gt;

    Valid:

     s.add(45)
     s.add('asds')
     s.add(False)
     s.remove(10)  #remove first appearence of 10 starting from start.
   
    Indexing is not allowed
    -----------------
    Not-Valid:
        t[1] ='sha' #TypeError: 'tuple' object does not support item assignment
        ss[0]
        s[:4]
        s*2


#                        frozenset -> Immutable and indexing is not allowed
    - same as set but immutable , no duplicates , no pre-determined order, growable, no indexing, no slicing, not sorted

        s = {2,3,5,8} 
        s = frozenset(s) 
        s = frozenset({8, 2, 3, 5})
        type(s) 
        &lt;class 'frozenset'&gt;

#                                         dict -> dictionary(Mutable)

    - key-value pairs 
        - roolno--> name rank -> university

    - if(key is same of two pairs then second will replace first) => duplicate keys are not allowed.

    - use {} like set to represent dict.

    - d={100:'shaurya' , 200:'priyansh', 300:'Kajal'} 
        - d[100] = 'mukesh' #will replace 'shaurya' 
        - mukesh d[400] = 'mamta' # will insert (400 , mamta) as a pair ; like in c++ (remember!).

    - empty dictionary is declared as d = {} d={} type(d) &lt;class 'dict'&gt;
    
#                                               Constants in Python 

    There is noway to represent constant in python ; it is the programmer responsibilty to take care of it. but use capslock while using constant so to maintain globality across globe.

##  Escape Character

    same as that in c++

```python
t= 2,3,4
```

```python
t
```

**Output:**
```
(2, 3, 4)
```

```python
type(t)
```

**Output:**
```
tuple
```

```python
dict.
```