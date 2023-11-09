import React from "react";
import SlashIcon from "../../atoms/SlashIcon/SlashIcon";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

const SectionTitleWrapper = ({ title, additionalClass }) => {
  return (
    <div
      className={`flex items-end gap-x-3 ${
        additionalClass ? additionalClass : ""
      } xl:mb-24 laptop:mb-16 xl:-ml-6`}
    >
      <SlashIcon />
      <SectionTitle title={title} />
    </div>
  );
};

export default SectionTitleWrapper;
