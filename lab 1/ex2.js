// Question 2(a)
// Arrow function that returns "Data Representation & Querying"
const message = () => "Data Representation & Querying";

console.log(message());


// Question 2(b)
// Arrow function that takes an argument and returns it
const returnValue = (value) => value;

console.log(returnValue("Hello World"));


// Question 2(c)
// Arrow function that takes two numbers and returns their sum
const addNumbers = (num1, num2) => num1 + num2;

console.log(addNumbers(10, 20));


// Question 2(d)
// Multiply each number under 70 by 2
const ages = [25, 31, 42, 77];

const newAges = ages.map(age => age < 70 ? age * 2 : age);

console.log(newAges);