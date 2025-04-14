import React from "react";
import NavBar from "./components/NavBar";
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderComp";
import AboutComp from "./components/AboutComp";
import FeaturesComp from "./components/FeaturesComp";
import CoursesComp from "./components/CoursesComp";
import TestimonialComp from "./components/TestimonialComp";

import { Helmet } from "react-helmet";

import "./assets/css/index.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Proxy Coding School — Learn, Grow and Thrive</title>
        <meta
          name="title"
          content="Proxy Coding School — Learn, Grow and Thrive"
        />
        <meta
          name="description"
          content="Proxy coding school is a vibrant community that fosters growth and success for both tutors and students. We provide a supportive and enriching environment where tutors are empowered to inspire and guide students towards achieving their academic goals."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proxycodingschool.com/" />
        <meta
          property="og:title"
          content="Proxy Coding School — Learn, Grow and Thrive"
        />
        <meta
          property="og:description"
          content="Proxy coding school is a vibrant community that fosters growth and success for both tutors and students. We provide a supportive and enriching environment where tutors are empowered to inspire and guide students towards achieving their academic goals."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://proxycodingschool.com/" />
        <meta
          property="twitter:title"
          content="Proxy Coding School — Learn, Grow and Thrive"
        />
        <meta
          property="twitter:description"
          content="Proxy coding school is a vibrant community that fosters growth and success for both tutors and students. We provide a supportive and enriching environment where tutors are empowered to inspire and guide students towards achieving their academic goals."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Helmet>
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
