import React, { useState } from "react";
import {
  Users,
  Cpu,
  Library,
  Send,
  Monitor,
  List,
  Zap,
  PlayCircle,
  Settings,
  ShieldCheck,
  BookOpen,
  Key,
  LayoutGrid,
  Puzzle,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const SidebarItem = ({ icon: Icon, label, active = false }) => (
    <div
      className={`flex items-center h-10 px-4 py-2.5 cursor-pointer transition-all duration-200 relative group ${
        active
          ? "bg-indigo-50 text-indigo-700"
          : "text-slate-500 hover:bg-slate-50"
      }`}>
      <div className="flex items-center justify-center min-w-[24px]">
        <Icon size={18} />
      </div>

      {/* Label sirf tab dikhega jab sidebar open ho */}
      {isOpen && (
        <span className="ml-3 text-sm font-medium whitespace-nowrap opacity-100 transition-opacity duration-300">
          {label}
        </span>
      )}

      {/* Active Indicator Line (Right side) */}
      {active && (
        <div className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-l-md" />
      )}
    </div>
  );

  const SectionLabel = ({ children }) => (
    <div className="h-8 flex items-center px-4 mt-4">
      {isOpen ? (
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {children}
        </p>
      ) : (
        <div className="h-[1px] w-full bg-slate-100" />
      )}
    </div>
  );

  return (
    <div
      className="flex flex-col bg-white border-r border-slate-200 transition-all duration-300 relative z-20"
      style={{
        width: isOpen ? "260px" : "68px",
        height: "calc(100vh - 64px)", // Header height (h-16) ko minus kiya
      }}>
      {/* --- Toggle Button (Circular Icon) --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3.5 top-6 bg-white border border-slate-200 rounded-full p-1.5 shadow-md text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all z-50 flex items-center justify-center">
        {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
      </button>

      {/* --- Sidebar Navigation --- */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 no-scrollbar">
        <SectionLabel>My Projects</SectionLabel>
        <SidebarItem icon={Users} label="Agents" />
        <SidebarItem icon={Cpu} label="AI Models" />
        <SidebarItem icon={Library} label="Library" />

        <SectionLabel>Orchestrator</SectionLabel>
        <SidebarItem icon={Send} label="Published" />
        <SidebarItem icon={Monitor} label="Machines" />
        <SidebarItem icon={List} label="Queues" />
        <SidebarItem icon={Zap} label="Triggers" />
        <SidebarItem icon={PlayCircle} label="Jobs" />
        <SidebarItem icon={Settings} label="Executions" />
        <SidebarItem icon={ShieldCheck} label="Vault" />
        <SidebarItem icon={BookOpen} label="Knowledge Base" active />
        <SidebarItem icon={Key} label="Key Store" />

        <SectionLabel>Admin</SectionLabel>
        <SidebarItem icon={LayoutGrid} label="Tenant" />
        <SidebarItem icon={Puzzle} label="Integrations" />
      </nav>
    </div>
  );
};

export default Sidebar;
