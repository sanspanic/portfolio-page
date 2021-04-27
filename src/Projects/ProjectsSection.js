import React from "react";
import Linear from "../SVGs/Linear";

const ProjectsSection = () => {
  return (
    <div className="flex-grow">
      <div className="h-screen relative">
        <Linear className="absolute linear" />
      </div>
      <div className="h-screen relative">
        <Linear className="absolute linear" />
      </div>
      <div className="h-screen relative">
        <Linear className="absolute linear" />
      </div>
      <div className="h-screen relative">
        <Linear className="absolute linear" />
      </div>
      <div className="h-screen relative"></div>
    </div>
  );
};

export default ProjectsSection;
