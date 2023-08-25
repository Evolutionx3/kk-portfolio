import React from "react";
import Project from "../../molecules/Project/Project";
import SectionTitleWrapper from "../../molecules/SectionTitleWrapper/SectionTitleWrapper";

const Works = [
  {
    id: 1,
    title: "Gym App Redesign",
    desktopTitle: "Gym App Redesign",
    badge: "iOS App Design",
    img: "gym_app",
  },
  {
    id: 2,
    title: "Evisa Assistance Platform",
    desktopTitle: "Evisa Assistance",
    badge: "Case Study",
    img: "evisa",
  },
  {
    id: 3,
    title: "OSK4U One-Page",
    desktopTitle: "Driving School Landing Page",
    badge: "Case Study",
    img: "osk4u",
  },
  {
    id: 4,
    title: "Taxi One-Page",
    desktopTitle: "Taxi One-Page",
    badge: "Case Study",
    img: "taxi",
  },
];

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="projects_wrapper">
        <SectionTitleWrapper title="Selected Works" />
        {Works.map((work) => (
          <Project
            key={work.id}
            badge={work.badge}
            title={work.title}
            desktopTitle={work.desktopTitle}
            img={work.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
