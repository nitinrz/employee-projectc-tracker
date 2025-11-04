import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  // console.log(authData);

  return (
    <div className="p-8  min-h-screen">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="grid grid-cols-5 font-semibold text-gray-700 bg-gray-200 p-4">
          <h2>Employee Name</h2>
          <h3 className="text-center">New Task</h3>
          <h5 className="text-center">Active Task</h5>
          <h5 className="text-center">Completed</h5>
          <h5 className="text-center">Failed</h5>
        </div>

        {authData.employees.map((e, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-5 p-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-all"
            >
              <h2 className="font-medium text-gray-800">{e.name}</h2>
              <h3 className="text-center text-blue-600 font-semibold">
                {e.taskSummary.newTask}
              </h3>
              <h5 className="text-center text-yellow-600 font-semibold">
                {e.taskSummary.active}
              </h5>
              <h5 className="text-center text-green-600 font-semibold">
                {e.taskSummary.completed}
              </h5>
              <h5 className="text-center text-red-600 font-semibold">
                {e.taskSummary.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
