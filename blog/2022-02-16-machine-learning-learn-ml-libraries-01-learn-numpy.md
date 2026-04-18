---
title: "NumPy [DOCS](https -//docs.scipy.org/doc/numpy/reference/index.html#reference)"
slug: machine-learning-learn-ml-libraries-01-learn-numpy
date: 2022-02-16
authors: [shaurya]
tags: [machine-learning, python, data-science, numpy]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML%20libraries/01-Learn-NumPy.ipynb)
>
> **Category**: Machine Learning / Learn ML libraries

<!-- truncate -->

# NumPy [DOCS](https://docs.scipy.org/doc/numpy/reference/index.html#reference)


![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML%20libraries/images/python_numpy.jpg)

- numpy is a fundamental package for scientific computation in Python.


- It provides a multidimensional array object for fast operation over it


- NumPy arrays are the main way we will be using NumPy module.


- Numpy arrays essentailly comes as vectors and matrices.


- vectors are 1-d arrays
- matrices are 2-d but can have single row or col.

-  An array object in numpy is of arbitrary **homogeneous items**(that is, all of the elements must be the same type) 

`  Here are some of the things you’ll find in NumPy: `
1. **ndarray**, an efficient multidimensional array providing fast array-oriented arithmetic operations and flexible broadcasting capabilities.
2. **Mathematical functions** for fast operations on entire arrays of data without having to write loops.
3. **Linear algebra, random number generation, and Fourier transform capabilities.**

### What advantages do NumPy arrays offer over (nested) Python lists?

- Two of NumPy’s features which are the basis of much of its power: vectorization and broadcasting not available in list. 
- NumPy internally stores data in a contigiuous block of memory
- NumPy arrays also use much less memory than built-in Python sequences
- NumPy operations perform complex computations on entire arrays without the need for Python for loops(means less code).
[more...](https://docs.scipy.org/doc/numpy/user/whatisnumpy.html)

### list vs numpy

#### list (data of list is stored randomly in memory hence eacj index of list contains a reference)
```python
import copy
li = [[1,2]]
li2 = li # creates a reference, changes both list if one is modified directly

- slicing
li2 = li[:] # creates shallow copy.

li2 = li.copy() # creates shallow copy.
li2 = copy.deepcopy(li) # creates deep copy, does not change anything
```

#### numpy(data is stored continuoslly in memory hence each index contains data)
- when  we access a data in numpy array ,numpy boxes data in python object so even if u access same element two times u got two different boxes( `id(arr[0]) is not equal to id(arr[0])` ), yes it is not a typo.  



- The data of Numpy arrays is internally stored as a contiguous C array. Each entry in the array is just a number. Python objects on the other hand require some housekeeping data, e.g. the reference count and a pointer to the type object. You can't simply have a raw pointer to a number in memory. For this reason, Numpy "boxes" a number in a Python object if you access an individual elemtent. This happens everytime you access an element, so even A[0] and A[0] are different objects:
```python
A[0] is A[0]
False
```
- This is at the heart of why Numpy can store arrays in a more memory-efficient way: It does not store a full Python object for each entry, and only creates these objects on the fly when needed. It is optimised for vectorised operations on the array, not for individual element access.

- When you execute C = A[:] you are creating a new view for the same data. You are not making a copy. You will then have two different wrapper objects, pointed to by A and C respectively, but they are backed by the same buffer. The base attribute of an array refers to the array object it was originally created from:

```python
 A.base is None
True
&gt;&gt;&gt; C.base is A
True
```

- New views on the same data are particularly useful when combined with indexing, since you can get views that only include some slice of the original array, but are backed by the same memory.

- To actually make a copy of an array, use the copy() method.

- As a more general remark, you should not read too much into object identity in Python. In general, if x is y is true, you know that they are really the same object. However, if this returns false, they can still be two different proxies to the same object.

so 
```python
- arr = np.array([[1,2]])
- arr1 = arr # same as list, changes directly
- arr1 = arr[:] or arr.view() # changes directly
- arr1 = arr.copy() # creates a deep copy, no change
```

```python
# To give you an idea of the performance difference, consider a NumPy array of one million integers, and the
# equivalent Python list:
import numpy as np
my_arr = np.arange(1000000)
my_list = list(range(1000000))
# Now let’s multiply each sequence by 2:
```

```python
%time for _ in range(10): my_list2 = [x * 2 for x in my_list]
```

**Output:**
```
Wall time: 2.23 s
```

```python
%time for _ in range(10): my_arr2 = my_arr * 2
```

**Output:**
```
Wall time: 29.6 ms
```

```python
# see the difference above
```

# `The Basics`



- NumPy’s main object is the homogeneous multidimensional array. It is a table of elements (usually numbers), all of the same type, indexed by a tuple of positive integers.


- *In NumPy dimensions are called `axes`*.

        - For example, the coordinates of a point in 3D space [1, 2, 1] has one axis. That axis has 3 elements in it, so we say it has a length of 3. 
        In the example below, the array has 2 axes(Dimensions). The first axis(#rows) has a length of 2, the second axis(#col) has a length of 3.

    ``` python
    [[ 1., 0., 0.],
     [ 0., 1., 2.]]
    ```
    
- NumPy’s array class is called `ndarray`. It is also known by the alias `array`.

# Attributes of numpy Module/class
- `ndim`
    - the number of axes (dimensions) of the array.
- `shape`
    - the dimensions of the array. This is a tuple of integers indicating the size of the array in each dimension. For a matrix with n rows and m columns, shape will be (n,m). The length of the shape tuple is therefore the number of axes, ndim.
- `size`
    - the total number of elements of the array. This is equal to the product of the elements of shape.
- `dtype`
    - an object describing the type of the elements in the array. One can create or specify dtype’s using standard Python types. Additionally NumPy provides types of its own. numpy.int32, numpy.int16, and numpy.float64 are some examples.
- `itemsize`
    - the size in bytes of each element of the array. For example, an array of elements of type float64 has itemsize 8 (=64/8), while one of type complex32 has itemsize 4 (=32/8). It is equivalent to ndarray.dtype.itemsize.

- `flags`

```python
import numpy as np
arr = np.array([[1,2,3],[4,5,6]])
print(arr.ndim)
print(arr.shape)
print(arr.size)
print(arr.dtype) 
print(arr.itemsize) # sizeof(dtype)/8 = #_bytes
print('-------------------------')
print(arr.flags)
```

**Output:**
```
2
(2, 3)
6
int32
4
-------------------------
  C_CONTIGUOUS : True
  F_CONTIGUOUS : False
  OWNDATA : True
  WRITEABLE : True
  ALIGNED : True
  WRITEBACKIFCOPY : False
  UPDATEIFCOPY : False
```

# Creation of ndarray

- 1. passing list/tuple to `array()`
```python
    arr = np.array([1,2,3,4])
    arr_2d  = np.array([[1,2,3],[4,5,6]])
```
- 2. using
    - `arange()`,`zeros()`,`ones()`,`eye()`,
    - `linspace()` -> returns number of numbers(metioned as third parameter) evenly spaced numbers b/w start and stop.
    - arange differs form range in fact that range returns list while arange return numpy array

    - `reshape()`-> reshape array from one dimension to other but numberof elements should not change or arr.size = srr_reshaped.size 

    - `np.empty()` => returns array with garbage values.
    - `np.full()`  => returns array with value specified as fill_value = value

```python
# creating array using list
l = [1,2,3]
```

```python
import numpy as np
```

```python
arr = np.array(l)
```

```python
type(arr)
```

**Output:**
```
numpy.ndarray
```

```python
arr
```

**Output:**
```
array([1, 2, 3])
```

```python
# creating 2-d arrayor matrix
mat = [[2,2],[3,4]]
```

```python
mat
```

**Output:**
```
[[2, 2], [3, 4]]
```

```python
type(mat)
```

**Output:**
```
list
```

```python
np.array(mat)
```

**Output:**
```
array([[2, 2],
       [3, 4]])
```

```python
# changing datatype
c = np.array( [ [1,2], [3,4] ], dtype=complex )
c
```

**Output:**
```
array([[1.+0.j, 2.+0.j],
       [3.+0.j, 4.+0.j]])
```

```python
# using np.zeros(shape, type=float)
np.zeros(3)
```

**Output:**
```
array([0., 0., 0.])
```

```python
np.zeros(3,int)
```

**Output:**
```
array([0, 0, 0])
```

```python
np.zeros((4,4), bool)
```

**Output:**
```
array([[False, False, False, False],
       [False, False, False, False],
       [False, False, False, False],
       [False, False, False, False]])
```

```python
np.zeros((3,3,3), complex)
```

**Output:**
```
array([[[0.+0.j, 0.+0.j, 0.+0.j],
        [0.+0.j, 0.+0.j, 0.+0.j],
        [0.+0.j, 0.+0.j, 0.+0.j]],

       [[0.+0.j, 0.+0.j, 0.+0.j],
        [0.+0.j, 0.+0.j, 0.+0.j],
        [0.+0.j, 0.+0.j, 0.+0.j]],

       [[0.+0.j, 0.+0.j, 0.+0.j],
        [0.+0.j, 0.+0.j, 0.+0.j],
        [0.+0.j, 0.+0.j, 0.+0.j]]])
```

```python
# using np.arange(start=0, stop, step=1, dtype=None)
```

```python
np.arange(10)
```

**Output:**
```
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```python
np.arange(10, dtype=complex)
```

**Output:**
```
array([0.+0.j, 1.+0.j, 2.+0.j, 3.+0.j, 4.+0.j, 5.+0.j, 6.+0.j, 7.+0.j,
       8.+0.j, 9.+0.j])
```

```python
np.arange(3,15,3)
```

**Output:**
```
array([ 3,  6,  9, 12])
```

```python
# np.ones()
np.ones(3)
```

**Output:**
```
array([1., 1., 1.])
```

```python
np.ones((4,5))
```

**Output:**
```
array([[1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1.]])
```

```python
# np.linspace()
np.linspace(0,10,2)
```

**Output:**
```
array([ 0., 10.])
```

```python
np.linspace(0,10,10)
```

**Output:**
```
array([ 0.        ,  1.11111111,  2.22222222,  3.33333333,  4.44444444,
        5.55555556,  6.66666667,  7.77777778,  8.88888889, 10.        ])
```

```python
np.empty((2,3))
```

**Output:**
```
array([[2.67276450e+185, 1.69506143e+190, 1.75184137e+190],
       [9.48819320e+077, 1.63730399e-306, 0.00000000e+000]])
```

```python
np.full((2,3),fill_value=12)
```

**Output:**
```
array([[12, 12, 12],
       [12, 12, 12]])
```

# random class inside numpy class (generated random data following some distribution)

```python
help(np.random)
```

**Output:**
```
Help on package numpy.random in numpy:

NAME
    numpy.random

DESCRIPTION
    ========================
    Random Number Generation
    ========================
    
    ==================== =========================================================
    Utility functions
    ==============================================================================
    random_sample        Uniformly distributed floats over ``[0, 1)``.
    random               Alias for `random_sample`.
    bytes                Uniformly distributed random bytes.
    random_integers      Uniformly distributed integers in a given range.
    permutation          Randomly permute a sequence / generate a random sequence.
    shuffle              Randomly permute a sequence in place.
    seed                 Seed the random number generator.
    choice               Random sample from 1-D array.
    
    ==================== =========================================================
    
    ==================== =========================================================
    Compatibility functions
    ==============================================================================
    rand                 Uniformly distributed values.
    randn                Normally distributed values.
    ranf                 Uniformly distributed floating point numbers.
    randint              Uniformly distributed integers in a given range.
    ==================== =========================================================
    
    ==================== =========================================================
    Univariate distributions
    ==============================================================================
    beta                 Beta distribution over ``[0, 1]``.
    binomial             Binomial distribution.
    chisquare            :math:`\chi^2` distribution.
    exponential          Exponential distribution.
    f                    F (Fisher-Snedecor) distribution.
    gamma                Gamma distribution.
    geometric            Geometric distribution.
    gumbel               Gumbel distribution.
    hypergeometric       Hypergeometric distribution.
    laplace              Laplace distribution.
    logistic             Logistic distribution.
    lognormal            Log-normal distribution.
    logseries            Logarithmic series distribution.
    negative_binomial    Negative binomial distribution.
    noncentral_chisquare Non-central chi-square distribution.
    noncentral_f         Non-central F distribution.
    normal               Normal / Gaussian distribution.
    pareto               Pareto distribution.
    poisson              Poisson distribution.
    power                Power distribution.
    rayleigh             Rayleigh distribution.
    triangular           Triangular distribution.
    uniform              Uniform distribution.
    vonmises             Von Mises circular distribution.
    wald                 Wald (inverse Gaussian) distribution.
 
... (output truncated)
```

```python
np.random.randint(2,45,12)
```

**Output:**
```
array([17, 14, 18, 18, 11, 43, 24, 13,  9, 15, 26, 39])
```

```python
np.random.rand(12)
```

**Output:**
```
array([0.99276065, 0.41500381, 0.25028878, 0.91046322, 0.04493408,
       0.32149137, 0.14403006, 0.44153052, 0.32109934, 0.6895279 ,
       0.72788751, 0.36467681])
```

```python
np.random.randn(12)
```

**Output:**
```
array([-0.39758898,  1.09286962,  1.31434009,  1.03881812,  0.22472093,
       -1.19395013, -0.59245433,  0.03993461, -0.05421944,  1.49273983,
       -0.38237876, -0.37428445])
```

```python
np.random.random((2,3)) # random() inside random()
```

**Output:**
```
array([[0.75163235, 0.46451207, 0.24398095],
       [0.8308684 , 0.4203051 , 0.97528916]])
```

```python
np.random.randn()
```

**Output:**
```
-0.16619521168481557
```

## Note

```python
&gt;&gt;&gt; print(np.arange(10000))
[   0    1    2 ..., 9997 9998 9999]
&gt;&gt;&gt;
&gt;&gt;&gt; print(np.arange(10000).reshape(100,100))
[[   0    1    2 ...,   97   98   99]
 [ 100  101  102 ...,  197  198  199]
 [ 200  201  202 ...,  297  298  299]
 ...,
 [9700 9701 9702 ..., 9797 9798 9799]
 [9800 9801 9802 ..., 9897 9898 9899]
 [9900 9901 9902 ..., 9997 9998 9999]]
To disable this behaviour and force NumPy to print the entire array, you can change the printing options using set_printoptions.

&gt;&gt;&gt;
&gt;&gt;&gt; np.set_printoptions(threshold=np.nan)
```

```python
print(np.arange(10000))
```

**Output:**
```
[   0    1    2 ... 9997 9998 9999]
```

```python
np.set_printoptions(threshold=np.nan)
```

```python
print(np.arange(10000))
```

**Output:**
```
[   0    1    2    3    4    5    6    7    8    9   10   11   12   13
   14   15   16   17   18   19   20   21   22   23   24   25   26   27
   28   29   30   31   32   33   34   35   36   37   38   39   40   41
   42   43   44   45   46   47   48   49   50   51   52   53   54   55
   56   57   58   59   60   61   62   63   64   65   66   67   68   69
   70   71   72   73   74   75   76   77   78   79   80   81   82   83
   84   85   86   87   88   89   90   91   92   93   94   95   96   97
   98   99  100  101  102  103  104  105  106  107  108  109  110  111
  112  113  114  115  116  117  118  119  120  121  122  123  124  125
  126  127  128  129  130  131  132  133  134  135  136  137  138  139
  140  141  142  143  144  145  146  147  148  149  150  151  152  153
  154  155  156  157  158  159  160  161  162  163  164  165  166  167
  168  169  170  171  172  173  174  175  176  177  178  179  180  181
  182  183  184  185  186  187  188  189  190  191  192  193  194  195
  196  197  198  199  200  201  202  203  204  205  206  207  208  209
  210  211  212  213  214  215  216  217  218  219  220  221  222  223
  224  225  226  227  228  229  230  231  232  233  234  235  236  237
  238  239  240  241  242  243  244  245  246  247  248  249  250  251
  252  253  254  255  256  257  258  259  260  261  262  263  264  265
  266  267  268  269  270  271  272  273  274  275  276  277  278  279
  280  281  282  283  284  285  286  287  288  289  290  291  292  293
  294  295  296  297  298  299  300  301  302  303  304  305  306  307
  308  309  310  311  312  313  314  315  316  317  318  319  320  321
  322  323  324  325  326  327  328  329  330  331  332  333  334  335
  336  337  338  339  340  341  342  343  344  345  346  347  348  349
  350  351  352  353  354  355  356  357  358  359  360  361  362  363
  364  365  366  367  368  369  370  371  372  373  374  375  376  377
  378  379  380  381  382  383  384  385  386  387  388  389  390  391
  392  393  394  395  396  397  398  399  400  401  402  403  404  405
  406  407  408  409  410  411  412  413  414  415  416  417  418  419
  420  421  422  423  424  425  426  427  428  429  430  431  432  433
  434  435  436  437  438  439  440  441  442  443  444  445  446  447
  448  449  450  451  452  453  454  455  456  457  458  459  460  461
  462  463  464  465  466  467  468  469  470  471  472  473  474  475
  476  477  478  479  480  481  482  483  484  485  486  487  488  489
  490  491  492  493  494  495  496  497  498  499  500  501  502  503
  504  505  506  507  508  509  510  511  512  513  514  515  516  517
  518  519  520  521  522  523  524  525  526  527  528  529  530  531
  532  533  534  535  536  537  538  539  540  541  542  543  544  545
  546  547  548  549  550  551  552  553  554  555  556  557  558  559
  560  561  562  563  564  565  566  567  568  569  570  571  572  573
  574  575  576  577  578  579  580  581  582  583  584  585  586  587
  588  589  590  5
... (output truncated)
```

## Broadcasting(Basically applying some operation over various elements at once)

Numpy arrays differ from a normal Python list because of their ability to broadcast:

```python
arr = np.arange(15)
arr
```

**Output:**
```
array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14])
```

```python
#Setting a value with index range (Broadcasting)
arr[0:5]=100

#Show
arr
```

**Output:**
```
array([100, 100, 100, 100, 100,   5,   6,   7,   8,   9,  10,  11,  12,
        13,  14])
```

```python
# Reset array, we'll see why I had to reset in  a moment
arr = np.arange(0,11)

#Show
arr
```

**Output:**
```
array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10])
```

```python
#Important notes on Slices
slice_of_arr = arr[0:6]

#Show slice
slice_of_arr
```

**Output:**
```
array([0, 1, 2, 3, 4, 5])
```

```python
#Change Slice
slice_of_arr[:]=99

#Show Slice again
slice_of_arr
```

**Output:**
```
array([99, 99, 99, 99, 99, 99])
```

Now note the changes also occur in our original array!

```python
arr # this is bacuse sequence slicing in numpy gives a view to array only not copy the elements
```

**Output:**
```
array([99, 99, 99, 99, 99, 99,  6,  7,  8,  9, 10])
```

#### Note that in all of cases where subsections of the array have been selected, the returned arrays are views.
#### arrays generated by basic slicing are always views of the original array.

#### Data is not copied, it's a view of the original array! This avoids memory problems!

```python
#To get a copy, need to be explicit
arr_copy = arr.copy()

arr_copy
```

**Output:**
```
array([99, 99, 99, 99, 99, 99,  6,  7,  8,  9, 10])
```

# Operation on numpy arrays(cann't be done on list )-
- Vectorization means applying operations element wise
- arrays are Broadcasted if arrays are of Different sizes if mismatched dimesion is 1.

```python
arr = np.arange(10)
```

```python
arr
```

**Output:**
```
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```python
arr+arr
```

**Output:**
```
array([ 0,  2,  4,  6,  8, 10, 12, 14, 16, 18])
```

```python
arr-arr
```

**Output:**
```
array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
```

```python
arr/arr
```

**Output:**
```
c:\users\shaurya singhal\appdata\local\programs\python\python37-32\lib\site-packages\ipykernel_launcher.py:1: RuntimeWarning: invalid value encountered in true_divide
  """Entry point for launching an IPython kernel.
array([nan,  1.,  1.,  1.,  1.,  1.,  1.,  1.,  1.,  1.])
```

```python
arr*arr
```

**Output:**
```
array([ 0,  1,  4,  9, 16, 25, 36, 49, 64, 81])
```

```python
1/arr
```

**Output:**
```
c:\users\shaurya singhal\appdata\local\programs\python\python37-32\lib\site-packages\ipykernel_launcher.py:1: RuntimeWarning: divide by zero encountered in true_divide
  """Entry point for launching an IPython kernel.
array([       inf, 1.        , 0.5       , 0.33333333, 0.25      ,
       0.2       , 0.16666667, 0.14285714, 0.125     , 0.11111111])
```

```python
arr**arr
```

**Output:**
```
array([        1,         1,         4,        27,       256,      3125,
           46656,    823543,  16777216, 387420489], dtype=int32)
```

```python
arr
```

**Output:**
```
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```python
arr<5
```

**Output:**
```
array([ True,  True,  True,  True,  True, False, False, False, False,
       False])
```

```python
arr[arr<4]
```

**Output:**
```
array([0, 1, 2, 3])
```

#### The Python keywords and and or do not work with boolean arrays.  Use & (and) and | (or) instead.

```python
arr[arr>4]
```

**Output:**
```
array([5, 6, 7, 8, 9])
```

```python
# Product of matrices
a=np.array([[1,2],[4,5]])
```

```python
a
```

**Output:**
```
array([[1, 2],
       [4, 5]])
```

```python
a*a # element product
```

**Output:**
```
array([[ 1,  4],
       [16, 25]])
```

```python
a @ a  # matrix product (a and b must be compatible matrix i.e a-cols == b-rows)
```

**Output:**
```
array([[ 9, 12],
       [24, 33]])
```

```python
a.dot(a) # matrix product
```

**Output:**
```
array([[ 9, 12],
       [24, 33]])
```

```python
# max ,min

arr = np.random.random((2,3))
```

```python
arr
```

**Output:**
```
array([[0.82548126, 0.33824021, 0.1205504 ],
       [0.6991525 , 0.88811133, 0.64167258]])
```

```python
arr.max()
```

**Output:**
```
0.8881113349325174
```

```python
arr.min()
```

**Output:**
```
0.12055039839690174
```

```python
print(arr.argmin(axis=0))
```

**Output:**
```
[1 0 0]
```

```python
np.min(arr)
```

**Output:**
```
0.12055039839690174
```

```python
np.sum(arr)
```

**Output:**
```
3.5132082811098466
```

```python
arr
```

**Output:**
```
array([[0.82548126, 0.33824021, 0.1205504 ],
       [0.6991525 , 0.88811133, 0.64167258]])
```

```python
# find max in particular axis
arr.max(axis = 0) # find max in cols
```

**Output:**
```
array([0.82548126, 0.88811133, 0.64167258])
```

```python
arr.max(axis=1) # max in rows
```

**Output:**
```
array([0.82548126, 0.88811133])
```

# Universal Functions of NumPy(or mathematical functions)
    
        A universal function (or ufunc for short) is a function that operates on ndarrays in an element-by-element fashion, supporting array broadcasting, type casting, and several other standard features. That is, a ufunc is a “vectorized” wrapper for a function that takes a fixed number of specific inputs and produces a fixed number of specific outputs.

```python
import math
print(math.sqrt(4))
print(math.sin(math.pi/6))
```

**Output:**
```
2.0
0.49999999999999994
```

```python
# using numpy
np.sqrt(4)
```

**Output:**
```
2.0
```

```python
np.sin(np.pi/6)
```

**Output:**
```
0.49999999999999994
```

```python
np.exp(3)
```

**Output:**
```
20.085536923187668
```

```python
np.exp(np.array([0,1,2]))
```

**Output:**
```
array([1.        , 2.71828183, 7.3890561 ])
```

## Indexing a 2D array (matrices)

The general format is **arr_2d[row][col]** or **arr_2d[row,col]**. 
- when evaluating first form *arr_2d[row][col]* , first bracket([row]) is evaluated and then second one; make it hard to select submatrix from original matrix arr_2d becoz after first bracket execution also it will remain same nd matrix as it is original thus making impossible to select submatrix.
- use `arr_2d[row,col]` for selecting sub matrix in python becoz it is evaluated as it is and selecting a subpart

```python
arr_2d = np.array(([5,10,15],[20,25,30],[35,40,45]))

#Show
arr_2d
```

**Output:**
```
array([[ 5, 10, 15],
       [20, 25, 30],
       [35, 40, 45]])
```

```python
#Indexing row
arr_2d[1]
```

**Output:**
```
array([20, 25, 30])
```

```python
# Format is arr_2d[row][col] or arr_2d[row,col]

# Getting individual element value
arr_2d[1][0]
```

**Output:**
```
20
```

```python
# Getting individual element value
arr_2d[1,0]
```

**Output:**
```
20
```

```python
arr_2d
```

**Output:**
```
array([[ 5, 10, 15],
       [20, 25, 30],
       [35, 40, 45]])
```

```python
# 2D array slicing
#Shape (2,2) from top right corner
arr_2d[:2,1:]
```

**Output:**
```
array([[10, 15],
       [25, 30]])
```

```python
arr_2d[:2][1:]  # see result in different answer thats what we dont wanted
```

**Output:**
```
array([[20, 25, 30]])
```

```python
#Shape bottom row
arr_2d[2]
```

**Output:**
```
array([35, 40, 45])
```

```python
#Shape bottom row
arr_2d[2,:]
```

**Output:**
```
array([35, 40, 45])
```

### Fancy Indexing

Fancy indexing allows you to select entire rows or columns out of order,to show this, let's quickly build out a numpy array:

```python
#Set up matrix
arr2d = np.zeros((10,10))
```

```python
arr2d.shape
```

**Output:**
```
(10, 10)
```

```python
# no of columns  of array
arr_length = arr2d.shape[1]
print(arr_length)
```

**Output:**
```
10
```

```python
#Set up array

for i in range(arr_length):
    arr2d[i] = i+1
    
arr2d
```

**Output:**
```
array([[ 1.,  1.,  1.,  1.,  1.,  1.,  1.,  1.,  1.,  1.],
       [ 2.,  2.,  2.,  2.,  2.,  2.,  2.,  2.,  2.,  2.],
       [ 3.,  3.,  3.,  3.,  3.,  3.,  3.,  3.,  3.,  3.],
       [ 4.,  4.,  4.,  4.,  4.,  4.,  4.,  4.,  4.,  4.],
       [ 5.,  5.,  5.,  5.,  5.,  5.,  5.,  5.,  5.,  5.],
       [ 6.,  6.,  6.,  6.,  6.,  6.,  6.,  6.,  6.,  6.],
       [ 7.,  7.,  7.,  7.,  7.,  7.,  7.,  7.,  7.,  7.],
       [ 8.,  8.,  8.,  8.,  8.,  8.,  8.,  8.,  8.,  8.],
       [ 9.,  9.,  9.,  9.,  9.,  9.,  9.,  9.,  9.,  9.],
       [10., 10., 10., 10., 10., 10., 10., 10., 10., 10.]])
```

Fancy indexing allows the following

```python
arr2d[[2,4,6,8]]
```

**Output:**
```
array([[3., 3., 3., 3., 3., 3., 3., 3., 3., 3.],
       [5., 5., 5., 5., 5., 5., 5., 5., 5., 5.],
       [7., 7., 7., 7., 7., 7., 7., 7., 7., 7.],
       [9., 9., 9., 9., 9., 9., 9., 9., 9., 9.]])
```

```python
#Allows in any order
arr2d[[6,4,2,7]]
```

**Output:**
```
array([[7., 7., 7., 7., 7., 7., 7., 7., 7., 7.],
       [5., 5., 5., 5., 5., 5., 5., 5., 5., 5.],
       [3., 3., 3., 3., 3., 3., 3., 3., 3., 3.],
       [8., 8., 8., 8., 8., 8., 8., 8., 8., 8.]])
```

# numpy for statistics
- min , max
- mean
- average => weighted mean
- median
- mode
- std
- variance

```python
import numpy as np
```

```python
np.min([1,2,3])
```

**Output:**
```
1
```

```python
np.max([3,34,5])
```

**Output:**
```
34
```

```python
np.mean([2,3,4])
```

**Output:**
```
3.0
```

```python
np.average([1,5,4,2,0], weights=[1,2,3,4,5]) # sum(wi * xi) /sum(wi)
```

**Output:**
```
2.066666666666667
```

```python
(1*1 + 5*2 + 4*3 + 2*4 + 0*5 ) / 15
```

**Output:**
```
2.066666666666667
```

```python
np.median([2,3,4,65,75,8,67,8,9,654,1,83])
```

**Output:**
```
8.5
```

```python
# using formula
a = np.array([2,3,4])
u = np.mean(a)

std = np.sqrt(np.mean((a-u)**2))
print(std)
```

**Output:**
```
0.816496580927726
```

```python
# using inbuilt std function
np.std([2,3,4])
```

**Output:**
```
0.816496580927726
```

```python
np.var([2,3,4])
```

**Output:**
```
0.6666666666666666
```

# Stacking together different arrays

- `np.hstack()` -  To stack arrays along horizontal axis.
- `np.vstack()` - To stack arrays along vertical axis.
- `np.row_stack()`- To stack 1-D arrays as rows into 2-D arrays 
- `np.column_stack()` - To stack 1-D arrays as column into 2-D arrays
- `np.concatenate() `: To stack arrays along specified axis (axis is passed as argument).- can stack more than two arrays

# Splitting one array into several smaller ones
- `hsplit()`
- `vsplit()`

```python

a = np.floor(10*np.random.random((2,12)))
a
array([[ 9.,  5.,  6.,  3.,  6.,  8.,  0.,  7.,  9.,  7.,  2.,  7.],
       [ 1.,  4.,  9.,  2.,  2.,  1.,  0.,  6.,  2.,  2.,  4.,  0.]])

np.hsplit(a,3)   # Split a into 3
[array([[ 9.,  5.,  6.,  3.],
       [ 1.,  4.,  9.,  2.]]), array([[ 6.,  8.,  0.,  7.],
       [ 2.,  1.,  0.,  6.]]), array([[ 9.,  7.,  2.,  7.],
       [ 2.,  2.,  4.,  0.]])]

np.hsplit(a,(3,4))   # Split a after the third and the fourth column
[array([[ 9.,  5.,  6.],
       [ 1.,  4.,  9.]]), array([[ 3.],
       [ 2.]]), array([[ 6.,  8.,  0.,  7.,  9.,  7.,  2.,  7.],
       [ 2.,  1.,  0.,  6.,  2.,  2.,  4.,  0.]])]
```

# Copies and Views
When operating and manipulating arrays, their data is sometimes copied into a new array and sometimes not. This is often a source of confusion for beginners. There are three cases:

### No Copy at All
Simple assignments make no copy of array objects or of their data.
```python

a = np.arange(12)
b = a            # no new object is created
b is a           # a and b are two names for the same ndarray object
True
b.shape = 3,4    # changes the shape of a
a.shape
(3, 4)
```
### View or Shallow Copy(`view()`)
Different array objects can share the same data. The view method creates a new array object that looks at the same data.

```python
c = a.view()
c is a
False
c.base is a                        # c is a view of the data owned by a
True
c.flags.owndata
False

c.shape = 2,6                      # a's shape doesn't change
 a.shape
(3, 4)
c[0,4] = 1234                      # a's data changes
a
array([[   0,    1,    2,    3],
       [1234,    5,    6,    7],
       [   8,    9,   10,   11]])
```


**Slicing an array returns a view of it**:

```python
&gt;&gt;&gt; s = a[ : , 1:3]    
&gt;&gt;&gt; s[:] = 10           # s[:] is a view of s. Note the difference between s=10 and s[:]=10
&gt;&gt;&gt; a
array([[   0,   10,   10,    3],
       [1234,   10,   10,    7],
       [   8,   10,   10,   11]])
```

### Deep Copy
The copy method makes a complete copy of the array and its data.

```python
d = a.copy()                          # a new array object with new data is created
d is a
False
d.base is a                           # d doesn't share anything with a
False
d[0,0] = 9999
a
array([[   0,   10,   10,    3],
       [1234,   10,   10,    7],
       [   8,   10,   10,   11]])
```

## Broadcasting rules

- The first rule of broadcasting is that if all input arrays do not have the same number of dimensions, a “1” will be repeatedly prepended to the shapes of the smaller arrays until all the arrays have the same number of dimensions.

- The second rule of broadcasting ensures that arrays with a size of 1 along a particular dimension act as if they had the size of the array with the largest shape along that dimension. The value of the array element is assumed to be the same along that dimension for the “broadcast” array.

In order to broadcast, the size of the trailing axes for both arrays in an operation must either be the same size or one of them must be one.

Let us see some examples:

A(2-D array): 4 x 3
B(1-D array):     3
Result      : 4 x 3
A(4-D array): 7 x 1 x 6 x 1
B(3-D array):     3 x 1 x 5
Result      : 7 x 3 x 6 x 5
But this would be a mismatch:

A: 4 x 3
B:     4
Now, let us see

# Array Sorting
There is a simple np.sort method for sorting NumPy arrays.

```python
import numpy as np
arr = np.array([[1, 4, 2],
                [3, 4, 6],
                [0, -1, 5]])

np.sort(arr, axis=1)
```

**Output:**
```
array([[ 1,  2,  4],
       [ 3,  4,  6],
       [-1,  0,  5]])
```

```python
np.sort(arr, axis=0)
```

**Output:**
```
array([[ 0, -1,  2],
       [ 1,  4,  5],
       [ 3,  4,  6]])
```

```python
np.sort(arr, axis=None)
```

**Output:**
```
array([-1,  0,  1,  2,  3,  4,  4,  5,  6])
```

# Linear Algebra
The Linear Algebra module of NumPy offers various methods to apply linear algebra on any numpy array.

You can find:

- rank, determinant, trace, etc. of an array.
- eigen values of matrices
- matrix and vector products (dot, inner, outer,etc. product), matrix exponentiation
- solve linear or tensor equations and much more!
Now, let us assume that we want to solve this linear equation set:
```
    x + 2*y = 8
    3*x + 4*y = 18
```
This problem can be solved using linalg.solve method as shown in example below:

```python
import numpy as np
# coefficients
a = np.array([[1, 2], [3, 4]])
# constants
b = np.array([8, 18])

np.linalg.solve(a, b)
```

**Output:**
```
array([2., 3.])
```

```python
A = np.array([[6, 1, 1],
              [4, -2, 5],
              [2, 8, 7]])
# rank of matrix
np.linalg.matrix_rank(A)
```

**Output:**
```
3
```

```python
# trace of matrix- diagonal sum
np.trace(A)
```

**Output:**
```
11
```

```python
# determinant of matrix
np.linalg.det(A)
```

**Output:**
```
-306.0
```

```python
# inverse of matrix
np.linalg.inv(A)
```

**Output:**
```
array([[ 0.17647059, -0.00326797, -0.02287582],
       [ 0.05882353, -0.13071895,  0.08496732],
       [-0.11764706,  0.1503268 ,  0.05228758]])
```

```python
# matrix exponentiation
np.linalg.matrix_power(A,3)
```

**Output:**
```
array([[336, 162, 228],
       [406, 162, 469],
       [698, 702, 905]])
```

# Saving and loading numpy arrays
The `.npy` format is the standard binary file format in NumPy for persisting a single arbitrary NumPy array on disk. The format stores all of the shape and dtype information necessary to reconstruct the array correctly even on another machine with a different architecture. The format is designed to be as simple as possible while achieving its limited goals.

The `.npz` format is the standard format for persisting multiple NumPy arrays on disk. A .npz file is a zip file containing multiple .npy files, one for each array.

- np.save(filename.npy, array) : saves a single array in npy format.

- np.savez(filename.npz, array_1[, array_2]) : saves multiple numpy arrays in npz format.

- np.load(filename) : load a npy or npz format file.

```python
import numpy as np
a = np.array([[1,2,3],
             [4,5,6]])

b = np.array([[6,5,4],
              [3,2,1]])
```

```python
np.save("a.npy", a)
```

```python
a = np.load("a.npy")
a
```

**Output:**
```
array([[1, 2, 3],
       [4, 5, 6]])
```

```python
np.savez("AB.npz", x=a, y=b)
arr = np.load("AB.npz")
```

```python
arr['x']
```

**Output:**
```
array([[1, 2, 3],
       [4, 5, 6]])
```

```python
arr['y']
```

**Output:**
```
array([[6, 5, 4],
       [3, 2, 1]])
```