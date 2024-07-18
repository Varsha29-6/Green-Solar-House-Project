import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from './Backbutton'

export default function Currency() {
    
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(6/7)
  },[])
  let cardarr = [
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/stopwatch.png",
      heading: "Immediate",
     to:'/solar1/business1/smallelec1/Morning1/Currency/form'
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/calendar.png",
      heading: "1 Months",
     to:'/solar1/business1/smallelec1/Morning1/Currency/form'
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/calendar%20(1).png",
      heading: "3-6 Months",
     to:'/solar1/business1/smallelec1/Morning1/Currency/form'
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/calendar%20(2).png",
      heading: "6 Months+",
      to:'/solar1/business1/smallelec1/Morning1/Currency/form'
    }
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 mb-7 text-xl text-center font-bold text-gray-500">
      When are you expecting to start your Solar PV project?
      </h1>
     
      <div className="flex flew-wrap gap-4">
        <Backbutton/>
        {cardarr.map((det) => (
          <Card2 imgsrc={det.imgs} heading={det.heading} to={det.to}/>
        ))}
      </div>
    </div>
  );
}
