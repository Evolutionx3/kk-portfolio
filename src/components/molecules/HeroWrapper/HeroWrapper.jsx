import React from "react";
import HeroSmallText from "../../atoms/HeroSmallText/HeroSmallText";
import HeroMediumText from "../../atoms/HeroMediumText/HeroMediumText";
import HeroBigText from "../../atoms/HeroBigText/HeroBigText";

const HeroWrapper = () => {
  return (
    <div className="hero_wrapper">
      <HeroSmallText text="Hi, I'm Kasia" />
      <HeroBigText />
      <HeroMediumText />
      <HeroSmallText
        additionalClass="xl:opacity-40"
        text="Smooth UX Crafted into Delightful Interactions"
      />
    </div>
  );
};

export default HeroWrapper;
