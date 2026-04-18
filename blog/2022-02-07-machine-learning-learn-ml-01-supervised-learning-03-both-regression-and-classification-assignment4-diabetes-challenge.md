---
title: "Challenge - Diabetes Classification"
slug: machine-learning-learn-ml-01-supervised-learning-03-both-regression-and-classification-assignment4-diabetes-challenge
date: 2022-02-07
authors: [shaurya]
tags: [machine-learning, python, data-science, regression, classification]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/03-Both%20Regression%20and%20Classification/Assignment4-diabetes-challenge.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

# Challenge - Diabetes Classification
About Diabetes

Diabetes is a condition that impairs(weakens) the body's ability to process blood glucose, otherwise known as blood sugar. In the United States, the estimated number of people over 18 years of age with diagnosed and undiagnosed diabetes is 30.2 million. The figure represents between 27.9 and 32.7 percent of the population.

Without ongoing, careful management, diabetes can lead to a buildup of sugars in the blood, which can increase the risk of dangerous complications, including stroke and heart disease.

Different kinds of diabetes can occur, and managing the condition depends on the type. Not all forms of diabetes stem from a person being overweight or leading an inactive lifestyle. In fact, some are present from childhood.

In this problem you are given a Diabetes Data set consisting of following features -

['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age', 'Outcome']

and your task is to predict whether a person is suffering from diabetes or not (Binary Classification)

Tasks

1) Plot a bar graph showing number of classes and no of examples in each class.

2) Classification Task, classify a person as 0 or 1 (Diabetic or Not) using K-Nearest Neighbors classifier.

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```

```python
# loading datasets
X = pd.read_csv('Datasets/Assignment4_Diabetes_XTrain.csv')
Y = pd.read_csv('Datasets/Assignment4_Diabetes_YTrain.csv')
test = pd.read_csv('Datasets/Assignment4_Diabetes_Xtest.csv')
```

```python
# ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age', 'Outcome']
X.shape
```

**Output:**
```
(576, 8)
```

```python
Y.shape
```

**Output:**
```
(576, 1)
```

```python
Y.nunique() # 2 class problem
```

**Output:**
```
Outcome    2
dtype: int64
```

```python
print(Y.values.flatten())
```

**Output:**
```
[1 0 1 1 0 1 0 0 1 0 0 1 0 1 1 0 1 0 0 0 0 0 0 0 1 0 0 1 0 1 0 0 0 1 0 0 0
 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 1 0 1 0 0 0 0 1 0 1 1 1 0 1 0 1 0 0 0 1 0 0
 1 0 0 0 1 0 0 1 0 0 0 1 0 0 1 0 0 1 0 0 0 0 1 1 0 0 0 0 0 0 0 1 0 0 1 0 1
 1 1 0 0 0 1 1 1 0 0 1 0 1 1 1 1 0 0 1 0 1 0 0 0 0 0 0 0 0 0 1 1 0 0 1 0 1
 1 0 1 1 0 1 1 1 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 0 1 0 1 0 0 0 0 0 1 1 1
 0 0 0 0 0 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 1 1 0 1 1 0 0 0 1 0 0 1 1 0 0 1 0
 0 0 1 0 0 1 0 1 1 0 1 0 1 1 0 0 1 0 0 0 0 0 1 0 1 0 0 1 0 1 0 1 1 0 0 0 0
 0 1 0 0 0 0 1 0 1 0 1 0 1 0 1 0 0 1 1 0 0 0 0 0 0 1 1 0 0 1 0 0 1 0 1 0 0
 0 0 0 0 0 1 0 0 1 1 1 1 0 1 0 0 0 1 1 1 0 0 0 0 1 1 1 0 1 0 0 0 0 0 0 0 0
 0 0 0 1 0 1 0 1 0 0 0 1 0 0 0 1 1 0 0 1 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0
 1 0 1 1 1 0 1 1 1 0 0 0 0 1 0 0 1 1 0 1 0 0 0 0 1 0 0 0 0 0 0 1 1 0 0 1 0
 1 0 1 0 0 0 1 0 0 1 1 0 1 1 1 1 1 0 0 0 0 1 0 0 0 0 0 1 0 1 0 0 0 0 0 1 1
 0 0 0 1 1 0 0 0 0 1 0 0 0 0 0 0 1 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 1 1
 0 1 1 0 0 0 0 0 1 1 0 0 1 0 0 1 0 0 1 1 1 0 1 1 0 0 0 0 0 0 1 1 0 0 1 0 1
 0 1 0 0 0 1 0 1 0 1 0 0 1 1 0 0 0 0 0 0 1 0 1 0 0 0 1 1 0 0 1 0 0 0 0 1 1
 1 1 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 0]
```

```python
# part 1) Plot a bar graph showing number of classes and no of examples in each class.
values, count = np.unique(Y,return_counts=True)
```

```python
values
```

**Output:**
```
array([0, 1], dtype=int64)
```

```python
count
```

**Output:**
```
array([375, 201])
```

```python
plt.bar(values,count)
plt.xticks([0,1])
plt.yticks(count)
plt.title('Part 1 bargraph ')
plt.xlabel('Classes')
plt.ylabel('Freuency')
```


![Output](data:image/png;base64,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)


**Output:**
```
Text(0, 0.5, 'Freuency')
```

```python
Y.head()
```

**Output:**
```
Outcome
0        1
1        0
2        1
3        1
4        0
```

```python
X.columns
```

**Output:**
```
Index(['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin',
       'BMI', 'DiabetesPedigreeFunction', 'Age'],
      dtype='object')
```

# part 2) Classification Task, classify a person as 0 or 1 (Diabetic or Not).

```python
# using Knn code written from scratch
```

```python
def distance(x1,x2):
    # x1 and x2 are both numpy arrays
    inside_part = np.sum((x1-x2)**2)
    return np.sqrt(inside_part)
```

```python
def Knn(X, Y, querypoint, K=5) : 
    # X and Y are numpy arrays 
    Y = Y.flatten()
    distance_label_pair = []
    for i in range(X.shape[0]):
        dist = distance(querypoint, X[i])
        distance_label_pair.append((dist,Y[i]))
    
    # sorting dictionary based upon distance 
    distance_label_pair.sort() # sorting  will be done based on 1st values of pair of list
    
    # k-nearest
    k_nearest = distance_label_pair[:K]
    ans = []
    for dist,label in k_nearest :
        ans.append(label)
    
    values,counts = np.unique(ans, return_counts=True)
    
    max_index = np.argmax(counts)
    return values[max_index]
```

```python
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X,Y, test_size=0.25, random_state = 101)
```

```python
# prediction over X_test
Y_pred = []
for query in X_test.values :
    Y_pred.append(Knn(X_train.values,Y_train.values, query , K=100))
Y_pred = np.array(Y_pred)
```

```python
Y_pred
```

**Output:**
```
array([0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0,
       0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0,
       1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
       0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], dtype=int64)
```

```python
Y_test.values.flatten()
```

**Output:**
```
array([1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0,
       1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0,
       0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0,
       1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
       1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
       0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
       0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], dtype=int64)
```

```python
accuracy = np.sum(Y_pred == Y_test.values.flatten()) / Y_pred.shape[0]
```

```python
accuracy
```

**Output:**
```
0.7222222222222222
```

```python
# output
```

```python
# prediction over test
output = []
for query in test.values :
    output.append(Knn(X_train.values,Y_train.values, query , K=100))
output = np.array(output)
```

```python
output
```

**Output:**
```
array([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0,
       1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
       0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
       0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
       1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0,
       0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
       0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
       0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0], dtype=int64)
```

```python
df = pd.DataFrame(output,columns=['Outcome'])
```

```python
df.head()
```

**Output:**
```
Outcome
0        0
1        0
2        0
3        0
4        0
```

```python
df.to_csv('Datasets/Assignment4_Diabetes_output_scratch.csv',index = False)
```

```python
pd.read_csv('Datasets/Assignment4_Diabetes_output_scratch.csv').head() # got 70% accuracy when submitted
```

**Output:**
```
Outcome
0        0
1        0
2        0
3        0
4        0
```

# part 2) Classification Task, classify a person as 0 or 1 (Diabetic or Not) using K-Nearest Neighbors classifier.

## Using Sklearn(sklearn.neighbors.KNeighborsClassifier)

```python
from sklearn.preprocessing import StandardScaler
s = StandardScaler()
X = pd.DataFrame(s.fit_transform(X))
test = pd.DataFrame(s.transform(test))
```

**Output:**
```
c:\users\shaurya singhal\appdata\local\programs\python\python37-32\lib\site-packages\sklearn\preprocessing\data.py:625: DataConversionWarning: Data with input dtype int64, float64 were all converted to float64 by StandardScaler.
  return self.partial_fit(X, y)
c:\users\shaurya singhal\appdata\local\programs\python\python37-32\lib\site-packages\sklearn\base.py:462: DataConversionWarning: Data with input dtype int64, float64 were all converted to float64 by StandardScaler.
  return self.fit(X, **fit_params).transform(X)
c:\users\shaurya singhal\appdata\local\programs\python\python37-32\lib\site-packages\ipykernel_launcher.py:4: DataConversionWarning: Data with input dtype int64, float64 were all converted to float64 by StandardScaler.
  after removing the cwd from sys.path.
```

```python
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X,Y, test_size=0.25, random_state = 101)
```

```python
from sklearn.neighbors import KNeighborsClassifier
```

```python
model = KNeighborsClassifier(n_neighbors=100)
```

```python
X_train.shape
```

**Output:**
```
(432, 8)
```

```python
Y_train.shape
```

**Output:**
```
(432, 1)
```

```python
model.fit(X_train.values,Y_train.values.reshape(-1))
```

**Output:**
```
KNeighborsClassifier(algorithm='auto', leaf_size=30, metric='minkowski',
           metric_params=None, n_jobs=None, n_neighbors=100, p=2,
           weights='uniform')
```

```python
model.get_params()
```

**Output:**
```
{'algorithm': 'auto',
 'leaf_size': 30,
 'metric': 'minkowski',
 'metric_params': None,
 'n_jobs': None,
 'n_neighbors': 100,
 'p': 2,
 'weights': 'uniform'}
```

```python
model.predict(test)
```

**Output:**
```
array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0,
       0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
       1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0,
       0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0,
       0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], dtype=int64)
```

```python
model.score(X_test,Y_test)
```

**Output:**
```
0.7361111111111112
```

```python
# output
output = model.predict(test)
output
```

**Output:**
```
array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0,
       0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
       1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0,
       0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0,
       0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], dtype=int64)
```

```python
type(output)
```

**Output:**
```
numpy.ndarray
```

```python
df = pd.DataFrame(output,columns=['Outcome'])
```

```python
df.head()
```

**Output:**
```
Outcome
0        0
1        0
2        0
3        0
4        0
```

```python
df.to_csv('Datasets/Assignment4_Diabetes_output.csv',index = False)
```

```python
pd.read_csv('Datasets/Assignment4_Diabetes_output.csv').head()
```

**Output:**
```
Outcome
0        0
1        0
2        0
3        0
4        0
```

## Thank You!