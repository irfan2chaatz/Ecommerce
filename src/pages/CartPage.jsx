import React from "react";
import { useContext } from "react";
import globalContext from "../context/GlobalContext";

function CartPage() {
  let { cart, count } = useContext(globalContext);

  return (
    <>
      {cart.length
        ? cart.map((ele) => {
            return (
              <div>
                <h1>{ele.title}</h1>
                <img src={ele.images[0]}></img>
                <h3>{ele.price}</h3>
              </div>
            );
          })
        : "Empty Cart"}
    </>
  );
}

export default CartPage;
