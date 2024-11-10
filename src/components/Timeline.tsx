import React from "react";

const Timeline = () => {
    const milestones = [
        {
            date: "2024 October",
            title: "Graduated from University of Colombo",
            description: "Graduated with a Bachelor's degree in Computer Science from University of Colombo School of Computing.",
        },
        {
            date: "2024 May",
            title: "Promoted from ISA",
            description: "Started my first full-time job as a Associate Software Engineer.",
        },
        {
            date: "2024 May",
            title: "Completed Internship at ISA (AirArabia)",
            description: "Completed a 6-month internship at ISA, gaining hands-on experience in software development.",
        },
        {
            date: "2021 May",
            title: "Started Computer Science Degree",
            description: "Enrolled at University of Colombo School of Computing for a Bachelor of Science in Computer Science.",
        },
        {
            date: "2019 December",
            title: "Passed Advanced Level Exam",
            description: "Passed G.C.E. Advanced Level exam (held in 2019) with 1.7619 Z-Score.",
        },
        {
            date: "2017 March",
            title: "Passed Ordinary Level Exam",
            description: "Passed G.C.E. Ordinary Level exam (held in 2016) and decided to continue studies at Mahanama College.",
        }
    ];

    return (
        <section id="timeline" className="relative py-16 bg-gray-100 overflow-hidden">
            <div className="text-center mb-10">
                <div className="text-3xl md:text-4xl font-serif">Education & Career Timeline</div>
                <p className="text-gray-500 pt-2">
                    This is my educational, academic and carrier timeline so far.
                </p>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="relative border-l-4 border-gray-300">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="mb-10 ml-8 flex flex-col md:flex-row items-start md:items-center"
                        >
                            <div className="absolute w-6 h-6 bg-primaryBlack rounded-full -left-3"></div>
                            <div className="md:w-1/4 text-lg font-semibold text-primaryBlack">{milestone.date}</div>
                            <div className="md:w-3/4 p-5 bg-black shadow-2xl rounded-lg relative border-l-2 border-gray-200">
                                <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                                <p className="text-gray-200">{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none"></div>
        </section>
    );
};

export default Timeline;