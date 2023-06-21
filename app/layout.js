import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlackSmitz | Home",
  description: "An online solution for blacksmiths",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout> 
      </body>
    </html>
  );
}
