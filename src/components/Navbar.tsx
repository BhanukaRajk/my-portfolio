import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(1);

    useEffect(() => {
        // FUNCTION TO HANDLE SCROLL EVENT
        const handleScroll = () => {
            if (window.scrollY > 2700) {
                setIsScrolled(5);
            } else if (window.scrollY > 2000) {
                setIsScrolled(4);
            } else if (window.scrollY > 1500) {
                setIsScrolled(3);
            } else if (window.scrollY > 640) {
                setIsScrolled(2);
            } else {
                setIsScrolled(1);
            }
        };

        // ADD SCROLL EVENT LISTENER
        window.addEventListener("scroll", handleScroll);

        // CLEAN UP THE EVENT LISTENER WHEN THE COMPONENT UNMOUNTS
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
            <div className="flex justify-center font-serif backdrop-blur-lg bg-opacity-50 items-center py-5 w-1/2 rounded-2xl text-md bg-gray-400 shadow-xl">

                <ul className="gap-5 lg:gap-10 hidden md:flex">
                    <li className={` cursor-pointer ${isScrolled == 1 ? "border-b-black border-b-2" : ""}`}
                        onClick={() => scrollToSection("hero")}>Profile
                    </li>
                    <li className={` cursor-pointer ${isScrolled == 2 ? "border-b-black border-b-2" : ""}`}
                        onClick={() => scrollToSection("projects")}>Timeline
                    </li>
                    <li className={` cursor-pointer ${isScrolled == 3 ? "border-b-black border-b-2" : ""}`}
                        onClick={() => scrollToSection("skills")}>Skills
                    </li>
                    <li className={` cursor-pointer ${isScrolled == 4 ? "border-b-black border-b-2" : ""}`}
                        onClick={() => scrollToSection("projects")}>Projects
                    </li>
                    {/*<li className={` cursor-pointer ${isScrolled == 4 ? "border-b-black border-b-2" : ""}`}*/}
                    {/*    onClick={() => scrollToSection("hobbies")}>Hobbies*/}
                    {/*</li>*/}
                    <li className={` cursor-pointer ${isScrolled == 5 ? "border-b-black border-b-2" : ""}`}
                        onClick={() => scrollToSection("contact")}>Contact
                    </li>
                </ul>

                <AiOutlineMenu className="md:hidden" size={30}/>
            </div>
        </div>
    );
};

export default Navbar;