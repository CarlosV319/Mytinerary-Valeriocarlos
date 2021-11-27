// import React, { cloneElement, useEffect } from "react";
import React, { useEffect, useState } from "react";

function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => setCities(data.response.cities))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="containert-cities">
      {cities.map((city) => {
        return (
          <div className="imagen-city">
            <div className="titulo-city">
              {" "}
              <h2> {city.title} </h2>
            </div>
            <div className="img-city">
              {" "}
              <img src={city.src}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cities;
