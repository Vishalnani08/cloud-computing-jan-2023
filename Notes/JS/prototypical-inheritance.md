### What is prototypical inheritance in javascript

Prototypal inheritance is a way of sharing behavior between objects in JavaScript. In JavaScript, every object has a prototype, which is a reference to another object. When you access a property on an object, JavaScript first looks for the property on the object itself. If it doesn't find the property on the object, it looks for the property on the object's prototype. If it still doesn't find the property, it looks on the prototype's prototype, and so on, until it reaches the end of the prototype chain.

When you create an object in JavaScript, you can specify its prototype using the Object.create() method. For example:

```javascript
const person = {
  name: 'John Doe',
  sayName() {
    console.log(`My name is ${this.name}`);
  }
};

const employee = Object.create(person);
employee.jobTitle = 'Developer';
employee.sayJobTitle = function() {
  console.log(`My job title is ${this.jobTitle}`);
};

employee.sayName(); // My name is John Doe
employee.sayJobTitle(); // My job title is Developer
```

In this example, employee is an object that inherits from person. It has its own jobTitle property and sayJobTitle() method, but it also has access to the name property and sayName() method from person through the prototype chain.

This prototypal inheritance allows for code reuse and sharing of behavior between objects. It is a powerful feature of JavaScript that enables you to create flexible and dynamic code.