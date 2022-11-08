import React from "react";
import Nav from "./Nav";

const Hero = () => {
  return (
    <header className=" relative">
     
      <div className=" max-w-[1240px]  mx-auto font-source text-center relative overflow-hidden bg-secondary-blue/10"> 
      <Nav />
      <div className="py-24 flex items-center justify-center flex-col gap-8 px-8 mx-auto">

      
        <h1 className="text-6xl font-bold z-10">Promotion platform</h1>
        <p className="z-10">
          Republican Education Center under the Ministry of Public Education The
          single platform serves to popularize the best practices of pedagogues.
        </p>
        <div className="flex gap-4 z-10">
          <button className="bg-secondary-blue text-white ">Sign up</button>
          <button className="text-secondary-blue">Login In</button>
        </div>
        </div>
        <div className="p-32 rounded-full bg-white w-fit absolute  -z-1 left-[30%] top-[20%] opacity-70"></div>
        <div className="p-32 rounded-full bg-white w-fit absolute  -z-1  -bottom-32 -left-32    opacity-70"></div>
        <div className="p-16  bg-white w-fit absolute  -z-1  -right-10 bottom-20  opacity-70"></div>
        <div className="p-20  bg-white w-fit absolute  -z-1  -top-20 left-[60%] rotate-45  opacity-70"></div>
      </div>
      
    </header>
  );
};

export default Hero;
