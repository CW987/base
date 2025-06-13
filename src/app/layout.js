import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const libreBaskerville = Libre_Baskerville({
  variable: "--Baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "My Base App",
  description: "Revesion and a build of everything in one app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
