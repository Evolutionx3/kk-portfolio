import React from "react";
import HeroSmallText from "../../atoms/HeroSmallText/HeroSmallText";
import HeroMediumText from "../../atoms/HeroMediumText/HeroMediumText";
import HeroBigText from "../../atoms/HeroBigText/HeroBigText";

const HeroWrapper = () => {
  return (
    <div>
      <HeroSmallText text="Hi, I'm Kasia" />
      <HeroBigText />
      <HeroMediumText />
      <HeroSmallText text="Smooth UX Crafted into Delightful Interactions" />
    </div>
  );
};

export default HeroWrapper;
