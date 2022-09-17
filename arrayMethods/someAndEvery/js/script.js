const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const didMatchCondition = values.some((value, index) => {
  if (value >= 3) {
    return true;
  }
});

console.log("didMatchCondition:", didMatchCondition);

//Basic example 2: Condition doesn’t match

//The code in this example is exactly the same as the last basic example.
//However, we now check if the values are >= 100, which none of them are.
//You will see that all of the items are looped over,
// and the value returned from the some() array method is false.

const matchCondition = values.some((value, index) => {
  if (value >= 100) {
    return true;
  }
});

console.log("MatchCondition:", matchCondition);

//Practical example 1: Course Modules

//In this example we have a list of modules as objects in an array.
//They each contain a name string and a isComplete boolean indicating if a module has been completed.
//We check each if each module has been completed with the some() array method which breaks
//out of the some() array method loop as soon as it finds a module that has been completed.
// When a module has been completed, true is returned and set as the value for isSomeCoursesFinished.

const modules = [
  { name: "Introduction to Programming", isComplete: true },
  { name: "HTML", isComplete: true },
  { name: "CSS", isComplete: false },
  { name: "JavaScript", isComplete: true },
];

const isSomeCoursesFinished = modules.some((currentModule, index) => {
  console.log("index", index);
  return currentModule.isComplete === true;
});
