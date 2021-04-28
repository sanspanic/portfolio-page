import React, { useState } from "react";
import Linear from "../SVGs/Linear";
import ProjectDetail from "./ProjectDetail";
import UnicornMockup from "../Assets/Mockups/unicorn_mockup_2_watermarked.jpg";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([
    {
      title: "UNICORN ESCAPE",
      description1:
        "Can you navigate the pony through the maze and save it from the evil skull monster?",
      description2:
        "This frontend-only coding challenge was part of my current employer's hiring process.",
    },
    { title: "TRACK" },
    { title: "GET A JOB" },
    { title: "GEO CHALLENGE" },
  ]);

  return (
    <div className="flex-grow bg-mockup-gray">
      {projects.map((p) => (
        <div className="h-screen relative project-container">
          <ProjectDetail
            title={p.title}
            description1={p.description1}
            description2={p.description2}
            src={UnicornMockup}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
