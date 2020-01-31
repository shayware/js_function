// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration 
function addOne(n) {
  n+=1;
  return n;
}

//Function Expression
let addOne = function(n) {
  return (n+1);
};

//Arrow function 
let addOne = n => (n+=1);

//Arrow Function With Curly Bracket
let addOne = n => {
  return (n+1);
};

//function invocation 
addOne(5);





/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 //Function Decleration 
function subOne(n) {
  n-=1;
  return n;
}

//Function Expression
let subOne = function(n) {
  return (n-1);
};

//Arrow function 
let subOne = n => (n-=1);

//Arrow Function With Curly Bracket
let subOne = n => {
  return (n-1);
};

//function invocation 
subOne(5);


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 //Function declaration
 function add(x, y) {
   var sum = x + y;
   return sum;
 }

 //Function expression
 let add = function(x, y) {
  return (x + y);
};

//Arrow function 
let add = (x, y) => (x + y);

//Arrow Function With Curly Bracket
let add = (x, y) => {
  return (x + y);
};

//function invocation 
add(5, 4);


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Function declaration
function sub(x, y) {
  var diff = y - x;
  return diff;
}

//Function expression
let sub = function(x, y) {
 return (y - x);
};

//Arrow function 
let sub = (x, y) => (y - x);

//Arrow Function With Curly Bracket
let sub = (x, y) => {
 return (y - x);
};

//function invocation 
sub(4, 5);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//Function declaration
function mul(x, y) {
  var pro = x * y;
  return pro;
}

//Function expression
let mul = function(x, y) {
 return (x * y);
};

//Arrow function 
let mul = (x, y) => (x * y);

//Arrow Function With Curly Bracket
let mul = (x, y) => {
 return (x * y);
};

//function invocation 
mul(4, 5);


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function declaration
function div(x, y) {
  var quo = x/y;
  return quo;
}

//Function expression
let div = function(x, y) {
 return (x/y);
};

//Arrow function 
let div = (x, y) => (x/y);

//Arrow Function With Curly Bracket
let div = (x, y) => {
 return (x/y);
};

//function invocation 
div(20, 5);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

//function declaration 
function squared(x) {
  var ans = x * x;
  return ans;
}
//Function expression
let squared = function(x) {
  return (x * x);
 };
 
 //Arrow function 
 let squared = (x) => (x * x);
 
 //Arrow Function With Curly Bracket
 let squared = (x) => {
  return (x * x);
 };
 
 //function invocation 
 squared(4);
 

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

//function declaration
function calc(x, y, op) {
  var ans;
  if(op == "add") {
    ans = x + y;
    console.log(x + "+" + y + "=" + ans );
  }
  else if(op == "subtract") {
    ans = x - y;
    console.log(x + "-" + y + "=" + ans );
  }
  else if(op == "multiply") {
    ans = x * y;
    console.log(x + "*" + y + "=" + ans );
  }
  else {
    ans = x/y;
    console.log(x + "/" + y + "=" + ans );
  }
}

//function expression
let calc = function(x, y, op) {
  var ans;
  if(op == "add") {
    ans = x + y;
    console.log(x + "+" + y + "=" + ans );
  }
  else if(op == "subtract") {
    ans = x - y;
    console.log(x + "-" + y + "=" + ans );
  }
  else if(op == "multiply") {
    ans = x * y;
    console.log(x + "*" + y + "=" + ans );
  }
  else {
    ans = x/y;
    console.log(x + "/" + y + "=" + ans );
  }
}

//Arrow function
let calc = (x, y, op) => {
  var ans;
  if(op == "add") {
    ans = x + y;
    console.log(x + "+" + y + "=" + ans );
  }
  else if(op == "subtract") {
    ans = x - y;
    console.log(x + "-" + y + "=" + ans );
  }
  else if(op == "multiply") {
    ans = x * y;
    console.log(x + "*" + y + "=" + ans );
  }
  else {
    ans = x/y;
    console.log(x + "/" + y + "=" + ans );
  }
}

//function invocation 
calc(4, 5, "add");


 

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 //function delaration
 function larger(a, b) {
   return a>b;
 } 
 //Function expression
let larger = function(a, b) {
  return (a>b);
 };
 
 //Arrow function 
 let larger = (a, b) => (a > b);
 
 //Arrow Function With Curly Bracket
 let larger = (a, b) => {
  return (a > b);
 };
 
 //function invocation 
 larger(4, 5);

 //
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//function delaration
function smaller(a, b) {
  return a<b;
} 
//Function expression
let smaller = function(a, b) {
 return (a<b);
};

//Arrow function 
let larger = (a, b) => (a < b);

//Arrow Function With Curly Bracket
let smaller = (a, b) => {
 return (a < b);
};

//function invocation 
smaller(4, 5);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
//function delaration
function equalOrNot(a, b) {
  return a==b;
} 
//Function expression
let equalOrNot = function(a, b) {
 return (a==b);
};

//Arrow function 
let equalOrNot = (a, b) => (a == b);

//Arrow Function With Curly Bracket
let equalOrNot = (a, b) => {
 return (a == b);
};

//function invocation 
equalOrNot(5, 5);
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
//function delaration
function smallest(x, y) {
  if(x < y) {
    return x;
  }
  else {
    return y;
  }
} 
//Function expression
let smallest = function(x, y) {
  if(x < y) {
    return x;
  }
  else {
    return y;
  }
};

//Arrow Function With Curly Bracket
let smallest = (x, y) => {
  if(x < y) {
    return x;
  }
  else {
    return y;
  }
};

//function invocation 
smallest(5, 5);
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
//function delaration
function largest(x, y) {
  if(x > y) {
    return x;
  }
  else {
    return y;
  }
} 
//Function expression
let largest = function(x, y) {
  if(x > y) {
    return x;
  }
  else {
    return y;
  }
};

//Arrow Function With Curly Bracket
let largest = (x, y) => {
  if(x > y) {
    return x;
  }
  else {
    return y;
  }
};

//function invocation 
largest(6, 5);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//function delaration
function isEven(n) {
  return (n%2==0);
} 
//Function expression
let isEven = function(n) {
 return (n%2==0);
};

//Arrow function 
let isEven = (n) => (n%2==0);

//Arrow Function With Curly Bracket
let isEven = (n) => {
 return (n%2==0);
};

//function invocation 
isEven(4);
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
//function delaration
function isOdd(n) {
  return (n%2!=0);
} 
//Function expression
let isOdd = function(n) {
 return (n%2!=0);
};

//Arrow function 
let isOdd = (n) => (n%2!=0);

//Arrow Function With Curly Bracket
let isOdd = (n) => {
 return (n%2!=0);
};

//function invocation 
isOdd(5);
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//function declaration
function grade(score, maxScore) {
  var percent = (score/maxScore) * 100;
  if(percent>=90 && percent <=100) {
    return "A";
  }
  else if(percent>=80 && percent <=89) {
    return "B";
  }
  else if(percent>=70 && percent <=79) {
    return "C";
  }
  else if(percent>=60 && percent <=69) {
    return "D";
  }
  else {
    return "F";
  }
}

//function expression
let grade = function(score, maxScore) {
  var percent = (score/maxScore) * 100;
  if(percent>=90 && percent <=100) {
    return "A";
  }
  else if(percent>=80 && percent <=89) {
    return "B";
  }
  else if(percent>=70 && percent <=79) {
    return "C";
  }
  else if(percent>=60 && percent <=69) {
    return "D";
  }
  else {
    return "F";
  }
}

//arrow function with curly bracket
let grade = (score, maxScore) => {
  var percent = (score/maxScore) * 100;
  if(percent>=90 && percent <=100) {
    return "A";
  }
  else if(percent>=80 && percent <=89) {
    return "B";
  }
  else if(percent>=70 && percent <=79) {
    return "C";
  }
  else if(percent>=60 && percent <=69) {
    return "D";
  }
  else {
    return "F";
  }
}

//function invocation
grade(93, 100);
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 //function declaration
 function concat(word1, word2) {
   return(word1 + " " + word2);
 }

 //function expression
 let concat = function(word1, word2) {
  return(word1 + " " + word2);
}

//arrow function
let concat = (word1, word2) => (word1 + " " + word2);

//arrow function with curly braces
let concat = (word1, word2) => {
  return(word1 + " " + word2);
}
//function invocation 
concat("hello", "world");