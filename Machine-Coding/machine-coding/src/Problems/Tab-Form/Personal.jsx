import React from 'react'

function Personal({setData, data, error}) {
    const {name, email, ph} = data;
    const handleChange =(e,name)=>{
        setData(prevState => [{...prevState,[name]:e.target}])

    }
  return (
    <div>
      <label>Name*</label>
      <input type='text' name={name} value={name} onChange={(e)=> handleChange(e,name)} />
      <br />
      {error && <p style={{color:"red"}}>{error}</p>}
      <label>Email*</label>
      <input type='text' name={email} value={email} onChange={(e)=> handleChange(e,name)} />
      <br />
      <label>Phone Number*</label>
      <input type='number' name={ph} value={ph} onChange={(e)=> handleChange(e,name)} />
      <br />
    </div>
  )
}

export default Personal
