import GalleryImage from "@/components/GalleryImage";
import { PRODUCTS, Product } from "@/lib/data"; // Import data and types
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{
    id: string; // The product ID (e.g., "prod_1")
  }>;
};

// Server component to fetch the single product details
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  // Find the product in our mock database
  const product: Product | undefined = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Determine the correct category link for the breadcrumb
  const categorySlug = product.category;
  const categoryName = categorySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main>
      <section className="pt-40 pb-20 md:pb-32">
        <div className="container mx-auto max-w-7xl px-6">
          {/* --- BREADCRUMB --- */}
          <div className="mb-8 text-left">
            <Link
              href="/"
              className="text-gray-500 hover:text-accent transition-colors text-sm font-semibold"
            >
              Home
            </Link>
            <span className="text-gray-500 mx-2 text-sm">/</span>
            <Link
              href={`/category/${categorySlug}`}
              className="text-gray-500 hover:text-accent transition-colors text-sm font-semibold"
            >
              {categoryName}
            </Link>
            <span className="text-gray-500 mx-2 text-sm">/</span>
            <span className="text-gray-300 text-sm font-semibold">
              {product.name}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Product Image / Gallery */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <GalleryImage
                src={product.image}
                alt={product.name}
                placeholderSrc="https://placehold.co/800x800/000000/A3E635?text=Product+Image+Error"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-gray-900/70 text-sm px-3 py-1 rounded-full text-accent font-semibold border border-gray-700">
                In Stock
              </div>
            </div>

            {/* Right: Details and Action */}
            <div className="space-y-8">
              <h1 className="text-5xl font-heading tracking-tight text-white">
                {product.name}
              </h1>

              <div className="border-b border-gray-800 pb-6">
                <p className="text-4xl font-heading text-accent">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Free Shipping on orders over $50
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading text-white">
                  Product Description
                </h3>
                <p className="text-gray-300">
                  This custom item is precision-printed using high-grade
                  eco-friendly PLA filament. Perfect for{" "}
                  {categoryName.toLowerCase()}, it combines minimalist design
                  with robust functionality. Fully customizable upon request.
                </p>
              </div>

              {/* Purchase Options (Placeholder for "Add to Cart" before we implement context) */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center space-x-4">
                  <label htmlFor="quantity" className="text-white">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    defaultValue="1"
                    min="1"
                    className="w-20 p-2 text-black bg-gray-200 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* When we implement the shopping cart, this button will call the addItemToCart function */}
                <button className="w-full sm:w-80 px-8 py-4 text-lg font-bold text-black bg-accent rounded-xl shadow-lg hover-bg-accent transition-all transform hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-accent/50">
                  ADD TO CART
                </button>
                <p className="text-sm text-gray-500">
                  You are one step closer to bringing your idea to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
