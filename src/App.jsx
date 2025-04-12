import React from "react";
import NavBar from "./components/NavBar";
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderComp";
import AboutComp from "./components/AboutComp";
import FeaturesComp from "./components/FeaturesComp";
import CoursesComp from "./components/CoursesComp";
import TestimonialComp from "./components/TestimonialComp";

import "./assets/css/index.css";

function App() {
  return (
    <>
      <NavBar />
      <HeaderComp />
      <AboutComp />
      <FeaturesComp />
      <CoursesComp />
      <TestimonialComp />
      <FooterComp />
    </>
  );
}

export default App;
