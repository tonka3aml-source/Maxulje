import { Link } from "react-router-dom";
import "./button.css";

function Button({ children, to, type = "button", disabled, onClick }) {
  if (to) {
    return (
      <Link to={to} className="btn">
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className="btn" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
