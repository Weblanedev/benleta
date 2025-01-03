import React from "react";
import Image from "next/image";

const peopleTestimonies = [
  {
    image: "/doe1.png",
    name: "John Doe",
    occupation: "Crypto Investor",
    testimony:
      "I've been using Taja for all my crypto conversions, and I must say, they offer the best rates in the market. It's truly a hassle-free experience!",
  },
  {
    image: "/doe2.png",
    name: "Sarah Doe",
    occupation: "Entrepreneur",
    testimony:
      "Taja's fast transfers are unmatched! I converted my crypto to cash and received it in my bank account within seconds. Highly recommended!",
  },
  {
    image: "/doe3.png",
    name: "John Doe",
    occupation: "Crypto Investor",
    testimony:
      "Taja's fast transfers are unmatched! I converted my crypto to cash and received it in my bank account within seconds. Highly recommended!",
  },
  {
    image: "/doe4.png",
    name: "Micheal Doe",
    occupation: "Trader",
    testimony:
      "The dedicated customer support at Taja is exceptional. They are always quick to address any concerns or queries I have, making me feel valued as a customer.",
  },
  {
    image: "/doe5.png",
    name: "Emily Doe",
    occupation: "Crypto Enthusiast",
    testimony:
      "Taja is my go-to platform for converting large volumes of crypto. Their efficient service and seamless process make it incredibly convenient.",
  },
];

const first_array = [
  peopleTestimonies[0],
  peopleTestimonies[1],
  peopleTestimonies[2],
];
const second_array = [peopleTestimonies[3], peopleTestimonies[4]];

const Testimonies = () => {
  const [scrollTop, setScrollTop] = React.useState(0);


  function handleClick() {
    // window.scrollTo({ left: 30, behavior: 'smooth' });
  }
  return (
    <div className="flex min-h-screen h-screen lg:h-fit lg:min-h-[70vh] 2xl:min-h-[60vh] my-24 flex-col lg:items-center lg:px-5 w-full mx-auto mb-[80px] bg-[#132D46]">
      {/* Mobile view */}
      <div className=" lg:hidden flex flex-col w-full justify-center h-full gap-9">
        <div className=" flex flex-col gap-4 h-fit lg:bottom-0 px-7">
          <Image
            src={"/commas.svg"}
            width={200}
            height={200}
            className="h-16 w-16"
            alt="pic.png"
          />
          <span className="flex flex-col gap-3">
            <h3 className=" md:text-5xl text-[40px] leading-none font-poppins text-[#E2E5E9] font-medium tracking-tighter">
              Testimonials
            </h3>
            <p className="text-[#A8B3BD] text-sm font-general font-medium">
              Don’t just trust one side of the story! <br />
              Here’s what Tajians have said about us.
            </p>
          </span>
        </div>
        <div className="w-full flex flex-col gap-6 items-center ">
          <div className="overflow-x-scroll no-scrollbar " onLoad={handleClick}>
            <div className="flex flex-row relative   gap-4 w-[200%]">
              {first_array?.map((test, index) => {
                const { image, name, occupation, testimony } = test;

                return (
                  <span
                    className={`bg-[rgba(17,17,17,0.3)] flex flex-col px-5 gap-4 py-6 rounded-2xl`}
                    key={index}
                  >
                    <div className="flex gap-3">
                      <span className="">
                        <Image
                          src={image}
                          width={200}
                          height={200}
                          className=" h-14 w-14 md:h-16 md:w-16"
                          alt="pic.png"
                        />
                      </span>

                      <span className="flex flex-col  gap-1">
                        <h3 className="xl:text-sm  text-xs font-poppins">
                          {name}
                        </h3>
                        <p className=" text-[10px] font-general">
                          {occupation}
                        </p>
                      </span>
                    </div>

                    <p className="xl:text-sm text-xs font-general">
                      {testimony}
                    </p>
                  </span>
                );
              })}
             
            </div>
          </div>

          <div className="overflow-x-scroll no-scrollbar">
            <div className="flex flex-row relative   gap-4 w-[130%]">
              {second_array?.map((test, index) => {
                const { image, name, occupation, testimony } = test;

                return (
                  <span
                    className={`bg-[rgba(17,17,17,0.3)] flex flex-col px-5 gap-4 py-6 rounded-2xl`}
                    key={index}
                  >
                    <div className="flex gap-3">
                      <span className="">
                        <Image
                          src={image}
                          width={200}
                          height={200}
                          className=" h-14 w-14 md:h-16 md:w-16"
                          alt="pic.png"
                        />
                      </span>

                      <span className="flex flex-col  gap-1">
                        <h3 className="xl:text-sm  text-xs font-poppins">
                          {name}
                        </h3>
                        <p className=" text-[10px] font-general">
                          {occupation}
                        </p>
                      </span>
                    </div>

                    <p className="xl:text-sm text-xs font-general">
                      {testimony}
                    </p>
                  </span>
                );
              })}
              
            </div>
          </div>
        </div>
      </div>
      {/* Desktop view */}

      <div className=" px-5 md:px-[40px] xl:px-[60px] 2xl:px-[40px] justify-between lg:flex rounded-3xl lg:w-[85%] w-full gap-10 h-full hidden ">
        <div className="xl:w-[69%] md:w-[70%] flex gap-7">
          <div className=" flex flex-col gap-4 xl:gap-7 2xl:gap-10 xl:w-[80%] 2xl:w-[40%]">
            {peopleTestimonies?.slice(0, 3).map((test, index) => {
              const { image, name, occupation, testimony } = test;
              return (
                <div
                  className={`bg-[rgba(17,17,17,0.3)] flex flex-col xl:px-6 px-5 gap-4 w-full ${
                    index === 2
                      ? "rounded-t-3xl xl:pt-10 pt-10 pb-3"
                      : "rounded-3xl xl:py-10 py-7"
                  }`}
                  key={index}
                >
                  <div className="flex gap-3">
                    <span className="">
                      <Image
                        src={image}
                        width={200}
                        height={200}
                        className="xl:h-12 xl:w-12 h-6 w-6 md:h-9 md:w-9"
                        alt="pic.png"
                      />
                    </span>

                    <span className="flex flex-col xl:gap-2 gap-1">
                      <h3 className="xl:text-sm  text-xs font-poppins">
                        {name}
                      </h3>
                      <p className="xl:text-xs text-[10px] font-general">
                        {occupation}
                      </p>
                    </span>
                  </div>
                  {index !== 2 ? (
                    <p className="xl:text-sm text-xs font-general">
                      {testimony}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 xl:gap-7 2xl:gap-10 xl:w-[80%] 2xl:w-[40%]">
            {peopleTestimonies?.slice(2).map((test, index) => {
              const { image, name, occupation, testimony } = test;
              return (
                <div
                  className={`bg-[rgba(17,17,17,0.3)] flex flex-col xl:px-6 px-5 gap-4 w-full ${
                    index === 0
                      ? "rounded-b-3xl pt-2 pb-4"
                      : "rounded-3xl xl:py-10 py-7"
                  }`}
                  key={index}
                >
                  {index !== 0 ? (
                    <div className="flex gap-3">
                      <span className="">
                        <Image
                          src={image}
                          width={200}
                          height={200}
                          className="xl:h-12 xl:w-12 h-6 w-6 md:h-9 md:w-9"
                          alt="pic.png"
                        />
                      </span>

                      <span className="flex flex-col xl:gap-2 gap-1">
                        <h3 className="xl:text-sm  text-xs font-poppins">
                          {name}
                        </h3>
                        <p className="xl:text-xs text-[10px] font-general">
                          {occupation}
                        </p>
                      </span>
                    </div>
                  ) : null}

                  <p className="xl:text-sm text-xs font-general">{testimony}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex xl:w-[35%] md:w-[25%] px-7 pt-20">
          <div className="pl-3 flex flex-col gap-4 h-fit lg:bottom-0">
            <Image
              src={"/commas.svg"}
              width={200}
              height={200}
              className="h-16 w-16"
              alt="pic.png"
            />
            <span className="flex flex-col gap-3">
              <h3 className="xl:text-5xl 2xl:text-6xl md:text-4xl text-xl font-poppins text-[#E2E5E9] font-medium tracking-tighter">
                Testimonials
              </h3>
              <p className="text-[#A8B3BD] xl:text-base text-sm font-general font-medium">
                Don’t just trust one side of the story! <br /> Here’s what
                Tajians have said about us.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
