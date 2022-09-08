import React, { useState, useEffect } from "react";
import Moment from "react-moment";

export default function Table(props) {
  const [search, setsearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  const filterData = async function (e) {
    setsearch(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        onChange={filterData}
        placeholder="Search ..."
      />
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
                let name =
                  value.name.title +
                  " " +
                  value.name.first +
                  " " +
                  value.name.last;

                if (search === "") {
                  return value;
                } else if (
                  name.toLowerCase().includes(search.toLowerCase()) ||
                  value.gender.toLowerCase().includes(search.toLowerCase()) ||
                  value.email.toLowerCase().includes(search.toLowerCase())
                ) {
                  console.table(value);
                  return value;
                }
              })
              .map((value, key) => {
                return (
                  <tr key={key}>
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
