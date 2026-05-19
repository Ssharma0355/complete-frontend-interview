import React, { useState } from 'react'
import Personal from './Personal'
import Address from './Address'
import Review from './Review'

function FormTab() {
    const [activeTab, setActiveTab] = useState(0);
    const [error, setError] = useState({})
    const [data, setData] = useState({
        name:"",
        email:"",
        ph:"",
        address:"",
        city:"",
        pincode:""
    })
    const tabConfig =[
        {
            name:"Personal",
            component: Personal,
            // validate:()=>{
            //     const err ={}
            //     if(!data.name || data.name.length < 2){
            //         err("Name Invalid")
            //     }
            //     if(!data.email.includes("@") || !data.email.length < 0){
            //         err("Email is Ivalid")
            //     }
            //     setError(err)
            //     return false
            //    }
        },
        {
            name:"Address",
            component: Address
        },
        {
            name:"Review",
            component: Review
        },
]
const CurrentTab = tabConfig[activeTab].component;
const nextPage=()=>{
    setActiveTab(prev => prev+1)
}
const prevPage=()=>{
    setActiveTab(prev=>prev-1)
}

const handleActiveTab =(id)=>{
    setActiveTab(id)
}

  return (
    <div>
    <div style={{display:'flex',gap:"5px"}}>
        {tabConfig.map((t,index)=>
        <div onClick={()=>handleActiveTab(index)} style={{display:"flex", padding:"4px",border:"1px solid black", cursor:"pointer"}} key={index}>
            {t.name}
        </div>
        )}
    </div>
    <div style={{display:"flex", height:"300px", padding:"5px", border:"1px solid black", margin:"2px"}}>
        <CurrentTab setData={setData} data={data}  />
    </div>
    <div>
        {activeTab == 1 &&<button onClick={nextPage}>Next</button> }
        
        {activeTab< tabConfig.length-1 && activeTab>1 &&<button onClick={prevPage}>Previous</button> }

    </div>
    </div>
  )
}

export default FormTab
