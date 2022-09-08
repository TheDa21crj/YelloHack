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
      setData = data.results;
    }
  };

  return <div>Hello World</div>;
}
