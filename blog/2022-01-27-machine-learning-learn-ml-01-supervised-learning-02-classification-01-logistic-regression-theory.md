---
title: "Logistic Regression(`Classification Algorithm`)"
slug: machine-learning-learn-ml-01-supervised-learning-02-classification-01-logistic-regression-theory
date: 2022-01-27
authors: [shaurya]
tags: [machine-learning, python, data-science, regression, classification]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/02-Classification/01-Logistic-Regression-Theory.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

# Logistic Regression(`Classification Algorithm`)

- Although name has Regression in it but it is a Classification Algorithm
- in classification problems we deal with the data which is qualitative or categorical(like eyes color -blue,green,red etc).
- values are discrete values, hence are grouped into classes

- so in Classification , we have classes , our goal is to predict the class of a new sample or to which class it belongs to.
- for that we make a `decision boundary` to seperate one class data points clusters from other.
- in total we have `Kc2` boundaries, where k is the number of the number of classes our data have.

# Binary Classification

- Let for simplicity (for now), we are taking data with two class only hence it is Binary Classification.

## Using Logistic Regression for Binary Classification
```python

- since our data have two classes , lets say 0 and 1 , we need to predict 0 and 1 only.

- let our decision Boundary be Linear in nature just like in case of Linear Regression ,written as 
    h(X) = theta[0] + theta[1]*X1 + theta[2]*X2 + ........
    
- but there is one Problem with this function ,its value ranges from (-inf to inf), hence cannt be used here.

- To solve this Problem we defined a Sigmoid Function as `g(Z) = 1/1+e^(-h(x))`,which always results in values (0,1), both excluded, hence can be used in our Binary Classification.
```
![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/sigmoid.png)

# Visualizing sigmoid Function

```python
import numpy as np
import matplotlib.pyplot as plt
```

```python
def sigmoid(x):
    return 1 / (1 + np.exp(-x))
```

```python
x = np.arange(-10,10,0.01)
y = sigmoid(x)
```

```python
plt.plot(x,y)
plt.yticks(ticks=[0,0.5,1])
plt.grid()
plt.show()
```


![Output](data:image/png;base64,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)


# Logistic Regression Intuition
```python
- since in Linear Regression, we got a line h(x), similarly we got it here but also passing it to sigmoid function.
- here we will train our Algorithm that if we got a line and
- if h(x) = (theta.T)*X &gt;=0 ,then we say the points(mostly) lies on one side will belong to Class 1.
- else if h(x)&lt; 0, we got all the remaining points lies on other side will belong to Class 0.

- this is true because all we want is that boundary only.

- according to that if h(x)&gt;=0, then g(h(x)) &gt;=0.5 (see from the graph) else we will have &lt;0.5

- so our hypothesis becomes , if g(h(x))&gt;=0.5 , we will get class 1 ,otherwise clas 0
```
# Conclusion
- in conclusion we can say that more the probability,better is the chance it belongs to class 1.

# Goal of Logistic Regression
    we will write , theta as w
    we can say that
    
        - P(Y=1|X;w) = g(h(x))
        - P(Y=0|X;w) = 1 - g(h(x))
why?
because if g(h(x)) comes out to be greater than 0.5 , there is more chance ,it belongs to class 1.

- we can write that down in one line as 


- **that is for one point only, the likelihood that it belongs to a class**
 ![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/Logistic_1.png)

# Assumption (Samples are Independent from each others)

since we want likelihood of all the INDEPENDENT points , we got it as the product of them , GOAL: - we want to `maximize the likelihood` that it belongs to same class as it should be.

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/01-Supervised%20Learning/02-Classification/images/derivation_logisitic_update_rule.PNG)

```python
Above, we used the fact that g′(z) = g(z)(1 − g(z)). This therefore gives us the stochastic gradient descent rule
            θj := θj - α(hθ(x(i)-y(i))*x(i)j)

If we compare this to the LMS update rule, we see that it looks identical; but this is not the same algorithm, because hθ(x(i)) is now defined as a non-linear function of θTx(i) .

Nonetheless, it’s a little surprising that we end up with the same update rule for a rather different algorithm and learning problem. Is this coincidence! 
```