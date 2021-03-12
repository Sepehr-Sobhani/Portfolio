import React, { Component } from "react";
import "../projects/style.css";
import { Container, Row } from "react-bootstrap";
import Animate from "react-smooth";
import { Helmet } from "react-helmet";
import HamburgerMenu from "../../components/hamburger_menu";
import particles from "../../const/project_particle.js";
import Particles from "react-particles-js";
import ProjectBody from "../../components/project_main";

class Projects extends Component {
  render() {
    return (
      <Container className="About-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Project | Sepehr Sobhani</title>
          <meta
            name="description"
            content="Sepehr Sobhani | Full Stack Web Developer"
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Row className="About-main">
            <Particles params={particles} className="particle" />
            <HamburgerMenu />
            <ProjectBody />
          </Row>
          <br />
        </Animate>
      </Container>
    );
  }
}

export default Projects;
