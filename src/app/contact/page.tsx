"use client";
import React, { useState } from "react";
import ScrollToTop from "../../utils";
import axios from "axios";
import animations from "../../utils";
//import { Alert } from "@mui/material";

const Page = () => {
  const { hoverAnimation } = animations;
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState({ email: "", phone: "" });
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleStateChange = (e: any) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      firstName: contactData?.first_name?.toString(),
      lastName: contactData?.last_name?.toString(),
      email: contactData?.email?.toString(),
      message: contactData?.message?.toString(),
      phone: contactData?.phone?.toString(),
    };
    try {
      const res = await axios.post("", data);
      console.log(res);
      setIsLoading(false);
      alert("Message has been sent successfully");
      setContactData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setIsLoading(false);
      setErr({ ...err, email: "Incorrect email", phone: "Must be 11 digits" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-screen">
      <div id="contact-hero">
        <div className="relative text-center">
          <h1 className="text-4xl md:text-7xl text-center font-bold text-primary-300">
            Contact Us
          </h1>
          <p className=" text-xl !font-extrabold mx-3">
            Feel free to lay your complaints. Let's get in touch
          </p>
          <div className="firstpicture">
            {/* <img className="w-20 h-auto rounded-full" src={person1} alt="" /> */}
          </div>
          <div className="secondpicture">
            {/* <img className="w-24 h-auto rounded-full" src={person2} alt="" /> */}
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div id="contact" className="mt-20">
        <div className="container mx-auto mt-5 mb-3 flex flex-col lg:flex-row lg:justify-between lg:w-8/12">
          <div className="w-full px-4 lg:w-1/3">
            <h2 className="mb-3 text-2xl md:text-4xl font-extrabold">Get in Touch</h2>
            <h4 className=" font-semibold">Address</h4>
            <p>
              Vytauto g. 19, LT-77150, Šiaulių m. sav.
            </p>
            {/* <h4 className="mt-5 font-semibold">Email</h4>
              <NavLink to={"mailto:support@teep.africa"}>
                <p className={`${animations.hoverAnimation}`}>
                  support@teep.africa
                </p>
              </NavLink>
              <h4 className="mt-5 font-semibold">Call</h4>
              <NavLink to={"tel:02018870031"}>
                <p className={`${animations.hoverAnimation}`}> 02018870031</p>
              </NavLink> */}
          </div>
          <div className="w-full lg:w-2/3 mt-10 lg:mt-0">
            <form onSubmit={handleSubmit} className="flex flex-col px-4 py-4 ">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col w-full md:w-1/2 md:mr-2">
                  <label>First name</label>
                  <input
                    placeholder="John"
                    name="first_name"
                    value={contactData.first_name}
                    onChange={handleStateChange}
                    type="text"
                    className="my-2 py-2 border rounded-md bg-transparent px-3"
                    required
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 md:ml-2">
                  <label>Last name</label>
                  <input
                    placeholder="Doe"
                    name="last_name"
                    value={contactData.last_name}
                    onChange={handleStateChange}
                    type="text"
                    className="my-2 py-2 border rounded-md bg-transparent px-3"
                    required
                  />
                </div>
              </div>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                name="email"
                value={contactData.email}
                onChange={handleStateChange}
                className="my-2 py-2 border rounded-md bg-transparent px-3"
                required
              />
              {err?.email?.length > 0 && (
                <p className="text-red-500 text-xs font-bold">{err.email}</p>
              )}
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="e.g 09012345678"
                value={contactData.phone}
                onChange={handleStateChange}
                className="my-2 py-2 border rounded-md bg-transparent px-3"
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                className="my-2 py-2 border rounded-md bg-transparent px-3"
                placeholder="Your message..."
                required
                cols={30}
                value={contactData.message}
                onChange={handleStateChange}
                rows={10}
              />

              {isLoading ? (
                <button
                  disabled={true}
                  className="px-3 mt-2 rounded border py-1 bg-gray-600 text-white ml-auto flex items-center justify-center"
                >
                  <span className="animate-spin h-4 w-4 border-2 border-white rounded-full mr-2"></span>
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 mt-2 rounded-full py-2 bg-primary-800 text-white ml-auto outline-none border-0"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <section className="location mt-10" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4679829.095705722!2d18.606904822114636!3d55.059460388230434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94140f33be13%3A0xf30a54d3a55dbab9!2sLithuania!5e0!3m2!1sen!2sng!4v1735918823523!5m2!1sen!2sng"
          title="1"
          className="w-full h-[32rem] mb-0"
          style={{ borderTop: 2 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </main>
  );
};

export default Page;
