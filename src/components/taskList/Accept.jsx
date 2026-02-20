import React from 'react'

const Accept = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-[320px] h-[280px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col justify-between">
        
        {/* Top Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="bg-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
              {data.category}
            </span>
            <span className="text-white/80 text-sm font-medium">
              {data.taskDate}
            </span>
          </div>

          <h2 className="text-2xl font-semibold mb-2 leading-tight">
            {data.taskTitle}
          </h2>
          <p className="text-white/90 text-sm leading-relaxed">
{data.taskDescription}
          </p>
        </div>

        {/* Buttons */}
             <div className="flex justify-between mt-6">
          <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-3 rounded-lg shadow-md transition-all duration-300 ">
            Mark as Completed
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-3 rounded-lg shadow-md transition-all duration-300">
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  )
}

export default Accept