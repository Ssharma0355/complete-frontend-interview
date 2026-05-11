// Waits for ALL promises.

// Never fails.

// Returns status of every promise.

const p1 = Promise.resolve("Success")
const p2 = Promise.reject("Faliure")

Promise.allSettled([p1,p2])
.then((res)=> console.log(res))
.catch((err)=>console.log("err",err))

// output 
// [
//     { status: 'fulfilled', value: 'Success' },
//     { status: 'rejected', reason: 'Faliure' }
//  ]

// Use Case

// When you want results of ALL operations regardless of failure.

// Example:

// Upload multiple images
// Show which uploads failed/succeeded