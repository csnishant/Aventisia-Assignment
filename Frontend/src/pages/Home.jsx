import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";

import Button from "../components/Button";
import { Search } from "lucide-react";
import TopSection from "../components/TopSection";

const Home = () => {
  // ✅ state inside component

  const cards = Array(6).fill({
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "14/07/2025",
  });

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Top Section */}
          <TopSection />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                date={card.date}
              />
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-12 py-4 flex justify-between items-center text-sm border-t border-slate-200">
            {/* Left */}
            <div className="font-semibold text-secondary">6 rows</div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              {/* Rows per page */}
              <div className="flex items-center gap-2 font-semibold text-secondary">
                <span>Rows per page</span>
                <select className="border border-slate-200 rounded-md px-2 py-1 bg-white text-secondary focus:outline-none">
                  <option>10</option>
                </select>
              </div>

              {/* Page Info */}
              <div className="font-semibold text-secondary">Page 1 of 1</div>

              {/* Pagination Buttons */}
              <div className="flex gap-2">
                <button
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md text-secondary font-semibold disabled:opacity-30"
                  disabled>
                  «
                </button>
                <button
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md text-secondary font-semibold disabled:opacity-30"
                  disabled>
                  ‹
                </button>
                <button
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md text-secondary font-semibold disabled:opacity-30"
                  disabled>
                  ›
                </button>
                <button
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md text-secondary font-semibold disabled:opacity-30"
                  disabled>
                  »
                </button>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;
