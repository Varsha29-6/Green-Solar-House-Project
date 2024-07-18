import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home.jsx";
import Solar1 from "./Components/Solar1.jsx";
import Boiler1 from "./Components/Boiler1.jsx";
import Home1 from "./Components/Home1.jsx";
import Business1 from "./Components/Business1.jsx";
import Farm1 from "./Components/Farm1.jsx";
import SmallElec1 from "./Components/SmallElec1.jsx";
import Morning1 from "./Components/Morning1.jsx";
import Currency from "./Components/Currency.jsx";
import Form from "./Components/Form.jsx";
import SemiDutch from "./Components/Semi-Ducth.jsx"; 
import Apartment from "./Components/Apartment.jsx";
import Dairy from "./Components/Dairy.jsx";
import Mount from './Components/Mount.jsx'
import Prepost from './Components/Prepost.jsx'
import Wire from "./Components/Wire.jsx";
import Gases from "./Components/Gases.jsx";
import Vehicle from "./Components/Vehicle.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="solar1" element={<Solar1 />}/>
        <Route path="solar1/home1" element={<Home1 />} />
        <Route path="solar1/home1/semidutch" element={<SemiDutch/>} />
        <Route path="solar1/home1/apartment" element={<Apartment/>} />
        <Route path="solar1/home1/apartment/montofri" element={<Apartment />} />
        <Route path="solar1/home1/apartment/montofri/currency" element={<Currency />} />
        <Route path="solar1/farm1" element={<Farm1 />} />
        <Route path="solar1/farm1/dairy" element={<Dairy />} />
        <Route path="solar1/farm1/dairy/mount" element={<Mount />} />
        <Route path="solar1/business1" element={<Business1 />} />
        <Route path="solar1/business1/smallelec1" element={<SmallElec1 />} />
        <Route path="solar1/business1/smallelec1/Morning1" element={<Morning1 />} />
        <Route path="solar1/business1/smallelec1/Morning1/Currency" element={<Currency />} />
        <Route path="solar1/business1/smallelec1/Morning1/Currency/form" element={<Form />} />
        <Route path="boiler1" element={<Boiler1 />} />
        <Route path="boiler1/prepost" element={<Prepost />} />
        <Route path="boiler1/prepost/wire" element={<Wire />} />
        <Route path="boiler1/prepost/wire/gases" element={<Gases />} />
        <Route path="boiler1/prepost/wire/gases/vehicle" element={<Vehicle />} />
        <Route path="boiler1/prepost/wire/gases/vehicle/form" element={<Form />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
