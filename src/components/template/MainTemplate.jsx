import React from "react";
import Navigation from "../organisms/Navigation/Navigation";
import Footer from "../organisms/Footer/Footer";

const MainTemplate = ({ children }) => {
  return (
    <div className="mx-auto">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
