import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from './Backbutton'

export default function Boiler1() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(1/7)
  },[])
  let cardarr = [
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/facade.png",
      heading: "Terrace",
      to:"/boiler1/prepost"
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/detached.png",
      heading: "Detached",
       to:"/boiler1/prepost"
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/semi-detached.png",
      heading: "Semi-Detached",
       to:"/boiler1/prepost"
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/apartment.png",
      heading: "Apartment",
       to:"/boiler1/prepost"
    }
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 text-xl text-center font-bold text-gray-500">
      Just a few short questions and we will have quotation to you.
      </h1>
      <h1 className="mt-7 mb-5 text-l">
      Join the 20,000 happy customers throughout Leinster that have chosen us to replace there boiler.
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
