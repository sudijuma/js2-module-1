/* console.log();
console.clear();
console.warn();
console.error();
console.table();

//1
console.log("hello my fried");

const name = "Sudi";
console.log(name);

const responseDataOne = [
  {
    name: "sudi",
    age: "35",
  },
  {
    name: "mwakie",
    age: "35",
  },
];

const responseDataTwo = [
  {
    name: "Dudi",
    age: "35",
  },
  {
    name: "Swakie",
    age: "25",
  },
];

console.log("responseDataOne:", responseDataOne);
console.log("responseDataTwo:", responseDataTwo);

console.log("sum 1+2=", 1 + 2);

console.log("My " + "name " + "is " + "Sudi");
const sum = 1 + 2;
console.log(`My name is Sudi ${sum}`);

//clear

console.clear();

//console.table

console.log(responseDataOne);
console.table(responseDataOne);

console.clear();

//
console.time(); //this starts the timer
console.timeEnd(); //this ends the timer

function counter() {
  for (let i = 0; i <= 3; i++) {
    console.log(i);
  }
}
console.time("myTimer");
counter();
console.timeEnd("myTimer");

let average = (3+3+6) / 3;
console.log(average);

console.clear(); */

//console.
function sum(num1, num2) {
  return num1 + num2;
}

let number1 = 10;
console.log(number1);
let number2 = 20;
console.log(number2);
let total = sum(number1, number2);

console.log("total", total);

// hey could you create a function which cal avg of
//given number2
//name it getAvarge

function getAverge(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

let myAverage = getAverge(3, 5, 7);
console.log(myAverage);

const myArray = [1, 2, 3, 4, 5];

function getArrAverage(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  const numberOfItemsInArr = arr.length;
  return total / numberOfItemsInArr;
}

const resultAverage = getArrAverage(myArray);
console.log("Result average is", resultAverage);

/* let city = "mombasa";

console.log("City: ", city);

city = "Oslo";
console.log("City: ", city); */

/* function getCatFacts() {
  fetch("https://catfact.ninja/facts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
    })
    .catch((error) => {});
}
getCatFacts(); */

async function getCatyFacts() {
  const response = await fetch("https://catfact.ninja/facts");
  console.log(response);
  const catFacts = await response.json();
  console.log(catFacts);
  console.log(catFacts.data);
  return catFacts;
}

getCatyFacts();
