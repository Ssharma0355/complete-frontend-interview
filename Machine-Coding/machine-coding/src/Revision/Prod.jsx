import React, { useEffect, useState } from 'react'
import ProdList from './ProdList';

function Prod() {
    const [result, setResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const getData = async ()=>{
        const res = await fetch("https://dummyjson.com/products?limit=500")
        const resJson = await res.json()
        setResult(resJson.products)
    }

    useEffect(()=>{
        getData()
    },[])
    // pagination logic

    const NUMBER_OF_PRODUCTS_IN_PAGE= 10;
    const NUMBER_OF_PRODUCTS = result.length-1

    const NUMBER_OF_PAGES =Math.ceil(NUMBER_OF_PRODUCTS_IN_PAGE%NUMBER_OF_PRODUCTS);
    const start = currentPage*NUMBER_OF_PRODUCTS_IN_PAGE;
    const end = start+NUMBER_OF_PRODUCTS_IN_PAGE
    
    console.log(NUMBER_OF_PAGES);
    const selectTab=(id)=>{
        setCurrentPage(id)
    }
     const getPrev =()=>{
        setCurrentPage(prev => prev-1)

     }
     const getNext=()=>{
        setCurrentPage(prev => prev+1)


     }

  return (
    <>
    <div style={{display:"flex", flexDirection:"row", gap:"12px"}}>
        <button onClick={getPrev} disabled={currentPage===0}>Previous</button>
    {[...Array(NUMBER_OF_PRODUCTS_IN_PAGE).keys()].map(n=>(
    <p 
    style={{padding:"12px",
    border:"1px solid black", gap:"12px",
    backgroundColor:`${currentPage===n?"red":""}`
}}

   onClick={()=>{ selectTab(n)}}
    
    key={n}>{n}</p>
  ))}
    <button onClick={getNext} disabled={currentPage === NUMBER_OF_PRODUCTS_IN_PAGE-1}>next</button>
     <button>Save</button>
    </div>

    
     <div style={{display:"flex", flexWrap:"wrap", gap:"12px", margin:"12px"}}>
        {result.slice(start,end).map(p=>(
        <ProdList key={p.id} title={p.title} image={p.thumbnail} />
        ))}
    </div>
    </>
   
  )
}

export default Prod
