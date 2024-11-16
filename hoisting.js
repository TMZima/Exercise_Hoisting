/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.

let destination = "Ancient Egypt";
console.log("Destination:", destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe";
console.log("Destination:", destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.

const travelDate = "2024-03-15";
console.log(`Travel Date: ${travelDate}`);
// travelDate = "2024-03-16";
// console.log(`Travel Date: ${travelDate}`);

/*
 * Observations:
 * TODO: Explain here.
 * The constant variable 'travelDate' cannot be reassigned to a new value after their initial assignment. It throws a TypeError: Assignment to constant variable.
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.

console.log(`Time Machine Model: ${timeMachineModel}`);
var timeMachineModel = "T-800";

/*
 * Observations:
 * TODO: When logging the variable 'timeMachineModel' before declaring it, it throws a ReferenceError: Cannot access 'timeMachineModel' before initialization. By declaring the variable 'timeMachineModel' using 'var', the variable is hoisted to the top of the scope, and the value is assigned to it. The variable is then accessible and can be printed to the console without any errors. In the order of execution, written in the exercise, the console.log() statement is executed before the variable declaration, but the variable is hoisted to the top of the scope, so it prints 'undefined' to the console instead of throwing an error.
 */
