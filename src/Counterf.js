import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Counterf() {
    const [counter,setCounter]=useState(0)

    const navigate=useNavigate()

    const handleIncrement = ()=>{
        setCounter(counter+1)
    }

    const handleDecrement = ()=>{
        setCounter(counter-1)
    }
    const handleRegistration = ()=>{
      navigate("/registration")
    }
  return (
    <div>
        Counterf
        <p>{counter}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleRegistration}>Registration</button>
        </div>
  )
}

export default Counterf