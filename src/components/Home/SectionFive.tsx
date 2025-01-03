import Image from "next/image";
import React from "react";
import Scroll from "../../data/scroll.json";

const SectionFive = () => {
  const [scrollTop, setScrollTop] = React.useState(0);

  const handleScroll = (event: any) => {
  
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <div className="flex min-h-[84vh] h-screen 2xl:h-[88vh] flex-col items-center justify-center w-full mx-auto overflow-hidden z-10 relative bg-[#132D46] my-16 ">
      <div className="px-5 md:px-[48px] flex flex-col lg:flex-row rounded-3xl w-full items-center mb-4 justify-between pb-3 overflow-y-hidden max-h-[1100px] lg:max-h-[600px] 2xl:max-h-[750px] h-[100%] lg:w-[80%]">
        <div className="w-full lg:w-[48%] xl:w-[52%] flex flex-col h-[90%] pt-10 lg:justify-between gap-7">
          <div className="flex flex-col gap-7">
            <h5 className="text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-[#E2E5E9] font-semibold">
            We've <span className="text-[#01C38E]">simplified</span> cashing out your earnings with our user friendly platform            
            </h5>
            {/* <h5 className="text-base md:text-2xl lg:text-2xl text-[#E2E5E9] max-lg:hidden">
            Scroll the cards to the right to check it out!
            </h5> */}
          </div>

          {scrollTop < 350 ? (
            <div className="lg:mb-8">
              <p className="text-white text-xl md:text-2xl mb-3">
                1. Sign up
              </p>
              <p className="text-[#A8B3BD] text-sm mb-12 w-[80%] font-general">
              Sign up with you email address and other user details
              </p>
            </div>
          ) : scrollTop >= 350 && scrollTop <= 960 ? (
            <div className="lg:mb-8">
              <p className="text-white text-xl md:text-2xl mb-3">
                2. Add your bank account details
              </p>
              <p className="text-[#A8B3BD] text-sm mb-12 w-[80%] font-general">
              Add your bank account to receive your fiat equivalent of your asset
              </p>
            </div>
          ) : scrollTop >= 960 && scrollTop <= 1550 ? (
            <div className="lg:mb-8">
              <p className="text-white text-xl md:text-2xl mb-3">
                3. Select your asset and network 
              </p>
              <p className="text-[#A8B3BD] text-sm mb-12 w-[80%] font-general">
              Select the asset of your choice from our range of assets 
              </p>
            </div>
          ) : scrollTop >= 1550 && scrollTop <= 2170 ? (
            <div className="lg:mb-8">
              <p className="text-white text-xl md:text-2xl mb-3">
                4. Generate your wallet address
              </p>
              <p className="text-[#A8B3BD] text-sm mb-12 w-[80%] font-general">
              Click on the button below to generate a wallet address matching your select asset and network
              </p>
            </div>
          ) : scrollTop >= 2170 && scrollTop <= 2800 ? (
            <div className="lg:mb-8">
              <p className="text-white text-xl md:text-2xl mb-3">
                5. Transfer your asset
              </p>
              <p className="text-[#A8B3BD] text-sm mb-12 w-[80%] font-general">
              Transfer your asset and receive the fiat equivalent directly to your bank account
              </p>
            </div>
          ) : null}
        </div>
        <div
          className="w-full lg:w-[36%] overflow-y-scroll lg:mr-28 xl:mr-36 md:max-h-[580px] xl:max-h-[83%] lg:absolute z-10 lg:right-0 lg:bottom-0 no-scrollbar bg-[rgba(255,255,255,0.1)] rounded-t-2xl"
          onScroll={handleScroll}
        >
          {Scroll.map(({ img }, index) => {
            return (
              <div className="  rounded-2xl px-3 md:px-2 pt-8 z-20 relative  mb-4 min-h-[595px] max-h-[600px] 2xl:min-h-[630px] 2xl:max-h-[740px] overflow-hidden" key={index}>
                <Image
                  src={img}
                  width={700}
                  height={700}
                  className="w-[80%] md:w-[60%] xl:w-[350px] mx-auto min-h-[560px] max-h-[580px] md:min-h-[550px] md:max-h-[570px]  xl:min-h-[580px] xl:max-h-[620px] 2xl:min-h-[620px] 2xl:max-h-[660px] -z-30 relative rounded-t-2xl"
                  alt="pic.png"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
