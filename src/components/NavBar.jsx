import "../assets/css/NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  // const path = useLocation();
  // console.log(path.pathname);
  const [activeLink, setActiveLink] = useState("");

  const handleClick = () => {
    setActiveLink(activeLink);
    console.log(setActiveLink(activeLink));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="" className="nav-logo" />
            <span className="nav-logo-text ms-2">Proxy Coding School</span>
          </Link>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={
                    activeLink === "home" ? "nav-link active" : "nav-link"
                  }
                  to="/"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    activeLink === "courses" ? "nav-link active" : "nav-link"
                  }
                  to="/courses"
                  onClick={handleClick}
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    activeLink === "about" ? "nav-link active" : "nav-link"
                  }
                  to="/about"
                  onClick={handleClick}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    activeLink === "gallery" ? "nav-link active" : "nav-link"
                  }
                  to="/gallery"
                  onClick={handleClick}
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    activeLink === "faq" ? "nav-link active" : "nav-link"
                  }
                  to="/faq"
                  onClick={handleClick}
                >
                  FAQs
                </NavLink>
              </li>
            </ul>
            <div className="btn-wrapper">
              <Link to="/contact">
                <button className="contact-btn">Contact Us</button>
              </Link>
              <Link to="/apply">
                <button className="apply-btn">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
