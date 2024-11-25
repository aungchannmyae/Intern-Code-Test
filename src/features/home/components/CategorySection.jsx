import React from "react";
import Container from "../../../components/Container";
import CategoryBtn from "./CategoryBtn";
import useSWR, { mutate } from "swr";
import SortBtn from "./SortBtn";

const fetcher = (url) => fetch(url).then((res) => res.json());
const CategorySection = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/categories",
    fetcher
  );
  // console.log(typeof(data));

   if (isLoading) {
    return <Container>Loading...</Container>;
  }

  return (
    <>
      <Container>
        <div className=" flex justify-between items-center border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
            
          {
            data.map((category) => (
              <CategoryBtn  category={category} key={Math.random} />
            ))
          }
            
            <li>
              <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                Furniture
              </a>
            </li>
          </ul>
          
          <SortBtn />
        </div>
      </Container>
    </>
  );
};

export default CategorySection;
