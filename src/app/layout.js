import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Base App",
  description: "Revesion and a build of everything in one app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          {/* <h1>Test App - I am in the header</h1>
          <Link href="/">Home </Link>
          <Link href="/about">About</Link>
          <Link href="/posts/1">Post 1</Link> */}
          <br></br>
        </header>
        <Header/>
        {children}
        <br></br>
        <Footer/>
      </body>
    </html>
  );
}
