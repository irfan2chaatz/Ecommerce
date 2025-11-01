import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ECOMM_INSTANCE from "../services/utility";
import ProductCard from "../components/ProductCard";

function SearchPage() {
  let { searchItem } = useParams();
  let [searchProducts, setSearchProducts] = useState(null);

  async function searchByItem() {
    try {
      let search_res = await ECOMM_INSTANCE.get(
        `/products/search?q=${searchItem}`
      );
      setSearchProducts(search_res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchByItem();
  }, [searchItem]);

  return (
    <>
      {searchProducts &&
        searchProducts.products.map((product) => (
          <ProductCard product={product} />
        ))}
    </>
  );
}

export default SearchPage;
