---
title: "Passing data to Neural Network (Forward Propagation)"
slug: machine-learning-learn-ml-04-neural-network-02-multi-layer-perceptron-theory
date: 2022-02-14
authors: [shaurya]
tags: [machine-learning, python, data-science, neural-networks]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/04-Neural%20Network/02%20-%20Multi%20Layer%20Perceptron(Theory).ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

## MultiLayer Perceptron/ (Feed/Deep) Forward (Architecture/Net)


&lt;img src="https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/04-Neural%20Network/images/neural_net.gif" alt="Perceptron" width= 450 /&gt;

## Multilayer means :

- 1 `input layer` with neurons equal to our inputs x1,x2,x3,x4...`


- `n hidden layers` ,each with as many neurons we want .


- `1 output layer` with neurons equal to the number of classes we want to predict.

Note: input layer is not counted while saying x-layered network.

#### **2 Layer Network** 
- Two layers : 1 Hidden + 1 output


![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/04-Neural%20Network/images/2layerNN.png)

``` 
In the above diagram : we are going to learn the weightes assocated with this neural network.
   
   for hidden layer: 
    ------------------
    
    W1 is the matrix : shape(4 X 5) as each neuron in hidden layer recieves 4 inputs hence 4 weights per neuron.
    b1 is vector : shape(5 X 1) ;1 per neuron
    
    for output layer: 
    ------------------
    
    W2 is the matrix : shape(5 X 3) as each neuron in output layer recieves 5 inputs hence 5 weights per neuron.
    b2 is vector : shape(3 X 1) ; 1 per neuron
    
Goal : -&gt; learn w1,w2,b1,b2( 4*5 + 5*3 + 5 + 3 = 43parameters)
```

#### **3 Layer Network** 
```
- Three layers : 2 Hidden + 1 output
    
Note: hidden layer increses , input and output layer always remains 1 and 1
 : more layered network means more complex functions 
```

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/04-Neural%20Network/images/3layernn.png)

#### Note: Each neuron in hidden layer or output layer is going to act as a biological neuron hence taking inputs -> generting Z as Weighted sum of inputs with bias included and then output of particular neuron is g(Z) which will act as input for next layer neurons

# Passing data to Neural Network (Forward Propagation)
![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/04-Neural%20Network/images/weightsNN.png)

#### Z is the inner part of g(`Z`)

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/04-Neural%20Network/images/forward_formula.png)

# Output of every Layer

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/04-Neural%20Network/images/out.png)

####  Note: 
##### In output layer we will not use g(z) or activation function we find out z = weighted sum +bias and then take `softmax` over all these z's

# Example : -

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/04-Neural%20Network/images/softmax.png)