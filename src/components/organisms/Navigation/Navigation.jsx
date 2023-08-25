import React from "react";
import NavigationLogo from "../../molecules/NavigationLogo/NavigationLogo";
import NavigationHamburger from "../../molecules/NavigationHamburger/NavigationHamburger";

const Navigation = () => {
  return (
    <div className="fixed z-20 top-0 left-0 px-4 py-6 w-full nav_gradient xl:bg-none xl:py-14 ">
      <div className="xl:max-w-screen-2xl xl:mx-auto flex justify-between items-center">
        <NavigationLogo />
        <NavigationHamburger />
      </div>
    </div>
  );
};

export default Navigation;
