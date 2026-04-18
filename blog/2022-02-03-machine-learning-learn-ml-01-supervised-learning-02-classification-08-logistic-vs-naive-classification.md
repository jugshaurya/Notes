---
title: "Logistic vs Naive classification"
slug: machine-learning-learn-ml-01-supervised-learning-02-classification-08-logistic-vs-naive-classification
date: 2022-02-03
authors: [shaurya]
tags: [machine-learning, python, data-science, classification]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/02-Classification/08-Logistic-vs-Naive-classification.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

Logistic :
----------
    - used for 2 class problems
    - Assumption : all samples(rows) are considered independent of each other
    - dataset can be numerical, talking about X part of dataset not Y (Y is is always categorical) 
    
    
Naive :
------
    - can be used for multiclass problems as well
    - Assumption : all features(columns) are considered independent of each other
        - Of course these assumptions of independence are rarely true, which may explain why some have referred to the model as the "Idiot Bayes" model, but in practice Naive Bayes models have performed surprisingly well, even on complex tasks where it is clear that the strong independence assumptions are false.
    - All the dataset columns must be categorical or say nominal(number associated with each class groups) -> multinomial and bernoulli naive bayes , and can be numerical as well (Gaussian Naive Bayes)

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/datatypes.png)