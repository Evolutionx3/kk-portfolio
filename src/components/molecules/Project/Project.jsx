import React from "react";
import ProjectImage from "../../atoms/ProjectImage/ProjectImage";
import ProjectBadge from "../../atoms/ProjectBadge/ProjectBadge";
import ProjectTitle from "../../atoms/ProjectTitle/ProjectTitle";
import RightArrow from "../../atoms/RightArrow/RightArrow";

const Project = ({ badge, title, desktopTop, desktopBottom, img }) => {
  return (
    <div className="project">
      <div className="relative xl:hidden">
        <ProjectImage img={img} />
        <ProjectBadge badge={badge} />
      </div>
      <div className="py-4 md:justify-start md:gap-x-4 xl:max-w-screen-xl xl:mx-auto xl:py-24 xl:gap-x-6 laptop:py-16 flex items-center xl:items-start">
        <ProjectTitle
          title={title}
          desktopTop={desktopTop}
          desktopBottom={desktopBottom}
        />
        <div>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default Project;
