import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(1);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > 1500) {
                setIsScrolled(4);
            } else if (window.scrollY > 1200) {
                setIsScrolled(3);
            } else if (window.scrollY > 600) {
                setIsScrolled(2);
            } else {
                setIsScrolled(1);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="md:flex md:justify-center container hidden fixed left-0 right-0 top-2 px-5 z-50">
            <div className="flex justify-center items-center py-5 w-96 border rounded-2xl text-md bg-black">

                <ul className="gap-5 lg:gap-10 hidden md:flex">
                    <li className={` cursor-pointer ${isScrolled == 1 ? "text-green-500" : ""}`} onClick={() => scrollToSection("hero")}>Home</li>
                    <li className={` cursor-pointer ${isScrolled == 2 ? "text-green-500" : ""}`} onClick={() => scrollToSection("projects")}>Projects</li>
                    <li className={` cursor-pointer ${isScrolled == 3 ? "text-green-500" : ""}`} onClick={() => scrollToSection("skills")}>Skills</li>
                    <li className={` cursor-pointer ${isScrolled == 4 ? "text-green-500" : ""}`} onClick={() => scrollToSection("contact")}>Contact</li>
                </ul>

                <AiOutlineMenu className="md:hidden" size={30} />
            </div>
        </div >
    );
};

export default Navbar;