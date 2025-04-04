import "../assets/css/TestimonialComp.css";
import quoteImg from "../assets/images/double-quotes.png";

function TestimonialComp() {
  return (
    <>
      <section className="testimonial-section">
        <div className="testimonial-content-wrapper">
          <h1>
            Hear from Our Students About
            <span className="orange-text"> Their Experience with Us.</span>
          </h1>
          <img src={quoteImg} alt="" className="quote-img" />
        </div>

        <div className="slider-wrapper"></div>
      </section>
    </>
  );
}

export default TestimonialComp;
