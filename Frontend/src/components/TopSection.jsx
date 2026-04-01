import React, { useState } from "react";
import { Search } from "lucide-react";
import Button from "./Button";
import Modals from "./Modals"; // aapka modal component

const TopSection = () => {
  // ✅ Internal state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
      <h1 className="text-2xl font-bold text-[#1E1B4B]">Knowledge Base</h1>

      <div className="flex items-center gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search
            className="absolute left-3 top-2.5 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-64 bg-white focus:ring-2 focus:ring-[#4F46E5] outline-none"
          />
        </div>

        {/* Create Button */}
        <Button
          className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg hover:bg-[#3B3CCF]"
          label="Create New"
          onClick={() => setIsModalOpen(true)} // ✅ Open modal internally
        />
      </div>

      {/* Modal */}
      <Modals
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // ✅ Close modal internally
      />
    </div>
  );
};

export default TopSection;
