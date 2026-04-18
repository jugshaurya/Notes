---
title: "What is Machine Learning"
slug: machine-learning-learn-ml-00-intro-to-ml-and-scikit-learn
date: 2022-01-15
authors: [shaurya]
tags: [machine-learning, python, data-science]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/00-Intro-to-ML-and-scikit-learn.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

# What is Machine Learning

- Machine learning (ML) is the scientific study of algorithms and statistical models that computer systems use to effectively perform a specific task without using explicit instructions, relying on patterns and inference instead. It is seen as a subset of artificial intelligence. Machine learning algorithms build a mathematical model of sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to perform the task.

- Machine learning algorithms are used in the applications of email filtering, detection of network intruders, and computer vision, where it is infeasible to develop an algorithm of specific instructions for performing the task. Machine learning is closely related to computational statistics, which focuses on making predictions using computers

# An introduction to machine learning with scikit-learn

### Machine learning: the problem setting

- In general, a learning problem considers a set of `n samples` of data and then tries to predict properties of unknown data. If each sample is more than a single number and, for instance, a multi-dimensional entry (aka `multivariate data`), it is said to have several attributes or features.

`pip install scikit-learn`

```python
# importing scikit-learn
import sklearn
```

**Supervised Learning**,  in which the data comes with additional attributes that we want to predict .

- **classification** : samples belong to two or more `classes` and we want to learn from already labeled data how to predict the class of unlabeled data.  classification is as a discrete (as opposed to continuous) form of supervised learning where one has a limited number of categories and for each of the n samples provided, one is to try to label them with the correct category or class.


- **regression** : if the desired output consists of one or more continuous variables, then the task is called regression.

**UnSupervised Learning** , in which the training data consists of a set of input vectors x without any corresponding target values. 
    - The goal in such problems may be to discover groups of similar examples within the data, where it is called `clustering`, or to determine the distribution of data within the input space, known as `density estimation`, or to project the data from a high-dimensional space down to two or three dimensions for the purpose of visualization.

#  sklearn dataset Module

```python
from sklearn import datasets
```

```python
# dir(datasets)
```

# various datasets in datasets ,can `make` them ,can `load` them
-  'load_boston',
-  'load_breast_cancer',
-  'load_diabetes',
-  'load_digits',
-  'load_files',
-  'load_iris',
-  'load_linnerud',
-  'load_mlcomp',
-  'load_sample_image',
-  'load_sample_images',
-  'load_svmlight_file',
-  'load_svmlight_files',
-  'load_wine',

-  'make_biclusters',
-  'make_blobs',
-  'make_checkerboard',
-  'make_circles',
-  'make_classification',
-  'make_moons',
-  'make_regression',
 'make_friedman1',
 'make_friedman2',
 'make_friedman3',
 'make_gaussian_quantiles',
 'make_hastie_10_2',
 'make_low_rank_matrix',
 'make_multilabel_classification',
 'make_s_curve',
 'make_sparse_coded_signal',
 'make_sparse_spd_matrix',
 'make_sparse_uncorrelated',
 'make_spd_matrix',
 'make_swiss_roll',

- For the best performance in the context of generalization, the complexity of the hypothesis should match the complexity of the function underlying the data. If the hypothesis is less complex than the function, then the model has underfit the data. If the complexity of the model is increased in response, then the training error decreases. But if the hypothesis is too complex, then the model is subject to overfitting and generalization will be poorer.



- Supervised learning algorithms build a mathematical model of a set of data that contains both the inputs and the desired outputs.



- The data is known as training data, and consists of a set of training examples. Each training example has one or more inputs and a desired output, also known as a supervisory signal. In the case of semi-supervised learning algorithms, some of the training examples are missing the desired output. In the mathematical model, each training example is represented by an array or vector, and the training data by a matrix. Through iterative optimization of an objective function, supervised learning algorithms learn a function that can be used to predict the output associated with new inputs.
- An optimal function will allow the algorithm to correctly determine the output for inputs that were not a part of the training data. An algorithm that improves the accuracy of its outputs or predictions over time is said to have learned to perform that task.



- Supervised learning algorithms include classification and regression.[20] Classification algorithms are used when the outputs are restricted to a limited set of values, and regression algorithms are used when the outputs may have any numerical value within a range. 



- In statistics, an estimator is a rule for calculating an estimate of a given quantity based on observed data: thus the rule (the estimator), the quantity of interest (the estimand) and its result (the estimate) are distinguished.[1]



- In scikit-learn, an estimator for classification is a Python object that implements the methods fit(X, y) and predict(T)