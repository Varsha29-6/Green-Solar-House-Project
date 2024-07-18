import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from "./Backbutton";

export default function Dairy() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(5/7)
  },[])
  let cardarr = [
    {
      imgs:"	https://getyourquote.greenenergyhomes.ie/unique-image/electric-power.png",
      heading:"Single Phase",
       to:'/solar1/home1/apartment/montofri'
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/electricity.png",
      heading: "3-phase",
       to:'/solar1/home1/apartment/montofri'
    }
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 text-xl text-center font-bold text-gray-500">
      what is the current phase of the electricty meter at your farm?
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
