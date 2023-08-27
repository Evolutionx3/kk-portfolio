import React from "react";
import SectionTitleWrapper from "../../molecules/SectionTitleWrapper/SectionTitleWrapper";
import MissionTextWrapper from "../../molecules/MissionTextWrapper/MissionTextWrapper";

const Mission = () => {
  return (
    <div className="my_mission_section relative z-10 ">
      <div className="my_mission_wrapper flex flex-col gap-y-9 md:gap-y-8 xl:gap-y-0">
        <SectionTitleWrapper title="My Mission" />

        <MissionTextWrapper />
      </div>
    </div>
  );
};

export default Mission;
