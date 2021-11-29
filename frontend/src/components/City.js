import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

const City = () => {
  const [city, setCity] = useState();
  let { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities/" + id).then((res) => {
      console.log(res);
      setCity(res.data.respuesta);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container-city">
        {city && (
          <div className="container-card">
            <div key={city._id} className="city-img">
              <img src={city.img} alt={city.name} />
              <div className="container-n">
                <p className="name-city">{city.name}</p>
              </div>
            </div>
          </div>
        )}
        <div className="city-container">
          <p>UNDER CONSTRUCTION</p>
          <Link to="/Cities" className="link-city ">
            <p>BACK TO CITIES</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default City;
