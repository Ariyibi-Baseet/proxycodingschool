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
            <div className="col-10">
              <div className="row bottom-liner">
                <div className="col-4">
                  <h1 className="footer-head-text">PROXY Coding School</h1>
                  <p>
                    Welcome to Proxy coding school, a dynamic technology
                    solutions provider with a mission to empower businesses and
                    individuals with cutting-edge technology solutions.
                  </p>
                </div>
                <div className="col-3">
                  <ul
                    className="navlinks list-unstyled mx-auto"
                    style={{ width: "max-content" }}
                  >
                    <h4 className="text-center quick-links-text">
                      Quick Links
                    </h4>
                    <li className="mb-2">
                      <Link className="text-decoration-none">Home</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-decoration-none">About Us</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-decoration-none">Courses</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-decoration-none">Gallery</Link>
                    </li>

                    <li className="mb-2">
                      <Link className="text-decoration-none">FAQs</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul
                    className="navlinks list-unstyled mx-auto"
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

            <div className="col-2">
              <h4 className="join-us-text">Join us on</h4>
              <div className="social-links">
                <a href="#" className="me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="me-2">
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
