import GalleryImage from "@/components/GalleryImage";
import { PRODUCTS, Product } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product: Product | undefined = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const categorySlug = product.category;
  const categoryName = categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // --- LOGIC FOR RELATED PRODUCTS ---
  // 1. Filter products in the same category
  // 2. Remove the current product
  // 3. Take the first 3
  const relatedProducts = PRODUCTS
    .filter((p) => p.category === categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      
      {/* --- MAIN PRODUCT SECTION --- */}
      <section className="pt-40 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Breadcrumb */}
          <div className="mb-8 text-left">
            <Link href="/" className="text-gray-500 hover:text-accent transition-colors text-sm font-semibold">Home</Link>
            <span className="text-gray-400 mx-2 text-sm">/</span>
            <Link href={`/category/${categorySlug}`} className="text-gray-500 hover:text-accent transition-colors text-sm font-semibold">{categoryName}</Link>
            <span className="text-gray-400 mx-2 text-sm">/</span>
            <span className="text-gray-800 dark:text-gray-300 text-sm font-semibold transition-colors">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Product Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 transition-colors">
              <GalleryImage
                src={product.image}
                alt={product.name}
                placeholderSrc="https://placehold.co/800x800/000000/A3E635?text=Product+Image+Error"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-sm px-3 py-1 rounded-full text-accent font-semibold border border-accent/20 shadow-sm">
                In Stock
              </div>
            </div>

            {/* Right: Details */}
            <div className="space-y-8">
              <h1 className="text-5xl font-heading tracking-tight text-black dark:text-white transition-colors">{product.name}</h1>
              
              <div className="border-b border-gray-200 dark:border-gray-800 pb-6 transition-colors">
                <p className="text-4xl font-heading text-accent">${product.price}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">Free Shipping on orders over $50</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-heading text-black dark:text-white transition-colors">Product Description</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                  This custom item is precision-printed using high-grade eco-friendly PLA filament. 
                  Perfect for {categoryName.toLowerCase()}, it combines minimalist design with robust functionality. 
                  Fully customizable upon request.
                </p>
              </div>

              {/* Add To Cart Button */}
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: FEATURED / RELATED PRODUCTS SECTION --- */}
      {relatedProducts.length > 0 && (
        <section className="py-20 border-t border-gray-200 dark:border-gray-800 transition-colors">
          <div className="container mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-heading text-black dark:text-white mb-10 transition-colors">
              You Might Also Like
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <Link href={`/products/${related.id}`} key={related.id} className="group block">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    
                    <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-heading text-black dark:text-white mb-1 group-hover:text-accent transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 font-bold transition-colors">
                        ${related.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}