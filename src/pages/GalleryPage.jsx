import FooterComp from "../components/FooterComp";
import NavBar from "../components/NavBar";
import "../assets/css/GalleryPage.css";
import dummyImage from "../assets/images/gallery.jpg";
import pics01 from "../assets/images/pcs009.jpg";
import pics02 from "../assets/images/pcs001.jpg";
import pics03 from "../assets/images/pcs006.jpg";
import pics04 from "../assets/images/pcs002.jpg";
import pics05 from "../assets/images/pcs007.jpg";

function GalleryPage() {
  return (
    <>
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
