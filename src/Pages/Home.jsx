import React, { useEffect, useState } from "react";
import Table from "./../Components/Table";

export default function Home() {
  const [showData, setData] = useState([]);

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
      <Table />
    </div>
  );
}
