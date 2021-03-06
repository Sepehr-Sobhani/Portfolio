import React, { Component } from "react";
import "../project_main/style.css";
import { Col, Card, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import info from "../../const/project_info.json";
// import Lightbox from "react-image-lightbox";

export default class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      image: "",
    };
  }

  render() {
    return (
      <Row xl={12} className="main_row">
        {info.data.map((item) => (
          <Col xl={4} key={item.id} className="card_col">
            <Card className="card_main">
              <blockquote className="blockquote mb-0 card-body">
                <h2>{item.name}</h2>
                <footer className="blockquote-footer">
                  built using <strong title="Source Title">{item.tools}</strong>
                </footer>
              </blockquote>
              <Card.Body>
                <FontAwesomeIcon
                  onClick={() =>
                    this.setState({ isOpen: true, image: item.image })
                  }
                  className="icon"
                  size="lg"
                  // icon={faImages}
                />{" "}
                &nbsp;&nbsp;
                {item.link !== false && (
                  <Card.Link href={item.link} target="_blank">
                    <FontAwesomeIcon className="icon" size="lg" icon={faLink} />
                  </Card.Link>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
