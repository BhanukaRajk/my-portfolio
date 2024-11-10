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

            <div className="my-16 text-center">
                <div data-aos="zoom-in-up">
                    <h2 className="text-3xl md:text-4xl font-serif">Get in touch</h2>
                    <p className="text-gray-500 pt-2">
                        Drop me a text or reach me out via social media
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4 p-10">
                    <h2 className="text-2xl md:text-xl font-serif" data-aos="zoom-in-up">Drop me a text by saying &quot;Hi &#128075;&quot;</h2>
                    <div className="flex gap-2 items-center" data-aos="zoom-in-up">
                        <MdEmail size={30}/> bhanukayar@gmail.com
                    </div>
                    <div className="flex gap-2 items-center" data-aos="zoom-in-up">
                        <AiFillGithub size={30}/> <a href="https://github.com/BhanukaRajk">BhanukaRajk</a>
                    </div>
                    <div className="flex gap-2 items-center" data-aos="zoom-in-up">
                        <AiFillLinkedin size={30}/> <a href="https://www.linkedin.com/in/bhanukarajk/">bhanukarajk</a>
                    </div>
                </div>
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
