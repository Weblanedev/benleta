import React from "react";
import Image from "next/image";

const peopleTestimonies = [
  {
    image: "/starIcon.svg",
    title: "Best rates",
    quality:
      "At Taja, we prioritize your financial gains. That's why we provide the most competitive conversion rates in the market, ensuring that you maximize the value of your conversions.",
  },
  {
    image: "/flash.svg",
    title: "Lightning-fast transfers",
    quality:
      "With our meticulously crafted user experience setup, we've streamlined the conversion process to perfection. Experience seamless interactions and lightning-fast transfers, completing within seconds, so you can access your funds without delay.",
  },
  {
    image: "/profile-circle.svg",
    title: "Reliable customer support",
    quality:
      "We know how crucial it is to have prompt assistance. Our dedicated support team is here to help you with any questions, resolve concerns, and provide assistance whenever you need it.",
  },
  {
    image: "/lock.svg",
    title: "Security at the core",
    quality:
      "Safeguarding your financial transactions is our top priority. We employ state-of-the-art security measures to protect your assets and ensure a safe and secure conversion experience.",
  },
  {
    image: "/data.svg",
    title: "Seamless integration",
    quality:
      "Our platform seamlessly integrates with various cryptocurrencies and banking systems, providing you with unparalleled flexibility and convenience in managing your assets and transactions.",
  },
];

const first_array = [peopleTestimonies[0], peopleTestimonies[3]];
const second_array = [peopleTestimonies[1], peopleTestimonies[4]];

const Standards = () => {
  return (
    <div className="flex min-h-screen flex-col items-center md:py-24 gap-10 w-full mx-auto overflow-x-hidden mb-[80px] my-20">
      <h3 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-[#132D46] px-5 md:px-[40px] xl:px-[60px] lg:w-[90%]">
        Why Taja?
      </h3>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        {/* First Cards */}

        <div className="px-5 md:px-[40px] xl:px-[60px] flex flex-col lg:flex-row items-center lg:items-start rounded-3xl lg:w-[90%] w-full mb-4 gap-6 ">
          <div className="flex flex-col gap-7 w-[85%] lg:w-[30%]">
            {first_array?.map((test, index) => {
              const { image, title, quality } = test;
              return (
                <div className="bg-[#F3F5F6] px-6 py-8 rounded-2xl gap-3 flex flex-col w-full h-fit" key={index}>
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    className="xl:h-7 xl:w-7 h-3 w-3 md:h-6 md:w-6"
                    alt="pic.png"
                  />
                  <h3 className="font-poppins 2xl:text-3xl xl:text-2xl text-lg font-bold text-[#132D46]">
                    {title}
                  </h3>
                  <p className="text-[#111111] text-sm font-general font-medium ">
                    {quality}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-7 w-[85%] lg:w-[30%]">
            {second_array?.map((test, index) => {
              const { image, title, quality } = test;
              return (
                <div className="bg-[#F3F5F6] px-6 py-8 rounded-2xl gap-3 flex flex-col w-full h-fit" key={index}>
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    className="xl:h-7 xl:w-7 h-3 w-3 md:h-6 md:w-6"
                    alt="pic.png"
                  />
                  <h3 className="font-poppins 2xl:text-3xl xl:text-2xl text-lg font-bold text-[#132D46]">
                    {title}
                  </h3>
                  <p className="text-[#111111] text-sm font-general font-medium ">
                    {quality}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bg-[#F3F5F6] px-6 py-8 rounded-2xl gap-3 flex flex-col w-[85%] lg:w-[30%] h-fit">
            <Image
              src={peopleTestimonies[2]?.image}
              width={200}
              height={200}
              className="xl:h-7 xl:w-7 h-3 w-3 md:h-6 md:w-6"
              alt="pic.png"
            />
            <h3 className="font-poppins 2xl:text-3xl xl:text-2xl text-lg font-bold text-[#132D46]">
              {peopleTestimonies[2]?.title}
            </h3>
            <p className="text-[#111111] text-sm font-general font-medium ">
              {peopleTestimonies[2]?.quality}
            </p>
          </div>
          {/* <div className="flex justify-center items-center xl:w-[35%] md:w-[25%]">
          <div className="pl-3 flex flex-col gap-4">
            <Image
              src={"/commas.svg"}
              width={200}
              height={200}
              className="h-16 w-16"
              alt="pic.png"
            />
            <span className="flex flex-col gap-3">
              <h3 className="xl:text-5xl md:text-4xl text-xl font-poppins text-[#E2E5E9] font-medium tracking-tighter">
                Testimonials
              </h3>
              <p className="text-[#A8B3BD] xl:text-base text-sm font-general font-medium xl:w-[84%] w-[93%]">
                Don’t just trust one side of the story! Here’s what Tajians have
                said about us.
              </p>
            </span>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Standards;
