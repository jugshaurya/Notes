---
title: "Virtual Environments and Packages"
slug: python-1-learn-python-13-creating-virtual-environments
date: 2022-01-27
authors: [shaurya]
tags: [python, programming]
---

<!-- generated-blog-post -->

> **Source**: [View original notebook on GitHub](https://github.com/jugshaurya/Learn-Python/blob/master/1-Learn-Python/13-Creating-Virtual-Environments.ipynb)
>
> **Category**: Python / 1 Learn Python

<!-- truncate -->

# Virtual Environments and Packages


- use `pip list` to see which packages are installed in our directory.


-  First up globally use `pip install virtualenv` to install virtualenv package.


- Now to create a virtual env in our desired folder use `virtualenv project1_env` to make a folder project1_env as our python virtual environment.(this will install setuptools,pip,wheel in project1_env to create a virtual environment for us)


- next step is to activate this env type  `project1_env\Scripts\activate.bat` note the backward slashes`\`


- to come out of your virtual environnment just type `deactivate`

#### Introduction
- Python applications will often use packages and modules that don’t come as part of the standard library. Applications will sometimes need a specific version of a library, because the application may require that a particular bug has been fixed or the application may be written using an obsolete version of the library’s interface.



- This means it may not be possible for one Python installation to meet the requirements of every application. If application A needs version 1.0 of a particular module but application B needs version 2.0, then the requirements are in conflict and installing either version 1.0 or 2.0 will leave one application unable to run.



- The solution for this problem is to create a virtual environment, a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages.


- Different applications can then use different virtual environments. To resolve the earlier example of conflicting requirements, application A can have its own virtual environment with version 1.0 installed while application B has another virtual environment with version 2.0. If application B requires a library be upgraded to version 3.0, this will not affect application A’s environment.