import React from "react";
import { Link } from "react-router-dom";

export default function Card1({ imgsrc, heading,to }) {
  // console.log(to)
  return (
    <div
      className="w-[350px] h-[400px] flex flex-col justify-around items-center p-3 border border-inherit rounded-xl"
      style={{ backgroundColor: "rgb(220, 220, 206)" }}
    >
      <img className="w-1/2 mt-10" src={imgsrc} alt="" />
      <h1 className="text-3xl">{heading}</h1>
      <Link
        to={to}
        style={{ backgroundColor:"rgb(75, 164, 161)"}}
        className="p-4 w-2/3 rounded-full mt-4 flex justify-center text-white text-xl"
      >
        Get Estimate
      </Link>
    </div>
  );
}
