import React, { useEffect, useState } from "react";
import ProdNation from "./ProdNation";

function PageNation() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  // pagination logic

  const Number_Of_Prods_In_Page = 10;
  const Number_Of_Length = products.length-1;
  const Number_Of_Page_Length = Math.ceil(
    Number_Of_Prods_In_Page / Number_Of_Length
  );
  console.log(Number_Of_Page_Length)
  const start = Number_Of_Prods_In_Page * currentPage;
  console.log(start);
  const end = start + Number_Of_Prods_In_Page;
  console.log(end);

  const selectTab=(id)=>{
    setCurrentPage(id)
  }
  const goPrevious=()=>{
    setCurrentPage(prev => prev-1)
  }
  const goNext=()=>{
    setCurrentPage(prev=> prev+1)
  }

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=1000");
      const resJson = await res.json();
      setProducts(resJson.products);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) return <p>Loading</p>;
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {products.slice(start, end).map((p) => (
          <ProdNation key={p.id} title={p.title} image={p.thumbnail} />
        ))}
        {error && <p>{error}</p>}
      </div>
     
      <div style={{ display:"flex",  padding: "12px", gap:"12px" }}>
        <button disabled={currentPage===0} onClick={goPrevious}>Previous</button>
        {[...Array(Number_Of_Prods_In_Page).keys()].map((n) => (
          <p onClick={()=>{selectTab(n)}}style={{border:"1px solid black", padding:"12px",
          backgroundColor:`${currentPage===n?"red":""}`
        
        }} key={n}>{n}</p>
        ))}
        <button disabled={currentPage===products.length-1} onClick={goNext}>Next</button>

      </div>
    </>
  );
}

export default PageNation;
