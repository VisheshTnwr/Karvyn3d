"use client";

import { useState } from "react";
import { useCart, CartItem } from "@/context/CartContext";
import { Product } from "@/lib/data";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Create the cart item object
    const item: CartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price), // Ensure price is a number
      image: product.image,
      quantity: quantity,
    };

    // Add to global state
    addItem(item);
    
    // Show "Added!" feedback for 2 seconds
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-4 space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <label htmlFor="quantity" className="text-white">
          Quantity:
        </label>
        <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
          >
            -
          </button>
          <span className="px-3 py-2 text-white font-mono w-8 text-center">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`w-full sm:w-80 px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-accent/50 ${
          isAdded
            ? "bg-green-500 text-white cursor-default"
            : "bg-accent text-black hover:bg-accent/90"
        }`}
      >
        {isAdded ? "ADDED TO CART!" : "ADD TO CART"}
      </button>
      
      <p className="text-sm text-gray-500">
        You are one step closer to bringing your idea to life.
      </p>
    </div>
  );
}