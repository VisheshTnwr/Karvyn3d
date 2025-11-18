import GalleryImage from "@/components/GalleryImage";
import { CATEGORIES, PRODUCTS } from "@/lib/data"; // Import our mock data
import Link from "next/link";
import { notFound } from "next/navigation"; 

// In Next.js 15+, params is a Promise
type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// This is a Server Component, so we can make it async
export default async function CategoryPage({ params }: CategoryPageProps) {
  // 1. AWAIT the params to get the slug (THE CRITICAL FIX)
  const { slug } = await params;

  // 2. Find the category data
  const category = CATEGORIES.find((cat) => cat.slug === slug);

  // 3. If no category is found, show a 404 page
  if (!category) {
    notFound();
  }

  // 4. Find all products that match this category
  const products = PRODUCTS.filter((product) => product.category === slug);

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gray-900 border-b border-gray-800 pt-40 pb-20">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          
          {/* --- NEW BREADCRUMB ELEMENT --- */}
          <div className="mb-4 text-center">
            <Link href="/" className="text-gray-500 hover:text-accent transition-colors text-sm font-semibold">
              Home
            </Link>
            <span className="text-gray-500 mx-2 text-sm">/</span>
            <span className="text-gray-300 text-sm font-semibold">{category.name}</span>
          </div>
          {/* --- END BREADCRUMB --- */}

          <h1 className="text-6xl md:text-8xl font-heading tracking-tighter text-white mb-4">
            <span className="text-accent">{category.name}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                <div key={product.id} className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 gallery-card">
                  <GalleryImage
                    src={product.image}
                    alt={product.name}
                    placeholderSrc="https://placehold.co/600x600/000000/A3E635?text=Image+Error"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-heading text-white mb-2">{product.name}</h3>
                    <p className="text-3xl font-heading text-accent mb-4">${product.price}</p>
                    <Link href={`/products/${product.id}`} className="block w-full text-center px-6 py-3 font-bold text-black bg-accent rounded-xl shadow-lg hover-bg-accent transition-all">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-heading text-white mb-4">More Products Coming Soon</h2>
              <p className="text-lg text-gray-400 mb-8">This category is currently empty. Check back soon!</p>
              <Link href="/" className="px-10 py-4 text-lg font-bold text-black bg-accent rounded-xl shadow-lg hover-bg-accent transition-all">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}