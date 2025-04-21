import { Link } from "react-router-dom";
import sliderImg1 from "../assets/images/pcs009.jpg";
import sliderImg2 from "../assets/images/pcs006.jpg";
import sliderImg3 from "../assets/images/pcs007.jpg";
import sliderImg4 from "../assets/images/pcs002.jpg";

import "../assets/css/HeaderComp.css";
function HeaderComp() {
  return (
    <>
      <header className="header-wrapper">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner position-relative">
            <div className="carousel-inner-overlay"></div>
            {/* SLIDER ONE STARTS HERE */}
            <div className="carousel-item active" data-bs-interval="5000">
              <img src={sliderImg1} className="d-block w-100" alt="..." />
              <div className="slider-overlay">
                <div className="learn-grow-text d-flex align-items-center justify-content-center gap-2">
                  <span className="circle me-2"></span>
                  <span className="text" data-last=".">
                    Learn
                  </span>
                  <span className="text" data-last=".">
                    Grow
                  </span>
                  <span className="text">Thrive</span>
                </div>
                <div className="proxy-coding-text text-center">
                  <p>with Proxy Coding School</p>
                </div>
                <p className="expert-text text-center">
                  Engage with expert instructors, collaborate with like-minded
                  peers, <br /> and develop practical skills
                </p>
                <center>
                  <Link to="/apply">
                    <button className="apply-btn">Apply now</button>
                  </Link>
                </center>
              </div>
            </div>

            {/* SLIDER TWO STARTS HERE */}
            <div className="carousel-item" data-bs-interval="5000">
              <img src={sliderImg2} className="d-block w-100" alt="..." />
              <div className="slider-overlay">
                <div className="learn-grow-text d-flex align-items-center justify-content-center gap-2">
                  <span className="circle me-2"></span>
                  <span className="text" data-last=".">
                    Learn High Income Skills
                  </span>
                </div>
                <div className="proxy-coding-text text-center">
                  <p>with Proxy Coding School</p>
                </div>
                <p className="expert-text text-center">
                  Engage with expert instructors, collaborate with like-minded
                  peers, <br /> and develop practical skills
                </p>
                <center>
                  <Link to="/apply">
                    <button className="apply-btn">Apply now</button>
                  </Link>
                </center>
              </div>
            </div>

            {/* SLIDER THREE STARTS HERE */}
            <div className="carousel-item" data-bs-interval="5000">
              <img src={sliderImg3} className="d-block w-100" alt="..." />
              <div className="slider-overlay">
                <div className="learn-grow-text d-flex align-items-center justify-content-center gap-2">
                  <span className="circle me-2"></span>
                  <span className="text" data-last=".">
                    Learn High Income Skills
                  </span>
                </div>
                <div className="proxy-coding-text text-center">
                  <p>with Proxy Coding School</p>
                </div>
                <p className="expert-text text-center">
                  Engage with expert instructors, collaborate with like-minded
                  peers, <br /> and develop practical skills
                </p>
                <center>
                  <Link to="/apply">
                    <button className="apply-btn">Apply now</button>
                  </Link>
                </center>
              </div>
            </div>

            {/* SLIDER FOUR STARTS HERE */}
            <div className="carousel-item" data-bs-interval="5000">
              <img src={sliderImg4} className="d-block w-100" alt="..." />
              <div className="slider-overlay">
                <div className="learn-grow-text d-flex align-items-center justify-content-center gap-2">
                  <span className="circle me-2"></span>
                  <span className="text" data-last=".">
                    Learn High Income Skills
                  </span>
                </div>
                <div className="proxy-coding-text text-center">
                  <p>with Proxy Coding School</p>
                </div>
                <p className="expert-text text-center">
                  Engage with expert instructors, collaborate with like-minded
                  peers, <br /> and develop practical skills
                </p>
                <center>
                  <Link to="/apply">
                    <button className="apply-btn">Apply now</button>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComp;
