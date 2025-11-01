import React from 'react'

const CreateTask = () => {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Create a New Task
      </h2>

      {/* Task Title */}
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2">
          Task Title
        </label>
        <input
          type="text"
          placeholder="Enter task title"
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2">
          Description
        </label>
        <textarea
          placeholder="Enter task description"
          rows="4"
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>

      {/* Due Date */}
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2">
          Due Date
        </label>
        <input
          type="text"
          placeholder="Enter due date (e.g. 2025-11-10)"
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Assigned To */}
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2">
          Assign To
        </label>
        <input
          type="text"
          placeholder="Enter assignee name"
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Category */}
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2">
          Category
        </label>
        <input
          type="text"
          placeholder="Enter category (e.g. Design, Development, etc.)"
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Button */}
      <div className="pt-2">
        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl py-3 shadow-md hover:opacity-90 transition-all duration-300">
          Create Task
        </button>
      </div>
    </div>
  );
};
  

export default CreateTask