import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from "./Backbutton";

export default function Vehicle() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(5/7)
  },[])
  let cardarr = [
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/delivery-on-time.png",
      heading:"Immediate",
       to:'/boiler1/prepost/wire/gases/vehicle/form'
    },
    {
      imgs: 	"https://getyourquote.greenenergyhomes.ie/unique-image/people.png",
      heading: "Later",
       to:'/boiler1/prepost/wire/gases/vehicle/form'
    }
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <div className="flex flew-wrap gap-4">
        <Backbutton/>
        {cardarr.map((det) => (
          <Card2 imgsrc={det.imgs} heading={det.heading} to={det.to}/>
        ))}
      </div>
    </div>
  );
}
