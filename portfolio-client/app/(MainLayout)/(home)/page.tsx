import React from "react";
import HeroSection from "./_components/HeroSection";
import About from "./_components/About";
import Experience from "./_components/Experience";
 
 
const page = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <div className=" mx-auto max-w-7xl  px-4">
<About/>

 
      </div>
<Experience/>
    </div>
  );
};

export default page;
