import "../assets/css/ComingSoon.css";
import "animate.css";
// import bg from "../assets/images/gallery.jpg"

function ComingSoon() {
  return (
    <>
      <div className="page-wrapper d-flex align-items-center justify-content-center">
        {/* <div className="overlay"> */}
        <div className="container content">
          <p className="animate__animated animate__tada animate__infinite">
            <i className="bi bi-rocket-takeoff text-white "></i>
          </p>

          <h1 className="text-white">
            Site Under Maintenance <i class="bi bi-tools"></i>
          </h1>
          <p className="text-white coming-soon-text">
            We are almost there! Want to get notified when the site relaunching
            goes live? <br /> Kindly reach us for more updates
          </p>
          <div className="social-icon-wrapper py-1 px-4 rounded-2 shadow-lg bg-white mx-auto d-flex align-items-center justify-content-center gap-3 animate__animated animate__pulse animate__infinite">
            <a href="https://web.facebook.com/ProxyCodingSchool">
              <i className="bi bi-facebook fs-3"></i>
            </a>
            <a href="">
              <i className="bi bi-instagram fs-3"></i>
            </a>
            <a href="">
              <i className="bi bi-youtube fs-3"></i>
            </a>
            <a href="https://www.linkedin.com/in/proxy-coding-school-36148367/">
              <i className="bi bi-linkedin fs-3"></i>
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default ComingSoon;
