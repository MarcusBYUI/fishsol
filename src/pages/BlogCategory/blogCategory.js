import CustomButton from "../../components/customButton/customButton";
import Header from "../../components/header/header";
import Footer from "../../pages/Main/sections/footer/footer";
import React from "react";

import classes from "./blogCategory.module.scss";

const BlogCategory = () => {
  return (
    <section className={classes.wrapper}>
      <Header />

      <div className={classes.content}>
        <p>Blog / Tech</p>
        <h1>Blogs in Tech</h1>

        <div className={classes.content_grid}>
          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>
          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>
        </div>
        <div className={classes.content_actions}>
          <CustomButton warning>LOAD MORE</CustomButton>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default BlogCategory;
