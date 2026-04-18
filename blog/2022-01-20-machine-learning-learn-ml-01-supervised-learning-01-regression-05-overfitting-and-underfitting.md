---
title: "Overfitting and Underfitting of Model"
slug: machine-learning-learn-ml-01-supervised-learning-01-regression-05-overfitting-and-underfitting
date: 2022-01-20
authors: [shaurya]
tags: [machine-learning, python, data-science, regression]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/01-Regression/05-Overfitting-and-Underfitting.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

# Overfitting and Underfitting of Model

[beautiful article on topic](https://towardsdatascience.com/overfitting-vs-underfitting-a-complete-example-d05dd7e19765)


[good video by nptel for understanding](https://www.youtube.com/watch?v=Y0m136XU65o&list=PLyqSpQzTE6M9gCgajvQbc68Hk_JKGBAYT&index=58)

- underfitting the model means our complexity of function(degree) that we are predicting is very low compared to what it should be actually, when training our model

- overfitting the model means our complexity of function that we are predicting is very high compared to what it should be actually(that is the error is very low over the training examples), when training our model.

# Bias 
    - difference b/w the actual value and predicted values
# Variance 
- spreadness of the function from its average predicted function line if lines are drawn for various different training examples . 
- or `variance is an error from sensitivity to small fluctuations in the training set`

# Underfitting
- assuming we have our training data,  as shown in fig using the simple function over my dataset in some chunks(15 maybe,consisting of 25 training examples each ).
    - we are fitting lines over our model ,actual function is shown in black
![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/01-Regression/images/underfitting.PNG)

- since our function was too simple , it results in higher difference b/w actual value and predicted value(higher bias).hence model is said to be underfitting the model.
- note that its variance is low

# Overfitting
- assuming we have our training data,  as shown in fig using the complex function maybe polynomial of degree 25 over my dataset in some chunks(3 maybe,consisting of maybe 25 training examples each ).
    - we are fitting function over our model , actual function is shown in black
![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/01-Regression/images/overfitting2.PNG)

- since our function was too complex, it closely resembles the actual function (lower bias). 
- Hence model is said to be overfitting the model because it try to memorize the training data rather than learning from it.
- note that its variance(values of same function for different training examples) is high here.

## Bias-Variance Trade off

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/01-Regression/images/trade-off.PNG)

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/01-Regression/images/model.PNG)