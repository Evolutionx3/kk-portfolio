import React from "react";
import Project from "../../molecules/Project/Project";
import SectionTitleWrapper from "../../molecules/SectionTitleWrapper/SectionTitleWrapper";
import { Works } from "../../../data/data";

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="projects_wrapper">
        <div className="xl:max-w-screen-xl xl:w-full xl:mx-auto">
          <SectionTitleWrapper title="Selected Works" />
        </div>
        {Works.map((work) => (
          <Project
            key={work.id}
            badge={work.badge}
            title={work.title}
            desktopTop={work.desktopTop}
            desktopBottom={work.desktopBottom}
            img={work.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
