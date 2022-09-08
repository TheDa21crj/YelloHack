import React, { useState, useEffect } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import { CSVLink } from "react-csv";

export default function Csv(props) {
  const csvData = [];
  return (
    <CSVLink data={props.data} className="linkRemove">
      <div className="mDivCSV">
        <GetAppIcon />
        <p>Export</p>
      </div>
    </CSVLink>
  );
}
