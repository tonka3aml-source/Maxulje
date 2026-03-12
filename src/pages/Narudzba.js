import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./narudzba.css";
import { CartContext } from "../components/CartContext";
import Loader from "../pages/Loader";

const Narudzba = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [placanje, setPlacanje] = useState("");
  const [loading, setLoading] = useState(false);

  const ukupno = cart.reduce(
    (sum, item) => sum + item.cijena * item.kolicina,
    0,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      alert("Narudžba je poslana!");

      localStorage.removeItem("cart");
      setCart([]);

      navigate("/");
    }, 1200);
  };

  return (
    <div className="narudzba">
      <h1>Narudžba</h1>

      <div className="pregled">
        {cart.length === 0 && <p>Košarica je prazna.</p>}

        {cart.map((item) => (
          <p key={item.id}>
            <span>{item.naziv.replace(/&#215;/g, "×")}</span>
            <span className="kolicina">× {item.kolicina}</span>
          </p>
        ))}

        <h3>Ukupno: {ukupno} €</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grupa">
          <label>Ime</label>
          <input type="text" required />
        </div>

        <div className="form-grupa">
          <label>Prezime</label>
          <input type="text" required />
        </div>

        <div className="form-grupa">
          <label>Email</label>
          <input type="email" required />
        </div>

        <div className="form-grupa">
          <label>Adresa</label>
          <input type="text" required />
        </div>

        <div className="placanje">
          <label>Način plaćanja</label>

          <label className="radio">
            <input
              type="radio"
              name="placanje"
              value="pouzece"
              required
              onChange={(e) => setPlacanje(e.target.value)}
            />
            Plaćanje pouzećem
          </label>

          <label className="radio">
            <input
              type="radio"
              name="placanje"
              value="racun"
              onChange={(e) => setPlacanje(e.target.value)}
            />
            Uplata na račun
          </label>

          {placanje === "racun" && (
            <div className="iban-info">
              <p>Molimo izvršiti uplatu na:</p>
              <p>
                <strong>IBAN:</strong> HR12 0000 0000 0000 0000
              </p>
              <p>
                <strong>Primatelj:</strong> OPG Maxulje
              </p>
              <p>
                <strong>Opis plaćanja:</strong> Narudžba s web stranice
              </p>
            </div>
          )}
        </div>

        <button type="submit" disabled={loading || cart.length === 0}>
          {loading ? "Slanje..." : "Pošalji narudžbu"}
        </button>
      </form>
    </div>
  );
};

export default Narudzba;
