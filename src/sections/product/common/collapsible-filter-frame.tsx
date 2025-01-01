import React, { useState } from "react";

interface CollapsibleFilterProps {
  title: string;
  children: React.ReactNode;
  onReset?: () => void;
}

const CollapsibleFilter: React.FC<CollapsibleFilterProps> = ({
  title,
  children,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded border border-gray-300">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
      >
        <span className="text-sm font-medium">{title}</span>
        <span className={`transition ${isOpen ? "rotate-180" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="border-t border-gray-200 bg-white">
          {onReset && (
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">Selected:</span>
              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
                onClick={onReset}
              >
                Reset
              </button>
            </header>
          )}
          <div className="p-4 border-t">{children}</div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleFilter;
