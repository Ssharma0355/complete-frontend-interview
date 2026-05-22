import React, { useState } from 'react'

function ValidForm() {
    const [error, setError] = useState("")
    const [data, setData] = useState(
        {
            name:"",
            email:"",
            phone:"",
            password:""
        }
    )
    const {name, email, phone, password} = data;

    const handleChange =(e)=>{
        const {id, value} = e.target;
        setData((prev)=>({
            ...prev,
            [id]:value
        }))

    }

    const handleSubmit =()=>{
        // validation
        setError("")
        if(name.trim() ==="" || email.trim() === "" || phone.trim() ==="" || password.trim() === ""){
            setError("Invalid Inputs")
            return
        }
        if(!email.includes("@") || email.length <5){
            setError("Invalid email")
            return
        }
        if(phone.length <10){
            setError("Invalid Phone number")
            return
        }
        if(password.length < 5){
            setError("Weak Password")
            return
        }

        alert("Form Submiteed Successfully")
        setData( {
            name:"",
            email:"",
            phone:"",
            password:""
        })

    }
  return (
    <div>
        <label >Name</label>
        <input type="text" id="name" value={name} onChange={handleChange} />
        <br />
        <label >Email</label>
        <input type="text" id="email" value={email} onChange={handleChange} />
        <br />
        <label >Phone</label>
        <input type="text" id="phone" value={phone} onChange={handleChange} />
        <br />
        <label >Password</label>
        <input type="text" id="password" value={password} onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}

export default ValidForm
