import React from "react";
import { Link } from "react-router-dom";

export default function Card2({ imgsrc, heading,to }) {
  // console.log(to)
  return (
    <Link
    to={to}
      className="w-[250px] h-[300px] flex flex-col justify-around items-center p-3 border border-inherit rounded-xl shadow-lg bg-white"
    >
      <img className="w-2/5" src={imgsrc} alt="" />
      <h1 className="text-l text-center">{heading}</h1>
    </Link>
  );
}
