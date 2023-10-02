import React from "react";
import Image from 'next/image';

const Footer = () => {

    const alertUser = () => {
        alert("This component is under development!");
    }

    return (
        <section className="mt-36 bg-gray-900 text-white py-16 px-8 z-30">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between gap-10">
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <div className="mb-8">
                            <a href="http://localhost:3000/" target="_blank" rel="noopener" title="Link Title">
                                <Image
                                    src="/favicon.ico"
                                    loading="lazy"
                                    alt="Bhanuka Rajakaruna's logo"
                                    className="logo"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </div>
                        <div className="mb-8">
                            <p className="text-gray-400">
                                &quot;Hello, I&apos;m Bhanuka Rajakaruna. I&apos;m a friendly and outgoing individual who enjoys connecting 
                                with people from all walks of life. I believe in the value of building meaningful relationships and fostering 
                                a positive atmosphere wherever I go. I&apos;m known for my approachability and willingness to engage in thoughtful 
                                conversations. My behaviors reflect my commitment to kindness, respect, and empathy in all social interactions.&quot;</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="mb-8">
                            <div className="text-white mb-4">Find Me On</div>
                            <ul role="list" className="space-y-2">
                                <li className="">
                                    <a href="https://www.linkedin.com/in/bhanukarajk/" target="_blank" rel="noopener" className="text-green-500 hover:text-green-200">
                                        LinkedIn
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.facebook.com/bhanuka.rajakaruna.3/" target="_blank" rel="noopener" className="text-green-500 hover:text-green-200">
                                        Facebook
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://github.com/BhanukaRajk/" target="_blank" rel="noopener" className="text-green-500 hover:text-green-200">
                                        GitHub
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.behance.net/pdpbrajakar/" target="_blank" rel="noopener" className="text-green-500 hover:text-green-200">
                                        Behance
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.quora.com/profile/Bhanuka-Yasintha-Rajakaruna/" target="_blank" rel="noopener" className="text-green-500 hover:text-green-200">
                                        Quora
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="mb-8">
                            <div className="text-white mb-4">Future Updates</div>
                            <ul role="list" className="space-y-2">
                                <li className="cursor-pointer"><a onClick={alertUser} className="text-green-500 hover:text-green-200">Education</a></li>
                                <li className="cursor-pointer"><a onClick={alertUser} className="text-green-500 hover:text-green-200">Other Skills</a></li>
                                <li className="cursor-pointer"><a onClick={alertUser} className="text-green-500 hover:text-green-200">Hobbies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="text-center mt-36">
                <div className="container mx-auto">
                    <div className="text-green-600">Designed by Bhanuka Rajakaruna @BTecH | All rights reserved 2023.</div>
                </div>
            </section>
        </section>

    );
};

export default Footer;