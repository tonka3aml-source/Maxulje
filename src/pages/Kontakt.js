import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";
import "./kontakt.css";

const Kontakt = () => {
  const form = useRef();

  const [heroImage, setHeroImage] = useState("");
  const [textContent, setTextContent] = useState("");
  const [loading, setLoading] = useState(false);

  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  /* ================= FETCH WORDPRESS ================= */

  useEffect(() => {
    const fetchPage = async () => {
      const res = await fetch(
        "https://front2.edukacija.online/backend/wp-json/wp/v2/pages/443",
      );

      const data = await res.json();

      const parser = new DOMParser();
      const doc = parser.parseFromString(data.content.rendered, "text/html");

      /* uzmi sliku */

      const img = doc.querySelector("img");

      if (img) {
        setHeroImage(img.src);
        img.remove();
      }

      /* ostatak teksta */

      setTextContent(doc.body.innerHTML);
    };

    fetchPage();
  }, []);

  /* ================= EMAIL ================= */

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm("service_posswee", "template_yhucekw", form.current, {
        publicKey: "2EARfKPz1fCUV2Llk",
      })
      .then(
        () => {
          setIsSent(true);
          setLoading(false);

          form.current.reset();

          setTimeout(() => setIsSent(false), 3000);
        },
        () => {
          setIsError(true);
          setLoading(false);
        },
      );
  };

  /* ================= RENDER ================= */

  if (!heroImage) return <Loader />;

  return (
    <section className="kontakt-page">
      {/* LIJEVA STRANA */}

      <div className="kontakt-left">
        <div
          className="kontakt-text"
          dangerouslySetInnerHTML={{ __html: textContent }}
        />

        <form ref={form} onSubmit={sendEmail} className="kontakt-form">
          <label>Ime i prezime</label>
          <input type="text" name="user_name" required />

          <label>Email</label>
          <input type="email" name="user_email" required />

          <label>Poruka</label>
          <textarea rows="4" name="message" required />

          <button type="submit" disabled={loading}>
            {loading ? "Šaljem..." : "Pošalji poruku"}
          </button>

          {isSent && <p className="success-msg">Poruka poslana ✔</p>}
          {isError && <p className="error-msg">Greška ❌</p>}
        </form>
      </div>

      {/* DESNA STRANA HERO */}

      <div className="kontakt-hero">
        <img src={heroImage} alt="Maslinovo ulje" />
      </div>
    </section>
  );
};

export default Kontakt;
