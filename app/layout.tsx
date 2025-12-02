import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    // suppressHydrationWarning is required for next-themes to work correctly
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-black text-black dark:text-gray-200 transition-colors duration-300">
        <CartProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ClientLayout>
              {children}
            </ClientLayout>
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}