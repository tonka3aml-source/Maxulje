import { useState, useEffect, useContext } from "react";
import Loader from "../pages/Loader";
import "./Naslovnica.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { CartContext } from "../components/CartContext";

const Naslovnica = () => {
  const [page, setPage] = useState(null);
  const [popup, setPopup] = useState("");

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/pages/27`)
      .then((response) => response.json())
      .then((data) => setPage(data));
  }, []);

  if (!page) return <Loader />;

  // slika iz WP
  const match = page.content.rendered.match(/<img[^>]+src="([^">]+)"/);
  const heroImage = match ? match[1] : "";

  // helper za slike - kod refresha neće se izgubiti
  const img = (name) => process.env.PUBLIC_URL + "/img/" + name;

  //  ADD TO CART (napravila kao u proizvodima)
  function handleAdd(naziv, cijena, slika) {
    addToCart({
      id: Date.now(),
      naziv,
      cijena,
      slika,
    });

    setPopup(naziv);

    setTimeout(() => {
      setPopup("");
    }, 2000);
  }

  return (
    <div className="naslovnica">
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h2 className="hero-subtitle">Snaga iz zemlje</h2>
          <h1>S ljubavlju iz našeg podneblja.</h1>

          <Button to="/proizvodi">Naruči</Button>
        </div>
      </div>

      {/* O NAMA */}

      <section className="about-section">
        <div className="about-row">
          <Link to="/onama" className="card">
            <div className="about-img">
              <img src={img("hero3.png")} alt="O nama" />
            </div>
            <h2>O nama</h2>
            <p>
              Obiteljski maslinik u srcu Pirovca. Obiteljska tradicija, ručni
              rad i čista priroda – ono je što svaku bocu čini posebnom.
            </p>
          </Link>

          <Link to="/onama" className="card">
            <div className="about-img">
              <img src={img("berba1.jpg")} alt="O nama" />
            </div>
            <h2>Naša priča</h2>
            <p>Naše ulje nastaje tamo gdje zemlja još miriše na prirodu...</p>
          </Link>
        </div>
      </section>

      {/* PROIZVODI */}

      <section className="proizvodi-section">
        <h2 className="proizvodi-title">PROIZVODI</h2>

        <div className="proizvodi-grid">
          <div className="card">
            <Link to="/proizvodi">
              <div className="product-img">
                <img src={img("staklenka025.jpeg")} alt="staklenka025" />
              </div>
            </Link>

            <h3 className="product-title">Staklenka 0.25L</h3>
            <p className="product-price">6 €</p>

            <Button
              onClick={() =>
                handleAdd("Staklenka 0.25L", 6, img("staklenka025.jpeg"))
              }
            >
              U košaricu
            </Button>
          </div>

          <div className="card">
            <Link to="/proizvodi">
              <div className="product-img">
                <img src={img("staklenka0.5l.png")} alt="staklenka0.5l" />
              </div>
            </Link>

            <h3 className="product-title">Staklenka 0.50 L</h3>
            <p className="product-price">10 €</p>

            <Button
              onClick={() =>
                handleAdd("Staklenka 0.50 L", 10, img("staklenka0.5l.png"))
              }
            >
              U košaricu
            </Button>
          </div>

          <div className="card">
            <Link to="/proizvodi">
              <div className="product-img">
                <img src={img("staklenkaduozel.png")} alt="staklenkaduozel" />
              </div>
            </Link>

            <h3 className="product-title">Poklon paket</h3>
            <p className="product-price">20 €</p>

            <Button
              onClick={() =>
                handleAdd("Poklon paket", 20, img("staklenkaduozel.png"))
              }
            >
              U košaricu
            </Button>
          </div>
        </div>
      </section>

      {/* BLOG */}

      <section className="blogs-section">
        <div className="torn-divider"></div>

        <div className="blogs-container">
          <h2 className="blogs-title">Blogovi</h2>

          <div className="blogs-grid">
            <Link
              to="/blog/nasa-berba-kako-izgleda-sezona-maslinarstva/"
              className="blog-card"
            >
              <img src={img("blog10b.jpg")} alt="" />
              <h3>Naša berba - Zlatna kap ulja</h3>
              <Button>Pročitaj više...</Button>
            </Link>

            <Link
              to="/blog/kako-prepoznati-kvalitetu-ulja/"
              className="blog-card"
            >
              <img src={img("blog7b.jpg")} alt="" />
              <h3>Kako prepoznati kvalitetu ulja</h3>
              <Button>Pročitaj više...</Button>
            </Link>

            <Link to="/blog/recepti-sa-maslinovim-uljem" className="blog-card">
              <img src={img("blog3.jpg")} alt="" />
              <h3>Recepti s Maslinovim Uljem</h3>
              <Button>Pročitaj više...</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ POPUP */}
      {popup && <div className="cart-popup">✓ Dodano: {popup}</div>}
    </div>
  );
};

export default Naslovnica;
