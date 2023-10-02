"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
// import Notify from "@/components/Notification";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  
  // const [isNotification, notifyUser] = useState(false);

  // const handleNotifyOpen = () => {
  //   notifyUser(true);
  // };

  // const handleNotifyClose = () => {
  //   notifyUser(false);
  // };

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
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

        {/* <Notify
          isOpen={isNotification}
          onClose={notifyUser}
        /> */}

    </main>
  );
}