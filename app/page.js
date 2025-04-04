import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  try {
    console.log("Fetching products from API...");
    const response = await fetch(
      new URL(
        "/api/products",
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      )
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  // Separate planner and stickers from the products array
  let planner = null;
  let stickers = [];
  if (Array.isArray(products)) {
    planner = products.find((p) => p.name === "Medieval Dragon Month Planner");
    stickers = products.filter(
      (p) => p.name !== "Medieval Dragon Month Planner"
    );
  }

  return (
    <main>
      <ImageBanner />
      {/* Pass planner and stickers as separate props */}
      <Products planner={planner} stickers={stickers} />
    </main>
  );
}
