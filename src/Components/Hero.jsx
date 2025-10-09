import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center pt-10 bg-base-200">
      <figure className="w-10/12 md:w-6/12">
        <img src="./hero.png" alt="" className="h-full w-full object-contain" />
      </figure>
    </div>
  );
};

export default Hero;
