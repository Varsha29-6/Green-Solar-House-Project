import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from './Backbutton'

export default function Home1() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(2/7)
  },[])
  let cardarr = [
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/semi-detached.png",
      heading: "Semi-Detached",
      to:"/solar1/home1/semidutch"
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/detached.png",
      heading: "Detached",
           to:"/solar1/home1/semidutch"
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/facade.png",
      heading: "Terrace",
           to:"/solar1/home1/semidutch"
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/apartment.png",
      heading: "Apartment",
      to:"/solar1/home1/apartment"
    }
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 mb-7 text-xl text-center font-bold text-gray-500">
      Which option best describes your property?
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
