---
title: "Challenge - Chemicals Segregation"
slug: machine-learning-learn-ml-01-supervised-learning-02-classification-assignment3-logistic-chemicals
date: 2022-02-04
authors: [shaurya]
tags: [machine-learning, python, data-science, classification]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/02-Classification/Assignment3-logistic(chemicals)%20.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

# Challenge - Chemicals Segregation

Chemical Segregation(Classification)
A chemist has two chemical flasks labelled 1 and 0 which contains two different chemicals. He extracted 3 features from these chemicals in order to distinguish between them. You are provided with the results derived by the chemist and your task is to create a model that will label chemical 0 or 1 given its three features.


Data Description
You are provided with two files test and train.

Train: This files consists of two csv files LogisticXtrain and LogisticYtrain. Xtrain consists of the features whereas Ytrain consists of the labels associated with the features.

Test: This file consists of two files LogisticXtest consisting of the features of test data and sample_output which represents in which format your solution csv must be submitted.

You need to implement any classifier from scratch, don't use any sklearn based classifier.

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

%matplotlib inline
```

# Classifier from Scratch

```python
# returning hx for each sample hence, a numpy array of size (m X 1)
def hypothesis(X,theta):
    return np.sum(X*theta[1:], axis=1).reshape((-1,1)) + theta[0] # using numpy broadcasting
```

```python
# retuning sigmoid for each sample hence, a numpy array of size (m X 1)
def sigmoid(X,theta):
    hx = hypothesis(X,theta)
    return 1.0 / (1.0 + np.exp(-1*hx))
```

```python
# returning scalar value as error
def negative_log_likelihood(X,Y,theta):
    g_h_x = sigmoid(X,theta)    
    log_liklihood = np.sum(Y * np.log2(g_h_x) +  (1-Y) * np.log2(1 - g_h_x) )
    return  -1 * log_liklihood
```

```python
# return gradients w.r.t theta ,size = (n+1,)
def gradient(X,Y,theta):
    grad = np.zeros(X.shape[1] + 1)
    hx = sigmoid(X,theta)
    grad[0] = np.sum(hx - Y)
    for i in range(1, X.shape[1] + 1):
        mul = X[:,i-1].reshape((-1,1))
        grad[i] = np.sum((hx - Y)*mul)
    
    return grad
```

```python
# goal of this function is to minimize the ``Negative of log of likelihood`` using graident descent
# code is similar to Linear Regression but hypothesis function is different

def classifier(X,Y,learning_rate=0.0001):
    # Y should have a shape with atleast two axis, otherwise use reshape((-1,1))
    theta = np.zeros(X.shape[1] + 1)
    error = []
    err = negative_log_likelihood(X,Y,theta)
    error.append(err)
    while True:        
#         print(error[-1])
        grad = gradient(X,Y,theta)
        theta = theta - learning_rate * grad
        err = negative_log_likelihood(X,Y,theta)
        if abs(err - error[-1]) < 0.0001:
            break
        error.append(err)
        
    return theta
```

```python
def predict(X_test, theta):
    import numpy as np
    g_h_x = sigmoid(X_test,theta)
    Y_pred = []
    for i in range(X_test.shape[0]):
        if g_h_x[i] >= 0.5:
            Y_pred.append(1)
        else:            
            Y_pred.append(0)
    return np.array(Y_pred)

    
def accuracy(Y_actual, Y_predict):
    total = Y_actual.shape[0]
    
    diff = np.sum(Y_actual == Y_predict)
    return diff / total
```

```python
# loading data
X = pd.read_csv('Datasets/Assignment3_Logistic_X_Train.csv')
Y = pd.read_csv('Datasets/Assignment3_Logistic_Y_Train.csv')
test = pd.read_csv('Datasets/Assignment3_Logistic_X_Test.csv')
```

```python
X.head()
```

**Output:**
```
f1        f2        f3
0 -1.239375  0.749101 -0.528515
1 -1.036070  0.801436 -1.283712
2 -0.615579  1.579521 -1.391927
3  1.335978  1.348651  1.433564
4  0.658925  1.300019  0.571603
```

```python
X.shape
```

**Output:**
```
(3000, 3)
```

```python
Y.shape
```

**Output:**
```
(3000, 1)
```

```python
test.shape
```

**Output:**
```
(1000, 3)
```

```python
# preprocessing
from sklearn.preprocessing import StandardScaler
s = StandardScaler()
s.fit_transform(X)
s.transform(test)
```

**Output:**
```
array([[-0.58096727, -1.23196981, -2.10386172],
       [-0.93642077,  0.43931113, -0.36596031],
       [ 1.43773502,  0.91090225,  1.08581064],
       ...,
       [-0.89542577, -0.05073748, -0.67463414],
       [-0.40465638,  0.8263143 , -0.84593545],
       [ 0.39940977, -0.40861529,  0.29533219]])
```

```python
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.25, random_state=11)
```

```python
theta = classifier(X_train.values,Y_train.values)
```

```python
theta
```

**Output:**
```
array([-4.65946819, -4.20626944,  3.45533749, -2.4243403 ])
```

```python
Y_pred = predict(X_test.values, theta)
```

```python
Y_pred.shape
```

**Output:**
```
(750,)
```

```python
acc = accuracy(Y_test,Y_pred.reshape((-1,1)))
```

```python
acc
```

**Output:**
```
label    0.996
dtype: float64
```

```python
# output file
```

```python
output = predict(test.values,theta)
output.dtype
```

**Output:**
```
dtype('int32')
```

```python
output.shape
```

**Output:**
```
(1000,)
```

```python
df = pd.DataFrame(output)
```

```python
df.columns = ['label']
```

```python
df.head()
```

**Output:**
```
label
0      1
1      1
2      0
3      1
4      1
```

```python
df.to_csv('Datasets/Assignment3_Logistic_scratch_output.csv',index=False)
```

```python
df = pd.read_csv('Datasets/Assignment3_Logistic_scratch_output.csv')
```

```python
df
```

**Output:**
```
label
0        1
1        1
2        0
3        1
4        1
5        1
6        0
7        1
8        0
9        0
10       0
11       1
12       1
13       1
14       1
15       0
16       1
17       0
18       1
19       0
20       1
21       0
22       1
23       0
24       1
25       1
26       0
27       0
28       0
29       1
..     ...
970      1
971      1
972      0
973      1
974      0
975      0
976      0
977      1
978      0
979      0
980      1
981      0
982      1
983      1
984      0
985      1
986      1
987      0
988      1
989      1
990      0
991      0
992      0
993      1
994      1
995      0
996      0
997      1
998      1
999      0

[1000 rows x 1 columns]
```

## using SKlearn

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```

```python
# loading data
X = pd.read_csv('Datasets/Assignment3_Logistic_X_Train.csv')
Y = pd.read_csv('Datasets/Assignment3_Logistic_Y_Train.csv')
test = pd.read_csv('Datasets/Assignment3_Logistic_X_Test.csv')
```

```python
# preprocessing
from sklearn.preprocessing import StandardScaler
s = StandardScaler()
s.fit_transform(X)
s.transform(test)
```

**Output:**
```
array([[-0.58096727, -1.23196981, -2.10386172],
       [-0.93642077,  0.43931113, -0.36596031],
       [ 1.43773502,  0.91090225,  1.08581064],
       ...,
       [-0.89542577, -0.05073748, -0.67463414],
       [-0.40465638,  0.8263143 , -0.84593545],
       [ 0.39940977, -0.40861529,  0.29533219]])
```

```python
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.25)
```

```python
Y_train = np.ravel(Y_train)
```

```python
Y_train.shape
```

**Output:**
```
(2250,)
```

```python
from sklearn.linear_model import LogisticRegression
```

```python
model = LogisticRegression(solver='lbfgs')
```

```python
model.fit(X_train,Y_train)
```

**Output:**
```
LogisticRegression(C=1.0, class_weight=None, dual=False, fit_intercept=True,
          intercept_scaling=1, max_iter=100, multi_class='warn',
          n_jobs=None, penalty='l2', random_state=None, solver='lbfgs',
          tol=0.0001, verbose=0, warm_start=False)
```

```python
model.coef_
```

**Output:**
```
array([[-3.74054432,  3.00706952, -2.20505995]])
```

```python
model.intercept_
```

**Output:**
```
array([-3.94248248])
```

```python
Y_test  = np.ravel(Y_test)
```

```python
Y_test.shape
```

**Output:**
```
(750,)
```

```python
Y_pred = model.predict(X_test)
```

```python
Y_pred.shape
```

**Output:**
```
(750,)
```

```python
output = model.predict(test)
```

```python
output.shape
```

**Output:**
```
(1000,)
```

```python
output
```

**Output:**
```
array([1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,
       1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
       0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1,
       0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1,
       1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0,
       0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1,
       1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1,
       0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
       1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0,
       1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0,
       0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0,
       0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0,
       1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
       0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1,
       1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0,
       1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0,
       1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1,
       1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0,
       0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1,
       1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1,
       1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1,
       1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0,
       1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1,
       0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1,
       1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0,
       0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
       1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1,
       0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
       1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0,
       0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0,
       0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1,
       1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
       1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1,
       1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1,
       0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
       0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1,
       0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,
       0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
       1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
       1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1,
       1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0,
       
... (output truncated)
```

```python
model.score(X_test,Y_test)
```

**Output:**
```
0.9946666666666667
```

```python
df = pd.DataFrame(output)
```

```python
df.columns = ['label']
```

```python
df.to_csv('Datasets/Assignment3_Logistic_output.csv',index=False)
```

```python
df = pd.read_csv('Datasets/Assignment3_Logistic_output.csv')
```

```python
df
```

**Output:**
```
label
0        1
1        1
2        0
3        1
4        1
5        1
6        0
7        1
8        0
9        0
10       0
11       1
12       1
13       1
14       1
15       0
16       1
17       0
18       1
19       0
20       1
21       0
22       1
23       0
24       1
25       1
26       0
27       0
28       0
29       1
..     ...
970      1
971      1
972      0
973      1
974      0
975      0
976      0
977      1
978      0
979      0
980      1
981      0
982      1
983      1
984      0
985      1
986      1
987      0
988      1
989      1
990      0
991      0
992      0
993      1
994      1
995      0
996      0
997      1
998      1
999      0

[1000 rows x 1 columns]
```