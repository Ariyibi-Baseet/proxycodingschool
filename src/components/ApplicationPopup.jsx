import "../assets/css/ApplicationPopup.css";
import { Link } from "react-router-dom";

function ApplicationPopup({ setShowApplicationPopup }) {
  return (
    <>
      <div className="application-popup-section d-flex align-items-center justify-content-center animate__animated animate__fadeIn">
        <div className="pop-up-block d-flex align-items-center justify-content-center animate__animated animate__fadeInDown">
          <div className="application-content">
            <center>
              <svg
                width="106"
                height="106"
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.4737 58V39.84C92.4737 22.475 92.4737 13.79 87.0789 8.395C81.6842 3 73 3 55.6316 3H39.8421C22.4737 3 13.7895 3 8.39474 8.4C3 13.785 3 22.47 3 39.835V66.155C3 83.52 3 92.205 8.39474 97.6C13.7895 102.995 22.4737 103 39.8421 103H47.7368M60.8947 93C60.8947 93 66.1579 93 71.4211 103C71.4211 103 88.1421 78 103 73"
                  stroke="#1E90FF"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.6842 3L27.1158 5.465C28.1684 11.45 28.6947 14.445 30.9053 16.225C33.1053 18 36.3 18 42.6895 18H52.7789C59.1632 18 62.3579 18 64.5684 16.225C66.7789 14.445 67.3053 11.45 68.3526 5.465L68.7895 3M26.6842 73H47.7368M26.6842 48H68.7895"
                  stroke="#1E90FF"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </center>

            <p className="text-center mt-3">
              Your Application has been received, Kindly click on the below
              button to join WhatsApp group
            </p>

            <a href="https://wa.me/message/4ELOXQLTK7WSB1">
              <button className="application-popup-btn">Join Now</button>
            </a>

            <Link to="/" className="d-block text-center mt-3">
              <i class="bi bi-house-door"></i> Go Back Home
            </Link>
          </div>
          <i
            class="bi bi-x-lg cancel-btn fs-3"
            onClick={() => setShowApplicationPopup(false)}
          ></i>
        </div>
      </div>
    </>
  );
}

export default ApplicationPopup;
