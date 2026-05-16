// Destructuing is when we extract values from Object and Arrays

const User = {
    name:"sachin",
    email:"ss@gmail.com"
}

const {name, email} = User;
console.log(name)
console.log(email)

const Person =["Sachin","Sharma","ss@email.com"]

const [first, second] = Person;

console.log(first)