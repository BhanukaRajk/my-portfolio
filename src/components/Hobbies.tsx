import React from "react";
import SkillCard from "./SkillCard";

import {
    BiLogoReact,
    BiLogoJavascript,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoTypescript,
    BiLogoPostgresql,
    BiLogoMongodb,
    BiLogoCPlusPlus,
    BiLogoPython,
    BiLogoTailwindCss,
} from "react-icons/bi";
import {
    SiExpress,
    SiNextdotjs,
    SiMysql,
    SiOctave,
    SiR,
    SiArduino,
    SiTwilio,
    SiBootstrap,
    SiPhp,
} from "react-icons/si";
import { BsCCircleFill } from "react-icons/bs";


const Skills = () => {
    return (
        <section id="skills" className="w-full mb-32 mt-32 px-8">
            <div className="mt-16 text-center">
                <div data-aos="zoom-in-up">
                    <h2 className="text-3xl md:text-4xl font-serif">My hobbies</h2>
                    <p className="text-gray-500 pt-2">
                        What are the things I like to do in my leisure time.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 items-center mt-12">
                <div data-aos="zoom-in-up">
                    <p className="text-xl md:text-2xl">Front End Technologies</p>
                    <p className="text-gray-500 pt-2">
                        Experienced frontend technologies
                    </p>
                </div>

                <div>
                    <div data-aos="zoom-in-up" className="grid md:grid-cols-3 gap-4">
                        <SkillCard logo={<BiLogoReact />} lang={"ReactJS"} />
                        <SkillCard logo={<SiNextdotjs />} lang={"NextJS"} />
                        <SkillCard logo={<BiLogoHtml5 />} lang={"HTML5"} />
                        <SkillCard logo={<BiLogoCss3 />} lang={"CSS3"} />
                        <SkillCard logo={<BiLogoTailwindCss />} lang={"Tailwind"} />
                        <SkillCard logo={<SiBootstrap />} lang={"Bootstrap"} />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 items-center mt-12">
                <div data-aos="zoom-in-up">
                    <p className="text-xl md:text-2xl">Back End & Database Technologies</p>
                    <p className="text-gray-500 pt-2">
                        Experienced backend & database technologies
                    </p>
                </div>

                <div>
                    <div data-aos="zoom-in-up" className="grid md:grid-cols-3 gap-4">
                        <SkillCard logo={<SiPhp />} lang={"PHP"} />
                        <SkillCard logo={<SiExpress />} lang={"Express"} />
                        <SkillCard logo={<SiMysql />} lang={"MySQL"} />
                        <SkillCard logo={<BiLogoPostgresql />} lang={"PostgreSQL"} />
                        <SkillCard logo={<BiLogoMongodb />} lang={"MongoDB"} />
                        <SkillCard logo={<SiTwilio />} lang={"Twilio"} />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 items-center mt-12">
                <div data-aos="zoom-in-up">
                    <p className="text-xl md:text-2xl">Programming and Common languages</p>
                    <p className="text-gray-500 pt-2">
                        Experienced programming languages
                    </p>
                </div>

                <div>
                    <div data-aos="zoom-in-up" className="grid md:grid-cols-3 gap-4">
                        <SkillCard logo={<BsCCircleFill />} lang={"C"} />
                        <SkillCard logo={<BiLogoCPlusPlus />} lang={"C++"} />
                        <SkillCard logo={<BiLogoPython />} lang={"Python"} />
                        <SkillCard logo={<SiArduino />} lang={"Arduino"} />
                        <SkillCard logo={<SiOctave />} lang={"Octave"} />
                        <SkillCard logo={<SiR />} lang={"R"} />
                        <SkillCard logo={<BiLogoJavascript />} lang={"JavaScript"} />
                        <SkillCard logo={<BiLogoTypescript />} lang={"TypeScript"} />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;