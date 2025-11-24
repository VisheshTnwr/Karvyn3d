"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  // Use ref to track initial load to avoid hydration mismatch
  const isLoaded = useRef(false);

  // --- 1. Load Cart on Startup ---
  useEffect(() => {
    // Ensure we are on client side
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("karvyn_cart");
      
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          // Use setTimeout to avoid "setState during render" warnings in strict mode
          setTimeout(() => {
            setItems(parsedCart);
            isLoaded.current = true;
          }, 0);
        } catch (error) {
          console.error("Failed to parse cart:", error);
          isLoaded.current = true;
        }
      } else {
        isLoaded.current = true;
      }
    }
  }, []);

  // --- 2. Save Cart when items change ---
  useEffect(() => {
    // Only save if the initial load has finished to avoid overwriting with empty array
    if (isLoaded.current) {
      localStorage.setItem("karvyn_cart", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...currentItems, newItem];
    });
  };

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  // Safe calculations that won't crash if items is undefined
  const cartCount = (items || []).reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = (items || []).reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}