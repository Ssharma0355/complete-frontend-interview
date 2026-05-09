function outer(){
    let count = 0;
    var name = "Sachin"

    return function inner(){
        // inner() remembers the outer count that's clousers
        count++;
        console.log(name)
        console.log(count)
    }
}

const counter = outer();

counter(); //1
counter(); //2
counter(); //3

// Real Frontend Uses
// - React hooks
// - Event handlers
// - Debounce
// - Memoization
// - Private variables