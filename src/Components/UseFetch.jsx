import React, { useEffect, useState } from 'react'

function UseFetch(request) 
{
    let [data,setData]=useState(null)
    let [pending , setPending]=useState(true)
    let [error, setError]=useState(null)

    useEffect(()=>
    {
        setTimeout(()=>
        {
            fetch(request).then((res)=>
            {
                if(res.ok===true)
                {
                    return res.json()
                }
                else
                {
                    throw error("data not found, please search for different data")
                }
            })
            .then((data)=>{setData(data);setPending(false)})
            .catch((err)=>{setError("failed to fetch, please try after some time"); setPending(false)})
        }, 3000)
    }, [])

  return {data,pending,error}
}

export default UseFetch