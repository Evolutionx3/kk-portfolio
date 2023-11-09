import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const ProjectTitle = ({ title, desktopTop, desktopBottom }) => {
  const windowSize = useWindowSize();

  return (
    <h2 className="project_title">
      {windowSize.innerWidth >= 1280 ? (
        <div className="flex flex-col">
          <span>{desktopTop}</span>
          <span>{desktopBottom}</span>
        </div>
      ) : (
        title
      )}
    </h2>
  );
};

export default ProjectTitle;
