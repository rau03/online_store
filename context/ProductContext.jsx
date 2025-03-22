"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleIncrementProduct = (priceId, quantity, product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.priceId === priceId);

      if (existingItem) {
        return prevCart.map((item) =>
          item.priceId === priceId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { priceId, quantity, product }];
    });
  };

  const handleDecrementProduct = (priceId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.priceId === priceId);

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.priceId === priceId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      return prevCart.filter((item) => item.priceId !== priceId);
    });
  };

  const value = {
    cart,
    handleIncrementProduct,
    handleDecrementProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}
