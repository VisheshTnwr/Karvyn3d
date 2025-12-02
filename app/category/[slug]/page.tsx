import GalleryImage from "@/components/GalleryImage";
import { CATEGORIES, PRODUCTS } from "@/lib/data"; 
import Link from "next/link";
import { notFound } from "next/navigation"; 

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = CATEGORIES.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const products = PRODUCTS.filter((product) => product.category === slug);

  return (
    // 1. MAIN CONTAINER: Dynamic Background
    <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      
      {/* Page Header: Light Gray in Light Mode, Dark Gray in Dark Mode */}
      <section className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 pt-40 pb-20 transition-colors">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          
          {/* --- BREADCRUMB --- */}
          <div className="mb-4 text-center">
            <Link href="/" className="text-gray-500 hover:text-accent transition-colors text-sm font-semibold">
              Home
            </Link>
            <span className="text-gray-400 mx-2 text-sm">/</span>
            <span className="text-gray-900 dark:text-gray-300 text-sm font-semibold transition-colors">{category.name}</span>
          </div>

          {/* CATEGORY TITLE: Dynamic Text */}
          <h1 className="text-6xl md:text-8xl font-heading tracking-tighter text-black dark:text-white mb-4 transition-colors">
            <span className="text-accent">{category.name}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            {category.description}
          </p>
        </div>
      </section>

      {/* Product Card Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                // CARD CONTAINER: White in Light, Dark Gray in Dark
                <div key={product.id} className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 group">
                  
                  {/* Image Container */}
                  <div className="relative h-80 w-full bg-gray-100 dark:bg-gray-800">
                    <GalleryImage
                      src={product.image}
                      alt={product.name}
                      placeholderSrc="https://placehold.co/600x600/000000/A3E635?text=Image+Error"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    {/* PRODUCT NAME: Dynamic Text */}
                    <h3 className="text-2xl font-heading text-black dark:text-white mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex justify-between items-center mt-4">
                       {/* PRICE: Dynamic Text */}
                       <p className="text-3xl font-heading text-accent mb-0">${product.price}</p>
                       
                       {/* VIEW BUTTON: Dynamic Background/Text */}
                       <Link href={`/products/${product.id}`} className="px-6 py-2 text-sm font-bold text-white bg-black dark:text-black dark:bg-white rounded-xl hover:bg-accent hover:text-black transition-colors shadow-md">
                         View Details
                       </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-3xl font-heading text-gray-400 dark:text-gray-500 mb-4 transition-colors">More Products Coming Soon</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 transition-colors">This category is currently empty. Check back soon!</p>
              <Link href="/" className="px-10 py-4 text-lg font-bold text-white bg-black dark:text-black dark:bg-white rounded-xl shadow-lg hover:bg-accent hover:text-black transition-all">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}