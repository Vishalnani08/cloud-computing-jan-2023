# Call, Bind and Apply

call, bind, and apply are methods available on JavaScript functions that allow you to set the value of this for a function and pass arguments to it. Here are the differences between them:

### Call
call: The call method allows you to call a function with a specified this value and any number of arguments that are passed individually. The syntax for call is func.call(thisArg, arg1, arg2, ...). The first argument to call is the object that this should refer to, and the subsequent arguments are the arguments to be passed to the function. Here's an example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = {
  name: 'John'
};

greet.call(person, 'Jane'); // logs "Hello, Jane! My name is John."
```

In this example, call is used to call the greet function with the person object as the this value and the string 'Jane' as the argument.

### Apply
apply: The apply method is similar to call, but it accepts an array of arguments instead of individual arguments. The syntax for apply is func.apply(thisArg, [arg1, arg2, ...]). The first argument to apply is the object that this should refer to, and the second argument is an array of arguments to be passed to the function. Here's an example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = {
  name: 'John'
};

greet.apply(person, ['Jane']); // logs "Hello, Jane! My name is John."
```

In this example, apply is used to call the greet function with the person object as the this value and the array ['Jane'] as the argument.

### Bind
bind: The bind method returns a new function that has this set to a specified value, but does not call the function immediately. Instead, it returns a new function that can be called later with the this value already set. The syntax for bind is func.bind(thisArg, arg1, arg2, ...). The first argument to bind is the object that this should refer to, and the subsequent arguments are the arguments to be passed to the function. Here's an example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = {
  name: 'John'
};

const johnGreet = greet.bind(person);

johnGreet('Jane'); // logs "Hello, Jane! My name is John."
```

In this example, bind is used to create a new function johnGreet that has this set to the person object. The new function is then called with the string 'Jane' as the argument.

These methods are used when you want to call a function with a specific this value or when you want to partially apply arguments to a function and create a new function that can be called later.
