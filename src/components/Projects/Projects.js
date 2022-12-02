import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import space from "../../Assets/Projects/Space-Tavel.jpeg";
import air from "../../Assets/Projects/Air-Pollution.jpeg";
import home from "../../Assets/Projects/Home-Sharing.png";
import book from "../../Assets/Projects/bookstore.png";
import streamy from "../../Assets/Projects/Streamy.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home}
              isBlog={false}
              title="Home Sharing"
              description="The Home Sharing App is a fully responsive app that provides the service for connecting homeowners wanting to rent their properties and potential clients, enabling the creation of reservations for periods of time on selected properties. The backend is loaded on render so you need to wait at least 1min before the back end loads."
              ghLink="https://github.com/Home-Sharing-Team"
              demoLink="https://home-sharing.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamy}
              isBlog={false}
              title="Streamy App"
              description="This is a TV show catalog application built using the TvMaze API, created using technologies such as React, Redux, Redux-Thunk, React-Router, Axios and Sass."
              ghLink="https://github.com/David-Verde/microverse-js-Pair-capstone"
              demoLink="https://keen-panda-183542.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={air}
              isBlog={false}
              title="Latin America's Air Pollution"
              description="Building a Latin America Pollution Metrics application using React and Redux. The project was created using an API to fetch data from the Country Pullution and the data is displayed in a table and a chart, used technologies such as React & Redux, Css, and JavaScript ."
              ghLink="https://github.com/David-Verde/Latin-America-Pollution-Metrics-Webbapp"
              demoLink="https://62e1913b89672a1fdf8720cd--dulcet-concha-673dcd.netlify.app/#/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space X"
              description="In this project we created a space x web page to reserve missions and rockets from the space X API, technologies used are HTML/CSS, ReactJs,Redux, ES6, Node.js, ESLint, StyleLint."
              ghLink="https://62d9bc18ce037a18b651fb18--wonderful-vacherin-bfde52.netlify.app"
              demoLink="https://62d9bc18ce037a18b651fb18--wonderful-vacherin-bfde52.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Bookstore"
              description="In this project it was required to build a very simple BookStore application using React and Redux. The project was split into multiple milestones, and each milestone had functional and technical requirements that was implemented, you can add books and follow the progress during chapters."
              ghLink="https://github.com/David-Verde/Bookstore"
              demoLink="https://638a233e8c00a536f33cbcf6--radiant-liger-45569c.netlify.app"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
