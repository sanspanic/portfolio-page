import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Welcome from "./Welcome";
import About from "../About/About";
import ProjectsSection from "../Projects/ProjectsSection";
import WritingSection from "../Writing/WritingSection";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/writing">
        <WritingSection />
      </Route>
      <Route exact path="/projects">
        <ProjectsSection />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
