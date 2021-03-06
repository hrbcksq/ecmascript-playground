# First class functions
In computer science, a programming language is said to support first-class functions (or function literal) if it treats functions as first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions.
This page also illustrates it beautifully:

> Really, just like any other variable

* A function is an instance of the Object type
* A function can have properties and has a link back to its constructor method
* You can store the function in a variable
* You can pass the function as a parameter to another function
* You can return the function from a function

The notion of "first-class functions" in a programming language was introduced by British computer scientist Christopher Strachey in the 1960s. The most famous formulation of this principle is probably in Structure and Interpretation of Computer Programs by Gerald Jay Sussman and Harry Abelson:

* They may be named by variables.
* They may be passed as arguments to procedures.
* They may be returned as the results of procedures.
* They may be included in data structures.

Basically, it means that you can do with functions everything that you can do with all other elements in the programming language. So, in the case of JavaScript, it means that everything you can do with an Integer, a String, an Array or any other kind of Object, you can also do with functions.

# Revealing module pattern

Exposing only the properties and methods you want via an returned objects.

A very common used and clean way to structure and protect code with modules.

# Non-blocking 
Doing other things without stopping your programming from running, this is made possible by Node's doing things asynchronously.

> Event Driven Non-Blocking I/O in V8 Javascript.

Javascript is single thread and synchronous, but V8 and nodejs is asynchronous.
