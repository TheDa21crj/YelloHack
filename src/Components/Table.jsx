import React from "react";

export default function Table(props) {
  console.log(props.data);

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Email</th>
        </tr>
        {data ? (
          <>
            {data.map((value, map) => {
              return <tr></tr>;
            })}
          </>
        ) : (
          "No Data"
        )}
        <tr>
          <td>Company</td>
          <td>Contact</td>
          <td>Country</td>
          <td>Country</td>
        </tr>
      </table>
    </>
  );
}
