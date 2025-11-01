import React from "react";

const TaskList = () => {
  return (
    <div className="flex overflow-x-auto space-x-6 p-6 bg-gray-100 rounded-3xl scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      
      {/* Task Card 1 */}
      <div className="w-[30%] h-[320px] bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 flex-shrink-0 hover:-translate-y-2">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-white/30 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            High
          </span>
          <span className="text-white/80 text-sm font-medium">20 Feb 2024</span>
        </div>
        <h2 className="text-2xl font-bold mb-3">Make a YouTube video</h2>
        <p className="text-white/90 text-sm leading-relaxed">
          Plan, record, and edit a new video for your channel. Focus on improving
          storytelling and pacing.
        </p>
      </div>

      {/* Task Card 2 */}
      <div className="w-[30%]  h-[320px] bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 flex-shrink-0 hover:-translate-y-2">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-white/30 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            Medium
          </span>
          <span className="text-white/80 text-sm font-medium">22 Feb 2024</span>
        </div>
        <h2 className="text-2xl font-bold mb-3">Edit Instagram reel</h2>
        <p className="text-white/90 text-sm leading-relaxed">
          Trim and enhance your latest clip for social media posting.
        </p>
      </div>

      {/* Task Card 3 */}
      <div className="w-[30%]  h-[320px] bg-gradient-to-br from-emerald-400 to-green-600 text-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 flex-shrink-0 hover:-translate-y-2">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-white/30 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            Low
          </span>
          <span className="text-white/80 text-sm font-medium">24 Feb 2024</span>
        </div>
        <h2 className="text-2xl font-bold mb-3">Organize workspace</h2>
        <p className="text-white/90 text-sm leading-relaxed">
          Declutter your desk and organize files for a fresh workflow.
        </p>
      </div>

      {/* Task Card 4 */}
      <div className="w-[30%]  h-[320px] bg-gradient-to-br from-sky-400 to-blue-600 text-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 flex-shrink-0 hover:-translate-y-2">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-white/30 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            Medium
          </span>
          <span className="text-white/80 text-sm font-medium">25 Feb 2024</span>
        </div>
        <h2 className="text-2xl font-bold mb-3">Write blog article</h2>
        <p className="text-white/90 text-sm leading-relaxed">
          Draft and polish your new post on productivity hacks.
        </p>
      </div>

      {/* Task Card 5 */}
      <div className="w-[30%]  h-[320px] bg-gradient-to-br from-amber-400 to-orange-600 text-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 flex-shrink-0 hover:-translate-y-2">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-white/30 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            High
          </span>
          <span className="text-white/80 text-sm font-medium">28 Feb 2024</span>
        </div>
        <h2 className="text-2xl font-bold mb-3">Client meeting prep</h2>
        <p className="text-white/90 text-sm leading-relaxed">
          Gather reports, design mockups, and presentation materials.
        </p>
      </div>

    </div>
  );
};

export default TaskList;
