import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

// import Image from "next/image";
// import mobile from "../../public/mobile.png";

const Contact = () => {
    return (
        <div id="contact" className="pt-32 pb-14 container">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <h2 className="text-5xl" data-aos="zoom-in-up">
                        Get in touch
                    </h2>
                    <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
                        Drop me a line, give me a call, or send me a message by submitting
                        the form.
                    </p>

                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <AiOutlineMail size={30} /> bhanukayar@gmail.com
                    </div>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <BsTelephone size={30} /> +94 76 2096020
                    </div>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <AiFillGithub size={30} /> <a href="https://github.com/BhanukaRajk">BhanukaRajk - Bhanuka Rajakaruna</a>
                    </div>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <AiFillLinkedin size={30} /> <a href="https://www.linkedin.com/in/bhanukarajk/">Bhanuka Rajakaruna</a>
                    </div>
                </div>

                <div className="hidden space-y-8">
                    <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="h-[40px] bg-gray-800 border border-gray-600 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            className="h-[40px] bg-gray-800 border border-gray-600 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                        <label htmlFor="msg">Message</label>
                        <textarea
                            id="msg"
                            className="bg-gray-800 border border-gray-600 resize-none rounded-lg"
                            rows={8}
                        ></textarea>
                    </div>

                    <button className="bg-green-600 p-2 px-6 rounded-lg" data-aos="zoom-in-up">
                        Send
                    </button>
                </div>
                <div className=" space-y-8 translate-x-16">
                    {/* <Image
                        className="w-[100%] max-w-[300px] sm:max-w-[350px] heroFadeIn "
                        data-aos="zoom-in-up"
                        src={mobile}
                        alt="Profile Image"
                        loading="lazy"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;