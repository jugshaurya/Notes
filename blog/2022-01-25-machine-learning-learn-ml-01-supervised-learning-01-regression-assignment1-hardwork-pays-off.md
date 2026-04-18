---
title: "Using code from Scratch"
slug: machine-learning-learn-ml-01-supervised-learning-01-regression-assignment1-hardwork-pays-off
date: 2022-01-25
authors: [shaurya]
tags: [machine-learning, python, data-science, regression]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/01-Regression/Assignment1-HardWork-Pays-OFF.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

## Challenge - Hardwork Pays Off
About Walkatime
Since you are a student of Coding Blocks, you are expected to work hard and get better results than others. To track your time and expected performance in the Machine Learning Challenge, Prateek bhayia has asked to you install walkatime on your device which is an efficient time tracking tool to track your daily coding activity.



#### Challenge

In this challenge, Prateek bhayia gives you walkatime data of his past students and how they performed in the evaluation exam. Your task is to predict the score you will get given the amount of time you spend on coding daily.
Input You are given one feature corresponding to time noted by walkatime.
Output A scalar denoting the level of perfomance student achived by devoting the given time.

```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
```

```python
# 1. loading Dataset
X = pd.read_csv('Datasets/Assignment1_x_train.csv')
Y = pd.read_csv('Datasets/Assignment1_y_train.csv')
test = pd.read_csv('Datasets/Assignment1_x_test.csv')
```

```python
X.shape, Y.shape
```

**Output:**
```
((3750, 1), (3750, 1))
```

```python
X.describe()
```

**Output:**
```
x
count  3750.000000
mean     -0.037795
std       0.992212
min      -3.546299
25%      -0.698443
50%      -0.035028
75%       0.629425
max       4.091393
```

```python
Y.describe() # continious data
```

**Output:**
```
y
count  3750.000000
mean      0.683869
std      81.102629
min    -286.959739
25%     -54.036989
50%       0.180640
75%      54.695511
max     348.899461
```

```python
plt.scatter(X,Y)
```


![Output](data:image/png;base64,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)


**Output:**
```
&lt;matplotlib.collections.PathCollection at 0x13b8ebb0&gt;
```

```python
# 2. Data preprocessing
from sklearn.preprocessing import StandardScaler
s = StandardScaler()
X = s.fit_transform(X)
test = s.transform(test)
```

```python
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.25, random_state=42)
```

```python
from sklearn.linear_model import LinearRegression
```

```python
model = LinearRegression(fit_intercept=True, normalize=False, copy_X=True, n_jobs=None)
```

```python
model.fit(X_train,Y_train)
```

**Output:**
```
LinearRegression(copy_X=True, fit_intercept=True, n_jobs=None,
         normalize=False)
```

```python
# model.predict(X_test)
```

```python
model.coef_
```

**Output:**
```
array([[80.03060346]])
```

```python
model.intercept_
```

**Output:**
```
array([0.81652466])
```

```python
model.score(X_test,Y_test) # good
```

**Output:**
```
0.9698213937984322
```

```python
output = model.predict(test)
```

```python
np.savetxt('Datasets/Assignment1_result_output.csv',output, delimiter= ',',header='y',comments='')
```

```python
df = pd.read_csv('Datasets/Assignment1_result_output.csv')
```

```python
df # result , got 97 % after submittion
```

**Output:**
```
y
0    -147.627427
1     -66.238965
2    -200.243138
3     226.529781
4      51.541083
5    -100.650035
6     -12.012615
7      27.427134
8     -62.420167
9    -117.265198
10    -10.554614
11      9.689493
12    -36.842677
13     68.492889
14     11.801847
15     -9.333989
16     26.667465
17    108.026288
18    177.635113
19     23.262928
20    -30.996375
21     22.355121
22    -52.445547
23   -147.105662
24     69.788052
25    110.420358
26    155.665626
27     11.984797
28     34.833908
29    -92.007050
...          ...
1220  -12.654623
1221   34.548221
1222   63.982002
1223   40.029062
1224  -90.407882
1225 -101.843792
1226   63.976112
1227 -101.386852
1228   56.849624
1229  -80.194740
1230  -85.748081
1231   25.527114
1232  -97.182339
1233   -0.121599
1234  -34.762941
1235  -71.215933
1236  -36.297917
1237  -25.084648
1238   91.807021
1239   76.414579
1240   -9.507748
1241   -0.688644
1242   89.517671
1243   31.870062
1244  -72.715199
1245   -9.691792
1246   79.067324
1247   14.191727
1248  -18.563751
1249  -51.024175

[1250 rows x 1 columns]
```

## Thank You!!

# Using code from Scratch

```python
def hypothesis(X,theta):
    return theta[0] + theta[1]*X
```

```python
def gradient(X,Y,theta):
    
    grad = np.zeros(2)
    hx = hypothesis(X,theta) 
    
    grad[0] = np.sum(hx-Y)
    grad[1] = np.sum((hx-Y)*X)

    return grad


def error(X,Y,theta):
    hx = hypothesis(X,theta)
    return (1/2)*(np.sum((hx-Y)**2))
```

```python
def gradientDescent(X,Y,learning_rate=0.0001):
    
    # starting- point ()
    theta = np.zeros(2)

    # using fixed number of iteration
    itr = 0
    max_itr = 1000
    
    error_list = []
    while itr<max_itr:
        grad = gradient(X,Y,theta)
        error_list.append(error(X,Y,theta))
        theta[0] = theta[0] - learning_rate * grad[0] # grad 0 is d(cost) / d(theta 0)
        theta[1] = theta[1] - learning_rate * grad[1] # grad 1 is d(cost) / d(theta 1)
        
        itr += 1
        
    return theta,error_list
```

```python
theta,error = gradientDescent(X_train,Y_train)
```

```python
theta
```

**Output:**
```
array([ 0.81652466, 80.03060346])
```

```python
output = hypothesis(test, theta)
```

```python
output
```

**Output:**
```
array([[-147.62742695],
       [ -66.23896503],
       [-200.24313801],
       ...,
       [  14.19172725],
       [ -18.56375107],
       [ -51.0241749 ]])
```

```python
np.savetxt('Datasets/Assignment1_result_output_scratch.csv',output, delimiter= ',',header='y',comments='')
```

```python
df = pd.read_csv('Datasets/Assignment1_result_output_scratch.csv')
```

```python
df # result , got 97 % after submittion
```

**Output:**
```
y
0    -147.627427
1     -66.238965
2    -200.243138
3     226.529781
4      51.541083
5    -100.650035
6     -12.012615
7      27.427134
8     -62.420167
9    -117.265198
10    -10.554614
11      9.689493
12    -36.842677
13     68.492889
14     11.801847
15     -9.333989
16     26.667465
17    108.026288
18    177.635113
19     23.262928
20    -30.996375
21     22.355121
22    -52.445547
23   -147.105662
24     69.788052
25    110.420358
26    155.665626
27     11.984797
28     34.833908
29    -92.007050
...          ...
1220  -12.654623
1221   34.548221
1222   63.982002
1223   40.029062
1224  -90.407882
1225 -101.843792
1226   63.976112
1227 -101.386852
1228   56.849624
1229  -80.194740
1230  -85.748081
1231   25.527114
1232  -97.182339
1233   -0.121599
1234  -34.762941
1235  -71.215933
1236  -36.297917
1237  -25.084648
1238   91.807021
1239   76.414579
1240   -9.507748
1241   -0.688644
1242   89.517671
1243   31.870062
1244  -72.715199
1245   -9.691792
1246   79.067324
1247   14.191727
1248  -18.563751
1249  -51.024175

[1250 rows x 1 columns]
```

## Thank You!!