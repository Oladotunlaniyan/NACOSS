// import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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
        <Footer />
      </body>
    </html>
  );
}
