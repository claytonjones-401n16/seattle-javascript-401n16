# Class 02 --- Classes, Inheritance, Functional Programming

## Lecture Videos 

[Tuesday](https://frontrowviews.com/Home/Event/Details/5e56f389e4e6df15a8a3b8b3) || [Wednesday](https://frontrowviews.com/Home/Event/Details/5e56f389e4e6df15a8a3b8d0) 

## Lecture Overview

As we continue our deep dive into JavaScript, we have to learn of object-oriented programming. This class is focused on how modularity in our code can be improved with classes and inheritance. By the end of this lecture, you should be able to: 

- [x] Understand the difference between pure functions, higher-order functions, and immutable state
- [x] Understand the concept of object-oriented programming
- [x] Understand class inheritance 
- [x] Have familiarity with the JavaScript error objects
- [x] Create a class using ES6 class syntax
- [x] Create and throw a custom JavaScript error

Prior to class, review the readings below and answer the discussion questions in your canvas reading assignment. 

## Reading

Everything that you use in JavaScript can be thought of as an **object**. A variable that stores some data is an object, and JavaScript even lets you create a generic collection of key-value pairs, also reffered to as an object. 

JavaScript is both famously and infamously known as a language that "does not enforce type". What does this mean? Well, consider another language such as Java, where every variable must have a specific object type attached to it: 

```java
String myStr = "Hello"; 
Integer myInt = 2; 
Character myLetter = 'h'; 
Float myFloat = 3.45; 
```

Once you define an object in Java, you can no longer change the variable to be of a different type. Thus, `myStr` can never be set to a number, and `myInt` can never be set to a string. JavaScript, on the other hand, does not care about the type of an object, and you can change it on the fly as needed: 

```javascript
let myObject = "Hello"; 

myObject = 2;   // valid
myObject = 'h'  // valid
myObject = 3.45 // valid
```

Because JavaScript doesn't enforce type, you can get into strange situations where your variable is not containing the type of data that it should. These kinds of errors can become very hard to track and solve in large code bases. 

Many programmers use **object-oriented programming** when developing; they categorize all of their data (stored as variables, aka objects) into distinct object types, that adhere to rules on what kind of data the object stores. 

This methodology has been largely ignored by JavaScript developers, because historically there was no way within the language to enforce it. Now, JavaScript supports the creation of **classes**, which has allowed for object-oriented programming to be practiced. 

A class defines a type of an object. Think of it as a standard JavaScript object, just with specific rules and one blueprint. Some classes even have functions that allow for data operations in a controlled way. And best of all, classes can be defined in relation to one another, making it simple to create rules on your data that only have to be defined once. 

For example, let's say you wanted to create "Number", "Float" and "Integer" object types in JavaScript. You have a certain set of rules on what a valid "Number" is; there are only digits from 0-9 and possibly a negative sign or a decimal point. An "Integer" is a further rule on top of "Number": there can be no decimal point. A "Float" is also a further rule on top of "Number": it can accept a max of seven digits on either side of the decimal point. With classes and **inheritance**, you can quickly define these object types and their limitations. 

We'll explore writing our own object types via classes in this lecture. We'll also touch upon some pre-exisiting classes in JavaScript you can use to your own advantage, and we'll briefly talk about ways to make your functions better and more professional using the concepts of **functional programming**. 

### External Reading / Viewing 

Save or skim through the following links to help broaden your understanding.

| Links                                                        |
| ------------------------------------------------------------ |
| [What is Functional Programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0) |
| [Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) |
| [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) |
| [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) |
| [Node.js Error Documentation](https://nodejs.org/dist/latest-v6.x/docs/api/errors.html) |

### Vocabulary 

Familiarize yourself with the following vocabulary terms. We will be covering their definitions in class. 

| Term                              |
| --------------------------------- |
| functional programming            |
| pure function                     |
| higher-order function             |
| immutable state                   |
| object                            |
| object-oriented programming (OOP) |
| class                             |
| prototype                         |
| `super`                           |
| inheritance                       |
| constructor                       |
| instance                          |
| context                           |
| `this`                            |

### Handy Code Snippets

Feel free to skim these code snippets, they are mainly here for your reference after class lectures. 

#### Pure Function

```javascript
function multiply(x,y) {
  return x * y
}
```

#### Higher-Order Function 

```javascript
const arr2 = arr1.map(function(item) {
  return item * item;
});
```

#### Prototype Inheritance

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {}

function Bird(name) {
  Animal.call(this, name);
}

Bird.prototype.fly = function() {}
```

#### Class Inheritance

```javascript
class Animal {
  constructor(name) {
    this.name  = name;
  }
  walk() {}
}

class Bird extends Animal {
  fly() {}
}
```

#### Try-Catch Block

```javascript
try {
  // do something with data
} catch(e) {
  // do something with error e
}
```

#### Standard Error Types 

| Type             | Reason                                                       |
| ---------------- | ------------------------------------------------------------ |
| `Error`          | Generic error                                                |
| `ReferenceError` | An attempt was made to access a variable that is not defined |
| `SyntaxError`    | The JavaScript code was not valid / decipherable             |
| `TypeError`      | A provided argument was not the allowable type               |
| `SystemError`    | A Node.js error that occurs when a system error has occurred (see `SystemError` table below) |

#### System Error Types

| Flag           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `EACCESS`      | There was an attempt to access a file without the right permissions |
| `EADDRINUSE`   | There was an attempt to start a server on a PORT that is already in use |
| `ECONNREFUSED` | A connection was deliberately refused by the target machine  |
| `ECONNRESET`   | A connection was forcibly closed by a peer                   |
| `EEXIST`       | A file exists and the attempted action required that it didn't |
| `EISDIR`       | There was an action expected to act upon a file, but found a directory instead |
| `EMFILE`       | Too many files were open for your operating system to handle |
| `ENOTDIR`      | There was an action expected to act upon a directory, but found something else instead |
| `ENOTEMPTY`    | An action expected an empty directory, but found one with data in it |
| `EPERM`        | There was an attempt to do something that you currently don't have permissions to do |
| `EPIPE`        | There was an attempt to write data to a connection that had been closed |

## Discussion Questions

Using the discussion entry in your canvas assignment, answer the following questions to the best of your ability. You will not be graded on correctness, but rather on your attempt to answer the question. 

1. What is one benefit of JavaScript not enforcing type? 
2. What is one downside of JavaScript not enforcing type? 
3. Should the parameters of a function be changed when the function returns? Why or why not? 
4. Describe a type of data that has rules, aside from the given examples of Number, Integer and Float. What are the rules the data should follow? 
