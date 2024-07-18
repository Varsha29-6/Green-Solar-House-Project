import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Backbutton() {
    let navigate = useNavigate()
  return (
    <div>
          <button onClick={()=>{navigate(-1)}} className="px-5 text-white h-[40px] mt-40 " style={{backgroundColor:"rgb(75, 164, 161)"}}>Back</button>
      
    </div>
  )
}
