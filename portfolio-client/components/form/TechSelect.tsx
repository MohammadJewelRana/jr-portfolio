import { techOptions } from "@/app/constant/techOptions";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export const TechSelect = ({ value = [], onChange }: any) => {
  const [open, setOpen] = useState(false);

  const toggleTech = (tech: string) => {
    if (value.includes(tech)) {
      onChange(value.filter((t: string) => t !== tech));
    } else {
      onChange([...value, tech]);
    }
  };

  const removeTech = (tech: string, e: any) => {
    e.stopPropagation(); // prevent dropdown toggle
    onChange(value.filter((t: string) => t !== tech));
  };

  return (
    <div className="relative">
      {/* Input Box */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full bg-[#0f172a] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white cursor-pointer flex items-center justify-between"
      >
        {/* Chips */}
        <div className="flex flex-wrap gap-2 flex-1">
          {value.length > 0 ? (
            value.map((tech: string) => (
              <span
                key={tech}
                className="flex items-center gap-1 bg-green-600/20 text-green-400 px-2 py-1 rounded-md text-xs"
              >
                {tech}
                <button
                  type="button"
                  onClick={(e) => removeTech(tech, e)}
                  className="hover:text-red-400"
                >
                  <RxCross2 size={12} />
                </button>
              </span>
            ))
          ) : (
            <span className="text-gray-400">Select technologies</span>
          )}
        </div>

        {/* Dropdown Icon */}
        <FaChevronDown
          size={14}
          className={`text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-[#0f172a] border border-gray-600 rounded-xl max-h-60 overflow-y-auto shadow-lg">
          {techOptions.map((tech) => (
            <div
              key={tech}
              onClick={() => toggleTech(tech)}
              className="px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer flex justify-between"
            >
              {tech}
              {value.includes(tech) && "✔"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
