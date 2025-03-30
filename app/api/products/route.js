import Stripe from "stripe";
import "../../../envConfig.js";

const API_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(API_KEY);

export async function GET() {
  try {
      // fetch all the active products from stripe

      //fetch all the prices that are active

      
      //combine the products and their associated prices
      
  } catch (err) {
    console.error("Error fetching data from stripe:", err.message);
    return Response.json({ error: "Failed to fetch data from stripe" });
  }
}
