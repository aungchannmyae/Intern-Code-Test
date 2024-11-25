import React from "react";
import Container from "../../../components/Container";
import ProductCard from "./ProductCard";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductBody = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  // const products = Array.from({ length: 8 });
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </Container>
  );
};

export default ProductBody;
