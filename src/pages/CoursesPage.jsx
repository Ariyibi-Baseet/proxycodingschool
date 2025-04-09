import "../assets/css/CoursesPage.css";
import FooterComp from "../components/FooterComp";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import headerImg from "../assets/images/pcs007.jpg";
import courseImg01 from "../assets/images/pcs006.jpg";

function CoursesPage() {
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
              <Link>
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
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="available-courses">
                  <img
                    src={courseImg01}
                    alt=""
                    className="available-courses-img"
                  />

                  <div className="courses-content-down">
                    <div className="courses-label">
                      <span> Desktop Publishing</span>
                    </div>

                    <div className="content-down">
                      <h2> Desktop Publishing: Beginner Experience</h2>
                      <p>
                        This course builds upon your basic understanding of
                        UI/UX principles, allowing you to further develop your
                        skills and knowledge in UI/UX design.
                      </p>
                      <div className="duration d-flex align-items-center mt-2">
                        <p className="time d-flex align-items-center">
                          <i className="bi bi-clock-history"></i>
                          &nbsp;
                          <span>2 Months</span>
                        </p>
                        <p className="price ms-5">₦180,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="available-courses">
                  <img
                    src={courseImg01}
                    alt=""
                    className="available-courses-img"
                  />

                  <div className="courses-content-down">
                    <div className="courses-label">
                      <span> Designing</span>
                    </div>

                    <div className="content-down">
                      <h2> UI/UX Design: Enhancing User</h2>
                      <p>
                        This course builds upon your basic understanding of
                        UI/UX principles, allowing you to further develop your
                        skills and knowledge in UI/UX design.
                      </p>
                      <div className="duration d-flex align-items-center mt-2">
                        <p className="time d-flex align-items-center">
                          <i className="bi bi-clock-history"></i>
                          &nbsp;
                          <span>2 Months</span>
                        </p>
                        <p className="price ms-5">₦180,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="available-courses">
                  <img
                    src={courseImg01}
                    alt=""
                    className="available-courses-img"
                  />

                  <div className="courses-content-down">
                    <div className="courses-label">
                      <span> Engineering</span>
                    </div>

                    <div className="content-down">
                      <h2> Frontend Web Development</h2>
                      <p>
                        This course builds upon your basic understanding of
                        UI/UX principles, allowing you to further develop your
                        skills and knowledge in UI/UX design.
                      </p>
                      <div className="duration d-flex align-items-center mt-2">
                        <p className="time d-flex align-items-center">
                          <i className="bi bi-clock-history"></i>
                          &nbsp;
                          <span>2 Months</span>
                        </p>
                        <p className="price ms-5">₦180,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="available-courses">
                  <img
                    src={courseImg01}
                    alt=""
                    className="available-courses-img"
                  />

                  <div className="courses-content-down">
                    <div className="courses-label">
                      <span>Digital marketing</span>
                    </div>

                    <div className="content-down">
                      <h2>Digital marketing</h2>
                      <p>
                        This course builds upon your basic understanding of
                        UI/UX principles, allowing you to further develop your
                        skills and knowledge in UI/UX design.
                      </p>
                      <div className="duration d-flex align-items-center mt-2">
                        <p className="time d-flex align-items-center">
                          <i className="bi bi-clock-history"></i>
                          &nbsp;
                          <span>2 Months</span>
                        </p>
                        <p className="price ms-5">₦180,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="available-courses">
                  <img
                    src={courseImg01}
                    alt=""
                    className="available-courses-img"
                  />

                  <div className="courses-content-down">
                    <div className="courses-label">
                      <span> Designing</span>
                    </div>

                    <div className="content-down">
                      <h2>Graphics Design & Branding</h2>
                      <p>
                        This course builds upon your basic understanding of
                        UI/UX principles, allowing you to further develop your
                        skills and knowledge in UI/UX design.
                      </p>
                      <div className="duration d-flex align-items-center mt-2">
                        <p className="time d-flex align-items-center">
                          <i className="bi bi-clock-history"></i>
                          &nbsp;
                          <span>2 Months</span>
                        </p>
                        <p className="price ms-5">₦180,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="available-courses">
                  <img
                    src={courseImg01}
                    alt=""
                    className="available-courses-img"
                  />

                  <div className="courses-content-down">
                    <div className="courses-label">
                      <span> Full-stack Web Development</span>
                    </div>

                    <div className="content-down">
                      <h2> Full-stack Web Development</h2>
                      <p>
                        This course builds upon your basic understanding of
                        UI/UX principles, allowing you to further develop your
                        skills and knowledge in UI/UX design.
                      </p>
                      <div className="duration d-flex align-items-center mt-2">
                        <p className="time d-flex align-items-center">
                          <i className="bi bi-clock-history"></i>
                          &nbsp;
                          <span>2 Months</span>
                        </p>
                        <p className="price ms-5">₦180,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="available-courses">
                  <img
                    src={courseImg01}
                    alt=""
                    className="available-courses-img"
                  />

                  <div className="courses-content-down">
                    <div className="courses-label">
                      <span> cyber security</span>
                    </div>

                    <div className="content-down">
                      <h2>Cyber Security</h2>
                      <p>
                        This course builds upon your basic understanding of
                        UI/UX principles, allowing you to further develop your
                        skills and knowledge in UI/UX design.
                      </p>
                      <div className="duration d-flex align-items-center mt-2">
                        <p className="time d-flex align-items-center">
                          <i className="bi bi-clock-history"></i>
                          &nbsp;
                          <span>2 Months</span>
                        </p>
                        <p className="price ms-5">₦180,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="available-courses">
                  <img
                    src={courseImg01}
                    alt=""
                    className="available-courses-img"
                  />

                  <div className="courses-content-down">
                    <div className="courses-label">
                      <span> Data Analytics</span>
                    </div>

                    <div className="content-down">
                      <h2> Data Analytics</h2>
                      <p>
                        This course builds upon your basic understanding of
                        UI/UX principles, allowing you to further develop your
                        skills and knowledge in UI/UX design.
                      </p>
                      <div className="duration d-flex align-items-center mt-2">
                        <p className="time d-flex align-items-center">
                          <i className="bi bi-clock-history"></i>
                          &nbsp;
                          <span>2 Months</span>
                        </p>
                        <p className="price ms-5">₦180,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComp />
    </>
  );
}

export default CoursesPage;
