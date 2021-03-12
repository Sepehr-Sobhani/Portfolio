import React, { Component } from "react";
import "../about/style.css";
import { Container, Row } from "react-bootstrap";
import Animate from "react-smooth";
import { Helmet } from "react-helmet";
import CV from "../../components/cv";
import HamburgerMenu from "../../components/hamburger_menu";
import particles from "../../const/about_particle.js";
import Particles from "react-particles-js";

class About extends Component {
  render() {
    return (
      <Container className="About-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | Sepehr Sobhani</title>
          <meta
            name="description"
            content="Sepehr Sobhani | Full Stack Web Developer"
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Row className="About-main">
            <HamburgerMenu />
            <CV />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default About;
