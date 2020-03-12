# Class 01 --- Node Ecosystem, TDD, CI/CD

## Lecture Videos 

[Saturday Morning](https://frontrowviews.com/Home/Event/Details/5e56f2bee4e6df15a8a39b82) || [Saturday Afternoon](https://frontrowviews.com/Home/Event/Details/5e684f72eee6d91618503d44) 

## Lecture Overview

Welcome to your first class of Advanced JavaScript at Code Fellows! You've done a lot of hard work to get here, and throughout this course you'll sharpen your development skills even further. 

In our first class, we'll start with an overview of the course schedule, assignments, and expectations. Then we'll dive into our main topics of Node.js, Test Driven Development and Continuous Integration. By the end of this lecture, you should be able to: 

- [x] Understand what Node.js is and why we use it 
- [x] Understand what the pros and cons of Test Driven Development are
- [x] Learn how to set up Continuous Integration for your lab assignments 
- [x] Setup a Node.js package and use `npm`
- [x] Create a CommonJS module 
- [x] Write a unit test
- [x] Setup live build testing on your lab assignments 

Prior to class, review the readings below and answer the discussion questions in your canvas reading assignment. 

## Reading

What does it mean to run JavaScript code? In previous courses, you're probably familiar with creating an HTML page that calls functions from a JavaScript file, but what about running JavaScript _without_ any HTML attached? 

In this course, we will start by focusing on running JavaScript outside of a web browser. This lets us do a lot more with JavaScript aside from simple websites. How do we run JavaScript outside of a browser? We use a new **ecosystem**, or environment, called **Node.js** to run our JavaScript code. 

This has been extremely influential in the world of startups! Many startups begin with a simple web application and then grow their application slowly to become more complex. When they start, they just need HTML and JavaScript developers to make a simple website. Later, they might want to add in a database, an API, events, triggers, a phone app, and more. Luckily, JavaScript now also supports all of these needs with Node.js, so the startup can keep all of their JavaScript developers and seamlessly transition. 

So we'll be "leveling up" our knowledge of JavaScript and its capabilities throughout this course. We'll be introducing a lot of features that older, more complex coding languages like C# and Java have built in, but which JavaScript has only acquired in the last decade. 

In our introduction to Node.js, we'll learn about **modules** and **packages**, two fundamental Node.js concepts. 

Modules are pieces of JavaScript code that are meant to be _called_ in another file or chunk of code. Think of a function with inputs and outputs; you can define the function, but it's not run until the function is called later in the code. 

Packages are an extension of modules, and they are what make the Node.js ecosystem so powerful. Packages allow developers to make complex chunks of code that serve a certain purpose, and then publish and share those packages for other developers to use. 

We can use any packages created and shared by independent developers by using the **node package manager,** abbreviated as `npm`.

In this class, we'll also cover some standard development practices to ensure that code is working correctly. We'll talk about how to write tests for your code using the JavaScript testing framework **Jest**. Many developers employ a practice called **test driven development**, where they write tests for their code _before_ they write the actual code itself! This means planning out the input format and expected outputs of a module before development, and it can help prevent uncertainty during the development process. 

Many developers also have some method of **continuous integration** or **continuous deployment**. Simply put, this means a series of actions that take place every time there is a change in code. Usually this means running tests to check if all tests pass, and in the case of continuous deployment it also means publishing any code changes to a live endpoint (either a website or a server). We'll talk about continuous integration methods for your assignment JavaScript code. 

At the end of this class, you should have a solid understanding of how to write, run and test JavaScript code completely outside and independent of a web browser. In the next few classes, we'll continue learning about the power of JavaScript *without* having to rely on HTML or CSS to display a webpage. 

### External Reading / Viewing 

Save or skim through the following links to help broaden your understanding.

|                                                              |
| ------------------------------------------------------------ |
| [About `npm`](https://docs.npmjs.com/about-npm/index.html)   |
| [Jest API Documentation](https://jestjs.io/docs/en/getting-started) |
| [V8 Engine Docs](https://v8.dev/docs)                        |
| [Wikipedia - Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) |
| [GitHub Actions Documentation](https://help.github.com/en/actions) |
| [Continuous Integration, Delivery and Deployment](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment) |
| [Node.js Modules](https://nodejs.org/docs/latest/api/modules.html) |

### Vocabulary 

Familiarize yourself with the following vocabulary terms. We will be covering their definitions in class. 

| Term                          |
| ----------------------------- |
| ecosystem                     |
| Node.js                       |
| V8 Engine                     |
| module                        |
| package                       |
| node package manager (`npm`)  |
| Test Driven Development (TDD) |
| Jest                          |
| Continuous Integration (CI)   |

### Handy Code Snippets

Feel free to skim these code snippets, they are mainly here for your reference after class lectures. 

#### Terminal Commands

| Command                    | Behavior                                                     |
| -------------------------- | ------------------------------------------------------------ |
| `npm init`                 | Initializes a package with a `package.json` file             |
| `npm start`                | Executes the "start" script within the `package.json` file   |
| `npm test`                 | Executes the "test" script within the `package.json` file    |
| `npm install <package>`    | Installs a specified `<package>` onto the current package    |
| `npm install -g <package>` | Installs a specified `<package>` for the entirety of Node.js on your machine |
| `node <file>`              | Runs a specified `<file>` using the Node.js ecosystem        |

#### `package.json` Scripts

```javascript
  "scripts": {
    "start": "node index.js",
    "lint": "eslint **/*.js",
    "test": "jest --verbose --coverage",
    "test-watch": "jest --watchAll --verbose --coverage"
  },
```

#### Sample GitHub Action 

``` javascript
name: Node CI

on: [push,pull_request]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: npm install, build, and test
      run: |
        npm ci
        npm run build --if-present
        npm test
      env:
        CI: true
```

## Discussion Questions

Using the discussion entry in your canvas assignment, answer the following questions to the best of your ability. You will not be graded on correctness, but rather on your attempt to answer the question. 

1. Why would you want to run JavaScript code outside of a browser? 
2. What is the difference between a module and a package? 
3. What is one benefit of Test Driven Development? 
4. What is one potential downside of Test Driven Development? 
5. What does the node package manager do? 


