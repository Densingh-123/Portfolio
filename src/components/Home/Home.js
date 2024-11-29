  import React from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import homeLogo from "../../Assets/file.png";
  import Particle from "../Particle";
  import Home2 from "./Home2";
  import Type from "./Type";

  function Home() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} xs={12} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Densingh </strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} xs={12} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluids"
                  style={{ maxHeight: "450px", width: "100%", objectFit: "cover" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    );
  }

  export default Home;
