"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { checkRoute } from "@/utils/checkRoute";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const deskLinks = [
    { name: "Privacy Policy", url: "/privacy", svg: "/shield.svg" },
    { name: "T & Cs", url: "/terms", svg: "/shop.svg" },
    { name: "FAQs", url: "/faqs", svg: "/message-2.svg" },
  ];
  const router = useRouter();
  return (
    <div id="navbar" className="relative w-full ">
      <nav className={`flex items-center text-xl `}>
        <div className="flex w-full flex-row items-center justify-between bg-transparent lg:px-12 p-5 md:pt-2 md:pb-5">
          <Link
            href="/"
            className=" flex flex-row cursor-pointer text-3xl no-underline w-fit"
            onClick={closeMobileMenu}
          >
             <Image
              width={150}
              height={80}
              src={"/logo.png"}
              alt="logo.png"
              className="w-20 -mt-4 md:w-32 -ml-4 md:-mt-6 md:-ml-4"
            />
          </Link>
          <div className="block z-20 cursor-pointer" onClick={handleClick}>
            {click ? (
              <div className="rounded-full block md:hidden">
                <div className="h-[1.5px] w-6 rotate-45 bg-black"></div>
                <div className="ml-auto h-[1.5px] w-6 -rotate-45 bg-black"></div>
              </div>
            ) : (
              <div className="block md:hidden">
                <div className={`h-[1.5px] w-5 bg-[#000000]`} />
                <div className={`ml-auto mt-2 h-[1.5px] w-5 bg-[#000000]`} />
                <div className={`ml-auto mt-2 h-[1.5px] w-5 bg-[#000000]`} />
              </div>
            )}
          </div>

          {/* Mobile View */}
          <ul
            className={`z-[2] pl-0 md:hidden ${
              click
                ? "h-[100vh] top-0 fixed right-0 m-auto flex w-full list-none flex-col justify-start gap-[15px] bg-[#fff] text-left pt-20 transition-all md:w-[60vw] md:justify-start"
                : " m-auto mr-8 hidden list-none flex-col justify-center gap-[15px] text-left transition-all md:w-[60vw] md:justify-start"
            }`}
          >
            {deskLinks.map((item, index) => {
              return (
                <li key={index} className="border-b-[0.8px] mx-8 border-b-primary-200 md:hidden">
                  <Link
                    href={item.url}
                    onClick={() => {
                      closeMobileMenu();
                    }}
                    className={`cursor-pointer font-general text-lg text-primary-300`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop view */}
          <div
            className={` hidden gap-3 ${
              click ? "hidden" : "md:flex md:flex-row justify-between w-full"
            }`}
          >
            <div className="flex flex-row gap-x-7 mx-auto  items-center my-auto px-4 py-[10px] ">
              {deskLinks.splice(0, 3).map((item, index) => {
                return (
                  <Link
                    href={item.url}
                    key={index}
                    className={`text-[16px] flex gap-2 ${
                      checkRoute(item.url)
                        ? "text-primary-800 hover:text-primary-700 py-[5px] font-bold underline transition-shadow"
                        : "text-primary-800 hover:text-primary-700 hover:underline"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="bg-primary-800 text-white rounded-full px-4 py-2 text-lg hidden md:block">
            <button onClick={()=>router.push("/contact")}>Contact</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
