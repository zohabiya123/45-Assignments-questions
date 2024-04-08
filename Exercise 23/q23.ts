// define variable

let apple = "apple";
let uppercaseApple = "APPLE"
let ten = 10;
let twenty = 20
let fruits = ["apple", "banana", "orange"];
// test for equality and inequal with strings

console.log("is apple is equal to apple?");

console.log(apple == "apple");

console.log("is applie is not equal to apple?");

console.log("\nIs apple is not equal to apple?");

console.log(apple != "apple");


// tests using lowercase function

console.log("Is APPLE is equal to apple after converting to lowercase?");

console.log(uppercaseApple.toLocaleLowerCase() == "apple");

console.log("Is APPLE is not equal to apple after converting to lowercase?");

console.log(uppercaseApple.toLocaleLowerCase() != "apple");

// numerical tests 
//Equal tp
console.log("\n Is ten is equal to twenty ?");

console.log(ten == twenty);

//Equal to

console.log("Is ten is not equal to twenty?");

console.log(ten != twenty);

// Greater than

console.log("\nIs ten is greater than zero?");

console.log(ten > 0);

// Less than

console.log("\nIs twenty is less than 10");

console.log(twenty < 10);

// Greater than or Equal to

console.log("\nIs ten is greater than or equal to zero?");

console.log(ten >= 5);
 
// less thanor Equal to

console.log("\n twenty is less than or equal to 10");

console.log(twenty <= 10);

// test using "and" & "or" operators
//using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");

console.log(twenty != 10 && twenty > 10);


console.log("\n twenty is not equal to 10 and twenty is greater than 10");

console.log(twenty != 10 && twenty > 30);

//using || (or)

console.log("\n 20 is greater than 50 or 20 is equal to 20");

console.log(20 > 50 || 20 == 20);

// test whether an item is include in array

console.log("\nIs orange include in my fruits array");

console.log(fruits.includes("orange"));
