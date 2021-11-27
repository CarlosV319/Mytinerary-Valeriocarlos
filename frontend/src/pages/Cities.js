import { Card, Form} from "react-bootstrap";
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
      <div className="input">
      <Form.Control type="text" placeholder="Readonly input here..." />
      </div>
      {cities.map((city) => {
        return (
          <Card>
            <div className="imagen-city">
              <Card.Img variant="top" src={city.src} />
            </div>
            <Card.Body>
              <div className="titulo-city">
                <Card.Title>{city.title}</Card.Title>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default Cities;
