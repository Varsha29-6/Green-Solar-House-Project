import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from "./Backbutton";

export default function SemiDutch() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(2/7)
  },[])
  let cardarr = [
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/dining-table.png",
      heading:"One Story",
       to:'/solar1/home1/apartment/montofri'
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/real-estate.png",
      heading: "Two Stories",
       to:'/solar1/home1/apartment/montofri'
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/house-front-of-three-floors.png",
      heading: "Three Stories+",
         to:'/solar1/home1/apartment/montofri'
    },
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 text-xl text-center font-bold text-gray-500">
      How many stories does your property have?
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
