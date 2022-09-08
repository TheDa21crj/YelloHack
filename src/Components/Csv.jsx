import React, { useState } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import { CSVLink } from "react-csv";

export default function Csv(props) {
  const cvsDataFun = async () => {
    var arr = {};

    for (let i = 0; i < props.data.length; i++) {
      var tempArr = {};

      tempArr["name"] =
        props.data[i].name.title +
        " " +
        props.data[i].name.first +
        " " +
        props.data[i].name.last;
      tempArr["dob"] = props.data[i].dob.date;
      tempArr["email"] = props.data[i].email;
      tempArr["gender"] = props.data[i].gender;

      arr[i] = tempArr;
    }

    console.log(arr);
  };

  return (
    // <CSVLink data={props.data} className="linkRemove">
    <div className="mDivCSV" onClick={cvsDataFun}>
      <GetAppIcon />
      <p>Export</p>
    </div>
    // </CSVLink>
  );
}
