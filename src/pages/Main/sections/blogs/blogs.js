import React from "react";

//Styles
import classes from "./blogs.module.scss";

const Blogs = () => {
  return (
    <section className={classes.wrapper}>
      <img
        src={require("../../../../assets/post_dots.png")}
        alt=""
        className={classes.blogs_dots}
      />

      <img
        src={require("../../../../assets/blogs_line.png")}
        alt=""
        className={classes.blogs_line}
      />

      <div className={classes.blogs}>
        <h2>Latest Posts</h2>

        <div className={classes.blogs_row}>
          <div className={classes.blog}>
            <img
              src={require("../../../../assets/blog_1.png")}
              alt=""
              className={classes.blog_img}
            />
            <div className={classes.blog_text}>
              <h3>The camel that broke the Internet's back</h3>
              <p>May 5, 2020 by L. Patrick</p>
              <p className={classes.body}>
                Among countless other benefits, ICT progress has allowed us to
                remain connected, entertained, and educated.
              </p>
              <p className={classes.link}>Read More</p>
            </div>
          </div>

          <div className={classes.blog}>
            <img
              src={require("../../../../assets/blog_1.png")}
              alt=""
              className={classes.blog_img}
            />
            <div className={classes.blog_text}>
              <h3>The camel that broke the Internet's back</h3>
              <p>May 5, 2020 by L. Patrick</p>
              <p className={classes.body}>
                Among countless other benefits, ICT progress has allowed us to
                remain connected, entertained, and educated.
              </p>
              <p className={classes.link}>Read More</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
