import React, { useState } from 'react'

function Mobilef() {

    const[mobile,setMobile]=useState({
        name: "Samsung Galaxy",
        Os: "Os26",
        price:"58000",
        Launchdate: "Aug 2021"
    })
 const handleUpdate = ()=>{
    setMobile({
        name:"POCO M2 pro",
        Os: "Os 17",
        price:" 22,000",
        Launchdate:"February, 2023"
    })
 }


 
  return (
    <div>
       

        <p>Name:{mobile.name}</p>
        <p>Os: {mobile.Os}</p>
        <p>Price : {mobile.price}</p>
        <p>Launch Date : {mobile.Launchdate}</p>
        <button onClick={handleUpdate}>Mobile Update</button>
    </div>
  )}


export default Mobilef