import "../assets/css/FeaturesComp.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function FeaturesComp() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="features-section">
        <div className="container">
          <h1 className="text-center" data-aos="fade-down">
            <span className="orange-text">Why</span> Proxy Coding School?
          </h1>
          <p className="techical-skills-text text-center">
            "Technical Skills. Personality Development. Confidence."
          </p>

          <div className="skills-card-wrapper">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="skills-card" data-aos="fade-right">
                  {/* <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        d="M25 26.0416C23.0662 26.0416 21.2115 26.8099 19.8441 28.1773C18.4766 29.5448 17.7084 31.3994 17.7084 33.3333C17.7084 35.2672 18.4766 37.1218 19.8441 38.4893C21.2115 39.8567 23.0662 40.625 25 40.625C26.9339 40.625 28.7886 39.8567 30.156 38.4893C31.5235 37.1218 32.2917 35.2672 32.2917 33.3333C32.2917 31.3994 31.5235 29.5448 30.156 28.1773C28.7886 26.8099 26.9339 26.0416 25 26.0416ZM21.875 33.3333C21.875 32.5045 22.2043 31.7096 22.7903 31.1236C23.3764 30.5375 24.1712 30.2083 25 30.2083C25.8288 30.2083 26.6237 30.5375 27.2097 31.1236C27.7958 31.7096 28.125 32.5045 28.125 33.3333C28.125 34.1621 27.7958 34.9569 27.2097 35.543C26.6237 36.1291 25.8288 36.4583 25 36.4583C24.1712 36.4583 23.3764 36.1291 22.7903 35.543C22.2043 34.9569 21.875 34.1621 21.875 33.3333Z"
                        fill="#1E90FF"
                      />
                      <path
                        d="M36.5125 10.6583L29.8896 1.37292L5.5375 20.8271L4.1875 20.8125V20.8333H3.125V45.8333H46.875V20.8333H44.8708L40.8833 9.16876L36.5125 10.6583ZM40.4687 20.8333H19.5771L35.1375 15.5292L38.3083 14.5146L40.4687 20.8333ZM32.3958 12.0625L16.3333 17.5375L29.0542 7.37501L32.3958 12.0625ZM7.29167 37.8521V28.8104C8.1712 28.5 8.9701 27.9967 9.6298 27.3373C10.2895 26.678 10.7933 25.8794 11.1042 25H38.8958C39.2065 25.8798 39.7101 26.6788 40.3698 27.3385C41.0295 27.9982 41.8286 28.5019 42.7083 28.8125V37.8542C41.8286 38.1648 41.0295 38.6685 40.3698 39.3282C39.7101 39.9879 39.2065 40.7869 38.8958 41.6667H11.1083C10.7962 40.7868 10.2916 39.9878 9.63129 39.3279C8.97099 38.6679 8.17167 38.1637 7.29167 37.8521Z"
                        fill="#1E90FF"
                      />
                    </g>
                  </svg> */}
                  <center>
                    <i class="bi bi-cash-coin"></i>
                  </center>

                  <h4 className="text-center">Affordable & Accessible</h4>
                  <p className="text-center">
                    We believe quality coding education should be within reach.
                    With flexible payment plans, scholarships, and accessible
                    learning resources, Proxy Coding School ensures that
                    financial constraints don’t hold you back.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="skills-card" data-aos="fade-down">
                  {/* <svg
                    width="53"
                    height="52"
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.0887 23.2226C25.2089 23.2226 28.2014 22.052 30.4077 19.9682C32.6141 17.8844 33.8536 15.0582 33.8536 12.1113C33.8536 9.1644 32.6141 6.3382 30.4077 4.25443C28.2014 2.17065 25.2089 1 22.0887 1C18.9684 1 15.976 2.17065 13.7696 4.25443C11.5632 6.3382 10.3237 9.1644 10.3237 12.1113C10.3237 15.0582 11.5632 17.8844 13.7696 19.9682C15.976 22.052 18.9684 23.2226 22.0887 23.2226Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 45.4451V42.6673C1.49928 39.3866 2.37747 36.1591 4.0528 33.2852C5.72814 30.4113 8.14616 27.9844 11.0818 26.2305C14.0174 24.4766 17.3751 23.4527 20.8424 23.2542C24.3097 23.0556 27.7739 23.6888 30.9124 25.0948M35.7213 35.4866L38.7772 29.3671C38.8599 29.1921 38.9944 29.0436 39.1646 28.9393C39.3347 28.8351 39.5332 28.7796 39.7361 28.7796C39.9389 28.7796 40.1374 28.8351 40.3075 28.9393C40.4777 29.0436 40.6122 29.1921 40.6949 29.3671L43.7538 35.4866L50.5863 36.4755C51.4628 36.6005 51.8098 37.6672 51.1745 38.2783L46.2332 43.0368L47.398 49.7619C47.548 50.6258 46.6333 51.2841 45.8479 50.8758L39.7361 47.7007L33.6242 50.8758C32.8389 51.2841 31.9241 50.6258 32.0741 49.7647L33.2389 43.0368L28.2976 38.2783C27.6623 37.6672 28.0094 36.6005 28.8858 36.4728L35.7213 35.4866Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <center>
                    <i class="bi bi-file-post"></i>
                  </center>
                  <h4 className="text-center">
                    Hands-On, Project-Based Learning
                  </h4>
                  <p className="text-center">
                    We don’t just teach theory, we help you build real-world
                    projects. By working on hands-on coding exercises, projects,
                    and team collaborations, you gain practical experience that
                    strengthens your portfolio.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="skills-card" data-aos="fade-left">
                  {/* <svg
                    width="53"
                    height="52"
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.0887 23.2226C25.2089 23.2226 28.2014 22.052 30.4077 19.9682C32.6141 17.8844 33.8536 15.0582 33.8536 12.1113C33.8536 9.1644 32.6141 6.3382 30.4077 4.25443C28.2014 2.17065 25.2089 1 22.0887 1C18.9684 1 15.976 2.17065 13.7696 4.25443C11.5632 6.3382 10.3237 9.1644 10.3237 12.1113C10.3237 15.0582 11.5632 17.8844 13.7696 19.9682C15.976 22.052 18.9684 23.2226 22.0887 23.2226Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 45.4451V42.6673C1.49928 39.3866 2.37747 36.1591 4.0528 33.2852C5.72814 30.4113 8.14616 27.9844 11.0818 26.2305C14.0174 24.4766 17.3751 23.4527 20.8424 23.2542C24.3097 23.0556 27.7739 23.6888 30.9124 25.0948M35.7213 35.4866L38.7772 29.3671C38.8599 29.1921 38.9944 29.0436 39.1646 28.9393C39.3347 28.8351 39.5332 28.7796 39.7361 28.7796C39.9389 28.7796 40.1374 28.8351 40.3075 28.9393C40.4777 29.0436 40.6122 29.1921 40.6949 29.3671L43.7538 35.4866L50.5863 36.4755C51.4628 36.6005 51.8098 37.6672 51.1745 38.2783L46.2332 43.0368L47.398 49.7619C47.548 50.6258 46.6333 51.2841 45.8479 50.8758L39.7361 47.7007L33.6242 50.8758C32.8389 51.2841 31.9241 50.6258 32.0741 49.7647L33.2389 43.0368L28.2976 38.2783C27.6623 37.6672 28.0094 36.6005 28.8858 36.4728L35.7213 35.4866Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <center>
                    <i class="bi bi-globe-americas"></i>
                  </center>
                  <h4 className="text-center">
                    Real-World Training with Industry Experts
                  </h4>
                  <p className="text-center">
                    We offer dynamic skill-based training with the opportunity
                    to work on real projects under the guidance of industry
                    experts.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="skills-card" data-aos="fade-up-right">
                  {/* <svg
                    width="53"
                    height="52"
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.0887 23.2226C25.2089 23.2226 28.2014 22.052 30.4077 19.9682C32.6141 17.8844 33.8536 15.0582 33.8536 12.1113C33.8536 9.1644 32.6141 6.3382 30.4077 4.25443C28.2014 2.17065 25.2089 1 22.0887 1C18.9684 1 15.976 2.17065 13.7696 4.25443C11.5632 6.3382 10.3237 9.1644 10.3237 12.1113C10.3237 15.0582 11.5632 17.8844 13.7696 19.9682C15.976 22.052 18.9684 23.2226 22.0887 23.2226Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 45.4451V42.6673C1.49928 39.3866 2.37747 36.1591 4.0528 33.2852C5.72814 30.4113 8.14616 27.9844 11.0818 26.2305C14.0174 24.4766 17.3751 23.4527 20.8424 23.2542C24.3097 23.0556 27.7739 23.6888 30.9124 25.0948M35.7213 35.4866L38.7772 29.3671C38.8599 29.1921 38.9944 29.0436 39.1646 28.9393C39.3347 28.8351 39.5332 28.7796 39.7361 28.7796C39.9389 28.7796 40.1374 28.8351 40.3075 28.9393C40.4777 29.0436 40.6122 29.1921 40.6949 29.3671L43.7538 35.4866L50.5863 36.4755C51.4628 36.6005 51.8098 37.6672 51.1745 38.2783L46.2332 43.0368L47.398 49.7619C47.548 50.6258 46.6333 51.2841 45.8479 50.8758L39.7361 47.7007L33.6242 50.8758C32.8389 51.2841 31.9241 50.6258 32.0741 49.7647L33.2389 43.0368L28.2976 38.2783C27.6623 37.6672 28.0094 36.6005 28.8858 36.4728L35.7213 35.4866Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <center>
                    <i class="bi bi-card-list"></i>
                  </center>
                  <h4 className="text-center">Industry-Ready Curriculum</h4>
                  <p className="text-center">
                    Our curriculum is designed to match industry demands,
                    ensuring you learn the most relevant programming languages,
                    frameworks, and development tools. From web development to
                    data structures, algorithms, and software engineering
                    principles.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="skills-card" data-aos="fade-up">
                  {/* <svg
                    width="53"
                    height="52"
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.0887 23.2226C25.2089 23.2226 28.2014 22.052 30.4077 19.9682C32.6141 17.8844 33.8536 15.0582 33.8536 12.1113C33.8536 9.1644 32.6141 6.3382 30.4077 4.25443C28.2014 2.17065 25.2089 1 22.0887 1C18.9684 1 15.976 2.17065 13.7696 4.25443C11.5632 6.3382 10.3237 9.1644 10.3237 12.1113C10.3237 15.0582 11.5632 17.8844 13.7696 19.9682C15.976 22.052 18.9684 23.2226 22.0887 23.2226Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 45.4451V42.6673C1.49928 39.3866 2.37747 36.1591 4.0528 33.2852C5.72814 30.4113 8.14616 27.9844 11.0818 26.2305C14.0174 24.4766 17.3751 23.4527 20.8424 23.2542C24.3097 23.0556 27.7739 23.6888 30.9124 25.0948M35.7213 35.4866L38.7772 29.3671C38.8599 29.1921 38.9944 29.0436 39.1646 28.9393C39.3347 28.8351 39.5332 28.7796 39.7361 28.7796C39.9389 28.7796 40.1374 28.8351 40.3075 28.9393C40.4777 29.0436 40.6122 29.1921 40.6949 29.3671L43.7538 35.4866L50.5863 36.4755C51.4628 36.6005 51.8098 37.6672 51.1745 38.2783L46.2332 43.0368L47.398 49.7619C47.548 50.6258 46.6333 51.2841 45.8479 50.8758L39.7361 47.7007L33.6242 50.8758C32.8389 51.2841 31.9241 50.6258 32.0741 49.7647L33.2389 43.0368L28.2976 38.2783C27.6623 37.6672 28.0094 36.6005 28.8858 36.4728L35.7213 35.4866Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <center>
                    <i class="bi bi-receipt"></i>
                  </center>
                  <h4 className="text-center">
                    Polish Your Professional Persona
                  </h4>
                  <p className="text-center">
                    Your success is our priority. We offer: Resume & portfolio
                    review Mock technical interview Internship & job placement
                    support
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="skills-card" data-aos="fade-up-left">
                  {/* <svg
                    width="53"
                    height="52"
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.0887 23.2226C25.2089 23.2226 28.2014 22.052 30.4077 19.9682C32.6141 17.8844 33.8536 15.0582 33.8536 12.1113C33.8536 9.1644 32.6141 6.3382 30.4077 4.25443C28.2014 2.17065 25.2089 1 22.0887 1C18.9684 1 15.976 2.17065 13.7696 4.25443C11.5632 6.3382 10.3237 9.1644 10.3237 12.1113C10.3237 15.0582 11.5632 17.8844 13.7696 19.9682C15.976 22.052 18.9684 23.2226 22.0887 23.2226Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 45.4451V42.6673C1.49928 39.3866 2.37747 36.1591 4.0528 33.2852C5.72814 30.4113 8.14616 27.9844 11.0818 26.2305C14.0174 24.4766 17.3751 23.4527 20.8424 23.2542C24.3097 23.0556 27.7739 23.6888 30.9124 25.0948M35.7213 35.4866L38.7772 29.3671C38.8599 29.1921 38.9944 29.0436 39.1646 28.9393C39.3347 28.8351 39.5332 28.7796 39.7361 28.7796C39.9389 28.7796 40.1374 28.8351 40.3075 28.9393C40.4777 29.0436 40.6122 29.1921 40.6949 29.3671L43.7538 35.4866L50.5863 36.4755C51.4628 36.6005 51.8098 37.6672 51.1745 38.2783L46.2332 43.0368L47.398 49.7619C47.548 50.6258 46.6333 51.2841 45.8479 50.8758L39.7361 47.7007L33.6242 50.8758C32.8389 51.2841 31.9241 50.6258 32.0741 49.7647L33.2389 43.0368L28.2976 38.2783C27.6623 37.6672 28.0094 36.6005 28.8858 36.4728L35.7213 35.4866Z"
                      stroke="#0D99FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <center>
                    <i class="bi bi-people"></i>
                  </center>
                  <h4 className="text-center">
                    Mentorship & Community Support
                  </h4>
                  <p className="text-center">
                    Learning to code is easier with the right support. At Proxy
                    Coding School, you’ll have access to experienced mentors,
                    industry professionals, and a vibrant peer community to
                    guide and support you throughout your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesComp;
