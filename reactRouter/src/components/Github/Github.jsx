import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://api.github.com/users/akshai-m')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // }, [])
  return (
    <div className='text-center m-4 text-black font-mono p-4 text-3xl'>Github followers: {data.followers}
    <img className='rounded-full mx-auto' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {

    const response = await fetch('https://api.github.com/users/akshai-m')
    return response.json()
}
