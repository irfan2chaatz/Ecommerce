import React, { useEffect, useState } from "react";
import ECOMM_INSTANCE from "../services/utility";
import SearchNav from "../components/SearchNav";
import CategoryList from "../components/CategoryList";
import { useOutlet, Outlet } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function HomePage() {
  let isOutlet = useOutlet();

  let [categoryList, setCategoryList] = useState([]);
  let [defaultProducts, setDefaultProducts] = useState(null);
  let [loadingCategories, setLoadingCategories] = useState(true);
  let [loadingProducts, setLoadingProducts] = useState(true);

  async function getAllCategoryList() {
    try {
      setLoadingCategories(true);
      let cl_res = await ECOMM_INSTANCE.get(`/products/category-list`);
      setCategoryList(cl_res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCategories(false);
    }
  }

  async function fetchAllProducts() {
    try {
      setLoadingProducts(true);
      let all_prod_res = await ECOMM_INSTANCE.get(`/products`);
      setDefaultProducts(all_prod_res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingProducts(false);
    }
  }

  useEffect(() => {
    getAllCategoryList();
    if (!isOutlet) {
      fetchAllProducts();
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <SearchNav />
      <div className="flex mt-5 px-4">
        <div className="w-1/4 p-4 bg-white shadow-md rounded-lg">
          {loadingCategories ? (
            <h3>Loading Categories...</h3>
          ) : categoryList?.length ? (
            <CategoryList categoryList={categoryList} />
          ) : (
            <h3>No categories available</h3>
          )}
        </div>
        <div className="flex-1 px-4">
          {isOutlet ? (
            <Outlet />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loadingProducts ? (
                <h3>Loading Products...</h3>
              ) : defaultProducts && defaultProducts.products?.length ? (
                defaultProducts.products.map((product, idx) => (
                  <ProductCard product={product} key={idx} />
                ))
              ) : (
                <h3>No products available</h3>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
