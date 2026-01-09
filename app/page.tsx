import { fetchProducts } from '@/lib/api';

export default async function Page() {
  const products = await fetchProducts();

  return (
    <pre>{JSON.stringify(products, null, 2)}</pre>
  );
}
