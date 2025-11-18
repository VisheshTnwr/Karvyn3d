import GalleryImage from "@/components/GalleryImage";
import Link from "next/link"; // Import the Next.js Link component for fast navigation

export default function ProductsPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gray-900 border-b border-gray-800 pt-40 pb-20">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-heading tracking-tighter text-white mb-4">
            Our <span className="text-accent">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse our collection of custom 3D printed items. Each one is made with precision and care, just for you.
          </p>
        </div>
      </section>

      {/* Product Card Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* --- Product Card 1 --- */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 gallery-card">
              <GalleryImage 
                src="/images/gallery-1.jpg" // Use your real image path
                alt="Personalized 3D Print - Custom Keychain" 
                placeholderSrc="https://placehold.co/600x600/000000/A3E635?text=Image+Error"
                className="w-full h-80 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-heading text-white mb-2">Personalized Gifts</h3>
                <p className="text-3xl font-heading text-accent mb-4">$19.99</p>
                <Link href="/products/personalized-gifts" className="block w-full text-center px-6 py-3 font-bold text-black bg-accent rounded-xl shadow-lg hover-bg-accent transition-all">
                  View Product
                </Link>
              </div>
            </div>

            {/* --- Product Card 2 --- */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 gallery-card">
              <GalleryImage 
                src="/images/gallery-2.jpg" // Use your real image path
                alt="3D Printed Home Decor - Geometric Vase" 
                placeholderSrc="https://placehold.co/600x600/0a0a0a/A3E635?text=Image+Error"
                className="w-full h-80 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-heading text-white mb-2">Artsy Home Decor</h3>
                <p className="text-3xl font-heading text-accent mb-4">$34.99</p>
                <Link href="/products/artsy-home-decor" className="block w-full text-center px-6 py-3 font-bold text-black bg-accent rounded-xl shadow-lg hover-bg-accent transition-all">
                  View Product
                </Link>
              </div>
            </div>

            {/* --- Product Card 3 --- */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 gallery-card">
              <GalleryImage 
                src="/images/gallery-3.jpg" // Use your real image path
                alt="3D Printed Office Organizer - Phone Stand" 
                placeholderSrc="https://placehold.co/600x600/050505/A3E635?text=Image+Error"
                className="w-full h-80 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-heading text-white mb-2">Office & Gifting</h3>
                <p className="text-3xl font-heading text-accent mb-4">$24.99</p>
                <Link href="/products/office-gifting" className="block w-full text-center px-6 py-3 font-bold text-black bg-accent rounded-xl shadow-lg hover-bg-accent transition-all">
                  View Product
                </Link>
              </div>
            </div>

            {/* Add more cards here... */}

          </div>
        </div>
      </section>
    </main>
  );
}