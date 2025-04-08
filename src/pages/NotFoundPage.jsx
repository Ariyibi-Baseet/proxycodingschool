import { Link } from "react-router-dom";
import "../assets/css/NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <section className="not-found-section">
        <div className="container not-found-block d-flex align-items-center justify-content-center">
          <div className="">
            <h1 className="text-center oops-text">Oops! 🙇‍♀️</h1>
            <p className="text-center">404 - page not found</p>
            <p className="text-center content-404">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable
            </p>
            <Link to="/">
              <button className="go-back-btn">Go to Homepage</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
