---
title: "Modules in Python"
slug: python-1-learn-python-03-modules-and-io-python
date: 2022-01-17
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/1-Learn-Python/03-Modules-and-IO-python.ipynb)
>
> **Category**: Python / 1 Learn Python

<!-- truncate -->

# Modules in Python
![IO](https://raw.githubusercontent.com/jugshaurya/Learn-Python/master/1-Learn-Python/images/python_modules.jpg)

### Various Packages/Module encountered till now are : 

- math
- sys
- random
- gc (garbage collector module)
- numpy
- virtualenv
- pandas 
- matplotlib
- functools
- IPython.display
- seaborn
- os
- itertools

    we require to import the required module in our script.

- A module allows you to logically organize your Python code. Grouping related code into a module makes the code easier to understand and use. A module is a Python object with arbitrarily named attributes that you can bind and reference.



- Simply, a module is a file consisting of Python code. A module can define functions, classes and variables. A module can also include runnable code.



- Putting code into modules is useful because of the ability to import the module functionality into your script or IPython session

### Packages

- Collection of Modules is Package.


- A package is just a way of collecting related modules together within a single tree-like hierarchy. Very complex packages like NumPy or SciPy have hundreds of individual modules so putting them into a directory-like structure keeps things organized and avoids name collisions


- Every folder or subfolder must have a __init__.py file (this may be an empty file) to let python know that this folder is a package.(see example in this path where this file is there is a main file `test_package_creation.py` which will tell u package creation using the folder `mypackage`)

### Use of `__name__ == '__main__'`

- By default whenever a file executes directly , python sets its `__name__` to `__main__` otherwise set it to the path of file relative to the file on which u imported it.
- This helps us finding out which files are imported and which are running directly.

# Ways to import modules/libraries

1. **import math**

        (here i need to use math.func())
    

2. **import math as m**

        (here i need to use  m.func())

3. **from math import pi** 

         To import some particular thing from module(now i can use pi directly)
    
    
4. from math import *
        
        (it import every thing of math module) -> generally a bad practice to do this

```python
import random
```

```python
random.randint(2,7)
```

**Output:**
```
3
```

```python
lsit = [2,3,5,78,67]
random.shuffle(lsit)
print(lsit)
```

**Output:**
```
[67, 5, 3, 2, 78]
```

```python
random.shuffle(lsit)
print(lsit)
```

**Output:**
```
[2, 78, 5, 67, 3]
```

```python
import math
```

```python
math.pi
```

**Output:**
```
3.141592653589793
```

```python
math.e
```

**Output:**
```
2.718281828459045
```

```python
math.tau
```

**Output:**
```
6.283185307179586
```

```python
math.inf
```

**Output:**
```
inf
```

```python
-math.inf
```

**Output:**
```
-inf
```

```python
math.nan
```

**Output:**
```
nan
```

```python
import math as m
```

```python
m.pi
```

**Output:**
```
3.141592653589793
```

```python
from math import *
```

```python
pi
```

**Output:**
```
3.141592653589793
```

```python
tau
```

**Output:**
```
6.283185307179586
```

```python
e
```

**Output:**
```
2.718281828459045
```

```python
log(e)
```

**Output:**
```
1.0
```

```python
from math import pi
```

```python
pi
```

**Output:**
```
3.141592653589793
```

### Command Line Arguments

- use sys module and use its argv variable

        It returns a list of string with argv[0] being name of file, argv[1] onwards what u passed on as arguments seperated by whitespace.

```python
from sys import argv
```

```python
print(argv[0])
```

**Output:**
```
c:\users\shaurya singhal\appdata\local\programs\python\python37-32\lib\site-packages\ipykernel_launcher.py
```

#### There are many external python libraries/packages as open-sourced libraries all available in PyPI(python package Index) repo. 
- `The Python Package Index` is the main repository for 3rd party Python packages (about 14000 packages and growing).
- Advantage being easy installation of packages using pip install &lt;package_name&gt;
- pip install looks in PyPI repo for certain package if found install it .

---
![IO](https://raw.githubusercontent.com/jugshaurya/Learn-Python/master/1-Learn-Python/images/IO.jpg)

# Ways to read Input(input()) and print Output(print())

### input()

        1. input("Enter the name")
        ** return value is always of string type **
        
        2. take multiple inputs at once 
        ** type the values using space and then use split() function to seperate values acc. to spacebar
    
   
### print()   
- 1.  print(*args, sep=' ', end='\n')
- 2.  print function with format

```python
    a,b = 2314,2435
    example 
        a. print("the values are {}, {}".format(a,b))
        {}--&gt; this is a replacement operator
        we can pass indexes in it as well and ooutput will be according to the indexes.
    
        b. print("the values are {0}, {1}".format(a,b))
        print("the values are {1}, {0}".format(a,b))
        print("the values are {0}, {0}".format(a,b))
        
        or 
        c. print ("the values are {x} and {y}".format(x=a,y=b))        


            or 
    
        d. print(f"The values are {a}, {b}")
    
            or
            
        e. print("the values are %i and %d "%(a,b))
```

- %i,%d --> int
- %s-->  str
- %f --> float



- Important syntax 

        a, b = [int(x) for x in input("enter numbers: ").split()]

## String Formatting

----
String formatting lets you inject items into a string rather than trying to chain items together using commas or string concatenation. As a quick comparison, consider:

```python
f'Last night, {player} scored {points} points.'  # string formatting
```
There are three ways to perform string formatting.

- The oldest method involves placeholders using the modulo % character.
- An improved technique uses the .format() string method.
- The newest method, introduced with Python 3.6, uses formatted string literals, called f-strings.


Since you will likely encounter all three versions in someone else's code, we describe each of them here.

### Formatting with placeholders
----
You can use %s to inject strings into your print statements. The modulo % is referred to as a "string formatting operator".

```python
- print("I'm going to inject %s here." %'something')
I'm going to inject something here.

- print("I'm going to inject %s text here, and %s text here." %('some','more'))
I'm going to inject some text here, and more text here.
```

- The %s operator converts whatever it sees into a string, including integers and floats. The %d operator converts numbers to integers first, without rounding. Note the difference below:

```python
    print('I wrote %s programs today.' %3.75)
    print('I wrote %d programs today.' %3.75)   
    I wrote 3.75 programs today.
    I wrote 3 programs today.
```

### Padding and Precision of Floating Point Numbers
----
   #### Floating point numbers use the format %5.2f.
   -  Here, 5 would be the minimum number of characters the string should contain; these may be padded with whitespace if the entire number does not have this many digits.
   - Next to this, .2f stands for how many numbers to show past the decimal point. 
   
###### Let's see some examples:

```python
    print('Floating point numbers: %5.2f' %(13.144))
    Floating point numbers: 13.14

    print('Floating point numbers: %1.0f' %(13.144))
    Floating point numbers: 13

    print('Floating point numbers: %1.5f' %(13.144))
    Floating point numbers: 13.14400

    print('Floating point numbers: %10.2f' %(13.144))
    Floating point numbers:      13.14

    print('Floating point numbers: %25.2f' %(13.144))
    Floating point numbers:                     13.14
    ```

## Multiple Formatting at Once

 Nothing prohibits using more than one conversion tool in the same print statement:

```python
print('First: %s, Second: %5.2f, Third: %s' %('hi!',3.1415,'bye!'))
First: hi!, Second:  3.14, Third: bye!
```
   
## The .format() method has several advantages over the %s placeholder method:


1. Inserted objects can be called by index position:
```python
print('The {2} {1} {0}'.format('fox','brown','quick'))
The quick brown fox
```
    
2. Inserted objects can be assigned keywords:
```python
    print('First Object: {a}, Second Object: {b}, Third Object: {c}'.format(a=1,b='Two',c=12.3))
    First Object: 1, Second Object: Two, Third Object: 12.3
```

                
3. Inserted objects can be reused, avoiding duplication:
```python
    print('A %s saved is a %s earned.' %('penny','penny'))
   or
    print('A {p} saved is a {p} earned.'.format(p='penny'))
    A penny saved is a penny earned.
    A penny saved is a penny earned.
```


##  Alignment, padding and precision with .format()
`Within the curly braces you can assign field lengths, left/right alignments, rounding parameters and more`

```python
print('{0:8} | {1:9}'.format('Fruit', 'Quantity'))
print('{0:8} | {1:9}'.format('Apples', 3.))
print('{0:8} | {1:9}'.format('Oranges', 10))

Fruit    | Quantity 
Apples   |       3.0
Oranges  |        10
```
`By default, .format() aligns text to the left, numbers to the right. You can pass an optional &lt;,^, or &gt; to set a left, center or right alignment:`

```python
print('{0:&lt;8} | {1:^8} | {2:&gt;8}'.format('Left','Center','Right'))
print('{0:&lt;8} | {1:^8} | {2:&gt;8}'.format(11,22,33))

Left     |  Center  |    Right
11       |    22    |       33
```   
`You can precede the aligment operator with a padding character` 

```python
print('{0:=&lt;8} | {1:-^8} | {2:.&gt;8}'.format('Left','Center','Right'))
print('{0:=&lt;8} | {1:-^8} | {2:.&gt;8}'.format(11,22,33))
Left==== | -Center- | ...Right
11====== | ---22--- | ......33
```   

`Field widths and float precision are handled in a way similar to placeholders. The following two print statements are equivalent:`

```python
print('This is my ten-character, two-decimal number:%10.2f' %13.579)
print('This is my ten-character, two-decimal number:{0:10.2f}'.format(13.579))

This is my ten-character, two-decimal number:     13.58
This is my ten-character, two-decimal number:     13.58
 ```


#### Formatted String Literals (f-strings)
Introduced in Python 3.6, f-strings offer several benefits over the older .format() string method described above. For one, you can bring outside variables immediately into to the string rather than pass them as arguments through .format(var).

`Where with the .format() method you might see {value:10.4f}, with f-strings this can become {value:{10}.{6}}`

```python
num = 23.45678
print("My 10 character, four decimal number is:{0:10.4f}".format(num))
print(f"My 10 character, four decimal number is: {num:{10}.{6}}")

My 10 character, four decimal number is:   23.4568
My 10 character, four decimal number is:   23.4568
```
Note that with f-strings, precision refers to the total number of digits, not just those following the decimal. This fits more closely with scientific notation and statistical analysis. Unfortunately, f-strings do not pad to the right of the decimal, even if precision allows it:



##### best format is .format()  use it .

```python
name = input("Enter the name ")
print(name)
```

**Output:**
```
Enter the name shaurya
shaurya
```

```python
number = input("enter a number")
print(number + 3)
```

**Output:**
```
enter a number23
TypeError: can only concatenate str (not "int") to str
```

```python
number = int(input(" enter a number "))
print(number + 3)
```

**Output:**
```
enter a number 23
26
```

```python
name = input("enter anything ")
print(type(name))
```

**Output:**
```
enter anything 236457
&lt;class 'str'&gt;
```

```python
print("the sum is", int(input("enter first number: ")) + int(input("enter second number :"))  )
```

**Output:**
```
enter first number: 214
enter second number :234
the sum is 448
```

```python
values = input("enter numbers: ").split()
print(type(values))
print(values)
```

**Output:**
```
enter numbers: 23 352 346 346
&lt;class 'list'&gt;
['23', '352', '346', '346']
```

```python
a, b = [x for x in input("enter numbers: ").split()]
print(a)
print(type(a))
print(b)
print(type(b))
```

**Output:**
```
enter numbers: 23 24
23
&lt;class 'str'&gt;
24
&lt;class 'str'&gt;
```

```python
a, b = [int(x) for x in input("enter numbers: ").split()]
print(a)
print(type(a))
print(b)
print(type(b))
```

**Output:**
```
enter numbers: 23 52
23
&lt;class 'int'&gt;
52
&lt;class 'int'&gt;
```

```python
name =  print("sa")
print(name)
```

**Output:**
```
sa
None
```

```python
print("asf","se","ewt")
```

**Output:**
```
asf se ewt
```

```python
print("asf","se","ewt", sep=',')
```

**Output:**
```
asf,se,ewt
```

```python
print("asf","se","ewt", sep=':', end =' ')
print("asf","se","ewt", sep=':')
```

**Output:**
```
asf:se:ewt asf:se:ewt
```

```python
a,b = 10,20
print("The values are {}, {}".format(a,b))
```

**Output:**
```
The values are 10, 20
```

```python
a,b = 1325,235
print(f"The values are {a}, {b}")
```

**Output:**
```
The values are 1325, 235
```

```python
a,b="214",242
print("The values are %s and %s"%(a,b))
```

**Output:**
```
The values are 214 and 242
```

```python
a,b=1324,1251
print("the values are {0}, {1}".format(a,b))
print("the values are {1}, {0}".format(a,b))
print("the values are {0}, {0}".format(a,b))
print("the values are {1}, {1}".format(a,b))
print("the values are {0}, {2}".format(a,b))
```

**Output:**
```
the values are 1324, 1251
the values are 1251, 1324
the values are 1324, 1324
the values are 1251, 1251
IndexError: tuple index out of range
```

```python
first = 24
second = 23
print ("the values are {x} and {y}".format(x=first,y=second))
```

**Output:**
```
the values are 24 and 23
```

```python
num = 23.45678
print("My 10 character, four decimal number is:{0:-10.4f}".format(num))
print(f"My 10 character, four decimal number is: {num:{10}.{4}}")
```

**Output:**
```
My 10 character, four decimal number is:   23.4568
My 10 character, four decimal number is:      23.46
```

```python
print('This is my ten-character, two-decimal number:%10.2f' %13.579)
```

**Output:**
```
This is my ten-character, two-decimal number:     13.58
```