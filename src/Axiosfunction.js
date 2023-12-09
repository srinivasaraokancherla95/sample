import React,{useState} from 'react'
import axios from "axios"
function Axiosfunction() {
  const [data,setData]=useState([])

  let v = {
    title: "Entri",
    body: "Wester"
  }
  function handlePostAPI(){
    axios.post('https://jsonplaceholder.typicode.com/posts', v).then((res)=>{
  setData(res.data)
  
})  }


  return (
    <div>
      <button onClick={handlePostAPI}> Call Post API</button>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  )
}

export default Axiosfunction