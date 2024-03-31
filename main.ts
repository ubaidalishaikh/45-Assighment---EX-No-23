// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let cars : string = 'Supra';

// Test 1: Equality comparison (True)
console.log("Is car == 'Supra'? I Predict True.");
console.log(cars == 'Supra'); // True

// Test 2: Strict equality comparison (True)
console.log("Is car === 'Supra'? I Predict True.");
console.log(cars == 'Supra'); // True

// Test 3: Inequality comparison (False)
console.log("Is car != 'Supra'? I Predict False.");
console.log(cars != 'Supra'); // False

// Test 4: Strick inequality comparison (False)
console.log("Is car !== 'Supra'? I Predict False.");
console.log(cars !== 'Supra'); // False

// Test 5: less than comparison (False)
console.log("Is car < 'Supra'? I Predict False.");
console.log(cars < 'Supra'); // False (lexicographic comparison)

// Test 6: Greater than comparison (False)
console.log("Is car > 'Supra'? I Predict False.");
console.log(cars > 'Supra'); // False (lexicographic comparison)

// Test 7: Less than or equal comparison (True)
console.log("Is car <= 'Supra'? I Predict True.");
console.log(cars <= 'Supra'); // True

// Test 8: Greater than or equal comparison (True)
console.log("Is car >= 'Supra'? I Predict True.");
console.log(cars >= 'Supra'); // True

// Test 9: Checking truthiness (True)
console.log("Is !cars? I Predict True.");
console.log(!cars); // True (non-empty string is truthy)

// Test 10: Checking falsiness (False)
console.log("Is !cars? I Predict False.");
console.log(!cars); // False (nagation of a truthy value)







