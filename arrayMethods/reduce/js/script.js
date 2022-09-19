console.log("hapa")

/* const values = [100, 200, 300, 400, 500];

const endResult = values.reduce(
    (previousValue, currentElement, index, array) => {
        return previousValue;
    },
);
console.log(endResult); */

//Practical example 1: Add all of the numbers

//In this example, we have an array of integers. 
//We add all of the numbers so that we get a total sum of all of the values.

// Sum of these values is 25 (5 + 5 + 5 + 10)
const values = [5, 5, 5, 10];

const sumOfValues = values.reduce((total, value) => {
    // Add the current value to our total
    total += value;
    // Return the total
    return total;
});

console.log(sumOfValues);
// Returns:
// 25

//refracted
const sumValues = values.reduce((total, values) => (total += values));
console.log(sumValues);


//Practical example 2: Get the total cost of all products

//In this example, we have a list of product objects, each containing a title and a price.
//We add all of the product prices so that we can get a total for all of our products.

const products = [
    { title: 'Cheese', price: 15.0 },
    { title: 'Milk', price: 8.99 },
    { title: 'Bread', price: 22.0 },
    { title: 'Egg', price: 5 },
];

const totalCost = products.reduce((total, currentProduct) => {
    total += currentProduct.price;
    return total;
}, 0)
console.log(totalCost);

//refracted
const costTotal = products.reduce((total, product) => (total += product.price), 0);
console.log(costTotal);

//Practical example 3: Get the total cost of in-stock products

//In this example, we add the prices of a list of products like the previous example. 
//However, this time we need to check that the product is in stock. 
//We also have a quantity for each product being purchased, so we need to calculate this as welL

// All of the in-stock products added together equals 170.95
const product = [
    { title: 'Cheese', inStock: false, quantity: 2, price: 15.0 },
    { title: 'Milk', inStock: true, quantity: 5, price: 8.99 },
    { title: 'Bread', inStock: true, quantity: 3, price: 22.0 },
    { title: 'Egg', inStock: true, quantity: 12, price: 5 },
];
const totalSum = product.reduce((total, currentProduct) => {
    if (currentProduct.inStock === true) {
        total += currentProduct.price * currentProduct.quantity;
    }
    return total;
}, 0)
console.log(totalSum);

//refractored
//You could refactor the function so that all of the logic is handled with a ternary in the return. 
//However, one could strongly argue that turning this function into a one-liner makes
//it difficult to read and understand. In this case, the original logic might have been a better way forward.

const producta = [
    { title: 'Cheese', inStock: false, quantity: 2, price: 15.0 },
    { title: 'Milk', inStock: true, quantity: 5, price: 8.99 },
    { title: 'Bread', inStock: true, quantity: 3, price: 22.0 },
    { title: 'Egg', inStock: true, quantity: 12, price: 5 },
];

const costaTotal = producta.reduce((total, currentProduct) =>
    currentProduct.inStock ? (total += currentProduct.price * currentProduct.quantity) : total, 0,
);
console.log(costaTotal);