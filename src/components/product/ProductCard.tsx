type Product = {
  PK: string;
  name: string;
  price?: number;
  pricePerMeter?: number;
  category?: string;
  width?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{product.name}</h3>

      {product.category && (
        <p className="text-sm text-gray-500">{product.category}</p>
      )}

      <p className="mt-2 text-xl font-bold">
        ₹{product.pricePerMeter ?? product.price}
        <span className="text-sm font-normal text-gray-600">
          {" "}
          / meter
        </span>
      </p>

      {product.width && (
        <p className="text-sm text-gray-600 mt-1">
          Width: {product.width}
        </p>
      )}

      <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        View Details
      </button>
    </div>
  );
}
