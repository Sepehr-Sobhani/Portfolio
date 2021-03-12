import React from "react";
import "../social_icons/style.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a
        href="https://github.com/Sepehr-Sobhani"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/sepehr-sobhani/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
    </Col>
  );
}

export default SocialIcons;
