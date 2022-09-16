//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const filterdNumbers = numbers.filter((number) => number >= 3);
console.log(filterdNumbers);


// filter numbers above 100
const highNumbers = [0, 25, 50, 75, 100, 125, 150, 175, 200];
const numberFilter = highNumbers.filter((number) => number >= 100);
console.log(numberFilter);

// filter ages >=18
const people = [
    { name: 'Kari', age: 28 },
    { name: 'Astrid', age: 32 },
    { name: 'Hans', age: 22 },
    { name: 'Inger', age: 19 },
    { name: 'Liv', age: 42 },
    { name: 'Kristoffer', age: 12 },
    { name: 'Anne', age: 12 },
    { name: 'Martin', age: 17 },
    { name: 'Joakim', age: 45 },
    { name: 'Ellen', age: 7 },
];

const peopleAbove = people.filter((adults) => adults.age >= 18);
console.log(peopleAbove);

/* const adults = people.filter((person) => {
    if (person.age >= 18) {
      return true;
    }
  });

  console.log(adults); */
// Returns:
// [
//   {name: 'Kari', age: 28},
//   {name: 'Astrid', age: 32},
//   {name: 'Hans', age: 22},
//   {name: 'Inger', age: 19},
//   {name: 'Liv', age: 42},
//   {name: 'Joakim', age: 45}
// ]

//In this example, we have a list of games. We want to filter 
//the games that have multiplayer and a rating of 8 or higher.

const games = [
    { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
    { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
    { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
    { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
    { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

/* const filteredGames = games.filter((game) => {
    if (game.isMultiplayer === true && game.rating >= 8) {
        return true;
    }
})
console.log(filteredGames); */

const filteredGames = games.filter((game) => game.isMultiplayer && game.rating >= 8);
console.log(filteredGames);