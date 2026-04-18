---
title: "Pandas"
slug: machine-learning-learn-ml-libraries-02-learn-pandas
date: 2022-02-17
authors: [shaurya]
tags: [machine-learning, python, data-science, pandas]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML%20libraries/02-Learn-Pandas.ipynb)
>
> **Category**: Machine Learning / Learn ML libraries

<!-- truncate -->

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML%20libraries/images/python_pandas.jpg)


---

# Pandas

- Basically used to do work like in excel.(You can think of pandas as an extremely powerful version of Excel, with a lot more features.)
- Pandas(Panel data)

### Topics discussed:-

* **Introduction to Pandas and its Features**
* **Series**
* **DataFrames**
    * selecting rows and columns (using `[]` or `loc/iloc attribute`)
    * Adding and removing Rows (using `[]` to add and `drop()` to remove)
    * Conditional statements on DataFrames
    * Setting and Resetting Indexes (use `set_index()` and `reset_index()`)
    * Missing Data (use `dropna()` to clean data and `fillna()` to fill missing data)
    * GroupBy (`groupby()`)
    * convert data to numpy(using `df.values`)
    * Merging,Joining,and Concatenating(`merge()`, `join()`, `concat()`)
    * Operations (`unique()`, `nunique()`, `value_counts()`, `isnull()`, `sort_values()`,`apply()` `column`, `index` etc)
* **Data Input and Output**
* **Pandas Plotting**

## Features
- pandas - a powerful data analysis and manipulation library for Python  
- pandas is a Python package providing fast, flexible, and expressive data
structures designed to make working with "relational" or "labeled" data both
easy and intuitive. 


- It aims to be the fundamental high-level building block for
    doing practical,real worlddata analysis in Python.

Main Features
-------------

Here are just a few of the things that pandas does well:

  - `Easy handling of missing data` in floating point as well as non-floating
    point data.
  
  
  - `Size mutability`: columns can be inserted and deleted from DataFrame and
    higher dimensional objects.
    
    
  - `Automatic and explicit data alignment`: objects can be explicitly aligned
    to a set of labels, or the user can simply ignore the labels and let
    `Series`, `DataFrame`, etc. automatically align the data for you in
    computations.
  
  
  - `Powerful, flexible group by functionality to perform split-apply-combine
    operations on data sets`, for both aggregating and transforming data.
  
  
  - `Intelligent label-based slicing, fancy indexing, and subsetting of large
    data sets.`
  
  
  - `Intuitive merging and joining data sets.`
  
  
  - `Flexible reshaping and pivoting of data sets.`
  
  
  - `Robust IO tools for loading data from flat files` (CSV and delimited),
    Excel files, databases, and saving/loading data from the ultrafast HDF5
    format.


  - `Time series-specific functionality`: date range generation and frequency
    conversion, moving window statistics, moving window linear regressions,
    date shifting and lagging, etc.

```python
import pandas as pd
import numpy as np
```

## Series and DataFrames are the main modules of Pandas Module we will use

# 1. pd.Series

- basically used to create a hashtable with key,value pair namely (index,data).
- A Series is very similar to a NumPy array (in fact it is built on top of the NumPy array object). What differentiates the NumPy array from a Series, is that a Series can have axis labels, meaning it can be indexed by a label, instead of just a number location. It also doesn't need to hold numeric data, it can hold any arbitrary Python Object.
- it can hold  any type of data even built_in_functions as well.

```python
import numpy as np
import pandas as pd
```

```python
data = np.array([1,2,3,4])
label = np.array([0,1,2,3])
label_char = np.array(['shaurya', 'priyansh', 'mamta', 'mukesh'])
hash_table = pd.Series(data) # By default indices will be 0,1,2,3 and so on... 

# providing numbered-indexing as well
hash_table2 = pd.Series(data = data, index = label)


# providing custom-indexing as well
hash_table3 = pd.Series(data = data, index = label_char)


# providing dictionary d
d= {'shaurya':1, 'singhal':2, 'mukesh':3, 'mamta':4}
hash_table4 = pd.Series(d)

daata = list(zip(label_char, data))
hash_table5 = pd.Series(daata)
```

```python
print(hash_table)
print('----------------')
print(hash_table2)
print('----------------')
print(hash_table3)
print('----------------')
print(hash_table4)
print('----------------')
print(hash_table5)
print('----------------')
```

**Output:**
```
0    1
1    2
2    3
3    4
dtype: int32
----------------
0    1
1    2
2    3
3    4
dtype: int32
----------------
shaurya     1
priyansh    2
mamta       3
mukesh      4
dtype: int32
----------------
shaurya    1
singhal    2
mukesh     3
mamta      4
dtype: int64
----------------
0     (shaurya, 1)
1    (priyansh, 2)
2       (mamta, 3)
3      (mukesh, 4)
dtype: object
----------------
```

```python
# saving functions
hash_fun = pd.Series(data = [sum,min,max,print,len])
```

```python
hash_fun
```

**Output:**
```
0      &lt;built-in function sum&gt;
1      &lt;built-in function min&gt;
2      &lt;built-in function max&gt;
3    &lt;built-in function print&gt;
4      &lt;built-in function len&gt;
dtype: object
```

## Operations are then also done based off of index:

```python
ser1 = pd.Series([1,2,3,4], index = ['USA', 'Germany','USSR', 'Japan'])
```

```python
ser2 = pd.Series([1,2,5,4], index = ['USA', 'Germany','Italy', 'Japan'])
```

```python
ser1 + ser2
```

**Output:**
```
Germany    4.0
Italy      NaN
Japan      8.0
USA        2.0
USSR       NaN
dtype: float64
```

```python
ser1
```

**Output:**
```
USA        1
Germany    2
USSR       3
Japan      4
dtype: int64
```

```python
ser2
```

**Output:**
```
USA        1
Germany    2
Italy      5
Japan      4
dtype: int64
```

```python
pd.Series?
```

# 2. DataFrames

- DataFrames are the workhorse of pandas and are directly inspired by the R programming language. `We can think of a DataFrame as a bunch of Series objects put together to share the same index(`combine various hashtables with same keys or indices`)`. Let's use pandas to explore this topic!

- we will show DataFrames being Series of Series and infact built on numpy ARRAYS


- DataFrames have (index,data,columns) in the order data,index,columns

```python
import pandas as pd
from numpy.random import randn 
df = pd.DataFrame(data = randn(4,4), index=['A','B','C','D'], columns=['E','F','G','H'])
```

```python
df
```

**Output:**
```
E         F         G         H
A  0.211382  0.277118 -0.069357  1.751781
B -1.107231  0.458712  0.533907  1.065361
C  0.230110  2.127683  0.612683 -0.938353
D -1.991244  0.719935  1.462831 -1.112004
```

```python
data  = np.arange(5)
daata = list(zip(['s','p','ma','mu'], data))
print(daata)
df2 = pd.DataFrame(daata,index = ['A','B','C','D'])
```

**Output:**
```
[('s', 0), ('p', 1), ('ma', 2), ('mu', 3)]
```

```python
df2
```

**Output:**
```
0  1
A   s  0
B   p  1
C  ma  2
D  mu  3
```

```python
df
```

**Output:**
```
E         F         G         H
A  0.072135  1.072180 -0.498480  1.228543
B -1.726358 -0.774394 -1.335940  0.078463
C  1.068696  0.198596 -0.986149 -0.622723
D -0.007756 -0.481936 -1.610555  0.667122
```

###  (2a)Selecting/Indexing rows(use `loc/iloc attribute`) and colums(use `[]`)  of DataFrame

```python
# if we look and select E-th column use:
print(df['E']) # selecting column of DataFrame
print('------')
print(type(df['E']))
# it is a pandas - Series
```

**Output:**
```
A    0.072135
B   -1.726358
C    1.068696
D   -0.007756
Name: E, dtype: float64
------
&lt;class 'pandas.core.series.Series'&gt;
```

```python
# selecting row
# df['A']  # this is an error 

ref = df.loc
print(ref['A'])
print('---------')
type(ref['A'])
# this is also a pandas- Series
```

**Output:**
```
E    0.072135
F    1.072180
G   -0.498480
H    1.228543
Name: A, dtype: float64
---------
pandas.core.series.Series
```

```python
# above thing can be combined
print(df.loc['A'])
```

**Output:**
```
E    0.072135
F    1.072180
G   -0.498480
H    1.228543
Name: A, dtype: float64
```

```python
# can use iloc to select based on numerical index starting with 0 (no Surprise here :| )
print(df.iloc[0]) # same as df.loc['A']
```

**Output:**
```
E    0.072135
F    1.072180
G   -0.498480
H    1.228543
Name: A, dtype: float64
```

#### Conclusion 
- DataFrames are basically Series of Series
- since Series are based on numpy ,DatatFrames are as well. lets call shape attribute to it

```python
df.shape
```

**Output:**
```
(4, 4)
```

```python
# we can select multiple columns/rows (pass list of columns/rows)as well ex-
df[['E','F']]
```

**Output:**
```
E         F
A  0.072135  1.072180
B -1.726358 -0.774394
C  1.068696  0.198596
D -0.007756 -0.481936
```

```python
df[['E','F']].loc[['C','D']]
```

**Output:**
```
E         F
C  1.068696  0.198596
D -0.007756 -0.481936
```

```python
# or use iloc
df[['E','F']].iloc[[2,3]]
```

**Output:**
```
E         F
C  1.068696  0.198596
D -0.007756 -0.481936
```

```python
# grabbing individual element
df.loc['A','E']
```

**Output:**
```
0.07213467134028595
```

# Converting DataFrame into numpy arrays (use `values attribute` on DataFrame object)

```python
# converting DataFrame into numpy arrays
df = pd.DataFrame(data = randn(4,4)) 
print(type(df))
print()
print(df)
print('======================')
print()
df = df.values
print(type(df))
print(df)
print('======================')
```

**Output:**
```
&lt;class 'pandas.core.frame.DataFrame'&gt;

          0         1         2         3
0  0.208281 -0.738167  0.269264  0.028646
1 -1.445427 -0.562245 -2.903674 -0.087284
2 -1.328404 -0.255863 -0.023696 -0.346428
3 -0.737738 -0.947259 -1.132884 -0.592254
======================

&lt;class 'numpy.ndarray'&gt;
[[ 0.20828142 -0.73816711  0.26926379  0.0286463 ]
 [-1.44542694 -0.56224521 -2.90367424 -0.08728398]
 [-1.32840381 -0.25586251 -0.02369633 -0.34642762]
 [-0.73773775 -0.94725893 -1.13288378 -0.59225421]]
======================
```

# (2b)Adding and Removing colums/rows in DataFrames

```python
# Adding
df
```

**Output:**
```
E         F         G         H
A  0.107055 -0.856872 -1.107465 -0.069469
B -1.741066 -0.651183  0.111722  0.444997
C -1.150753 -0.368783  0.882894 -1.017265
D  0.991462  1.046418 -1.461521 -0.365615
```

```python
df['new'] = df['E'] + df['F'] # remember hashtable(map in c++) ,this add new column to table
```

```python
df
```

**Output:**
```
E         F         G         H       new
A  0.107055 -0.856872 -1.107465 -0.069469 -0.749817
B -1.741066 -0.651183  0.111722  0.444997 -2.392248
C -1.150753 -0.368783  0.882894 -1.017265 -1.519535
D  0.991462  1.046418 -1.461521 -0.365615  2.037880
```

```python
df.loc['new_row'] = df.loc['A'] + df.loc['B'] # adding row using loc/iloc attribute
```

```python
df
```

**Output:**
```
E         F         G         H       new
A        0.107055 -0.856872 -1.107465 -0.069469 -0.749817
B       -1.741066 -0.651183  0.111722  0.444997 -2.392248
C       -1.150753 -0.368783  0.882894 -1.017265 -1.519535
D        0.991462  1.046418 -1.461521 -0.365615  2.037880
new_row -1.634011 -1.508054 -0.995743  0.375528 -3.142065
```

```python
# removing -> not inplace or do it by setting that inplace attribute True
df.drop('A', axis=0) # set axis to 0 for rows
# df.drop('E',axis=1) # set axis to 1 for columms
```

**Output:**
```
E         F         G         H       new
B       -1.741066 -0.651183  0.111722  0.444997 -2.392248
C       -1.150753 -0.368783  0.882894 -1.017265 -1.519535
D        0.991462  1.046418 -1.461521 -0.365615  2.037880
new_row -1.634011 -1.508054 -0.995743  0.375528 -3.142065
```

```python
df # see nothing is dropped ->??
```

**Output:**
```
E         F         G         H       new
A        0.107055 -0.856872 -1.107465 -0.069469 -0.749817
B       -1.741066 -0.651183  0.111722  0.444997 -2.392248
C       -1.150753 -0.368783  0.882894 -1.017265 -1.519535
D        0.991462  1.046418 -1.461521 -0.365615  2.037880
new_row -1.634011 -1.508054 -0.995743  0.375528 -3.142065
```

```python
# to Drop set inplace =True
df.drop('new',axis=1, inplace=True)
```

```python
df # now new is removed
```

**Output:**
```
E         F         G         H
A        0.107055 -0.856872 -1.107465 -0.069469
B       -1.741066 -0.651183  0.111722  0.444997
C       -1.150753 -0.368783  0.882894 -1.017265
D        0.991462  1.046418 -1.461521 -0.365615
new_row -1.634011 -1.508054 -0.995743  0.375528
```

```python
# lets remove new_row as well
df.drop('new_row', inplace=True, axis=0)
```

```python
df # back to Square One!!
```

**Output:**
```
E         F         G         H
A  0.107055 -0.856872 -1.107465 -0.069469
B -1.741066 -0.651183  0.111722  0.444997
C -1.150753 -0.368783  0.882894 -1.017265
D  0.991462  1.046418 -1.461521 -0.365615
```

### (2c) Conditional Selection

An important feature of pandas is conditional selection using bracket notation, very similar to numpy:

```python
df
```

**Output:**
```
E         F         G         H
A  0.107055 -0.856872 -1.107465 -0.069469
B -1.741066 -0.651183  0.111722  0.444997
C -1.150753 -0.368783  0.882894 -1.017265
D  0.991462  1.046418 -1.461521 -0.365615
```

```python
df>0
```

**Output:**
```
E      F      G      H
A   True  False  False  False
B  False  False   True   True
C  False  False   True  False
D   True   True  False  False
```

```python
df[df>0]
```

**Output:**
```
E         F         G         H
A  0.107055       NaN       NaN       NaN
B       NaN       NaN  0.111722  0.444997
C       NaN       NaN  0.882894       NaN
D  0.991462  1.046418       NaN       NaN
```

```python
df[df<1]
```

**Output:**
```
E         F         G         H
A  0.107055 -0.856872 -1.107465 -0.069469
B -1.741066 -0.651183  0.111722  0.444997
C -1.150753 -0.368783  0.882894 -1.017265
D  0.991462       NaN -1.461521 -0.365615
```

```python
df
```

**Output:**
```
E         F         G         H
A  0.107055 -0.856872 -1.107465 -0.069469
B -1.741066 -0.651183  0.111722  0.444997
C -1.150753 -0.368783  0.882894 -1.017265
D  0.991462  1.046418 -1.461521 -0.365615
```

```python
df[df['E']>0] # will select all columns where in E-th columns values are >0
```

**Output:**
```
E         F         G         H
A  0.107055 -0.856872 -1.107465 -0.069469
D  0.991462  1.046418 -1.461521 -0.365615
```

```python
# to select only F and G th column where Eth values are >0
df[df['E']>0][['F','G']] # why? --->>> since df[df['E']>0] this is also a Dataframes we can chain concept learn till now.
```

**Output:**
```
F         G
A -0.856872 -1.107465
D  1.046418 -1.461521
```

#### For two conditions you can use | and & with parenthesis :(dont use `and` `or` as they are use for single elements 
#### not  on a series/array of elements)

```python
# to show my point
df['E']>0
```

**Output:**
```
A     True
B    False
C    False
D     True
Name: E, dtype: bool
```

```python
# to show my point
df['F']>1
```

**Output:**
```
A    False
B    False
C    False
D     True
Name: F, dtype: bool
```

```python
# df[(df['E']>0) and (df['F'] > 1)] # is an error -> The truth value of a Series is ambiguous.  
df[(df['E']>0) & (df['F'] > 1)] # only Dth column is returned
```

**Output:**
```
E         F         G         H
D  0.991462  1.046418 -1.461521 -0.365615
```

```python
# similarly
# df[(df['E']>0) or (df['F'] > 1)] # error
df[(df['E']>0) | (df['F'] > 1)]
```

**Output:**
```
E         F         G         H
A  0.107055 -0.856872 -1.107465 -0.069469
D  0.991462  1.046418 -1.461521 -0.365615
```

# (2d) Index setting(using set_index(value)) and Resetting(using reset_index())

```python
df
```

**Output:**
```
E         F         G         H
A  0.211382  0.277118 -0.069357  1.751781
B -1.107231  0.458712  0.533907  1.065361
C  0.230110  2.127683  0.612683 -0.938353
D -1.991244  0.719935  1.462831 -1.112004
```

```python
# Reset to default 0,1...n index
df.reset_index() # also use inplace=True to make effect permanent
```

**Output:**
```
index         E         F         G         H
0     A  0.211382  0.277118 -0.069357  1.751781
1     B -1.107231  0.458712  0.533907  1.065361
2     C  0.230110  2.127683  0.612683 -0.938353
3     D -1.991244  0.719935  1.462831 -1.112004
```

```python
df # showing resetting was not inplace
```

**Output:**
```
E         F         G         H
A  0.211382  0.277118 -0.069357  1.751781
B -1.107231  0.458712  0.533907  1.065361
C  0.230110  2.127683  0.612683 -0.938353
D -1.991244  0.719935  1.462831 -1.112004
```

```python
newind = 'CA NY WY OR'.split()
df['States'] = newind # adding new col
```

```python
df
```

**Output:**
```
E         F         G         H States
A  0.211382  0.277118 -0.069357  1.751781     CA
B -1.107231  0.458712  0.533907  1.065361     NY
C  0.230110  2.127683  0.612683 -0.938353     WY
D -1.991244  0.719935  1.462831 -1.112004     OR
```

```python
df.set_index('States') # setting different index !!! remenber it overwrittes original indexes!!! also by default not inplace
```

**Output:**
```
E         F         G         H
States                                        
CA      0.211382  0.277118 -0.069357  1.751781
NY     -1.107231  0.458712  0.533907  1.065361
WY      0.230110  2.127683  0.612683 -0.938353
OR     -1.991244  0.719935  1.462831 -1.112004
```

```python
df
```

**Output:**
```
E         F         G         H States
A  0.107055 -0.856872 -1.107465 -0.069469     CA
B -1.741066 -0.651183  0.111722  0.444997     NY
C -1.150753 -0.368783  0.882894 -1.017265     WY
D  0.991462  1.046418 -1.461521 -0.365615     OR
```

```python
df.set_index('States',inplace=True)
```

```python
df
```

**Output:**
```
E         F         G         H
States                                        
CA      0.211382  0.277118 -0.069357  1.751781
NY     -1.107231  0.458712  0.533907  1.065361
WY      0.230110  2.127683  0.612683 -0.938353
OR     -1.991244  0.719935  1.462831 -1.112004
```

## (2e) Missing Data( use `dropna()  and fillna()`) use `inplace=True` to make changes Permanent

```python
import numpy as np
import pandas as pd
df = pd.DataFrame({'A':[1,2,np.nan], 'B':[5,np.nan,np.nan],'C':[1,2,3]}) # passing dict to Dataframe make keys its column
# indexes and data being each cell data with rows indexed using 0,1,2,3,4
```

```python
df
```

**Output:**
```
A    B  C
0  1.0  5.0  1
1  2.0  NaN  2
2  NaN  NaN  3
```

```python
df.dropna() # drops row(bydefault axis = 0) with even a single NaN
```

**Output:**
```
A    B  C
0  1.0  5.0  1
```

```python
df.dropna(axis=1)
```

**Output:**
```
C
0  1
1  2
2  3
```

```python
df.dropna(thresh=2) # to set minimum no of NaN's to be found to drop that row(axis=0) or col(axis=1)
```

**Output:**
```
A    B  C
0  1.0  5.0  1
1  2.0  NaN  2
```

```python
df.fillna(value='FILL VALUE')
```

**Output:**
```
A           B  C
0           1           5  1
1           2  FILL VALUE  2
2  FILL VALUE  FILL VALUE  3
```

```python
df # not doing it inplace till now use inplace=True to do that
```

**Output:**
```
A    B  C
0  1.0  5.0  1
1  2.0  NaN  2
2  NaN  NaN  3
```

```python
df['A']
```

**Output:**
```
0    1.0
1    2.0
2    NaN
Name: A, dtype: float64
```

```python
df['A'].mean()
```

**Output:**
```
1.5
```

```python
df['A'].fillna(value=df['A'].mean())
```

**Output:**
```
0    1.0
1    2.0
2    1.5
Name: A, dtype: float64
```

# (2f) Groupby

The `groupby()` method allows you to group rows of data together and call aggregate functions

&lt;img src = 'images/groupby_func.jpg' width=200&gt;


- use `aggregate()` function to apply function over group by object to collect groups 
- use `transform(funct)`
- use `filter(funct)`

```python
import pandas as pd
# Create dataframe
data = {'Company':['GOOGLE','GOOGLE','MICROSOFT','MICROSOFT','FACEBOOK','FACEBOOK'],
       'Person':['Sam','Charlie','Amy','Vanessa','Carl','Sarah'],
       'Sales':[200,120,340,124,243,350]}
```

```python
df = pd.DataFrame(data)
```

```python
df
```

**Output:**
```
Company   Person  Sales
0     GOOGLE      Sam    200
1     GOOGLE  Charlie    120
2  MICROSOFT      Amy    340
3  MICROSOFT  Vanessa    124
4   FACEBOOK     Carl    243
5   FACEBOOK    Sarah    350
```

** `Now you can use the .groupby() method to group rows together based off of a column name`. For instance let's group based off of Company. This will create a DataFrameGroupBy object:**

```python
df.groupby('Company')
```

**Output:**
```
&lt;pandas.core.groupby.groupby.DataFrameGroupBy object at 0x10283790&gt;
```

You can save this object as a new variable:

```python
by_comp = df.groupby("Company")
```

And then call aggregate methods off the object :

```python
by_comp.mean()
```

**Output:**
```
Sales
Company         
FACEBOOK   296.5
GOOGLE     160.0
MICROSOFT  232.0
```

```python
by_comp.aggregate(np.mean)
```

**Output:**
```
Sales
Company         
FACEBOOK   296.5
GOOGLE     160.0
MICROSOFT  232.0
```

```python
by_comp.aggregate([np.max,np.min,np.mean, np.std])
```

**Output:**
```
Sales                        
           amax amin   mean         std
Company                                
FACEBOOK    350  243  296.5   75.660426
GOOGLE      200  120  160.0   56.568542
MICROSOFT   340  124  232.0  152.735065
```

```python
df.groupby('Company').mean()
```

**Output:**
```
Sales
Company         
FACEBOOK   296.5
GOOGLE     160.0
MICROSOFT  232.0
```

More examples of aggregate methods:

```python
by_comp.std()
```

**Output:**
```
Sales
Company              
FACEBOOK    75.660426
GOOGLE      56.568542
MICROSOFT  152.735065
```

```python
by_comp.min()
```

**Output:**
```
Person  Sales
Company                  
FACEBOOK      Carl    243
GOOGLE     Charlie    120
MICROSOFT      Amy    124
```

```python
by_comp.max()
```

**Output:**
```
Person  Sales
Company                  
FACEBOOK     Sarah    350
GOOGLE         Sam    200
MICROSOFT  Vanessa    340
```

```python
by_comp.count()
```

**Output:**
```
Person  Sales
Company                 
FACEBOOK        2      2
GOOGLE          2      2
MICROSOFT       2      2
```

```python
# to get all above

by_comp.describe()
```

**Output:**
```
Sales                                                        
          count   mean         std    min     25%    50%     75%    max
Company                                                                
FACEBOOK    2.0  296.5   75.660426  243.0  269.75  296.5  323.25  350.0
GOOGLE      2.0  160.0   56.568542  120.0  140.00  160.0  180.00  200.0
MICROSOFT   2.0  232.0  152.735065  124.0  178.00  232.0  286.00  340.0
```

```python
by_comp.describe().transpose()
```

**Output:**
```
Company        FACEBOOK      GOOGLE   MICROSOFT
Sales count    2.000000    2.000000    2.000000
      mean   296.500000  160.000000  232.000000
      std     75.660426   56.568542  152.735065
      min    243.000000  120.000000  124.000000
      25%    269.750000  140.000000  178.000000
      50%    296.500000  160.000000  232.000000
      75%    323.250000  180.000000  286.000000
      max    350.000000  200.000000  340.000000
```

```python
by_comp.describe().transpose()['GOOGLE']
```

**Output:**
```
Sales  count      2.000000
       mean     160.000000
       std       56.568542
       min      120.000000
       25%      140.000000
       50%      160.000000
       75%      180.000000
       max      200.000000
Name: GOOGLE, dtype: float64
```

```python
# transpose can br done using just T

by_comp.describe().T['GOOGLE']
```

**Output:**
```
Sales  count      2.000000
       mean     160.000000
       std       56.568542
       min      120.000000
       25%      140.000000
       50%      160.000000
       75%      180.000000
       max      200.000000
Name: GOOGLE, dtype: float64
```

# (2g) Mergeing ,Joining and Concatenation

- There are three ways of combining two DataFrames namely merging ,joining ,concatenating.

Lets crete dataFrames object first to illustrate it:

```python
import pandas as pd

df1 = pd.DataFrame( {'A': ['A0','A1','A2','A3'], 'B':['B0','B1','B2','B3'], 'C':['C0','C1','C2','C3'], 
                   'D' : ['D0','D1','D2','D3']})

df2 = pd.DataFrame( {'A':['A4','A5','A6','A7'], 'B':['B4','B5','B6','B7'], 'C':['C4','C5','C6','C7'], 
                   'D' : ['D4','D5','D6','D7']})


df3 = pd.DataFrame( {'A':['A8','A9','A10','A11'], 'B':['B8','B9','B10','B11'], 'C':['C8','C9','C10','C11'], 
                   'D' : ['D8','D9','D10','D11']})
```

```python
print(df1)
print('----------')

print(df2)
print('----------')

print(df3)
print('----------')
```

**Output:**
```
A   B   C   D
0  A0  B0  C0  D0
1  A1  B1  C1  D1
2  A2  B2  C2  D2
3  A3  B3  C3  D3
----------
    A   B   C   D
0  A4  B4  C4  D4
1  A5  B5  C5  D5
2  A6  B6  C6  D6
3  A7  B7  C7  D7
----------
     A    B    C    D
0   A8   B8   C8   D8
1   A9   B9   C9   D9
2  A10  B10  C10  D10
3  A11  B11  C11  D11
----------
```

# Concatenation using `pd.concat()` 

- Concatination basically glues together DataFrames.Keep in mind that dimensions should match along the axis u are performing concatenation

```python
df_concat_rows = pd.concat([df1,df2,df3]) # pass any sequence either list,tuple or dict
df_concat_cols = pd.concat([df1,df2,df3],axis=1)
```

```python
df_concat_rows
```

**Output:**
```
A    B    C    D
0   A0   B0   C0   D0
1   A1   B1   C1   D1
2   A2   B2   C2   D2
3   A3   B3   C3   D3
0   A4   B4   C4   D4
1   A5   B5   C5   D5
2   A6   B6   C6   D6
3   A7   B7   C7   D7
0   A8   B8   C8   D8
1   A9   B9   C9   D9
2  A10  B10  C10  D10
3  A11  B11  C11  D11
```

```python
df_concat_cols
```

**Output:**
```
A   B   C   D   A   B   C   D    A    B    C    D
0  A0  B0  C0  D0  A4  B4  C4  D4   A8   B8   C8   D8
1  A1  B1  C1  D1  A5  B5  C5  D5   A9   B9   C9   D9
2  A2  B2  C2  D2  A6  B6  C6  D6  A10  B10  C10  D10
3  A3  B3  C3  D3  A7  B7  C7  D7  A11  B11  C11  D11
```

# Merging use `pd.merge()`

- merging is done based on some key(column) available in both mergeable DataFrames
- can be of four type ,default is inner ; others are left ,right,outer.

```python
import pandas as pd

df1 = pd.DataFrame({'KEY':['K0','K1','K2','K3'], 'A': ['A0','A1','A2','A3'], 'B':['B0','B1','B2','B3']})

df2 = pd.DataFrame( {'KEY':['K0','K1','K2','K3'], 'A':['A4','A5','A6','A7'], 'B':['B4','B5','B6','B7']})
```

```python
df1
```

**Output:**
```
KEY   A   B
0  K0  A0  B0
1  K1  A1  B1
2  K2  A2  B2
3  K3  A3  B3
```

```python
df2
```

**Output:**
```
KEY   A   B
0  K0  A4  B4
1  K1  A5  B5
2  K2  A6  B6
3  K3  A7  B7
```

```python
pd.merge(df1,df2, on='KEY')
```

**Output:**
```
KEY A_x B_x A_y B_y
0  K0  A0  B0  A4  B4
1  K1  A1  B1  A5  B5
2  K2  A2  B2  A6  B6
3  K3  A3  B3  A7  B7
```

```python
#complicated Examples - lets see all four type of merge

df1 = pd.DataFrame({'KEY1':['K0','K0','K1','K2'],'KEY2':['K0','K1','K0','K1'], 'A': ['A0','A1','A2','A3'],
                    'B':['B0','B1','B2','B3']})
df2 = pd.DataFrame({'KEY1':['K0','K1','K1','K2'],'KEY2':['K0','K0','K0','K0'], 'A':['A4','A5','A6','A7'], 
                    'B':['B4','B5','B6','B7']})
```

```python
df1
```

**Output:**
```
KEY1 KEY2   A   B
0   K0   K0  A0  B0
1   K0   K1  A1  B1
2   K1   K0  A2  B2
3   K2   K1  A3  B3
```

```python
df2
```

**Output:**
```
KEY1 KEY2   A   B
0   K0   K0  A4  B4
1   K1   K0  A5  B5
2   K1   K0  A6  B6
3   K2   K0  A7  B7
```

```python
pd.merge(df1,df2,on=['KEY1','KEY2']) # can u find out how it is done :/ search on google if not! 

# Hint
# inner is intersection of (key1,key2) of both DF's
```

**Output:**
```
KEY1 KEY2 A_x B_x A_y B_y
0   K0   K0  A0  B0  A4  B4
1   K1   K0  A2  B2  A5  B5
2   K1   K0  A2  B2  A6  B6
```

```python
pd.merge(df1,df2,on=['KEY1','KEY2'], how='outer') # outer is union
```

**Output:**
```
KEY1 KEY2  A_x  B_x  A_y  B_y
0   K0   K0   A0   B0   A4   B4
1   K0   K1   A1   B1  NaN  NaN
2   K1   K0   A2   B2   A5   B5
3   K1   K0   A2   B2   A6   B6
4   K2   K1   A3   B3  NaN  NaN
5   K2   K0  NaN  NaN   A7   B7
```

```python
pd.merge(df1,df2,on=['KEY1','KEY2'], how='left')
```

**Output:**
```
KEY1 KEY2 A_x B_x  A_y  B_y
0   K0   K0  A0  B0   A4   B4
1   K0   K1  A1  B1  NaN  NaN
2   K1   K0  A2  B2   A5   B5
3   K1   K0  A2  B2   A6   B6
4   K2   K1  A3  B3  NaN  NaN
```

```python
pd.merge(df1,df2,on=['KEY1','KEY2'], how='right')
```

**Output:**
```
KEY1 KEY2  A_x  B_x A_y B_y
0   K0   K0   A0   B0  A4  B4
1   K1   K0   A2   B2  A5  B5
2   K1   K0   A2   B2  A6  B6
3   K2   K0  NaN  NaN  A7  B7
```

# Joining using `join()`

- joining is basically combining columns over differently - index DataFrames(not based on columns as in merge) and is called upon DataFrame object.
- also of four tyoe default being left this time

```python
df1 = pd.DataFrame(data = {'A': ['A0','A1','A2','A3'], 'B':['B0','B1','B2','B3']}, index=['K0','K1','K2','K3'] )
df2 = pd.DataFrame(data = {'C': ['A4','A5','A6','A7'], 'D':['B4','B5','B6','B7']}, index=['K0','K2','K2','K3'])
```

```python
df1
```

**Output:**
```
A   B
K0  A0  B0
K1  A1  B1
K2  A2  B2
K3  A3  B3
```

```python
df2
```

**Output:**
```
C   D
K0  A4  B4
K2  A5  B5
K2  A6  B6
K3  A7  B7
```

```python
df1.join(df2, how ='left')
```

**Output:**
```
A   B    C    D
K0  A0  B0   A4   B4
K1  A1  B1  NaN  NaN
K2  A2  B2   A5   B5
K2  A2  B2   A6   B6
K3  A3  B3   A7   B7
```

```python
df1.join(df2,how='right')
```

**Output:**
```
A   B   C   D
K0  A0  B0  A4  B4
K2  A2  B2  A5  B5
K2  A2  B2  A6  B6
K3  A3  B3  A7  B7
```

# (2h) Operations

There are lots of operations with pandas that will be really useful to you, but don't fall into any distinct category. Let's show them here in this lecture:

```python
import pandas as pd
df = pd.DataFrame({'col1':[1,2,3,4],'col2':[444,555,666,444],'col3':['abc','def','ghi','xyz']})
df
```

**Output:**
```
col1  col2 col3
0     1   444  abc
1     2   555  def
2     3   666  ghi
3     4   444  xyz
```

### Info about Unique Values

```python
df['col2'].unique()
```

**Output:**
```
array([444, 555, 666], dtype=int64)
```

```python
df['col2'].nunique()
```

**Output:**
```
3
```

```python
df['col2'].value_counts()
```

**Output:**
```
444    2
555    1
666    1
Name: col2, dtype: int64
```

### Selecting Data

```python
#Select from DataFrame using criteria from multiple columns
newdf = df[(df['col1']>2) & (df['col2']==444)]
```

```python
newdf
```

**Output:**
```
col1  col2 col3
3     4   444  xyz
```

### Applying Functions

```python
def times2(x):
    return x*2
```

```python
df['col1'].apply(times2)
```

**Output:**
```
0    2
1    4
2    6
3    8
Name: col1, dtype: int64
```

```python
df['col3'].apply(len)
```

**Output:**
```
0    3
1    3
2    3
3    3
Name: col3, dtype: int64
```

```python
df['col1'].sum()
```

**Output:**
```
10
```

## ** Permanently Removing a Column**

```python
del df['col1']
```

```python
df
```

**Output:**
```
col2 col3
0   444  abc
1   555  def
2   666  ghi
3   444  xyz
```

##  ** Get column and index names: **

```python
df.columns
```

**Output:**
```
Index(['col2', 'col3'], dtype='object')
```

```python
df.index
```

**Output:**
```
RangeIndex(start=0, stop=4, step=1)
```

## ** Sorting and Ordering a DataFrame:**

```python
df
```

**Output:**
```
col2 col3
0   444  abc
1   555  def
2   666  ghi
3   444  xyz
```

```python
df.sort_values(by='col2') #inplace=False by default
```

**Output:**
```
col2 col3
0   444  abc
3   444  xyz
1   555  def
2   666  ghi
```

## ** Find Null Values or Check for Null Values**

```python
df.isnull()
```

**Output:**
```
col2   col3
0  False  False
1  False  False
2  False  False
3  False  False
```

# Data Input and Output

This notebook is the reference code for getting input and output, pandas can read a variety of file types using its pd.read_ methods. Let's take a look at the most common data types:

```python
import numpy as np
import pandas as pd
```

```python
df
```

**Output:**
```
col1  col2 col3
0     1   444  abc
1     2   555  def
2     3   666  ghi
3     4   444  xyz
```

## CSV



### CSV Output

```python
df
```

**Output:**
```
col1  col2 col3
0     1   444  abc
1     2   555  def
2     3   666  ghi
3     4   444  xyz
```

```python
df.to_csv('example',index =False)
```

# CSV input

```python
df = pd.read_csv('example')
df
```

**Output:**
```
col1  col2 col3
0     1   444  abc
1     2   555  def
2     3   666  ghi
3     4   444  xyz
```

```python
df.to_excel('Excel_Sample.xlsx',sheet_name='Sheet1')
```

# DataFrame/Series object also have plot function to plot values with kind parameter to represent different types of graphs

```python
%matplotlib inline
```

```python
df
```

**Output:**
```
E         F         G         H
States                                        
CA      0.211382  0.277118 -0.069357  1.751781
NY     -1.107231  0.458712  0.533907  1.065361
WY      0.230110  2.127683  0.612683 -0.938353
OR     -1.991244  0.719935  1.462831 -1.112004
```

```python
df.plot(kind='bar')
```


![Output](data:image/png;base64,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)


**Output:**
```
&lt;matplotlib.axes._subplots.AxesSubplot at 0x102abe10&gt;
```

```python
df.plot(kind='hist')
```


![Output](data:image/png;base64,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)


**Output:**
```
&lt;matplotlib.axes._subplots.AxesSubplot at 0x10313cb0&gt;
```