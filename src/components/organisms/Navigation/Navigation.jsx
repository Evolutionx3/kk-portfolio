import React from "react";
import NavigationLogo from "../../molecules/NavigationLogo/NavigationLogo";
import NavigationHamburger from "../../molecules/NavigationHamburger/NavigationHamburger";

const Navigation = () => {
  return (
    <div className="fixed z-20 top-0 left-0 flex px-4 py-6 w-full justify-between items-center nav_gradient">
      <NavigationLogo />
      <NavigationHamburger />
    </div>
  );
};

export default Navigation;
