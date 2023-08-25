import React from "react";

const MissionQuote = ({ text, additionalClass }) => {
  return <h2 className={`my_mission_quote ${additionalClass}`}>{text}</h2>;
};

export default MissionQuote;
