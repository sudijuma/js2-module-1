//JSON

// 1. Javascript to json

// JSON.stringify()

// Example 1.


const userDetails = {
    name: "Sudi",
    id: 1234,
    isStudent: true,
    section: "Front-End Development"
}

console.log("User Data JS format", userDetails);

const userData = JSON.stringify(userDetails);

console.log("User Data JSON format", userData);

// JSON.parse() Convert user data to JSON object

const userDataBackToJS = JSON.parse(userData);

console.log("User Data back to JS format", userDataBackToJS);

// Create a JsON data object and convert it to JS

const myObjectJSON = '{"name":"Sudi","id":1234, "isStudent":true,"section":"Front-End Development"}';

const myObjectJS = JSON.parse(myObjectJSON);
console.log("My object js", myObjectJSON)