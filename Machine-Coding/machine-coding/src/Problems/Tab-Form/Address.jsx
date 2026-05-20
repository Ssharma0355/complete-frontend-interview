import React from 'react'

function Address({data , setData}) {
    const {address, pincode} = data;

    const handleChange =(e)=>{
        const {id, value} = e.target
        setData(prev =>({
            ...prev,
            [id]:value
        }))

    }
  return (
    <div>
        <label >Address</label>
        <input type="text" id="address" value={address} onChange={handleChange} />
        <br />
        <label >Pin Code</label>
        <input type="text" id="pincode" value={pincode} onChange={handleChange} />
        <br />
      
    </div>
  )
}

export default Address
