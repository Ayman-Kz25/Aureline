import { createContext } from "react";
import {
  cartItems,
  catalog,
  collection,
  letter,
  products,
  slide,
} from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const value = {
    products,
    collection,
    slide,
    letter,
    catalog,
    currency,
    delivery_fee,
    cartItems,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
