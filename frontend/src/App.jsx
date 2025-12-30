import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';


const App = () => {
  const[motivation, setMotivation] = useState([])

  useEffect(()=>{
const fetchData = async()=>{
    try {
      const res = await axios('/api/motivate')
      setMotivation(res.data)

    } catch (error) {
      console.log(error)
    }
}
  fetchData()
  }, [])


  // useEffect(()=>{
  //   axios.get('/api/motivate')
  //   .then((response)=>{
  //     setMotivation(response.data)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }, [])



  return (
    <>
      <h1>welcome to motivation page</h1>
      <h3> motivation : {motivation.length}</h3>

      {
        motivation.map((motivate, index)=>{
          return <div key={motivate.id}>
            <h3>{motivate.title}</h3>
            <p>{motivate.content}</p>
          </div>
        })
      }


    </>
  )
}

export default App
