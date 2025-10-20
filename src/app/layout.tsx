// import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: "Your Site Title",
//   description: "Your description",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-Inter">
        <Navbar />
        <main>{children}</main>
      </body>
      <Footer />
    </html>
  );
}
