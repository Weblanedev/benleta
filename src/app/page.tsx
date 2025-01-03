"use client";

import React from "react";
import Image from "next/image";
import SectionTwo from "@/components/Home/SectionTwo";
import SectionFive from "@/components/Home/SectionFive";
import SectionSix from "@/components/Home/BlurredCaption";
import Standards from "@/components/Home/Standards";
import Marquee from "react-fast-marquee";

export default function Home() {
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
        <Marquee
          className={`bg-primary-900 pt-[20px] pb-[14px] text-primary-300 text-xl font-[400] font-general`}
          autoFill
        >
          <div className=" flex mx-4 flex-row gap-x-6">
            {[
              "Fast and Secure Digital Asset Conversions 💸",
              "Transform Your Assets into Cash Instantly 🚀",
              "Your Trusted Partner in Seamless Transactions 🤝",
              "Innovative Solutions for Modern Finance 🌟",
              "Where Convenience Meets Innovation 🛠️",
              "Sign Up in Minutes and Get Started Instantly 🔐",
              "Explore a Wide Range of Premium Services 🌍",
              "Convert Digital Assets to Cash with Ease 💰",
              "Secure Transactions Backed by Cutting-Edge Technology 🔒",
              "Experience Hassle-Free Financial Management Today! ✨",
              "Empowering You to Achieve Financial Freedom 🌟",
              "Join Thousands Who Trust Benleta for Secure Conversions 🏆",
              "Because Your Money Deserves Better Management 💼",
              "Seamless Experiences, Maximum Satisfaction 🌐",
              "Your Digital Assets, Transformed Effortlessly 🔄",
            ].map((data) => {
              return <div key={data}>{data}</div>;
            })}
          </div>
        </Marquee>
      </main>

      {/* <SectionTwo />
      <SectionSix /> */}
      <SectionFive />
      <Standards />
    </>
  );
}
