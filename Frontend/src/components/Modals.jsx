import React from "react";
import { X } from "lucide-react";

const CreateKnowledgeDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity z-[60] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Create New Knowledge Base
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1">
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-160px)]">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Name (Cannot be edited later)
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Description"
              className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none"
            />
          </div>

          {/* Vector Store Dropdown */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Vector Store<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-indigo-500 outline-none appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em]">
              <option>Qdrant</option>
              <option>Pinecone</option>
            </select>
          </div>

          {/* Embedding Model Dropdown */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              LLM Embedding Model<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-indigo-500 outline-none">
              <option>text-embedding-ada-002</option>
              <option>text-embedding-3-small</option>
            </select>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-slate-100 bg-white">
          <button
            className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
            onClick={() => {
              // Add creation logic here
              onClose();
            }}>
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateKnowledgeDrawer;
