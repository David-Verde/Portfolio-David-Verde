import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">David Verde </span>
            from <span className="purple"> Quito, Ecuador.</span>
            <br />I am a junior Full Stack Web Developer and senior Graphic Designer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Pc builder Entusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Create Graphic Designs and Logos
            </li>
            <li className="about-activity">
              <ImPointRight /> Playin' Guitar and Piano
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">David-Verde</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
