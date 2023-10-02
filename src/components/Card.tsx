import Image from "next/image";
import React from "react";

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
    return (
        // <div
        //     className="border border-accent w-[300px] sm:w-[350px]"
        //     data-aos="zoom-in-up"
        // >
        //     <div>
        //         <Image
        //             className="w-[300px] sm:w-[350px] h-auto"
        //             src={img}
        //             width={350}
        //             height={350}
        //             alt={title}
        //         />
        //     </div>

        //     <div className="p-4 space-y-4">
        //         <div className="text-4xl font-extralight">{title}</div>
        //         <div>{desc}</div>
        //         <div>
        //             {tags.map((el) => (
        //                 <div className="tags" key={el}>
        //                     {el}
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
        <div
            className="border rounded-lg shadow-md w-[300px] sm:w-[350px] overflow-hidden"
            data-aos="zoom-in-up"
        >
            <div className="bg-gradient-to-b from-green-500 to-black text-white">
                <Image
                    className="w-[300px] sm:w-[350px] h-auto"
                    src={img}
                    width={350}
                    height={350}
                    alt={title}
                />
            </div>

            <div className="p-4 space-y-4">
                <div className="text-4xl font-extralight">{title}</div>
                <div>{desc}</div>
                <div>
                    {tags.map((el) => (
                        <div className="tags bg-green-500 text-black rounded-full py-1 px-3" key={el}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Card;