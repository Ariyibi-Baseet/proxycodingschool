import "../assets/css/AboutComp.css";
import aboutImg from "../assets/images/gallery.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutComp() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="d-md-none col-12 col-md-6 mb-3">
              <img src={aboutImg} alt="" className="w-100 h-100" />
            </div>
            <div className="col-12 col-md-6 mb-3" data-aos="fade-right">
              <span className="small-text">Our Educational Approach</span>
              <h1>Empowered Teaching,Limitless Potential</h1>
              <p>
                Proxy coding school is a vibrant community that fosters growth
                and success for both tutors and students. We provide a
                supportive and enriching environment where tutors are empowered
                to inspire and guide students towards achieving their academic
                goals.
              </p>
              <p>
                At proxy we promotes collaboration, critical thinking, and
                effective communication, cultivating a culture of continuous
                learning and intellectual curiosity.
              </p>
            </div>
            <div className="d-none d-md-flex col-12 col-md-6 mb-3">
              <img
                src={aboutImg}
                alt=""
                className="w-100 h-100 object-fit-cover"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComp;
