console.log("Hapa")

//Combining names
//In this example, we have an array of objects that contain a first name and 
//a last name. We use map to combine the first names and last names to give us
// an array of combined full names.

const names = [
    { firstName: 'Ola', lastName: 'Nordmann' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Jan', lastName: 'Jansen' },
];

const combineNames = names.map(({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
})
console.log(combineNames)

//Calculate area of rectangle

//In this example, we calculate the areas of different rectangles. 
//We have an array of objects where each element contains a length and a width for a rectangle.
//To calculate an area of a rectangle, we simply multiply length by width 
//(area = length * width).

const rectangles = [
    { length: 30, width: 20 },
    { length: 10, width: 10 },
    { length: 40, width: 40 },
];

const areas = rectangles.map(({ length, width }) => length * width);
console.log(areas);