import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const interMono = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakshith | Portfolio",
  description: "Rakshith's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${ibmSans.variable} ${ibmMono} antialiased bg-neutral-900`}
        className={`${interSans.variable} ${interMono.variable} antialiased bg-stone-950`}
      >
        <div className="w-full min-h-svh flex flex-col">
          <div className="w-full max-w-3xl mx-auto  pb-4 px-8">
            <header className="sticky top-0 backdrop-blur-lg flex justify-between items-center text-white w-full pt-6 pb-4 border-b border-white/20">
              <Link href="/"></Link>
              <nav className="flex gap-4">
                <Link href="#about" className="text-white/60 hover:text-white py-1 px-4 hover:bg-white/10 rounded-md">
                  About
                </Link>
                <Link href="#projects" className="text-white/60 hover:text-white py-1 px-4 hover:bg-white/10 rounded-md">
                  Projects
                </Link>
                <Link href="#contact" className="text-white/60 hover:text-white py-1 px-4 hover:bg-white/10 rounded-md">
                  Contact
                </Link>
              </nav>
            </header>
          </div>
          {/* <div className=""> */}
            {children}
          {/* </div> */}
          <footer className="w-full max-w-3xl mx-auto py-6 px-8">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Rakshith. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
