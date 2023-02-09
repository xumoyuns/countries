import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/apiURL";
import { MyContext } from "../Context/MyContext";

function SingleCountry() {
  // const { countries } = useContext(MyContext);
  const [singleCountry, setSingleCountry] = useState([]);

  const { countryName } = useParams();

  const getByCountryName = () => {
    axios.get(`${BASE_URL}/name/${countryName}?fullText=true`).then((res) => {
      console.log(res.data);
      setSingleCountry(res.data);
    });
  };
  useEffect(() => {
    getByCountryName();
  }, []);

  console.log(countryName);

  return (
    <div className="">
      {singleCountry.map((country) => (
        <div key={country.name.common} className="flex justify-between items-stretch mt-24   ">
          <div className="px-5">
            <h1 className="text-7xl font-medium mb-8">
              {country?.name?.common}
            </h1>
            <h4 className="font-semibold mb-1">
              Population:{" "}
              <span className="font-normal">{country?.population}</span>
            </h4>
            <h4 className="font-semibold mb-1">
              Region: <span className="font-normal">{country?.region}</span>
            </h4>
            <h4 className="font-semibold mb-1">
              Capital: <span className="font-normal">{country?.capital}</span>
            </h4>
          </div>
          <div className=" flex flex-col-reverse  ">
            <img
              className="rounded-t-md mb-3"
              width="30%"
              // height="20%"
              src={country?.coatOfArms.svg}
              alt={country?.name?.common + " flag img"}
            />
            <img
              className="rounded-t-md mb-3"
              width="30% "
              // height="130"
              src={country?.flags.svg}
              alt={country?.name?.common + " flag img"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SingleCountry;
