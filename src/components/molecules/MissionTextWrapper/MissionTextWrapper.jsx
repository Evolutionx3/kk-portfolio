import React from "react";
import MissionQuote from "../../atoms/MissionQuote/MissionQuote";
import MissionText from "../../atoms/MissionText/MissionText";

const MissionTextWrapper = () => {
  return (
    <div className="flex flex-col gap-y-6 text-dark-grey">
      <MissionQuote text="Shaping digital experience." />
      <MissionText
        text="I’m dedicated to delivering exceptional user-centered design that
        captivate and engage. I go the extra mile to ensure that users feel
        satisfied upon completing their tasks and entice them to return for
        more."
      />
      <MissionText
        text="Human beings fascinate me, which is why I strive to interact with them
        through design. I'm captivated by every product that blends
        functionality and delightful design."
      />
    </div>
  );
};

export default MissionTextWrapper;
