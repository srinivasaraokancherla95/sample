import React,{useContext} from 'react'
import {context} from './ComponentA'

export default function ComponentC() {
    const value= useContext(context)
  return (
    <div>ComponentC- {value}</div>
  )
}
