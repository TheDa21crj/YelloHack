import React, { useEffect, useState } from "react";
import Table from "./../Components/Table";

export default function Home() {
  const [showData, setData] = useState([]);

  return (
    <div>
      <Table />
    </div>
  );
}
