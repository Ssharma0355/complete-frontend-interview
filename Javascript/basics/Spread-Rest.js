// Spread Operator (...)

// Spread expands elements.



const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8];

const merged = [...arr1, ...arr2]
console.log(merged)

// Rest Operator (...)

// Rest collects remaining values.



const [first, ...rest] = [1,2,3,4,5]
console.log("First:",first)
console.log("Rest",rest)