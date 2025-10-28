// Using the every method, check if all the following students have
// passed the course (passing grade is 50).
const students = [
{
name: "Alice",
grade: 55,
},
{
name: "Bob",
grade: 60,
},
{
name: "Charlie",
grade: 48,
},
{
name: "David",
grade: 70,
},
];
const allPassed = students.every((student) => student.grade >= 50);
console.log("Did all students pass? " + allPassed); // false

// Explanation: The every method tests whether all elements in the array
// pass the test implemented by the provided function. In this case,
// it checks if each student's grade is 50 or higher. Since Charlie has
// a grade of 48, the result is false.
