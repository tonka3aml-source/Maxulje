import "./narudzba.css";
import Loader from "./Loader";

const Narudzba = () => {
  return (
    <div className="narudzba">
      <h1>Narudžba</h1>

      <form>
        <div>
          <label>Ime</label>
          <input type="text" />
        </div>

        <div>
          <label>Prezime</label>
          <input type="text" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" />
        </div>

        <div>
          <label>Adresa</label>
          <input type="text" />
        </div>

        <button type="submit">Pošalji narudžbu</button>
      </form>
    </div>
  );
};

export default Narudzba;
