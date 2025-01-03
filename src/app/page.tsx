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

  const router = useRouter()
  let secondWord = secondText.split(" ");

  let words = text.split(" ");
  const pngImagePaths = ["/images/ostar.png", "/images/ystar.png"];

  return (
    <>
      <main className="flex lg:min-h-[90vh] min-h-[50vh] flex-col items-center justify-between overflow-hidden md:mb-0 mb-4">
        <div className="mt-20 lg:mt-[120px] mb-14 lg:mb-28 md:mb-16">
          <div className="flex flex-col gap-2 md:gap-3">
           
            <p className="text-center text-4xl md:text-6xl xl:text-8xl font-bold font-poppins text-[#132D46] tracking-[-2px] ">
            Transform your digital
            
            </p>
            <p className="text-center text-4xl md:text-6xl xl:text-8xl font-bold font-poppins text-[#132D46] tracking-[-2px] ">
              assets into cash
            
            </p>
            <p className="text-center text-4xl md:text-6xl xl:text-8xl font-bold pb-2 md:pb-3 font-poppins text-[#132D46] tracking-[-2px] ">
              <span className="text-[#01C38E]">instantly</span>
            </p>
 
          </div>

          <div className="flex flex-col items-center align-middle mt-8 md:mt-5 font-general gap-3">
            <p className="text-lg md:text-2xl lg:text-3xl text-center text-[#000000] mb-5 font-light w-[90%]">
            Seamlessly convert your digital assets and enjoy 
              <br /> swift bank account payouts in mere seconds.
            </p>


              <div className="w-full flex justify-center gap-5 mt-3 items-center">
              <a href="https://apps.apple.com/ng/app/taja/id6499518986" target="_blank" className=" py-2 px-2 text-white flex items-center justify-center gap-2">
              <Image
                      src={"/apple.svg"}
                      width={100}
                      height={100}
                      alt="pic.png"
                      className="lg:w-full w-[80%]"
                />
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.itajainnovations.taja1" target="_blank" className=" py-2 px-2 text-white flex items-center justify-center gap-2">
              <Image
                      src={"/google.svg"}
                      width={100}
                      height={100}
                      alt="pic.png"
                      className="lg:w-full w-[80%]"
                />
                </a>
              
              </div>
            {/* <Canvas
              text={"https://forms.gle/Ji2VpQwnueMFR6dz5"}
              options={{
                level: "M",
                margin: 3,
                scale: 4,
                width: 150,
                color: {
                  dark: "#000000",
                  light: "#ffffff",
                },
              }}
            />   */}
            {/* <div className='text-[8rem]'>
            🔍
            </div>

            {/* <div className="w-[90%] md:w-[50%] mx-auto relative font-general my-20 ">
                <p className="text-[1.5rem] top-2 absolute left-3">🔍</p>
                <input
                  type="text"
                  className="rounded-[10px] w-full bg-transparent py-3 border-[1.2px] border-[#374048] pl-[50px] pr-3 text-white text-[15px]"
                  placeholder="Search..."
                  onFocus={(e) => router.push('/try-it-out')}
                  onChange={(e) => router.push('/try-it-out')}
                />
              </div> */}

           
          </div>
        </div>
      </main>

      <SectionTwo />

      {/* <FeaturedStores
        heading={
          <>
            Not all... but here's some <br />
            of our stores
          </>
        }
        footnote={
          <>
            Can't see what you like, get the link of the store <br /> you want
            to shop at, and paste it in the search button.
          </>
        }
      /> */}
      {/* <SectionFour /> */}
      <SectionSix />
      {/* Section Five */}
      <SectionFive />
      {/* Section Seven */}

      <Standards/>
      {/* <Testimonies/> */}
      <SectionSeven />

      {/* <div className="w-full my-40 -rotate-[3deg] overflow-x-hidden">
        <SlantSliders />
      </div> */}
    </>
  );
}
