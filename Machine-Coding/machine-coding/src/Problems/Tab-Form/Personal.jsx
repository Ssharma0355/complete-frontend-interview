import React from 'react'

function Personal({data, setData, error}) {
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
      {error && <p style={{color:"red"}}>{error}</p>}
      <label >Email</label>
      <input type="text" id='email' value={email} onChange={handleChange} />
      <br />
      {error && <p style={{color:"red"}}>{error}</p>}
      <label >Phone Number</label>
      <input type="text" id='phone' value={phone} onChange={handleChange} />
      <br />
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}

export default Personal
