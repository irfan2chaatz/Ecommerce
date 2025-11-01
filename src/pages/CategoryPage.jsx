import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ECOMM_INSTANCE from "../services/utility";
import ProductCard from "../components/ProductCard";

function CategoryPage() {
  let { categoryID } = useParams();

  let [categoryProducts, setCategoryProducts] = useState(null);

  async function fetchCategoryProducts() {
    try {
      let cat_url = `/products/category/${categoryID}`;
      let cat_res = await ECOMM_INSTANCE.get(cat_url);
      setCategoryProducts(cat_res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategoryProducts();
  }, [categoryID]);

  return (
    <>
      {categoryProducts?.products?.length
        ? categoryProducts.products.map((product) => (
            <ProductCard product={product} />
          ))
        : "Loading.."}
    </>
  );
}

export default CategoryPage;
