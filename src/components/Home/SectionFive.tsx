import Image from "next/image";
import React from "react";
import Scroll from "../../data/scroll.json";

const SectionFive = () => {
  const howToUseBenleta = [
    {
      step: 1,
      title: "Sign Up and Create an Account",
      description:
        "Visit our website or app, sign up with your details, and set up your personalized account in minutes.",
    },
    {
      step: 2,
      title: "Explore and Select Services",
      description:
        "Browse through our features, choose the services you need, and follow the straightforward instructions to get started.",
    },
    {
      step: 3,
      title: "Convert with Ease",
      description:
        "Effortlessly convert your digital assets to cash or other formats. Our platform ensures fast, secure, and hassle-free transactions directly to your bank account, so you can enjoy your funds without delays.",
    },
  ];

  return (
    <div className="flex min-h-[84vh] h-screen 2xl:h-[88vh] flex-col items-center justify-center w-full mx-auto overflow-hidden z-10 relative bg-primary-900 my-16 ">
      <div className="px-5 md:px-[48px] flex flex-col lg:flex-row rounded-3xl w-full items-center mb-4 justify-between pb-3 overflow-y-hidden max-h-[1100px] h-[100%] lg:w-[80%]">
        <div className="w-full flex flex-col h-[90%] md:h-[80%] lg:h-[70%] pt-10 lg:justify-between gap-7">
          <div className="flex flex-col gap-7">
            <h5 className="md:max-w-[40%] text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-[#fff] font-semibold">
              Getting started on
              <span className="text-primary-300"> Benleta</span>
            </h5>
          </div>
          <div className="flex flex-col gap-x-8 md:flex-row md:justify-around">
            {howToUseBenleta.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col items-start bg-primary-50 h-fit shadow-lg p-6 rounded-lg max-w-sm mx-auto transform ${
                  index == 0 ? "mt-0" : index == 1 ? "mt-[8%]" : "mt-[16%]"
                } ${
                  index % 2 === 0
                    ? "translate-y-6 md:translate-y-0"
                    : "-translate-y-6 md:translate-y-0"
                }`}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-primary-300 text-white rounded-full mb-4">
                  {step.step}
                </div>
                <h2 className="text-xl font-semibold mb-2 text-primary-900">{step.title}</h2>
                <p className="text-gray-400 font-general">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
