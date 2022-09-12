console.log("Hello im linked");

/**
 * Adds two numbers togheter
 */

function addNumbers(a, b) {
    return a + b;
}

addNumbers();

/**
 * A funtion to greet a user in the console
 */

function greetingUsers() {
    return console.log("Hello man");
}

greetingUsers();

//example 3

/**
 * Add three numbers togheter
 * @param {number} a first value
 * @param {number} b second value
 * @param {number} c third value
 * @returns the sum of the params
 */

function addThreeNumbers(a, b, c) {
    return a + b + c;
}

addThreeNumbers(20, 40, 60);

//example 4

/* *
 * @return {datatype} returnDescription
 */

/**
 * Display cat names
 * @param {string} cat1 First value
 * @param {string} cat2 Second value
 * @param {string} cat3 Third value
 * @param {string} cat4 Fourth value
 * @return {string} list of cat names
 */

function addFourCats(cat1, cat2, cat3, cat4) {
    return `<ul>
    <li>${cat1}</li>
    <li>${cat2}</li>
    <li>${cat3}</li>
    <li>${cat4}</li>
    </ul>`
}
addFourCats("silver", "ufo", "katta", "natta");

//example 5 

/**
 * Add Four numbers togheter
 * @param {number} a first value
 * @param {number} b second value
 * @param {number} c third value
 * @param {number} d fourth value
 * @returns the sum of the params
 * @example
 * ```js
 * const a = 20;
 * const b = 40;
 * const c = 60;
 * const d = 70;
 * const sum = addFourNumbers(a, b, c, d);
 * ```
 * // expect sum to be 190;
 **/

function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

addFourNumbers(20, 40, 60, 70);

// Optional Parameters
//

/**
 * @param {dataType} [optionalParamName] optionalParamNameDescription
 */

// Example 6.

/**
 * Multiply two numbers togheter
 * @param {number} a First value
 * @param {number} [b] Second value
 * @return {number} multiplication of numbers
 */

function multiNumbers(a, b = 10) {
    console.log(a * b);
}

multiNumbers(5);

//example 7

/**
 * Adds two digits togheter
 * @typeof {(number|string)} NumberLike
 */

function addTwoDigits(a, b) {
    console.log(a + b);
}

addTwoDigits(4, "10");

// complex objects
// example 8

/** 
* @param {Object} userObject this is an boject wich holds a name and role
* @param {name} userObject.name user name
* @param {role} userObject.role user role
*/

function handleUserLogin({ name, role }) {
    loginUserWithToken();
}

function loginUserWithToken() {

}

handleUserLogin({
    name: "Sudi",
    role: "developer"
});

const userLoginData = {
    name: "Sudi",
    role: "to be a good dev"
}

console.log(userLoginData.role)