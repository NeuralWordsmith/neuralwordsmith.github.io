import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "../pages/projects/ProjectPage";


import { About } from "../pages/about";
import { ContactUs } from "../pages/contact";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { Projects } from "../pages/projects";
import React from "react";
import { Socialicons } from "../components/socialicons";
import withRouter from "../hooks/withRouter"
import { TrafficRoute } from "../pages/projects/TrafficRoute";


const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
        <Route path="/projects/traffic-route-optimizer" element={<TrafficRoute />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
