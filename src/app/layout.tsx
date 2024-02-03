import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inter} from 'next/font/google';
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Hashnode blog",
  description: "Hashnode blog",
};

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap', 
  adjustFontFallback: false
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={grotesk.className}>
        <div className="container mx-auto flex min-h-screen flex-col overflow-hidden px-6 py-8 sm:px-14 sm:py-16 lg:px-28">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
