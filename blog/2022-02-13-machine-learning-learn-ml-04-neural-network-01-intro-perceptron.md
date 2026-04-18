---
title: "Resemblence of Human Neuron to our Artificial Neuron"
slug: machine-learning-learn-ml-04-neural-network-01-intro-perceptron
date: 2022-02-13
authors: [shaurya]
tags: [machine-learning, python, data-science, neural-networks]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/04-Neural%20Network/01-%20%20INTRO%20+%20Perceptron.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

## Introduction

&lt;img src = 'images/neuron2.png'/&gt;

# Resemblence of Human Neuron to our Artificial Neuron

|Biological NN| Artifical NN|
|----|-----|
|Synaptic Gap| weights|
|Dendrites| Inputs|
|Soma|Processing Function|
|Axon| Activation Function|
|Axon Terminals Boutons|Outputs|

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/04-Neural%20Network/images/Neuron.png)

- Z is the output of soma
- a is the output of axon where a = g(Z)
    - g(x) can be sigmoidal function or relu function or any other function.
    
- we add bias for activating our neural network (Threshold Thing)

## Perceptron (Single Layer Neural Network)

```python

- A Perceptron is a single layer neural network or say Simplest unitof Neural Network is Perceptron
- It acts a Linear Classifier(Binary classification if activation function if sigmoidal)
- Loss Function : Binary Cross Entropy (-ve of Log Likelihood)
- Optimisation : Gradient Descent/ Stochastic Gradient Descent
- No hidden units
- Input is not counted in layers

```

&lt;img src = 'images/perceptron.png' width=600/&gt;

# Conclusion

```python
Whatever we did (till now) without neural network is basically implementing a perceptron 
```