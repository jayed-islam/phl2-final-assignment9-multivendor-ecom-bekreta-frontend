import React from "react";
import CollapsibleFilter from "../common/collapsible-filter-frame";

interface RatingFilterProps {
  selectedRatings: string[];
  onChange: (rating: string, checked: boolean) => void;
  onReset: () => void;
}

const RatingFilter: React.FC<RatingFilterProps> = ({
  selectedRatings,
  onChange,
  onReset,
}) => {
  const ratings = ["5", "4", "3", "2", "1"];

  return (
    <CollapsibleFilter title="Rating" onReset={onReset}>
      <ul className="space-y-2">
        <li>
          <label
            htmlFor="rating-all"
            className="inline-flex items-center gap-2"
          >
            <input
              type="radio"
              id="rating-all"
              name="rating"
              className="size-5 rounded border-gray-300"
              checked={selectedRatings.length === 0}
              onChange={() => onReset()}
            />
            <span className="text-sm font-medium text-gray-700">
              Any Rating
            </span>
          </label>
        </li>
        {ratings.map((rating) => (
          <li key={rating}>
            <label
              htmlFor={`rating-${rating}`}
              className="inline-flex items-center gap-2"
            >
              <input
                type="checkbox"
                id={`rating-${rating}`}
                className="size-5 rounded border-gray-300"
                checked={selectedRatings.includes(rating)}
                onChange={(e) => onChange(rating, e.target.checked)}
              />
              <span className="text-sm font-medium text-gray-700">
                {rating} Star
              </span>
            </label>
          </li>
        ))}
      </ul>
    </CollapsibleFilter>
  );
};

export default RatingFilter;
