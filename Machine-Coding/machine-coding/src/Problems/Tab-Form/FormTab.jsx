import React, { useState } from 'react'
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
    const [error, setError] = useState("")
    console.log(typeof(data))
    console.table(data)

    const TabConfig = [
        {
            name:"Profile",
            component: Personal,
            validate:()=>{
                let err = {}
                if(data.name.trim() ===""){
                    setError("Name is required!")
                    return false
                }
                if(data.email.trim()==="" || !data.email.includes("@")){
                    setError("Email is invalid")
                    return false
                }
                if(data.phone.trim() === "" || data.phone.length !== 10)
                {
                    setError("Invalid Phone Number")
                    return false
                }
                setError("")
                return true;
            }
        },
        {
            name:"Address",
            component: Address,
            validate:()=>{
                if(data.address.trim() ==="" || data.address.length < 5){
                    setError("Address is invalid")
                    return false
                }
                if(data.pincode.trim() ==="" || data.pincode.length < 5){
                    setError("Pincode is invalid")
                    return false
                }
                setError("")
                return true;
            }
        },
        {
            name:"Review",
            component: Review,
            validate: () => {
                if(!data.agree){
                    setError("Please agree before submit");
                    return false;
                }

                setError("");
                return true;
            }
        }
    ]

    const CurrentComponent = TabConfig[currentTab].component;

    const changeTab=(id)=>{
        setCurrentTab(id)
    }
    const checkNext =()=>{
        const isValid = TabConfig[currentTab].validate();
        if(!isValid) { return }
        if(currentTab < TabConfig.length-1){
            setCurrentTab(prev => prev +1)
        }
    }
    const validateSubmit =()=>{
        const isValid = TabConfig[currentTab].validate();
        if(!isValid) { return }
        console.log(data,"Done")
        
    }

  return (
    <div>
        <div style={{display:"flex", gap:"4px"}}>{TabConfig.map((title,index) =>
        <div onClick={()=>changeTab(index)} style={{display:"flex", padding:"4px", border:"1px solid black", cursor:"pointer"}} key={index}>{title.name}</div>
        )}
        </div>
        <div style={{display:"flex", padding:"4px", border:"1px solid red"}}>
            <CurrentComponent data={data} setData={setData} error={error} />
        </div>
        <div>
            <button disabled={currentTab === 0} onClick={()=>setCurrentTab(prev=> prev-1 )}>Previous</button>
            {currentTab < TabConfig.length -1 &&
            <button onClick={checkNext}>Next</button>
}
             {currentTab === TabConfig.length-1 && 
            <button onClick={validateSubmit}>Submit</button>}
        </div>

    </div>
  )
}

export default FormTab
