import { Link } from "react-router-dom";
import sliderImg1 from "../assets/images/pcs001.jpg";
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
            <div className="carousel-item active">
              <img src={sliderImg1} className="d-block w-100" alt="..." />
              <div className="slider-overlay">
                <div className="container">
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
                    <Link to="/">
                      <button className="apply-btn">Apply now</button>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
            {/* <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComp;
