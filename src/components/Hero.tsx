import React from "react";
import Image from "next/image";
import profileImage from "../../public/avatar.jpeg";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";

const Block = () => {
  return (
    <>
      <Navbar />
      <section id="hero" className="w-full h-screen mb-48 md:mb-0">
        <div className="flex flex-col md:flex-row pt-[20%] sm:pt-0 sm:justify-center items-center h-full gap-5 sm:gap-8 sm:px-8">
          <div className="flex justify-center rounded-[50%] md:mb-5 ">
            <Image
              className="w-[100%] max-w-[300px] md:max-w-[350px] heroFadeIn heroImage"
              data-aos="zoom-in-up"
              src={profileImage}
              alt="Profile Image"
              loading="lazy"
            />
          </div>
          <div 
              data-aos="zoom-in-up" className="flex flex-col text-center md:w-[50%] md:text-left">
            <h1 className="text-primaryBlack text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
              Hello there!
            </h1>
            <p className="text-green-500 font-medium md:font-normal text-lg sm:text-xl md:text-2xl mb-3">
              <TypeAnimation
                sequence={[
                  "Hi! I'm Bhanuka Rajakaruna",
                  1200,
                  "I'm a Full Stack Developer",
                  1200,
                  "Undergraduate at UCSC",
                  1200,
                  "Junior Mechanic",
                  1200,
                ]}
                wrapper="span"
                speed={64}
                repeat={Infinity}
              />
            </p>
            <p className="text-primaryBlack font-normal text-center text-sm sm:text-lg px-5 sm:px-10 md:px-0 text-opacity-80 md:text-justify">
              A passionate Computer Science undergraduate and a tech enthusiast 
              who loves to learn new technologies and build software solutions. 
              I am a quick learner and a team player who is always ready to work 
              with others to achieve a common goal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Block;
