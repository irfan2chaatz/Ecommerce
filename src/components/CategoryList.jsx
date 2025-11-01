import React from "react";
import { Link } from "react-router-dom";

function CategoryList({ categoryList }) {
  return (
    <>
      {categoryList.map((ele, idx) => {
        return (
          <div key={idx}>
            <Link to={`/category/${ele}`}>{ele}</Link>
          </div>
        );
      })}
    </>
  );
}

export default CategoryList;
