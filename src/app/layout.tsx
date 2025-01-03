// "use client";

import "./globals.css";
import localFont from "next/font/local";
import "swiper/css";
import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ReactQueryProvider } from "./ReactQueryProvider";

const title = "Benleta | Trusted Virtual Asset Service Provider (VASP)";
const description =
  "Benleta is a trusted Virtual Asset Service Provider based in Lithuania, offering secure and user-friendly crypto exchange services and wallet solutions across the EU. Our platform enables seamless and regulated digital asset transactions for businesses and individuals in the evolving digital economy.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://www.benleta.com/",
    siteName: "Benleta",
    images: "/icon.png",
    type: "website",
    countryName: "Lithuania",
    locale: "lt-LT",
  },
  keywords: [""],
  icons: {
    icon: "/icon.ico",
  },
};

const poppins = localFont({
  src: "./fonts/poppins.ttf",
  display: "swap",
  variable: "--font-poppins",
});

const general = localFont({
  src: "./fonts/GeneralSans.ttf",
  display: "swap",
  variable: "--font-general",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <html
        lang="en"
        className={`${poppins.variable} ${general.variable} !bg-white`}
      >
        <body className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-white font-poppins">
          <Navigation />
          <main className="w-full flex flex-1 flex-col items-center justify-center overflow-hidden bg-white">
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
          {/* <div className="bg-white w-full">
            <p className="text-primary-50 mb-2 border-b ">jaypee</p>
            <p className="text-primary-100 mb-2 border-b ">jaypee</p>
            <p className="text-primary-200 mb-2 border-b ">jaypee</p>
            <p className="text-primary-300 mb-2 border-b ">jaypee</p>
            <p className="text-primary-400 mb-2 border-b ">jaypee</p>
            <p className="text-primary-500 mb-2 border-b ">jaypee</p>
            <p className="text-primary-600 mb-2 border-b ">jaypee</p>
            <p className="text-primary-700 mb-2 border-b ">jaypee</p>
            <p className="text-primary-800 mb-2 border-b ">jaypee</p>
          </div>
          <div className="bg-primary-100 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-primary-200 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-primary-300 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-primary-400 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-primary-500 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-primary-600 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-primary-700 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-primary-800 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-primary-900 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-secondary-100 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-secondary-200 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-secondary-300 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-secondary-400 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-secondary-500 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-secondary-600 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div>
          <div className="bg-secondary-700 w-full mb-1">
            <p className="text-white">jaypee</p>
          </div> */}
          <Footer />
        </body>
      </html>
    </>
  );
}
