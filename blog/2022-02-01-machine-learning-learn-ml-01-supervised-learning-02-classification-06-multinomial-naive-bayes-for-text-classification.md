---
title: "Let's see Naive Bayes in action predicting whether the review is positive or negative"
slug: machine-learning-learn-ml-01-supervised-learning-02-classification-06-multinomial-naive-bayes-for-text-classification
date: 2022-02-01
authors: [shaurya]
tags: [machine-learning, python, data-science, classification]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/01-Supervised%20Learning/02-Classification/06-Multinomial-Naive-Bayes-for-Text-Classification.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

## Naive Bayes for Text Classification (Multinomial Naive Bayes)

```python
# lets get some sample text using NLTK -> watch out NlP notebook for detailed NLP preocesses
```

```python
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import SnowballStemmer
import string

def NLP_preprocess(text):
    text = text.lower()
    # step 1 - wordTokenize
    li = word_tokenize(text)
    # step 2 - stopword removal
    stopword_list = stopwords.words('english')
    li = [word for word in li if word not in stopword_list]
    # step 3 - puntuation Removal
    punch_list = string.punctuation
    li = [word for word in li if word not in punch_list]
    # step 4 - Lemmatiziation
    ss = SnowballStemmer('english')
    li = [ss.stem(word) for word in li ]
    return li
```

# Let's see Naive Bayes in action predicting whether the review is positive or negative

```python
text = ['Best movie ever made by Marvel. Loved every detail of it. ', 
       'It could not get better ,satisfied Ending as well. May god Bless Tony.',
        'movie was not upto the mark ,I am disappointed . why tony stark have to die in the end. why Bad Things happens to good people',
        "I have never seen so many people get up to pee in one film and I could not believe they were sacrificing even a second, because Endgame is incredible.",
        "OK. It's great. Obviously. Emotional, funny, epic, all those good things. Five stars, eight thumbs up.",
        "There is so much wrong with Endgame that I can not get out of my head. Primarily, time travel removes all jeopardy from all future stories.",
       ]

Y = [1,1,0,1,1,0] # 1 is good review , 0 is bad review
```

```python
print(len(text))
```

**Output:**
```
6
```

```python
# Preprocesing- not necessary ; could have done using CountVectorizer() by passing it to tokenizer keyworded argument
# X = []
# for i in text :
#     X.append(' '.join(NLP_preprocess(i)))
# print(X)
```

```python
# vectorization
from sklearn.feature_extraction.text import CountVectorizer
```

```python
cv = CountVectorizer(tokenizer=NLP_preprocess,ngram_range=(1,1))
```

```python
# cv.fit(X) 
# cv.transform(X).toarray()
# there are two function fit and transform which are combined in fit_transform

arr = cv.fit_transform(text).toarray()
arr
```

**Output:**
```
array([[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
       [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
       [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1,
        0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1]], dtype=int64)
```

```python
print(cv.vocabulary_)
```

**Output:**
```
{'best': 3, 'movi': 36, 'ever': 16, 'made': 31, 'marvel': 34, 'love': 30, 'everi': 17, 'detail': 7, 'could': 6, 'get': 22, 'better': 4, 'satisfi': 47, 'end': 12, 'well': 59, 'may': 35, 'god': 23, 'bless': 5, 'toni': 56, 'upto': 58, 'mark': 33, 'disappoint': 9, 'stark': 51, 'die': 8, 'bad': 1, 'thing': 53, 'happen': 26, 'good': 24, 'peopl': 43, 'never': 38, 'seen': 49, 'mani': 32, 'pee': 42, 'one': 41, 'film': 18, 'believ': 2, 'sacrif': 46, 'even': 15, 'second': 48, 'endgam': 13, 'incred': 28, 'ok.': 40, "'s": 0, 'great': 25, 'obvious': 39, 'emot': 11, 'funni': 20, 'epic': 14, 'five': 19, 'star': 50, 'eight': 10, 'thumb': 54, 'much': 37, 'wrong': 60, 'head': 27, 'primarili': 44, 'time': 55, 'travel': 57, 'remov': 45, 'jeopardi': 29, 'futur': 21, 'stori': 52}
```

```python
cv.vocabulary_['bad']
```

**Output:**
```
1
```

```python
# lets verify by inverse _transformation
text[0]
```

**Output:**
```
'Best movie ever made by Marvel. Loved every detail of it. '
```

```python
cv.inverse_transform(arr[0]) # same thing
```

**Output:**
```
[array(['best', 'detail', 'ever', 'everi', 'love', 'made', 'marvel',
        'movi'], dtype='&lt;U10')]
```

```python
# not doing TfidfTransformer here see Assignment 4 ,applies there
```

### Predicting for example: ' It is difficult for me to put into words how perfectly realized Avengers: Endgame is. '

```python
X = arr
X.shape
```

**Output:**
```
(6, 61)
```

```python
Y = Y
Y
```

**Output:**
```
[1, 1, 0, 1, 1, 0]
```

```python
from sklearn.naive_bayes import MultinomialNB
mnb =  MultinomialNB()
```

```python
mnb.fit(X,Y)
```

**Output:**
```
MultinomialNB(alpha=1.0, class_prior=None, fit_prior=True)
```

```python
test = ['It is difficult for me to put into words how perfectly realized Avengers: Endgame is. ', 
       'Bad movie overall.',
        'Worst movie ever', # will be wrongly predicted because it is not seen in training data
        'Jaw-Dropping movie ',# (correct by luck maybe)
        'Good movie overall.']
```

```python
arr = cv.transform(test)
arr.toarray()
```

**Output:**
```
array([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], dtype=int64)
```

```python
mnb.predict(arr) # yes test[0] was bas review and test[1] was good
```

**Output:**
```
array([1, 0, 1, 1, 1])
```