import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();

    console.table(data.results);
  };

  return <div>Hello World</div>;
}
