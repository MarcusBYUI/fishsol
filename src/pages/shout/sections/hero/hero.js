import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../../components/header/header";

import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Header />
      <div className={classes.content}>
        <h1>News & Promo</h1>

        <div className={classes.content_grid}>
          <div className={classes.content_grid_main}>
            <div className={classes.mainCard}>
              <img src="http://placehold.jp/650x550.png" alt="pci" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
          <div className={classes.content_grid_side}>
            <div className={classes.sideCard}>
              <img src="http://placehold.jp/650x550.png" alt="" />
              <div className={classes.sideCard_text}>
                <h3>title</h3>
                <p>sumamry</p>
                <Link to="/">
                  <p>link</p>
                </Link>
              </div>
            </div>

            <div className={classes.sideCard}>
              <img src="http://placehold.jp/650x550.png" alt="" />
              <div className={classes.sideCard_text}>
                <h3>title</h3>
                <p>sumamry</p>
                <Link to="/">
                  <p>link</p>
                </Link>
              </div>
            </div>

            <div className={classes.sideCard}>
              <img src="http://placehold.jp/650x550.png" alt="" />
              <div className={classes.sideCard_text}>
                <h3>title</h3>
                <p>sumamry</p>
                <Link to="/">
                  <p>link</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
