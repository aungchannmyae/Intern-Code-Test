import React from 'react'
import { mutate } from 'swr';

const SortBtn = () => {
  
  const handleSort = () => {
    const sortedURL = import.meta.env.VITE_API_URL + "/products?_sort=price&_order=asc";
    mutate(sortedURL);
    // console.log("completed");
  };
  return (
    <div>
            <button
            onClick={handleSort}
              id="dropdownUsersButton"
              data-dropdown-toggle="dropdownUsers"
              data-dropdown-placement="bottom"
              className="text-black duration-300 hover:bg-gray-200 active:bg-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
              type="button"
            >
              sort{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
  )
}

export default SortBtn