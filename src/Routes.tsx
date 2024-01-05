import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LandingPageSeven = React.lazy(() => import("pages/LandingPageSeven"));
const Pricingplans = React.lazy(() => import("pages/Pricingplans"));
const LandingPageFive = React.lazy(() => import("pages/LandingPageFive"));
const LandingPageFour = React.lazy(() => import("pages/LandingPageFour"));
const LandingPageThree = React.lazy(() => import("pages/LandingPageThree"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpagethree" element={<LandingPageThree />} />
          <Route path="/landingpagefour" element={<LandingPageFour />} />
          <Route path="/landingpagefive" element={<LandingPageFive />} />
          <Route path="/pricingplans" element={<Pricingplans />} />
          <Route path="/landingpageseven" element={<LandingPageSeven />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
