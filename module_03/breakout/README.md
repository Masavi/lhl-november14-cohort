# TI Prep Breakout

In this breakout session, you'll have an opportunity to review the content you've learned already in preparation for your upcoming Tech Interviews. For this breakout, be ready to share any questions that you have relating to Tech Interviews.

## Breakout Recording
https://vimeo.com/786436041/9757364af6

### 1. Tools and Technologies
---
#### 1.1 Git & Github

- VCS (Version Control Systems)
  - How to avoid losing everything!!!
  - repository / commits / branches / changes over time / separate workflows
- Collaborative Experience
- Git is what runs in your machine, Github is the website
- Within github we have gists

#### 1.2 Node.js and NPM

Node.js is the V8 Engine that's built into Google Chrome. Essentially is JS in your computer, outside of the browser.

NPM (Node Package Manager) is the package manager to handle Node.js libraries so we can donwload and use someone else's code in our projects.

#### 1.3 What is JavaScript?

Programming Language
  - The language that browsers understands!!!!
    - Browsers always understand: HTML, CSS, JS
  - Functionalities of Websites are done with JS: Most frontend

JavaScript is a high-level
  - high level
  - low level
  often just-in-time compiled language (JIT)
 
  that conforms to the ECMAScript standard.
  
  It has dynamic typing,
    var num = 10
  
  prototype-based
  
  object-orientation
  
  
  first-class functions
  
  It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.
  
  It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures
  
  Document Object Model (DOM).

### 2. JS Basic Topics
---
- Variables

- Operators
  - Arithmetic Operators
    - +, -, *...
  - Comparison Operators
    - ==, ===, >...
  - Logical Operators
   - &&, ||...

- Data Types
  - Primitives
    - String
    - Boolean
    - Number
    - Symbol
    - Undefined
    - Null
  - Objects
  - Arrays

- Class: allows us to define classes in ES6

- Conditionals
- For Loops
- Functions

### 3. Testing
---
  - Types of testing (unit and integration)
  - Why to test
    - Test runners (mocha)
    - Assertion libraries (chai)

### 4. Object Oriented Programming (OOP)
---

Enables the developer to encapsulate BEHAVIOR AND PROPERTIES

const calculator = new Calculator()

calculator.add(5,3);
calcultor.multiply(3,2);

Is defined by CLASSES and OBJECTS

- Classes are templates to build Objects
- Objects are INSTANCES, or creating copies from the template

4 Pillars of OOP:
  1) Abstraction: I can abstract anything into a class and object from real life
  2) Encapsulation: I can put everything regarding behavior and properties together
  3) Polymorphism: Objects (copies) can have multiple forms
  4) Inheritance: Classes and Objects can receive behavior and properties from Parent Classes (or Superclasses)


### 5. JS Advanced Topics
---
- Higher Order Functions
- Callbacks

- ECMAScript (6 and Beyond) ECMAScript 6

- Asynchronous JavaScript
  - Synchronous code: waterfall, executed sequentially
  - Asynchronous code: runs afer the sync code. Which code is asynchronous? Everything external or that comes from an API.

  setTimeout -> Browsers API
  http Request (AJAX) -> AJAX API

- Promises
  Are a way of handling asynchronous code. Or better yet, is a way of handling code that may or may not finish executing, or code that you don't know how much time is gonna take in execution.

  Frontend example

    Website where you can type a breed of a cat, wait for the server response... then decide what to do.

    Promise pending/resolved/rejected

  Backend example

    Application that reads csv files and import them into google spreadsheets.

- Recursion
  It is when the definition, uses it's own definition to define itself.

  GNU - Linux

  GNU: GNU is Not Unix


### 6. TCP/IP Protocol Family
---
The protocol family that makes the internet possible. Thanks to this we have the "Client-Server Architecture"
- Networking (the way that computers and devices interact with each other)
- TCP/IP (the most important protocol family tranfer-control-protocol/internet-protocol)
  - It helped as a foundatioun for the Hyper-Text Transfer Protocol (HTTP)

### 7. HTTP/HTTPS
---
Allows us to to talk between clients and servers between HTTP Requests (GET, POST, PUT, PATCH, DELETE, etc...)
This is the way that we can share data across different computers.

STATUS CODE: 200, 404, 301, 201

- JSON: we usually exchange data between clients and servers and JSON format.
- APIs: Application Programming Interfaces -> waiters and waitresses of the internet!

### 8. Web Servers
---
Are computers that enable you to talk to them through HTTP requests!
Every Web Server is an API, but NOT ALL APIs are web servers!

- Express.js
  We can build our own web servers and we can serve web pages or simply data.

