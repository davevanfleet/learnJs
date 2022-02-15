# Lesson 2 - Data Types

When we are programming, we are working with some form of _data_. That data may be something simple like the word "hello" or the number 42, or it may be something complicated like all of the available information of the currently-logged-in user of your web app. All data can be categorized into a certain _data type_. Some programming languages, like Java or C#, _really_ care about what _type_ of data you plan to use/are using. Javascript keeps things pretty simple. Let's go over some of the basic data types that Javascript uses:

## String

The `String` data type is what is used for words, letters, characters, etc. `String`s are identified with quotes (double " or single ') or backticks (`). _Anything_ in quotes or backticks is a string. Which means in this example...

```javascript
const number = "42";
```

The variable `number` has the value of `"42"`, which is _not_ the number `42`, but the string `"42"`. Sometimes we get caught trying to do math on Strings, which doesn't make any sense in the real world, but imagine you have two variables saved as strings:

```javascript
const x = "1";
const y = "2";
```

What do you think might happen if we tried to do `x + y`? We recognize the values of the `x` and `y` values as numbers and may think adding them would give us `3`. But becuase they are _strings_, we get this result:

```javascript
const x = "1";
const y = "2";
const sum = x + y; // "1" + "2" = "12"
```

For more info on strings, check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Number

The `Number` data type is used for, well, numbers...

```javascript
const x = 1;
const y = 2;
```

`Numbers`s can be used for math operations just like we would expect...

```javascript
const x = 1;
const y = 2;
const sum = x + y; // 1 + 2 = 3
```

In javascript (unlike some other programming languages), the programmer doesn't need to distinguish between integers and decimals (usually called `floats` in programming). Javascript considers all of them to be `Number`s

### Math Operations

Just as we would expect, we can do simple mathematical operations on Javascript numbers.

```javascript
const x = 1;
const y = 2;
const result = x + y; // 1 + 2 = 3
```

```javascript
const x = 1;
const y = 2;
const result = x - y; // 1 - 2 = -1
```

```javascript
const x = 1;
const y = 2;
const result = x * y; // 1 * 2 = 2
```

```javascript
const x = 1;
const y = 2;
const result = x / y; // 1 / 2 = 0.5
```

> Side note - even though Javascript doesn't distinguish between them, floats aren't always reliable and it's good to be on guard when using them. For example...  
> Open the dev tools in Chrome (open a tab and press command + option + j)  
> Go to the "Console" tabe and enter `69.60 * 100`.  
> What do you expect the answer to be? `6960`? Yeah, that's what I would expect too :triumph:

For more info on numbers, check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Boolean

[Boolean](https://en.wikipedia.org/wiki/George_Boole) is a fancy word for true/false.

A Javascript `Boolean` is one of two values, `true` or `false`

> Note that these are different than `"true"` and `"false"` - do you think we could get messed up by strings when trying to use Booleans, similarly to how we get messed up when trying to do math on strings?

Javascript also has a concept of "truthy" and "falsey". We'll get into this more when we get to conditional logic, but just be aware that we don't always need to use an actual `Boolean` to get the sense of something being true or false.

For more info on booleans, check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Null and Undefined

Javascript considered `undefined` and `null` as their own data types. In most cases these are pretty much interchangeable. When variable has no value assigned to it, it is assignmed the value `undefined`. For something to be assigned the value `null`, it needs to be explicitly defined as such.

```javascript
const whatever; // this variable is assigned the value undefined
const defined = null; // this variable is assigned the value null
```

> :bulb: Can you see why we can't split up the declaring and defining of a `const` variable now?

For more info on null, check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

For more info on undefined, check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

## Arrays

Arrays can be though of as just a "list of stuff". In Javascript, arrays technically aren't their own data type, but rather are technically considered `Objects` (considered below). For the sake of learning the basics, just think of arrays as their own data type...

Arrays are denoted with square brackets (`[]`). The `elements` inside an array are separated by commas. The elements don't need to be of the same data type, but typically they are.

For example:

```javascript
const numbersArray = [0, 1, 2];
```

```javascript
const wordsArray = ["hello", "world"];
```

```javascript
const mixedArray = [0, "hello", true];
```

We'll cover `Arrays` more in their own lesson, but here's a quick preview of what it looks like to work with arrays...

Elements inside an array can be accessed by their `index`. The index is pretty much the place in line, starting at 0. For example, the first element in an array is at index 0. The second element is at index 1, the third is at index 2, and so on. To use the index to access the element, we use bracket notation. For example:

```javascript
const wordsArray = ["hello", "world"];
wordsArray[0]; // "hello"
wordsArray[1]; /// "world"
```

For more info on arrays, check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Objects

Objects are the most complicated Javascript data types, and also the most useful. Some programming languages may call this data type a Dictionary, because its made of many `keys` (words) and `values` (definitions) that are paired together. This is probably the most used data type. We'll cover objects in their own lesson, but here is a little taste of what they look like:

```javascript
const user = {
    firstName: "Ada",
    lastName: "Lovelace",
    username: "countess_ada",
    interests: ["math", "computers"],
    lastLoginDate: "2022-02-15",
    role: "admin"
    confirmed: true,
    verified: false,
    outstandingBalnceCents: 10000
}
```

Don't be overwhelmed by this now. Let's just notice a few simple points about this object example.

- It's denoted by curly braces (`{}`)
- It consitsts of a list of `key: value` pairs that are separated by a comma
- The values themselves can be any data type

Objects may be more complicated but they're also very powerful. Again, don't get too overwhelmed by this. but let's get a sample of what we can do with objects based on our above example:

```javascript
user.firstName; // Ada
user[firstName]; // Ada

user.outsandingBalanceCents = 10000;

const paymentCents = 5000;
const remainingBalance = user.outstandingBalance - paymentCents; // 5000
```

And a little taste of what it will look like in React

```html
<h1>{user.firstName} {user.lastName}</h1>
<span>{user.role} lasted logged in on {user.lastLogin}</span>
<p>Balance Due: {user.outstandingBalance}</p>
```

For more info on objects, check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
