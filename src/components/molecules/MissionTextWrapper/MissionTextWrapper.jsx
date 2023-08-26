import React from "react";
import MissionQuote from "../../atoms/MissionQuote/MissionQuote";
import MissionText from "../../atoms/MissionText/MissionText";

const MissionTextWrapper = () => {
  return (
    <div className="flex gap-x-28 items-center">
      <div className="flex xl:w-3/4 flex-col gap-y-6 xl:gap-y-8 text-dark-grey">
        <MissionQuote
          additionalClass="xl:hidden"
          text="Shaping digital experience."
        />
        <MissionQuote
          additionalClass="hidden xl:block"
          text="I go the extra mile to ensure that product meets users' needs."
        />
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
      <div className="hidden xl:w-1/4 xl:flex xl:flex-col">
        <img
          src="kasia.png"
          className="w-80 laptop:w-64 inline-block align-bottom"
        />
        <div className="about_desc_wrapper">
          <p className="about_desc_introduction">Hi, I'm Kasia Klima</p>
          <p className="about_desc_interests">
            Game Geek, Cat Lover, Creative Devotee
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionTextWrapper;
