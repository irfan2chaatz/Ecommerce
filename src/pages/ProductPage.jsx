import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ECOMM_INSTANCE from "../services/utility";
import ProductDetails from "../components/ProductDetails";

function ProductPage() {
  let { productID } = useParams();

  let [product, setProduct] = useState(null);

  async function fetchByProduct() {
    try {
      let url = `/products/${productID}`;
      let prod_res = await ECOMM_INSTANCE.get(url);
      setProduct(prod_res.data);
      console.log("fetch by product(product page) : ", prod_res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchByProduct();
  }, []);

  return <>{product ? <ProductDetails product={product} /> : "Loading..."}</>;
}

export default ProductPage;
