import React from "react";
import CategorySection from "./CategorySection";
import ProductBody from "./ProductBody";
import useSWR, { mutate } from "swr";


const HomePageSection = () => {

  return (
    <>
      <CategorySection />
      <ProductBody />
    </>
  );
};

export default HomePageSection;
