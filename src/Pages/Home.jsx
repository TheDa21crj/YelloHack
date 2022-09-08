import React, { useEffect, useState } from "react";

export default function Home() {
  const [showData, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();

    console.table(data.results);
    if (data.results.length > 0) {
      setData(data.results);
    } else {
      setData([]);
    }
  };

  return (
    <div>
      Hello World
      <br />
      {showData ? (
        <>
          {showData.map((value, key) => {
            return (
              <div>
                <p>
                  name = <span></span> <span></span> <span></span>
                </p>
                <span></span>
              </div>
            );
          })}
        </>
      ) : (
        "No Data"
      )}
    </div>
  );
}
