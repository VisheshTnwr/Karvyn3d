"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/lib/data";

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
    // 1. MAIN BACKGROUND
    <main className="bg-white dark:bg-black min-h-screen pt-32 pb-20 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading tracking-tighter mb-4 text-black dark:text-white transition-colors">
            THE <span className="text-accent">ARCHIVE.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto transition-colors">
            Explore our full collection of custom designs. Filter by category or find the perfect price point.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 p-6 bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm sticky top-24 z-30 transition-colors duration-300 shadow-sm">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                selectedCategory === "all"
                  ? "bg-accent text-black border-accent"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                  selectedCategory === cat.slug
                    ? "bg-accent text-black border-accent"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
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
                <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 h-full hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 flex flex-col">
                  <div className="relative overflow-hidden aspect-square bg-gray-100 dark:bg-gray-800">
                    {/* Product Image */}
                     <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* --- CATEGORY BADGE (Fixed) --- */}
                    {/* Light Mode: White/90 bg, Black text */}
                    {/* Dark Mode: Black/70 bg, Lime-400 (Green) text */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-md text-black dark:text-lime-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gray-200 dark:border-lime-400/20 shadow-sm">
                      {CATEGORIES.find(c => c.slug === product.category)?.name}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-heading text-black dark:text-white group-hover:text-accent transition-colors">{product.name}</h3>
                    </div>
                    <div className="flex justify-between items-center mt-auto pt-4">
                       <p className="text-2xl font-heading text-gray-700 dark:text-gray-200 transition-colors">${product.price}</p>
                       <span className="text-sm font-bold text-white bg-black dark:text-black dark:bg-white px-4 py-2 rounded-lg group-hover:bg-accent group-hover:text-black transition-colors shadow-sm">
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
            <h3 className="text-2xl font-heading text-gray-400 dark:text-gray-500 transition-colors">No products found.</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 transition-colors">Try changing your filters.</p>
            <button 
              onClick={() => {setSelectedCategory('all'); setSortBy('featured')}}
              className="mt-6 text-accent underline hover:text-black dark:hover:text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}