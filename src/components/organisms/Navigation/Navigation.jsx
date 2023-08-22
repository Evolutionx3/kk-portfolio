import React from "react";
import NavigationLogo from "../../molecules/NavigationLogo/NavigationLogo";
import NavigationHamburger from "../../molecules/NavigationHamburger/NavigationHamburger";

const Navigation = () => {
  return (
    <div className="fixed z-10 top-0 left-0 flex p-4 w-full justify-between items-center nav_gradient">
      <NavigationLogo />
      <NavigationHamburger />
    </div>
  );
};

export default Navigation;
