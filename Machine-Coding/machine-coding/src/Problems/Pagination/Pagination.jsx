import React, { useEffect, useState } from 'react'

function Pagination() {
    const [prods, setProds] = useState([]);

    useEffect(()=>{
        const getData = async ()=>{
            try{
                const res = await fetch("https://dummyjson.com/products")
                const reJson = await res.json()
                setProds(reJson.products)
            }
            catch(err){
                console.log(err)
            }
        }
        getData()

    },[])
    console.log(prods)
  return (
    <div>
        {prods.map(p=>(
            <li key={p.id}>{p.title}</li>
        ))}
      
    </div>
  )
}

export default Pagination
