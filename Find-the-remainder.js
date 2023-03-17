/*
Write a function that accepts two integers 
and returns the remainder of dividing the 
larger value by the smaller value.
Division by zero should return NaN.
*/


// Solution

function remainder(a, b) {
  return a > b ? a % b : b % a;
}

// or

function remainder(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);

  return min ? max % min : NaN;
}