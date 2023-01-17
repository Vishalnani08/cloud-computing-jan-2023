// var firstName = 'Prathap';
// let lastName = 'Chandra';
// const email = 'prathap@gmail.com';

{
    var firstName;
    let lastName;
    const email = 'prathap@gmail.com';

    firstName = 'Prathap';
    lastName = 'Chandra';

    console.log(`firstName inside block is ${firstName}`);
    console.log(`lastName inside block is ${lastName}`);
    console.log(`email inside block is ${email}`);
}

console.log(`firstName outside is ${firstName}`);
console.log(`lastName outside is ${lastName}`);
console.log(`email outside is ${email}`);





/* This abc variable has global scope */
const abc = 'sadasdas'

function add() {
    /* This variable cannot be accessed outside the function */
    const variableInAFunction = 'adad';
}

{
    /* This variable cannot be accessed outside this block */
    const blockScopeVariable = 'asdasd';
}






// const fullName = 'Prathap Chandra';
// console.log(`fullName from outer scope function ${fullName}`);

// function person1() {
//     const personOneName = 'Prathap';
//     // console.log(personTwoName);
//     console.log(`fullName from person1 function ${fullName}`);
// }

// function person2() {
//     const personTwoName = 'Chandra1';
//     // console.log(personTwoName);
//     console.log(`fullName from person2 function ${fullName}`);
// }

// person1();
// person2();

// // const personTwoName = 'Chandra2';
// console.log(personTwoName);
