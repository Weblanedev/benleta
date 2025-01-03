import React from "react";
import Image from "next/image";

const peopleTestimonies = [
  {
    image: "/lock.svg",
    title: "Secure and Reliable",
    quality:
      "Enjoy peace of mind with our state-of-the-art security measures designed to protect your data and transactions.",
  },
  {
    image: "/starIcon.svg",
    title: "User-Friendly",
    quality:
      "Our intuitive interface ensures seamless navigation, making it easy to access our services anytime, anywhere.",
  },
  {
    image: "/profile-circle.svg",
    title: "Comprehensive Support",
    quality:
      "Benefit from 24/7 customer support ready to assist with any questions or issues you may have.",
  },
  {
    image: "/flash.svg",
    title: "Fast and Efficient",
    quality:
      "Save time with our optimized platform, built to deliver swift results and hassle-free operations.",
  },
];

const Standards = () => {
  return (
    <div className="min-h-screen md:py-24 w-full my-20 px-6 md:px-10 flex flex-col lg:flex-wrap">
      <div>

      <h3 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary-300 mb-4">
        Why use Benleta?
      </h3>
      <p className="text-primary-800 md:max-w-[70%] mb-10">
        At Benleta, we understand that navigating the digital asset landscape
        can be complex. That’s why we’ve created a seamless platform that
        transforms your digital assets into instant cash, enabling you to unlock
        opportunities and achieve your financial goals with ease.
      </p>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        {/* First Cards */}

        <div className="flex flex-col lg:flex-row items-center lg:items-start rounded-3xl w-full mb-4  ">
          <div className="flex flex-col gap-7 w-full md:w-[90%]">
            {peopleTestimonies?.map((test, index) => {
              const { image, title, quality } = test;
              return (
                <div
                  className="mb-4 rounded-2xl gap-3 flex flex-row w-full h-fit"
                  key={index}
                >
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    className="xl:h-7 xl:w-7 h-3 w-3 md:h-6 md:w-6"
                    alt="pic.png"
                  />
                  <div>
                    <h3 className="font-poppins 2xl:text-3xl xl:text-2xl text-lg font-bold text-primary-800">
                      {title}
                    </h3>
                    <p className="text-primary-800 text-sm font-general font-medium ">
                      {quality}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Standards;
