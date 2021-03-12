import React from "react";
import "../contact/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Animate from "react-smooth";
import HamburgerMenu from "../../components/hamburger_menu";
import ContactLeft from "../../components/contact_left";
import EmailForm from "../../components/email_form";
import { Helmet } from "react-helmet";
import particles from "../../const/contact_particle.js";
import Particles from "react-particles-js";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | Sepehr Sobhani</title>
          <meta
            name="description"
            content="Sepehr Sobhani | Full Stack Web Developer"
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />
            </Row>
            <Row className="Contact-main">
              <Col xl={6} className="Contact-left">
                <ContactLeft />
              </Col>
              <Col xl={6} className="Contact-right">
                <EmailForm />
              </Col>
            </Row>
            <Row className="Contact-footer"></Row>
          </Container>
        </Animate>
      </div>
    );
  }
}
export default Contact;
