import { useState, useEffect } from "react";
import Loader from "./Loader";
import "./Onama.css";

const Onama = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(
          "https://front2.edukacija.online/backend/wp-json/wp/v2/pages/437",
        );
        if (!response.ok) {
          throw new Error("ne mogu pronaći podatke");
        }
        const data = await response.json();
        setPage(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPage();
  }, []);

  if (!page) return <Loader />;

  return (
    <div className="onama-page">
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
};

export default Onama;
