"use client";

import { useState, useEffect } from "react";
// 1. Import usePathname
import { usePathname } from "next/navigation";
import Link from "next/link"; // Ensure Link is imported if not already

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // 2. Get the current URL path

  // This hook handles the mobile menu toggle and scroll animations
  // 3. Add 'pathname' to the dependency array
  useEffect(() => {
    // Reset all fade-in sections every time the path changes
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      section.classList.remove("is-visible"); // Reset to invisible state
    });

    const menuButton = document.getElementById("mobile-menu-button");
    // const mobileMenu = document.getElementById("mobile-menu"); // Removed as we use state

    const handleMenuClick = () => {
      setIsMobileMenuOpen((prev) => !prev);
    };

    if (menuButton) {
      menuButton.addEventListener("click", handleMenuClick);
    }

    // 4. Re-establish the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup listeners
    return () => {
      if (menuButton) {
        menuButton.removeEventListener("click", handleMenuClick);
      }
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [pathname]); // <-- THE FIX: Rerun the effect when the URL path changes

  return (
    <body className="antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <nav className="container mx-auto max-w-7xl px-6 py-5 flex justify-between items-center">
          {/* ... HEADER NAVIGATION REMAINS THE SAME ... */}
          <Link
            href="/"
            className="text-2xl font-heading tracking-tighter text-white"
          >
            karvyn<span className="text-accent">3d</span>
          </Link>
          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-200 focus:outline-none p-2 rounded-lg bg-gray-900 border border-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#gallery"
              className="text-gray-300 hover:text-accent transition-colors"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-accent transition-colors"
            >
              About
            </a>
            <Link
              href="/category/personalized-gifts"
              className="text-gray-300 hover:text-accent transition-colors"
            >
              Store
            </Link>
            <a
              href="#store"
              className="px-6 py-3 text-sm font-bold text-black bg-accent rounded-xl shadow-lg hover-bg-accent transition-all"
            >
              Get Notified
            </a>
          </div>
        </nav>
        <div
          id="mobile-menu"
          className={`${
            isMobileMenuOpen ? "" : "hidden"
          } md:hidden px-6 pb-6 pt-3 space-y-3 bg-black/80 backdrop-blur-md`}
        >
          <a
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-accent transition-colors text-lg p-2"
          >
            Gallery
          </a>
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-accent transition-colors text-lg p-2"
          >
            About
          </a>
          <Link
            href="/category/personalized-gifts"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-accent transition-colors text-lg p-2"
          >
            Store
          </Link>
          <a
            href="#store"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-3 mt-2 text-lg font-bold text-black bg-accent rounded-xl shadow-lg hover-bg-accent transition-all"
          >
            Get Notified
          </a>
        </div>
      </header>

      {children}

      {/* FOOTER REMAINS THE SAME (using Link for correct navigation) */}
      <footer className="border-t border-gray-900 mt-24 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="md:col-span-1">
              <Link
                href="/"
                className="font-heading text-3xl text-white mb-4 inline-block"
              >
                karvyn<span className="text-accent">3d</span>
              </Link>
              <p className="text-gray-400 pr-4">
                Your ideas, printed. Custom 3D printing for gifts, home, and
                office.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-accent mb-4">MENU</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg text-accent mb-4">SHOP</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/category/personalized-gifts"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    Personalized Gifts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/home-decor"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    Home Decor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/office-gifting"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    Office & Gifting
                  </Link>
                </li>
                <li>
                  <a
                    href="#store"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    Store (Coming Soon)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg text-accent mb-4">SOCIALS</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-16 pt-8 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Karvyn3D. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </body>
  );
}
