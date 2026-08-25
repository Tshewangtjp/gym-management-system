import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";
import "./NotFound.css";

function NotFound() {
    return (
        <main className="not-found-page">
            <div className="not-found-bg">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <section className="not-found-card">
                <div className="not-found-icon">
                    <FaSearch />
                </div>

                <p className="not-found-code">404</p>

                <h1>Page Not Found</h1>

                <p className="not-found-message">
                    Oops! The page you’re looking for doesn’t exist,
                    may have been moved, or is temporarily unavailable.
                </p>

                <div className="not-found-actions">
                    <Link to="/" className="not-found-btn primary">
                        <FaHome />
                        Back to Home
                    </Link>

                    <button
                        className="not-found-btn secondary"
                        onClick={() => window.history.back()}
                    >
                        <FaArrowLeft />
                        Go Back
                    </button>
                </div>

                <p className="not-found-hint">
                    You can return to the dashboard and continue exploring.
                </p>
            </section>
        </main>
    );
}

export default NotFound;