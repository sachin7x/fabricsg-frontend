import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/product/ProductCard";

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">All Fabrics</h1>

      {products.length === 0 ? (
        <p>No fabrics available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard key={product.PK} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
