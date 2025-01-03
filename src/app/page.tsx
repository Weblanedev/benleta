"use client";

import React from "react";
import Image from "next/image";
import { useQRCode } from "next-qrcode";
import SlantSliders from "@/components/Sliders/SlantSliders";
import SectionTwo from "@/components/Home/SectionTwo";
import SectionFour from "@/components/Home/SectionFour";
import FeaturedStores from "@/components/Home/FeaturedStores";
import SectionFive from "@/components/Home/SectionFive";
import SectionSix from "@/components/Home/BlurredCaption";
import SectionSeven from "@/components/Home/SectionSeven";
import { useRouter } from "next/navigation";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import Testimonies from "@/components/Home/Testimonies";
import Standards from "@/components/Home/Standards";
// import Apple from ""

export default function Home() {
  const { Canvas } = useQRCode();

  const text = "Transform your crypto";
  const secondText = " into cash";

  const router = useRouter();
  let secondWord = secondText.split(" ");

  let words = text.split(" ");
  const pngImagePaths = ["/images/ostar.png", "/images/ystar.png"];

  return (
    <>
      <main className="flex lg:min-h-[90vh] min-h-[50vh] flex-col items-center justify-between overflow-hidden md:mb-0 mb-4">
        <div className="mt-20 lg:mt-[120px] mb-14 lg:mb-28 md:mb-16">
          <div className="flex flex-col gap-2 md:gap-3 md:max-w-[70%] lg:max-w-[50%] mx-auto">
            <p className="text-center text-4xl md:text-6xl xl:text-8xl font-bold font-poppins text-primary-800 tracking-[-2px] leading-snug flex flex-row flex-wrap justify-center whitespace-nowrap">
              Empowering Your <p className="text-primary-300">Digital Asset</p>{" "}
              Journey
            </p>
          </div>

          <div className="flex flex-col items-center align-middle mt-8 md:mt-5 font-general gap-3">
            <p className="text-lg md:text-2xl lg:text-3xl text-center text-[#000000] mb-5 font-light w-[90%] md:max-w-[50%] lg:max-w-[40%]">
              Secure, user-friendly solutions for managing and transacting
              digital assets confidently.
            </p>

            <div className="w-full flex justify-center gap-5 mt-3 items-center">
              <a
                href="https://apps.apple.com/"
                target="_blank"
                className=" py-2 px-2 text-white flex items-center justify-center gap-2"
              >
                <Image
                  src={"/apple.svg"}
                  width={100}
                  height={100}
                  alt="pic.png"
                  className="lg:w-full w-[80%]"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/"
                target="_blank"
                className=" py-2 px-2 text-white flex items-center justify-center gap-2"
              >
                <Image
                  src={"/google.svg"}
                  width={100}
                  height={100}
                  alt="pic.png"
                  className="lg:w-full w-[80%]"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      <SectionTwo />
      {/* <SectionFour /> */}
      <SectionSix />
      <SectionFive />
      <Standards />
    </>
  );
}
