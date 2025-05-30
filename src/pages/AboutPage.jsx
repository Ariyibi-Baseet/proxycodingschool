import FooterComp from "../components/FooterComp";
import NavBar from "../components/NavBar";
import "../assets/css/AboutPage.css";
import image from "../assets/images/pcs009.jpg";
import ceoImage from "../assets/images/proxy-ceo.jpg";
import facilitatorList from "../store/facilitatorList";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us — Proxy Coding School </title>
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
      <div className="about-page-wrapper">
        <div className="about-header">
          <div className="container">
            <div className="d-flex align-items-center about-header-content">
              <div>
                <p className="hello-text">Hello !</p>
                <h1 className="text-uppercase we-are-text">
                  We Are <span className="about-orange-text">Proxy</span>
                </h1>
                <h1 className="coding-school-text text-uppercase">
                  CODING SCHOOL
                </h1>
                <p className="reality-text text-white">
                  Where IT Dreams Becomes Reality
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-page-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 mb-3">
                <div className="block-text" data-aos="fade-right">
                  <h1>About Proxy coding school</h1>
                  <p>
                    Proxy Coding School is more than just a learning platform,
                    we are a community-driven coding school that bridges the gap
                    between education and real-world tech careers. Our programs
                    are designed to be practical, industry-relevant, and
                    accessible to learners of all backgrounds.
                  </p>
                  <p>
                    At Proxy Coding School, we are on a mission to empower
                    aspiring developers with the skills, confidence, and
                    experience needed to thrive in the tech industry. Whether
                    you’re a beginner or looking to advance your coding
                    expertise, we provide a structured, hands-on learning
                    approach that transforms you into a job-ready professional.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 mb-3 d-lg-flex align-items-center">
                <img
                  src={image}
                  alt=""
                  className="img_about-image"
                  data-aos="fade-left"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="our-mission-area">
          <div className="container">
            <div className="our-mission d-flex align-items-center justify-content-center">
              <div className="inner-mission-block">
                <h1 className="text-center">Our Mission</h1>
                <p className="text-center">
                  To train, mentor, and connect aspiring developers with the
                  skills and opportunities needed to excel in the global tech
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-ceo-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-4 mb-3 d-lg-flex align-items-center">
                <img
                  src={ceoImage}
                  alt=""
                  className="ceo-image"
                  data-aos="fade-right"
                />
              </div>
              <div className="col-12 col-md-12 col-lg-8 mb-3 d-lg-flex align-items-center">
                <div className="block-text-ceo" data-aos="fade-left">
                  <h1>
                    <span className="ceo-text-orange">CEO</span> Proxy Coding
                    School
                  </h1>

                  <p>
                    My Company Proxy Global System was registered in 2011
                    October 11, and was Appointed by Federal Ministry of
                    Information, Federal Information Center, Abeokuta, under the
                    Free Tuition ICT training to Coordinate the Empowerment
                    Training as the Principal Partner.
                  </p>
                  <p>
                    In order to achieve this big dream and Project , We Partner
                    with National Youth Service Corp NYSC where Graduates are
                    Posted to our organization for their one year internship, We
                    normally organised "train the trainer training" for newly
                    absorbed NYSC Youth Corp to train them in order to support
                    and help train orders to continue to pioneer this big dream.
                  </p>
                  <p>
                    Since 2013, Over 10,000 Trainees have benefited from our
                    FREE TUITION ICT Training, With proofs (Copy of their
                    Certificate and Exam sheets), Evidence and Certificate were
                    awarded by the Ministry of Information to all Beneficiaries,
                    Where we deceminate quality Computer Education to All
                    interested Nigerians in order to contribute my quota to
                    Youth Empowerment and Educational Development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="facilitators-area">
          <div className="container">
            <div className="facilitators">
              <h1 className="text-center">Meet Our Facilitators</h1>
              <p className="text-center mx-auto" style={{ maxWidth: "700px" }}>
                At Proxy Coding School, we take pride in our team of expert
                instructors who possess extensive industry experience and deep
                knowledge in their respective fields.
              </p>

              <div className="row mt-5">
                {facilitatorList.map((facilitator) => (
                  <div
                    className="col-12 col-md-4 col-lg-3 mb-3"
                    key={facilitator.name}
                  >
                    <div
                      className="facilitator-block"
                      data-aos={facilitator.animation}
                    >
                      <img
                        src={facilitator.image}
                        alt=""
                        className="facilitator-image"
                      />
                      <p className="facilitator-name text-center mt-2">
                        {facilitator.name}
                      </p>
                      <p className="facilitator-stack text-center">
                        {facilitator.stack}
                      </p>
                      <div className="facilitator-social-links d-flex align-items-center justify-content-center">
                        <a
                          href={facilitator.xLink}
                          className="ms-2 fs-5"
                          title={`Follow ${facilitator.name} on X`}
                        >
                          <i class="bi bi-twitter-x"></i>
                        </a>
                        <a
                          href={facilitator.linkedinLink}
                          className="ms-2 fs-5"
                          title={`Follow ${facilitator.name} on Linkedin`}
                        >
                          <i class="bi bi-linkedin"></i>
                        </a>
                        {facilitator.name === "Aisha Sanusi" ? (
                          <a
                            href={facilitator.dribbleLink}
                            className="ms-2 fs-5"
                            title={`Follow ${facilitator.name} on Dribble`}
                          >
                            <i class="bi bi-dribbble"></i>
                          </a>
                        ) : (
                          <a
                            href={facilitator.githubLink}
                            className="ms-2 fs-5"
                            title={`Check ${facilitator.name}'s Project on Github`}
                          >
                            <i class="bi bi-github"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action-area d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="cta">
              <div className="row">
                <div className="col-12 col-md-8">
                  <p>
                    Your future in IT begins here. Explore our courses. The
                    possibilities are endless, and your success story awaits.
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <Link to="/courses">
                    <button className="browse-course-btn">
                      <span> Browse Our Course</span> &nbsp;&nbsp;
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
}

export default AboutPage;
