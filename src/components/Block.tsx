import React from "react";
import Navbar from "./Navbar";

const Block = () => {
  return (
    <div className="bg-[url()] lg:bg-[url(/my_image.jpeg)] min-h-screen bg-contain bg-no-repeat">
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center">
          {/* <div className=" w-full bg-[url()] lg:bg-[url(/my_image.jpeg)] min-h-screen bg-auto bg-no-repeat"></div> */}
          <div>
            <p data-aos="zoom-in-up">Hii! I&apos;m</p>
            <p data-aos="zoom-in-up">Bhanuka</p>
            <p data-aos="zoom-in-up">Rajakaruna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;