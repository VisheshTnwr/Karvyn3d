import GalleryImage from "@/components/GalleryImage";
import Link from "next/link"; // <-- Make sure Link is imported

export default function Home() {
  return (
    <main>
      {/* --- Hero Section --- */}
      <section className="min-h-screen hero-glow flex items-center pt-32 pb-20 md:pt-20 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading tracking-tighter text-white mb-8">
                YOUR
                <br />
                IDEAS.
                <br />
                <span className="text-accent">PRINTED.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
                Custom 3D printing for gifts, home, and office. If you can think
                it, we can make it.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a
                  href="#gallery"
                  className="px-10 py-4 text-lg font-bold text-black bg-accent rounded-xl shadow-lg hover-bg-accent transition-all"
                >
                  See Our Work
                </a>
                <a
                  href="#store"
                  className="px-10 py-4 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all border border-gray-800"
                >
                  Get Notified
                </a>
              </div>
            </div>

            <div className="w-full h-96 flex items-center justify-center p-10 min-h-[300px] relative">
              <svg
                className="w-full h-full max-w-md"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 180 H170"
                  stroke="#4B5563"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M40 180 V50"
                  stroke="#4B5563"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M160 180 V50"
                  stroke="#4B5563"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M40 50 H160"
                  stroke="#4B5563"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <rect x="50" y="160" width="100" height="10" fill="#374151" />
                <rect
                  x="30"
                  y="80"
                  width="140"
                  height="10"
                  fill="#374151"
                  rx="2"
                />
                <g className="animate-print-head">
                  <rect
                    x="85"
                    y="80"
                    width="30"
                    height="30"
                    fill="#A3E635"
                    rx="2"
                  />
                  <path d="M100 110 L95 120 H105 Z" fill="#84CC16" />
                </g>
                <g
                  className="animate-print-object"
                  style={{ transformOrigin: "100px 160px" }}
                >
                  <path
                    d="M80 160 L70 140 H130 L120 160 H80 Z"
                    fill="#A3E635"
                    fillOpacity="0.8"
                    stroke="#A3E635"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-24 md:py-40">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section">
            <h2 className="text-5xl md:text-7xl font-heading text-white mb-6">
              ALL THE THINGS
              <br />
              WE <span className="text-accent">MAKE.</span>
            </h2>
            <p className="text-xl text-gray-400 mt-6">
              Just a handful of our creations. From personalized gifts to
              stylish home decor, we bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* --- Item 1: Personalized --- */}
            <Link
              href="/category/personalized-gifts"
              className="block gallery-card"
            >
              <div className="bg-gray-900 rounded-3xl overflow-hidden fade-in-section border border-gray-800 h-full">
                <GalleryImage
                  src="/images/ps5 keychain.jpg"
                  alt="Personalized 3D Print - Custom Keychain"
                  placeholderSrc="https://placehold.co/600x600/000000/A3E635?text=Image+Error"
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-white mb-2">
                    Personalized Gifts
                  </h3>
                  <p className="text-gray-400">
                    Custom keychains, nameplates, and unique mementos for every
                    occasion.
                  </p>
                </div>
              </div>
            </Link>

            {/* --- Item 2: Home Decor --- */}
            <Link href="/category/home-decor" className="block gallery-card">
              <div className="bg-gray-900 rounded-3xl overflow-hidden fade-in-section border border-gray-800 h-full">
                <GalleryImage
                  src="/images/trio.jpg"
                  alt="3D Printed Home Decor - Geometric Vase"
                  placeholderSrc="https://placehold.co/600x800/0a0a0a/A3E635?text=Image+Error"
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-white mb-2">
                    Artsy Home Decor
                  </h3>
                  <p className="text-gray-400">
                    Minimalist vases, geometric planters, and abstract
                    sculptures to elevate your space.
                  </p>
                </div>
              </div>
            </Link>

            {/* --- Item 3: Office --- */}
            <Link
              href="/category/office-gifting"
              className="block gallery-card"
            >
              <div className="bg-gray-900 rounded-3xl overflow-hidden fade-in-section border border-gray-800 h-full">
                <GalleryImage
                  src="/images/phone stand.jpg"
                  alt="3D Printed Office Organizer - Phone Stand"
                  placeholderSrc="https://placehold.co/600x500/050505/A3E635?text=Image+Error"
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-white mb-2">
                    Office & Gifting
                  </h3>
                  <p className="text-gray-400">
                    Stylish desk organizers, phone stands, unique boxes, and
                    custom clocks.
                  </p>
                </div>
              </div>
            </Link>

            {/* --- Item 4: More Decor --- */}
            <Link href="/category/home-decor" className="block gallery-card">
              <div className="bg-gray-900 rounded-3xl overflow-hidden fade-in-section border border-gray-800 h-full">
                <GalleryImage
                  src="/images/clock.jpg"
                  alt="3D Printed Custom Clock"
                  placeholderSrc="https://placehold.co/600x700/0f0f0f/A3E635?text=Image+Error"
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-white mb-2">
                    Bespoke Clocks
                  </h3>
                  <p className="text-gray-400">
                    Functional art. We design and print custom clocks to match
                    your exact style.
                  </p>
                </div>
              </div>
            </Link>

            {/* --- Item 5: Lithophanes --- */}
            <Link
              href="/category/personalized-gifts"
              className="block gallery-card"
            >
              <div className="bg-gray-900 rounded-3xl overflow-hidden fade-in-section border border-gray-800 h-full">
                <GalleryImage
                  src="/images/lithofane.png"
                  alt="3D Printed Custom Lithophane"
                  placeholderSrc="https://placehold.co/600x600/080808/A3E635?text=Image+Error"
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-white mb-2">
                    Photo Lithophanes
                  </h3>
                  <p className="text-gray-400">
                    Turn your memories into glowing 3D photos. The perfect
                    heartfelt gift.
                  </p>
                </div>
              </div>
            </Link>

            {/* --- Item 6: Desk Nameplates --- */}
            <Link
              href="/category/office-gifting"
              className="block gallery-card"
            >
              <div className="bg-gray-900 rounded-3xl overflow-hidden fade-in-section border border-gray-800 h-full">
                <GalleryImage
                  src="/images/nameplate.webp"
                  alt="3D Printed Desk Nameplate"
                  placeholderSrc="https://placehold.co/600x400/0c0c0c/A3E635?text=Image+Error"
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-white mb-2">
                    Custom Desk Plates
                  </h3>
                  <p className="text-gray-400">
                    Sharp, professional nameplates for your home office or as a
                    corporate gift.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section
        id="about"
        className="py-24 md:py-40 bg-gray-900 border-y border-gray-800"
      >
        <div className="container mx-auto max-w-5xl px-6 text-center fade-in-section">
          <h2 className="text-5xl md:text-7xl font-heading text-white mb-6">
            CRAFTED WITH
            <br />
            <span className="text-accent">PRECISION.</span>
          </h2>
          <div className="text-xl text-gray-300 max-w-3xl mx-auto space-y-6 leading-relaxed">
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

      {/* --- Store Section --- */}
      <section id="store" className="py-24 md:py-40 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left fade-in-section">
              <h2 className="text-5xl md:text-7xl font-heading text-white mb-6">
                THE SHOP.
                <br />
                <span className="text-accent">UNPACKING...</span>
              </h2>
              <div className="text-xl text-gray-300 max-w-lg mx-auto md:mx-0 space-y-6 leading-relaxed mb-12">
                <p>
                  We&apos;re busy building a full e-commerce experience. Soon,
                  you&apos;ll be able to browse our collections, customize your
                  items, and order directly online.
                </p>
                <p>Want to be the first to know?</p>
              </div>
              <a
                href="mailto:hello@karvyn3d.com?subject=Notify me when the store launches!"
                className="inline-block px-12 py-5 text-xl font-bold text-black bg-accent rounded-2xl shadow-lg hover-bg-accent transition-all transform hover:scale-105"
              >
                Notify Me
              </a>
            </div>

            <div
              className="w-full h-96 hidden md:flex items-center justify-center p-10 fade-in-section relative min-h-[400px]"
              style={{ transitionDelay: "200ms" }}
            >
              <svg className="absolute w-0 h-0">
                <defs>
                  <g id="closed-box">
                    <path
                      d="M10 40 L50 20 L90 40 L50 60 L10 40 Z"
                      fill="#374151"
                      stroke="#4B5563"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 40 V80 L50 100 V60 L10 40 Z"
                      fill="#1F2937"
                      stroke="#4B5563"
                      strokeWidth="2"
                    />
                    <path
                      d="M50 60 V100 L90 80 V40 L50 60 Z"
                      fill="#111827"
                      stroke="#4B5563"
                      strokeWidth="2"
                    />
                    <path
                      d="M50 20 L50 60"
                      stroke="#A3E635"
                      strokeWidth="3"
                      strokeDasharray="5 3"
                    />
                  </g>
                  <g id="open-box-glow">
                    <path
                      d="M10 40 L50 20 L90 40 L50 60 L10 40 Z"
                      fill="#A3E635"
                      fillOpacity="0.1"
                      className="animate-pulse"
                      style={{
                        animation: "subtle-glow 3s infinite ease-in-out",
                      }}
                    />
                    <path
                      d="M10 40 V80 L50 100 V60 L10 40 Z"
                      fill="#1F2937"
                      stroke="#4B5563"
                      strokeWidth="2"
                    />
                    <path
                      d="M50 60 V100 L90 80 V40 L50 60 Z"
                      fill="#111827"
                      stroke="#4B5563"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 40 L50 20 L90 40 L50 60 L10 40 Z"
                      fill="#374151"
                      fillOpacity="0.5"
                      stroke="#4B5563"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 40 L50 20 L50 0 L10 20 Z"
                      fill="#374151"
                      stroke="#4B5563"
                      strokeWidth="2"
                      style={{
                        transform: "rotateX(-20deg) rotateY(10deg)",
                        transformOrigin: "10px 40px",
                      }}
                    />
                    <path
                      d="M50 20 L90 40 L90 20 L50 0 Z"
                      fill="#1F2937"
                      stroke="#4B5563"
                      strokeWidth="2"
                      style={{
                        transform: "rotateX(-20deg) rotateY(-10deg)",
                        transformOrigin: "90px 40px",
                      }}
                    />
                  </g>
                </defs>
              </svg>
              <svg
                className="w-32 h-32 absolute top-10 left-20 -rotate-12"
                viewBox="0 0 100 100"
              >
                {" "}
                <use href="#closed-box" />{" "}
              </svg>
              <svg
                className="w-48 h-48 absolute top-20 right-10 animate-float"
                style={{ animation: "subtle-float 4s infinite ease-in-out" }}
                viewBox="0 0 100 100"
              >
                {" "}
                <use href="#open-box-glow" />{" "}
              </svg>
              <svg
                className="w-40 h-40 absolute bottom-5 left-10 rotate-6"
                viewBox="0 0 100 100"
              >
                {" "}
                <use href="#closed-box" />{" "}
              </svg>
              <svg
                className="w-28 h-28 absolute bottom-40 left-40 rotate-3"
                viewBox="0 0 100 100"
              >
                {" "}
                <use href="#closed-box" />{" "}
              </svg>
              <svg
                className="w-24 h-24 absolute bottom-10 right-32 -rotate-3"
                viewBox="0 0 100 100"
              >
                {" "}
                <use href="#closed-box" />{" "}
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
