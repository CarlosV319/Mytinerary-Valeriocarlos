import React from "react";

import { Carousel, Col, Card, Row,Container } from "react-bootstrap";

export default class Slide extends React.Component {
  Cities = [
    [
      {
        title: "Arabia Saudita",
        src: "./assets/ArabiaSaudita.jpg",
      },

      {
        title: "Grecia",
        src: "./assets/Grecia.jpg",
      },

      {
        title: "Indonesia",
        src: "./assets/Indonesia.jpg",
      },

      {
        title: "Miami",
        src: "./assets/Miami.jpg",
      },
    ],

    [
      {
        title: "Roma",
        src: "./assets/Roma.jpg",
      },

      {
        title: "Sidney",
        src: "./assets/Sidney.jpg",
      },

      {
        title: "Vancouver",
        src: "./assets/Vancouver.jpg",
      },

      {
        title: "Whistler",
        src: "./assets/Whistler.jpg",
      },
    ],

    [
      {
        title: "Montreal",
        src: "./assets/Montreal.jpg",
      },

      {
        title: "Moscu",
        src: "./assets/Moscu.jpg",
      },

      {
        title: "Ottawa",
        src: "./assets/Ottawa.jpg",
      },

      {
        title: "Polonia",
        src: "./assets/Polonia.jpg",
      },
    ],
  ];
 
  render() {
    return (
     <>
      <div className="container-carousel">
        <Carousel interval={5000} pause="false">
          {this.Cities.map((packs) => {
            return (
              <Carousel.Item>
                <Container>
                  <Row>
                    {packs.map((pack) => {
                      return (
                        <Col xs={12} sm={5}>
                          <Card>
                            <Card.Img variant="top" src={pack.src} />
                            <Card.Body>
                              <Card.Title>{pack.title}</Card.Title>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      </>
    )
  }
}



{
  /* <Carousel.Item>
  <Row xs={1} md={2} className="g-4">
    {datados.map((item) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Carousel.Item>
<Carousel.Item>
  <Row xs={1} md={2} className="g-4">
    {datatres.map((item) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Carousel.Item> */
}
