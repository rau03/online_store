import Stripe from "stripe";
import "@/envConfig.js";

const API_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(API_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(request) {
  try {
    const { cartItems } = await request.json();

    // Log the cart items for debugging
    console.log("Cart items received:", JSON.stringify(cartItems, null, 2));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems,
      mode: "payment",
      success_url: `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
      }/success`,
      cancel_url: `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
      }/cart`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Error creating cart checkout ", error.message);
    return Response.json({ error: "Failed to create stripe checkout page" });
  }
}
