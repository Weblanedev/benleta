"use client";
import React from "react";
import { FAQs } from "../../data";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Page = () => {
    const [selected, setselected] = React.useState<any | number>(0);
    const router = useRouter();
    return (
            <main className="pt-24 md:pt-40 text-primary-800 px-3 md:px-12 xl:px-16">
                <div className="mb-5 md:mb-12 flex flex-col md:flex-row md:justify-between gap-4 md:gap-x-8 w-full md:items-center">
                    <h1 className="text-5xl md:text-7xl font-bold">
                        Frequently Asked Questions
                    </h1>
                    <p className=" sm:text-xl md:text-right">
                        There’s a really high chance we already answered the
                        question you have below.
                    </p>
                </div>

                {/* Questions */}
                <div className="flex flex-wrap flex-row justify-between w-full mb-10">
                    {FAQs.map((faq, index) => (
                        <div
                            key={index}
                            className="my-4 w-full md:w-[48%] bg-white p-3 md:p-5 flex flex-row items-center justify-between"
                        >
                            <div>
                                <h2 className="text-2xl font-bold">
                                    {faq.question}
                                </h2>

                                {selected == index && (
                                    <p
                                        className="mt-2"
                                        dangerouslySetInnerHTML={{
                                            __html: faq.answer
                                        }}
                                    />
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    if (selected === index) {
                                        setselected(null);
                                    } else {
                                        setselected(index);
                                    }
                                }}
                                className="text-2xl font-bold"
                            >
                                {selected === index ? (
                                    <FaChevronUp color="#000" size={24} />
                                ) : (
                                    <FaChevronDown color="#000" size={24} />
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                
            </main>
    );
};

export default Page;