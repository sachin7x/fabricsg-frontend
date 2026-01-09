export async function fetchProducts() {
  const res = await fetch(
    `${process.env.API_GATEWAY_URL}/products`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}
