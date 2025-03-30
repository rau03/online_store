import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  try {
    console.log("Fetching products from API...");
    const response = await fetch("http://localhost:3001/api/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    console.log("Products fetched successfully:", products.length);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Home(props) {
  const products = await getProducts();
  console.log("Products in Home component:", products.length);

  return (
    <>
      <ImageBanner />
      <section>
        <Products />
      </section>
    </>
  );
}
