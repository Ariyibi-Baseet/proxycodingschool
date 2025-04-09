import NavBar from "../components/NavBar";
import "../assets/css/FaqPage.css";
import FaqImage from "../assets/images/faq.png";
import FooterComp from "../components/FooterComp";

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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iste, dolorem.
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
                  Are the courses availiable online or do they require in-person
                  attendance?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Neque, nobis?
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
                  Are there any job placement or internship oppurtunities after
                  completing the course?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, vitae.
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
                  What paymeny method are accepted for registration/enrollment
                  fees?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                  perspiciatis!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, possimus?
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit, eligendi?
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
