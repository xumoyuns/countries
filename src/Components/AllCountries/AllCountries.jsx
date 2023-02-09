import axios, { all } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/apiURL";
import loading from "../../assets/img/loading1.svg";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context/MyContext";

function AllCountries({ inputValue, selectValue }) {
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { countries, setCountries } = useContext(MyContext);

  console.log(selectValue);
  // console.log(countries);

  const getAllCountries = () => {
    axios.get(`${BASE_URL}/all`).then((res) => {
      console.log(res.data);
      setCountries(res.data);
      setIsLoading(false);
    });
  };

  const getCountries = () => {
    if (inputValue) {
      axios
        .get(`${BASE_URL}/name/${inputValue}`)
        .then((res) => {
          console.log(res.data);
          setError(null);
          {
            setCountries(res.data);
          }
          //  agar bunday davlat topilmasa bunday davlat yoq degan yozuvni chiqarsin
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      getAllCountries();
    }
  };
  useEffect(() => {
    getCountries();
    // getByRegion()
  }, [inputValue]);

  const getByRegion = () => {
    if (selectValue) {
      axios.get(`${BASE_URL}/region/${selectValue}`).then((res) => {
        console.log(res.data);
        setCountries(res.data);
      });
    }
  };

  useEffect(() => {
    getByRegion();
  }, [selectValue]);
  console.log(countries);
  if (error) return error.message;
  return (
    <>
      {/* <div>{inputValue}</div> */}

      <div className="flex items-baseline justify-evenly max-w-6xl flex-wrap gap-y-4 gap-x-1">
        {isloading && (
          <div className="flex items-center justify-center mx-auto my-auto">
            <img src={loading} alt="" width="80" height="50" />
          </div>
        )}

        {/* {...countries.sort(function (a, b) {
          if (a?.name?.common < b?.name?.common) {
            return -1;
          }
          if (a?.name?.common > b?.name?.common) {
            return 1;
          }
          return 0;
        })}
        {console.log(countries)} */}
        {countries.map((country) => (
          <Link
            onClick={() => {}}
            to={`/country/${country?.name?.common
              .toLowerCase()
              .replace(/\s/g, "%20")}`}
            key={country?.ccn3 + Math.random()}
            className=" w-1/5  rounded-b-md border-spacing-0.5"
          >
            <img
              className="rounded-t-md mb-3"
              width="100%"
              height="130px"
              src={country?.flags.svg}
              alt={country?.name?.common + " flag img"}
            />
            <div className="px-5">
              <h1 className="text-2xl font-medium mb-2">
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
          </Link>
        ))}
      </div>
    </>
  );
}

export default AllCountries;
