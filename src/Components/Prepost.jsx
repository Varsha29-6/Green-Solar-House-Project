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
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/previous.png",
      heading:"Pre 2000",
       to:'/boiler1/prepost/wire'
    },
    {
      imgs: 	"https://getyourquote.greenenergyhomes.ie/unique-image/next.png",
      heading: "Post 2000",
        to:'/boiler1/prepost/wire'
    }
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 text-xl text-center font-bold text-gray-500">
      What year was your house built?
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
