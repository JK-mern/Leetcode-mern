import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


function Problem() {
    const {title} = useParams()
    const [currentProblem, setCurrentProblem] = useState({})

    useEffect ( ()=>{
        const problem = async() =>{
            const res = await axios.get (`/api/problem/get/${title}`)
            const data = res.data
            setCurrentProblem(data)
        }
        problem()
    }, [title])

    console.log(currentProblem)
  return (
    <main className='max-w-6xl mx-auto mt-10'>
      <h1>Problems</h1>
    </main>
  )
}

export default Problem
