import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import { CartProvider } from "@/context/CartContext"; // <-- Import the provider

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Karvyn3D - Custom 3D Printing & Design",
  description: "Custom 3D printing for gifts, home, and office.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      {/* STEP 4: WRAP EVERYTHING IN CARTPROVIDER 
        This ensures the cart state is available to the Header (ClientLayout) 
        and all your pages.
      */}
      <CartProvider>
        <ClientLayout>
          {children}
        </ClientLayout>
      </CartProvider>
    </html>
  );
}