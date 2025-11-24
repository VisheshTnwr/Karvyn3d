"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext"; // <-- Import Cart Hook
import CartDrawer from "@/components/CartDrawer"; // <-- Import Cart Drawer

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // <-- State for Cart Drawer
  
  const pathname = usePathname();
  const { cartCount } = useCart(); // <-- Get cart count from context

  // Navigation Logic
  const isHomePage = pathname === "/";
  const galleryLink = isHomePage ? "#gallery" : "/#gallery";
  const aboutLink = isHomePage ? "#about" : "/#about";
  const storeLink = "/store"; 

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      section.classList.remove("is-visible");
    });

    const menuButton = document.getElementById("mobile-menu-button");
    const handleMenuClick = () => setIsMobileMenuOpen((prev) => !prev);

    if (menuButton) menuButton.addEventListener("click", handleMenuClick);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      if (menuButton) menuButton.removeEventListener("click", handleMenuClick);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  return (
    <body className="antialiased">
      {/* Add the Drawer Component here. It stays hidden until isOpen is true */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <nav className="container mx-auto max-w-7xl px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading tracking-tighter text-white">
            karvyn<span className="text-accent">3d</span>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            
            {/* Mobile Menu Button */}
            <button id="mobile-menu-button" className="md:hidden text-gray-200 p-2 rounded-lg bg-gray-900 border border-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href={galleryLink} className="text-gray-300 hover:text-accent transition-colors">Gallery</a>
              <a href={aboutLink} className="text-gray-300 hover:text-accent transition-colors">About</a>
              <Link href={storeLink} className="text-gray-300 hover:text-accent transition-colors">Store</Link>
            </div>
            
            {/* --- CART BUTTON (Visible on Mobile & Desktop) --- */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-300 hover:text-accent transition-colors group"
              aria-label="Open Cart"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              
              {/* Badge Count (Only shows if items exist) */}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md border border-black">
                  {cartCount}
                </span>
              )}
            </button>
             {/* --- END CART BUTTON --- */}

          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div id="mobile-menu" className={`${isMobileMenuOpen ? "" : "hidden"} md:hidden px-6 pb-6 pt-3 space-y-3 bg-black/80 backdrop-blur-md`}>
          <a href={galleryLink} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-accent p-2">Gallery</a>
          <a href={aboutLink} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-accent p-2">About</a>
          <Link href={storeLink} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-accent p-2">Store</Link>
        </div>
      </header>
      
      {children}

      <footer className="border-t border-gray-900 mt-24 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="font-heading text-3xl text-white mb-4 inline-block">
                karvyn<span className="text-accent">3d</span>
              </Link>
              <p className="text-gray-400 pr-4">Your ideas, printed. Custom 3D printing for gifts, home, and office.</p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-accent mb-4">MENU</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-accent">Home</Link></li>
                <li><a href={galleryLink} className="text-gray-400 hover:text-accent">Gallery</a></li>
                <li><a href={aboutLink} className="text-gray-400 hover:text-accent">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg text-accent mb-4">SHOP</h4>
              <ul className="space-y-3">
                <li><Link href="/category/personalized-gifts" className="text-gray-400 hover:text-accent">Personalized Gifts</Link></li>
                <li><Link href="/category/home-decor" className="text-gray-400 hover:text-accent">Home Decor</Link></li>
                <li><Link href="/category/office-gifting" className="text-gray-400 hover:text-accent">Office & Gifting</Link></li>
                <li><Link href={storeLink} className="text-gray-400 hover:text-accent">Store</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg text-accent mb-4">SOCIALS</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-accent">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent">TikTok</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent">YouTube</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-16 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Karvyn3D. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </body>
  );
}