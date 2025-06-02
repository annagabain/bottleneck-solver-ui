import React from "react";

const tasks = [
  { name: "Soldering", duration: "w-2/6 bg-red-500" },
  { name: "Assembly", duration: "w-3/6 bg-blue-500" },
  { name: "Packaging", duration: "w-1/6 bg-green-500" },
];

const GanttChart = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-lg w-full max-w-md">
      <h2 className="text-lg font-bold mb-3">Production Workflow</h2>
      <div className="flex flex-col space-y-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center">
            <span className="w-32 text-sm font-medium">{task.name}</span>
            <div className={`h-6 ${task.duration} rounded-md ml-2 shadow-md`} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default GanttChart;
