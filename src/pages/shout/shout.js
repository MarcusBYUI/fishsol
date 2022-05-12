import React from "react";

// Sections
import Hero from "./sections/hero/hero";
import Tips from "./sections/tips/tips";
import Feedback from "./sections/feedback/feedback";
import Comments from "./sections/comments/comments";

//Styles
import classes from "./shout.module.scss";
import Footer from "../../pages/Main/sections/footer/footer";
import Quiz from "./sections/quiz/quiz";

const Shout = () => {
  return (
    <section className={classes.wrapper}>
      <Hero />
      <Tips />
      <Feedback />
      <Comments />
      <Quiz />
      <Footer />
    </section>
  );
};

export default Shout;
