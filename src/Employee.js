import React from 'react'
import { useParams } from 'react-router-dom'

function Employee() {

    const {id} =useParams()
  return (
    <div>Employee{id}</div>
  )
}

export default Employee
