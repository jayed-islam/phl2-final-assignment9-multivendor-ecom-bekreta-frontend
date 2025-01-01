import React from "react";
import CollapsibleFilter from "../common/collapsible-filter-frame";
import { useGetCategoriesQuery } from "@/redux/reducers/category/categoryApi";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
  onReset: () => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selected,
  onChange,
  onReset,
}) => {
  const { data, isFetching } = useGetCategoriesQuery();
  //   const getCategoryName = (id: string) => {
  //     if (id === "") return "All Categories";
  //     return (
  //       data?.data?.find((item) => item._id === id)?.name || "Unknown Category"
  //     );
  //   };
  return (
    <CollapsibleFilter title="Category" onReset={onReset}>
      <ul className="space-y-2">
        <li>
          <label
            htmlFor="category-all"
            className="inline-flex items-center gap-2"
          >
            <input
              type="radio"
              id="category-all"
              name="category"
              className="size-5 rounded border-gray-300"
              checked={selected === ""}
              onChange={() => onChange("")}
            />
            <span className="text-sm font-medium text-gray-700">
              All Categories
            </span>
          </label>
        </li>
        {isFetching ? (
          <div></div>
        ) : (
          data?.data?.map((category) => (
            <li key={category._id}>
              <label
                htmlFor={`category-${category._id}`}
                className="inline-flex items-center gap-2"
              >
                <input
                  type="radio"
                  id={`category-${category._id}`}
                  name="category"
                  className="size-5 rounded border-gray-300"
                  checked={selected === category._id}
                  onChange={() => onChange(category._id)}
                />
                <span className="text-sm font-medium text-gray-700">
                  {category.name}
                </span>
              </label>
            </li>
          ))
        )}
      </ul>
    </CollapsibleFilter>
  );
};

export default CategoryFilter;
