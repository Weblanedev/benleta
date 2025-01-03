import Image from "next/image";
import React from "react";

const BlurredCaption = () => {

  const MidBlurText = ({ text, blurSections, strength }: any) => {
    const words = text.split(" ");
    return (
      <p className="font-poppins text-3xl md:text-6xl xl:text-7xl font-bold text-center whitespace-nowrap py-1">
        {words.map((word: any, index: any) => {
          const shouldBlur = !blurSections.includes(index);
          return shouldBlur ? (
            <span
              className="px-1 "
              key={index}
              style={{
                filter: `blur(2px)`,
                opacity: 0.1,
              }}
            >
              {word}
            </span>
          ) : (
            <span
              className={`md:px-1`}
              style={{
                filter: strength && `blur(${strength + "px"})`,
                opacity: strength && 0.1,
              }}
              key={index}
            >
              {word + " "}
            </span>
          );
        })}
      </p>
    );
  };

  const pngImagePaths = [
    "/images/ostar.png",
    "/images/ystar.png",
    "/images/lstar.png",
    "/images/pstar.png",
  ];

  return (
    <div className="relative text-white bg-blend-difference w-[100%] md:w-[90%] flex flex-col items-center overflow-hidden lg:mb-[180px] mb-[80px]">
      <div className=" overflow-hidden  w-[82%] md:w-[79%] flex justify-center ">
        <p className="text-2xl md:text-5xl xl:text-7xl whitespace-nowrap font-bold lg:py-3 py-1 bg-gradient-to-r from-lightStart via-lightMid to-lightStart text-transparent bg-clip-text ">
          competitive rates
          {/* <span className="blur-[2px] text-[rgba(255,255,255,.1)]">ping</span> */}
        </p>
      </div>

      <div className="relative">
        <div className="flex md:gap-3 lg:gap-4 gap-2 py-1">
        <p className="font-poppins text-3xl md:text-6xl xl:text-7xl font-bold text-center whitespace-nowrap bg-gradient-to-r from-lightStart to-endLight text-transparent bg-clip-text ">
          wap
          {/* <span className="blur-[2px] text-[rgba(255,255,255,.1)]">ping</span> */}
        </p>
        <p className="font-poppins text-3xl md:text-6xl xl:text-7xl font-bold text-center whitespace-nowrap text-[#132D46]">utmost value from</p>
        <p className="font-poppins text-3xl md:text-6xl xl:text-7xl font-bold text-center whitespace-nowrap bg-gradient-to-l from-lightStart to-endLight text-transparent bg-clip-text ">
          life
          {/* <span className="blur-[2px] text-[rgba(255,255,255,.1)]">ping</span> */}
        </p>
        {/* <MidBlurText
          text={"utmost value from lifes"}
          blurSections={[0,1]}
        /> */}
        </div>
        

        <Image
          src={pngImagePaths[0]}
          width={100}
          height={100}
          alt="pic.png"
          className="w-3 h-3 md:w-5 md:h-5 mx-4 lg:w-6 lg:h-6 rounded-xl absolute -top-4 right-[45%]"
        />

        <Image
          src={pngImagePaths[1]}
          width={100}
          height={100}
          alt="pic.png"
          className="w-3 h-3 md:w-5 md:h-5 mx-4 lg:w-6 lg:h-6 rounded-xl absolute top-[90%] right-[35%]"
        />
      </div>

      <div className="relative">
      <div className="flex md:gap-3 lg:gap-4 gap-2 py-1">
        <p className="font-poppins text-3xl md:text-6xl xl:text-7xl font-bold text-center whitespace-nowrap bg-gradient-to-r from-lightStart to-endLight text-transparent bg-clip-text ">
          ypto
          {/* <span className="blur-[2px] text-[rgba(255,255,255,.1)]">ping</span> */}
        </p>
        <p className="font-poppins text-3xl md:text-6xl xl:text-7xl font-bold text-center whitespace-nowrap text-[#132D46]">your conversions</p>
        <p className="font-poppins text-3xl md:text-6xl xl:text-7xl font-bold text-center whitespace-nowrap bg-gradient-to-l from-lightStart to-endLight text-transparent bg-clip-text ">
          mo
          {/* <span className="blur-[2px] text-[rgba(255,255,255,.1)]">ping</span> */}
        </p>

        </div>
        {/* <div className=" flex justify-center overflow-hidden">
          <MidBlurText
            text={"  more"}
            blurSections={[1, 2]}
          />
        </div> */}
        <Image
          src={pngImagePaths[2]}
          width={100}
          height={100}
          alt="pic.png"
          className="w-3 h-3 md:w-5 md:h-5 mx-4 lg:w-6 lg:h-6 rounded-xl absolute -top-0 lg:-top-[10%] left-[45%]"
        />
        <Image
          src={pngImagePaths[3]}
          width={100}
          height={100}
          alt="pic.png"
          className="w-3 h-3 md:w-5 md:h-5 mx-4 lg:w-6 lg:h-6 rounded-xl absolute -top-[110%] lg:-top-[110%] left-[35%]"
        />
      </div>

      <div className="overflow-hidden  w-[82%] md:w-[80%] flex justify-center ">
        <p className="text-2xl md:text-5xl xl:text-7xl whitespace-nowrap font-bold lg:py-3 py-1 bg-gradient-to-r from-lightStart via-lightMid to-lightStart  text-transparent bg-clip-text">
          eamless conversio
          {/* <span className="blur-[2px] text-[rgba(255,255,255,.1)]">opping</span> */}
        </p>
      </div>

      {/* <Image
        src={"/images/footer.png"}
        width={100}
        height={100}
        alt="pic.png"
        className="absolute rotate-[14deg] top-[5%] md:top-[14%] lg:top-[1%] right-[5%] lg:right-[19%] md:right-[8%] h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 rounded-lg md:rounded-2xl"
      /> */}

      {/* <Image
        src={"/images/footer2.png"}
        width={100}
        height={100}
        alt="pic.png"
        className="absolute -rotate-[12deg] top-[75%] md:top-[72%] left-[5%] md:left-[0.5%] lg:left-[12%] h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 rounded-lg md:rounded-2xl"
      /> */}
    </div>
  );
};

export default BlurredCaption;
