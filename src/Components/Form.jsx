import React, { useContext, useEffect } from "react";
import UserContext from '../Context/UserContext'
import { useNavigate } from "react-router-dom";

export default function Form() {
  let navigate= useNavigate()

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territories",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  let { setBar }= useContext(UserContext)
  useEffect(()=>{
setBar(6/7)
  },[])

  return (
    <div className="flex flex-col items-center bg-purple-200">
      <div className="font-bold my-10 text-lg">
        Alright, let's get your details and create your tailored Solar PV
        estimate!
      </div>
      <div className="grid grid-cols-2 gap-6 w-3/5">

        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="text" placeholder="First Name" />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="lastName">Last Name</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="text" placeholder="last Name" />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="firstName">Phone</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="number" placeholder="9999999999" />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email">E-Mail</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="email" placeholder="user@gmail.com" />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="code">Pin Code</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="number" placeholder="Pin code" />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="country">Country</label>
          <select
          className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full"
          name="" id="">
            <option value="">Select Country</option>
            {countries.map((name) => (
              <option>{name}</option>
            ))}
          </select>
        </div>

        <div className='flex flex-col col-span-full'>
          <label htmlFor="address">Address</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="text" placeholder="Address" />
        </div>

        <div className="col-span-full mb-10">
            <button className="w-full rounded-md text-white px-auto py-3" style={{backgroundColor:'rgb(75, 164, 161)'}}>View Estimated Prices</button>
        </div>
      </div>
    </div>
  );
}
