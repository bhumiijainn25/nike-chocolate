import "./globals.css";

export const metadata = {
  title: "Nike Chocolate | Premium Chocolate Experience",
  description:
    "Discover handcrafted premium chocolates inspired by elegance, luxury, and unforgettable taste.",
  keywords: [
    "Nike Chocolate",
    "Premium Chocolate",
    "Luxury Chocolate",
    "Dark Chocolate",
    "Chocolate Collection",
  ],
  authors: [{ name: "Bhumi Jain" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}