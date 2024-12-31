import Link from "next/link";
import React from "react";

const DesktopMenuItem = ({ item }) => {
  return (
    <div className="relative group">
      <button className="py-2 px-4 hover:bg-gray-700 text-left flex items-center">
        {item.link ? (
          <Link href={item.link} className="hover:underline">
            {item.title}
          </Link>
        ) : (
          item.title
        )}
        {item.children && <span className="ml-2">▸</span>}
      </button>
      {item.children && (
        <div className="absolute top-full left-0 mt-2 bg-gray-900 text-white rounded-lg shadow-lg p-4 group-hover:block hidden w-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.children.map((child, idx) => (
              <DesktopMenuItem key={idx} item={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default DesktopMenuItem;
