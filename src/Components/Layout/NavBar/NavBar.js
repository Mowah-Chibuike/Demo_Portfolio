import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const handleHamburgerClick = () => {
    setDisplayNav((prev) => !prev);
  };
  return (
    <div className={"head"}>
      <div className={"header"}>
        <div className={"logo"}>
          <h2>
            Mc<span>Timmy</span>
          </h2>
        </div>
        <div
          className={` ${displayNav ? "hamburger active" : "hamburger"}`}
          onClick={handleHamburgerClick}
        ></div>
        <div className={` ${displayNav ? "navigation show" : "navigation"}`}>
          <ul className={"headerEl"}>
            <li>
              <div className={"link"} onClick={handleHamburgerClick}>
                Home
              </div>
            </li>

            <li>
              <div className={"link"} onClick={handleHamburgerClick}>
                About Me
              </div>
            </li>

            <li>
              <div className={"link"} onClick={handleHamburgerClick}>
                Services
              </div>
            </li>

            <li>
              <div className={"link"} onClick={handleHamburgerClick}>
                Portfolio
              </div>
            </li>

            <li>
              <div className={"link"} onClick={handleHamburgerClick}>
                Contact Me
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
