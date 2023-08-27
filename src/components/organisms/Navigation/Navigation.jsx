import React from "react";
import NavigationLogo from "../../molecules/NavigationLogo/NavigationLogo";
import NavigationHamburger from "../../molecules/NavigationHamburger/NavigationHamburger";

const Navigation = () => {
  return (
    <div className="fixed z-20 top-0 left-0 laptop:px-9 laptop:py-9 xl:px-14 xl:py-14 w-full nav_gradient xl:bg-none">
      <div className="xl:mx-auto flex justify-between">
        <NavigationLogo />
        <NavigationHamburger />
      </div>
    </div>
  );
};

export default Navigation;
