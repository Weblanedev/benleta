import Image from "next/image";
import React from "react";
import { useQRCode } from "next-qrcode";

const SectionTwo = () => {
  const { Canvas } = useQRCode();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-5 md:p-24 w-full lg:w-[87%] xl:w-[90%] mx-auto  overflow-x-hidden mb-[80px]">
      {/* First Cards */}
      <div className=" px-5 md:px-[40px] flex flex-col rounded-3xl w-full mb-4 pt-14 gap-7 items-center">
        <h3 className="text-center font-poppins lg:text-5xl xl:text-6xl md:text-4xl text-3xl font-semibold text-[#132D46] lg:leading-[5rem] leading-[2.5rem] tracking-tighter w-[95%]">
          We take pride in providing the most{" "}
          <span className="text-[#01C38E]">
            competitive rates
          </span>{" "}
          to enhance your conversion experience.
        </h3>
        <p className="text-xs md:text-sm font-general text-[#111111] font-medium text-center">
          Whether you're dealing with small amounts or large volumes, our
          <br /> platform ensures you receive the utmost value from your
          conversions
        </p>
        <Image
          src={"/phone.svg"}
          width={200}
          height={200}
          className="w-full md:w-[40%] mx-auto h-[350px] md:h-[400px]"
          alt="pic.png"
        />
      </div>
      {/* <div className='bg-[#0B0C0C] px-5 md:px-[40px] flex flex-col lg:flex-row rounded-3xl w-full mb-4 pt-8'>
        <div className='w-full lg:w-[48%] '>
          <Canvas
            text={'https://forms.gle/Ji2VpQwnueMFR6dz5'}
            options={{
              level: 'M',
              margin: 3,
              scale: 4,
              width: 100,
              color: {
                dark: '#000000',
                light: '#ffffff',
              },
            }}
          />


          <h5 className='text-3xl md:text-5xl text-[#E2E5E9] mb-5 mt-12 font-semibold'>
            Shop & pay with virtual cards
          </h5>
          <p className='text-[#A8B3BD] text-sm mb-12 w-[70%] font-general'>
            It takes just one click to pay for your shopping with taja Virtual
            Card.
          </p>
        </div>
        <div className='w-full lg:w-[48%] '>
          <Image
            src={'/2multiple.svg'}
            width={200}
            height={200}
            className='h-full w-[90%] mx-auto'
            alt='pic.png'
          />
        </div>
      </div> */}

      {/* Second Cards */}
      {/* <div className='flex flex-col lg:flex-row gap-4 w-full '> */}
      {/* First Box */}
      {/* <div className='pt-[40px] px-5 md:px-[40px] bg-[#131617] rounded-3xl w-full'>
          <h5 className='text-3xl md:text-4xl text-[#E2E5E9] mb-10 font-semibold'>
            Paste any URL to begin shopping
          </h5>
          <p className='text-[#A8B3BD] text-sm mb-20 w-[70%] font-general'>
            When we said any store, we meant business. Paste your URL and shop
            away.
          </p>
          <Image
            src={'/2half.svg'}
            width={200}
            height={200}
            className='w-full md:w-[80%] mx-auto'
            alt='pic.png'
          />
        </div> */}
      {/* Second Box */}
      {/* <div className='bg-[#0B0C0D] rounded-3xl w-full'>
          <div className=' relative overflow-hidden '>
          <Image
            src={'/2cards.png'}
            width={300}
            height={300}
            className='w-full rounded-t-3xl '
            alt='pic.png'
          />
          </div>

          <h5 className='text-3xl md:text-4xl text-[#E2E5E9] mb-5 mt-12 px-5 md:px-[40px] font-semibold'>
            Check out fast with virtual cards
          </h5>
          <p className='text-[#A8B3BD] text-sm mb-12 px-5 md:px-[40px] w-[80%] font-general'>
            Seamlessly connect to international markets using your local
            currency.
          </p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default SectionTwo;
