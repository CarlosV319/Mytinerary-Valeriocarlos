import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import cityActions from "../redux/actions/cityActions";
import itineraryActions from "../redux/actions/itineraryActions";
import { Accordion } from "react-bootstrap";
import Footer from "./Footer";

const City = (props) => {
  let { id } = useParams();

  useEffect(() => {
    props.getItinerary(id);
    props.getOneCity(id);
  }, []);

  console.log(props);

  return (
    <div className="containercity">
      <Header />
      <div className="container-city">
        {props.Cities && (
          <div className="container-card">
            <div key={props.Cities._id} className="city-img">
              <img src={props.Cities.img} alt={props.Cities.name} />
              <div className="container-n">
                <p className="name-city">{props.Cities.name}</p>
              </div>
            </div>
          </div>
        )}
        <div className="city-container">
          <Link as={Link} to={"/Cities"} className="boton-una-city">
            <span id="span1"></span> Back to Cities!!
          </Link>
        </div>
      </div>
      {props.itineraries.length === 0 ? (
        <div>
          <p className="btn-grad">
            THERE ARE NO ITINERARIES YET FOR THIS CITY.
          </p>
        </div>
      ) : (
        props.itineraries.map((iti) => {
          return (
            <div className="caja_itinerarios">
              <div className="caja_itinerary">
                <div className="img-itinerary">
                  <img src={iti.personImage} />
                </div>
                <div className="">
                  <h2>{iti.name}</h2>
                  <h2>{iti.lastName}</h2>
                  <h6>Duration : {iti.duration} Hours</h6>
                  <h6 className="price">Price : {"💵".repeat(iti.price)}</h6>
                  <h6>Likes {iti.likes}</h6>
                  <h6>{iti.hashtags}</h6>
                </div>
                <Accordion className="acordion">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>View More"</Accordion.Header>
                    <Accordion.Body>
                      <p>UNDER CONSTRUCTION</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          );
        })
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraryReducer.itinerary,
    Cities: state.cityReducer.city,
  };
};

const mapDispatchToProps = {
  getItinerary: itineraryActions.getItineraryByCity,
  getOneCity: cityActions.fetchUnaCity,
};
export default connect(mapStateToProps, mapDispatchToProps)(City);
