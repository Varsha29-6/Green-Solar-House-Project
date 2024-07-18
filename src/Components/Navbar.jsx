import React, { useContext } from "react";
import UserContext from '../Context/UserContext'

export default function Navbar() {
  let { bar }= useContext(UserContext)
  return (
   <>
    <div className="w-full flex items-center shadow-md p-8 justify-center bg-teal-200">
      <img
      className="w-1/6"
        src="https://getyourquote.greenenergyhomes.ie/unique-image/greenlogo.png"
        alt=""
      />
    </div>
      <div className='w-full h-[4px]'>
        <div className='h-full'  style={{ 
            width: `${bar > 0 ? bar*100 : 0}%`, 
            backgroundColor: "rgb(75, 164, 161)" 
          }}>

        </div>
      </div>
   </>
  );
}
