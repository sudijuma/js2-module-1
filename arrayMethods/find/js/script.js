// find methid

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const foundValue = values.find((currentValue, index) => {
  console.log("currentIndex", index);
  if (currentValue === 3) {
    return true;
  }
});

console.log("Found value:", foundValue);
// The console logs the following:
// Current index:  0
// Current index:  1
// Current index:  2
// Current index:  3
// Found value: 3

//Example 1: Finding a temperature above a point
//In this example, we have a list of temperatures that are sorted in ascending order.
// We try and find the first temperate above 120

const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];
const findTemperature = temperatures.find((currentTemperature) => {
  if (currentTemperature >= 120) {
    return true;
  }
});
console.log("Current temperature:", findTemperature);

//Refractor

const findTempAbove = temperatures.find(
  (currentTemperature) => currentTemperature >= 120
);
console.log("First temp above 120", findTempAbove);

//Example 2: Find the first name available beginning with a specific letter
//In this example, we have a list of names.
//We find the first name that starts with the letter j.

const users = [
  { name: "Kari", id: 19313 },
  { name: "Hans", id: 40202 },
  { name: "Joakim", id: 59230 },
  { name: "Inger", id: 14023 },
  { name: "Ellen", id: 76339 },
];

const findUser = users.find((user) => {
  if (user.name[0].toLowerCase() === "j") {
    return true;
  }
});
console.log("User that starts with j", findUser);

// Refractor

const findMyUser = users.find(({ name }) => name[0].toLowerCase() === "j");
console.log("found user", findMyUser);

//Example 3: Find if a book is in stock

//In this example, we look at no items being found by the find() array method.

//We have an array of book objects. Each element has a title string for the name,
// and an inStock boolean indicating if the book is in stock.
// All of the books have inStock set to false,
// so the find() array method will not be able to find any books.
// At the end, we check if our result is undefined,
//meaning no book has been found, and then display a relevant message.

const books = [
  { title: "Building a Spaceship", inStock: false },
  { title: "Growing Orchids", inStock: false },
  { title: "River Fisher", inStock: false },
];

const bookInStock = books.find((book) => {
  if (book.inStock === true) {
    return true;
  }
});

if (bookInStock === undefined) {
  console.log("No book in stock");
} else {
  console.log("Book in stock", bookInStock);
}

//Refractor

const foundBook = books.find(({ inStock }) => inStock);
if (!foundBook) {
  console.log("No book found");
} else {
  console.log("Found book", foundBook);
}
