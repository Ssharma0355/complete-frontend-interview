import React from 'react'

function Personal({data, setData}) {
  const {name, email, phone} = data;

  const handleChange=(e)=>{
  const {id, value} = e.target
  setData(prev =>({
    ...prev,
    [id]:value
  }))

  }
  return (
    <div>
      <label >Name</label>
      <input type="text" id='name' value={name} onChange={handleChange} />
      <br />
      <label >Email</label>
      <input type="text" id='email' value={email} onChange={handleChange} />
      <br />
      <label >Phone Number</label>
      <input type="text" id='phone' value={phone} onChange={handleChange} />
      <br />
    </div>
  )
}

export default Personal
