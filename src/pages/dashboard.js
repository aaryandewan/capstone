import React, { useContext } from "react";
import UserContext from "../context/user";

function Dashboard() {
  //TODO remove jz
  const jz = useContext(UserContext);
  console.log("jz == ", jz);

  return <div>Dashboard</div>;
}

export default Dashboard;
