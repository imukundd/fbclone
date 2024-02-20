import { Inter } from "next/font/google";
import "./globals.css";
// import "./icon.svg"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - log in or sign up",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}