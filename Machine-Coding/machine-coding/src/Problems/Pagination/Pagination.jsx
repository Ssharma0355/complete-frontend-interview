import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';

function Pagination() {
    const [prods, setProds] = useState([]);
    const [loading, setLoading] =useState(null);
    const [currentPage, setCurrentPage] = useState(0)
    const PAGE_SIZE = 10;

    useEffect(()=>{
        const getData = async ()=>{
            try{
                setLoading(true)
                const res = await fetch("https://dummyjson.com/products?limit=500")
                const reJson = await res.json()
                setProds(reJson.products)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }
        getData()

    },[])

    const totalProducts = prods.length;
    const noOfPages = Math.ceil(totalProducts/PAGE_SIZE)
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE

    const handleNumbers=(n)=>{
        setCurrentPage(n)
    }
    const goPrev =()=>{
        setCurrentPage(prev => prev-1)

    }
    const goNext=()=>{
        setCurrentPage(prev => prev+1)
    }

  return loading ? <>Loading..</>: (
    
    <div>
            <div style={{display:"flex", flexWrap:"wrap"}}>
        {prods.slice(start, end).map(p=>(
            <ProductCart key={p.id} title={p.title} image={p.thumbnail} />
        ))}
    </div>
    <div style={{display:"flex", margin:"10px"}}>
            <button  disabled={currentPage === 0}onClick={goPrev}>Left Arrow</button>
          {[...Array(noOfPages).keys()].map(n=>(
            <span
            onClick={()=>handleNumbers(n)}
             style={{
                padding:"4px",
                border:"1px solid black",
                margin:"2px",
                cursor:"pointer",
                backgroundColor:`${currentPage === n ? "red":""}`
            }} key={n}>{n}</span>
          ))}
          <button disabled={currentPage === noOfPages-1} onClick={goNext}>Right Arrow</button>
        </div>
    </div>
  )
}

export default Pagination
