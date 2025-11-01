import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchNav() {
  let [search, setSearch] = useState("");

  function onChangeHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="text-center mt-2">
      <input
        type="text"
        name="input_bar"
        onChange={onChangeHandler}
        value={search}
        className="border border-blue-500"
      />
      <button>
        <Link to={`/search/${search}`}>Search</Link>
      </button>
      <div className="border border-black"><Link to={`/carts`}>Go To Cart</Link></div>
    </div>
  );
}

export default SearchNav;
