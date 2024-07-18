import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from "./Backbutton";

export default function Business1() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(2/7)
  },[])
  let cardarr = [
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/business%20(1).png",
      heading: "Small - Electricity Spend Less than €120,000 / Year",
      to:"/solar1/business1/smallelec1"
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/working-factory.png",
      heading: "Medium - Electricity Spend Between €120,000 and €300,000 / Year",
        to:"/solar1/business1/smallelec1"
    },
    {
      imgs: "	https://getyourquote.greenenergyhomes.ie/unique-image/factory.png",
      heading: "Large - Electricity Spend More than €300,000 / Year",
        to:"/solar1/business1/smallelec1"
    },
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-6"
      style={{ backgroundColor: "rgb(245,250,251)" }}
    >
      <h1 className="mt-7 text-xl text-center font-bold text-gray-500">
      We will get you a Solar PV estimate in seconds. Let's start by telling us where you would like to have Solar PV installed?
      </h1>
      <h1 className="mt-7 mb-5 text-l">
      A warm welcome to Green Energy Home , Ireland's highest rated Solar PV installer.
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
