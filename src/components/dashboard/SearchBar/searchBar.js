import React, { useState } from "react";

import classes from "./searchBar.module.scss";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const onChangeHandler = ({ target: { value } }) => {
    let isNum = /^-?[\d.]+(?:e-?\d+)?$/.test(value);

    let transformed;
    if (!isNum) {
      let newValue = value.split("-");
      if (newValue.length === 2) {
        transformed = newValue.join("");
      } else {
        return;
      }
    }

    if (isNum || value === "") {
      setQuery(value);
    } else {
      setQuery(transformed);
    }
  };

  const getValue = () => {
    let str = query;

    let newStr = str.split("");
    if (query.length > 3) {
      newStr.splice(3, 0, "-");
      str = newStr.join("");
    }

    return str;
  };

  return (
    <div className={classes.search}>
      <input
        maxLength={8}
        type="text"
        value={getValue()}
        onChange={onChangeHandler}
        className={classes.search_field}
      />
      <img
        src={require("../../../assets/icons/hint.png")}
        alt=""
        className={classes.search_icon}
      />
      <div className={classes.tooltip}>
        <p className={classes.tooltip_heading}>Password Format:</p>
        <p>###-####</p>
      </div>
    </div>
  );
};

export default SearchBar;
