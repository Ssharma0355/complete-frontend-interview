// Returns the first successful promise.

// Ignores rejected promises.

// Fails only if ALL promises fail.

// const p1 = Promise.reject("A")
const p1 = Promise.resolve("A")
const p2 = Promise.reject("B")
const p3 = Promise.reject("C")

Promise.any([p1,p2,p3])
.then((res)=>console.log(res)) // B first and Success 
.catch((err)=>console.log(err))

// [AggregateError: All promises were rejected] {
//   [errors]: [ 'A', 'B', 'C' ]}