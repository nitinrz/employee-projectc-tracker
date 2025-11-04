import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="flex bg-gray-100 m-2 ">
        
    <div className="p-6 m-1 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-55 text-center cursor-pointer">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-4xl font-extrabold text-indigo-600">{data.taskSummary.newTask}</h2>
        <h3 className="text-gray-600 font-medium tracking-wide">New Task</h3>
      </div>
    </div>
    <div className="p-6 m-1 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-55 text-center cursor-pointer">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-4xl font-extrabold text-green-600">{data.taskSummary.completed}</h2>
        <h3 className="text-gray-600 font-medium tracking-wide">Completed Task</h3>
      </div>
    </div>
    <div className="p-6 m-1 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-55 text-center cursor-pointer">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-4xl font-extrabold text-yellow-500">{data.taskSummary.active}</h2>
        <h3 className="text-gray-600 font-medium tracking-wide">Accept Task</h3>
      </div>
    </div>
    <div className="p-6 m-1 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-55 text-center cursor-pointer">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-4xl font-extrabold text-red-600">{data.taskSummary.failed}</h2>
        <h3 className="text-gray-600 font-medium tracking-wide">Failed Task</h3>
      </div>
    </div>
    
    </div>
  );
};

export default TaskListNumber;
