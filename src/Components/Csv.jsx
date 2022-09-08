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
    for (let i = 0; i < props.data.length; i++) {
      arr.name =
        props.data[i].name.title +
        " " +
        props.data[i].name.first +
        " " +
        props.data[i].name.last;
      arr.dob = props.data[i].dob.date;
      arr.email = props.data[i].email;
      arr.gender = props.data[i].gender;
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
