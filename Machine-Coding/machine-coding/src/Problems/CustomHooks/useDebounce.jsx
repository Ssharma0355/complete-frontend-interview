import React, { useEffect, useState } from 'react'

function useDebounce(delay, search, url) {
    const [debouncedValue, setDebounceValue] = useState([])
    console.log(search)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            const getData = async()=>{
                try{
                    const res = await fetch(`${url}${search}`)
                    const resJson = await res.json()
                    setDebounceValue(resJson.recipes)
                }
                catch(err){
                    console.log(err)
                }
                finally{
                    console.log("done")
                }
            }
            getData()
        },delay)

        return ()=>{
            clearTimeout(timer)
        }
    },[search, delay])

  return debouncedValue
  
}

export default useDebounce
