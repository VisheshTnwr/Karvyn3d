"use client";

import { useState, useMemo } from "react";
import GalleryImage from "@/components/GalleryImage";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import Link from "next/link";

export default function StorePage() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured"); // featured, price-low, price-high

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Filter by Category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 2. Sort by Price
    if (sortBy === "price-low") {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === "price-high") {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-20">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading tracking-tighter mb-4">
            THE <span className="text-accent">ARCHIVE.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Explore our full collection of custom designs. Filter by category or find the perfect price point.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm sticky top-24 z-30">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-accent text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat.slug
                    ? "bg-accent text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-gray-400 text-sm font-medium">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="group block">
                <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 h-full hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
                  <div className="relative">
                    <GalleryImage
                      src={product.image}
                      alt={product.name}
                      placeholderSrc="https://placehold.co/600x600/000000/A3E635?text=Image+Error"
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-accent/20">
                      {CATEGORIES.find(c => c.slug === product.category)?.name}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-heading text-white group-hover:text-accent transition-colors">{product.name}</h3>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                       <p className="text-2xl font-heading text-gray-200">${product.price}</p>
                       <span className="text-sm font-bold text-black bg-white px-4 py-2 rounded-lg group-hover:bg-accent transition-colors">
                         View
                       </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-heading text-gray-500">No products found.</h3>
            <p className="text-gray-400 mt-2">Try changing your filters.</p>
            <button 
              onClick={() => {setSelectedCategory('all'); setSortBy('featured')}}
              className="mt-6 text-accent underline hover:text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}