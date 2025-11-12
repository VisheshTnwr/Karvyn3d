import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ClientLayout from "@/components/ClientLayout"; // <-- Import the new component

// Configure the fonts
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

// This is now allowed because this is a Server Component
export const metadata = {
  title: "Karvyn3D - Custom 3D Printing & Design",
  description:
    "Custom 3D printing for gifts, home, and office. If you can think it, we can make it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      {/*
        The <ClientLayout> component now contains the <body>,
        <header>, <footer>, and all the interactive logic.
      */}
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
