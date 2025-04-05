const Stripe = require("stripe");

async function generateStaticCheckoutUrls() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const products = await stripe.products.list({ active: true });
  const prices = await stripe.prices.list({ active: true });

  // Generate a mock checkout URL for each product
  const checkoutUrls = {};

  for (const product of products.data) {
    const productPrices = prices.data.filter(
      (price) => price.product === product.id
    );
    if (productPrices.length > 0) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{ price: productPrices[0].id, quantity: 1 }],
        mode: "payment",
        success_url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/success`,
        cancel_url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/cart`,
      });
      checkoutUrls[productPrices[0].id] = session.url;
    }
  }

  // Output to a file
  require("fs").writeFileSync(
    "./public/static-checkout-urls.json",
    JSON.stringify(checkoutUrls, null, 2)
  );

  console.log("Generated static checkout URLs");
}

generateStaticCheckoutUrls().catch(console.error);
