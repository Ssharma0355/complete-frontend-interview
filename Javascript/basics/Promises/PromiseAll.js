// Runs multiple promises in parallel.
// sucess -> when all promise fullfilled
// falure -> when any of promise gets fail 

const p1 = Promise.resolve("A")
const p2 = Promise.resolve("B")
// const p3 = Promise.resolve("C")
const p3 = Promise.reject("C")


Promise.all([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log("Error:",err)
    // for falure  = Error: C
    //  for success =  [ 'A', 'B', 'C' ]
})

// Use Case

// When all data is required together.

// Example:

// Fetch user
// Fetch posts
// Fetch comments

// All must succeed.