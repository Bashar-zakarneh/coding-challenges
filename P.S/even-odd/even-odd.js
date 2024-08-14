//-------------------------------------------------------------------------
//! Q1: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//-------------------------------------------------------------------------
//?----------------Soliution [1]-----------------
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(5)); //=>"Odd"
console.log(evenOrOdd(8)); //=>"Even"
console.log(evenOrOdd(11)); //=>"Odd"
console.log(evenOrOdd(105)); //=> "Odd"

//?----------------Soliution [2]-----------------

function even_odd(value) {
  return value % 2 === 0 ? "Even" : "Odd";
}

console.log(even_odd(5)); //=>"Odd"
console.log(even_odd(8)); //=>"Even"
console.log(even_odd(11)); //=>"Odd"
console.log(even_odd(106)); //=>"Even"
