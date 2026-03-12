import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* UCITAJ CART IZ LOCAL STORAGE */

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  /* SPREMI CART U LOCAL STORAGE */

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ADD TO CART */

  const addToCart = (proizvod) => {
    const postoji = cart.find((item) => item.id === proizvod.id);

    if (postoji) {
      setCart(
        cart.map((item) =>
          item.id === proizvod.id
            ? { ...item, kolicina: item.kolicina + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...proizvod, kolicina: 1 }]);
    }
  };

  /* POVECANJE */

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, kolicina: item.kolicina + 1 } : item,
      ),
    );
  };

  /* SMANJENJE */

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, kolicina: item.kolicina - 1 } : item,
        )
        .filter((item) => item.kolicina > 0),
    );
  };

  /* UKLONI PROIZVOD */

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increase,
        decrease,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
