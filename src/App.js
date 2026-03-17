import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Naslovnica from "./pages/Naslovnica";
import Blog from "./pages/Blog";
import Onama from "./pages/Onama";
import Proizvodi from "./pages/Proizvodi";
import Kosarica from "./pages/Kosarica";
import BlogSingle from "./pages/BlogSingle";
import Kontakt from "./pages/Kontakt";
import Narudzba from "./pages/Narudzba";
import { CartProvider } from "./components/CartContext";
import Success from "./components/Success";
import ErrorPage from "./components/Error";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/amaj">
        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Naslovnica />} />
            <Route path="/onama" element={<Onama />} />
            <Route path="/proizvodi" element={<Proizvodi />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogSingle />} />

            <Route path="/kosarica" element={<Kosarica />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/narudzba" element={<Narudzba />} />
            <Route path="/success" element={<Success />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
