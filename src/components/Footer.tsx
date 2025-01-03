"use client";

import Image from "next/image";
import Link from "next/link";
import { useQRCode } from "next-qrcode";
import { checkRoute } from "@/utils/checkRoute";

export default function Footer() {
  const { Canvas } = useQRCode();
  const text = "Convert your digital";
  const secondText = "everyday cash!";
  let secondWord = secondText.split(" ");
  let words = text.split(" ");
  const pngImagePaths = ["/images/ostar.png", "/images/ystar.png"];
  const currentDate = new Date();

  return (
   
    <footer className=" flex w-full md:w-[100%] mx-auto flex-col justify-center items-center px-5 pb-16 pt-36 bg-white gap-[7rem] lg:gap-[10rem]">
        <div className="xl:w-[85%] lg:w-[90%] w-[100%]">
          <div className="mb-24 ">
            <Image
              src={"/newtajalogo.png"}
              className=""
              width={150}
              height={100}
              alt="pic.png"
            />
            <p className="text-[#637381] text-sm leading-5 mt-4 font-general">
              Convert your digital assets into everyday cash!
            </p>

            {/* <div className="rounded-xl">
              <Canvas
                text={"https://github.com/bunlong/next-qrcode"}
                options={{
                  level: "H",
                  margin: 3,
                  scale: 4,
                  width: 100,
                  color: {
                    dark: "#000000",
                    light: "#ffffff",
                  },
                }}
              />
            </div> */}
          </div>
          <div className="flex flex-row justify-start xl:gap-5 lg:gap-3 gap-2 max-w-[100%] lg:max-w-[90%] xl:max-w-[85%] flex-wrap">
            {words.map((word, index) => (
              <div key={index} className="relative  flex flex-row">
                <p className="text-4xl md:text-7xl lg:text-7xl font-bold flex align-middle md:py-2 text-[#132D46]">
                  {word + " "}
                </p>
                {index == 1 && (
                  <Image
                    src={pngImagePaths[0]}
                    width={100}
                    height={100}
                    alt="pic.png"
                    className="w-3 h-3 md:w-7 md:h-7 mx-4 rounded-xl absolute -top-3"
                  />
                )}

                {index == 3 && (
                  <Image
                    src={pngImagePaths[1]}
                    width={100}
                    height={100}
                    alt="pic.png"
                    className="w-3 h-3 md:w-7 md:h-7 mx-4 rounded-xl absolute top-0 md:right-2 md:-top-2"
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-4xl md:text-7xl lg:text-7xl font-bold flex align-middle md:py-2 text-[#132D46]">
          assets into
                </p>
          <div className="flex flex-row justify-start xl:gap-5 lg:gap-3 gap-2 max-w-[100%] lg:max-w-[90%] xl:max-w-[80%] mb-16 flex-wrap tracking-tighter">
            {secondWord.map((word, index) => (
              <div key={index} className="relative flex-wrap flex flex-row">
                <p className="text-4xl md:text-7xl lg:text-7xl font-bold flex align-middle md:py-2 text-[#132D46]">
                  {word + " "}
                </p>
                {index == 0 && (
                  <Image
                    src={pngImagePaths[0]}
                    width={100}
                    height={100}
                    alt="pic.png"
                    className="w-3 h-3 md:w-7 md:h-7 mx-4 rounded-xl absolute -top-3"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="w-full flex gap-5 mt-3">
            <a href="https://apps.apple.com/ng/app/taja/id6499518986" target="_blank" className=" py-2 px-2 text-white flex items-center justify-center gap-2">
              <Image
                      src={"/appleWhite.svg"}
                      width={100}
                      height={100}
                      alt="pic.png"
                      className="lg:w-full w-[80%]"
                />
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.itajainnovations.taja1" target="_blank" className=" py-2 px-2 text-white flex items-center justify-center gap-2">
              <Image
                      src={"/googleWhite.svg"}
                      width={100}
                      height={100}
                      alt="pic.png"
                      className="lg:w-full w-[80%]"
                />
                </a>
          </div>
        </div>
     
    <div className="w-full max-w-[100%] lg:max-w-[90%] xl:max-w-[85%]">
      <div className="flex flex-col items-center justify-center ">
        <div className="my-5 ">
          <p className="text-[#637381] text-sm md:text-md font-general">
            taja focuses on giving you a seamless shopping experience by
            removing the stress of global delivery and payment. With us, you
            have the freedom to shop globally from any store with the assurance
            that your package will be delivered to your preferred shopping.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between text-[#CBD1D7] font-general">
          <p>©{currentDate.getFullYear()} taja. All rights reserved.</p>

          <div className="flex flex-row mt-4 md:mt-0">
            <Link href="/privacy">
              <p className="mr-5 text-white">Terms of Service</p>
            </Link>
            <Link href="/privacy">
              <p className="mr-5 text-white">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-5 mt-3 justify-center">
            <a href="https://www.facebook.com/tajahq?mibextid=LQQJ4d" target="_blank" className=" py-2 px-2 text-white flex items-center justify-center gap-2">
              <Image
                      src={"/facebook.png"}
                      width={100}
                      height={100}
                      alt="pic.png"
                      className="w-[80%]"
                />
                </a>

                <a href="https://www.instagram.com/taja_hq?igsh=dnNhNWFidzkwMHo1" target="_blank" className=" py-2 px-2 text-white flex items-center justify-center gap-2">
              <Image
                      src={"/Instagram.png"}
                      width={100}
                      height={100}
                      alt="pic.png"
                      className=" w-[80%]"
                />
                </a>

                <a href="https://x.com/Taja_hq" target="_blank" className=" py-2 px-2 text-white flex items-center justify-center gap-2">
              <Image
                      src={"/twitter.png"}
                      width={100}
                      height={100}
                      alt="pic.png"
                      className=" w-[80%]"
                />
                </a>

                <a href="https://t.me/+KcDqdhVUm4UyM2Q0" target="_blank" className=" py-2 px-2 text-white flex items-center justify-center gap-2">
              <Image
                      src={"/telegram.png"}
                      width={100}
                      height={100}
                      alt="pic.png"
                      className="w-[80%]"
                />
                </a>
          </div>
      </div>
      
    </footer>
  );
}
