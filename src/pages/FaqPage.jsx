import NavBar from "../components/NavBar";
import "../assets/css/FaqPage.css";
import FaqImage from "../assets/images/faq.png";
import FooterComp from "../components/FooterComp";
import { Link } from "react-router-dom";

function FaqPage() {
  return (
    <>
      <NavBar />
      <section>
        <div className="faq-header">
          <img src={FaqImage} alt="" className="faq-img" />
          <div className="faq-overlay d-flex justify-content-center align-items-center">
            <div className="faq-header-content">
              <h1 className="text-center">FAQS</h1>
              <p className="text-center">Frequently Asked Questions</p>
              <p className="text-center">
                Here are some common questions about Proxy Coding School
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4 faq-body-content">
          <p>Courses</p>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Can I apply for multiple courses at the same time?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Since each course has its own schedule and time commitment,
                  you're free to enroll in more than one — as long as you're
                  able to manage the workload effectively.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Are the courses available online or do they require in-person
                  attendance?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  We offer both online and in-person classes, so students can
                  choose the learning format that best suits their schedule and
                  location.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Are there any job placement or internship opportunities after
                  completing the course?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Yes! We offer job placement support and internship
                  opportunities to help our graduates kickstart their tech
                  careers.
                </div>
              </div>
            </div>
          </div>

          <p className="mt-3">Registration</p>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  What payment method are accepted for registration/enrollment
                  fees?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  We accept all major payment methods for registration and
                  enrollment fees, including bank transfers, debit/credit cards,
                  mobile money, and other widely used platforms. Whatever is
                  most convenient for you — we've got you covered.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  How can I contact registration/enrollment department for
                  further assistance?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  For further assistance with registration or enrollment, please
                  visit our{" "}
                  <Link to="/contact" style={{ color: "#1e90ff" }}>
                    Contact Page
                  </Link>{" "}
                  or reach out to us directly at +2348039209990
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Will I recieve a certificate or any proof of enrollment after
                  registration?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Yes, absolutely! Upon registration, you will receive a
                  certificate as proof of your enrollment. This will serve as
                  official documentation of your participation in our program.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComp />
    </>
  );
}

export default FaqPage;
