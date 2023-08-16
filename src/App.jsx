import { useState } from "react";
import Navigation from "./components/organisms/Navigation/Navigation";
import Hero from "./components/organisms/Hero/Hero";
import Mission from "./components/organisms/Mission/Mission";
import Projects from "./components/organisms/Projects/Projects";
import Testimonials from "./components/organisms/Testimonials/Testimonials";
import Socials from "./components/organisms/Socials/Socials";
import BackToTop from "./components/molecules/BackToTop/BackToTop";
import Footer from "./components/organisms/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Mission />
      <Projects />
      <Testimonials />
      <Socials />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
