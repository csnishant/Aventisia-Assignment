import React from "react";
import { Search, Bell, LayoutGrid, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-[#1a164d] flex items-center justify-between px-4 md:px-6 text-white w-full shadow-md sticky top-0 z-50">
      {/* LEFT SIDE: Logo and Workspace Selector */}
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        {/* Mobile Menu Toggle (Optional addition for mobile UX) */}
   

        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg shrink-0">
            <LayoutGrid className="text-white" size={18} md={20} />
          </div>
          {/* Hide text on very small screens to save space */}
          <span className="font-bold text-lg md:text-xl tracking-tight hidden sm:block">
            Worcspace
          </span>
        </div>

        <div className="hidden xs:flex items-center px-2 py-1 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-[10px] md:text-[11px] rounded border border-white/10">
          Worcspace 1 <span className="ml-2 opacity-60 text-[8px]">▼</span>
        </div>
      </div>

      {/* CENTER: Search Bar - Becomes hidden or icon-only on mobile */}
      <div className="relative w-full max-w-[400px] mx-2 md:mx-4 hidden md:block">
        <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
          <Search size={16} />
        </span>
        <input
          type="text"
          className="w-full bg-white/10 border border-white/5 rounded-md py-1.5 pl-10 pr-10 text-sm focus:ring-1 focus:ring-indigo-500 placeholder-slate-400 outline-none transition-all focus:bg-white/15"
          placeholder="Search..."
        />
        <span className="absolute inset-y-0 right-3 flex items-center">
          <kbd className="hidden lg:inline-block text-[10px] text-slate-400 font-sans border border-slate-500/30 px-1.5 rounded bg-white/5">
            Check ⌘K
          </kbd>
        </span>
      </div>

      {/* RIGHT SIDE: Icons & Profile */}
      <div className="flex items-center space-x-3 md:space-x-5 flex-shrink-0">
        {/* Search Icon for Mobile (since main bar is hidden) */}
        <button className="md:hidden text-slate-300">
          <Search size={20} />
        </button>

        <button className="relative text-slate-300 hover:text-white transition-colors">
          <Bell size={20} />
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
