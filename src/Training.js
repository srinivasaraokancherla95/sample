import React from 'react'

function Training(props) {
  return (
    <div>
      <p> Course : {props.course}</p>
      <p>Price : {props.price}</p>
      <p>Duration: {props.duration}</p>
    </div>
  )
}

export default Training