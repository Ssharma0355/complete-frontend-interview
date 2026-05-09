// Shallow Copy it reflects the changes coz of it points to same address(Reference)
const person ={
    name:"Sachin",
    address:{
        city:"Patna",
    }
}

const copy ={...person}

copy.address.city="Pune"
console.log(person.address.city) // Pune
// Nested objects still share reference.

const user = {
    name:"Sharma",
    address:{
        city:"Banglore"
    }
}

//it copies in different memory location that's why it doesn't give

const deep = JSON.parse(JSON.stringify(user))
deep.address.city="Bengaluru"
console.log(user.address.city) // Banglore

