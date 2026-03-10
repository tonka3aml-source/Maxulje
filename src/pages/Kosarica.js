import "./Kosarica.css";
import Loader from "./Loader";

const Kosarica = () => {
  return (
    <div className="kosarica">
      <h1>Košarica</h1>

      <div className="kosarica-item">
        <div>
          <h3>Proizvod 1</h3>
          <p>Cijena: ? €</p>
        </div>
        <div>
          <p>Količina: ? </p>
        </div>
      </div>

      <div className="kosarica-item">
        <div>
          <h3>Proizvod 2</h3>
          <p>Cijena: ? €</p>
        </div>
        <div>
          <p>Količina: ? </p>
        </div>
      </div>

      <hr />

      <div className="kosarica-total">
        <h2>Ukupno: ? €</h2>
      </div>

      <button className="checkout-btn">Nastavi na narudžbu</button>
    </div>
  );
};

export default Kosarica;
