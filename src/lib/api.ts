export async function fetchProducts() {
  const baseUrl = process.env.API_GATEWAY_URL;

  if (!baseUrl) {
    throw new Error("API_GATEWAY_URL is not defined");
  }

  const res = await fetch(`${baseUrl}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
