import React from "react";

export default function Table(props) {
  console.log(props.data);

  return (
    <>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Company</td>
          <td>Contact</td>
          <td>Country</td>
        </tr>
        <tr>
          <td>Company</td>
          <td>Contact</td>
          <td>Country</td>
        </tr>
      </table>
    </>
  );
}
