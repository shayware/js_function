1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
function calculateDogAge(dogAge, ageConvert) {
	var dogYears = dogAge * ageConvert;
    alert("your doggie is " + dogYears + " years old in dog years");
}   
var age = prompt("Enter your puppy's age: ");
var ageConv = prompt("Enter the equivalent age for conversion: ");
calculateDogAge(age, ageConv);

```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here
const maxAge = 80;
var age, amount;
function calculateSupply(userAge, amountPerDay) {
  var amountPerYear=amountPerDay * 365;
  var yearsLeft = maxAge - userAge;
  var totalAmount=0;
  for(var i=0; i<yearsLeft; i++) {
    totalAmount+=amountPerYear;
  }
  console.log("You will need " + Math.floor(totalAmount) + " to last  you until the ripe age of " + maxAge);
}
age = prompt("Enter your current age: ");
amount = prompt("Enter the amount you require every day: ");
calculateSupply(age, amount);
```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
// your code goes here
var tempCel = 30, tempFar = 62;
function celsiusToFahrenheit(cel) {
  var far = (cel * 9/5) + 32;
  console.log(cel + "°C is " + far + "°F ");
}
function fahrenheitToCelsius(far) {
  var cel = (far - 32) * 5/9;
  console.log(far + "°F is " + cel + "°C ");
} 
celsiusToFahrenheit(tempCel);
fahrenheitToCelsius(tempFar);

```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
var age;
age = prompt("Enter your age: ");
function checkAge(userAge) {
  var ageConfirm;
  if(userAge>18) {
    console.log("true");
  }
  else {
    ageConfirm = prompt("Are you really over the age of 18 (Y/N)?");
    if(ageConfirm=='Y' || ageConfirm=='y') {
      console.log("true");
    }
    else {
      console.log("false");
    }

  }
}
checkAge(age);

```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  // your code goes here
  var age;
  age = prompt("Enter your age: ");
  function checkAge(userAge) {
    var ageConfirm;
    function confirm() {
      ageConfirm = prompt("Are you really over the age of 18 ? (y/n)?");
      ageConfirm == 'y' ? console.log("true") : console.log("false");
    }
    userAge>18 ? console.log("true") : confirm();
  }
  checkAge(age);
  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
```
Is there any difference in the behavior of these two variants? If there is what is that?

Yes, the function works differently. Because the else statement is removed, the confirm function will be executed even when the age entered is over 18.

5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here
function pow(x, n) {
  var answer = Math.pow(x, n);
  alert("The answer for " + x + "^" + n + " = " + answer);
}
// After writing code uncomment to check the answer.
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js
// your code goes here
var number;
function find(n) {
  var sum=0, product=1;
  var choice = prompt("Do you want to find sum or product (+/*) ?");
  if(choice == '+') {
    for(var i=1; i<=n; i++) {
      sum+=i;
    }
    alert("The sum is: " + sum);
  }
  else {
    for(var i=1; i<=n; i++) {
      product*=i;
    }
    alert("The product is: " + product);
  }
}
number = prompt("Enter a number: ");
find(number);
```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
// your code goes here
var number;
function findSum(n) { 
  var sum=0;
  for(var i=1; i<=n; i++) {
    sum+=i;
  }
  alert("The sum from 1 to " + n + " is: " + sum);
}
number = prompt("Enter the number: ");
findSum(number);
```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
// your code goes here
var number;
function findSum(n) {
  var sum=0;
  for(var i=1; i<=n; i++) {
    if(i%5==0 || i%7==0) {
      sum+=i;
    }
  }
  alert("The sum of the numbers from 1 to " + n + " that are divisible by 5 and 7 is: " + sum);
}
number = prompt("Enter the number: ");
findSum(number);
```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.
function min(arg1, arg2) {
  if(arg1 < arg2) {
    return arg1;
  }
  else {
    return arg2;
  }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```