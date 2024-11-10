import React from "react";

interface propsType {
    logo: any;
    lang: string;
}

const SkillCard: React.FC<propsType> = ({ logo, lang }) => {
    return (
        <div className="flex justify-center items-center rounded-lg text-accent bg-gray-200 w-64 md:w-48 text-lg sm:text-xl py-3 px-2 hover:scale-105 hover:bg-gray-500 hover:text-gray-100 transition-all duration-300 ease-in-out cursor-default">
            <div> {logo} </div>
            <div>&nbsp;{lang}</div>
        </div>
    );
};

export default SkillCard;