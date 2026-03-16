import { useEffect, useState, useContext } from "react";
import Loader from "../pages/Loader";
import "./Proizvodi.css";
import { CartContext } from "../components/CartContext";
import Button from "../components/Button";

function Proizvodi() {
  const [proizvodi, setProizvodi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState("");

  const { addToCart: addToCartContext } = useContext(CartContext);

  useEffect(() => {
    async function fetchProizvodi() {
      try {
        const res = await fetch(
          "https://front2.edukacija.online/backend/wp-json/wp/v2/proizvodi?_embed",
        );

        const data = await res.json();

        setProizvodi(data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    }

    fetchProizvodi();
  }, []);

  function addToCart(proizvod) {
    addToCartContext({
      id: proizvod.id,
      naziv: proizvod.title.rendered,
      cijena: proizvod.acf?.price || 0,
      slika: proizvod._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    });

    setPopup(proizvod.title.rendered);

    setTimeout(() => {
      setPopup("");
    }, 2000);
  }

  if (loading) return <Loader />;

  return (
    <section className="proizvodi">
      <div>
        {/* UVOD */}

        <div className="uvod">
          <p>Prirodno. Čisto. S našeg imanja.</p>
          <p>Naš asortiman je mali, ali iskren.</p>
          <p>Sve što nudimo sami proizvodimo, punimo i pakiramo.</p>
        </div>

        {/* GRID */}

        <div className="wp-block-columns">
          {proizvodi.map((p) => {
            const naziv = p.title?.rendered || "";

            const slika =
              p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

            const cijena = p.acf?.price || "";

            return (
              <div className="wp-block-column" key={p.id}>
                <figure className="wp-block-image">
                  {slika && <img src={slika} alt={naziv} />}
                </figure>

                <h2 dangerouslySetInnerHTML={{ __html: naziv }} />

                <p className="cijena">{cijena} €</p>

                <div className="wp-block-buttons">
                  <Button onClick={() => addToCart(p)}>U košaricu</Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* DOSTAVA */}

        <div className="dostava">
          <p>
            <strong>Dostava i plaćanje:</strong>
          </p>

          <p>
            Dostavljamo po cijeloj Hrvatskoj. Plaćanje pouzećem ili uplatom na
            račun.
          </p>

          <p className="slogan">
            "Ako želite znati što stavljate na stol, ovo je za vas."
          </p>

          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="logo"
            className="logo-dno"
          />
        </div>
      </div>

      {/* POPUP */}

      {popup && <div className="cart-popup">✓ Dodano u košaricu: {popup}</div>}
    </section>
  );
}

export default Proizvodi;
