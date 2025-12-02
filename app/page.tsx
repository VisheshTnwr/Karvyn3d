"use client";

import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="min-h-screen hero-glow flex items-center relative pt-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left z-10"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading tracking-tighter text-black dark:text-white mb-8 leading-[0.9] transition-colors">
                YOUR<br />
                IDEAS.<br />
                <span className="text-accent">PRINTED.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-10 transition-colors">
                Don&apos;t just buy products. Create them. High-precision 3D printing for visionaries, creators, and gift-givers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link href="/store" className="px-10 py-4 text-lg font-bold text-black bg-accent rounded-xl shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_40px_rgba(163,230,53,0.6)] hover:scale-105 transition-all duration-300">
                  Shop All Products
                </Link>
                <Link href="#gallery" className="px-10 py-4 text-lg font-bold text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 hover:border-accent hover:text-accent transition-all duration-300">
                  Explore Gallery
                </Link>
              </div>
            </motion.div>

            {/* Animated Graphic - FIXED: Uses the Stable Design + Dynamic Colors */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-96 flex items-center justify-center relative"
            >
               <svg className="w-full h-full max-w-md" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 180 H170" stroke="#4B5563" strokeWidth="4" strokeLinecap="round"/>
                <path d="M40 180 V50" stroke="#4B5563" strokeWidth="4" strokeLinecap="round"/>
                <path d="M160 180 V50" stroke="#4B5563" strokeWidth="4" strokeLinecap="round"/>
                <path d="M40 50 H160" stroke="#4B5563" strokeWidth="4" strokeLinecap="round"/>
                <rect x="50" y="160" width="100" height="10" fill="#374151"/>
                <rect x="30" y="80" width="140" height="10" fill="#374151" rx="2"/>
                <g className="animate-print-head">
                  <rect x="85" y="80" width="30" height="30" fill="#A3E635" rx="2"/>
                  <path d="M100 110 L95 120 H105 Z" fill="#84CC16"/>
                </g>
                <g className="animate-print-object" style={{ transformOrigin: '100px 160px' }}>
                  <path d="M80 160 L70 140 H130 L120 160 H80 Z" fill="#A3E635" fillOpacity="0.8" stroke="#A3E635" strokeWidth="2"/>
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. INFINITE SCROLL --- */}
      <Marquee />

      {/* --- 3. BENTO GRID GALLERY --- */}
      <section id="gallery" className="py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center md:text-left">
             <h2 className="text-4xl md:text-6xl font-heading text-black dark:text-white mb-4 transition-colors">CURATED <span className="text-accent">COLLECTIONS.</span></h2>
             <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">Dive into our most popular categories.</p>
          </div>
          
          <BentoGrid className="max-w-7xl mx-auto">
            
            <BentoGridItem
              link="/category/personalized-gifts"
              title="Personalized Gifts"
              description="Keychains, nameplates, and memories made tangible."
              className="md:col-span-2 md:row-span-2 min-h-[300px]"
              header={<SkeletonImage src="/images/ps5 keychain.jpg" />}
            />

            <BentoGridItem
              link="/category/home-decor"
              title="Artsy Home Decor"
              description="Minimalist vases and geometric planters."
              className="md:col-span-1"
              header={<SkeletonImage src="/images/trio.jpg" />}
            />

            <BentoGridItem
              link="/category/office-gifting"
              title="Office & Gifting"
              description="Upgrade your workspace."
              className="md:col-span-1"
              header={<SkeletonImage src="/images/phone stand.jpg" />}
            />

            <BentoGridItem
              link="/category/home-decor"
              title="Bespoke Clocks"
              description="Timepieces designed for your specific aesthetic."
              className="md:col-span-2"
              header={<SkeletonImage src="/images/clock.jpg" />}
            />
             
             <BentoGridItem
              link="/category/personalized-gifts"
              title="Photo Lithophanes"
              description="Your photos turned into light."
              className="md:col-span-1"
              header={<SkeletonImage src="/images/lithofane.png" />}
            />
             <BentoGridItem
              link="/category/office-gifting"
              title="Desk Plates"
              description="Professional branding."
              className="md:col-span-1"
              header={<SkeletonImage src="/images/nameplate.webp" />}
            />
             <BentoGridItem
              link="/store"
              title="Browse All"
              description="See the full archive ->"
              className="md:col-span-1 bg-accent group-hover/bento:bg-accent/90 cursor-pointer relative overflow-hidden"
              header={
                <div className="h-full w-full flex flex-col items-center justify-center text-black z-10 relative">
                  <span className="font-heading text-5xl font-black">+</span>
                  <span className="font-bold text-sm uppercase tracking-widest mt-2">Shop Now</span>
                </div>
              }
            />

          </BentoGrid>
        </div>
      </section>

      {/* --- 4. ABOUT SECTION --- */}
      <section id="about" className="py-24 md:py-40 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl px-6 text-center fade-in-section">
          <h2 className="text-5xl md:text-7xl font-heading text-black dark:text-white mb-6 transition-colors">
            CRAFTED WITH<br />
            <span className="text-accent">PRECISION.</span>
          </h2>
          <div className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto space-y-6 leading-relaxed transition-colors">
            <p>
              Karvyn3D isn&apos;t a giant factory. We&apos;re a design studio
              obsessed with quality and detail. We live for that moment an idea
              on a screen becomes a real, tangible object.
            </p>
            <p>
              We believe 3D printing is the future of personalization.
              We&apos;re here to help you create that one-of-a-kind piece you
              can&apos;t find anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* --- 5. STORE CTA SECTION --- */}
      <section id="store" className="py-24 md:py-40 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left fade-in-section">
              <h2 className="text-5xl md:text-7xl font-heading text-black dark:text-white mb-6 transition-colors">
                READY TO<br />
                <span className="text-accent">BUY?</span>
              </h2>
              <div className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 space-y-6 leading-relaxed mb-12 transition-colors">
                <p>
                  Our full catalogue is live. Browse our custom collections, filter by price, and find the perfect item for your space.
                </p>
                <p>
                  Shipping worldwide. Custom orders available upon request.
                </p>
              </div>
              <Link
                href="/store"
                className="inline-block px-12 py-5 text-xl font-bold text-black bg-accent rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_50px_rgba(163,230,53,0.5)] hover:scale-105 transition-all transform"
              >
                Visit The Store
              </Link>
            </div>

            {/* Floating Boxes Graphic (Corrected Colors) */}
            <div className="w-full h-96 hidden md:flex items-center justify-center p-10 fade-in-section relative min-h-[400px]">
               <svg className="absolute w-0 h-0">
                <defs>
                  <g id="closed-box">
                    <path d="M10 40 L50 20 L90 40 L50 60 L10 40 Z" className="fill-gray-200 dark:fill-gray-700 stroke-gray-400 dark:stroke-gray-600 transition-colors" strokeWidth="2"/>
                    <path d="M10 40 V80 L50 100 V60 L10 40 Z" className="fill-gray-300 dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-600 transition-colors" strokeWidth="2"/>
                    <path d="M50 60 V100 L90 80 V40 L50 60 Z" className="fill-gray-400 dark:fill-gray-900 stroke-gray-400 dark:stroke-gray-600 transition-colors" strokeWidth="2"/>
                    <path d="M50 20 L50 60" className="stroke-accent" strokeWidth="3" strokeDasharray="5 3" />
                  </g>
                  <g id="open-box-glow">
                    <path d="M10 40 L50 20 L90 40 L50 60 L10 40 Z" className="fill-accent/10 animate-pulse" style={{ animation: 'subtle-glow 3s infinite ease-in-out' }}/>
                    <path d="M10 40 V80 L50 100 V60 L10 40 Z" className="fill-gray-300 dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-600 transition-colors" strokeWidth="2"/>
                    <path d="M50 60 V100 L90 80 V40 L50 60 Z" className="fill-gray-400 dark:fill-gray-900 stroke-gray-400 dark:stroke-gray-600 transition-colors" strokeWidth="2"/>
                    <path d="M10 40 L50 20 L90 40 L50 60 L10 40 Z" className="fill-gray-200/50 dark:fill-gray-700/50 stroke-gray-400 dark:stroke-gray-600 transition-colors" strokeWidth="2"/>
                    <path d="M10 40 L50 20 L50 0 L10 20 Z" className="fill-gray-200 dark:fill-gray-700 stroke-gray-400 dark:stroke-gray-600 transition-colors" strokeWidth="2" style={{ transform: 'rotateX(-20deg) rotateY(10deg)', transformOrigin: '10px 40px' }}/>
                    <path d="M50 20 L90 40 L90 20 L50 0 Z" className="fill-gray-300 dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-600 transition-colors" strokeWidth="2" style={{ transform: 'rotateX(-20deg) rotateY(-10deg)', transformOrigin: '90px 40px' }}/>
                  </g>
                </defs>
              </svg>
              <svg className="w-32 h-32 absolute top-10 left-20 -rotate-12" viewBox="0 0 100 100"> <use href="#closed-box" /> </svg>
              <svg className="w-48 h-48 absolute top-20 right-10 animate-float" style={{ animation: 'subtle-float 4s infinite ease-in-out' }} viewBox="0 0 100 100"> <use href="#open-box-glow" /> </svg>
              <svg className="w-40 h-40 absolute bottom-5 left-10 rotate-6" viewBox="0 0 100 100"> <use href="#closed-box" /> </svg>
              <svg className="w-28 h-28 absolute bottom-40 left-40 rotate-3" viewBox="0 0 100 100"> <use href="#closed-box" /> </svg>
              <svg className="w-24 h-24 absolute bottom-10 right-32 -rotate-3" viewBox="0 0 100 100"> <use href="#closed-box" /> </svg>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// Helper component for the images inside the bento grid
const SkeletonImage = ({ src }: { src: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-transparent bg-gray-100 dark:bg-gray-900 transition-colors">
    <Image 
      src={src} 
      width={500} 
      height={500} 
      alt="product" 
      className="w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-110"
    />
  </div>
);