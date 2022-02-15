# Lesson 1 - Variables

Variables lay the foundation for anything you will do in programming. In any programming language, it's important to make effective use of variables.

## Variables

Variables in programming languages work just like variables in algebra. You have the power to come up with some arbitrary name, and save some data to that name. As you can imagine, that's a pretty powerful tool! Consider some examples:

- You need to do some tricky calculation that will be used in many places in your program. You can do the calculation once, save the result to a variable, then use that result anywhere else without having to run the calculation again.
- You need to find all the elements on a website that meet a certain requirement (maybe all of the elements that use an `h1` tag), and change the color of them. You can save that _entire list_ of elements in a variable, and have it available to use whenever you need it (maybe you change the color once, then change it back depending on a specific condition)

### How to Declare and Define a Variable

Variables are _declared_ when you create them and assign them a name. Variables are _defined_ when you assign some piece of data to that variable (don't worry too much about what that _data_ is yet, it will be covered in the next section about Data Types).

```javascript
// Declaring a variable;
let user;
```

In the above example the variable `user` has been _declared_ by using the `let` keyword. But it hasn't yet been _defined_ because it has no data assigned to it. Let's do that now...

```javascript
// Define the user variable
user = { firstName: "Grace", lastName: "Hopper", title: "Admiral" };
```

Using the _assignment operator_ (`=`), we have defined the `user` variable to be [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper)

These two steps of declaring and defining a variable don't need to be separated. In fact, you will definitely see them happening together, much more often than them happening in two separate steps. That would look like this:

```javascript
let user = { firstName: "Grace", lastName: "Hopper", title: "Admiral" };
```

Here, the `let` keyword is used to declare the variable (`user`), and _in the same line_ the assignment operate (`=`) is used to assign data to the variable.

This is starting to look cleaner, but there's one more minor point to consider before we wrap up variables...

### `let` vs `const`

In javascript there are two keywords used to define variables, `let` and `const`. Both accompolish the same goal of declaring a variable, but there is a subtle difference...

- Variables declared with the `let` keyword can be _reassigned_
- Variable declared with the `const` keyword cannot be reassigned (they are CONSTant)

This effects us in a few ways. First of all, with `const` we can split the declaring and defining of a variable into two steps. Using const will always look something like this:

```javascript
const user = { firstName: "Grace", lastName: "Hopper", title: "Admiral" };
```

It also means that when we use `const`, we can't change our mind later and change the value assigned to the variable. With `let` we can do something like:

```javascript
let word = "hello";
word = "world";
word = "nevermind";
word = "whatever";
```

In the above example, we're reassigning the value of the `word` variable on each line.

If we tried that with a variable declared with `const`, we'll get an error like this...

```javascript
const word = "hello";
word = "world";
```

Uh oh! we can't do that and we'll get an error like this one :point_down:

```
Uncaught TypeError: Assignment to constant variable.
```

> side note - when we look at data types we'll see that there are still ways that `const` variables can change - they aren't _truly_ contant in the way we may think of that word

#### Which is better? `const` or `let`?

As a general rule, we should use `const` as much as possible. Using `const` prevents us from accidentally changing the value of a variable. However, we will always run into times that we need to use let, as we'll see in a later lesson.

## Practice Time!

In your text editor, open the file `01_variables/variables.js`  
Find the four variables, all declared with the `const` keyword (you can ignore the `export` keyword for now). Assign the correct value to each variable based on what you see in the comments (the lines starting with `//`). To check your work run the tests for the file (`npm run test 01_variables/variables.test.js`). When all the tests are green, we'll move on to data types!
