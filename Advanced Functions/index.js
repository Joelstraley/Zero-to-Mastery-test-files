//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const sum1 = (a, b) => a + b

console.log(sum1(5,4))

//Closure: What does the last line return?
// 10 -
const addTo = x => y => x + y
var addToTen = addTo(10)
console.log(addToTen(3))

//Currying: What does the last line return?
// 31
const sum2 = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1))


//Currying: What does the last line return?
// 17
const sum = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b
const addFive = curriedSum1(5)
console.log(addFive(12))


//Composing: What does the last line return?
// 16
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10))

//What are the two elements of a pure function?
/// No Side Effects, and always same Return regardless of inputs