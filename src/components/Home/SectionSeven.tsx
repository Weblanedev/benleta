import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

const FAQs = () => {
  const [selected, setselected] = React.useState<any | number>(0);
  const arr = [
    {
      no: "01",
      title: "Which  digital assets do you support?",
      text: "We offer support for a wide range of digital assets to accommodate diverse user preferences. Our supported cryptocurrencies include popular choices like Bitcoin and USDT (Tether), providing flexibility and accessibility for users to securely manage their digital assets.",
    },
    {
      no: "01",
      title: "Which countries are eligible for payout?",
      text: "At the moment, our payout services are designed specifically for Nigerian users, allowing for seamless transactions directly to Nigerian bank accounts. While our primary focus is on serving the Nigerian market, we're always exploring opportunities to expand our services to other regions in the future.",
    },
    {
      no: "01",
      title: "How quickly do bank account payouts process?",
      text: "Our dedication to efficiency guarantees quick processing of bank account payouts. In most instances, transfers to your bank account are finalized in less than a minute, ensuring you can access your funds promptly and without any delays. Timely delivery is our priority, enhancing your overall experience with our platform.",
    },
    {
      no: "01",
      title: "Is your platform compliant with regulatory standards?",
      text: "Absolutely. Compliance with regulatory requirements is a cornerstone of our operations. We adhere strictly to all relevant rules and regulations governing our industry, ensuring that our platform maintains the highest standards of legality, security, and transparency. You can trust in our platform's compliance measures, providing you with peace of mind and confidence when utilizing our services.",
    },
    {
      no: "01",
      title: "What is the minimum and maximum amount of USDT you can deposit?",
      text: "The minimum amount you can deposit is 2 USDT; any transaction below this amount will fail. For a single transaction, the maximum amount allowed is ₦10,000,000 (Ten Million Naira) equivalent. However, there is no restriction on the number of transactions you can perform in a day.",
    },
  ];

  const text = "Got questions about Taja? We've got";
  let words = text.split(" ");
  const pngImagePaths = ["/images/ostar.png", "/images/ystar.png"];

  return (
    <div className="md:w-[80%] lg:w-[85%] px-5 py-10 flex flex-col md:flex-row md:justify-between my-24">
      <div className="flex flex-col w-full md:w-[50%] lg:w-[45%] 2xl:w-[43%] ">
        <div className="relative">
          <div className="mb-5 mt-12 justify-start w-full flex flex-row flex-wrap tracking-tighter">
            {words.map((word, index) => (
              <div key={index} className="relative flex flex-row">
                <p className="text-4xl md:text-4xl lg:text-[55px] lg:leading-none 2xl:text-6xl text-[#132D46] font-semibold py-1">
                  {word}
                  <span className="px-2"> </span>
                </p>
                {index == 1 && (
                  <Image
                    src={pngImagePaths[0]}
                    width={100}
                    height={100}
                    alt="pic.png"
                    className="w-3 h-3 md:w-7 md:h-7 mx-4 rounded-xl absolute -top-2 md:-top-3"
                  />
                )}
                {index == 3 && (
                  <Image
                    src={pngImagePaths[1]}
                    width={100}
                    height={100}
                    alt="pic.png"
                    className="w-3 h-3 md:w-6 md:h-6 mx-4 rounded-xl absolute top-0 md:-top-2 md:right-2/3"
                  />
                )}
              </div>
            ))}
            <span className="text-primary-300 text-4xl md:text-5xl lg:text-6xl font-semibold py-1">
              answers
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-[50%] ">
        <div className="w-full mx-auto ">
          {arr.map(({ text, title, no }, index) => {
            return (
              <div key={index} className={`py-6 md:px-8 flex flex-row`}>
                <div>
                  <h3
                    className={`text-xl md:text-2xl mb-4 text-[#132D46] w-[95%] font-general font-medium`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-[#637381] text-base leading-5 md:leading-6 md:w-[80%] lg:w-[88%] font-general font-medium ${
                      selected === index ? "block" : "hidden"
                    }`}
                  >
                    {text}
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (selected === index) {
                      setselected(null);
                    } else {
                      setselected(index);
                    }
                  }}
                  className="bg-white rounded-full border-[1.5px] p-2 mb-auto ml-auto border-[rgba(19,45,70,1)]"
                >
                  {selected === index ? (
                    <AiOutlineMinus color="#A8B3BD" size={20} />
                  ) : (
                    <AiOutlinePlus color="#A8B3BD" size={20} />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
