import React, { useState, useEffect } from "react";
import Moment from "react-moment";

export default function Table() {
  const [search, setsearch] = useState("");
  const [showtrue, setTrue] = useState(false);
  const [showdata, setData] = useState([]);

  // var temp = props.data;

  const filterData = async function (e) {
    setsearch(e.target.value);
  };

  const sortFun = async () => {
    setTrue(!showtrue);

    if (showtrue) {
      const sort = [...showdata].sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
    } else {
      const sort = [...showdata].sort((a, b) =>
        a.name.first < b.name.first ? 1 : -1
      );
    }
  };

  useEffect(() => {
    console.log(showtrue);
  }, [showtrue]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();

    // console.table(data.results);
    if (data.results.length > 0) {
      setData(data.results);
    } else {
      setData([]);
    }
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
          <th onClick={sortFun}>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Email</th>
        </tr>

        {showdata ? (
          <>
            {showdata
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
