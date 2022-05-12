import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../../../components/customButton/customButton";

//Style
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img
        src={require("../../../../assets/footer_top.png")}
        alt=""
        className={classes.footer_top}
      />

      <img
        src={require("../../../../assets/footer_dots.png")}
        alt=""
        className={classes.footer_dots}
      />

      <div className={classes.content}>
        <div className={classes.content_top}>
          <div className={classes.logo}>
            <img src={require("../../../../assets/logo.png")} alt="Logo" />
          </div>
          <div className={classes.content_top_text}>
            <div>
              <h2>Registered Office</h2>
              <p>
                71-75 Shelton Street, London, Greater London, WC2H 9JQ, United
                Kingdom.
              </p>
            </div>

            <div>
              <h2>Contacts</h2>
              <p>
                Email: info@solid.fish <br /> Phone: +44 (0) 2045036760
              </p>
            </div>

            <div>
              <h2>Links</h2>

              <Link to="/about/privacy_policy">
                <p>Privacy Policy</p>
              </Link>

              <Link to="/about/terms_of_service">
                <p>Terms of Service</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.content_bottom}>
          <div className={classes.social}></div>
          <ul className={classes.links}>
            <li className={classes.links_item}>Shout</li>

            <li className={classes.links_item}>Blog</li>

            <li className={classes.links_item}>Change Country</li>
          </ul>

          <CustomButton warning>Try Solid Fish</CustomButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
