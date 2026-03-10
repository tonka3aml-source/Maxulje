import { Link } from "react-router-dom";

const Mreze = () => {
  return (
    <div className="social-icons">
      <Link to="#" onClick={(e) => e.preventDefault()}>
        <i className="fa-brands fa-facebook-f"></i>
      </Link>

      <Link to="#" onClick={(e) => e.preventDefault()}>
        <i className="fa-brands fa-x-twitter"></i>
      </Link>

      <Link to="#" onClick={(e) => e.preventDefault()}>
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>

      <Link to="#" onClick={(e) => e.preventDefault()}>
        <i className="fa-brands fa-instagram"></i>
      </Link>
    </div>
  );
};

export default Mreze;
