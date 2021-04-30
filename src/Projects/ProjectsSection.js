import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import TrackMockup from "../Assets/Mockup_v2/track.png";
import UnicornMockup from "../Assets/Mockup_v2/unicorn.png";
import JobMockup from "../Assets/Mockup_v2/job.png";
import GeoMockup from "../Assets/Mockup_v2/geo.png";
import Footer from "../Common/Footer";

const ProjectsSection = () => {
  const [currProjectIndex, setCurrProjectIndex] = useState(0);
  const [projects] = useState([
    {
      title: "GET A JOB",
      src: JobMockup,
      stack: [
        "javascript",
        "node",
        "express",
        "postgres",
        "react",
        "jest",
        "tailwind",
      ],
      description1:
        "A fake job search website which allows users to create a profile, browse, filter and fake-apply to jobs.",
      description2:
        "A full-stack application with authentication via JWTs and middleware implemented from scratch for learning purposes.",
      demo: "",
      live: "https://get-a-job.surge.sh/",
      github: "https://github.com/sanspanic/jobly-frontend",
    },
    {
      title: "GEO CHALLENGE",
      src: GeoMockup,
      description1:
        "Test your Geography knowledge in this game inspired by the FB Playfish classic GeoChallenge. Under time pressure, associate a country with its flag, its capital and find the country's location on the world map.",
      description2: "A full-stack application with auth implemented via JWTs.",
      stack: [
        "javascript",
        "node",
        "express",
        "postgres",
        "jest",
        "tailwind",
        "react",
      ],
      github: "https://github.com/sanspanic/geo-challenge",
      live: "https://geo-game.surge.sh",
      demo:
        "https://www.youtube.com/watch?v=947ZMR_mDj8&ab_channel=SansPanicDev",
    },
    {
      title: "UNICORN ESCAPE",
      description1:
        "Can you navigate the pony through the maze and save it from the evil skull monster?",
      description2:
        "This frontend-only game is my take on the coding challenge that was part of my current employer's hiring process.",
      src: UnicornMockup,
      stack: ["javascript", "react", "jest", "tailwind"],
      github: "https://github.com/sanspanic/unicorn-game",
      live: "https://unicorn-escape.surge.sh/",
      demo: "",
    },
    {
      title: "TRACK",
      description1:
        "Timekeeping and invoice generation for international contractors with real-time currency conversion capabilities.",
      description2: `My first full-stack project, inspired by my desire to keep all my freelance timekeeping and invoices in one place. Auth implemented via Flask-session.`,
      stack: ["python", "flask", "javascript", "bootstrap", "postgres"],
      src: TrackMockup,
      github: "https://github.com/sanspanic/Track",
      live: "https://track-work-logger.herokuapp.com/",
      demo:
        "https://www.youtube.com/watch?v=IVxnMfN4iAI&list=PLoYXMPthBIlXZO9rDjCtgi4DNCsEWFFS6&index=4&ab_channel=SansPanicDev",
    },
  ]);

  return (
    <>
      <div className="flex-grow pb-60 sm:pb-0">
        <div className="h-screen relative project-container">
          <ProjectDetail
            title={projects[currProjectIndex].title}
            description1={projects[currProjectIndex].description1}
            description2={projects[currProjectIndex].description2}
            src={projects[currProjectIndex].src}
            stack={projects[currProjectIndex].stack}
            github={projects[currProjectIndex].github}
            live={projects[currProjectIndex].live}
            demo={projects[currProjectIndex].demo}
            setCurrProjectIndex={setCurrProjectIndex}
            currProjectIndex={currProjectIndex}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsSection;
