import React, { useContext, useEffect } from "react";
import Card2 from "./Card2";
import UserContext from '../Context/UserContext'
import Backbutton from './Backbutton'

export default function Farm1() {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(3/7)
  },[])
  let cardarr = [
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/dairy-products.png",
      heading: "Dairy",
      to:'/solar1/farm1/dairy'
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/working-factory.png",
      heading: "Beef/Suckler",
       to:'/solar1/farm1/dairy'
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/unique-image/dog-house.png",
      heading: "Other",
       to:'/solar1/farm1/dairy'
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
          <Card2 imgsrc={det.imgs} heading={det.heading} to={det.to} />
        ))}
      </div>
    </div>
  );
}
