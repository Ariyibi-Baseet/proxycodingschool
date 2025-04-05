import "../assets/css/TestimonialComp.css";
import quoteImg from "../assets/images/double-quotes.png";
import headImg from "../assets/images/head.png";

function TestimonialComp() {
  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content-wrapper">
            <h1>
              Hear from Our Students About
              <span className="orange-text"> Their Experience with Us.</span>
            </h1>
            <img src={quoteImg} alt="" className="quote-img" />
          </div>

          <div className="slider-wrapper mt-5">
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <div className="testimony-block shadow-sm">
                  <div className="user-info-top d-flex align-items-center">
                    <img src={headImg} alt="" className="testimony-img" />
                    <div className="user-info ms-3 d-flex justify-content-center flex-column pt-3">
                      <h4 className="user-name m-0">Sruti Dangol</h4>
                      <p className="user-stack">UI/UX Designer</p>
                    </div>
                  </div>

                  <div className="testimony-content">
                    <p className="testimony">
                      I couldn't be happier with my decision to enroll at Proxy
                      coding school. The instructors are knowledgeable and
                      passionate about their subjects. The interactive learning
                      environment has helped me grow both academically and
                      personally.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="testimony-block shadow-sm">
                  <div className="user-info-top d-flex align-items-center">
                    <img src={headImg} alt="" className="testimony-img" />
                    <div className="user-info ms-3 d-flex justify-content-center flex-column pt-3">
                      <h4 className="user-name m-0">Sruti Dangol</h4>
                      <p className="user-stack">UI/UX Designer</p>
                    </div>
                  </div>

                  <div className="testimony-content">
                    <p className="testimony">
                      I couldn't be happier with my decision to enroll at Proxy
                      coding school. The instructors are knowledgeable and
                      passionate about their subjects. The interactive learning
                      environment has helped me grow both academically and
                      personally.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="testimony-block shadow-sm">
                  <div className="user-info-top d-flex align-items-center">
                    <img src={headImg} alt="" className="testimony-img" />
                    <div className="user-info ms-3 d-flex justify-content-center flex-column pt-3">
                      <h4 className="user-name m-0">Sruti Dangol</h4>
                      <p className="user-stack">UI/UX Designer</p>
                    </div>
                  </div>

                  <div className="testimony-content">
                    <p className="testimony">
                      I couldn't be happier with my decision to enroll at Proxy
                      coding school. The instructors are knowledgeable and
                      passionate about their subjects. The interactive learning
                      environment has helped me grow both academically and
                      personally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialComp;
