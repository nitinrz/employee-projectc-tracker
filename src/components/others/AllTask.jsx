import React from "react";

const AllTask = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        All Tasks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Design Landing Page
          </h3>
          <p className="text-gray-600 mb-4">
            Create a modern responsive landing page for our new product.
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-gray-500">👤 Nitin</span>
            <span className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-full">
              In Progress
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Develop API
          </h3>
          <p className="text-gray-600 mb-4">
            Build backend API for user authentication and task management.
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-gray-500">👤 Rahul</span>
            <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
              Completed
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Testing & QA
          </h3>
          <p className="text-gray-600 mb-4">
            Perform quality assurance and fix bugs before release.
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-gray-500">👤 Priya</span>
            <span className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-full">
              Pending
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Database Setup
          </h3>
          <p className="text-gray-600 mb-4">
            Configure MongoDB and connect it to the application server.
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-gray-500">👤 Arjun</span>
            <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
              Ongoing
            </span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Marketing Campaign
          </h3>
          <p className="text-gray-600 mb-4">
            Plan and design creatives for the upcoming digital campaign.
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-gray-500">👤 Sneha</span>
            <span className="px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
              Upcoming
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
