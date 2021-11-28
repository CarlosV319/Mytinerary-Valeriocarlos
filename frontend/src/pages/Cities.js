import React from "react";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import City from "../components/City";

export default class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.response.cities,
        });
      });
  }

  render() {
    return (
      <div className="containert-cities">
        <div className="input">
          <Form.Control type="text" placeholder="Readonly input here..." />
        </div>
        {this.state.items.map((city) => {
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
}
