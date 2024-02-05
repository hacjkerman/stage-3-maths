import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fun with Maths",
  description: "Learn to solve math problems while enjoying the process",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100 text-zinc-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
