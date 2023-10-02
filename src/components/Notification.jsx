import React from "react";

const Notification = ( isOpen, onClose ) => {
    return (
        <div className={`${isOpen ? "fixed" : "hidden"}`}>

            <div className="fixed left-0 right-0 bottom-0 top-0 z-100 opacity-30 bg-white"></div>
            <div className="fixed top-16 bottom-0 right-0 left-0 z-100 flex flex-col items-center justify-center">

                <div className=" z-100 m-8 rounded-lg bg-gray-800 p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                        <div className=' flex flex-col gap-y-5'>
                            <div className=' text-center text-md'>
                                This section is under development.<br /> 
                                It will be available soon... <br />
                            </div>
                            <div className=' flex gap-5 justify-center'>
                                <div className="">
                                    <button className="py-2 px-8 bg-green-600 rounded-lg" onclick={onClose}>OK</button>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default Notification;