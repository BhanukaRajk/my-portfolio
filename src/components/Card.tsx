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

const Card: React.FC<propsType> = ({ title, desc, img, techs, tools, completion, repo }) => {
    return (
        <div
            data-aos="zoom-in-up"
            className="font-serif bg-white p-6 border border-gray-300 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl w-full max-w-md mx-auto"
        >
            <h5 className="mb-4 text-2xl font-bold text-center text-gray-900">{title}</h5>
            <div className="relative mb-6 overflow-hidden rounded-lg group">
                <Image
                    src={img}
                    className="w-full h-56 object-fill rounded-lg"
                    alt={`${title} Image`}
                    width={500}
                    height={500}
                />
                <a href={repo} target="_blank">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                        <FaGithub className="text-4xl text-white opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </a>
            </div>

            <p className="mb-4 text-center text-gray-700 text-base leading-relaxed">{desc}</p>
            <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800">Tech Stack:</p>
                <p className="text-sm text-gray-600 flex flex-wrap gap-1">
                    {techs.map((tech, index) => (
                        <span key={tech} className="after:content-[','] last:after:content-['']">{tech}</span>
                    ))}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800">Tools:</p>
                <p className="text-sm text-gray-600 flex flex-wrap gap-1">
                    {tools.map((tool, index) => (
                        <span key={tool} className="after:content-[','] last:after:content-['']">{tool}</span>
                    ))}
                </p>
            </div>

            <p className="text-sm text-gray-500 text-right">
                <small>Completion: <u>{completion}</u></small>
            </p>

            <div className="mt-5 flex justify-center">
                <a
                    href={repo}
                    target="_blank"
                    className="flex items-center gap-2 text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-300 px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg"
                >
                    <FaGithub className="text-lg" /> Repository
                </a>
            </div>
        </div>
    );
};

export default Card;
