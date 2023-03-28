let email1 = '';
const email2 = 'p@xyz.com';
const email3 = 'prathapchandra@gmail.com';

const checkIfEmailLengthIsValidOrNot = (email) => {
    if (!email || !email.length) {
        throw new Error('Email cannot be empty');
    }

    if (email.length <= 10) {
        throw new Error('Email cannot be less than 10 characters');
    }

    return true;
}

// console.log(checkIfEmailLengthIsValidOrNot(email3))

const emailValidator = require("email-validator");
console.log(emailValidator.validate(email3));
