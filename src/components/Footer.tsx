"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaLongArrowAltUp,
} from "react-icons/fa";
import * as React from "react";
import axios from "axios";
import { UseCustomToast } from "../hooks/useCustomToast";
import Link from "next/link";
import animations from "@/utils";

const Footer = () => {
  const router = useRouter();
  const { hoverAnimation } = animations;
  const { toaster } = UseCustomToast();
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string | undefined>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (email.length > 5 && email.includes("@") && email.includes(".com")) {
      setError(undefined);
      setLoading(true);

      axios
        .post(`${"BASEURL"}/utils/joinWaitlist`, { email })
        .then((res) => {
          toaster(res.data.message, "success", "font-semibold");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          if (err?.response?.data?.message) {
            toaster(err.response.data.message, "error", "font-semibold");
            return;
          }
          toaster("An error occurred", "error", "font-semibold");
        });
    } else {
      setError("Invalid email");
    }
  };
  return (
    <div className="pt-10 bg-primary-900 w-full pb-8" id="footer">
      <div className="bg-primary-900 w-full px-6">
        <div className="md:mx-auto w-full md:w-[70%] lg:w-[60%] pt-14">
          <div className="flex flex-row md:justify-center">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold md:text-center tracking-wide md:tracking-wider">
              Empowering Your{" "}
              <h2 className="footer-charcter text-white text-4xl sm:text-5xl lg:text-6xl font-semibold">
                Financial Freedom
              </h2>
            </h2>
          </div>
        </div>

        <p className="font-[400] lg:text-[20px] lg:leading-[25px] text-[16px] leading-[20px] text-[#828288] md:text-center mt-[16px] lg:pb-[44px] pb-[35px] md:mx-auto w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] tracking-wider">
          Digital assets made easy with Benleta.
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

      <div className="bg-primary-900s px-6 lg:px-24">
        <div
          className="hidden md:flex ml-auto flex-row rounded-full h-12 w-12 border "
          onClick={() => {
            window?.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <FaLongArrowAltUp color="#fff" className="m-auto" /> 
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-20 md:mt-0">
          <div className="w-full lg:w-[24%]">
            {/* <Image
                                src="/assets/logo-white.png"
                                width={150}
                                height={42}
                                alt="phone"
                                className="lg:mt-[50px] lg:pt-[0px] pt-[56px]"
                            /> */}
            <p className="font-[300] lg:text-[20px] lgs:leadisng-[25px] text-[16px] leadwing-[24px] text-[#828288] text-left mt-12 lg:pb-[44px] pb-[35px] trascking-wider ">
              Seamlessly bridging the gap between digital assets and everyday
              financial needs. Explore innovative solutions with Benleta
            </p>
          </div>
          {/* Footer Links */}
          <div className="flex flex-row flex-wrap lg:flex-nowrap gap-12 md:gap-4 lg:justify-around w-full lg:w-[36%] lg:mt-[0px] mt-[64px]">
            <div className="flex flex-col lg:mt-[50px] text-start">
              <div className="text-[20px] leading-[25px] font-[500] text-[#ffffff] mb-[24px]">
                Company
              </div>
              <Link
                href="/about"
                className={`${hoverAnimation} text-[#828288]  text-lg leading-[25px] font-[400] text-start mb-4`}
              >
                About us
              </Link>
            </div>
            <div className="flex flex-col lg:mt-[50px]  ">
              <div className="text-[20px] leading-[25px] font-[500] text-[#ffffff] text-start mb-[24px]">
                Legal
              </div>
              <Link
                href="/privacy"
                onClick={() => router.push("/privacy")}
                className={`${hoverAnimation} text-[#828288]  text-lg leading-[25px] font-[400] text-start mb-4 whitespace-nowrap`}
              >
                Privacy policy
              </Link>
              <Link
                href="/privacy"
                onClick={() => router.push("/privacy")}
                className={`${hoverAnimation} text-[#828288]  text-lg leading-[25px] font-[400] text-start mb-4 whitespace-nowrap`}
              >
                Terms of use
              </Link>
            </div>
            <div className="flex flex-col lg:mt-[50px] ">
              <div className="text-[20px] leading-[25px] font-[500] text-[#ffffff] text-start mb-[24px]">
                Support
              </div>
              <Link
                href="/contact"
                className={`${hoverAnimation} text-[#828288]  text-lg leading-[25px] font-[400] text-start mb-4 whitespace-nowrap`}
              >
                Contact us
              </Link>
              <Link
                href="/"
                className={`${hoverAnimation} text-[#828288]  text-lg leading-[25px] font-[400] text-start`}
              >
                FAQs
              </Link>
            </div>
          </div>
          <div
            className="ml-auto flex md:hidden flex-row h-12 w-12 rounded-full border items-center"
            onClick={() => {
              window?.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <FaLongArrowAltUp color="#fff" className="m-auto" /> 
          </div>
        </div>

        <div className="flex flex-col gap-y-3 md:w-full md:flex-row md:items-center md:justify-between">
          <div className="font-[300] lg:text-[20px] lg:leading-[25px] text-[16px] leading-[20px] text-[#828288] text-center md:text-left lg:mt-[45px] mt-[40px] mb-[1rem]">
            © {new Date().getFullYear()} Benleta, All right reserved.
          </div>
          <div className="flex flex-row lg:mt-[24px]">
            <a
              href="https://www.linkedin.com/company/"
              className="bg-[#ffffff10] hover:bg-[#ffffff50] p-3 rounded-full mr-[16px]"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="#fff" size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="bg-[#ffffff10] hover:bg-[#ffffff50] p-3 rounded-full mr-[16px]"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram color="#fff" size={24} />
            </a>
            <a
              href="https://twitter.com/"
              className="bg-[#ffffff10] hover:bg-[#ffffff50] p-3 rounded-full mr-[16px]"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter color="#fff" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
