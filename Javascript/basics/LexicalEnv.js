// Functions access variables from where they are WRITTEN, not where they are CALLED.

let name = "Sachin";

function outer(){
     function inner(){
        console.log(name) // Sachin
    }
    inner()
}
outer();

// inner looks outside its own scope.

// This chain is lexical scope.