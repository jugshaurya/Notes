---
title: "Difference Between Some Terms that makes you a Better Developer."
slug: medium-difference-between-some-terms-that-makes-you-a-better-developer
date: 2020-04-26
authors: [shaurya]
tags: [medium, chatty-api, flux, web-development, chunky-api, redux]
---

<!-- generated-blog-post -->

> **Originally published on Medium**: [Read on Medium](https://medium.com/@shauryasinghal84/difference-between-some-terms-that-makes-you-a-better-developer-e4da04a74925?source=rss-8a8ccc073283------2)

<!-- truncate -->

### Difference Between Some Terms that makes you a Better Developer

![](https://cdn-images-1.medium.com/max/1024/0*6miaodHwbkw3tCUH)

*Photo by [Hal Gatewood](https://unsplash.com/@halgatewood?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

Interview Season is the tensest season in the life of an individual and as a software developer whose interviews are coming up. It is the time to revise the concepts that I learned in past years because everything is going to be tested in the interview, well at least what I have written in my resume. While doing the revision in the field. There were some nifty questions in front of me that I thought must be shared and hence this article.

My Background goes from learning vanilla javascript and then moving on to ReactJS Library to write modular (well component) and clean code and later on adding Redux to manage the state and avoid prop drilling. One question that bugs me out the most is the difference between:-

### **MVC architecture and Flux/Redux architecture**

First of all the 3-tier structure are the building blocks of a web application which includes the database, client, server (model, view, controller respectively). Both of them are design patterns helping us maintain, control, separate the layers/the chunk of files while building an application. The difference being Flux architecture is the same as MVC(what!) but with a different approach that focuses on unidirectional data flow(oh! ok!).

In MVC architecture we have [views as clients], [controllers as servers] and [models as database]. Now you think yourself clients should not have direct access to the database so to secure the data(like other users data like their password) and that is what actually happens in MVC pattern.

***MVC Storyline***

- User sees the views (the frontend pages) which have data embedded from the database.- The user interacts with views like clicking a button which in turn updates the views but here is the catch!- Updating the views means changing the data but since the user can't directly change the data in the database, the server comes into the picture.- The server is something over which a client makes a request for the resources mainly through HTTP methods(get, post, put, patch, delete) & server talks to the 3rd tier(database) to fetch the new data/resource and creates new views depending upon the data(means database results in new view***s ***that are then sent again to the client with the updated data).

All good till now but **Problems!!**

- Although indirectly [views changes models] and [models changes views] it results in clashes and affects the performance and unpredictability of the final result. **HOW? (read -> as then) **view1 updates model1 -> model1 updates view2 -> view2 updates model2 and model1 -> model1 and model2 updates view1 and view2. GOT Confused right? this is what developers at Facebook feel too. since Facebook has more than 50,000 files(components), the data maintainability/consistency became the problem (first in their newsfeeds). so they come up with the solution and named it **Flux/Redux Architecture**. (Note that flux is the better version of MVC only it just helps the data flow to become maintainable).

***Flux to rescue with its Unidirectional Data Flow***

- **what we want to do: **save our data and maintain the consistency of it. so our central focus is on data and data must be the single source of truth at the times where data inconsistency may be the problem and we need to resolve the conflict for the same. Let’s call this data **Store.**- Instead of views updating the models, we appointed a bodyguard known as the **action,** every update from views to models goes through this action bodyguard, which handles those multiple updates and let only a single update at a time change the Store data so to avoid the data inconsistency. Actions **dispatches(**give the key to the door behind which money is hidden**)** an event to let a view update the Store and since Store is a single source of truth models can ask the store to get the data which is for sure consistent irrespective of various updates or clashes.

### *Chunky vs Chatty API*

- As everyone knows a person is said to be chatty if he/she talks so much. Hence the term Chatty API is the one which talks a lot to the server to get pieces of information. For every change a user performs(submitting a form, updating information as per every user click, etc), the user has to talk to the server to retrieve the updated information.- But nowadays, chunky API's are famous, which in one go talk to the server to retrieve the piece of js code and save it to clients machine and thanks to client-side routing, a browser mimics talking to the server, but in reality, it is talking to the code saved at the client machine. making it fast after the initial load of the website, where these chunks are fetched. And if something is not found in those chunks, he can request to the server to retrieve another chunk. This is the concept for various modern libraries/ frameworks like React, Vue and more...

In conclusion,
(#request to server by Chatty API's) > (#request to server by chunky API's).
### Dynamic Website vs Static Website

- A website whose content changes according to the user viewing the site like Facebook is termed as **Dynamic Website** (Hence required Authentication, Authorization).- A website which remains the same for all users like MDN is termed as **Static Website**. (Hence no need to check who is the user viewing their site).

### **Const vs Let**
Yes, I know you know it and all, but this difference is important so to have a convention of your own! (or say the global one).

#### Rules for using let and const

let and const also have some other interesting properties.

- Variables declared with let can be reassigned, but can’t be **redeclared** in the same scope.- Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.

#### Use cases

The big question is when should you use let and const? The general rule of thumb is as follows:

- use let when you plan to reassign new values to a variable, and- use const when you don’t plan on reassigning new values to a variable.

Since const is the strictest way to declare a variable, people suggest that you always declare variables with const because it'll make your code easier to reason about since you know the identifiers won't change throughout the lifetime of your program. If you find that you need to update a variable or change it, then go back and switch it from const to let.That’s pretty straightforward, right? But what about var? Is there any reason to use var any more? *Not really*. From now on, ditchvar and use let and const.

### That’s it!

We learned a lot of new terms used as the terminology in the field of Software Development. I will keep on updating this article to add more details to it. So stay tuned for that.

Congrats! You completed this piece of content. Have fun, keep learning, and always keep coding. Follow for more content and give a clap if you want to.

This is Shaurya Singhal, Signing Off, Sayonara✌.

Other terms you may google, I will add them as soon as I got time.😒(yah Shaurya.)

- SOLID, KISS, YAGNI- CSR vs SSR- Library vs Framework

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=e4da04a74925)