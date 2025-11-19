// We'll define what a "Product" and "Category" look like
export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
}; // <--- THIS CLOSING BRACE WAS MISSING

export type Product = {
  id: string;
  name: string;
  category: string; // This will be the category slug
  price: string;
  image: string;
};

// --- OUR CATEGORIES ---
export const CATEGORIES: Category[] = [
  {
    id: "cat_1",
    slug: "personalized-gifts",
    name: "Personalized Gifts",
    description:
      "Custom keychains, nameplates, and unique mementos for every occasion.",
  },
  {
    id: "cat_2",
    slug: "home-decor",
    name: "Artsy Home Decor",
    description:
      "Minimalist vases, geometric planters, and abstract sculptures to elevate your space.",
  },
  {
    id: "cat_3",
    slug: "office-gifting",
    name: "Office & Gifting",
    description:
      "Stylish desk organizers, phone stands, unique boxes, and custom clocks.",
  },
];

// --- OUR MOCK PRODUCTS ---
export const PRODUCTS: Product[] = [
  // Personalized Gifts
  {
    id: "prod_1",
    name: "Custom Text Keychain",
    category: "personalized-gifts",
    price: "14.99",
    image: "/images/ps5 keychain.jpg",
  },
  {
    id: "prod_2",
    name: "Photo Lithophane",
    category: "personalized-gifts",
    price: "29.99",
    image: "/images/lithophane.jpg",
  },
  {
    id: "prod_3",
    name: "Custom Desk Plate",
    category: "personalized-gifts",
    price: "22.50",
    image: "/images/desk-plate.jpg",
  },
  // Home Decor
  {
    id: "prod_4",
    name: "Geometric Vase",
    category: "home-decor",
    price: "34.99",
    image: "/images/vase.jpg",
  },
  {
    id: "prod_5",
    name: "Bespoke Hexagon Clock",
    category: "home-decor",
    price: "49.99",
    image: "/images/clock.jpg",
  },
  {
    id: "prod_6",
    name: "Minimalist Planter",
    category: "home-decor",
    price: "27.99",
    image: "https://placehold.co/600x600/0a0a0a/A3E635?text=Minimalist+Planter",
  },
  // Office & Gifting
  {
    id: "prod_7",
    name: "Sleek Phone Stand",
    category: "office-gifting",
    price: "24.99",
    image: "/images/phone-stand.jpg",
  },
  {
    id: "prod_8",
    name: "Modular Desk Organizer",
    category: "office-gifting",
    price: "42.00",
    image: "https://placehold.co/600x600/050505/A3E635?text=Desk+Organizer",
  },
];
