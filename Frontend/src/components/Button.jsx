import { Plus } from "lucide-react";

const Button = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="bg-[#4f46e5] hover:bg-[#3b3ccf] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm">
    <Plus size={18} className="mr-2" />
    {label}
  </button>
);

export default Button;