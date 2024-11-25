import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const CategoryBtn = ({category}) => {
  
  const [selectCategory, setSelectCategory] = useState(""); // Selected category

  const { data, error, isLoading, mutate } = useSWR(
    selectCategory ? import.meta.env.VITE_API_URL+`products?category=${selectCategory}` : import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  const handleCategoryChange = (newCategory) => {
    setSelectCategory(newCategory);
    mutate(); // Re-fetch data for the selected category
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <li className="me-2">
      <a
        aria-current="page"
        className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
      >
        {category}
      </a>
    </li>
  );
};

export default CategoryBtn;
