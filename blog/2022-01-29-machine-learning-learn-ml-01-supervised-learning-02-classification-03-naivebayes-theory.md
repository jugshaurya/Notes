---
title: "Bayes Theorem"
slug: machine-learning-learn-ml-01-supervised-learning-02-classification-03-naivebayes-theory
date: 2022-01-29
authors: [shaurya]
tags: [machine-learning, python, data-science, classification]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/02-Classification/03-NaiveBayes-Theory.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

# Bayes Theorem

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/naive_bayes_theorem.png)

# Naive Bayes Classifier

- use to detect whether review is +ve , -ve or neutral(sentiments Analysus)
- use ot classify the category of emails -> promotional,spam,social,inbox
- use to detect whether email is spam or not. using

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/spam.png)

```python
What is a classifier?
A classifier is a machine learning model that is used to discriminate different objects based on certain features.

Principle of Naive Bayes Classifier:
A Naive Bayes classifier is a probabilistic machine learning model that’s used for classification task.
```

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/naive_bayes.png)

### Assumption in Naive bayes classifier

```python
- all the features are independent of each other
- if x = &lt;x1,x2,x3,.....,xn&gt;
- then P(X|Y) = P(x1,x2,x3,..,xn|Y) = P(x1|Y)P(x2|Y)P(x3|Y).....P(xn|Y)
```

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/result_NBC.png)

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/Naivebayestypes1.PNG)

## Extra 1


![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/a.PNG)

--------------------------------


## Extra 2

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/b.PNG)



---------------------------------------
## Extra 3

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/c.PNG)