"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [cart, setCart] = useState({});

  const handleIncrementProduct = (priceId, quantity, product) => {
    setCart((prevCart) => {
      const existingItem = prevCart[priceId];
      const newQuantity = existingItem
        ? existingItem.quantity + quantity
        : quantity;

      // If quantity is 0 or negative, remove the item from cart
      if (newQuantity <= 0) {
        const newCart = { ...prevCart };
        delete newCart[priceId];
        return newCart;
      }

      if (existingItem) {
        return {
          ...prevCart,
          [priceId]: {
            ...existingItem,
            quantity: newQuantity,
          },
        };
      }

      return {
        ...prevCart,
        [priceId]: {
          quantity,
          name: product.name,
          description: product.description,
          prices: product.prices,
          images: product.images,
        },
      };
    });
  };

  const handleDecrementProduct = (priceId) => {
    setCart((prevCart) => {
      const existingItem = prevCart[priceId];

      if (existingItem && existingItem.quantity > 1) {
        return {
          ...prevCart,
          [priceId]: { ...existingItem, quantity: existingItem.quantity - 1 },
        };
      }

      const newCart = { ...prevCart };
      delete newCart[priceId];
      return newCart;
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
