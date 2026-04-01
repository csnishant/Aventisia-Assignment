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
          <footer className="mt-12 py-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            {/* Left Section: Mobile pe center, Desktop pe left */}
            <div className="font-semibold text-secondary order-2 md:order-1">
              6 rows
            </div>

            {/* Right Section: Saare controls ko mobile pe wrap karne ke liye */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 order-1 md:order-2 w-full md:w-auto">
              {/* Rows per page & Page Info Group */}
              <div className="flex items-center gap-4">
                {/* Rows per page */}
                <div className="flex items-center gap-2 font-semibold text-secondary">
                  <span className="whitespace-nowrap">Rows per page</span>
                  <select className="border border-slate-200 rounded-md px-2 py-1 bg-white text-secondary focus:outline-none cursor-pointer">
                    <option>10</option>
                  </select>
                </div>

                {/* Page Info */}
                <div className="font-semibold text-secondary whitespace-nowrap">
                  Page 1 of 1
                </div>
              </div>

              {/* Pagination Buttons - Mobile pe centered */}
              <div className="flex gap-2">
                <button
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md text-secondary font-semibold disabled:opacity-30 hover:bg-slate-50 transition-colors"
                  disabled>
                  «
                </button>
                <button
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md text-secondary font-semibold disabled:opacity-30 hover:bg-slate-50 transition-colors"
                  disabled>
                  ‹
                </button>
                <button
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md text-secondary font-semibold disabled:opacity-30 hover:bg-slate-50 transition-colors"
                  disabled>
                  ›
                </button>
                <button
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-md text-secondary font-semibold disabled:opacity-30 hover:bg-slate-50 transition-colors"
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
