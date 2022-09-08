import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import Csv from "./Csv";
import SearchIcon from "@mui/icons-material/Search";

export default function Table() {
  const [search, setsearch] = useState("");
  const [showtrue, setTrue] = useState(false);
  const [showdata, setData] = useState([]);
  const [propsData, setPropsData] = useState([]);

  const filterData = async function (e) {
    setsearch(e.target.value);
  };

  const sortFun = async () => {
    setTrue(!showtrue);

    if (showtrue) {
      const sort = [...showdata].sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      setData(sort);
    } else {
      const sort = [...showdata].sort((a, b) =>
        a.name.first < b.name.first ? 1 : -1
      );
      setData(sort);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();

    if (data.results.length > 0) {
      setData(data.results);

      var arr = [];

      for (let i = 0; i < data.results.length; i++) {
        var tempArr = {};

        tempArr["name"] =
          data.results[i].name.title +
          " " +
          data.results[i].name.first +
          " " +
          data.results[i].name.last;
        tempArr["dob"] = data.results[i].dob.date;
        tempArr["email"] = data.results[i].email;
        tempArr["gender"] = data.results[i].gender;

        arr[i] = tempArr;
      }
      console.log(arr);

      setPropsData(arr);
    } else {
      setData([]);
    }
  };

  return (
    <>
      <div className="topDiv">
        <div className="inpDiv">
          <SearchIcon className="SearchIcon" />
          <input
            type="text"
            name=""
            id="inpSearch"
            onChange={filterData}
            placeholder="Search..."
          />
        </div>
        <Csv data={propsData} />
      </div>
      <div className="mDiv">
        <table>
          <tr>
            <th onClick={sortFun} className="nameTH">
              Name
            </th>
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
                        <p className="namePTag">
                          <img
                            src={value.picture.medium}
                            alt=""
                            className="userImg"
                          />
                          <p className="name">
                            {value.name.title} {value.name.first}{" "}
                            {value.name.last}
                          </p>
                        </p>
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
      </div>
    </>
  );
}
