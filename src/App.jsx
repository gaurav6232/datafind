'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
const App = () => {
  const [api, setapi] = useState([])
  const getproduct  = async() =>{
  const response = await axios.get("https://fakestoreapi.com/products") 
  const data = response.data
  
  setapi(data)
  console.log(api)
  }
  return (
    <div>
       


       <button onClick={getproduct} className='p-5 rounded bg-green-500'>get product</button>

       {api.map((elem) =>{
        return(
          <div className='w-full h-screen bg-slate-400'>
              <div className='w-full h-screen'>
              <h2 >{elem.title}</h2>
              <img  src={elem.image} alt="" width="300px" height="300px"/>
              </div>
          </div>
        )
       })}
    </div>
  )
}

export default App
