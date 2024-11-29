import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://t3.ftcdn.net/jpg/04/40/55/08/360_F_440550842_axpix9gdXQlEM1MvoPFMt7dctHsF2OAd.jpg'
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hang out with friends built with React.js, Material-UI, and Firebase. Features real-time messaging, image sharing, and reactions on messages."
              ghLink="https://github.com/ddensingh?tab=projects"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://mir-s3-cdn-cf.behance.net/projects/max_808/4c1821126991995.Y3JvcCwzMDY4LDI0MDAsNjgsMA.jpg"
              isBlog={false}
              title="Shopify"
              description="An E-commerce shopping app designed to facilitate online shopping experiences. Features include product filters, wishlists, secure checkout processes, integrated payment gateways, and order tracking."
              ghLink="https://github.com/ddensingh?tab=projects"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://uizard.io/static/89cb1d30cdee9c19b0ce72efe004ff49/a8e47/f5e31989f816c5b15c47cd54b0eb0b30b210b6f0-1440x835.png'
              isBlog={false}
              title="Weather App"
              description="A weather app is a versatile tool that provides real-time weather updates for locations around the world. Users can view current conditions, including temperature, humidity, and wind speed, as well as forecasts for the upcoming days. The app may also include radar maps showing precipitation patterns and severe weather alerts. Designed with a user-friendly interface, it allows easy navigation between different cities or regions."
              ghLink="https://github.com/ddensingh?tab=projects"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://www.springboard.com/blog/wp-content/uploads/2022/04/ui-portfolio.jpeg'
              isBlog={false}
              title="Portfolio"
              description="A portfolio website is an online showcase of an individual's work, skills, and accomplishments. It serves as a digital resume, providing potential clients, employers, or collaborators with a comprehensive overview of the creator's expertise. The site typically features sections for projects, a professional bio, and contact information, allowing visitors to explore completed work and learn about the creator's background. Designed to be visually engaging, a portfolio often incorporates images, videos, and case studies to highlight creativity and technical proficiency."
              ghLink="https://github.com/ddensingh?tab=projects"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://cdn.dribbble.com/users/4848207/screenshots/18302121/media/bf44fcebc032c7c1888a470986f75cb6.png?resize=400x300&vertical=center'
              isBlog={false}
              title="Food Application"
              description="A food application is a digital platform designed to streamline the process of ordering, discovering, and managing food services. It allows users to browse through a variety of restaurants, menus, and dishes, making it easy to place orders for delivery or pickup. The app often features user-friendly interfaces for searching and filtering options based on cuisine, dietary preferences, and location. Key functionalities include real-time order tracking, secure payment gateways, and customer reviews. Some apps also offer additional features like meal recommendations, special offers, and loyalty programs."
              ghLink="https://github.com/ddensingh?tab=projects"
              demoLink="" // Add demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://camo.envatousercontent.com/254d5768c7e2d8ca26000e9377d205dc1dcbdad7/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6471776e746b7667652f696d6167652f75706c6f61642f76313633363734313938362f73735f626c6f672e706e67'
              isBlog={false}
              title="Blog Application"
              description="A blog application is a platform that enables users to create, manage, and publish blog posts on various topics. It typically includes features for writing and editing content, such as text formatting, image embedding, and multimedia integration. Users can organize their posts using categories and tags, and customize the appearance of their blog through themes and templates."
              ghLink="https://github.com/ddensingh?tab=projects"
              demoLink="" // Add demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
