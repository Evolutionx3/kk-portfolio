import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const ProjectTitle = ({ title, desktopTitle }) => {
  const windowSize = useWindowSize();

  return (
    <h2 className="project_title">
      {windowSize.innerWidth >= 1280 ? desktopTitle : title}
    </h2>
  );
};

export default ProjectTitle;
