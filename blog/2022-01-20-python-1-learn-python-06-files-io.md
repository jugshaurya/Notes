---
title: "Files"
slug: python-1-learn-python-06-files-io
date: 2022-01-20
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/1-Learn-Python/06-Files-IO.ipynb)
>
> **Category**: Python / 1 Learn Python

<!-- truncate -->

# Files

- Python uses file objects to interact with external files on your computer. These file objects can be any sort of file you have on your computer, whether it be an audio file, a text file, emails, Excel documents, etc. Note: You will probably need to install certain libraries or modules to interact with those various file types, but they are easily available.


- Python has a built-in open function(open()) that allows us to open and play with basic file types. First we will need a file though. We're going to use some IPython magic to create a text file!

## IPython Writing a File

##### This function is specific to jupyter notebooks! Alternatively, quickly create a simple .txt file with sublime text editor.

```python
%%writefile testio.txt
1.Hello, this is a file made by shaurya to learn I/O.
2.Hello, this is a file made by shaurya to learn I/O.
3.
4.Hello, this is a file made by shaurya to learn I/O.
5. Hello, this is a file made by shaurya to learn I/O.

jj
```

**Output:**
```
Overwriting testio.txt
```

## Python Opening a file

Let's being by opening the file test.txt that is located in the same directory as this notebook. For now we will work with files located in the same directory as the notebook or .py script you are using.

It is very easy to get an error on this step:

```python
myfile = open('whoops.txt')
```

**Output:**
```
FileNotFoundError: [Errno 2] No such file or directory: 'whoops.txt'
```

To avoid this error,make sure your .txt file is saved in the same location as your notebook, to check your notebook location, use **pwd**:

```python
pwd
```

**Output:**
```
'C:\\Users\\Shaurya Singhal\\Desktop\\Machine Learning\\Learn Python'
```

- **Alternatively, to grab files from any location on your computer, simply pass in the entire file path. **

For Windows you need to use double \ so python doesn't treat the second \ as an escape character, a file path is in the form:

    myfile = open("C:\\Users\\YourUserName\\Home\\Folder\\myfile.txt")


or use 

    myfile = open(r"C:\Users\YourUserName\Home\Folder\myfile.txt")
    - it automatically converts path into form above  


    
For MacOS and Linux you use slashes in the opposite direction:

    myfile = open("/Users/YouUserName/Folder/myfile.txt")

```python
# see difference in two cells below
print('use\newr\nwet')
```

**Output:**
```
use
ewr
wet
```

```python
print(r'use\newr\nwet')
```

**Output:**
```
use\newr\nwet
```

```python
# Open the text.txt we made earlier
my_file = open('testio.txt')
```

`read pointer is at start of file in start`
- read() -> read full data of file till EOF 
- read(num) -> read only num characters


`after read(), read pointer move to other positions `
- seek(num) -> sets the read pointer overto passed as argument
- tell() -> tells about the position of read pointer

```python
# We can now read the file
my_file.read()  #-> once u read the file the cursor goes to EOF so if tried to read once again it will be null string
```

**Output:**
```
'1.Hello, this is a file made by shaurya to learn I/O.\n2.Hello, this is a file made by shaurya to learn I/O.\n3.\n4.Hello, this is a file made by shaurya to learn I/O.\n5. Hello, this is a file made by shaurya to learn I/O.\n\njj\n'
```

```python
# But what happens if we try to read it again?
my_file.read()
```

**Output:**
```
''
```

This happens because you can imagine the reading "cursor" is at the end of the file after having read it. So there is nothing left to read. We can reset the "cursor" like this:

```python
# Seek to the start of file (index 0)
my_file.seek(0)
```

**Output:**
```
0
```

```python
# Now read again
my_file.read()
```

**Output:**
```
'1.Hello, this is a file made by shaurya to learn I/O.\n2.Hello, this is a file made by shaurya to learn I/O.\n3.\n4.Hello, this is a file made by shaurya to learn I/O.\n5. Hello, this is a file made by shaurya to learn I/O.\n\njj\n'
```

You can read a file line by line using the `readlines` method. Use caution with large files, since everything will be held in memory. We will learn how to iterate over large files later.

```python
# Readlines returns a list of the lines in the file
my_file.seek(0)
my_file.readlines()
```

**Output:**
```
['1.Hello, this is a file made by shaurya to learn I/O.\n',
 '2.Hello, this is a file made by shaurya to learn I/O.\n',
 '3.\n',
 '4.Hello, this is a file made by shaurya to learn I/O.\n',
 '5. Hello, this is a file made by shaurya to learn I/O.\n',
 '\n',
 'jj\n']
```

When you have finished using a file, it is always good practice to close it.

```python
my_file.close()
```

## Writing to a File

By default, the `open()` function will only allow us to read the file. We need to pass the argument `'w'` to write over the file. For example:

-  Passing **'r'** lets us read the file(read only)
-  Passing **'w'** lets us write to the file(no read ,will overwrite if file exist else create a new file and write to it)
-  Passing **'r+'** lets us read and write to the file
-  Passing **'w+'** lets us read and write to the file(while writing same as in mode =  'w')
-  Passing **'a'** append lines to the end of file
- Passing **a+** append lines to end and can be read as well.

```python
# Add a second argument to the function, 'w' which stands for write.

my_file = open('testio.txt',mode = 'w+')
```

### &lt;strong&gt;&lt;font color='red'&gt;Use caution!&lt;/font&gt;&lt;/strong&gt; 
Opening a file with `'w'` or `'w+'` truncates the original, meaning that anything that was in the original file **is deleted**!

```python
# Write to the file
my_file.write('This is a new line\n')
my_file.write('this is a second line\n')
```

**Output:**
```
22
```

```python
# Read the file
my_file.seek(0)
my_file.read()
```

**Output:**
```
'This is a new line\nthis is a second line\n'
```

```python
my_file.close()  # always do this when you're done with a file -> kind of old way
```

# New way of opening and closing files

```python
with open('testio.txt',mode= 'r') as fileio:
    print(fileio.read())
```

**Output:**
```
This is a new line
this is a second line
```

It automatically close the file to need to care of that

## Appending to a File
Passing the argument `'a'` opens the file and puts the pointer at the end, so anything written is appended. Like `'w+'`, `'a+'` lets us read and write to a file. If the file does not exist, one will be created.

```python
my_file = open('testio.txt','a+')
my_file.write('\nThis is text being appended to test.txt')
my_file.write('\nAnd another line here.')
```

**Output:**
```
23
```

```python
my_file.seek(0)
print(my_file.read())
```

**Output:**
```
This is a new line
this is a second line

This is text being appended to test.txt
And another line here.
```

```python
my_file.close()
```

### Appending with `%%writefile`
We can do the same thing using IPython cell magic:

```python
%%writefile -a testio.txt

This is text being appended to test.txt
And another line here.
```

**Output:**
```
Appending to testio.txt
```

Add a blank space if you want the first line to begin on its own line, as Jupyter won't recognize escape sequences like `\n`

## Iterating through a File

Lets get a quick preview of a for loop by iterating over a text file. First let's make a new text file with some IPython Magic:

```python
l = list(open('testio.txt'))
print(l)
```

**Output:**
```
['This is a new line\n', 'this is a second line\n', '\n', 'This is text being appended to test.txt\n', 'And another line here.\n', 'This is text being appended to test.txt\n', 'And another line here.\n']
```

```python
for line in open('testio.txt'):
    print(type(line))
    print(line)
```

**Output:**
```
&lt;class 'str'&gt;
This is a new line

&lt;class 'str'&gt;
this is a second line

&lt;class 'str'&gt;


&lt;class 'str'&gt;
This is text being appended to test.txt

&lt;class 'str'&gt;
And another line here.

&lt;class 'str'&gt;
This is text being appended to test.txt

&lt;class 'str'&gt;
And another line here.
```

We said that for every line in this text file, go ahead and print that line. It's important to note a few things here:

1. We could have called the "line" object anything (see example below).
2. By not calling `.read()` on the file, the whole text file was not stored in memory.