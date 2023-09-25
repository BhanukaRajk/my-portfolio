"use client";

import Contact from "@/components/Contact";
import Theme from "@/components/Theme";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
// import Testimonials from "@/components/Testimonials";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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
      <Theme />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

    </main>
  );
}