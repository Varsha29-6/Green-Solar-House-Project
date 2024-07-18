import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from './Backbutton'

export default function Wire() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(3/7)
  },[])
  let cardarr = [
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/radiator%20(2).png",
      heading: "1-5",
      to:"/boiler1/prepost/wire/gases"
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/5-8img.png",
      heading: "5-8",
        to:"/boiler1/prepost/wire/gases"
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/5-8radiator.png",
      heading: "9-12",
       to:"/boiler1/prepost/wire/gases"
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/9-12radiator.png",
      heading: "13-16",
        to:"/boiler1/prepost/wire/gases"
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/13-16radiator.png",
      heading: "17-19",
       to:"/boiler1/prepost/wire/gases"
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/19+radiator.png",
      heading: "19+",
       to:"/boiler1/prepost/wire/gases"
    }
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 text-xl text-center font-bold text-gray-500">
      How many radiators do you have in your home? This will help us calculate an appropriate boiler size
for your property.
      </h1>
      <div className="w-full flex flew-wrap gap-4">
        <Backbutton/>
        {cardarr.map((det) => (
          <Card2 imgsrc={det.imgs} heading={det.heading} to={det.to}/>
        ))}
      </div>
    </div>
  );
}
