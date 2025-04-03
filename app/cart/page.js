"use client";

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Keep if needed for createCheckout or other logic

export default function CartPage() {
  const router = useRouter(); // Keep if needed
  const { cart, handleIncrementProduct } = useProducts();

  console.log("--- CartPage Render ---");
  console.log("Raw cart object from context:", cart);

  // --- ERROR: createCheckout is not defined ---
  // You need to define this function. Example placeholder:
  const createCheckout = async () => {
    try {
      // Format cart items for Stripe
      const lineItems = Object.entries(cart).map(([priceId, item]) => {
        return {
          price: priceId, // This is the Stripe price ID
          quantity: item.quantity,
        };
      });

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: lineItems }),
      });

      const { url, error } = await response.json();

      if (error) {
        console.error("Checkout error:", error);
        alert("Failed to create checkout session. Please try again.");
        return;
      }

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to create checkout session. Please try again.");
    }
  };

  const cartItems = Object.keys(cart); // Get keys once for efficiency and check length

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>

      {/* Check if cart is empty */}
      {cartItems.length === 0 && <p>You have no items in your cart!</p>}

      {/* Render cart items only if cart is not empty */}
      {cartItems.length > 0 && (
        <div className="cart-container">
          {cartItems.map((itemKey) => {
            // Use itemKey which is the product ID/default_price
            const itemData = cart[itemKey];
            // Handle case where itemData might somehow be missing (optional defensive coding)
            if (!itemData) return null;

            const itemQuantity = itemData.quantity;

            // Get the image URL from the stored product data
            const imgName =
              itemData.name === "Medieval Dragon Month Planner"
                ? "planner"
                : itemData.name
                ? itemData.name.replace(" Sticker.png", "").replace(/ /g, "_")
                : "placeholder";
            const imgUrl = `/low_res/${imgName}.jpeg`;

            return (
              <div key={itemKey} className="cart-item">
                {" "}
                {/* Use itemKey (product ID) for key */}
                <img
                  src={imgUrl}
                  alt={`${itemData.name} product image`}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3>{itemData.name}</h3>
                  {/* Add description if available */}
                  {itemData.description && (
                    <p>
                      {itemData.description.slice(0, 100)}
                      {itemData.description.length > 100 ? "..." : ""}
                    </p>
                  )}
                  {/* Check if prices exist and have data */}
                  {itemData.prices && itemData.prices[0] && (
                    <h4>${itemData.prices[0].unit_amount / 100}</h4>
                  )}
                  <div className="quantity-container">
                    <p>
                      <strong>Quantity</strong>
                    </p>
                    <input
                      type="number"
                      min="0" // Prevent negative numbers
                      value={itemQuantity}
                      placeholder="1" // Placeholder if needed
                      onChange={(e) => {
                        const newValue = e.target.value;
                        // --- POTENTIAL ISSUE FIX: Convert value to number ---
                        const numericValue = parseInt(newValue, 10);
                        // Only update if it's a valid non-negative number
                        if (!isNaN(numericValue) && numericValue >= 0) {
                          handleIncrementProduct(
                            itemKey,
                            numericValue - itemQuantity, // Pass the difference to increment/decrement
                            {
                              name: itemData.name,
                              description: itemData.description,
                              prices: itemData.prices,
                              images: itemData.images,
                            }
                          );
                        } else if (newValue === "") {
                          // Handle empty input - set to 0
                          handleIncrementProduct(
                            itemKey,
                            -itemQuantity, // Decrement by current quantity to set to 0
                            {
                              name: itemData.name,
                              description: itemData.description,
                              prices: itemData.prices,
                              images: itemData.images,
                            }
                          );
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Checkout section - only show if cart has items */}
      {cartItems.length > 0 && (
        <div className="checkout-container">
          <Link href={"/"}>
            {/* Avoid nesting interactive elements if possible, Link can wrap content */}
            <button type="button">&larr; Continue shopping</button>
          </Link>
          {/* Ensure button type is specified if not submitting a form */}
          <button type="button" onClick={createCheckout}>
            Checkout &rarr;
          </button>
        </div>
      )}
    </section>
  );
}
