import React from "react";

const HeroSmallText = ({ text, additionalClass }) => {
  return <p className={`hero_small_text -mb-2 ${additionalClass}`}>{text}</p>;
};

export default HeroSmallText;
