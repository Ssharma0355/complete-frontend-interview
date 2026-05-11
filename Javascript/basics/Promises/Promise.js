// Promise is an Object that represent the eventual completion or falure of an 
// async operation have 3 state 
// Resolve, Reject & Fullfilled

const data = new Promise((resolve, reject)=>{
    const done = false;
    done? resolve("Fetch") : reject("Failed")
})
data.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})
