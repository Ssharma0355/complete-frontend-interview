import React, { useState } from 'react'
import useDebounce from './useDebounce'

function Search() {
    const url = "https://dummyjson.com/recipes/search?q="
    const [search, setSearch] = useState("");
    const debouncedValue = useDebounce(3000,search,url);
    console.log(search)
    console.log(debouncedValue)
  return (
    <div>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <div>
            {debouncedValue.map(r=>(
                <li key={r.id}>{r.name}</li>
            ))}
        </div>
    </div>
  )
}

export default Search
