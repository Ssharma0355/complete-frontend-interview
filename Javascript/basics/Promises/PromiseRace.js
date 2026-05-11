// Returns the promise that settles first.
// resolved OR rejected

// Whichever happens first wins.

// const p1 = Promise.resolve("A")
const p1 = Promise.reject("A")
const p2 = Promise.resolve("B")
const p3 = Promise.reject("C")

Promise.race([p1,p2,p3])
.then((res)=>console.log(res)) // always show A resolve ore rejected only winer wins
.catch((err)=>console.log("err",err))
