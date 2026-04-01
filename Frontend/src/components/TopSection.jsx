import React, { useState } from "react";
import { Search } from "lucide-react";
import Button from "./Button";
import Modals from "./Modals";

const TopSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
      {/* Title - Centered on mobile, left-aligned on tablet+ */}
      <h1 className="text-2xl font-bold text-[#1E1B4B] text-center sm:text-left">
        Knowledge Base
      </h1>

      {/* Controls Container */}
      <div className="flex flex-col items-center gap-3 w-full sm:flex-row sm:w-auto">
        {/* Search Input - Full width on mobile */}
        <div className="relative w-full sm:w-auto">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#4F46E5] outline-none"
          />
        </div>

        {/* Create Button - Full width on mobile */}
        <div className="w-full sm:w-auto">
          <Button
            className="w-full sm:w-auto bg-[#4F46E5] text-white px-6 py-2 rounded-lg hover:bg-[#3B3CCF] transition-colors"
            label="Create New"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* Modal */}
      <Modals isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TopSection;
