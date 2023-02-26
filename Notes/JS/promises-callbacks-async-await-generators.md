### Callbacks, Promises, Async await and Generators 

[TOC]

# Callbacks

In JavaScript, a callback is a function that is passed as an argument to another function and is executed when that function is finished executing. The purpose of a callback is to allow you to specify what happens after an asynchronous operation completes.

Callbacks are used extensively in JavaScript to handle asynchronous operations, such as reading files, making API requests, and handling user events. Instead of waiting for these operations to complete before continuing, callbacks allow you to specify a function that should be called when the operation is complete.

Here's an example of using a callback with the setTimeout function:

```javascript
function delayedLog(message, callback) {
  setTimeout(function() {
    console.log(message);
    callback();
  }, 1000);
}

delayedLog("Hello, world!", function() {
  console.log("Callback function was called!");
});
```

In this example, the delayedLog function takes a message and a callback function as arguments. It uses the setTimeout function to wait for one second before logging the message to the console and calling the callback function.

When you call delayedLog, you pass in a message and a function that will be called after the message is logged. In this case, the function simply logs a message to the console.

Callbacks are an important part of JavaScript, especially when working with asynchronous operations. While they can be powerful, they can also lead to complex and hard-to-read code, especially when multiple callbacks are used in sequence. This is where Promises and async/await come in, as they provide a more elegant way to handle asynchronous operations.

***

# Promises
A Promise is an object that represents a value that may not be available yet, but will be available in the future. The basic idea is that a Promise represents the result of an asynchronous operation, and provides a way to handle that result when it becomes available.

Internally, a Promise works by maintaining an internal state, which can be one of three possible values:
1. Pending: The initial state of a Promise, when it is first created and has not yet been resolved or rejected.
2. Fulfilled: The state of a Promise when it has been successfully resolved with a value.
3. Rejected: The state of a Promise when it has been rejected with an error.

When a Promise is created, it returns an object with two functions: resolve and reject. These functions can be called to change the state of the Promise from pending to either fulfilled or rejected.

When the state of the Promise changes to either fulfilled or rejected, any handlers that have been attached to the Promise using the .then() method are executed. These handlers are functions that take one or two arguments: the value that the Promise was resolved with (if it was fulfilled), or the error that caused the Promise to be rejected (if it was rejected).

The .then() method returns a new Promise, which can be used to chain together multiple asynchronous operations. If a handler returns a value, this value is passed on as the resolved value of the new Promise.

Here's an example of how a Promise can be used to perform an asynchronous operation:

```javascript
function myAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.random() > 0.5;
      if (result) {
        resolve('Success!');
      } else {
        reject('Error!');
      }
    }, 1000);
  });
}

myAsyncFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, the myAsyncFunction function returns a new Promise that resolves with a string value of 'Success!' if a random number is greater than 0.5, or rejects with an error string of 'Error!' otherwise. The setTimeout function is used to simulate an asynchronous operation that takes 1 second to complete.

The then and catch methods are called on the Promise object returned by myAsyncFunction, and are used to handle the resolved or rejected value of the Promise. If the Promise is resolved, the then method is called with the resolved value as an argument, and the value is logged to the console. If the Promise is rejected, the catch method is called with the rejected value as an argument, and the error is logged to the console.

***

# Generators

A generator is a special kind of JavaScript function that can be paused and resumed during its execution. This allows for a unique way of writing asynchronous code that can make it easier to manage complex control flows and avoid callback hell.

Generators are defined using the **function*** syntax, and they use the **yield** keyword to pause their execution and return a value to the caller. Here's a simple example:

```javascript
function* myGenerator() {
  console.log('Start');
  yield 1;
  console.log('Middle');
  yield 2;
  console.log('End');
  return 3;
}

const gen = myGenerator();
console.log(gen.next()); // logs "Start" and { value: 1, done: false }
console.log(gen.next()); // logs "Middle" and { value: 2, done: false }
console.log(gen.next()); // logs "End" and { value: 3, done: true }
```

In this example, the myGenerator function is defined with the function* syntax, and it uses the yield keyword to pause its execution and return a value to the caller. When you call myGenerator(), it returns a generator object that you can use to control the execution of the generator.

When you call gen.next(), the generator starts executing and logs "Start" to the console. It then hits the yield 1 statement, which pauses the generator and returns an object with a value property of 1 and a done property of false. When you call gen.next() again, the generator resumes execution and logs "Middle" to the console. It then hits the yield 2 statement, which pauses the generator and returns an object with a value property of 2 and a done property of false. When you call gen.next() for the third time, the generator resumes execution and logs "End" to the console. It then hits the return 3 statement, which ends the generator and returns an object with a value property of 3 and a done property of true.

Generators can be used to build more complex control flows for asynchronous code, because they allow you to pause and resume the execution of the generator at any point. This makes it easier to write code that behaves in a synchronous fashion, even when dealing with asynchronous operations.

***

# Async await

Async/await is a syntactic sugar built on top of JavaScript's Promises, which is a way of handling asynchronous operations in a more readable and intuitive way. It allows you to write asynchronous code that looks and behaves like synchronous code, without the need for callbacks.

Async/await is made up of two keywords: **async** and **await**. The async keyword is used to declare an asynchronous function, which always returns a Promise. The await keyword is used to wait for a Promise to resolve before continuing the execution of the code.

Here's an example of an async function that waits for a Promise to resolve using the await keyword:

```javascript
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}

fetchData().then(data => console.log(data));
```

In this example, the fetchData function is declared as an async function. It uses the await keyword to wait for the Promise returned by the fetch function to resolve, and then it waits for the response to be converted to JSON using the await keyword again. The function then returns the data as a Promise. When you call fetchData(), it returns a Promise that you can use to access the data.

Async/await allows you to write asynchronous code that looks and behaves like synchronous code. This makes it easier to read and understand the code, and it also makes it easier to handle errors and exceptions. Additionally, async/await is built on top of Promises, which means it has all the benefits of Promises, such as easy chaining of asynchronous operations and a consistent error handling mechanism.

***

### Callback vs Promise vs Async await vs Generator
Callback, Promise and Async await are used to handle asynchronous code. Promises were introduced to handle the callback hell problem and Async await is a syntactic sugar coat of promises.
Promises internally uses callbacks and hence async await also does use callbacks indirectly 

Generators on the other hand can be used to handle asynchronous code but they're usually used to create iterators, which are objects, that can be iterated over using a for...of loop.





