import React from "react";
import SectionTitleWrapper from "../../molecules/SectionTitleWrapper/SectionTitleWrapper";
import MissionTextWrapper from "../../molecules/MissionTextWrapper/MissionTextWrapper";

const Mission = () => {
  return (
    <div className="my_mission_section relative z-10 flex flex-col gap-y-9">
      <SectionTitleWrapper title="My Mission" />

      <MissionTextWrapper />
    </div>
  );
};

export default Mission;
