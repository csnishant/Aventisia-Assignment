import { MoreVertical } from "lucide-react";

export const Card = ({ title, description, date }) => (
  
<div className="bg-white border border-border-light rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
  
    <div className="flex justify-between items-start mb-4">
      {/* Secondary color for headings */}
      <h3 className="font-bold text-secondary text-[15px] tracking-tight">
        {title}
      </h3>
      <button className="text-slate-400 hover:text-primary transition-colors">
        ⋮
      </button>
    </div>
    <p className="text-[13px] text-slate-500 leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <div className="pt-4 border-t border-slate-50">
      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
        Created On: <span className="font-medium lowercase">{date}</span>
      </p>
    </div>
  </div>
);
export default Card;
