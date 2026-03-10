import "./Proizvodi.css";

const proizvodiData = [
  {
    id: 1,
    naziv: "Proizvod",
    cijena: "6€",
    slika: "/img/staklenka025.jpeg",
  },
  {
    id: 2,
    naziv: "Staklenka 0.5l",
    cijena: "10€",
    slika: "/img/staklenka0.5l.png",
  },
  {
    id: 3,
    naziv: "Staklenka 1l",
    cijena: "15€",
    slika: "/img/staklenka1l.png",
  },
  {
    id: 4,
    naziv: "Poklon pakiranje 2x0.25l",
    cijena: "10€",
    slika: "/img/staklenkeduo250ml.jpeg",
  },
  {
    id: 5,
    naziv: "Poklon pakiranje 0.25l + 0.5l",
    cijena: "15€",
    slika: "/img/staklenkaduozel.png",
  },
  {
    id: 6,
    naziv: "Poklon pakiranje 0.25l",
    cijena: "20€",
    slika: "/img/staklenkaduozel.png",
  },
];

const Proizvodi = () => {
  return (
    <div className="proizvodi">
      <div>
        {/* GORNJI TEKST */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h3 style={{ fontStyle: "italic", marginBottom: "1rem" }}>
            Prirodno. Čisto. S našeg imanja.
          </h3>

          <p style={{ marginBottom: "0.5rem" }}>
            Naš asortiman je mali, ali iskren.
          </p>

          <p>Sve što nudimo sami proizvodimo, punimo i pakiramo.</p>
        </div>

        {/* PROIZVODI GRID */}
        <div className="wp-block-columns">
          {proizvodiData.map((proizvod) => (
            <div className="wp-block-column" key={proizvod.id}>
              <figure className="wp-block-image">
                <img src={proizvod.slika} alt={proizvod.naziv} />
              </figure>

              <h2>{proizvod.naziv}</h2>

              <p>{proizvod.cijena}</p>

              <div className="wp-block-buttons">
                <div className="wp-block-button">
                  <button className="wp-block-button__link">U košaricu</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DONJI TEKST */}
        <div style={{ textAlign: "center", marginTop: "6rem" }}>
          <p>
            <strong>Dostava i plaćanje:</strong>
          </p>

          <p style={{ marginBottom: "3rem" }}>
            Dostavljamo po cijeloj Hrvatskoj. Plaćanje pouzećem ili uplatom na
            račun.
          </p>

          <p style={{ fontStyle: "italic", marginBottom: "2rem" }}>
            "Ako želite znati što stavljate na stol, ovo je za vas."
          </p>

          <img src="/img/logo.png" alt="Logo" className="logo-dno" />
        </div>
      </div>
    </div>
  );
};

export default Proizvodi;
