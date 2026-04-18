---
title: "Multinomial NB example on MNIST Dataset"
slug: machine-learning-learn-ml-01-supervised-learning-02-classification-07-multinomial-nb-example-on-mnist-dataset
date: 2022-02-02
authors: [shaurya]
tags: [machine-learning, python, data-science, classification]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/02-Classification/07-Multinomial-NB-example-on-MNIST-Dataset.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

#  Multinomial NB example on MNIST Dataset

```python
from sklearn.datasets import load_digits
```

```python
mnist = load_digits()
```

```python
X = mnist.data
Y = mnist.target
```

```python
mnist.target_names # total possible digits
```

**Output:**
```
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```python
X.shape # 64 features per digit image of size 8X8
```

**Output:**
```
(1797, 64)
```

```python
Y.shape
```

**Output:**
```
(1797,)
```

```python
import matplotlib.pyplot as plt
plt.imshow(X[1].reshape(8,8),cmap='gray')
plt.show()
```


![Output](data:image/png;base64,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)


```python
Y[1]
```

**Output:**
```
1
```

```python
X[0] # values are in range 0(000) to 15(111) -> shades of grey !
```

**Output:**
```
array([ 0.,  0.,  5., 13.,  9.,  1.,  0.,  0.,  0.,  0., 13., 15., 10.,
       15.,  5.,  0.,  0.,  3., 15.,  2.,  0., 11.,  8.,  0.,  0.,  4.,
       12.,  0.,  0.,  8.,  8.,  0.,  0.,  5.,  8.,  0.,  0.,  9.,  8.,
        0.,  0.,  4., 11.,  0.,  1., 12.,  7.,  0.,  0.,  2., 14.,  5.,
       10., 12.,  0.,  0.,  0.,  0.,  6., 13., 10.,  0.,  0.,  0.])
```

```python
# train test split

from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X,Y,test_size=0.25, random_state = 101)
```

```python
X_train.shape, X_test.shape
```

**Output:**
```
((1347, 64), (450, 64))
```

### Applying Multinomial Naive Bayes (as each feature of image has 16 different values)

```python
from sklearn.naive_bayes import MultinomialNB
```

```python
mnb = MultinomialNB()
mnb
```

**Output:**
```
MultinomialNB(alpha=1.0, class_prior=None, fit_prior=True)
```

```python
mnb.fit(X_train,Y_train)
```

**Output:**
```
MultinomialNB(alpha=1.0, class_prior=None, fit_prior=True)
```

```python
mnb.classes_
```

**Output:**
```
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```python
mnb.predict_proba(X_test[0].reshape((1,-1)))
```

**Output:**
```
array([[1.15456271e-130, 6.13092874e-060, 3.24884657e-092,
        3.31212248e-075, 5.19568172e-064, 1.72442368e-056,
        1.20017925e-144, 1.00000000e+000, 1.40557595e-055,
        1.73407453e-055]])
```

```python
Y_test[0]
```

**Output:**
```
7
```

```python
mnb.predict(X_test[0].reshape((1,-1)))
```

**Output:**
```
array([7])
```

### Accuracy

```python
Y_pred = mnb.predict(X_test)
```

```python
mnb.score(X_test,Y_test)
```

**Output:**
```
0.9155555555555556
```

```python
import numpy as np
np.sum(Y_pred == Y_test) / X_test.shape[0]
```

**Output:**
```
0.9155555555555556
```

### Applyting Bernoulli Naive bayes( converting 16 differnent values to 2 values using  binarizer)

```python
from sklearn.naive_bayes import BernoulliNB
```

```python
bnb = BernoulliNB(binarize = 7 ) # if values are below or equal to 7 all changes to 0 else 1
```

```python
bnb.fit(X_train,Y_train)
```

**Output:**
```
BernoulliNB(alpha=1.0, binarize=7, class_prior=None, fit_prior=True)
```

```python
bnb.classes_
```

**Output:**
```
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```python
bnb.predict_proba(X_test[0].reshape((1,-1)))
```

**Output:**
```
array([[1.85725429e-16, 3.84837258e-10, 2.38737848e-12, 5.19525179e-09,
        2.34463989e-10, 1.10719034e-10, 1.39067356e-19, 9.99999672e-01,
        4.15975813e-08, 2.80422953e-07]])
```

```python
Y_test[0]
```

**Output:**
```
7
```

```python
bnb.predict(X_test[0].reshape((1,-1)))
```

**Output:**
```
array([7])
```

### Accuracy(less than mutinomial)

```python
Y_pred = bnb.predict(X_test)
```

```python
bnb.score(X_test,Y_test)
```

**Output:**
```
0.8888888888888888
```

```python
import numpy as np
np.sum(Y_pred == Y_test) / X_test.shape[0]
```

**Output:**
```
0.8888888888888888
```