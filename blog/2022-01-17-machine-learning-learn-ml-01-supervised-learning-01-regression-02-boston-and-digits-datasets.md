---
title: "Loading data from sklearn"
slug: machine-learning-learn-ml-01-supervised-learning-01-regression-02-boston-and-digits-datasets
date: 2022-01-17
authors: [shaurya]
tags: [machine-learning, python, data-science, regression]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/01-Regression/02-boston-and-digits-datasets.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

# Loading data from sklearn

# 1. MNIST dataset
original at http://yann.lecun.com/exdb/mnist/ (The MNIST database of handwritten digits, available from this page, has a training set of 60,000 examples, and a test set of 10,000 examples.)

- subpart of data is avaliable in sklearn datasets module in `load_digits` bunch object

```python
from sklearn.datasets import load_digits
```

```python
digits = load_digits() 
type(digits)
```

**Output:**
```
sklearn.utils.Bunch
```

```python
# bunch object is like dictionary  
digits.keys()
```

**Output:**
```
dict_keys(['data', 'target', 'target_names', 'images', 'DESCR'])
```

```python
digits.data.shape
```

**Output:**
```
(1797, 64)
```

```python
digits.target.shape
```

**Output:**
```
(1797,)
```

```python
digits.target_names
```

**Output:**
```
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```python
digits.images.shape
```

**Output:**
```
(1797, 8, 8)
```

```python
digits.DESCR
```

**Output:**
```
".. _digits_dataset:\n\nOptical recognition of handwritten digits dataset\n--------------------------------------------------\n\n**Data Set Characteristics:**\n\n    :Number of Instances: 5620\n    :Number of Attributes: 64\n    :Attribute Information: 8x8 image of integer pixels in the range 0..16.\n    :Missing Attribute Values: None\n    :Creator: E. Alpaydin (alpaydin '@' boun.edu.tr)\n    :Date: July; 1998\n\nThis is a copy of the test set of the UCI ML hand-written digits datasets\nhttp://archive.ics.uci.edu/ml/datasets/Optical+Recognition+of+Handwritten+Digits\n\nThe data set contains images of hand-written digits: 10 classes where\neach class refers to a digit.\n\nPreprocessing programs made available by NIST were used to extract\nnormalized bitmaps of handwritten digits from a preprinted form. From a\ntotal of 43 people, 30 contributed to the training set and different 13\nto the test set. 32x32 bitmaps are divided into nonoverlapping blocks of\n4x4 and the number of on pixels are counted in each block. This generates\nan input matrix of 8x8 where each element is an integer in the range\n0..16. This reduces dimensionality and gives invariance to small\ndistortions.\n\nFor info on NIST preprocessing routines, see M. D. Garris, J. L. Blue, G.\nT. Candela, D. L. Dimmick, J. Geist, P. J. Grother, S. A. Janet, and C.\nL. Wilson, NIST Form-Based Handprint Recognition System, NISTIR 5469,\n1994.\n\n.. topic:: References\n\n  - C. Kaynak (1995) Methods of Combining Multiple Classifiers and Their\n    Applications to Handwritten Digit Recognition, MSc Thesis, Institute of\n    Graduate Studies in Science and Engineering, Bogazici University.\n  - E. Alpaydin, C. Kaynak (1998) Cascading Classifiers, Kybernetika.\n  - Ken Tang and Ponnuthurai N. Suganthan and Xi Yao and A. Kai Qin.\n    Linear dimensionalityreduction using relevance weighted LDA. School of\n    Electrical and Electronic Engineering Nanyang Technological University.\n    2005.\n  - Claudio Gentile. A New Approximate Maximal Margin Classification\n    Algorithm. NIPS. 2000."
```

```python
# this is a common structure in datasets that data is in `data` and labels in target
X = digits.data
Y = digits.target
```

```python
import matplotlib.pyplot as plt
```

```python
# lets print one of the image 

example_x = X[49] #lets take 50th sample
example_y = Y[49]

print(example_x)
print(example_y) # it is 0's image(grayscale)
```

**Output:**
```
[ 0.  0.  1. 15. 13.  1.  0.  0.  0.  0.  7. 16. 14.  8.  0.  0.  0.  8.
 12.  9.  2. 13.  2.  0.  0.  7.  9.  1.  0.  6.  6.  0.  0.  5.  9.  0.
  0.  3.  9.  0.  0.  0. 15.  2.  0.  8. 12.  0.  0.  0.  9. 15. 13. 16.
  6.  0.  0.  0.  0. 13. 14.  8.  0.  0.]
0
```

```python
plt.imshow(example_x.reshape(8,8),cmap='gray')
```


![Output](data:image/png;base64,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)


**Output:**
```
&lt;matplotlib.image.AxesImage at 0x1330c7b0&gt;
```

```python
# showing more
fig, axes = plt.subplots(2,5,dpi=100)
for i in range(2):
    for j in range(5):
        axes[i][j].imshow(X[5*i+j].reshape(8,8),cmap='gray')
```


![Output](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfsAAAEkCAYAAAAo45goAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD+naQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4yLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvOIA7rQAAGVNJREFUeJzt3V+MVeXVx/HferVS/8CMlVi0xD80JLUJcQxNaowNQyIxkSbQC2tjGqEXSjRpnZg0YtLocNGKiQF6o9JoChr/xfYNpLEkSssYI9QE4lC0phcV8A+KmjIDokClz3sx0Pf0MMDaZ/Y+z96L7yc5MTOzZu/n/J7DXueMZ9ZYSkkAACCu/8m9AAAAUC2aPQAAwdHsAQAIjmYPAEBwNHsAAIKj2QMAEBzNHgCA4Gj2AAAER7MHACA4mj0AAMHR7AEACO7sbp/QzEzSpZIOdPvcgUyWtCd18IcNyL8U5J8X+edF/vkV3oOuN3uNbfT7Gc4bzXRJH3TwfeRfDvLPi/zzIv/8Cu1BR83ezO6S9HNJl0h6S9JASulV57eX/oxu4cKFrrrBwUFX3dDQkPvc3mOOjIy4j+n0mplNUw3y93rxxRdddT09Pe5j/upXv3LV/fGPf3Qf06lx+V9//fWuumeeecZ9zB07drjq5s+f7z6m0y1m9lMVvwaVnv/AwICrbtmyZa66nTt3us/d39/vqqvg+lOb/L2815VHH33Ufcxbb7210+WUoVCWhZu9md0iaZWkuyS9JmmJpA1m9u2U0rtFj1eGr3zlK666yZMnu+rOPfdc97nHfiqVxcOS/qQa5O91/vnnu+ouuOAC9zG9e1+BxuV/9tm+f+5TpkxxH9O7pxVYrppcgyZNmuSq8+bqvU5JWa8/tcnfy5vVeeedV/FK8ujkDXr3SHoipfR4SuntlNKApPck3Vnu0nAaT5J/VuSf15Ncg7Ii/4Yp9MrezM6RNFtjz+pavSTpupN8zyRJrU99/U9b4UX+eZF/9/257eNx94D8K0P+DVP0lf1USWdJ2tv2+b2Spp3ke+6TNNpy480Z5SP/vMi/+z5u+/hke0D+1SD/hun09+zb3+5v43zuuAcl9bTcpnd4Tpwc+edF/t3nvQaRfzXIv2GKvkHvU0lHdeIzuIt14qt9SVJK6bCkw8c/zviGksjIPy/y776vt3087h6Qf2XIv2EKvbJPKR2RtE3SvLYvzZO0uaxFoTDyz4v8u29u28fsQXeRf8N08nv2KyQ9ZWZbJW2RdIekyyQ9VubCcFo/NrNNIv9cyD+vRWa2RVyDciH/hinc7FNKz5vZRZLu19hAhTcl3ZRS2l324ryWL2//5YDxzZgxw1V34YUXus/9z3/+01X3wx/+0FX3wgsveE99r6SVqkH+Xt7BHnPmzHEfc+7c9hcY41u/fr37mE61yb+vr89Vt2nTJlfd6Oio+9xXXHGFu7ZkS1XxNch7Xbn55ptddUuWLHHVrV692lUnSbNnz3bVbdy40X1Mp8rzL9vixYtddcPDw9UuJJOOJuillB6R9EjJa0Exs1JK+3Mv4gxG/nk9nlJakXsRZzDybxj+6h0AAMHR7AEACI5mDwBAcDR7AACCo9kDABAczR4AgOBo9gAABEezBwAguI6G6nSLdzqUdzLeN7/5TVfdO++846qTpJdfftlV570vBSbo1YZ3glt/f3/p54467aqIhQsXuuq2b9/uqlu3bp373A888IC7tml+85vfuOoeeughV93WrVtddUWuPxVMxmuc3t5eV513gt6qVavc5y57guSuXbtKPV4rXtkDABAczR4AgOBo9gAABEezBwAgOJo9AADB0ewBAAiOZg8AQHA0ewAAgqPZAwAQXK0n6F144YWuum3btrnqikym8vKeu4kGBgZcdYODg666np6eCaxmfENDQ6Ufs2m8E7+807mKTBBbv369u7ZpvNcL7wRPb12RqXjea+S+ffvcx2wa72Q877S7NWvWuM/t/bcyMjLiqvNeSzvBK3sAAIKj2QMAEBzNHgCA4Gj2AAAER7MHACA4mj0AAMHR7AEACI5mDwBAcDR7AACCCzFBr8jEqbJFnmDlnQ7lnThVRQa9vb2lH7MuvPfNO+lw4cKFE1nOuLzTyyLzTtr72te+5qp7+eWX3ef21s6bN89VV6fr1IIFC1x1K1eudNWtXbt2IssZ19133+2q+8lPflL6uYvilT0AAMHR7AEACI5mDwBAcDR7AACCo9kDABAczR4AgOBo9gAABEezBwAgOJo9AADB0ewBAAiu0LhcMxuU9EDbp/emlKaVtqIW3tGNs2fPLvW83hG4Rc79wgsvdLqckxk1M6nC/Jugr6/PVTc8PFz2qSvPf3Bw0FXnHdnpVWSs7sjISKnnLuB4/lJD/g14r2fe0baStHr1alfdvffe66pbunSp99SV5z86Olpq3aJFi1x13mtKEevWrSv9mEV1Mhv/LUk3tHx8tKS1oJiZkj4T+edC/nkdz19iD3Ig/4bppNl/mVL6qPSVoKiPU0r7cy/iDEb+eZF/XuTfMJ38P/uZZrbHzHaa2XNmNuNUxWY2ycymHL9JmtzZUtHmr+SfFfnn9XfPNYj8K0P+DVO02b8u6TZJN0q6XdI0SZvN7KJTfM99kkZbbu93sE6c6Gci/5zIP68fyHcNIv9qkH/DFGr2KaUNKaXfp5R2pJQ2Spp/7EuneufDg5J6Wm7TO1op2g2J/HMaEvnn9DfnNYj8q0H+DdPJ/7P/j5TSQTPbobE3a5ys5rCkw8c/bnkHJyaI/PMi//xOtwfkXy3yb44J/Z69mU2SdJWkD8tZDoog/7zIPz/2IC/yb45Czd7MHjazOWZ2pZl9V9LvJE2RtLaS1eFUZov8cyL/vC7nGpQV+TdM0Vf20yU9K+nvkv5X0hFJ16aUdpe9MJzW0yL/nMg/r23iGpQT+TdMof9nn1L6UVULGc8777zjqvNOsbv55ptLrSvioYceKvuQ3+L3XLOqPP81a9a46vr7+111V199tauuyLSv9evXu+p++9vflno8SVPr8vhfvny5q27jxo2uuiITPG+44YbTF6mSCZ6V5z80NOSq6+3tddV5J+N5zytJa9f6fqCRcdLkfzAbHwCA4Gj2AAAER7MHACA4mj0AAMHR7AEACI5mDwBAcDR7AACCo9kDABAczR4AgOAm9FfvquadoLd06VJXnXfS1bZt21x1kvSd73zHXRuVdzqUdzraggUL3Of2To/zTqOrk+HhYVeddzKYt25wcNBVJ/n3ateuXa66AhP0amPfvn2uutWrV5d+bu9kvCVLlpR+7qbxXqd6enrcx2zSdYVX9gAABEezBwAgOJo9AADB0ewBAAiOZg8AQHA0ewAAgqPZAwAQHM0eAIDgaj1Ux+vIkSOuugMHDrjqPv/884ksByfhzXX//v3uY37xxRedLueMc/ToUVddkce/d68OHTrkPmbTHD582FXnvf4UwePf79///rerrsj158svv+x0OV1nKaXuntDsG5Le7+pJY5qeUvqg6DeRf2nIPy/yz4v88yu0BzmavUm6VFLr09zJGnsATG/7fNN0635MlrQndbB55F/aecj/ROSfF/nnV9s96PqP8Y8t7r+ejYztvyTpQErJ/zOUmuni/ej42ORfCvIfB/nnRf751XkPeIMeAADB0ewBAAiuLs3+sKRlx/7bZE29H01dd7um3o+mrrtdU+9HU9fdrqn3o6nrHk9t70vX36AHAAC6qy6v7AEAQEVo9gAABEezBwAguOzN3szuMrOdZnbIzLaZ2fdyr6kIMxs0s9R2+yj3uryanr/EHuRG/nmRf15NyT9rszezWyStkvRLSddIelXSBjO7LOe6OvCWpEtabrPyLscnUP4Se5Ab+edF/nnVPv/cr+zvkfRESunxlNLbKaUBSe9JujPzuor6MqX0Ucvtk9wLcoqSv8Qe5Eb+eZF/XrXPP1uzN7NzJM2W9FLbl16SdF33VzQhM81sz7EfRT1nZjNyL+h0guUvsQe5kX9e5J9X7fPP+cp+qqSzJO1t+/xeSdO6v5yOvS7pNkk3SrpdY2vfbGYXZV3V6UXJX2IPciP/vMg/r0bkX4e/Z98+1cfG+VxtpZQ2tHy4w8y2SPqHpEWSVuRZVSGNzl9iD3Ij/7zIP6+m5J/zlf2nko7qxGdwF+vEZ3qNkVI6KGmHpJm513IaIfOX2IPcyD8v8s+rrvlna/YppSOStkma1/aleZI2d39F5TCzSZKukvRh7rWcStT8JfYgN/LPi/zzqmv+uX+Mv0LSU2a2VdIWSXdIukzSY1lXVYCZPSzpD5Le1dgz0l9ImiJpbc51OTU+f4k9yI388yL/vJqSf9Zmn1J6/tibGO7X2O8mvinpppTS7pzrKmi6pGc19maTTyT9RdK1TbgPQfKX2IPcyD8v8s+rEfnzV+8AAAgu91AdAABQMZo9AADB0ewBAAiOZg8AQHA0ewAAgqPZAwAQHM0eAIDgaPYAAARHswcAIDiaPQAAwdHsAQAIjmYPAEBwNHsAAIKj2QMAEBzNHgCA4Gj2AAAER7MHACA4mj0AAMHR7AEACI5mDwBAcDR7AACCo9kDABAczR4AgOBo9gAABEezBwAgOJo9AADB0ewBAAiOZg8AQHA0ewAAgqPZAwAQHM0eAIDgaPYAAARHswcAIDiaPQAAwdHsAQAIjmYPAEBwNHsAAIKj2QMAEBzNHgCA4Gj2AAAER7MHACA4mj0AAMHR7AEACI5mDwBAcDR7AACCo9kDABAczR4AgOBo9gAABEezBwAgOJo9AADB0ewBAAiOZg8AQHA0ewAAgqPZAwAQHM0eAIDgaPYAAARHswcAIDiaPQAAwdHsAQAIjmYPAEBwNHsAAIKj2QMAENzZ3T6hmZmkSyUd6Pa5A5ksaU9KKRX9RvIvBfnnRf55kX9+hfeg681eYxv9fobzRjNd0gcdfB/5l4P88yL/vMg/v0J70FGzN7O7JP1c0iWS3pI0kFJ61fntpT+je/HFF1117777rqvuzjvvnMhyuuU1M5umGuTv5d2nnp4e9zGvv/76TpczUbXJ3/t49eb6/e9/333uWbNmuepGR0dLOV5KSfv375ekW8zspyp+DSo9/+XLl7vq5s+f76p7+umn3ed+9NFHXXXe/AuoTf7PPPOMq877+PfuUw0UyrJwszezWyStknSXpNckLZG0wcy+nVLyddOSnX/++a66c889t+KVdNXDkv6kGuTv5d2nCy64oOKVlKI2+U+aNMlV99WvftVVVyT/KVOmuOq8P20c+ymvy3LV5BrkzXXy5MmlHk8qlFfZapP/eeed56rzXn+i6uQNevdIeiKl9HhK6e2U0oCk9yQ14uVwIE+Sf1bkn9eTXIOyIv+GKfTK3szOkTRbY8/qWr0k6bqTfM8kSa0vPXxPb1EE+edF/l3S8hOCP7d9adw9IP/KkH/DFH1lP1XSWZL2tn1+r6RpJ/me+ySNttx4c0b5yD8v8u+Slmb/cduXTrYH5F8N8m+YTn/Pvv1/wNk4nzvuQUk9LbfpHZ4TJ0f+eZF/93mvQeRfDfJvmKJv0PtU0lGd+AzuYp34al+SlFI6LOnw8Y8zvqEkMvLPi/y7pCW/r7d9adw9IP/KkH/DFHpln1I6ImmbpHltX5onaXNZi0Jh5J8X+XdJS7OY2/Yl9qC7yL9hOvk9+xWSnjKzrZK2SLpD0mWSHitzYUVcccUVrro5c+a46hYtWuQ+9+7du1113jUW8GMz26Qa5L9gwQJXnTf/ZcuWTWQ53VKb/L1GRkZcdQMDA+5jemt7e3tddd41SlpkZltUg2tQX19fqcdbvHixu7a/v7/UugIqz997zfRef7yKDAbcvn27q67sx0gnCjf7lNLzZnaRpPs1NlDhTUk3pZR8XQ9luVfSSpF/LuSf11JxDcqJ/Bumowl6KaVHJD1S8lpQzKyU0v7ciziDkX9ej6eUVuRexBmM/BuGv3oHAEBwNHsAAIKj2QMAEBzNHgCA4Gj2AAAER7MHACA4mj0AAMF19Hv2deOdunX55Ze76kZHR93nHhoactVVMEGsNsqeeLdu3bpSjxfdqlWrSj3e4OCgu9Y75ayCCW61MTw87KrbtWuXq67IBD3v9cKbv/d61g3ea6bXK6+84qrz7pPUrMc1r+wBAAiOZg8AQHA0ewAAgqPZAwAQHM0eAIDgaPYAAARHswcAIDiaPQAAwdHsAQAILsQEPe/Eo6uvvtpV19PT4z63d3pWEyfjeXknXW3fvt1V5800Ou90rrKneA0MDJR6PElauHChq27NmjWln7tq3jW/8cYbrjrvVELJf10pMhWuLspes/cxWGSCZ9lT/qrEK3sAAIKj2QMAEBzNHgCA4Gj2AAAER7MHACA4mj0AAMHR7AEACI5mDwBAcDR7AACCCzFBzzsZyTtprK+vz33ulStXums9Vq1aVerxusE7Rco7EavIBDfvtKvIE8S8j9eyJ+1J/n97Q0NDpZ+7LsqeojZnzhx37ZVXXumqa+Lj3zsd0DuZc9++fa66X//61646yf9vzzsVscp94pU9AADB0ewBAAiOZg8AQHA0ewAAgqPZAwAQHM0eAIDgaPYAAARHswcAIDiaPQAAwdHsAQAILsS4XK+cIzu94xKbyDvi0TsGtMj4Ue+44muuucZVNzw87D531by5ekfWppRKPZ4UewyudxTqpk2bXHXLli1z1RW5VnjHRXv3tIljdb375K2r4hrgHYNe5N9eUYVe2ZvZoJmltttHVS0OpzRK/lmRf16jXIOyIv+G6eSV/VuSbmj5+GhJa0ExMyV9JvLPhfzzOp6/xB7kQP4N00mz/zKlxDO5/D5OKe3PvYgzGPnnRf55kX/DdPIGvZlmtsfMdprZc2Y241TFZjbJzKYcv0ma3NlS0eav5J8V+ef1d881iPwrQ/4NU7TZvy7pNkk3Srpd0jRJm83solN8z32SRltu73ewTpzoZyL/nMg/rx/Idw0i/2qQf8MUavYppQ0ppd+nlHaklDZKmn/sS4tO8W0PSuppuU3vaKVoNyTyz2lI5J/T35zXIPKvBvk3zIR+9S6ldNDMdmjszRonqzks6fDxj81sIqdEC/LPi/zzO90ekH+1yL85JjRUx8wmSbpK0oflLAdFkH9e5J8fe5AX+TdH0d+zf9jM5pjZlWb2XUm/kzRF0tpKVodTmS3yz4n887qca1BW5N8wRX+MP13Ss5KmSvpE0l8kXZtS2l32wopYsGCBq250dNRVNzg4OIHVjM876aqApyVtUQ3yX7NmjavOO+2uyBQv77Qx72SqAtOzapO/dzqX9/H/yiuvTGQ53bJNFV+DvI9Db67efSoyQe+NN95w1S1evNhVV+DaV3n+ZfP+2/buk+TPtcrJeF6Fmn1K6UdVLQSFfYvfc82K/POaSv5ZkX/D8IdwAAAIjmYPAEBwNHsAAIKj2QMAEBzNHgCA4Gj2AAAER7MHACA4mj0AAMFN6A/h1MXcuXNddXfffXfp51671jclcmhoqPRz14V3gp53Mph3KpXkz7WCCYa10d/f76pbtOhUf5zv/42MjExgNXF4c/A+Bvft2+eq807kk6T169e76opMhWsa733r6+tz1fX29rrP7f23V2AyZ2V4ZQ8AQHA0ewAAgqPZAwAQHM0eAIDgaPYAAARHswcAIDiaPQAAwdHsAQAILsRQnUOHDrnq9u/fX/q5v/jii9KP2TQpJVddFfv0+eefu+qOHj3qPmbTfPbZZ666f/3rXxWv5MzkfQx6H9dVPP69/0abyHtdOXjwoKvu7LP9bbFJ1xXr9oPAzL4h6f2unjSm6SmlD4p+E/mXhvzzIv+8yD+/QnuQo9mbpEslHWj59GSNPQCmt32+abp1PyZL2pM62DzyL+085H8i8s+L/POr7R50/cf4xxb3X89GxvZfknQgpVT+z9q7pIv3o+Njk38pyH8c5J8X+edX5z3gDXoAAARHswcAILi6NPvDkpYd+2+TNfV+NHXd7Zp6P5q67nZNvR9NXXe7pt6Ppq57PLW9L11/gx4AAOiuuryyBwAAFaHZAwAQHM0eAIDgaPYAAASXvdmb2V1mttPMDpnZNjP7Xu41FWFmg2aW2m4f5V6XV9Pzl9iD3Mg/L/LPqyn5Z232ZnaLpFWSfinpGkmvStpgZpflXFcH3pJ0ScttVt7l+ATKX2IPciP/vMg/r9rnn/uV/T2SnkgpPZ5SejulNCDpPUl3Zl5XUV+mlD5quX2Se0FOUfKX2IPcyD8v8s+r9vlna/Zmdo6k2ZJeavvSS5Ku6/6KJmSmme059qOo58xsRu4FnU6w/CX2IDfyz4v886p9/jlf2U+VdJakvW2f3ytpWveX07HXJd0m6UZJt2ts7ZvN7KKsqzq9KPlL7EFu5J8X+efViPy7/lfvxtE+ws/G+VxtpZQ2tHy4w8y2SPqHpEWSVuRZVSGNzl9iD3Ij/7zIP6+m5J/zlf2nko7qxGdwF+vEZ3qNkVI6KGmHpJm513IaIfOX2IPcyD8v8s+rrvlna/YppSOStkma1/aleZI2d39F5TCzSZKukvRh7rWcStT8JfYgN/LPi/zzqmv+uX+Mv0LSU2a2VdIWSXdIukzSY1lXVYCZPSzpD5Le1dgz0l9ImiJpbc51OTU+f4k9yI388yL/vJqSf9Zmn1J6/tibGO7X2O8mvinpppTS7pzrKmi6pGc19maTTyT9RdK1TbgPQfKX2IPcyD8v8s+rEfnzJ24BAAgu91AdAABQMZo9AADB0ewBAAiOZg8AQHA0ewAAgqPZAwAQHM0eAIDgaPYAAARHswcAIDiaPQAAwdHsAQAIjmYPAEBw/weswIzGPrQpQgAAAABJRU5ErkJggg==)


# 2. Boston dataset(Housing price dataset)

```python
from sklearn.datasets import load_boston
```

```python
boston = load_boston()
```

```python
boston.keys()
```

**Output:**
```
dict_keys(['data', 'target', 'feature_names', 'DESCR', 'filename'])
```

```python
X = boston.data
print(X.shape)
```

**Output:**
```
(506, 13)
```

```python
Y = boston.target
print(Y.shape)
```

**Output:**
```
(506,)
```