import React, { useState } from 'react'

function PasswordCheck() {
    const [state, setState] = useState({name:"",email:"",password:"",repassword:""})
    const handleChange =(e)=>{
        const {id,value} = e.target;
        // setState(prev => [{...prev, [id]:value])

    }
  return (
    <div>
        <input type="text" id='name' value={state.name} onChange={handleChange}  />
        <br />
        <input type="text" id='email' value={state.email} onChange={handleChange}  />
        <br />
        <input type="text" id='password' value={state.password} onChange={handleChange}  />
        <br />
        <input type="text" id='repassword' value={state.repassword} onChange={handleChange}  />
        <br />


      
    </div>
  )
}

export default PasswordCheck
