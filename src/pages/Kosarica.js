import { useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import "./Kosarica.css";
import { CartContext } from "../components/CartContext";

const Kosarica = () => {
  const { cart, increase, decrease, removeItem } = useContext(CartContext);

  if (!cart) return <Loader />;

  /* UKUPNA CIJENA */

  const ukupno = cart.reduce(
    (sum, item) => sum + item.cijena * item.kolicina,
    0,
  );

  return (
    <div className="kosarica">
      <h1>Košarica</h1>

      {cart.length === 0 && <p>Košarica je prazna.</p>}

      {cart.map((item) => (
        <div className="kosarica-item" key={item.id}>
          <div className="info">
            <h3>{item.naziv.replace(/&#215;/g, "×")}</h3>
            <p>Cijena: {item.cijena} €</p>
          </div>

          <div className="qty">
            <button onClick={() => decrease(item.id)}>-</button>

            <span>{item.kolicina}</span>

            <button onClick={() => increase(item.id)}>+</button>
          </div>

          <button className="remove-btn" onClick={() => removeItem(item.id)}>
            Ukloni
          </button>
        </div>
      ))}

      <hr />

      <div className="kosarica-total">
        <h2>Ukupno: {ukupno} €</h2>
      </div>

      {cart.length > 0 && (
        <Link to="/narudzba">
          <button className="checkout-btn">Nastavi na narudžbu</button>
        </Link>
      )}
    </div>
  );
};

export default Kosarica;
