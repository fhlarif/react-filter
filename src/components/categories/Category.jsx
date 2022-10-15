import React from "react";

const Category = ({ categories, filterItems }) => {
  return (
    <span className="flex flex-wrap flex-1 gap-4 ">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterItems(category)}
            className="inline-flex items-center py-1 px-2 text-sm font-medium text-yellow-200 bg-yellow-100 rounded dark:bg-yellow-200 dark:text-yellow-800">
            {category}
          </button>
        );
      })}
    </span>
  );
};

export default Category;
