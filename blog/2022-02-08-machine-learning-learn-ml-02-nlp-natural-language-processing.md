---
title: "Natural Language Processing"
slug: machine-learning-learn-ml-02-nlp-natural-language-processing
date: 2022-02-08
authors: [shaurya]
tags: [machine-learning, python, data-science, nlp]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Machine-Learning/blob/master/Learn%20ML/02-NLP/Natural-Language-Processing.ipynb)
>
> **Category**: Machine Learning / Learn ML

<!-- truncate -->

# Natural Language Processing

```python

1) Natural language processing (NLP) concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

2) Challenges in natural language processing frequently involve speech recognition, natural language understanding, and natural language generation.

```

# Installing NLTK

`Aim : - to convert Text data to numerical data so as to give text documents to ML models.`


where are those text documents ? : 
- just like sklearn have datasets module
- nltk has download function , run it and download the data (all-corpora) -> collection of well-written text.

![](https://raw.githubusercontent.com/jugshaurya/Machine-Learning/master/Learn%20ML/02-NLP/images/nltk_download()1.PNG)

# Data in ` Brown Corpus`
 - The Brown Corpus was the first million-word electronic corpus of English, created in 1961 at Brown University. This corpus contains text from 500 sources, and the sources have been categorized by genre, such as news, editorial, and so on.

#### Loading data

```python
from nltk.corpus import brown # brown has category wise data
```

```python
# to see the list of categories
print(brown.categories())
```

**Output:**
```
['adventure', 'belles_lettres', 'editorial', 'fiction', 'government', 'hobbies', 'humor', 'learned', 'lore', 'mystery', 'news', 'religion', 'reviews', 'romance', 'science_fiction']
```

```python
data = brown.sents(categories='editorial') # load some category data
```

```python
import numpy as np
data = np.array(data)
```

```python
data.shape # so it has 2997 eidtorial -sentences
```

**Output:**
```
(2997,)
```

```python
data = data[:100] # lets take first 100 ones
```

```python
print(data[1])
```

**Output:**
```
['The', 'General', 'Assembly', ',', 'which', 'adjourns', 'today', ',', 'has', 'performed', 'in', 'an', 'atmosphere', 'of', 'crisis', 'and', 'struggle', 'from', 'the', 'day', 'it', 'convened', '.']
```

# NLP Pipeline
```python
- Doing anything complicated in machine learning usually means building a pipeline. The idea is to break up your problem into very small pieces and then use machine learning to solve each smaller piece separately. Then by chaining together several machine learning models that feed into each other, you can do very complicated things. And that’s exactly the strategy We’ll break down the process of understanding English into small chunks and see how each one works.
```
### Pipeline

0. **`Data Collection`**(using nltk.corpus)


1. **`Sentence tokenization`**(seperating lines whenever any '.' occur in sentence)(`nltk.tokenize.sent_tokenize()`)


2. **`Word tokenization`**(seperating wods whenever any puntuation came up)(`nltk.tokenize.word_tokenize()`) 


3. **`Stopwords Removal`** (removing words which are not that important)(stopwods are in `nltk.corpus.stopwords.words()`)


4. **`Puntuation Removal`**(removing puntuations) (using string.puntuation and list comprehension)


5. **`Lemmatization or stemmming`**(Returning only the basic form ex - jumps,jumped,jumping all reduced to jump)(`nltk.stem.WordNetLemmatizer().lemmatize()`)

**Using Bag of Words Model** : `(Constructing Vocabulary)`

6. **`Building dictionary(Vocabulary)`** out of text : (`feature_extraction.text.CountVectorizer().fit_transform(text)`):(ngrams)


7. **`Tf-idf Normalization`**

# 1,2. Sentence and word tokenization

```python
from nltk.tokenize import sent_tokenize, word_tokenize # sentence tokenizer and word tokenizer
```

```python
text = 'Hello shaurya, another miserable day ha!. Lets make it a fun day by learning NLP \
and maybe you got somthing useful this time. hello are you listening!'
```

```python
print(text)
```

**Output:**
```
Hello shaurya, another miserable day ha!. Lets make it a fun day by learning NLP and maybe you got somthing useful this time. hello are you listening!
```

```python
sl = sent_tokenize(text)
```

```python
wl = word_tokenize(text)
```

```python
print(sl)
print(wl)
```

**Output:**
```
['Hello shaurya, another miserable day ha!.', 'Lets make it a fun day by learning NLP and maybe you got somthing useful this time.', 'hello are you listening!']
['Hello', 'shaurya', ',', 'another', 'miserable', 'day', 'ha', '!', '.', 'Lets', 'make', 'it', 'a', 'fun', 'day', 'by', 'learning', 'NLP', 'and', 'maybe', 'you', 'got', 'somthing', 'useful', 'this', 'time', '.', 'hello', 'are', 'you', 'listening', '!']
```

# 3. Stopword Removal

```python
from nltk.corpus import stopwords
```

```python
stop_words = list(stopwords.words('english'))
```

```python
print(stop_words)
print(len(stop_words)) # these are the english stopwords which are not that important.
```

**Output:**
```
['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]
179
```

##### Flitering stopwords from word list

```python
removed_wl = [word for word in wl if word.lower() not in stop_words ] # removing all stopwards from li
```

```python
print(removed_wl)
```

**Output:**
```
['Hello', 'shaurya', ',', 'another', 'miserable', 'day', 'ha', '!', '.', 'Lets', 'make', 'fun', 'day', 'learning', 'NLP', 'maybe', 'got', 'somthing', 'useful', 'time', '.', 'hello', 'listening', '!']
```

```python
print(wl)# that was our list with stopwords earlier
```

**Output:**
```
['Hello', 'shaurya', ',', 'another', 'miserable', 'day', 'ha', '!', '.', 'Lets', 'make', 'it', 'a', 'fun', 'day', 'by', 'learning', 'NLP', 'and', 'maybe', 'you', 'got', 'somthing', 'useful', 'this', 'time', '.', 'hello', 'are', 'you', 'listening', '!']
```

# 4. Puntuation removal

```python
import string
```

```python
punch_list = string.punctuation
punch_list
```

**Output:**
```
'!"#$%&\'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~'
```

```python
print(removed_wl)
```

**Output:**
```
['Hello', 'shaurya', ',', 'another', 'miserable', 'day', 'ha', '!', '.', 'Lets', 'make', 'fun', 'day', 'learning', 'NLP', 'maybe', 'got', 'somthing', 'useful', 'time', '.', 'hello', 'listening', '!']
```

```python
removed_wl = [word for word in removed_wl if word not in punch_list]
```

```python
print(removed_wl)
```

**Output:**
```
['Hello', 'shaurya', 'another', 'miserable', 'day', 'ha', 'Lets', 'make', 'fun', 'day', 'learning', 'NLP', 'maybe', 'got', 'somthing', 'useful', 'time', 'hello', 'listening']
```

# 5. Lemmatization or Stemming
 - can use Snowball stemmer(multilingual)
 - can use Lancaster Stemmer
 - can use PorterStemmer
 - can use WordNetLemmatizer

```python
from nltk.stem import SnowballStemmer, LancasterStemmer , PorterStemmer,WordNetLemmatizer
```

```python
ss = SnowballStemmer('english')
ls = LancasterStemmer()
ps = PorterStemmer()
lemma = WordNetLemmatizer()
```

```python
print(removed_wl)
```

**Output:**
```
['Hello', 'shaurya', 'another', 'miserable', 'day', 'ha', 'Lets', 'make', 'fun', 'day', 'learning', 'NLP', 'maybe', 'got', 'somthing', 'useful', 'time', 'hello', 'listening']
```

```python
ss.stem('jumps')
```

**Output:**
```
'jump'
```

```python
ps.stem('jumping')
```

**Output:**
```
'jump'
```

```python
ls.stem('jumped')
```

**Output:**
```
'jump'
```

```python
lemma.lemmatize('crying')
```

**Output:**
```
'cry'
```

# Function to do all above steps of NLP Pipelining over text

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
    li = list([ss.stem(word) for word in li ])
    return li
```

```python
text
```

**Output:**
```
'Hello shaurya, another miserable day ha!. Lets make it a fun day by learning NLP and maybe you got somthing useful this time. hello are you listening!'
```

```python
ans = NLP_preprocess(text)
```

```python
print(ans)
```

**Output:**
```
['hello', 'shaurya', 'anoth', 'miser', 'day', 'ha', 'let', 'make', 'fun', 'day', 'learn', 'nlp', 'mayb', 'got', 'somth', 'use', 'time', 'hello', 'listen']
```

```python
ans = ' '.join(ans)
ans
```

**Output:**
```
'hello shaurya anoth miser day ha let make fun day learn nlp mayb got somth use time hello listen'
```

# Bag of words Model
```
The bag-of-words model is a simplifying representation used in natural language processing and information retrieval (IR). In this model, a text (such as a sentence or a document) is represented as the bag (multiset) of its words, disregarding grammar and even word order but keeping multiplicity.
```

# 6. Building Vocabulary(dictionary of word along with its frequencies in a text)

# (`using Bags of Words model` implemented in sklearn)
- from sklearn.feature_extraction.text import CountVectorizer
- CountVectorizer().fit_transform(text)
- CountVectorizer().get_feature_names()
- CountVectorizer().vocabulary_
- CountVectorizer().inverse_transform()

```python
from sklearn.feature_extraction.text import CountVectorizer
```

```python
cv = CountVectorizer() 
# if words of text are arranged in a dictionary(real one in life!) then position of word is counted by this
```

```python
print(ans)
```

**Output:**
```
hello shaurya anoth miser day ha let make fun day learn nlp mayb got somth use time hello listen
```

```python
print(cv.fit_transform([ans]))  # (0,1) means in 0th sentence of ans, 1st dictionary element is present 2 times
```

**Output:**
```
(0, 8)	1
  (0, 15)	1
  (0, 16)	1
  (0, 14)	1
  (0, 3)	1
  (0, 10)	1
  (0, 12)	1
  (0, 6)	1
  (0, 2)	1
  (0, 9)	1
  (0, 7)	1
  (0, 4)	1
  (0, 1)	2
  (0, 11)	1
  (0, 0)	1
  (0, 13)	1
  (0, 5)	2
```

```python
print(cv.vocabulary_) # printing word with dictionary index
```

**Output:**
```
{'hello': 5, 'shaurya': 13, 'anoth': 0, 'miser': 11, 'day': 1, 'ha': 4, 'let': 7, 'make': 9, 'fun': 2, 'learn': 6, 'nlp': 12, 'mayb': 10, 'got': 3, 'somth': 14, 'use': 16, 'time': 15, 'listen': 8}
```

```python
print(cv.get_feature_names()) # printing unique words in dictionary
```

**Output:**
```
['anoth', 'day', 'fun', 'got', 'ha', 'hello', 'learn', 'let', 'listen', 'make', 'mayb', 'miser', 'nlp', 'shaurya', 'somth', 'time', 'use']
```

```python
# generating a vector for our ans 
print(ans)
arr = cv.transform([ans]).toarray()
arr
```

**Output:**
```
hello shaurya anoth miser day ha let make fun day learn nlp mayb got somth use time hello listen
array([[1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], dtype=int64)
```

```python
cv.vocabulary_
```

**Output:**
```
{'hello': 5,
 'shaurya': 13,
 'anoth': 0,
 'miser': 11,
 'day': 1,
 'ha': 4,
 'let': 7,
 'make': 9,
 'fun': 2,
 'learn': 6,
 'nlp': 12,
 'mayb': 10,
 'got': 3,
 'somth': 14,
 'use': 16,
 'time': 15,
 'listen': 8}
```

```python
cv.inverse_transform(arr) # it maps every 1 or more to dictionary and print
```

**Output:**
```
[array(['anoth', 'day', 'fun', 'got', 'ha', 'hello', 'learn', 'let',
        'listen', 'make', 'mayb', 'miser', 'nlp', 'shaurya', 'somth',
        'time', 'use'], dtype='&lt;U7')]
```

# Unigrams : Bag Of Words Model
- making dictionary in which each word of dictionary is made up of single word, which we are doing till now

# N-grams : Bag Of Words Model(Bigrams ,trigrams....)
- making dictionary in which each word of dictionary is made up of n-word `use CountVectorize(ngrma_range=(1,2))` to get words of length 1 or 2

```python
text = ['Indian cricket team will wins World Cup, says Capt. Virat Kohli. World cup will be held at Taunton England.',
        'We will win next Lok Sabha Elections, says confident Indian PM',
        'The nobel laurate won the hearts of the people',
        'The movie Raazi is an exciting Indian Spy thriller based upon a real story']
```

```python
from sklearn.feature_extraction.text import CountVectorizer
```

##### Unigram + Bigram

```python
cv = CountVectorizer(tokenizer=NLP_preprocess, ngram_range=(1,2)) # tokenizer to do above 5 steps
```

```python
text
```

**Output:**
```
['Indian cricket team will wins World Cup, says Capt. Virat Kohli. World cup will be held at Taunton England.',
 'We will win next Lok Sabha Elections, says confident Indian PM',
 'The nobel laurate won the hearts of the people',
 'The movie Raazi is an exciting Indian Spy thriller based upon a real story']
```

```python
cv.fit_transform(text)
```

**Output:**
```
&lt;4x65 sparse matrix of type '&lt;class 'numpy.int64'&gt;'
	with 69 stored elements in Compressed Sparse Row format&gt;
```

```python
print(cv.vocabulary_)
```

**Output:**
```
{'indian': 20, 'cricket': 6, 'team': 52, 'win': 60, 'world': 63, 'cup': 8, 'say': 44, 'capt': 2, 'virat': 58, 'koh': 24, 'held': 18, 'taunton': 50, 'england': 13, 'indian cricket': 21, 'cricket team': 7, 'team win': 53, 'win world': 62, 'world cup': 64, 'cup say': 10, 'say capt': 45, 'capt virat': 3, 'virat koh': 59, 'koh world': 25, 'cup held': 9, 'held taunton': 19, 'taunton england': 51, 'next': 32, 'lok': 28, 'sabha': 42, 'elect': 11, 'confid': 4, 'pm': 37, 'win next': 61, 'next lok': 33, 'lok sabha': 29, 'sabha elect': 43, 'elect say': 12, 'say confid': 46, 'confid indian': 5, 'indian pm': 22, 'nobel': 34, 'laurat': 26, 'heart': 16, 'peopl': 36, 'nobel laurat': 35, 'laurat heart': 27, 'heart peopl': 17, 'movi': 30, 'raazi': 38, 'excit': 14, 'spi': 47, 'thriller': 54, 'base': 0, 'upon': 56, 'real': 40, 'stori': 49, 'movi raazi': 31, 'raazi excit': 39, 'excit indian': 15, 'indian spi': 23, 'spi thriller': 48, 'thriller base': 55, 'base upon': 1, 'upon real': 57, 'real stori': 41}
```

##### Unigram + Bigram + Trigram

```python
cv = CountVectorizer(tokenizer=NLP_preprocess, ngram_range=(1,3)) # 1 to 3 gram
```

```python
cv.fit_transform(text)
```

**Output:**
```
&lt;4x95 sparse matrix of type '&lt;class 'numpy.int64'&gt;'
	with 99 stored elements in Compressed Sparse Row format&gt;
```

```python
print(cv.vocabulary_)
```

**Output:**
```
{'indian': 29, 'cricket': 9, 'team': 74, 'win': 86, 'world': 91, 'cup': 12, 'say': 63, 'capt': 3, 'virat': 83, 'koh': 35, 'held': 26, 'taunton': 72, 'england': 20, 'indian cricket': 30, 'cricket team': 10, 'team win': 75, 'win world': 89, 'world cup': 92, 'cup say': 15, 'say capt': 64, 'capt virat': 4, 'virat koh': 84, 'koh world': 36, 'cup held': 13, 'held taunton': 27, 'taunton england': 73, 'indian cricket team': 31, 'cricket team win': 11, 'team win world': 76, 'win world cup': 90, 'world cup say': 94, 'cup say capt': 16, 'say capt virat': 65, 'capt virat koh': 5, 'virat koh world': 85, 'koh world cup': 37, 'world cup held': 93, 'cup held taunton': 14, 'held taunton england': 28, 'next': 47, 'lok': 41, 'sabha': 60, 'elect': 17, 'confid': 6, 'pm': 54, 'win next': 87, 'next lok': 48, 'lok sabha': 42, 'sabha elect': 61, 'elect say': 18, 'say confid': 66, 'confid indian': 7, 'indian pm': 32, 'win next lok': 88, 'next lok sabha': 49, 'lok sabha elect': 43, 'sabha elect say': 62, 'elect say confid': 19, 'say confid indian': 67, 'confid indian pm': 8, 'nobel': 50, 'laurat': 38, 'heart': 24, 'peopl': 53, 'nobel laurat': 51, 'laurat heart': 39, 'heart peopl': 25, 'nobel laurat heart': 52, 'laurat heart peopl': 40, 'movi': 44, 'raazi': 55, 'excit': 21, 'spi': 68, 'thriller': 77, 'base': 0, 'upon': 80, 'real': 58, 'stori': 71, 'movi raazi': 45, 'raazi excit': 56, 'excit indian': 22, 'indian spi': 33, 'spi thriller': 69, 'thriller base': 78, 'base upon': 1, 'upon real': 81, 'real stori': 59, 'movi raazi excit': 46, 'raazi excit indian': 57, 'excit indian spi': 23, 'indian spi thriller': 34, 'spi thriller base': 70, 'thriller base upon': 79, 'base upon real': 2, 'upon real stori': 82}
```

#####  Bigram  +Trigram

```python
cv = CountVectorizer(tokenizer=NLP_preprocess, ngram_range=(2,3)) # tokenizer to do above 5 steps
```

```python
cv.fit_transform(text)
```

**Output:**
```
&lt;4x63 sparse matrix of type '&lt;class 'numpy.int64'&gt;'
	with 63 stored elements in Compressed Sparse Row format&gt;
```

```python
print(cv.vocabulary_)
```

**Output:**
```
{'indian cricket': 19, 'cricket team': 6, 'team win': 48, 'win world': 58, 'world cup': 60, 'cup say': 10, 'say capt': 41, 'capt virat': 2, 'virat koh': 54, 'koh world': 24, 'cup held': 8, 'held taunton': 17, 'taunton england': 47, 'indian cricket team': 20, 'cricket team win': 7, 'team win world': 49, 'win world cup': 59, 'world cup say': 62, 'cup say capt': 11, 'say capt virat': 42, 'capt virat koh': 3, 'virat koh world': 55, 'koh world cup': 25, 'world cup held': 61, 'cup held taunton': 9, 'held taunton england': 18, 'win next': 56, 'next lok': 32, 'lok sabha': 28, 'sabha elect': 39, 'elect say': 12, 'say confid': 43, 'confid indian': 4, 'indian pm': 21, 'win next lok': 57, 'next lok sabha': 33, 'lok sabha elect': 29, 'sabha elect say': 40, 'elect say confid': 13, 'say confid indian': 44, 'confid indian pm': 5, 'nobel laurat': 34, 'laurat heart': 26, 'heart peopl': 16, 'nobel laurat heart': 35, 'laurat heart peopl': 27, 'movi raazi': 30, 'raazi excit': 36, 'excit indian': 14, 'indian spi': 22, 'spi thriller': 45, 'thriller base': 50, 'base upon': 0, 'upon real': 52, 'real stori': 38, 'movi raazi excit': 31, 'raazi excit indian': 37, 'excit indian spi': 15, 'indian spi thriller': 23, 'spi thriller base': 46, 'thriller base upon': 51, 'base upon real': 1, 'upon real stori': 53}
```

# Now we can construct a vector of (length of dictionary) in which 1 represent at ith index the presence of ith word of dictionary in our sentence and 0 the absence (this is Vectorization)

```python
print(cv.vocabulary_)
length = len(cv.vocabulary_)
print()
print(length)
```

**Output:**
```
{'indian cricket': 19, 'cricket team': 6, 'team win': 48, 'win world': 58, 'world cup': 60, 'cup say': 10, 'say capt': 41, 'capt virat': 2, 'virat koh': 54, 'koh world': 24, 'cup held': 8, 'held taunton': 17, 'taunton england': 47, 'indian cricket team': 20, 'cricket team win': 7, 'team win world': 49, 'win world cup': 59, 'world cup say': 62, 'cup say capt': 11, 'say capt virat': 42, 'capt virat koh': 3, 'virat koh world': 55, 'koh world cup': 25, 'world cup held': 61, 'cup held taunton': 9, 'held taunton england': 18, 'win next': 56, 'next lok': 32, 'lok sabha': 28, 'sabha elect': 39, 'elect say': 12, 'say confid': 43, 'confid indian': 4, 'indian pm': 21, 'win next lok': 57, 'next lok sabha': 33, 'lok sabha elect': 29, 'sabha elect say': 40, 'elect say confid': 13, 'say confid indian': 44, 'confid indian pm': 5, 'nobel laurat': 34, 'laurat heart': 26, 'heart peopl': 16, 'nobel laurat heart': 35, 'laurat heart peopl': 27, 'movi raazi': 30, 'raazi excit': 36, 'excit indian': 14, 'indian spi': 22, 'spi thriller': 45, 'thriller base': 50, 'base upon': 0, 'upon real': 52, 'real stori': 38, 'movi raazi excit': 31, 'raazi excit indian': 37, 'excit indian spi': 15, 'indian spi thriller': 23, 'spi thriller base': 46, 'thriller base upon': 51, 'base upon real': 1, 'upon real stori': 53}

63
```

```python
import numpy as np
np.random.seed(123)
vector = np.random.randint(0,2,length)
vector # Vectorization
```

**Output:**
```
array([0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0,
       1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1,
       1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0])
```

```python
arr = cv.inverse_transform(vector)
```

```python
text = np.array(arr).flatten()
```

```python
'.....'.join(text)
```

**Output:**
```
'base upon real.....cricket team win.....cup held.....cup say.....cup say capt.....elect say confid.....excit indian spi.....held taunton.....held taunton england.....indian spi.....indian spi thriller.....koh world.....laurat heart.....movi raazi excit.....next lok.....next lok sabha.....raazi excit.....sabha elect.....say capt.....say confid.....say confid indian.....spi thriller.....thriller base.....thriller base upon.....virat koh.....win next.....win world cup.....world cup held'
```

# Tf-idf Normalization (Term Frequency - Inverse Document Frequency)(classifier)

- `Term frequency` means occurence of a term or word in a complete Document.(the number of times a term occurs in a document is called its term frequency).(The weight of a term that occurs in a document is simply proportional to the term frequency).


- `Inverse Document Frequency Factor ` means diminishes the weight of terms that occur very frequently in the document sentence and increases the weight of terms that occur rarely.