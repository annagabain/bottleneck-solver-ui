import Header from "./Components/Header";
import Gauge from "./Components/Gauge";
import GanttChart from "./Components/GanttChart";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">
        {/* <div> */}

        <Dashboard />
      </div>
    </>
  );
};
export default App;
