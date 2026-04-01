import React from "react";
import { X } from "lucide-react";

const CreateKnowledgeDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-[60] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-semibold text-secondary">
              Create New Knowledge Base
            </h2>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-secondary p-1 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-160px)]">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-secondary mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-secondary mb-1.5">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Enter description"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none resize-none transition"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label className="block text-sm font-semibold text-secondary mb-1.5">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none">
              <option>Qdrant</option>
              <option>Pinecone</option>
            </select>
          </div>

          {/* Embedding */}
          <div>
            <label className="block text-sm font-semibold text-secondary mb-1.5">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none">
              <option>text-embedding-ada-002</option>
              <option>text-embedding-3-small</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-80 w-30 p-6 border-t border-slate-100 bg-white">
          <button
            onClick={onClose}
            className="w-full bg-primary hover:bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-semibold transition shadow-sm">
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateKnowledgeDrawer;
