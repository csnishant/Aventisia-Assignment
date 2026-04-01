import React from "react";
import { Search, Bell, LayoutGrid } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-[#1a164d] flex items-center justify-between px-6 text-white w-full shadow-md">
      {/* LEFT SIDE: Logo and Workspace Selector */}
      <div className="flex items-center space-x-4 min-w-[260px]">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <LayoutGrid className="text-white" size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">Worcspace</span>
        </div>

        <div className="flex items-center px-2 py-1 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-[11px] rounded border border-white/10">
          Worcspace 1 <span className="ml-2 opacity-60 text-[8px]">▼</span>
        </div>
      </div>

      {/* CENTER: Search Bar */}
      <div className="relative w-full max-w-[500px] mx-4">
        <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
          <Search size={16} />
        </span>
        <input
          type="text"
          className="w-full bg-white/10 border border-white/5 rounded-md py-1.5 pl-10 pr-10 text-sm focus:ring-1 focus:ring-indigo-500 placeholder-slate-400 outline-none transition-all focus:bg-white/15"
          placeholder="Search..."
        />
        <span className="absolute inset-y-0 right-3 flex items-center">
          <kbd className="text-[10px] text-slate-400 font-sans border border-slate-500/30 px-1.5 rounded bg-white/5">
            ⌘K
          </kbd>
        </span>
      </div>

      {/* RIGHT SIDE: Icons & Profile */}
      <div className="flex items-center space-x-5 min-w-[120px] justify-end">
        <button className="relative text-slate-300 hover:text-white transition-colors">
          <Bell size={20} />
          {/* Optional: Notification Dot */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#1a164d]"></span>
        </button>

        <div className="flex items-center cursor-pointer group">
          <div className="w-8 h-8 bg-[#4f46e5] rounded-full flex items-center justify-center text-xs font-bold tracking-wider border border-white/20 shadow-sm group-hover:border-white/50 transition-all">
            GK
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
