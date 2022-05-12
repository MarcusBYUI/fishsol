import IntroMessage from "../../components/introMessage/introMessage";
import React, { useState } from "react";

import classes from "./contentPreview.module.scss";
/*
const Message = () => {
  <div className={classes.message}>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
      adipisci dolorem eaque modi harum tempore distinctio cum unde aut quam?
    </p>
  </div>;
};
*/
const ContentPreview = () => {
  const [isActive, setIsActive] = useState(true);

  const onCloseMessage = () => {
    setIsActive(false);
  };

  const onClick = () => {
    console.log("Hello");
  };

  return (
    <section className={classes.wrapper}>
      {isActive && <IntroMessage onClick={onCloseMessage} />}
      <div className={classes.header}>
        <img
          src={require("../../assets/logo.png")}
          alt="Logo"
          className={classes.logo}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.linkbox}>
          <iframe
            src="https://www.google.com/"
            frameBorder="0"
            title="frame"
          ></iframe>

          <div className={classes.linkbox_info}>
            <h3>Welcome to freeCodeCamp's curriculum.</h3>
            <p>https://www.freecodecamp.org/learn</p>
            <p className={classes.body}>
              Please slow down and read this. freeCodeCamp is a proven path to
              your first software developer job. More than 40,000 people have
              gotten developer jobs after completing this – including at big
              companies like Google and Microsoft.
            </p>
            <div className={classes.linkbox_info_stats}>
              <p>
                ads <span>0</span>
              </p>
              <p>
                Trackers <span>0</span>
              </p>
              <p>
                Ext. Domains <span>0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.taskbar}>
        <div></div>
        <div className={classes.taskbar_actions}>s</div>
        <div className={classes.taskbar_menu}>
          <div onClick={onClick} className={classes.taskbar_menu_icon}>
            <img src={require("../../assets/icons/dots.svg").default} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
