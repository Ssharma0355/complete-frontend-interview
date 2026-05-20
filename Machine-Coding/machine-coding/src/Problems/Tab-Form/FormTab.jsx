import React, { createContext, useState, Provider } from 'react'
import Personal from "./Personal"
import Address from './Address'
import Review from './Review'

function FormTab() {
    const [currentTab, setCurrentTab] = useState(0);
    const [data, setData] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        pincode:"",
        agree:false
    })
    console.log(typeof(data))
    console.table(data)

    const TabConfig = [
        {
            name:"Profile",
            component: Personal
        },
        {
            name:"Address",
            component: Address
        },
        {
            name:"Review",
            component: Review
        }
    ]

    const CurrentComponent = TabConfig[currentTab].component;
    const changeTab=(id)=>{
        setCurrentTab(id)
    }
  return (
    <div>
        <div style={{display:"flex", gap:"4px"}}>{TabConfig.map((title,index) =>
        <div onClick={()=>changeTab(index)} style={{display:"flex", padding:"4px", border:"1px solid black", cursor:"pointer"}} key={index}>{title.name}</div>
        )}
        </div>
        <div style={{display:"flex", padding:"4px", border:"1px solid red"}}>
            <CurrentComponent data={data} setData={setData} />
        </div>
    </div>
  )
}

export default FormTab
