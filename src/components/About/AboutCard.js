import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Densingh </span>
            from <span className="purple">Kannyakumari, India.</span>
            <br />
            I am currently Studing in <span className="purple">R.M.K. Engineering College</span>
            <br />
          
           
            <br />
            Enthusiastic Fullstack Developer with hands-on experience in building dynamic web and mobile
            applications. Proficient in front-end and back-end development with a focus on creating robust and
            scalable e-commerce platforms. Experienced in developing real-time chat applications, blog platforms,
            and mobile apps. Strong in JavaScript and well-versed in a wide range of technologies, including React,
            MERN stack, Android app development using Java, React Native, Flutter, MEAN stack, Angular, C, C++,
            Java, and Python.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
  <ImPointRight /> Writing Tech Blogs
</li>
<li className="about-activity">
  <ImPointRight /> Travelling
</li>
<li className="about-activity">
  <ImPointRight /> Contributing to Open Source
</li>
<li className="about-activity">
  <ImPointRight /> Attending Tech Meetups and Conferences
</li>
<li className="about-activity">
  <ImPointRight /> Building Side Projects
</li>
<li className="about-activity">
  <ImPointRight /> Exploring New Programming Languages
</li>
<li className="about-activity">
  <ImPointRight /> Automating Everyday Tasks with Code
</li>
          
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Developer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
