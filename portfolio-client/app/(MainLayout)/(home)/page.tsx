import React from "react";
import HeroSection from "./_components/HeroSection";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Process from "./_components/Process";
import Contact from "./_components/Contact";
import Blog from "./_components/Blog";
import Project from "./_components/Project";

const page = () => {
  return (
    <div>
      <div className="">
        <HeroSection />
      </div>

      <div className=" mx-auto max-w-7xl px-4 ">
        <About />
      </div>
      <Skills />
      <Project />
      <Experience />

      <Process />

      <Blog />
      <Contact />
    </div>
  );
};

export default page;
