import React, { useState } from "react";

const pages = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Portfolio",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

const NavigationHamburger = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
    console.log(active);
  };

  return (
    <div className="relative" onClick={handleClick}>
      <div id="nav-icon3" className={`${active ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {active && (
        <div className="menu-mobile">
          <ul className="flex flex-col gap-y-6">
            {pages.map((page) => (
              <li className="menu-item" key={page.name}>
                {page.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationHamburger;
