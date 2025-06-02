import React from "react";
import Gauge from "./Gauge";
import GanttChart from "./GanttChart";

const Dashboard = () => {
  return (
    <>
      <Gauge value={75} />
      <GanttChart />
    </>
  );
};

export default Dashboard;
