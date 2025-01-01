import React from "react";
import CollapsibleFilter from "../common/collapsible-filter-frame";

interface AvailabilityFilterProps {
  selected: string[];
  onChange: (status: string, checked: boolean) => void;
  onReset: () => void;
}

const AvailabilityFilter: React.FC<AvailabilityFilterProps> = ({
  selected,
  onChange,
  onReset,
}) => {
  const statuses = [
    "OFFERED",
    "NEW_ARRIVAL",
    "BEST_SELLER",
    "NORMAL",
    "IN_STOCK",
    "OUT_OF_STOCK",
  ];

  return (
    <CollapsibleFilter title="Availability" onReset={onReset}>
      <ul className="space-y-2">
        {statuses.map((status, index) => (
          <li key={index}>
            <label
              htmlFor={`availability-${status}`}
              className="inline-flex items-center gap-2"
            >
              <input
                type="checkbox"
                id={`availability-${status}`}
                className="size-5 rounded border-gray-300"
                checked={selected.includes(status)}
                onChange={(e) => onChange(status, e.target.checked)}
              />
              <span className="text-sm font-medium text-gray-700">
                {status}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </CollapsibleFilter>
  );
};

export default AvailabilityFilter;
