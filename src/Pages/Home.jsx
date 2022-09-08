import React, { useEffect, useState } from "react";
import Table from "./../Components/Table";

export default function Home() {
  const [showData, setData] = useState([]);

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
    <div>
      {/* {showData ? (
        <>
          {showData.map((value, key) => {
            return (
              <div>
                <p>
                  name = <span>{value.name.title}</span>{" "}
                  <span>{value.name.first}</span> <span>{value.name.last}</span>
                </p>

                <p>
                  Gender: <span>{value.gender}</span>
                </p>
                <p>
                  DOB: <span>{value.dob.date}</span>
                </p>
                <p>
                  Email: <span>{value.email}</span>
                </p>
                <br />
                <br />
              </div>
            );
          })}
        </>
      ) : (
        "No Data"
      )} */}
      <Table data={showData} />
    </div>
  );
}
