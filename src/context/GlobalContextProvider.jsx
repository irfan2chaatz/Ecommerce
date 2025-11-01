import React, { useReducer } from "react";
import globalContext from "./GlobalContext";

function GlobalContextProvider({ children }) {
  let initialValue = { cart: [], count: 0 };

  function reducer(state, action) {
    switch (action.type) {
        case "add":
            return {cart: [...state.cart, action.payload], count: state.count + 1}
        case "remove":
            let newCart = state.cart.filter((ele)=> ele.id != action.payload);
            return {cart: newCart, count: state.count - 1}
        default:
            return state;
    }
  }

  let [state, dispatch] = useReducer(reducer, initialValue);

  console.log("state : ", state);

  return (
    <globalContext.Provider value={{isDispatch: dispatch, cart: state.cart, count: state.count}}>
      {children}
    </globalContext.Provider>
  );
}

export default GlobalContextProvider;
