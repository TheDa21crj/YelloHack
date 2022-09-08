import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  };

  return <div>Hello World</div>;
}
