import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from "./Backbutton";

export default function SmallElec1() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(3/7)
  },[])
  let cardarr = [
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/morning.png",
      heading: "Morning",
      to:'/solar1/business1/smallelec1/Morning1'
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/noon.png",
      heading: "Afternoon",
      to:'/solar1/business1/smallelec1/Morning1'
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/moon.png",
      heading: "Evening",
      to:'/solar1/business1/smallelec1/Morning1'
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/24-hours.png",
      heading: "All Day",
      to:'/solar1/business1/smallelec1/Morning1'
    }
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 mb-7 text-xl text-center font-bold text-gray-500">
      When do you use your home the most?
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
