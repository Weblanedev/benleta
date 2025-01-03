"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { checkRoute } from "@/utils/checkRoute";
import { TbArrowUpRight } from "react-icons/tb";

export default function Header() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const deskLinks = [
    { name: "Shop Globally", url: "/", svg: "/shop.svg" },
    { name: "Privacy Policy", url: "/privacy", svg: "/shield.svg" },
    { name: "Contact Us", url: "/contact", svg: "/message-2.svg" },
  ];

  return (
    <div id="navbar" className="relative w-full ">
      <nav className={"flex  items-center text-xl "}>
        <div className="flex  w-full flex-row items-center justify-between bg-transparent lg:px-12 p-5">
          <Link
            href="/"
            className=" flex flex-row cursor-pointer text-3xl no-underline  w-fit"
            onClick={closeMobileMenu}
          >
            <Image
              width={150}
              height={80}
              src={"/logo.svg"}
              alt="logo.png"
              className="h-[40px] w-[75px] lg:w-[115px] lg:h-[55px]"
            />
          </Link>
          <div className=" block z-20 cursor-pointer  " onClick={handleClick}>
            {click ? (
              <div className="block md:hidden">
                <div className="h-[1.5px] w-6 rotate-45 bg-[#fff]"></div>
                <div className="ml-auto mt-1 h-[1.5px] w-6 -rotate-45 bg-[#fff]"></div>
              </div>
            ) : (
              <div className="block md:hidden">
                <div
                  className={`h-[2px] w-6 bg-[#fff]
                                    `}
                />
                <div
                  className={`ml-auto mt-2 h-[2px] w-4 bg-[#fff]
                 `}
                />
              </div>
            )}
          </div>
          {/* Mobile View */}
          <ul
            className={`z-[2] pl-0 md:hidden ${
              click
                ? "h-[100vh] top-0 fixed right-0 m-auto flex w-full list-none flex-col justify-center gap-[15px] bg-[#000000] text-center transition-all md:w-[60vw] md:justify-start"
                : " m-auto mr-8 hidden list-none flex-col justify-center gap-[15px] text-center transition-all md:w-[60vw] md:justify-start"
            }`}
          >
            {deskLinks.map((item, index) => {
              return (
                <li key={index} className=" md:hidden">
                  <Link
                    href={item.url}
                    onClick={() => {
                      closeMobileMenu();
                    }}
                    className={`cursor-pointer font-mono text-lg uppercase text-[#fff]`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href={"/try-it-out"}
                className="cursor-pointer font-mono text-lg uppercase text-[#fff]"
                onClick={() => closeMobileMenu()}
              >
                Try it out
              </Link>
            </li>
          </ul>
          {/* Desktop view */}
          {/* Opened */}
          <ul
            className={`hidden pl-0 ${
              click
                ? "flex flex-col h-[100vh] fixed top-0 z-[2] right-[-100%] transition-all justify-center items-center w-full r-0 bg-[#000000]"
                : "hidden"
            }`}
          >
            {deskLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.url}
                    onClick={() => {
                      closeMobileMenu();
                    }}
                    className={`cursor-pointer text-left font-mono text-5xl uppercase text-[#fff]`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Closed */}
          <div
            className={` hidden gap-3 ${
              click ? "hidden" : "md:flex md:flex-row justify-between w-full"
            }`}
          >
            <div className="flex flex-row gap-x-3 mx-auto rounded-full bg-[#131617] items-center my-auto px-3 py-3  ">
              {deskLinks.splice(0, 3).map((item, index) => {
                return (
                  <Link
                    href={item.url}
                    key={index}
                    className={`text-[16px] hover:text-white flex gap-2 ${
                      checkRoute(item.url)
                        ? "text-white rounded-full bg-[#FB5E13] px-2 py-2"
                        : "text-[#637381] hover:text-[#fff]"
                    }`}
                  >
                    <Image
                      alt="link.svg"
                      width={100}
                      height={100}
                      src={item.svg}
                      className={`w-6 h-6  ${
                        !checkRoute(item.url) ? "hidden" : ""
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <Link
              href={"/try-it-out"}
              className="bg-white flex flex-row gap-x-2 h-[40px] px-3 rounded-full my-auto items-center"
            >
              <p className="text-black text-center m-auto text-sm font-semibold">
                Try it Out
              </p>
              <div className="rounded-full h-[20px] w-[20px] bg-[#FB5E13] first-letter:">
                <TbArrowUpRight size={20} className={" text-white"} />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
