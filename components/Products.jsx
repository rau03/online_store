"use client";

import { useState, useEffect } from "react";
import Portal from "./Portal";
import { useProducts } from "@/context/ProductContext";

export default function Products() {
  const [portalImage, setPortalImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleIncrementProduct } = useProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <>
      {portalImage && (
        <Portal
          handleClosePortal={() => {
            setPortalImage(null);
          }}
        >
          <div className="portal-content">
            <img
              className="img-display"
              src={`med_res/${portalImage}.jpeg`}
              alt={`${portalImage}-high-res`}
            />
          </div>
        </Portal>
      )}
      <div className="section-container">
        <div className="section-header">
          <h2>Shop Our Selection</h2>
          <p>From organisation or accessorization</p>
        </div>

        <div className="planner-container">
          <div>
            <button
              onClick={() => {
                setPortalImage("planner");
              }}
              className="img-button"
            >
              <img src="low_res/planner.jpeg" alt="high-res-planner" />
            </button>
          </div>
          <div className="planner-info">
            <p className="text-large planner-header">
              Medieval Dragon Month Planner
            </p>
            <h3>
              <span>$</span>14.99
            </h3>
            <p>
              Step into a realm of fantasy and organization with our{" "}
              <strong>Medieval Dragon Month Planner</strong>! This
              high-resolution PNG asset combines the fierce elegance of dragons
              with intricate medieval designs to create a planner that's not
              only functional but also a work of art. Whether you&apos;re
              jotting down quests, planning battles, or just scheduling your
              weekly grocery run, this planner is your ultimate companion.
            </p>
            <ul>
              <li>
                <strong>Epic Dragon Artwork:</strong> Stunning hand-drawn dragon
                motifs and medieval-inspired borders make every month feel
                legendary.
              </li>
              <li>
                <strong>Fully Printable:</strong> Designed at ultra-high
                resolution, it&apos;s perfect for printing on any size paper,
                from A4 to poster-sized displays.
              </li>
            </ul>
            <div className="purchase-btns">
              <button
                onClick={() => {
                  const plannerPriceId = "planner-sticker";
                  handleIncrementProduct(plannerPriceId, 1, {
                    name: "Medieval Dragon Month Planner",
                    description: "A beautiful planner with dragon artwork",
                    prices: [{ unit_amount: 1499 }],
                    default_price: plannerPriceId,
                  });
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <h2>Or Collect Your Favorite Tech</h2>
          <p>Choose from our custom designed tech logos</p>
        </div>
        <div className="sticker-container">
          {products.map((product) => (
            <div key={product.id} className="sticker-card">
              <button
                onClick={() => {
                  setPortalImage(product.name);
                }}
                className="img-button"
              >
                <img
                  src={`low_res/${product.name}.jpeg`}
                  alt={`${product.name}-low-res`}
                />
              </button>
              <div className="sticker-info">
                <p className="text-medium">{product.name}</p>
                <p>{product.description}</p>
                <h4>
                  <span>$</span>
                  {product.prices[0]?.unit_amount / 100 || 9.99}
                </h4>
                <button
                  onClick={() => {
                    handleIncrementProduct(product.default_price, 1, product);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
