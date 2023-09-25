import React from "react";
import Navbar from "./Navbar";

const Block = () => {
  return (
    <div>
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="bg-[url()] lg:bg-[url(/my_image.jpeg)] min-h-screen bg-auto bg-no-repeat rounded-tl-full rounded-b-full p-16"></div>
        <div className="p-16 text-[100px] sm:text-[108px] font-bold leading-tight flex items-center">
          <div>
            <p data-aos="zoom-in-up" className="aos-init aos-animate">Hi! I&apos;m</p>
            <p data-aos="zoom-in-up" className="aos-init aos-animate">Bhanuka</p>
            <p data-aos="zoom-in-up" className="aos-init aos-animate">Rajakaruna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;