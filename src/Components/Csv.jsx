import React, { useState } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import { CSVLink } from "react-csv";

export default function Csv(props) {
  const down = async () => {
    console.log(props.data);
  };
  return (
    <CSVLink data={props.data} className="linkRemove">
      <div className="mDivCSV" onClick={down}>
        <GetAppIcon />
        <p>Export</p>
      </div>
    </CSVLink>
  );
}
