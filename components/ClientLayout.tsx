"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import ThemeToggle from "@/components/ThemeToggle";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const pathname = usePathname();
  const { cartCount } = useCart();

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
    <>
      {/* Header: Light mode = White/80, Dark mode = Black/80 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <nav className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-heading tracking-tighter text-black dark:text-white transition-colors">
            karvyn<span className="text-accent">3d</span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button id="mobile-menu-button" className="md:hidden text-gray-600 dark:text-gray-200 p-2 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href={galleryLink} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">Gallery</a>
              <a href={aboutLink} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">About</a>
              
              {/* --- EYE-CATCHING STORE BUTTON --- */}
              <Link 
                href={storeLink} 
                className="px-6 py-2 text-black font-bold bg-accent rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(163,230,53,0.4)]"
              >
                Store
              </Link>
              {/* --------------------------------- */}
            </div>
            
            <div className="flex items-center gap-2 pl-2 border-l border-gray-300 dark:border-gray-700 transition-colors">
               {/* THEME TOGGLE */}
               <ThemeToggle />

               {/* Cart Button */}
               <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-accent transition-colors"
                aria-label="Cart"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white dark:border-black">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`${isMobileMenuOpen ? "" : "hidden"} md:hidden px-6 pb-6 pt-3 space-y-3 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 transition-colors`}>
          <a href={galleryLink} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 dark:text-gray-300 hover:text-accent p-3 text-lg">Gallery</a>
          <a href={aboutLink} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 dark:text-gray-300 hover:text-accent p-3 text-lg">About</a>
          
          {/* Mobile Store Button */}
          <Link href={storeLink} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center text-black bg-accent font-bold p-3 rounded-xl mt-4 shadow-[0_0_15px_rgba(163,230,53,0.4)]">
            Visit Store
          </Link>
        </div>
      </header>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {children}

      <footer className="border-t border-gray-200 dark:border-gray-900 mt-24 py-20 md:py-28 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="font-heading text-3xl text-black dark:text-white mb-4 inline-block transition-colors">
                karvyn<span className="text-accent">3d</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 pr-4 transition-colors">Your ideas, printed. Custom 3D printing for gifts, home, and office.</p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-accent mb-4">MENU</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">Home</Link></li>
                <li><a href={galleryLink} className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">Gallery</a></li>
                <li><a href={aboutLink} className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg text-accent mb-4">SHOP</h4>
              <ul className="space-y-3">
                <li><Link href="/category/personalized-gifts" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">Personalized Gifts</Link></li>
                <li><Link href="/category/home-decor" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">Home Decor</Link></li>
                <li><Link href="/category/office-gifting" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">Office & Gifting</Link></li>
                <li><Link href={storeLink} className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">Store</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg text-accent mb-4">SOCIALS</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">FaceBook</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">YouTube</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-900 mt-16 pt-8 text-center text-gray-500 dark:text-gray-500 transition-colors">
            <p>&copy; {new Date().getFullYear()} Karvyn3D. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}