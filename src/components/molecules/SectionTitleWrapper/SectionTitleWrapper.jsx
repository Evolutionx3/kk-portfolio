import React from "react";
import SlashIcon from "../../atoms/SlashIcon/SlashIcon";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

const SectionTitleWrapper = ({ title, additionalClass }) => {
  return (
    <div className={`flex items-end gap-x-2 ${additionalClass}`}>
      <SlashIcon />
      <SectionTitle title={title} />
    </div>
  );
};

export default SectionTitleWrapper;
