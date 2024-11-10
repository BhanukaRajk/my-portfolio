"use client";

import Hobbies from "@/components/Hobbies";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {

    useEffect(() => {
        AOS.init({
            easing: "ease-out-back",
            duration: 1200,
            delay: 100,
            mirror: true,
            anchorPlacement: "bottom-bottom",
            offset: 160,
        });
        AOS.refresh();
    }, []);

    return (
        <main>
            <Hobbies />
            <Footer />
        </main>
    );
}