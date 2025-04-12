import "../assets/css/CoursesPage.css";
import FooterComp from "../components/FooterComp";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import headerImg from "../assets/images/pcs007.jpg";
import courseList from "../store/courseList";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CoursesPage() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <NavBar />
      <section className="courses-page">
        <div className="header-content">
          <img src={headerImg} alt="" className="header-img" />
          <div className="courses-overlay d-flex align-items-center justify-content-center">
            <div className="courses-header-content">
              <h1 className="text-center">Our Courses</h1>
              <p className="text-center">
                Discover a World of Knowledge and Growth with Our Courses
              </p>
              <Link to="/apply">
                <button className="apply-btn d-block mx-auto">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="available-courses-wrapper">
        <div className="container">
          <p className="first-text">
            We are pleased to present our current selection of available
            courses.
          </p>
          <div className="available-courses-block">
            <div className="row">
              {courseList.map((course) => (
                <div
                  className="col-12 col-md-6 col-lg-4 mb-5"
                  key={course.courseTitle}
                >
                  <Link to="/apply">
                    <div
                      className="available-courses"
                      data-aos={course.animation}
                    >
                      <img
                        src={course.courseImage}
                        alt=""
                        className="available-courses-img"
                      />

                      <div className="courses-content-down">
                        <div className="courses-label">
                          <span>{course.courseLabel}</span>
                        </div>

                        <div className="content-down">
                          <h2>{course.courseTitle}</h2>
                          <p>{course.courseDescription}</p>
                          <p className="time">
                            Duration: {course.courseDuration}
                          </p>
                          <div className="d-flex align-items-center mt-2">
                            <p className="price d-flex align-items-center">
                              {course.normalPrice}
                            </p>
                            <p className="price ms-5">
                              Discounted Price: {course.discountedPrice}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FooterComp />
    </>
  );
}

export default CoursesPage;
