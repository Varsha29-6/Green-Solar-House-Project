import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import Backbutton from './Backbutton'
import UserContext from '../Context/UserContext'

export default function Morning1() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(4/7)
  },[])
  let cardarr = [
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/coins.png",
      heading: "<€300",
      to:"/solar1/business1/smallelec1/Morning1/Currency"
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/coin-stack.png",
      heading: "<€400",
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/coins%20(1).png",
      heading: "<€500",
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/coins%20(1).png",
      heading: "<€500+",
    }
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 mb-7 text-xl text-center font-bold text-gray-500">
      How much do you spend on your bi-monthly electricity bill?
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
