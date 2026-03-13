import { Link } from "react-router-dom";
import "../pages/success.css";

const Success = () => {
  return (
    <div className="success-page">
      <div className="success-box">
        <h1>✅ Narudžba uspješno poslana!</h1>

        <p>
          Hvala na vašoj narudžbi. Kontaktirat ćemo vas uskoro radi potvrde i
          dostave.
        </p>

        <Link to="/">
          <button className="home-btn">Povratak na početnu</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
