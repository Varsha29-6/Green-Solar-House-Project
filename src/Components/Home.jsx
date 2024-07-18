// import React from "react";
import { useContext, useEffect } from "react";
import Card1 from "./Card1";
import UserContext from '../Context/UserContext'

const Home = () => {
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(0)
  },[])
  let cardarr = [
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/custom-image/solarmain.webp",
      heading: "Solar PV",
      linkpg:'/solar1'
    },
    {
      imgs: "https://getyourquote.greenenergyhomes.ie/custom-image/bolier(main).webp",
      heading: "Boilers",
      linkpg:'/boiler1'
    },
  ];
  return (
    <div
      className="flex flex-col items-center w-full p-4"
      style={{ backgroundColor: "rgb(227, 227, 206); " }}
    >
      <h1 className="mt-7 text-4xl font-bold color-#000000">Choose your service</h1>
      <h1 className="mt-8 mb-5 text-2xl text-pink-950">
        Get your free online estimate in seconds
      </h1>
      <div className="flex flew-wrap gap-4 ">
       {cardarr.map((det)=>(
         <Card1 imgsrc={det.imgs} heading={det.heading} to={det.linkpg}/>
       ))}
      </div>
    </div>
  );
}
export default Home;

