import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
    {
        id: 0,
        title: "MicroCAPS",
        desc: "A simple management system for the Micro Cars assembling factory in Polgahawela, Sri Lanka",
        img: "/microcaps_snapshot.png",
        tags: ["PHP", "CSS", "JavaScript", "MySQL", "No Framework"],
    },
    {
        id: 1,
        title: "The Suit Lab",
        desc: "A React & Node Based website to help you find, order and hire a suit for your next event",
        img: "/tsl_snapshot.png",
        tags: ["React", "Node", "ThreeJS", "Twilio", "PostgreSQL"],
    },
    {
        id: 2,
        title: "My Portfolio",
        desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
        img: "/portfolio_snapshot.png",
        tags: ["Next", "React", "Tailwind", "SCSS", "AOS", "TypeScript"],
    },
];

const Projects = () => {
    return (
        <div className="container pt-32">
            <Heading title="My Projects" />
            <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {data.map((el) => (
                    <Card
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;