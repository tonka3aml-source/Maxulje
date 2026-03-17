import { Link } from "react-router-dom";
import "../pages/error.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-box">
        <h1>❌ Došlo je do greške!</h1>

        <p>
          Nažalost, narudžba nije uspješno poslana. Molimo pokušajte ponovno ili
          nas kontaktirajte.
        </p>

        <Link to="/">
          <button className="home-btn">Povratak na početnu</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
