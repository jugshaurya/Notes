---
title: "Using code from Scratch"
slug: machine-learning-learn-ml-01-supervised-learning-01-regression-assignment2-air-quality-prediction-multivariate-regression
date: 2022-01-26
authors: [shaurya]
tags: [machine-learning, python, data-science, regression]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/01-Regression/Assignment2-Air-Quality-Prediction-(Multivariate-Regression).ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

## Challenge - Air Pollution(https://www.kaggle.com/c/air-pollution-prediction/overview)
It is winter time in Delhi so Cody decided to go for a walk to the news stand and on reaching was surprised to see the air quality index of Delhi in the newspaper . So he decided to collect the air samples of different locations and then took these samples to his lab where he extracted `five features` of the air he collected which can be used to predict the air quality index and combined it with the air quality index given in the newspapers. You are provided with the data collected by Cody and your job is to design a machine learning model , which is given by the features extracted by Cody to predict air quality.


submit file like sample_submittion format :- 

| Id | target|
|-------|-----|
|0 |ans0|
|1 |ans1|
|2 |ans2|
|3 |ans3|
|4 |ans4|
|5 |ans5|
|6 |ans6|

```python
# loading Dataset
import pandas as pd
train = pd.read_csv('Datasets/Assignment2_Train.csv')
train.head()
```

**Output:**
```
feature_1  feature_2  feature_3  feature_4  feature_5     target
0   0.293416  -0.945599  -0.421105   0.406816   0.525662 -82.154667
1  -0.836084  -0.189228  -0.776403  -1.053831   0.597997 -48.897960
2   0.236425   0.132836  -0.147723   0.699854  -0.187364  77.270371
3   0.175312   0.143194  -0.581111  -0.122107  -1.292168  -2.988581
4  -1.693011   0.542712  -2.798729  -0.686723   1.244077 -37.596722
```

```python
train.shape # 5 are features; 1 is target
```

**Output:**
```
(1600, 6)
```

```python
train.columns
```

**Output:**
```
Index(['feature_1', 'feature_2', 'feature_3', 'feature_4', 'feature_5',
       'target'],
      dtype='object')
```

```python
X = train[train.columns[:-1]]
X.head()
```

**Output:**
```
feature_1  feature_2  feature_3  feature_4  feature_5
0   0.293416  -0.945599  -0.421105   0.406816   0.525662
1  -0.836084  -0.189228  -0.776403  -1.053831   0.597997
2   0.236425   0.132836  -0.147723   0.699854  -0.187364
3   0.175312   0.143194  -0.581111  -0.122107  -1.292168
4  -1.693011   0.542712  -2.798729  -0.686723   1.244077
```

```python
Y = train[train.columns[-1]]
Y.head()
```

**Output:**
```
0   -82.154667
1   -48.897960
2    77.270371
3    -2.988581
4   -37.596722
Name: target, dtype: float64
```

```python
X.shape, Y.shape
```

**Output:**
```
((1600, 5), (1600,))
```

```python
type(X)
```

**Output:**
```
pandas.core.frame.DataFrame
```

```python
import pandas as pd
```

```python
# preprocessing 
from sklearn.preprocessing import StandardScaler
s = StandardScaler()
X = pd.DataFrame(s.fit_transform(X))
# output for test file
test = pd.read_csv('Datasets/Assignment2_Test.csv')
test = s.transform(test.values)
```

```python
type(X)
```

**Output:**
```
pandas.core.frame.DataFrame
```

```python
X.describe()
```

**Output:**
```
0             1             2             3             4
count  1.600000e+03  1.600000e+03  1.600000e+03  1.600000e+03  1.600000e+03
mean  -2.331468e-17 -1.776357e-17 -1.776357e-17  2.331468e-17  8.881784e-18
std    1.000313e+00  1.000313e+00  1.000313e+00  1.000313e+00  1.000313e+00
min   -3.394334e+00 -3.218189e+00 -3.073464e+00 -3.154539e+00 -2.927091e+00
25%   -6.532217e-01 -6.631960e-01 -6.544315e-01 -6.560276e-01 -6.417809e-01
50%   -4.487509e-03 -1.582564e-02  3.151454e-03  1.244233e-02 -2.609701e-02
75%    6.800261e-01  6.589081e-01  6.758504e-01  6.772709e-01  6.522049e-01
max    3.292885e+00  3.393682e+00  3.223719e+00  2.977582e+00  3.383015e+00
```

```python
Y.describe()
```

**Output:**
```
count    1600.000000
mean        0.318835
std       110.741562
min      -379.829794
25%       -71.897040
50%        -0.610665
75%        71.226603
max       337.643014
Name: target, dtype: float64
```

```python
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.25,random_state=101)
X_train.shape, X_test.shape, Y_train.shape, Y_test.shape
```

**Output:**
```
((1200, 5), (400, 5), (1200,), (400,))
```

```python
from sklearn.linear_model import LinearRegression
```

```python
model = LinearRegression()
```

```python
model.fit(X_train, Y_train)
```

**Output:**
```
LinearRegression(copy_X=True, fit_intercept=True, n_jobs=None,
         normalize=False)
```

```python
model.coef_
```

**Output:**
```
array([29.85207419, 94.83165412,  8.05996353, 45.23534964,  2.34253763])
```

```python
model.intercept_
```

**Output:**
```
0.6828984772412013
```

```python
Y_pred = model.predict(X_test)
```

```python
model.score(X_test,Y_test)
```

**Output:**
```
0.9682476621478511
```

```python
from sklearn.metrics import r2_score
r2_score(Y_test,Y_pred)
```

**Output:**
```
0.9682476621478511
```

```python
%matplotlib inline
```

```python
import matplotlib.pyplot as plt 
plt.scatter(Y_test,Y_pred) # approximately linear
```


![Output](data:image/png;base64,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)


**Output:**
```
&lt;matplotlib.collections.PathCollection at 0x1286ca30&gt;
```

```python
# output for test file
test = pd.DataFrame(test)
```

```python
test.head()
```

**Output:**
```
0         1         2         3         4
0  1.014156  2.059621 -0.219462 -2.336264 -1.014474
1 -0.380266  0.960186  0.663580  0.734423 -0.375628
2 -1.031635  0.969787 -0.359367 -1.788688  0.453005
3 -2.501395  0.560382  0.638368 -0.555246 -1.355645
4 -0.389949 -0.789089  1.387127 -0.497137  0.408771
```

```python
test.describe()
```

**Output:**
```
0           1           2           3           4
count  400.000000  400.000000  400.000000  400.000000  400.000000
mean    -0.025996    0.014487    0.033092    0.007419    0.019432
std      0.982084    1.000121    1.030062    1.017343    0.958216
min     -2.576064   -2.902958   -2.692526   -2.949381   -2.560900
25%     -0.791048   -0.600358   -0.727477   -0.676770   -0.614510
50%     -0.008899   -0.048541   -0.064106    0.001629    0.036103
75%      0.679685    0.749801    0.789482    0.687178    0.587112
max      3.250423    2.564306    2.920374    2.659714    2.921637
```

```python
output = model.predict(test)
```

```python
output.shape
```

**Output:**
```
(400,)
```

```python
type(output)
```

**Output:**
```
numpy.ndarray
```

```python
output.dtype
```

**Output:**
```
dtype('float64')
```

```python
df = pd.DataFrame(output, index = [i for i in range(output.shape[0])], columns= ['target'])
```

```python
df.head()
```

**Output:**
```
target
0  116.447831
1  118.077583
2  -20.894286
3  -43.994147
4  -96.138932
```

```python
df.index.name = 'Id'
```

```python
df.head()
```

**Output:**
```
target
Id            
0   116.447831
1   118.077583
2   -20.894286
3   -43.994147
4   -96.138932
```

```python
df.to_csv('Datasets/Assignment2_output.csv') # 33 rank with score of 0.96802
```

# Using code from Scratch

```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
```

```python
# theta will be np.array([theta0,theta1,.............,thetaN])
def error(X,Y,theta):
    hx = hypothesis(X,theta)    
    return (0.5) * np.sum((hx-Y)**2)
    
def hypothesis(X,theta):    
    # returning h(Xi) for each sample (Xi) hence returning an array of size X.shape[0]
    data = np.sum(X*theta[1:], axis=1) + theta[0]
    return data

    
def gradient(X,Y,theta):    
    grad = np.zeros(X.shape[1]+1) # n-featured data have (n+1) parameters.
    hx = hypothesis(X,theta)    
    grad[0] = np.sum((hx-Y))
    
    for i in range(1,len(grad)) :
        # d(cost) / d(theta[i]) = sum((hx-y)*x[i])
        grad[i] = np.sum( (hx-Y) * X[:,i-1])
    return grad
    
    
def gradientDescent_multivariate(X,Y,learning_rate=0.0001):

    theta = np.zeros(X.shape[1]+1)
    error_list = []    
    err = error(X,Y,theta)
    error_list.append(err)
    
    while True:
        grad = gradient(X,Y,theta)
        theta = theta - learning_rate * grad     
        err = error(X,Y,theta)
        error_change = abs(err - error_list[-1]) 
        error_list.append(err)        
        if error_change < 0.00001:
            break
        
    return theta,error_list
```

```python
theta,error = gradientDescent_multivariate(X_train.values,Y_train.values)
```

```python
theta
```

**Output:**
```
array([ 0.68287854, 29.85199475, 94.83151151,  8.05984701, 45.23524455,
        2.34249223])
```

```python
# prediction
test.shape
```

**Output:**
```
(400, 5)
```

```python
hypo = theta[0] + theta[1]*test[0] + theta[2]*test[1] + theta[3]*test[2] + theta[4]*test[3] + theta[5]*test[4]
```

```python
hypo.shape
```

**Output:**
```
(400,)
```

```python
output = hypo.values
```

```python
type(output)
```

**Output:**
```
numpy.ndarray
```

```python
output.dtype
```

**Output:**
```
dtype('float64')
```

```python
df = pd.DataFrame(output, index = [i for i in range(output.shape[0])], columns= ['target'])
```

```python
df.head()
```

**Output:**
```
target
0  116.447754
1  118.077318
2  -20.894153
3  -43.994003
4  -96.138936
```

```python
df.index.name = 'Id'
```

```python
df.head()
```

**Output:**
```
target
Id            
0   116.447754
1   118.077318
2   -20.894153
3   -43.994003
4   -96.138936
```

```python
df.to_csv('Datasets/Assignment2_output_scratch.csv') # 33 rank with score of 0.96802
```

## Thank you!