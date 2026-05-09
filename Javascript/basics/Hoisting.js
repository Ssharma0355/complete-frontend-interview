console.log(a); // undefiend
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(c); // ReferenceError: Cannot access 'b' before initialization


var a; // Hoisted by Undefiend 
let b; // Hoisted but remain in  Temporal Dead Zone until initialization

// const c;
//'const' declarations must be initialized.

const c = 1; // Hoisted but remain in  Temporal Dead Zone until initialization


// “var is hoisted and initialized with undefined.
// let and const are hoisted but remain in Temporal Dead Zone until initialization.”