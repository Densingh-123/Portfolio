import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Frontend Engineer",
          "Backend Developer",
          "Mobile App Developer",
          "DevOps Engineer",
          "UI/UX Designer",
          "Cloud Architect",
          "Cybersecurity Specialist",
          "AI/ML Engineer",
          "Data Scientist"
        ],  
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
