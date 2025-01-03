// "use client";

import "./globals.css";
import localFont from "next/font/local";
import "swiper/css";

import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const metadata: Metadata = {
  title: "Taja - Your trusted digital-assets-to-cash conversion platform",
  description:
    "Convert cryptocurrencies like USDT, BTC, and ETH to NGN instantly with Taja. Benefit from the best conversion rates, lightning-fast transfers, and dedicated customer support.",
  openGraph: {
    title: "Taja - Your trusted digital-assets-to-cash conversion platform",
    description:
      "Taja is your ultimate solution for converting your digital-assets-to-cash seamlessly and securely. We offer USDT, BTC, or ETH to NGN, as well as the best conversion rates in the market, ensuring you maximize the value of your assets. With lightning-fast transfers completing within seconds, you can access your funds swiftly and efficiently. Our dedicated customer support team is always available to address your inquiries, resolve concerns, and provide assistance whenever you need it.",
    url: "https://www.tajahq.com/",
    siteName: "Taja",
    images: "/icon.png",
    type: "website",
    countryName: "Nigeria",
    locale: "en_NG"
  },
  keywords: [
    "Digital-assets-to-cash conversion",
    "Secure digital assets transactions",
    "Digital assets to ngn",
    "Digital assets to fiat",
    "Convert USDT to NGN",
    "BTC to NGN conversion",
    "ETH to NGN exchange",
    "Best conversion rates",
    "Instant transfers",
    "Dedicated customer support",
    "Secure crypto transactions",
    "Seamless integration"
  ],
  icons: {
    icon: '/icon.ico',
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
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon"/>
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
          <Footer />
        </body>
      </html>
    </>
  );
}
