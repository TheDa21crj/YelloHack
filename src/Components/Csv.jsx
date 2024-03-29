import React from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import { CSVLink } from "react-csv";

export default function Csv(props) {
  return (
    <CSVLink
      data={props.data}
      className="linkRemove"
      filename={"ramdomUserData.csv"}
    >
      <div className="mDivCSV">
        <GetAppIcon />
        <p>Export</p>
      </div>
    </CSVLink>
  );
}
