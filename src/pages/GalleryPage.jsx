import FooterComp from "../components/FooterComp";
import NavBar from "../components/NavBar";
import "../assets/css/GalleryPage.css";
import dummyImage from "../assets/images/gallery.jpg";
import pics01 from "../assets/images/pcs009.jpg";
import pics02 from "../assets/images/pcs001.jpg";
import pics03 from "../assets/images/pcs006.jpg";
import pics04 from "../assets/images/pcs002.jpg";
import pics05 from "../assets/images/pcs007.jpg";
import { Helmet } from "react-helmet";

function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Our Gallery — Proxy Coding School </title>
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
      <section className="gallery-section">
        <div className="container">
          <h1 className="text-center">Our Gallery</h1>
          <p className="text-center">Take a look at some of our activities</p>

          <div className="block-one mb-5">
            <p>Lectures and Guest Speakers</p>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="pics">
                  <img src={dummyImage} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="pics">
                  <img src={pics01} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="pics">
                  <img src={pics02} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="block-two">
            <p>Workshops</p>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="pics">
                  <img src={pics03} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="pics">
                  <img src={pics04} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="pics">
                  <img src={pics05} alt="" />
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

export default GalleryPage;
