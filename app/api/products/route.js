import Stripe from "stripe";
import "@/envConfig.js";

const API_KEY = process.env.STRIPE_SECRET_KEY;
console.log("Stripe API Key loaded:", API_KEY ? "Yes" : "No");

const stripe = new Stripe(API_KEY, {
  apiVersion: "2023-10-16",
});

export async function GET() {
  try {
    console.log("Attempting to fetch Stripe products...");
    // fetch all the active products from stripe
    const products = await stripe.products.list({ active: true });
    console.log(
      "Products fetched successfully:",
      products.data.length,
      "products found"
    );
    console.log("First product:", JSON.stringify(products.data[0], null, 2));

    //fetch all the prices that are active
    const prices = await stripe.prices.list({ active: true });
    console.log(
      "Prices fetched successfully:",
      prices.data.length,
      "prices found"
    );
    console.log("First price:", JSON.stringify(prices.data[0], null, 2));

    //combine the products and their associated prices
    const combinedData = products.data.map((product) => {
      const productPrices = prices.data.filter((price) => {
        return price.product === product.id;
      });
      return {
        ...product,
        prices: productPrices.map((price) => {
          return {
            id: price.id,
            unit_amount: price.unit_amount,
            currency: price.currency,
            recurring: price.recurring,
          };
        }),
      };
    });

    console.log("Combined data:", JSON.stringify(combinedData[0], null, 2));
    return Response.json(combinedData);
  } catch (err) {
    console.error("Error fetching data from stripe:", err.message);
    console.error("Full error:", err);
    return Response.json({
      error: "Failed to fetch data from stripe",
      details: err.message,
    });
  }
}
