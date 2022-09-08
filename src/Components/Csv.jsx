import React, { useState, useEffect } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import { CSVLink } from "react-csv";

export default function Csv(props) {
  const cvsDataFun = async () => {
    var tempArr = [];

    var arr = {};

    for (let i = 0; i < props.data.length; i++) {
      arr[i].name =
        props.data[i].name.title +
        " " +
        props.data[i].name.first +
        " " +
        props.data[i].name.last;
      arr[i].dob = props.data[i].dob.date;
      arr[i].email = props.data[i].email;
      arr[i].gender = props.data[i].gender;

      //   tempArr = tempArr.concat(arr);

      console.log(arr);
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
