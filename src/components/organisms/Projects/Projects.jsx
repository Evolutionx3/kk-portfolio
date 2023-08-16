import React from "react";
import Project from "../../molecules/Project/Project";

const Works = [
  {
    id: 1,
    title: "Gym App Redesign",
    badge: "iOS App Design",
    img: "gym_app",
  },
  {
    id: 2,
    title: "Evisa Assistance Platform",
    badge: "Case Study",
    img: "evisa",
  },
  { id: 3, title: "OSK4U One-Page", badge: "Case Study", img: "osk4u" },
  { id: 4, title: "Taxi One-Page", badge: "Case Study", img: "taxi" },
];

const Projects = () => {
  return (
    <div className="projects_wrapper">
      {Works.map((work) => (
        <Project
          key={work.id}
          badge={work.badge}
          title={work.title}
          img={work.img}
        />
      ))}
    </div>
  );
};

export default Projects;
