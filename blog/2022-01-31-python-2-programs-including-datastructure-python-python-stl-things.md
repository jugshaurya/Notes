---
title: "Linked List"
slug: python-2-programs-including-datastructure-python-python-stl-things
date: 2022-01-31
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/2-Programs-including-Datastructure-Python/Python%20-STL%20things.ipynb)
>
> **Category**: Python / 2 Programs including Datastructure Python

<!-- truncate -->

```python
import sys
sys.setrecursionlimit(11000)
```

```python
from abc import abstractmethod,ABC
```

# Linked List

``` python
No inbuilt-library is there but can use list = [] - python datastructure or can use collection.deque(): -by the way rarely used

```

# Inbuilt - Stack

```python
    can use list= [] here as well

or can use :
    
    LifoQueue  of queue module
```

```python
import queue
obj = queue.LifoQueue()
```

```python
obj.put(1)
obj.put(12)
obj.put(13)
obj.put(5461)
```

```python
obj.get()
```

**Output:**
```
5461
```

```python
obj.get()
```

**Output:**
```
13
```

# Queue

```python
import queue
obj = queue.Queue()
```

```python
obj.put(1)
obj.put(12)
obj.put(13)
obj.put(5461)
```

```python
obj.get()
```

**Output:**
```
1
```

```python
obj.get()
```

**Output:**
```
12
```

```python
obj.get()
```

**Output:**
```
13
```

```python
obj.get()
```

**Output:**
```
5461
```

```python
obj.get??
```