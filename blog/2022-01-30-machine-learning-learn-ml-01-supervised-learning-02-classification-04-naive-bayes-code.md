---
title: "Dataset Loading"
slug: machine-learning-learn-ml-01-supervised-learning-02-classification-04-naive-bayes-code
date: 2022-01-30
authors: [shaurya]
tags: [machine-learning, python, data-science, classification]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/02-Classification/04-Naive-Bayes-Code.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

## Naive Bayes classifier code form scratch

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```

```python
def prior(Y_train, label):
    '''
         label means which class to predict for
         returns P(Y=label) 
    '''
    
    num = np.sum(Y_train==label)
    denom = Y_train.shape[0]
    return num / denom
```

```python
def likelihood(X_train, Y_train, Xquery, label):  
    # X and Y should be numpy arrays
    '''
        returns P(Xquery|Y=label) = P(Xquery0|Y=label)P(Xquery1|Y=label)P(Xquery2|Y=label)....so on. 
    '''
        
    if X_train.ndim == 1 : # hence number of given features is only 1.
        filtered_X_train = X_train[Y_train==label]
        num = np.sum(filtered_X_train==Xquery)
        denom = np.sum(Y==label)
        return num/denom
    
    prod = 1
    denom = np.sum(Y_train==label)
    for i in range(Xquery.shape[0]): # for more than one feature.
        ith_feature = X_train[:,i]
        filtered_X_train = ith_feature[Y_train == label]
        num = np.sum(filtered_X_train == Xquery[i])
        prod *=  (num / denom)
        
    return prod
```

```python
def posterior_proportional(X_train, Y_train, Xquery, label) :
    '''
        returns posterior is proportional to likelihood times prior
         or P(Y=label|Xquery) = P(Xquery|Y=label) * P(Y=label)  
    '''
    likelihood_a = likelihood(X_train, Y_train, Xquery, label) 
    prior_b = prior(Y_train,label)
    return (likelihood_a * prior_b)
```

```python
def NBClassifier(X_train, Y_train, Xquery) :
    '''
        returns max class for Xquery 
    '''
    # we need to find out P(Y=c|Xquery) and return max argument out of them so to classify. 
#     X_train = X_train.values
#     Y_train = Y_train.values


   # storing individual probabilities per class
    total_prob = 0
    prob_list = []
    
    total_class = np.unique(Y)
    max_prob_class = None
    max_prob = 0
    for label in total_class : 
        prob = posterior_proportional(X_train, Y_train, Xquery ,label)
        total_prob += prob
        prob_list.append(prob)
        if prob > max_prob :
            max_prob_class = label
            max_prob = prob
    
    prob_list = np.array(prob_list) # can also print the possible probabilty for particular  label
#     print(prob_list)
    prob_list /= total_prob
    return max_prob_class, prob_list
```

```python
def predict(X_train, Y_train, X_test):
    Y_pred = []
    for Xquery in X_test:
        label, prob_list = NBClassifier(X_train, Y_train, Xquery)
        Y_pred.append(label)

    Y_pred = np.array(Y_pred)
    return Y_pred
```

```python
def accuracy(Y_pred, Y_test):
    accuracy = np.sum(Y_pred == Y_test) * 100 / Y_pred.shape[0]
    return accuracy
```

# Dataset Loading

```python
# https://www.kaggle.com/ymotonskillupai/mushroomscsv#mushrooms.csv ->  dataset 
# downloaded locally in dataset folder only
import pandas as pd
df = pd.read_csv('Datasets/mushrooms.csv')
df.head(n=5)
```

**Output:**
```
type cap_shape cap_surface cap_color bruises odor gill_attachment  \
0    p         x           s         n       t    p               f   
1    e         x           s         y       t    a               f   
2    e         b           s         w       t    l               f   
3    p         x           y         w       t    p               f   
4    e         x           s         g       f    n               f   

  gill_spacing gill_size gill_color   ...   stalk_surface_below_ring  \
0            c         n          k   ...                          s   
1            c         b          k   ...                          s   
2            c         b          n   ...                          s   
3            c         n          n   ...                          s   
4            w         b          k   ...                          s   

  stalk_color_above_ring stalk_color_below_ring veil_type veil_color  \
0                      w                      w         p          w   
1                      w                      w         p          w   
2                      w                      w         p          w   
3                      w                      w         p          w   
4                      w                      w         p          w   

  ring_number ring_type spore_print_color population habitat  
0           o         p                 k          s       u  
1           o         p                 n          n       g  
2           o         p                 n          n       m  
3           o         p                 k          s       u  
4           o         e                 n          a       g  

[5 rows x 23 columns]
```

```python
df.shape
```

**Output:**
```
(8124, 23)
```

```python
df.info()
```

**Output:**
```
&lt;class 'pandas.core.frame.DataFrame'&gt;
RangeIndex: 8124 entries, 0 to 8123
Data columns (total 23 columns):
type                        8124 non-null object
cap_shape                   8124 non-null object
cap_surface                 8124 non-null object
cap_color                   8124 non-null object
bruises                     8124 non-null object
odor                        8124 non-null object
gill_attachment             8124 non-null object
gill_spacing                8124 non-null object
gill_size                   8124 non-null object
gill_color                  8124 non-null object
stalk_shape                 8124 non-null object
stalk_root                  8124 non-null object
stalk_surface_above_ring    8124 non-null object
stalk_surface_below_ring    8124 non-null object
stalk_color_above_ring      8124 non-null object
stalk_color_below_ring      8124 non-null object
veil_type                   8124 non-null object
veil_color                  8124 non-null object
ring_number                 8124 non-null object
ring_type                   8124 non-null object
spore_print_color           8124 non-null object
population                  8124 non-null object
habitat                     8124 non-null object
dtypes: object(23)
memory usage: 729.9+ KB
```

```python
df.describe()
```

**Output:**
```
type cap_shape cap_surface cap_color bruises  odor gill_attachment  \
count   8124      8124        8124      8124    8124  8124            8124   
unique     2         6           4        10       2     9               2   
top        e         x           y         n       f     n               f   
freq    4208      3656        3244      2284    4748  3528            7914   

       gill_spacing gill_size gill_color   ...   stalk_surface_below_ring  \
count          8124      8124       8124   ...                       8124   
unique            2         2         12   ...                          4   
top               c         b          b   ...                          s   
freq           6812      5612       1728   ...                       4936   

       stalk_color_above_ring stalk_color_below_ring veil_type veil_color  \
count                    8124                   8124      8124       8124   
unique                      9                      9         1          4   
top                         w                      w         p          w   
freq                     4464                   4384      8124       7924   

       ring_number ring_type spore_print_color population habitat  
count         8124      8124              8124       8124    8124  
unique           3         5                 9          6       7  
top              o         p                 w          v       d  
freq          7488      3968              2388       4040    3148  

[4 rows x 23 columns]
```

```python
df.shape
```

**Output:**
```
(8124, 23)
```

# Encoding - preprocessing Step

```python
# data is categorical, but for being used by algo , 
# we need to encode them into nominal values(associating integer to class group)
from sklearn.preprocessing import LabelEncoder # Encode labels with value between 0 and n_classes-1 .
l = LabelEncoder() # encodes array like of shape(n_samples)
df = df.apply(l.fit_transform,axis = 0)
```

```python
# see now we got our data whom to apply our algorithm
df.head(n = 10)
```

**Output:**
```
type  cap_shape  cap_surface  cap_color  bruises  odor  gill_attachment  \
0     1          5            2          4        1     6                1   
1     0          5            2          9        1     0                1   
2     0          0            2          8        1     3                1   
3     1          5            3          8        1     6                1   
4     0          5            2          3        0     5                1   
5     0          5            3          9        1     0                1   
6     0          0            2          8        1     0                1   
7     0          0            3          8        1     3                1   
8     1          5            3          8        1     6                1   
9     0          0            2          9        1     0                1   

   gill_spacing  gill_size  gill_color   ...     stalk_surface_below_ring  \
0             0          1           4   ...                            2   
1             0          0           4   ...                            2   
2             0          0           5   ...                            2   
3             0          1           5   ...                            2   
4             1          0           4   ...                            2   
5             0          0           5   ...                            2   
6             0          0           2   ...                            2   
7             0          0           5   ...                            2   
8             0          1           7   ...                            2   
9             0          0           2   ...                            2   

   stalk_color_above_ring  stalk_color_below_ring  veil_type  veil_color  \
0                       7                       7          0           2   
1                       7                       7          0           2   
2                       7                       7          0           2   
3                       7                       7          0           2   
4                       7                       7          0           2   
5                       7                       7          0           2   
6                       7                       7          0           2   
7                       7                       7          0           2   
8                       7                       7          0           2   
9                       7                       7          0           2   

   ring_number  ring_type  spore_print_color  population  habitat  
0            1          4                  2           3        5  
1            1          4                  3           2        1  
2            1          4                  3           2        3  
3            1          4                  2           3        5  
4            1          0                  3           0        1  
5            1          4                  2       
... (output truncated)
```

# Genearting data for prediction

```python
X = df[df.columns[1:]] # fetures of mushrooms
Y = df['type'] # first coumn in our dataset is the type of mushrooms
```

```python
X.shape
```

**Output:**
```
(8124, 22)
```

```python
Y.shape
```

**Output:**
```
(8124,)
```

```python
X = X.values
Y = Y.values
```

```python
X
```

**Output:**
```
array([[5, 2, 4, ..., 2, 3, 5],
       [5, 2, 9, ..., 3, 2, 1],
       [0, 2, 8, ..., 3, 2, 3],
       ...,
       [2, 2, 4, ..., 0, 1, 2],
       [3, 3, 4, ..., 7, 4, 2],
       [5, 2, 4, ..., 4, 1, 2]])
```

```python
Y
```

**Output:**
```
array([1, 0, 0, ..., 0, 1, 0])
```

# Splitting Data

```python
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.1, random_state = 101)
```

```python
X_train.shape
```

**Output:**
```
(7311, 22)
```

```python
X_test.shape
```

**Output:**
```
(813, 22)
```

```python
# applying our Algorithm
```

```python
Y_pred = predict(X_train, Y_train , X_test)
```

```python
Y_pred
```

**Output:**
```
array([1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1,
       0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1,
       1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1,
       1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
       1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0,
       0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0,
       1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0,
       0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
       0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1,
       0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
       0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
       1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1,
       0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1,
       1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1,
       0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
       1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0,
       1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0,
       0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0,
       0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0,
       1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
       1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1,
       0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1,
       1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
       1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1,
       0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
       0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0,
       0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1,
       1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
       0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1,
       1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0,
       1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1,
       0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
       1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0,
       1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1,
       1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
       0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1,
       1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1])
```

```python
accuracy(Y_pred,Y_test)
```

**Output:**
```
99.6309963099631
```

# Naive Bayes using Sklearn

```python
from sklearn.naive_bayes import ComplementNB
```

```python
mnb = ComplementNB()
```

```python
mnb.fit(X_train,Y_train)
```

**Output:**
```
ComplementNB(alpha=1.0, class_prior=None, fit_prior=True, norm=False)
```

```python
Y_pred = mnb.predict(X_test)
```

```python
np.sum(Y_pred == Y_test) / X_test.shape[0]
```

**Output:**
```
0.8068880688806888
```

```python
def func(a):
    global a
    a = a + 10
    return a
a = 5
func(a)
print(a)
```