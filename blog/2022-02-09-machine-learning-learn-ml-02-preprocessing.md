---
title: "PreProcessing"
slug: machine-learning-learn-ml-02-preprocessing
date: 2022-02-09
authors: [shaurya]
tags: [machine-learning, python, data-science, data-preprocessing]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/02-Preprocessing.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

#                                               PreProcessing

### Missing values on numerical data

```python
from sklearn.impute import SimpleImputer
import numpy as np
import pandas as pd
```

```python
imp=SimpleImputer()
```

```python
X_train = [[np.nan, 1, 2], [3, np.nan, 4], [5, np.nan, 6]]
X_test = [[np.nan, 10, 10], [120, np.nan, 600], [10, np.nan, 30]]
```

```python
X_train= imp.fit_transform(X_train)
X_test=imp.transform(X_test)
print(X_train)
print(X_test)
```

**Output:**
```
[[4. 1. 2.]
 [3. 1. 4.]
 [5. 1. 6.]]
[[  4.  10.  10.]
 [120.   1. 600.]
 [ 10.   1.  30.]]
```

### Encoding on categorical data

```python
from sklearn.preprocessing import LabelEncoder

le=LabelEncoder()

le.fit_transform(["paris", "paris", "tokyo", "amsterdam"])
```

**Output:**
```
array([1, 1, 2, 0], dtype=int32)
```

There is a problem here. Here the machine learning model understands that tokyo has higher value than paris and then amsterdam. That is not the case. These are not ordered categories and we cannot compare them. This can be done on sizes like small , medium and large

We should prevent machine learning model to think that tokyo is greater than paris and amsterdam. For this we gonna use dummy variables. This can be done in two ways

#### using get_dummies from pandas

```python
dummy=pd.get_dummies(["paris", "paris", "tokyo", "amsterdam"])
dummy
```

**Output:**
```
amsterdam  paris  tokyo
0          0      1      0
1          0      1      0
2          0      0      1
3          1      0      0
```

#### using OneHotEncoder from sklearn

```python
from sklearn.preprocessing import OneHotEncoder
```

```python
ohe=OneHotEncoder()
cat=[["paris", "paris", "tokyo", "amsterdam"]]
```

```python
cate=ohe.fit_transform(cat).toarray()
```

```python
print(cate)
```

**Output:**
```
[[1. 1. 1. 1.]]
```

### Splitting the data into train and test

```python
from sklearn.model_selection import train_test_split
```

```python
X, y = np.arange(10).reshape((5, 2)), range(5)
```

```python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
```

## Feature Scaling

#### standard scaling is must since it helps to compute faster by many ml models as many models uses euclidean distance



#### x train and x test should be scaled on same basis, hence we use fit transform in train and transform in test 
####  The reason is that we want to pretend that the test data is “new, unseen data.” We use the test dataset to get a good estimate of how our model performs on any new data.
#### Now, in a real application, the new, unseen data could be just 1 data point that we want to classify. (How do we estimate mean and standard deviation if we have only 1 data point?) That’s an intuitive case to show why we need to keep and use the training data parameters for scaling the test set.

```python
from sklearn.preprocessing import StandardScaler
```

```python
X_train = [[0, 0], [0, 0], [2, 10], [91, 199]]
X_test=[[187,190], [91, 19]]
scaler = StandardScaler()
```

```python
X_t= scaler.fit_transform(X_train)
X_tes=scaler.transform(X_test)
print(X_t)
print(X_tes)
```

**Output:**
```
[[-0.59426437 -0.61597805]
 [-0.59426437 -0.61597805]
 [-0.54314485 -0.49808751]
 [ 1.73167358  1.73004362]]
[[ 4.18541032  1.62394213]
 [ 1.73167358 -0.39198603]]
```