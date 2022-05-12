import React from "react";
import { Link } from "react-router-dom";

//Components
import CustomButtom from "../customButton/customButton";

//Styles
import classes from "./header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img
          src={require("../../assets/logo.png")}
          alt="logo"
          className={classes.header_logo}
        />
      </Link>
      <ul className={classes.links}>
        <Link to="/shout">
          <li className={classes.links_item}>Shout</li>
        </Link>

        <Link to="/blog">
          <li className={classes.links_item}>Blog</li>
        </Link>
      </ul>

      <div className={classes.actions}>
        <Link to="/">
          <CustomButtom warning>Try Solid Fish</CustomButtom>
        </Link>
      </div>
    </header>
  );
};

export default Header;
