import FooterComp from "../components/FooterComp";
import NavBar from "../components/NavBar";
import "../assets/css/ContactPage.css";
import { Helmet } from "react-helmet";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us — Proxy Coding School </title>
        <meta
          name="title"
          content="Proxy Coding School — Learn, Grow and Thrive"
        />
        <meta
          name="description"
          content="Proxy coding school is a vibrant community that fosters growth and success for both tutors and students. We provide a supportive and enriching environment where tutors are empowered to inspire and guide students towards achieving their academic goals."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proxycodingschool.com/" />
        <meta
          property="og:title"
          content="Proxy Coding School — Learn, Grow and Thrive"
        />
        <meta
          property="og:description"
          content="Proxy coding school is a vibrant community that fosters growth and success for both tutors and students. We provide a supportive and enriching environment where tutors are empowered to inspire and guide students towards achieving their academic goals."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://proxycodingschool.com/" />
        <meta
          property="twitter:title"
          content="Proxy Coding School — Learn, Grow and Thrive"
        />
        <meta
          property="twitter:description"
          content="Proxy coding school is a vibrant community that fosters growth and success for both tutors and students. We provide a supportive and enriching environment where tutors are empowered to inspire and guide students towards achieving their academic goals."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Helmet>
      <NavBar />
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5 d-flex align-items-center mb-5">
              <div className="contact-form-wrapper">
                <h1>
                  Get in <span className="blue-text">Touch</span>
                </h1>
                <p className="mb-3">
                  Have questions or need more information? We are here to help!
                  Whether you are looking to start your coding journey, need
                  guidance on our courses, or want to collaborate, feel free to
                  reachout
                </p>
                <form action="#">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-none w-100 contact-form-name"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg shadow-none w-100 contact-form-email"
                      placeholder="Email Address *"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control shadow-none w-100 contact-form-textarea"
                      id="exampleFormControlTextarea1"
                      placeholder="Message here..."
                      rows="5"
                    ></textarea>
                  </div>
                  <button className="w-100 send-btn">Send</button>
                </form>
                <div className="contact-info mt-5 d-flex align-items-center">
                  <p className="phone">
                    <span>
                      <i className="bi bi-telephone"></i> Phone
                    </span>
                    <a href="tel:+2348039209990" className="ms-2 contact-link">
                      08039209990
                    </a>
                  </p>
                  <p className="mail ms-3">
                    <span>
                      <i className="bi bi-envelope"></i> Email
                    </span>
                    <a
                      href="mailto:proxy@gmail.com"
                      className="ms-2 contact-link"
                    >
                      proxy@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-12 col-md-12 col-lg-5 mb-5">
              <div className="location-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9407898168924!2d3.3269175746362856!3d7.132845792871152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4c7ac5685e43%3A0xee015cf77eaef13c!2s19%20Onikoko%20Rd%2C%20Panseke%2C%20Abeokuta%20111102%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1743860388204!5m2!1sen!2sng"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComp />
    </>
  );
}

export default ContactPage;
