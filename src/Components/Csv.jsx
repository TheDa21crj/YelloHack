import React, { useState, useEffect } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import { CSVLink } from "react-csv";

export default function Csv(props) {
  useEffect(() => {
    cvsDataFun();
  }, []);

  const cvsDataFun = async () => {
    var arr = {
      name: "",
      email: "",
      dob: "",
      gender: "",
    };
    for (let i = 0; i < props.data.length; i++) {}
    console.log(props.data.length);
  };

  return (
    <CSVLink data={props.data} className="linkRemove">
      <div className="mDivCSV">
        <GetAppIcon />
        <p>Export</p>
      </div>
    </CSVLink>
  );
}
