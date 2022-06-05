import React, { useEffect, useState } from 'react'
import '../styles/startMenItem.css'
import axios from 'axios'

const Start = () => {
  const [datas, setDatas] = useState([])
  useEffect(()=>{
   axios({
     url:`http://localhost:8080/mendata`,
     method:"GET"
   })
   .then(res=>{
     console.log(res.data)
    setDatas(res.data)
   })
   .catch((err)=>{
      console.log(err)
   })
  },[])
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)", gap:"20px"}}>
     {datas.map((item)=>(
        <div key={item.id}>
          <img src={item.image_url} width="100px" alt='mensdata' />
          <p>{item.name}</p>
          <p>{"Price - "+item.price}</p>
          <p>{"ST-Price - "+item.strikedoffprice}</p>
        </div>
        
      ))}
    </div>
  )
}

export default Start