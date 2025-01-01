import React from "react";
import CollapsibleFilter from "../common/collapsible-filter-frame";

interface PriceFilterProps {
  minPrice: string;
  maxPrice: string;
  onChange: (
    field: "minPrice" | "maxPrice",
    value: React.SetStateAction<string>
  ) => void;
  onReset: () => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  onChange,
  onReset,
}) => {
  return (
    <CollapsibleFilter title="Price Range" onReset={onReset}>
      <div className="flex justify-between gap-4">
        <label id="min-price" className="flex items-center gap-2">
          <span className="text-sm text-gray-600">৳</span>
          <input
            type="number"
            id="min-price"
            placeholder="From"
            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-2 border appearance-none"
            value={minPrice}
            min={0}
            onChange={(e) => onChange("minPrice", e.target.value)}
          />
        </label>
        <label htmlFor="max-price" className="flex items-center gap-2">
          <span className="text-sm text-gray-600">৳</span>
          <input
            type="number"
            id="max-price"
            placeholder="To"
            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-2 border appearance-none"
            value={maxPrice}
            onChange={(e) => onChange("maxPrice", e.target.value)}
          />
        </label>
      </div>
    </CollapsibleFilter>
  );
};

export default PriceFilter;
