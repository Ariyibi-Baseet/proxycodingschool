import { Link } from "react-router-dom";
import "../assets/css/CoursesComp.css";
import webIcon from "../assets/images/react.png";
import designIcon from "../assets/images/design.png";
import dataAnalyticIcon from "../assets/images/data.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CoursesComp() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="courses-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5 mb-3 d-flex align-items-center">
              <div className="explore-section ">
                <div className="explore-content" data-aos="fade-right">
                  <p className="explore-text">Explore our </p>
                  <h1 className="courses-text">Current Course Offerings </h1>
                  <p>
                    Our courses are carefully designed to enrich and transform
                    your educational experience.
                  </p>
                  <Link to="/courses">
                    <button className="browse-courses-btn">
                      Browse Our Courses &nbsp;&nbsp;
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-7 mb-3">
              <div className="courses-block" data-aos="fade-left">
                <div className="frontend-block">
                  <div className="overlay d-flex align-items-center justify-content-center flex-column">
                    <img src={webIcon} alt="" />
                    <p>Frontend Development</p>
                  </div>
                </div>
                <div className="down-block mt-3">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                      <div className="data-analytics-block">
                        <div className="overlay d-flex align-items-center justify-content-center flex-column">
                          <img src={dataAnalyticIcon} alt="" />
                          <p>Data Analytics</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <div className="design-block">
                        <div className="overlay d-flex align-items-center justify-content-center flex-column">
                          <img src={designIcon} alt="" />
                          <p>Designing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoursesComp;
