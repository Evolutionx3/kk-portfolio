import React from "react";
import Hero from "../components/organisms/Hero/Hero";
import Mission from "../components/organisms/Mission/Mission";
import Projects from "../components/organisms/Projects/Projects";
import Testimonials from "../components/organisms/Testimonials/Testimonials";
import Socials from "../components/organisms/Socials/Socials";

const Home = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Projects />
      <Testimonials />
      <Socials />
    </>
  );
};

export default Home;
