---
title: "Implementing Neural Network as a Class or sya DataStructure"
slug: machine-learning-learn-ml-04-neural-network-03-implementing-mlp-from-scratch
date: 2022-02-15
authors: [shaurya]
tags: [machine-learning, python, data-science, neural-networks]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/04-Neural%20Network/03-%20Implementing%20MLP%20from%20scratch.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

```python
import numpy as np
```

# Implementing Neural Network as a Class or sya DataStructure

```python
class MLP_NeuralNetwork :
    
    def __init__(self, input_layer_size, hidden_layers_size , output_layer_size):
        np.random.seed(0)

        params = {}
        
        params['w1'] = np.random.randn(input_layer_size, hidden_layers_size[0])
        params['w2'] = np.random.randn(hidden_layers_size[0], hidden_layers_size[1])
        params['w3'] = np.random.randn(hidden_layers_size[1], output_layer_size)

        
        params['b1'] = np.random.randn(1, hidden_layers_size[0])
        params['b2'] = np.random.randn(1, hidden_layers_size[1])
        params['b3'] = np.random.randn(1, output_layer_size)

        self.params = params
    
    @staticmethod
    def __sigmoid(arr):       
        # arr is 2-dimensional
        return 1 / (1 + np.exp(-1*arr))
    
    @staticmethod
    def __softmax(arr):
        # arr is 2-dimensional
        exp_arr = np.exp(arr)
        return exp_arr / np.sum(exp_arr,axis=1,keepdims=True)
    
    # feed forward 
    def fit(self, X, Y):
        '''
            for first hidden layer outputs
        '''
        # X -> ( #examples X input_layer_size)
        w1 = self.params['w1'] # (input_layer_size X hidden_layers_size[0])
        b1 = self.params['b1'] # (1, hidden_layers_size[0])
        without_bias =  np.dot(X,w1) # (#examples X hidden_layers_size[0]) 
        z1 = without_bias + b1 # b1 will be broadcasted to:  (#examples X hidden_layers_size[0])
        a1 = self.__sigmoid(z1)
        print(a1)
        
        
        '''
            for second hidden layer outputs
        '''
        w2 = self.params['w2']
        b2 = self.params['b2'] 
        z2 = np.dot(a1, w2) + b2 
        a2 = self.__sigmoid(z2)
        
        
        '''
            for output layer outputs
        '''
        # X -> ( #examples X input_layer_size)
        w3 = self.params['w3'] 
        b3 = self.params['b3'] 
        z3 = np.dot(a2, w3) + b3 
        
        '''
            taking softmax over z3 instead of taking sigmoidal as a activation function
        '''
        
        return self.__softmax(z3)
        
        
    def print(self):
        for key,values in self.params.items():
            print(key,':\n\n', values)
            print()
```

```python
input_layer_size = 3
output_layer_size = 2
hidden_layers_size = (4,5)

NN = MLP_NeuralNetwork(input_layer_size,hidden_layers_size,output_layer_size) # [3,[3,5],2]
```

```python
NN.print()
```

**Output:**
```
w1 :

 [[ 1.76405235  0.40015721  0.97873798  2.2408932 ]
 [ 1.86755799 -0.97727788  0.95008842 -0.15135721]
 [-0.10321885  0.4105985   0.14404357  1.45427351]]

w2 :

 [[ 0.76103773  0.12167502  0.44386323  0.33367433  1.49407907]
 [-0.20515826  0.3130677  -0.85409574 -2.55298982  0.6536186 ]
 [ 0.8644362  -0.74216502  2.26975462 -1.45436567  0.04575852]
 [-0.18718385  1.53277921  1.46935877  0.15494743  0.37816252]]

w3 :

 [[-0.88778575 -1.98079647]
 [-0.34791215  0.15634897]
 [ 1.23029068  1.20237985]
 [-0.38732682 -0.30230275]
 [-1.04855297 -1.42001794]]

b1 :

 [[-1.70627019  1.9507754  -0.50965218 -0.4380743 ]]

b2 :

 [[-1.25279536  0.77749036 -1.61389785 -0.21274028 -0.89546656]]

b3 :

 [[ 0.3869025  -0.51080514]]
```

# Passing data to Neural Network (Forward Propagation)

```python
NN.fit([[1,2,3],[1,2,3],[1,2,3],[1,5,2]],[1,2,3])
```

**Output:**
```
[[0.97020716 0.83591912 0.94275107 0.99716514]
 [0.97020716 0.83591912 0.94275107 0.99716514]
 [0.97020716 0.83591912 0.94275107 0.99716514]
 [0.99989787 0.15261202 0.99596061 0.98119374]]
array([[0.78756756, 0.21243244],
       [0.78756756, 0.21243244],
       [0.78756756, 0.21243244],
       [0.79408471, 0.20591529]])
```