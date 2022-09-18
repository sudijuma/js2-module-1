/* const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  country: "Norway",
};


// dot notation
const greeting = `Hello, I am ${person.firstName} ${person.lastName} from ${person.country}.`;
console.log(greeting);

const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  country: "Norway",
}; */

/* const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  country: "Norway",
};

//Assign properties to variables

const firstName = person.firstName;
const lastName = person.lastName;
const country = person.country;

const greeting = `Hello, I am ${firstName} ${lastName} from ${country}.`;
console.log(greeting); */

const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  country: "Norway",
};
//destructuring
const { firstName, lastName, country } = person;
const greeting = `hello I am ${firstName} ${lastName} from ${country}.`;
console.log(greeting);

//Destructuring parameters

//You can destructure parameters which is a very common technique in JavaScript, Array methods and React.
//Consider the following example:

/* function greetPerson(personObject) {
    const { firstName, lastName } = personObject;
    console.log(`Hello ${firstName} ${lastName}.`);
  }
  
  const person = {
    firstName: 'Ola',
    lastName: 'Nordmann',
  };
  
  greetPerson(person); */

//You could instead destructure the properties from the object where the parameter is:

function greetPerson({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}
const personen = { firstName: "Ola", lastName: "Nord" };
greetPerson(personen);

//Let’s have a look at the values being destructured in an Array method.
//You will see that we are using dot notation to assign the values to variables:

const people = [
  {
    firstName: "Ola",
    lastName: "Nordmann",
    score: 8,
  },
  {
    firstName: "Kari",
    lastName: "Nordmann",
    score: 9,
  },
  {
    firstName: "Joakim",
    lastName: "Nordmann",
    score: 4,
  },
];

/* const winners = people.filter((currentItem) => {
  if (currentItem.score >= 5) {
    return true;
  }
}); */

//Let’s change the code so that it is destructured as a parameter:

const winner = people.filter(({ score }) => {
  if (score >= 5) {
    return true;
  }
});

//destructing Arrays

const coords = [12, 30, 5, 9, 100, 53];

// 'x' is index 0 in the array
// 'y' is index 1 in the array
const [a, b, c, å] = coords;

console.log(a, b, c, å);
// Logs:
// 12 30, 5, 9

//Destructing array example 2

//Let’s have a look at another example. We have an array of names (names) and then
//destructure index 0 and index 1 to the variable names name0 and name1.

const names = ["Ola", "Tore", "Kari", "Joakim"];
// 'name0' is index 0 in the array
// 'name1' is index 1 in the array
//Dude is the ...rest. it can be named anything, bur rest is prefered
const [name0, name1, ...dude] = names;
console.log(name0, name1);
// Logs:
// Ola Kari
console.log(dude);

//Ignoring values
//You can choose to ignore values by simply having no variable.
const values = [0, 1, 2, 3, 4];

const [value0, , value2] = values;
console.log(value0, value2);
// Logs:
// 0 2
