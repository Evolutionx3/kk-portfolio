import React from "react";
import ProjectImage from "../../atoms/ProjectImage/ProjectImage";
import ProjectBadge from "../../atoms/ProjectBadge/ProjectBadge";
import ProjectTitle from "../../atoms/ProjectTitle/ProjectTitle";
import RightArrow from "../../atoms/RightArrow/RightArrow";

const Project = ({ badge, title, img }) => {
  return (
    <div className="project">
      <div className="relative">
        <ProjectImage img={img} />
        <ProjectBadge badge={badge} />
      </div>
      <div className="py-4 flex items-center justify-between">
        <ProjectTitle title={title} />
        <div>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default Project;
