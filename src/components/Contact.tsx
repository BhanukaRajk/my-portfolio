import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import Image from "next/image";
import mobile from "../../public/notification.png";

const Contact = () => {
    return (
        <section id="contact" className="w-full mb-36 mt-36 px-8">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <div className="text-3xl md:text-4xl">
                        Get in touch
                    </div>
                    <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
                        Drop me a text, give me a call, or send me an email to contact me, or you can contact me via social media as well.
                    </p>

                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <MdEmail size={30} /> bhanukayar@gmail.com
                    </div>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <IoCallSharp size={30} /> +94 762 096 020
                    </div>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <AiFillGithub size={30} /> <a href="https://github.com/BhanukaRajk">BhanukaRajk</a>
                    </div>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <AiFillLinkedin size={30} /> <a href="https://www.linkedin.com/in/bhanukarajk/">bhanukarajk</a>
                    </div>
                </div>

                {/* BACK END CONNECTED EMAILING FUNCTIONALITY */}
                {/* <div className="hidden space-y-8">
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
                </div> */}

                <div className="flex justify-center md:justify-end md:mr-8 my-auto">
                    <Image
                        className="w-[100%] max-w-[300px] sm:max-w-[350px] heroFadeIn rounded-lg"
                        data-aos="zoom-in-up"
                        src={mobile}
                        alt="Profile Image"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;