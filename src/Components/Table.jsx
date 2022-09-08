import React, { useState } from "react";
import Moment from "react-moment";

export default function Table(props) {
  const [search, setsearch] = useState("");

  const filterData = async function (e) {
    setsearch(e.target.value);
  };
  return (
    <>
      <input type="text" name="" id="" onChange={filterData} />
      <table>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Email</th>
        </tr>
        {props.data ? (
          <>
            {props.data
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((value, map) => {
                return (
                  <tr>
                    <td>
                      <span>{value.name.title}</span>{" "}
                      <span>{value.name.first}</span>{" "}
                      <span>{value.name.last}</span>
                    </td>
                    <td>{value.gender}</td>
                    <td>
                      <Moment format="MMMM Do YYYY" date={value.dob.date} />
                    </td>
                    <td>{value.email}</td>
                  </tr>
                );
              })}
          </>
        ) : (
          "No Data"
        )}
      </table>
    </>
  );
}
