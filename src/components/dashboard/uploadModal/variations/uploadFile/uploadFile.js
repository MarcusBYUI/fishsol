import DropFileInput from "../../../../../components/dropFileInput/dropFileInput";
import React, { useState } from "react";

import classes from "./uploadFile.module.scss";

const UploadFile = ({ type }) => {
  const [fileList, setFileList] = useState([]);

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];

    if (newFile) {
      setFileList((prevList) => [...prevList, newFile]);
      console.log(fileList);
    }
  };

  return (
    <div className={classes.body}>
      <h2>Upload files</h2>
      <div className={classes.dropzone}>
        <DropFileInput onFileUpload={onFileDrop} />
        {fileList.length > 0 && (
          <div className={classes.dropzone_details}>
            {fileList.map((file, index) => (
              <ul className={classes.fileList}>
                <li className={classes.fileList_item}>
                  <p>
                    {file.name.length > 10
                      ? file.name.slice(0, 10) + "..."
                      : file.name}
                  </p>
                  <p>{file.size}</p>
                  <img src={require("../../../../../assets/icons/exit.png")} alt="" />
                </li>
              </ul>
            ))}

            <input type="checkbox" name="merge" id="merge" />
            <label htmlFor="merge">Merge all into a single content</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
