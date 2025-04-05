import FooterComp from "../components/FooterComp";
import NavBar from "../components/NavBar";
import "../assets/css/ContactPage.css";

function ContactPage() {
  return (
    <>
      <NavBar />
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="contact-form-wrapper">
                <h1>
                  Get in <span className="blue-text">Touch</span>
                </h1>
                <p>
                  Have questions or need more information? We are here to help!
                  Whether you are looking to start your coding journey, need
                  guidance on our courses, or want to collaborate, feel free to
                  reachout
                </p>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              <div className="location-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9407898168924!2d3.3269175746362856!3d7.132845792871152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4c7ac5685e43%3A0xee015cf77eaef13c!2s19%20Onikoko%20Rd%2C%20Panseke%2C%20Abeokuta%20111102%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1743860388204!5m2!1sen!2sng"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
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
