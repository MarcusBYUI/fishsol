import React, { useState } from "react";

import classes from "./uploadLink.module.scss";

const UploadLink = () => {
  const [selectedLinks, setSelectedLinks] = useState([]);
  const [query, setQuery] = useState("");

  const onLinkSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    setSelectedLinks((prevLinks) => [...prevLinks, query]);
  };

  const onInputChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const onLinkRemove = (index) => {
    console.log(index);
    setSelectedLinks((prevLinks) => {
      let newLinks = [...prevLinks];
      newLinks.splice(index, 1);
      return newLinks;
    });
  };

  return (
    <div className={classes.body}>
      <h2>Upload files</h2>
      <div className={classes.linkbox}>
        <form onSubmit={onLinkSubmit}>
          <input
            type="text"
            onChange={onInputChange}
            value={query}
            className={classes.linkbox_field}
          />
        </form>
        {selectedLinks.length === 0 && <p>Press ENTER to add links</p>}
      </div>

      <div className={classes.submitedLinks}>
        {selectedLinks.map((link, index) => (
          <div key={index} className={classes.submitedLinks_item}>
            <p>{link}</p>
            <img
              onClick={onLinkRemove.bind(this, index)}
              src={require("../../../../../assets/icons/exit.png")}
              alt="Exit"
              className={classes.submitedLinks_item_icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadLink;
