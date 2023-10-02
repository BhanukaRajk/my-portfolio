import React from "react";
import Image from 'next/image';

const Footer = () => {
    return (
        <section className=" bg-zinc-800 text-white py-16 px-8 z-30">
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
                            <p className="text-gray-400">An enthusiastic third-year computer science undergraduate with a passion for cutting-edge technologies,
                                I am a self-motivated and passionate learner, making daily progress in my journey. With a can-do attitude,
                                I actively engage in the entire work process, striving for hands-on experience and continuous growth.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="mb-8">
                            <div className="text-white mb-4">Find Me On</div>
                            <ul role="list" className="space-y-2">
                                <li className="">
                                    <a href="https://www.linkedin.com/in/bhanukarajk/" target="_blank" rel="noopener" className="text-green-400 hover:text-green-200">
                                        LinkedIn
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.facebook.com/bhanuka.rajakaruna.3/" target="_blank" rel="noopener" className="text-green-400 hover:text-green-200">
                                        Facebook
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://github.com/BhanukaRajk/" target="_blank" rel="noopener" className="text-green-400 hover:text-green-200">
                                        GitHub
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.behance.net/pdpbrajakar/" target="_blank" rel="noopener" className="text-green-400 hover:text-green-200">
                                        Behance
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.quora.com/profile/Bhanuka-Yasintha-Rajakaruna/" target="_blank" rel="noopener" className="text-green-400 hover:text-green-200">
                                        Quora
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="mb-8">
                            <div className="text-white mb-4">Updates</div>
                            <ul role="list" className="space-y-2">
                                <li className=""><a href="/" className="text-green-400 hover:text-green-200">Education</a></li>
                                <li className=""><a href="/" className="text-green-400 hover:text-green-200">Other Skills</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="text-center mt-36">
                <div className="container mx-auto">
                    <div className="text-gray-400">Designed by Bhanuka Rajakaruna | All rights reserved 2023.</div>
                </div>
            </section>
        </section>


        // </footer>
    );
};

export default Footer;