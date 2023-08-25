import React from "react";
import ProjectImage from "../../atoms/ProjectImage/ProjectImage";
import ProjectBadge from "../../atoms/ProjectBadge/ProjectBadge";
import ProjectTitle from "../../atoms/ProjectTitle/ProjectTitle";
import RightArrow from "../../atoms/RightArrow/RightArrow";

const Project = ({ badge, title, desktopTitle, img }) => {
  return (
    <div className="project ">
      <div className="relative xl:hidden">
        <ProjectImage img={img} />
        <ProjectBadge badge={badge} />
      </div>
      <div className="py-4 xl:py-24 flex items-center xl:items-start justify-between">
        <ProjectTitle title={title} desktopTitle={desktopTitle} />
        <div>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default Project;
