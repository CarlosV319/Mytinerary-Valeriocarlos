import React from "react";
import { Card, Form } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
// import city from "../../../models/City";

export default class Cities extends React.Component {
  state = {
    dataCities: [],
    searchCity: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/cities")
      .then((res) =>
        this.setState({
          dataCities: res.data.respuesta,
          searchCity: res.data.respuesta,
        })
      );
  }

  handleChange = (e) => {
    const valorDelImput = e.target.value.toLowerCase().trim();
    let filtred = [];
    filtred = this.state.dataCities.filter((ciudad) => {
      const city = ciudad.name.toLowerCase().trim();
      return city.startsWith(valorDelImput);
    });
    this.setState({ searchCity: filtred });
  };

  render() {
    const { searchCity } = this.state
    return (
      <div className="containert-cities">
        <Header />
        <div className="input">
          <Form.Control type="text" placeholder="Readonly input here..." onChange={this.handleChange}/>
        </div>
        { searchCity.length > 0 ? searchCity.map((element) => {
          return (
            <Card>
              <div key={element._id} className="imagen-city">
                <Link to={`/city/${element._id}`}>
                  <Card.Img variant="top" src={element.img} />
                </Link>
              {/* </div> */}

              <Card.Body>
                {/* <div className="titulo-city"> */}
                  <Card.Title>{element.name}</Card.Title>
                  <p>{element.pais}</p>
              </Card.Body>
                </div>
            </Card>
          );
        })
        :<p className="aviso-alert">your search does not exist</p>
      }
        <Footer />
      </div>
    );
  }
}
