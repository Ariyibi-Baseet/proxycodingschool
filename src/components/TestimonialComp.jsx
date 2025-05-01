import "../assets/css/TestimonialComp.css";
import quoteImg from "../assets/images/double-quotes.png";
// import headImg from "../assets/images/head.png";
import testimonialList from "../store/testimonialList";

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
              {testimonialList.map((testimony) => (
                <div className="col-12 col-md-4 mb-3">
                  <div
                    className="testimony-block shadow-sm"
                    data-aos={testimony.animation}
                  >
                    <div className="user-info-top d-flex align-items-center">
                      <img
                        src={testimony.image}
                        alt=""
                        className="testimony-img"
                      />
                      <div className="user-info ms-3 d-flex justify-content-center flex-column pt-3">
                        <h4 className="user-name m-0">{testimony.name}</h4>
                        <p className="user-stack">{testimony.stack}</p>
                      </div>
                    </div>

                    <div className="testimony-content">
                      <p className="testimony">{testimony.testimonyText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialComp;
