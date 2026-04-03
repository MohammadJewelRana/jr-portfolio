import React from "react";
import HeroSection from "./_components/HeroSection";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Process from "./_components/Process";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className=" mx-auto max-w-7xl  px-4">
        <About />
      </div>
       
      <Experience />
   <Process/>
      <Skills />
    </div>
  );
};

export default page;
