import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../Product/Product";
import style from "./style";

export const ProductsContainer = () => {
  const { searchElem } = useSelector((state) => state.appReducer);

  return (
    <div id={style.container}>
      {searchElem.map((product) => {
        return <Product product={product} key={product._id} />;
      })}
    </div>
  );
};
