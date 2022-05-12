import React from "react";

//Sections
import About from "./sections/about/about";
import Blogs from "./sections/blogs/blogs";
import Contact from "./sections/contact/contact";
import Faq from "./sections/faq/faq";
import Features from "./sections/features/features";
import Footer from "./sections/footer/footer";
import Landing from "./sections/landing/landing";
import Mobile from "./sections/mobile/mobile";
import Tutorial from "./sections/tutorial/tutorial";

//Styles
import classes from "./main.module.scss";

const Main = () => {
  return (
    <section className={classes.root}>
      <Landing />
      <Tutorial />
      <Features />
      <Mobile />
      <About />
      <Blogs />
      <Faq />
      <Contact />
      <Footer />
    </section>
  );
};

export default Main;
