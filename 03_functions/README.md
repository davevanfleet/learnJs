# Lesson 3 - Function Basics

Functions are fun! Just like in math, functions allow us to take some data as inputs, and do stuff to it or with it. Here are some examples:
> Part of your program requires taking two numbers and adding them together, so you can use the sum somewhere else.  A function can do that!  
> While a page is loading, you want to show a loading spinner, and wehn it finishes loading, show the page. Functions do that too!
> When a user submits a form, you need to send the form data to another part of your application.  What do we use? functions!
In javascript, functions are used for pretty much everything. Entire applications can be wrapped up in functions when using javascript frameworks. Let's take a look at some of the basics of functions, using the addition function above as an example.

## Basic Function Structure
Let's say we need a function that adds two numbers.  Here's how it may look:
```javascript
const sum = (a, b) => {
    return a + b
}
```
This example should be pretty readable (it should make sense just by reading the words in English).  First, we're declaring a variable named `sum`.  That variable is assigned to:
```javascript
(a, b) => {
    return a + b
}
```
:point_up: This is the actual function :point_up:   
The function takes two _parameters_, `a` and `b`.  These parameters behave like variables within the scope of the function. Inside of the function block (the code between the curly braces), we see a keyword, `return`.  As you may expect, this _returns_ a value from the function (in this case `a + b`).  
This all looks great, but how do we actually use our function now?
```javascript
const a = 1;
const b = 2;
const result = sum(a, b); // result will be equal to 3
```
Note that our variables could be named anything, they don't need to match what the parameters are called in the funtion.  So this would be just as acceptable :point_down:
```javascript
const first = 1;
const second = 2;
const result = sum(first, second); // result will be equal to 3
```
We also don't even need to use variables...
```javascript
const result = sum(1, 2); // result will be equal to 3
```

## Extra Notes
We're using what's known as _fat arrow notation_ for these functions.  (the "fat arrow" is `=>`).  This is a newer syntax for writing javascript functions, and it is preferred by most developers.  However, you will also see the other syntax, that looks like this:
```javascript
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2) //result is equal to 3
```
For now we're only looking at very simple examples of functions, and the practice for this unit will only include functions that return the result of simple math operations.  In a later unit, once we have a larger foundation, we'll revisit functions and do some more advanced work.

## Practice
In yout text editor, open the file `03_funtions/functions.js`.  Finish writing the first four functions as they're decribed in the comments (hint: for each function you should only need to add a `return` statement using the parameters that are already defined). You'll need to write the last function completely.  Check your work using the tests `npm run test 03_functions`