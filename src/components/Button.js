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

  const handleClick = (e) => {
    e.stopPropagation(); // 🔥 sprječava da klik ode na parent Link
    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      className="btn"
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
