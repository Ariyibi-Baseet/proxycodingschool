import { Link } from "react-router-dom";
import "../assets/css/FooterComp.css";

function FooterComp() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10">
              <div className="row bottom-liner">
                <div className="col-12 col-md-4">
                  <h1 className="footer-head-text">PROXY Coding School</h1>
                  <p>
                    Welcome to Proxy coding school, a dynamic technology
                    solutions provider with a mission to empower businesses and
                    individuals with cutting-edge technology solutions.
                  </p>
                </div>
                <div className="col-12 col-md-3">
                  <ul
                    className="navlinks list-unstyled me-0 mx-md-auto"
                    style={{ width: "max-content" }}
                  >
                    <h4 className="text-center quick-links-text">
                      Quick Links
                    </h4>
                    <li className="mb-2">
                      <Link className="text-decoration-none" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-decoration-none" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-decoration-none" to="/courses">
                        Courses
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-decoration-none" to="/gallery">
                        Gallery
                      </Link>
                    </li>

                    <li className="mb-2">
                      <Link className="text-decoration-none" to="/faq">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-3">
                  <ul
                    className="navlinks list-unstyled me-0 mx-md-auto"
                    style={{ width: "max-content" }}
                  >
                    <h4 className="contact-text">Contact</h4>
                    <li className="mb-2">
                      <span>
                        <i className="bi bi-geo-alt"></i>
                      </span>
                      <span className="ms-2">Abeokuta,Ogun State</span>
                    </li>
                    <li className="mb-2">
                      <span>
                        <i className="bi bi-envelope"></i>
                      </span>
                      <span className="ms-2">proxy@gmail.com</span>
                    </li>
                    <li className="mb-2">
                      <span>
                        <i className="bi bi-telephone"></i>
                      </span>
                      <span className="ms-2">+234909238990</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-2">
              <h4 className="join-us-text">Join us on</h4>
              <div className="social-links">
                <a
                  href="https://web.facebook.com/ProxyCodingSchool"
                  className="me-2"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/proxycodingschool"
                  className="me-2"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/proxy-coding-school-36148367/"
                  className="me-2"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <p className="text-white mt-3 copyright-text">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default FooterComp;
