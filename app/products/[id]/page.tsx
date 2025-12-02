import GalleryImage from "@/components/GalleryImage";
import { PRODUCTS, Product } from "@/lib/data"; // Import data and types
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

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
  const categoryName = categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    // 1. Main Container: Dynamic background
    <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <section className="pt-40 pb-20 md:pb-32">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* --- BREADCRUMB --- */}
          <div className="mb-8 text-left">
            <Link href="/" className="text-gray-500 hover:text-accent transition-colors text-sm font-semibold">Home</Link>
            <span className="text-gray-400 mx-2 text-sm">/</span>
            <Link href={`/category/${categorySlug}`} className="text-gray-500 hover:text-accent transition-colors text-sm font-semibold">{categoryName}</Link>
            <span className="text-gray-400 mx-2 text-sm">/</span>
            <span className="text-gray-800 dark:text-gray-300 text-sm font-semibold transition-colors">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Product Image / Gallery */}
            {/* Container Border: Light gray in light mode, dark gray in dark mode */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
              <GalleryImage
                src={product.image}
                alt={product.name}
                placeholderSrc="https://placehold.co/800x800/000000/A3E635?text=Product+Image+Error"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-sm px-3 py-1 rounded-full text-accent font-semibold border border-accent/20 shadow-sm">
                In Stock
              </div>
            </div>

            {/* Right: Details and Action */}
            <div className="space-y-8">
              {/* TITLE: Black in Light, White in Dark */}
              <h1 className="text-5xl font-heading tracking-tight text-black dark:text-white transition-colors">{product.name}</h1>
              
              <div className="border-b border-gray-200 dark:border-gray-800 pb-6 transition-colors">
                {/* PRICE: Dynamic text color (or keep accent color if preferred) */}
                {/* Currently using 'text-accent' which is green, legible on both white and black */}
                <p className="text-4xl font-heading text-accent">${product.price}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">Free Shipping on orders over $50</p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                {/* SUBHEADER: Black in Light, White in Dark */}
                <h3 className="text-xl font-heading text-black dark:text-white transition-colors">Product Description</h3>
                {/* BODY TEXT: Gray-700 in Light, Gray-300 in Dark */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                  This custom item is precision-printed using high-grade eco-friendly PLA filament. 
                  Perfect for {categoryName.toLowerCase()}, it combines minimalist design with robust functionality. 
                  Fully customizable upon request.
                </p>
              </div>

              {/* Add To Cart Component */}
              <AddToCartButton product={product} />

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}