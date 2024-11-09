import Image from "next/image";
import React from "react";

import { FaGithub } from "react-icons/fa";

interface propsType {
    title: string;
    desc: string;
    img: string;
    techs: string[];
    tools: string[];
    completion: string;
    repo: string;
}

const Card: React.FC<propsType> = ({ title, desc, img, techs, tools, completion, repo, }) => {
    return (

        <div data-aos="zoom-in-up" className=" bg-gray-200 p-5 border border-gray-300 rounded-xl mb-6 lg:mb-0 h-[600px] w-fit shadow-lg dark:shadow-black/20">
            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat"
                data-te-ripple-init data-te-ripple-color="light">
                <Image
                    src={img}
                    className="w-full"
                    alt="Louvre"
                    width={500}
                    height={500}
                />
                <a href={repo}>
                    <div
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                </a>
            </div>

            <h5 className="mb-3 text-xl font-bold text-gray-500">{title}</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-md text-danger dark:text-danger-500">
                {desc}
            </div>
            <div className="flex-col justify-between">
                <div>
                    <p className=" font-semibold text-emerald-600 dark:text-emarld-300 ">
                        Used technologies:
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-300 flex flex-wrap">
                        {techs.map((el, index) => (
                            <span key={el}>
                                {el}
                                {index !== techs.length - 1 && <>,&nbsp;</>}
                            </span>
                        ))}
                    </p>
                    <br /><p className="font-semibold text-emerald-600 dark:text-emarld-500 ">
                        Tools:
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-500 flex flex-wrap">
                        {tools.map((el, index) => (
                            <span key={el}>
                                {el}
                                {index !== tools.length - 1 && <>,&nbsp;</>}
                            </span>
                        ))}
                    </p>
                    <br />
                    <p className="text-neutral-700 dark:text-neutral-500">
                        <small>Completion: <u>{completion}</u></small>
                    </p>
                </div>
                <div className="hidden flexn justify-center text-sm rounded-md py-2 mt-5 cursor-pointer hover:bg-white hover:text-black bg-green-600 text-white transition-all">
                        <a
                            href={repo}
                            target="_blank"
                            className="flex gap-1 items-center"
                        >
                            <FaGithub className="text-2xl " />&nbsp;Repository
                        </a>
                </div>
            </div>
        </div>

    );
};

export default Card;