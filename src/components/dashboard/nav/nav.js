import React, { useState } from "react";

import { Link } from "react-router-dom";

import classes from "./nav.module.scss";

const Nav = ({ onVideo }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isTutorial, setIsTutorial] = useState(false);

  const toggleTutorial = () => [setIsTutorial((prevState) => !prevState)];

  const toggleNav = () => {
    setIsOpened((prevState) => !prevState);
  };

  if (isTutorial) {
    return (
      <div className={classes.nav}>
        <div className={classes.tutorial}>
          <div onClick={toggleTutorial} className={classes.tutorial_header}>
            <img src={require("../../../assets/icons/exit.png")} alt="" />
          </div>
          <ul className={classes.tutorial_links}>
            <li className={classes.tutorial_links_item}>
              <h3> Walkthrough</h3>
            </li>
            <li onClick={onVideo} className={classes.tutorial_links_item}>
              <h3> Video tutorial</h3>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.nav}>
      <div
        onClick={toggleNav}
        className={`${classes.nav_toggle} ${false ? classes.active : null}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpened && (
        <ul className={classes.nav_list}>
          <Link to="/about">
            <li className={classes.nav_list_link}>About</li>
          </Link>
          <li className={classes.nav_list_link} onClick={toggleTutorial}>
            Tutorial
          </li>
          <Link to="/shout">
            <li className={classes.nav_list_link}>Shout</li>
          </Link>
          <li className={classes.nav_list_link}>Submit Feedback</li>
          <li className={classes.nav_list_link}>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
