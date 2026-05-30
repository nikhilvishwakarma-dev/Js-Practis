const score =400
const balance = new Number(1000)

console.log(score)
console.log(balance)

console.log(balance.toString().length); // toString() converts the number to a string, and then we can check its length
console.log(balance.toFixed(2)); // toFixed() formats a number using fixed-point notation. In this case, it will format the number with 2 decimal places.

const othernumber = 123.894567
console.log(othernumber.toPrecision(2)); // toPrecision() formats a number to a specified length. In this case, it will format the number to 2 significant digits.

const hundreds = 1000000
console.log(hundreds.toExponential(2)); // toExponential() returns a string representing the number in exponential notation. In this case, it will format the number with 2 digits after the decimal point in exponential form.
console.log(hundreds.toLocaleString()); // toLocaleString() returns a string with a language-sensitive representation of the number. In this case, it will format the number with commas as thousands separators.
console.log(hundreds.toLocaleString('en-In')); // toLocaleString() with a locale parameter returns a string with a language-sensitive representation of the number. In this case, it will format the number with commas as thousands separators for the 'en-In' locale.


//  +++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

console.log(Math.PI) // Math.PI returns the value of π (pi) which is approximately 3.14159.
console.log(Math.E) // Math.E returns the value of Euler's number (e) which is approximately 2.71828.
console.log(Math.sqrt(16)) // Math.sqrt() returns the square root of a number. In this case, it will return 4, since 4 * 4 = 16.
console.log(Math.pow(2, 3)) // Math.pow() returns the base to the exponent power. In this case, it will return 8, since 2 raised to the power of 3 is 8.
console.log(Math.abs(-5)) // Math.abs() returns the absolute value of a number. In this case, it will return 5, since the absolute value of -5 is 5.
console.log(Math.round(4.7)) // Math.round() returns the value of a number rounded to the nearest integer. In this case, it will return 5, since 4.7 is closer to 5 than to 4.
console.log(Math.ceil(4.2)) // Math.ceil() returns the smallest integer greater than or equal to a given number. In this case, it will return 5, since 5 is the smallest integer greater than or equal to 4.2.
console.log(Math.floor(4.8)) // Math.floor() returns the largest integer less than or equal to a given number. In this case, it will return 4, since 4 is the largest integer less than or equal to 4.8.
console.log(Math.max(1, 5, 3, 9, 2)) // Math.max() returns the largest of zero or more numbers. In this case, it will return 9, since 9 is the largest number among the given numbers.
console.log(Math.min(1, 5, 3, 9, 2)) // Math.min() returns the smallest of zero or more numbers. In this case, it will return 1, since 1 is the smallest number among the given numbers.
console.log(Math.random()) // Math.random() returns a random floating-point number between 0 (inclusive) and 1 (exclusive). Each time you call it, it will return a different random number.

console.log(Math.random() * 10) // This code generates a random integer between 1 and 10. Math.random() generates a random number between 0 and 1, multiplying it by 10 scales it to the range of 0 to 10, and Math.floor() rounds it down to the nearest whole number. Adding 1 shifts the range to be between 1 and 10 instead of 0 and 9.
console.log((Math.random()*10)+1); // This code generates a random integer between 1 and 10. Math.random() generates a random number between 0 and 1, multiplying it by 10 scales it to the range of 0 to 10, and adding 1 shifts the range to be between 1 and 11 instead of 0 and 10. However, since Math.random() can never actually reach 1, the maximum value will be just under 11, effectively giving you a range of 1 to 10 when rounded down.
console.log(Math.floor((Math.random()*10)+1)); // This code generates a random integer between 1 and 10. Math.random() generates a random number between 0 and 1, multiplying it by 10 scales it to the range of 0 to 10, and adding 1 shifts the range to be between 1 and 11 instead of 0 and 10. Finally, Math.floor() rounds it down to the nearest whole number, resulting in a final range of 1 to 10.

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min)) // This code generates a random integer between the specified minimum (min) and maximum (max) values. Math.random() generates a random number between 0 and 1, multiplying it by (max - min + 1) scales it to the range of 0 to (max - min + 1), and adding min shifts the range to be between min and max + 1. Finally, Math.floor() rounds it down to the nearest whole number, resulting in a final range of min to max. In this case, it will generate a random integer between 10 and 20.
