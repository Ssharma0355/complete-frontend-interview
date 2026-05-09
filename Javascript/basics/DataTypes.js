
// Primitive Data Type
let a = 10;
let b = a;

// b gets a COPY of a's value (10)
b = 20;

console.log(a); // 10
console.log(b); // 20

// Primitive values are immutable

// Non Premitive Data type

const user1 = {
    name: "Sachin"
};

const user2 = user1; // copies the REFERENCE

user2.name = "Sharma";

console.log(user1.name); // Sharma

// Why?

// Objects are stored in memory, and variables store a reference (address) to that object.

// Both variables point to the same object:
// user1 ─┐
//        ├──► { name: "Sachin" }
// user2 ─┘

// After:

// user2.name = "Sharma";
// The same object becomes:

// { name: "Sharma" }

// So both see the updated value.
// Primitive values are copied by value, so changes do not affect the original variable.
// Objects and arrays are assigned by reference, meaning multiple variables can point to the same object in memory. 
// Mutating the object through one reference affects all references.



