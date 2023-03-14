// console.log("This is before promise");

// const getUserDetails = new Promise(function (resolve, reject) {
//     // let perEggPriceIsLessThanTenRupees = true;
//     // if (perEggPriceIsLessThanTenRupees) {
//     //     resolve("Buy 6 eggs");
//     // } else {
//     //     reject("Buy bread and milk");
//     // }

//     /* Linked made a request to google asing for user details so that
//     user doesn't have to enter his details */

//     // If linkedin in able to login on behalf on us using google's details -> Resolve case
//     resolve({name: 'asd'})

//     // If linkedin in not able to login on behalf on us using google's details -> Rejected case
//     reject({msg: 'could not login'})

// });

// console.log(getUserDetails)

// getUserDetails
// .then(function(successMsg) {
//     console.log(successMsg);
// })
// .catch(function(errorMessage) {
//     console.log(errorMessage);
// })
// .finally(function() {
//     console.log("Promise is completed");
// })

// console.log(getUserDetails)
// console.log("This is after promise");

// /* Promise version code */ 
// const greetingsPromise = new Promise(function(resolve, reject) {
//     const iWantToCheckSuccessCase = true;
//     if (iWantToCheckSuccessCase) {
//         resolve("Hello, How are you doing today? -  From Promise Version");
//     } else {
//         reject("Hey, How are you doing today? -  From Promise Version");
//     }
// });

// greetingsPromise
// .then(function(msg) {
//     console.log(msg);
// })
// .catch(function(err) {
//     console.log(err);
// })

// /* Async await version of the same */ 
// const greetingsAsyncAwait = async function() {
//     const iWantToCheckSuccessCase = true;
//     if (iWantToCheckSuccessCase) {
//         console.log("Hello, How are you doing today? -  From Async await Version");
//         return;
//     }

//     throw new Error("Hey, How are you doing today? -  From Async await Version");
// };

// const main = async function() {
//     try {
//         await greetingsAsyncAwait();
//     } catch (error) {
//         console.log(error)
//     }
// };

// main()
// .then(function(){
//     // console.log('Hello 1 ');
// })
// .catch(function(){
//     // console.log('hey 1');
// })

/* Call by value and call by reference */

/* This is call by value example */
function add(a,b) {
    a = a + 1; // 2
    b = b + 1; // 3
    return a + b; // 5
}

const a = 1;
const b = 2;
console.log(`Values of a and b respectively before calling add function are ${a} and ${b}`);
const result = add(a,b);
console.log(`This is the result of add function: ${result}`);
console.log(`Values of a and b respectively after calling add function are ${a} and ${b}`);

/* This is line break */
console.log('\n\n\n');
const hallTicketNo = 24500

function changeValues(myDetails) {
    const objectOne = myDetails;
    objectOne.name = 'Prathap Chandra';
    objectOne.email = 'prathap.chandra@gmail.com';

    const objectTwo = myDetails;
    objectTwo.name = 'Prathap 2';
    objectTwo.email = 'prathap.2@gmail.com';
}

/* This is call by reference example */
const myDetails = { name: 'Prathap', email: 'prathap@gmail.com' };
console.log(`My name and email respectively before calling function are ${myDetails.name} and ${myDetails.email}`);
changeValues(myDetails);
console.log(`My name and email respectively after calling function are ${myDetails.name} and ${myDetails.email}`);














