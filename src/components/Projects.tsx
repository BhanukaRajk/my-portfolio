import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const projects = [
    {
        id: 0,
        title: "MicroCAPS",
        desc: "A simple assembly management system for the Micro Cars assembling factory in Polgahawela, Sri Lanka",
        img: "/microcaps-snapshot.png",
        tech: ["PHP", "CSS", "JavaScript", "MySQL", "Own PHP Framework"],
        tools: ["Visual Studio Code", "PhpStorm", "XAMPP", "DataGrip", "Git", "Adobe Photoshop"],
        completion: "2023 May 15",
        repo: "https://github.com/BhanukaRajk/MicroCAPS",
    },
    {
        id: 1,
        title: "The Suit Lab",
        desc: "A React & Node Based website to help you find, order and hire a suit for your next event",
        img: "/thesuitlab-snapshot.png",
        tech: ["React", "Node", "ThreeJS", "Twilio", "PostgreSQL"],
        tools: ["Visual Studio Code", "WebStorm", "Blender", "GitHub Desktop", "Figma", "DataGrip", "Postgres", "Postman"],
        completion: "On Going",
        repo: "https://github.com/BinulaRasanjith/TheSuitLab-backend",
    },
    {
        id: 2,
        title: "My Portfolio",
        desc: "A React, Next & Node based web portfolio to showcase my skills and projects",
        img: "/portfolio-snapshot.png",
        tech: ["NextJS", "React", "Tailwind", "SCSS", "TypeScript", "Netlify",],
        tools: ["Visual Studio Code", "WebStorm", "Git"],
        completion: "Last Update 2023 Oct 02",
        repo: "https://github.com/BhanukaRajk/my-portfolio",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="w-full mb-16 mt-32 px-8">
            <div className="my-4">
                <div data-aos="zoom-in-up">
                    <div className="text-3xl md:text-4xl">Projects</div>
                    <p className="text-gray-500 pt-2">
                        These are the projects I have worked on so far.
                    </p>
                </div>
            </div>
            <div className="grid md:gap-10 xl:gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {projects.map((proj) => (
                    <Card
                        key={proj.id}
                        title={proj.title}
                        desc={proj.desc}
                        img={proj.img}
                        techs={proj.tech}
                        tools={proj.tools}
                        completion={proj.completion}
                        repo={proj.repo}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;