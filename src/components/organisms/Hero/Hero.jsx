import React from "react";
import HeroWrapper from "../../molecules/HeroWrapper/HeroWrapper";

const Hero = () => {
  return (
    <div className="h-screen flex z-0 top-0 sticky items-center px-4 hero_bg_dots">
      <HeroWrapper />
    </div>
  );
};

export default Hero;
